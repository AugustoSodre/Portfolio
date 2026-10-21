# Implementation Plan: Section Content

**Branch**: `redesign` | **Date**: 2026-10-21 | **Spec**: [spec.md](spec.md)

## Summary

Extend `SiteContent` with `experience`, `about`, `contact`; render them with three small
presentational components switched inside `SectionPage`. Photo resized once into `public/img/`.

## Technical Context

Angular 21.2, no new dependencies. Photo: Pillow (one-off, local) → 600×600 JPEG q80.

## Constitution Check

| Principle | Status |
|---|---|
| I. Truthful content | Pass: every string traced to the career context; unknown years omitted; no "open to work". |
| III. Content before interaction | Pass: plain static text. |
| IV. Accessible | Pass: headings in order, alt text, lists for roles and links. |
| V. Simplicity | Pass: content stays in `pt.ts`/`en.ts`. |

## Structure

```text
src/app/i18n/content.ts, pt.ts, en.ts     # + experience, about, contact
src/app/pages/section/section.html        # @switch on section
src/app/pages/section/experience.ts       # roles + education
src/app/pages/section/about.ts            # photo, story, certs, games card
src/app/pages/section/contact.ts          # big links + location
public/img/augusto.jpg
```

## Complexity Tracking

None.
