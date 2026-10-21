import { DOCUMENT, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LOCALES, Locale } from './locale';

export const SITE = 'https://augustolima.pages.dev';

/** Absolute URL of a page; trailing slash because Cloudflare 308s to it. */
export function pageUrl(locale: Locale, path: string): string {
  return `${SITE}/${locale}/${path ? `${path}/` : ''}`;
}

/**
 * Sets lang, title, description and sharing tags during render so prerendered HTML carries them.
 * `path` is the route without the locale ('' for home); omit it on pages that must not be indexed.
 */
export function setPageMeta(locale: Locale, title: string, description: string, path?: string): void {
  const doc = inject(DOCUMENT);
  const meta = inject(Meta);
  doc.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
  inject(Title).setTitle(title);
  meta.updateTag({ name: 'description', content: description });
  meta.updateTag({ property: 'og:title', content: title });
  meta.updateTag({ property: 'og:description', content: description });
  meta.updateTag({ property: 'og:type', content: 'website' });
  meta.updateTag({ property: 'og:locale', content: locale === 'pt' ? 'pt_BR' : 'en_US' });
  meta.updateTag({ property: 'og:image', content: `${SITE}/og-${locale}.png` });
  meta.updateTag({ property: 'og:image:width', content: '1200' });
  meta.updateTag({ property: 'og:image:height', content: '630' });
  meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

  doc.head.querySelectorAll('link[rel=canonical], link[rel=alternate][hreflang]').forEach((l) => l.remove());
  if (path === undefined) {
    meta.removeTag('property="og:url"');
    return;
  }
  meta.updateTag({ property: 'og:url', content: pageUrl(locale, path) });
  const link = (attrs: Record<string, string>) => {
    const el = doc.createElement('link');
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    doc.head.appendChild(el);
  };
  link({ rel: 'canonical', href: pageUrl(locale, path) });
  for (const l of LOCALES) link({ rel: 'alternate', hreflang: l === 'pt' ? 'pt-BR' : 'en', href: pageUrl(l, path) });
  link({ rel: 'alternate', hreflang: 'x-default', href: pageUrl('pt', path) });
}
