import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { CONTENT } from '../../i18n/content';
import { isLocale, switchLocalePath } from '../../i18n/locale';

@Component({
  selector: 'app-top-bar',
  // Plain hrefs on purpose: each locale is its own prerendered page, and a router navigation
  // would reuse the current component with the old locale's content.
  template: `
    <a class="mono resume" [href]="c().resume.href" download>{{ c().resume.label }} ↓</a>
    <a class="mono" [href]="langHref()" [attr.hreflang]="c().langSwitch.target" [attr.lang]="c().langSwitch.target">
      {{ c().langSwitch.label }}
    </a>
  `,
  styles: `
    :host { display: flex; gap: var(--space-4); }
    .resume { color: var(--accent); }
  `,
})
export class TopBar {
  private readonly router = inject(Router);
  private readonly url = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => this.router.url),
    ),
    { initialValue: this.router.url },
  );

  protected readonly c = computed(() => {
    const first = this.url().split('/')[1];
    return CONTENT[isLocale(first) ? first : 'pt'];
  });
  protected readonly langHref = computed(() =>
    switchLocalePath(this.url(), this.c().langSwitch.target),
  );
}
