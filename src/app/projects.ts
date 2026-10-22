import { LOCALES } from './i18n/locale';

export const PROJECTS = [
  {
    slug: 'linketinder',
    name: 'Linketinder',
    stack: ['Groovy', 'PostgreSQL', 'Spock', 'H2', 'Gradle', 'TypeScript', 'Vite'],
    links: [{ label: 'Linketinder', href: 'https://github.com/AugustoSodre/Linketinder' }],
  },
  {
    slug: 'automatch',
    name: 'AutoMatch',
    stack: ['Angular', 'RxJS', 'SCSS', 'Node.js', 'Express', 'Prisma', 'PyTorch', 'FastAPI'],
    links: [
      { label: 'AutoMatch', href: 'https://github.com/AugustoSodre/AutoMatch' },
      { label: 'AutoMatch-Front', href: 'https://github.com/AugustoSodre/AutoMatch-Front' },
      { label: 'AutoMatch-Back', href: 'https://github.com/AugustoSodre/AutoMatch-Back' },
      {
        label: 'Deep-Learning-Match-Automatch',
        href: 'https://github.com/AugustoSodre/Deep-Learning-Match-Automatch',
      },
    ],
  },
  {
    slug: 'web-crawler',
    name: 'Web-Crawler',
    stack: ['Groovy', 'Jsoup', 'HTTPBuilder-NG', 'OpenCSV', 'Gradle'],
    links: [{ label: 'Web-Crawler', href: 'https://github.com/AugustoSodre/Web-Crawler' }],
  },
  {
    slug: 'gestor-eventos',
    name: 'Gestor de Eventos',
    stack: ['Python', 'Django', 'Django REST Framework', 'SQLite', 'fpdf2', 'HTML/CSS'],
    links: [{ label: 'gestor-eventos', href: 'https://github.com/awangelo/gestor-eventos' }],
  },
] as const;

export type ProjectSlug = (typeof PROJECTS)[number]['slug'];
export type Project = (typeof PROJECTS)[number];

export function isProjectSlug(value: unknown): value is ProjectSlug {
  return PROJECTS.some((p) => p.slug === value);
}

export function projectRouteParams() {
  return LOCALES.flatMap((lang) => PROJECTS.map(({ slug }) => ({ lang, slug })));
}
