import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Menu } from './menu';

async function render(variant: 'full' | 'compact', current?: string) {
  TestBed.configureTestingModule({ imports: [Menu], providers: [provideRouter([])] });
  const fixture = TestBed.createComponent(Menu);
  fixture.componentRef.setInput('locale', 'en');
  fixture.componentRef.setInput('variant', variant);
  if (current) fixture.componentRef.setInput('current', current);
  await fixture.whenStable();
  document.body.appendChild(fixture.nativeElement);
  const links = Array.from(fixture.nativeElement.querySelectorAll('a')) as HTMLAnchorElement[];
  return { fixture, links };
}

function press(el: HTMLElement, key: string) {
  el.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
}

describe('Menu', () => {
  it('lists the four sections in order with locale links', async () => {
    const { links } = await render('full');
    expect(links.map((a) => a.querySelector('.label')?.textContent?.trim())).toEqual([
      'Projects',
      'Experience',
      'About',
      'Contact',
    ]);
    expect(links.map((a) => a.getAttribute('href'))).toEqual([
      '/en/projects',
      '/en/experience',
      '/en/about',
      '/en/contact',
    ]);
  });

  it('marks the current section in the compact variant', async () => {
    const { links } = await render('compact', 'about');
    expect(links.filter((a) => a.getAttribute('aria-current') === 'page').map((a) => a.querySelector('.label')?.textContent?.trim())).toEqual(['About']);
  });

  it('moves focus with arrow keys and wraps at both ends', async () => {
    const { links } = await render('full');
    links[0].focus();
    press(links[0], 'ArrowUp');
    expect(document.activeElement).toBe(links[3]);
    press(links[3], 'ArrowDown');
    expect(document.activeElement).toBe(links[0]);
    press(links[0], 'ArrowDown');
    expect(document.activeElement).toBe(links[1]);
  });
});
