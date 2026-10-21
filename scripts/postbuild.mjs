// Cloudflare Pages serves the nearest 404.html up the path, so /en/x gets the English page.
import { copyFileSync } from 'node:fs';

const out = 'dist/portfolio/browser';
copyFileSync(`${out}/pt/404/index.html`, `${out}/pt/404.html`);
copyFileSync(`${out}/en/404/index.html`, `${out}/en/404.html`);
copyFileSync(`${out}/pt/404/index.html`, `${out}/404.html`);
