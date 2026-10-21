import { DOCUMENT, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Locale } from './locale';

/** Sets lang, title and description during render so prerendered HTML carries them. */
export function setPageMeta(locale: Locale, title: string, description: string): void {
  inject(DOCUMENT).documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
  inject(Title).setTitle(title);
  inject(Meta).updateTag({ name: 'description', content: description });
}
