import { Routes } from '@angular/router';
import { isLocale } from './i18n/locale';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { SectionPage } from './pages/section/section';
import { SECTIONS } from './sections';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pt' },
  {
    path: ':lang',
    canMatch: [(_route: unknown, segments: { path: string }[]) => isLocale(segments[0]?.path)],
    children: [
      { path: '', component: Home },
      ...SECTIONS.map((section) => ({ path: section, component: SectionPage, data: { section } })),
      { path: '404', component: NotFound },
      { path: '**', component: NotFound },
    ],
  },
  { path: '**', component: NotFound },
];
