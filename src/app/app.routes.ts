import { Routes } from '@angular/router';
import { isLocale } from './i18n/locale';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pt' },
  {
    path: ':lang',
    canMatch: [(_route: unknown, segments: { path: string }[]) => isLocale(segments[0]?.path)],
    children: [
      { path: '', component: Home },
      { path: '404', component: NotFound },
      { path: '**', component: NotFound },
    ],
  },
  { path: '**', component: NotFound },
];
