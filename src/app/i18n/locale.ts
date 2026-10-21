export const LOCALES = ['pt', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string | undefined): value is Locale {
  return (LOCALES as readonly string[]).includes(value ?? '');
}

export function switchLocalePath(path: string, to: Locale): string {
  const [first, ...rest] = path.split(/[?#]/)[0].split('/').filter(Boolean);
  return isLocale(first) && rest.length ? `/${to}/${rest.join('/')}` : `/${to}/`;
}
