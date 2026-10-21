import { RenderMode, ServerRoute } from '@angular/ssr';
import { LOCALES } from './i18n/locale';
import { SECTIONS } from './sections';
import { projectRouteParams } from './projects';

const getPrerenderParams = async () => LOCALES.map((lang) => ({ lang }));

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: ':lang', renderMode: RenderMode.Prerender, getPrerenderParams },
  ...SECTIONS.map((section) => ({
    path: `:lang/${section}`,
    renderMode: RenderMode.Prerender as const,
    getPrerenderParams,
  })),
  {
    path: ':lang/projects/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => projectRouteParams(),
  },
  // Copied to 404.html files by scripts/postbuild.mjs.
  { path: ':lang/404', renderMode: RenderMode.Prerender, getPrerenderParams },
  { path: '**', renderMode: RenderMode.Client },
];
