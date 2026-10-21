# Implementation Plan: Foundation and Deploy Pipeline

**Branch**: `redesign` | **Date**: 2026-10-21 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/001-foundation-deploy/spec.md`

## Summary

Scaffold an Angular 21 workspace at the repo root (replacing the 2024 HTML/CSS), with static
prerender for `/pt` and `/en`, banner design tokens as CSS custom properties, typed per-locale
content, a language switch, localized not-found pages, and a Cloudflare Pages pipeline (preview
per branch, production from `main`).

## Technical Context

**Language/Version**: TypeScript (Angular 21.2), Node 24 LTS (`.nvmrc`)

**Primary Dependencies**: `@angular/*` 21.2, `@angular/ssr` (prerender only). Nothing else.

**Storage**: N/A (content is TypeScript)

**Testing**: Vitest via `ng test` (CLI default)

**Target Platform**: Static files on Cloudflare Pages; evergreen browsers, 320px and up

**Project Type**: Static web app (single Angular project)

**Performance Goals**: LCP < 1.5s on Lighthouse mobile; initial JS ≤ 200 kB transferred

**Constraints**: No server runtime; every route prerendered; works without JS; dark only

**Scale/Scope**: 2 locales × (home + not-found) in this feature

## Constitution Check

| Principle | Status |
|---|---|
| I. Truthful content | Pass: only name, title, LinkedIn and GitHub links from the career context. |
| II. Team credit | N/A in this feature. |
| III. Content before interaction | Pass: static HTML per route, no gating. |
| IV. Accessible and calm | Pass: AA tokens checked (text `#e6e8eb` on `#0a0c10` ≈ 16:1, accent `#10b981` on bg ≈ 7.8:1), `lang` per page, focus styles, no motion yet. |
| V. Simplicity | Pass: no i18n library, no UI kit, one tiny post-build script for 404 files. |

Post-design re-check: no violations.

## Project Structure

### Documentation (this feature)

```text
specs/001-foundation-deploy/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/routes.md
└── tasks.md
```

### Source Code (repository root)

```text
.nvmrc                       # 24
angular.json                 # outputMode: "static", project "portfolio"
package.json                 # "build": "ng build && node scripts/postbuild.mjs"
scripts/postbuild.mjs        # copies prerendered not-found pages to 404.html files
public/
  _redirects                 # "/  /pt/  302"
src/
  index.html                 # Google Fonts link (inlined at build)
  styles.css                 # tokens, reset, base typography, focus ring
  app/
    app.ts / app.html        # shell: <main> + router outlet
    app.routes.ts            # '' → pt, ':lang' (locale guard) → home, '**' → not-found
    app.routes.server.ts     # RenderMode.Prerender, params pt/en
    i18n/
      locale.ts              # Locale type, isLocale(), switchLocalePath()
      locale.spec.ts
      content.ts             # SiteContent interface + CONTENT record
      pt.ts / en.ts          # satisfies SiteContent
    pages/
      home/                  # placeholder home
      not-found/
    ui/
      lang-switch/
```

**Structure Decision**: single Angular project at repo root; features 002+ add folders under
`src/app/pages` and `src/app/ui`.

## Complexity Tracking

None.
