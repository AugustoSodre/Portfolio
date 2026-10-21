import { RenderMode, ServerRoute } from '@angular/ssr';
import { LOCALES } from './i18n/locale';

const getPrerenderParams = async () => LOCALES.map((lang) => ({ lang }));

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: ':lang', renderMode: RenderMode.Prerender, getPrerenderParams },
  // Copied to 404.html files by scripts/postbuild.mjs.
  { path: ':lang/404', renderMode: RenderMode.Prerender, getPrerenderParams },
  { path: '**', renderMode: RenderMode.Client },
];
