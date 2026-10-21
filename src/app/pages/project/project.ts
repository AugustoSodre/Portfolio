import { Component, ElementRef, afterNextRender, inject, viewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CONTENT, routeLocale } from '../../i18n/content';
import { setPageMeta } from '../../i18n/page-meta';
import { PROJECTS } from '../../projects';
import { Menu } from '../../ui/menu/menu';

@Component({
  selector: 'app-project',
  imports: [Menu, RouterLink],
  templateUrl: './project.html',
  styleUrls: ['../section/section.css', './project.css'],
  host: { '(document:keydown.escape)': 'back($event)' },
})
export class ProjectPage {
  protected readonly locale = routeLocale();
  protected readonly c = CONTENT[this.locale];
  // The route's canMatch guarantees the slug exists.
  protected readonly project = PROJECTS.find(
    (p) => p.slug === inject(ActivatedRoute).snapshot.paramMap.get('slug'),
  )!;
  protected readonly text = this.c.projects[this.project.slug];
  private readonly router = inject(Router);
  private readonly heading = viewChild.required<ElementRef<HTMLElement>>('heading');

  constructor() {
    setPageMeta(this.locale, `${this.project.name} · Augusto S. Lima`, this.text.tagline, `projects/${this.project.slug}`);
    afterNextRender(() => this.heading().nativeElement.focus({ preventScroll: true }));
  }

  protected back(event: Event): void {
    if ((event.target as HTMLElement).closest('input, textarea, select, [contenteditable]')) return;
    this.router.navigate(['/', this.locale, 'projects']);
  }
}
