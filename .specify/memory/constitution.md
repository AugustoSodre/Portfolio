# Augusto Lima Portfolio Constitution

## Core Principles

### I. Truthful Content (NON-NEGOTIABLE)

Every claim on the site MUST be traceable to a real source (résumé, LinkedIn, git history, or the
owner's explicit statement). No metric, date, result, or role may be invented or rounded up. When
a fact is missing, the spec marks it `[NEEDS CLARIFICATION]` and the owner is asked.
Rationale: recruiters verify, and one false claim discredits the whole portfolio.

### II. Honest Team Credit

On team projects the site describes only the owner's part, and every teammate is credited by name
with their role. Known limitations of a project (e.g. unfinished integration) are stated, not
hidden.

### III. Content Before Interaction

A recruiter MUST reach name, role, projects, and résumé within one interaction from any page.
The Persona-style menu is a navigation layer only; it never gates or hides content. Every route is
prerendered to static HTML and readable without JavaScript.

### IV. Accessible and Calm by Default

WCAG 2.2 AA contrast, full keyboard navigation with visible focus, semantic landmarks. All motion
is disabled under `prefers-reduced-motion`. No autoplaying sound. Layout works from 320px wide
with no horizontal scroll.

### V. Simplicity

Use what Angular and the platform already provide before adding a dependency. Content lives in
typed TypeScript files, one per locale, sharing one interface so a missing translation breaks the
build. No backend, no forms, no CMS.

## Design and Technology Constraints

- Angular 21 (newest major the Cloudflare Pages build image can run; Angular 22 needs Node ≥ 24.15), standalone components, static prerender (`outputMode: 'static'`).
- Locales: `/pt/...` (default) and `/en/...`; `/` redirects to `/pt/`.
- Visual tokens shared with the LinkedIn banner: background `#0a0c10`, accent `#10b981`;
  Playfair Display for the owner's name only, Inter for text, JetBrains Mono for technical
  details. Dark theme only.
- Swiss-style grid for content; Persona 3 Reload-inspired motion only in the menu and route
  transitions.
- Hosting: Cloudflare Pages (free tier). The legacy GitHub Pages URL redirects to it.

## Development Workflow

- Spec-driven: each feature goes through `/speckit-specify` → `/speckit-plan` → `/speckit-tasks`
  → `/speckit-implement`, in `specs/NNN-feature/`.
- Code, commits, and specs in English; README in Portuguese and English.
- Commits and PRs carry no AI co-author trailer.
- Quality gates before merge to `main`: `ng build` passes with every route prerendered, unit tests
  pass, and a Playwright smoke check covers routes, keyboard navigation, reduced motion, and 375px
  layout.

## Governance

This constitution overrides other practices in the repo. Amendments are made by editing this file
with a version bump (MAJOR: principle removed or redefined; MINOR: principle or section added;
PATCH: wording) and noted in the commit message. Every spec and plan checks itself against these
principles; any violation is justified in the plan's Complexity Tracking or removed.

**Version**: 1.0.1 | **Ratified**: 2026-10-21 | **Last Amended**: 2026-10-21
