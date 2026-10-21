import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Locale, isLocale } from './locale';
import { Section } from '../sections';
import { pt } from './pt';
import { en } from './en';

export interface SiteContent {
  meta: { title: string; description: string };
  name: string;
  role: string;
  links: { linkedin: string; github: string };
  langSwitch: { label: string; target: Locale };
  notFound: { title: string; body: string; home: string };
  nav: Record<Section, string>;
  sections: Record<Section, { title: string; description: string }>;
  menu: { label: string; back: string };
}

export const CONTENT: Record<Locale, SiteContent> = { pt, en };

/** Locale of the current route, falling back to pt for paths without one. */
export function routeLocale(): Locale {
  const lang = inject(ActivatedRoute).snapshot.paramMap.get('lang') ?? undefined;
  return isLocale(lang) ? lang : 'pt';
}
