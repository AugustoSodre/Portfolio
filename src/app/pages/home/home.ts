import { Component, ElementRef, afterNextRender, inject } from '@angular/core';
import { CONTENT, routeLocale } from '../../i18n/content';
import { setPageMeta } from '../../i18n/page-meta';
import { isSection } from '../../sections';
import { Menu } from '../../ui/menu/menu';

@Component({
  selector: 'app-home',
  imports: [Menu],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly locale = routeLocale();
  protected readonly c = CONTENT[this.locale];

  constructor() {
    setPageMeta(this.locale, this.c.meta.title, this.c.meta.description, '');
    // Escape on a section page comes back here with that entry focused.
    const host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    afterNextRender(() => {
      const focus = history.state?.focus;
      if (isSection(focus)) host.querySelector<HTMLElement>(`a[href$="/${focus}"]`)?.focus();
    });
  }
}
