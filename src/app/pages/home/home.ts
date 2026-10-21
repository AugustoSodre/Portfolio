import { Component } from '@angular/core';
import { CONTENT, routeLocale } from '../../i18n/content';
import { setPageMeta } from '../../i18n/page-meta';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly c = CONTENT[routeLocale()];

  constructor() {
    setPageMeta(routeLocale(), this.c.meta.title, this.c.meta.description);
  }
}
