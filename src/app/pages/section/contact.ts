import { Component, input } from '@angular/core';
import { SiteContent } from '../../i18n/content';

@Component({
  selector: 'app-contact',
  template: `
    <p class="lead">{{ c().contact.intro }}</p>
    <ul class="contact">
      @for (link of c().contact.links; track link.href) {
        <li>
          <a [href]="link.href" target="_blank" rel="me noopener">
            <span class="big">{{ link.label }}</span>
            <span class="mono handle">{{ link.handle }}</span><span class="sr-only">{{ c().newTab }}</span>
          </a>
        </li>
      }
    </ul>
    <p class="mono period">{{ c().contact.location }}</p>
  `,
  styleUrl: './section-body.css',
})
export class Contact {
  readonly c = input.required<SiteContent>();
}
