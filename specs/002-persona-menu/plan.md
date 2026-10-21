# Implementation Plan: Persona-Style Menu and Navigation

**Branch**: `redesign` | **Date**: 2026-10-21 | **Spec**: [spec.md](spec.md)

## Summary

One `Menu` component in two variants (full on the home, compact on section pages) driven by a
shared `SECTIONS` list. Four section routes per locale, prerendered, each a placeholder heading.
Motion is CSS only: staggered entry, a skewed accent bar per entry, and a diagonal wipe through the
router's View Transitions support, all disabled by one reduced-motion block.

## Technical Context

**Language/Version**: TypeScript, Angular 21.2 (from 001)

**Primary Dependencies**: none new (`withViewTransitions` is in `@angular/router`)

**Testing**: Vitest (`ng test`) for menu keyboard behavior; Playwright smoke from scratch dir

**Target Platform**: Static on Cloudflare Pages

**Performance Goals**: transitions ≤ 400 ms; CLS 0 on home (transform/opacity only)

**Constraints**: works without JS (plain links); no motion under reduced motion

**Scale/Scope**: 2 locales × 4 sections = 8 new prerendered routes

## Constitution Check

| Principle | Status |
|---|---|
| I. Truthful content | Pass: only labels and neutral meta descriptions. |
| III. Content before interaction | Pass: entries are real links; no gate, no intro. |
| IV. Accessible and calm | Pass: arrow keys, Escape, `aria-current`, focus moved to page `h1`, reduced-motion kill switch. |
| V. Simplicity | Pass: no animation library; CSS + native View Transitions. |

## Project Structure

```text
src/app/
  sections.ts                 # SECTIONS, Section type, isSection
  app.routes.ts               # + one child route per section
  app.routes.server.ts        # + ':lang/<section>' prerender entries
  app.config.ts               # + withViewTransitions({ skipInitialTransition: true })
  ui/menu/menu.{ts,html,css}  # full | compact, arrow-key nav
  ui/menu/menu.spec.ts
  pages/home/                 # hero + full menu; restores focus from history.state
  pages/section/              # placeholder heading + compact menu; Escape → home
  i18n/content.ts, pt.ts, en.ts   # + nav labels, section meta, menu strings
src/styles.css                # view-transition wipe + reduced-motion block
```

## Complexity Tracking

None.
