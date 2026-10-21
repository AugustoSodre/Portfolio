import { isLocale, switchLocalePath } from './locale';

describe('isLocale', () => {
  it('accepts only pt and en', () => {
    expect(isLocale('pt')).toBe(true);
    expect(isLocale('en')).toBe(true);
    expect(isLocale('es')).toBe(false);
    expect(isLocale('')).toBe(false);
    expect(isLocale(undefined)).toBe(false);
  });
});

describe('switchLocalePath', () => {
  it('swaps the locale and keeps the rest of the path', () => {
    expect(switchLocalePath('/pt/projetos/automatch', 'en')).toBe('/en/projetos/automatch');
    expect(switchLocalePath('/en/', 'pt')).toBe('/pt/');
    expect(switchLocalePath('/en', 'pt')).toBe('/pt/');
  });

  it('drops query and fragment', () => {
    expect(switchLocalePath('/pt/?x=1#top', 'en')).toBe('/en/');
  });

  it('sends a path without a locale to the target home', () => {
    expect(switchLocalePath('/projetos', 'en')).toBe('/en/');
    expect(switchLocalePath('/', 'pt')).toBe('/pt/');
  });
});
