// Cloudflare Pages serves the nearest 404.html up the path, so /en/x gets the English page.
import { copyFileSync, readdirSync, writeFileSync } from 'node:fs';

const out = 'dist/portfolio/browser';
const site = 'https://augustolima.pages.dev';
copyFileSync(`${out}/pt/404/index.html`, `${out}/pt/404.html`);
copyFileSync(`${out}/en/404/index.html`, `${out}/en/404.html`);
copyFileSync(`${out}/pt/404/index.html`, `${out}/404.html`);

// Every prerendered page except the 404s and the bare / redirect.
const urls = readdirSync(out, { recursive: true })
  .filter((f) => f.endsWith('index.html') && f.includes('/') && !f.includes('404'))
  .map((f) => `${site}/${f.slice(0, -'index.html'.length)}`)
  .sort();
writeFileSync(
  `${out}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${u}</loc></url>`)
    .join('\n')}\n</urlset>\n`,
);
