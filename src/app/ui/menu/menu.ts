import { Component, ElementRef, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTENT } from '../../i18n/content';
import { Locale } from '../../i18n/locale';
import { SECTIONS, Section } from '../../sections';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  host: { '[class]': 'variant()' },
})
export class Menu {
  readonly locale = input.required<Locale>();
  readonly variant = input<'full' | 'compact'>('full');
  readonly current = input<Section>();

  protected readonly sections = SECTIONS;
  protected readonly c = computed(() => CONTENT[this.locale()]);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected onKey(event: KeyboardEvent): void {
    const step = { ArrowDown: 1, ArrowUp: -1 }[event.key];
    if (!step) return;
    const links = Array.from(this.host.nativeElement.querySelectorAll('a'));
    const index = links.indexOf(document.activeElement as HTMLAnchorElement);
    if (index < 0) return;
    event.preventDefault();
    links[(index + step + links.length) % links.length].focus();
  }
}
