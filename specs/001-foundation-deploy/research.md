# Research: Foundation and Deploy Pipeline

## Angular version and Node
- **Decision**: Angular 22.2 with Node 24 LTS pinned in `.nvmrc`.
- **Rationale**: Current major; CLI 22 requires Node ≥ 22.22.3. Cloudflare Pages honors `.nvmrc`.
- **Alternatives**: Angular 20 (works on the local Node 22.17) rejected: constitution says current major.

## Static output
- **Decision**: `ng new --ssr`, then `outputMode: "static"` and `RenderMode.Prerender` for all
  routes, with `getPrerenderParams` returning `pt` and `en` for `:lang`.
- **Rationale**: Full HTML per route, no server; Cloudflare serves `dist/portfolio/browser`.
- **Alternatives**: Client-only SPA rejected (constitution III, no-JS readability).

## i18n
- **Decision**: Typed content objects per locale (`pt.ts`, `en.ts` `satisfies SiteContent`),
  selected from the `:lang` route param; `lang`, `<title>` and description set during render via
  `DOCUMENT`, `Title`, `Meta`.
- **Rationale**: Type checker enforces parity (FR-007); no runtime dependency.
- **Alternatives**: `@angular/localize` (one build per locale, XLF files) rejected as heavier;
  Transloco rejected (dependency, runtime JSON).

## Root redirect and 404s on Cloudflare Pages
- **Decision**: `public/_redirects` sends `/` to `/pt/` (302). Not-found pages are prerendered at
  `/pt/404` and `/en/404`; a post-build script copies them to `pt/404.html`, `en/404.html`, and
  top-level `404.html` (Portuguese).
- **Rationale**: With a top-level `404.html`, Pages stops SPA fallback and serves the nearest
  `404.html` up the path with status 404, so `/en/nope` gets the English page.
- **Alternatives**: SPA fallback rejected (wrong status, wrong language on unknown paths).

## Fonts
- **Decision**: Google Fonts `<link>` in `index.html` (Playfair Display 700, Inter 400/600,
  JetBrains Mono 400), `display=swap`; Angular inlines the CSS at build.
- **Alternatives**: Self-hosting rejected for now (more files, same result).

## Hosting
- **Decision**: Cloudflare Pages Git integration: build `npm run build`, output
  `dist/portfolio/browser`, production branch `main`, previews for all other branches.
- **Rationale**: Free, no card, per-branch previews (spec US3), failed builds keep last good deploy.
