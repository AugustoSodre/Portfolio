import { Component, ElementRef, afterNextRender, inject, viewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CONTENT, routeLocale } from '../../i18n/content';
import { setPageMeta } from '../../i18n/page-meta';
import { Section } from '../../sections';
import { Menu } from '../../ui/menu/menu';

@Component({
  selector: 'app-section',
  imports: [Menu, RouterLink],
  templateUrl: './section.html',
  styleUrl: './section.css',
  host: { '(document:keydown.escape)': 'back($event)' },
})
export class SectionPage {
  protected readonly locale = routeLocale();
  protected readonly c = CONTENT[this.locale];
  protected readonly section: Section = inject(ActivatedRoute).snapshot.data['section'];
  private readonly router = inject(Router);
  private readonly heading = viewChild.required<ElementRef<HTMLElement>>('heading');

  constructor() {
    const meta = this.c.sections[this.section];
    setPageMeta(this.locale, meta.title, meta.description);
    // Move focus to the new page so screen readers announce it after a menu navigation.
    afterNextRender(() => this.heading().nativeElement.focus({ preventScroll: true }));
  }

  protected back(event: Event): void {
    const target = event.target as HTMLElement;
    if (target.closest('input, textarea, select, [contenteditable]')) return;
    this.router.navigate(['/', this.locale], { state: { focus: this.section } });
  }
}
