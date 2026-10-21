# Implementation Plan: Project Pages

**Branch**: `redesign` | **Date**: 2026-10-21 | **Spec**: [spec.md](spec.md)

## Summary

Shared, language-neutral project data (`slug`, `name`, `stack`, repo links) in `projects.ts`;
translatable text per locale in `SiteContent.projects` keyed by slug. A list component inside the
Projects section and a `ProjectPage` at `:lang/projects/:slug`, prerendered for 2 × 3 params.

## Constitution Check

| Principle | Status |
|---|---|
| I. Truthful | Pass: text from READMEs and owner statements; no metrics added. |
| II. Team credit | Pass: my part limited to owner's statement; Team block lists all six teammates. |
| III/IV | Pass: static pages, headings in order, Escape returns to list. |
| V. Simplicity | Pass: no media placeholder component until clips exist. |

## Structure

```text
src/app/projects.ts                    # PROJECTS, ProjectSlug, isProjectSlug
src/app/i18n/{content,pt,en}.ts        # + projects text, projectsUi labels
src/app/pages/section/projects-list.ts
src/app/pages/project/project.{ts,html,css}
src/app/app.routes.ts / app.routes.server.ts
```

## Complexity Tracking

None.
