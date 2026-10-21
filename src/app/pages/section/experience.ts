import { Component, input } from '@angular/core';
import { SiteContent } from '../../i18n/content';

@Component({
  selector: 'app-experience',
  template: `
    <ol class="roles">
      @for (role of c().experience.roles; track role.period) {
        <li class="row">
          <p class="when mono">{{ role.period }}</p>
          <div>
            <h2>{{ role.title }}</h2>
            <p class="org">
              {{ role.org }}
              @if (role.mode) {
                <span class="mode"> · {{ role.mode }}</span>
              }
            </p>
            @if (role.highlight) {
              <p class="highlight">{{ role.highlight }}</p>
            }
            <ul class="points">
              @for (point of role.points; track point) {
                <li>{{ point }}</li>
              }
            </ul>
          </div>
        </li>
      }
    </ol>

    <section class="row edu">
      <h2 class="when mono">{{ c().experience.educationHeading }}</h2>
      <div>
        <p class="course">{{ c().experience.education.course }}</p>
        <p class="org">{{ c().experience.education.school }}</p>
        <p class="mono period">{{ c().experience.education.period }}</p>
      </div>
    </section>
  `,
  styleUrl: './section-body.css',
})
export class Experience {
  readonly c = input.required<SiteContent>();
}
