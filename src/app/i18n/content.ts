import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Locale, isLocale } from './locale';
import { Section } from '../sections';
import { ProjectSlug } from '../projects';
import { pt } from './pt';
import { en } from './en';

export interface Role {
  period: string;
  title: string;
  org: string;
  mode?: string;
  highlight?: string;
  points: string[];
}

export interface ProjectText {
  tagline: string;
  summary: string;
  myPart: string[];
  limits: string[];
  team: { name: string; role: string; href?: string }[];
}

export interface SiteContent {
  meta: { title: string; description: string };
  name: string;
  role: string;
  links: { linkedin: string; github: string };
  langSwitch: { label: string; target: Locale };
  resume: { label: string; href: string };
  /** Screen-reader note on links that open a new tab. */
  newTab: string;
  notFound: { title: string; body: string; home: string };
  nav: Record<Section, string>;
  sections: Record<Section, { title: string; description: string }>;
  menu: { label: string; back: string };
  experience: {
    roles: Role[];
    educationHeading: string;
    education: { course: string; school: string; period: string };
  };
  about: {
    photoAlt: string;
    story: string[];
    certsHeading: string;
    certs: { name: string; year?: string }[];
    certsAll: { label: string; href: string };
    gamesHeading: string;
    games: string;
    gamesLink: { label: string; href: string };
  };
  projects: Record<ProjectSlug, ProjectText>;
  projectsUi: {
    howItWorks: string;
    myPart: string;
    stack: string;
    links: string;
    limits: string;
    team: string;
    open: string;
    all: string;
  };
  contact: {
    intro: string;
    location: string;
    links: { label: string; handle: string; href: string }[];
  };
}

export const CONTENT: Record<Locale, SiteContent> = { pt, en };

/** Locale of the current route, falling back to pt for paths without one. */
export function routeLocale(): Locale {
  const lang = inject(ActivatedRoute).snapshot.paramMap.get('lang') ?? undefined;
  return isLocale(lang) ? lang : 'pt';
}
