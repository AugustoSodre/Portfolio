import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { CONTENT } from '../../i18n/content';
import { isLocale, switchLocalePath } from '../../i18n/locale';

@Component({
  selector: 'app-lang-switch',
  // Plain href on purpose: each locale is its own prerendered page, and a router navigation
  // would reuse the current component with the old locale's content.
  template: `
    <a class="mono" [href]="href()" [attr.hreflang]="target().target" [attr.lang]="target().target">
      {{ target().label }}
    </a>
  `,
})
export class LangSwitch {
  private readonly router = inject(Router);
  private readonly url = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => this.router.url),
    ),
    { initialValue: this.router.url },
  );

  protected readonly target = computed(() => {
    const first = this.url().split('/')[1];
    return CONTENT[isLocale(first) ? first : 'pt'].langSwitch;
  });
  protected readonly href = computed(() => switchLocalePath(this.url(), this.target().target));
}
