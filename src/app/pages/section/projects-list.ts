import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteContent } from '../../i18n/content';
import { Locale } from '../../i18n/locale';
import { PROJECTS } from '../../projects';

@Component({
  selector: 'app-projects-list',
  imports: [RouterLink],
  template: `
    <ol class="projects">
      @for (project of projects; track project.slug; let i = $index) {
        <li>
          <a [routerLink]="['/', locale(), 'projects', project.slug]">
            <span class="num mono" aria-hidden="true">0{{ i + 1 }}</span>
            <span class="body">
              <span class="name">{{ project.name }}</span>
              <span class="tagline">{{ c().projects[project.slug].tagline }}</span>
              <span class="mono stack">{{ project.stack.join(' · ') }}</span>
            </span>
            <span class="go mono" aria-hidden="true">{{ c().projectsUi.open }} →</span>
          </a>
        </li>
      }
    </ol>
  `,
  styleUrl: './section-body.css',
})
export class ProjectsList {
  readonly c = input.required<SiteContent>();
  readonly locale = input.required<Locale>();
  protected readonly projects = PROJECTS;
}
