import { Component, input } from '@angular/core';
import { SiteContent } from '../../i18n/content';

@Component({
  selector: 'app-about',
  template: `
    <div class="about">
      <img src="img/augusto.jpg" [alt]="c().about.photoAlt" width="600" height="600" />
      <div class="story">
        @for (p of c().about.story; track p) {
          <p>{{ p }}</p>
        }
      </div>
    </div>

    <section class="row">
      <h2 class="when mono">{{ c().about.certsHeading }}</h2>
      <div>
        <ul class="certs">
          @for (cert of c().about.certs; track cert.name) {
            <li>
              <span>{{ cert.name }}</span>
              @if (cert.year) {
                <span class="mono year">{{ cert.year }}</span>
              }
            </li>
          }
        </ul>
        <a class="more mono" [href]="c().about.certsAll.href" target="_blank" rel="noopener">{{ c().about.certsAll.label }}<span class="sr-only">{{ c().newTab }}</span></a>
      </div>
    </section>

    <section class="row">
      <h2 class="when mono">{{ c().about.gamesHeading }}</h2>
      <div>
        <p>{{ c().about.games }}</p>
        <a class="more mono" [href]="c().about.gamesLink.href" target="_blank" rel="noopener">{{ c().about.gamesLink.label }}<span class="sr-only">{{ c().newTab }}</span></a>
      </div>
    </section>
  `,
  styleUrl: './section-body.css',
})
export class About {
  readonly c = input.required<SiteContent>();
}
