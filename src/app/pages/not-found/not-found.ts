import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTENT, routeLocale } from '../../i18n/content';
import { setPageMeta } from '../../i18n/page-meta';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="not-found">
      <p class="mono code">404</p>
      <h1>{{ c.notFound.title }}</h1>
      <p>{{ c.notFound.body }}</p>
      <a [routerLink]="['/', locale]">{{ c.notFound.home }}</a>
    </section>
  `,
  styles: `
    .not-found { padding-block: var(--space-6); display: grid; gap: var(--space-2); }
    .code { color: var(--accent); font-size: 1.25rem; }
    h1 { font-size: clamp(2rem, 6vw, 4rem); line-height: 1; }
  `,
})
export class NotFound {
  protected readonly locale = routeLocale();
  protected readonly c = CONTENT[this.locale];

  constructor() {
    setPageMeta(this.locale, `404 · ${this.c.notFound.title}`, this.c.notFound.body);
  }
}
