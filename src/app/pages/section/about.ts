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
        <a class="more mono" [href]="c().about.certsAll.href">{{ c().about.certsAll.label }} →</a>
      </div>
    </section>

    <section class="row">
      <h2 class="when mono">{{ c().about.gamesHeading }}</h2>
      <div>
        <p>{{ c().about.games }}</p>
        <a class="more mono" [href]="c().about.gamesLink.href">{{ c().about.gamesLink.label }} →</a>
      </div>
    </section>
  `,
  styleUrl: './section-body.css',
})
export class About {
  readonly c = input.required<SiteContent>();
}
