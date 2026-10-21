# Tasks: Persona-Style Menu and Navigation

## Phase 1: Foundational

- [x] T001 `src/app/sections.ts` with SECTIONS, Section, isSection
- [x] T002 Extend `SiteContent` and `pt.ts`/`en.ts` with nav, sections, menu
- [x] T003 Section routes in `app.routes.ts` and prerender entries in `app.routes.server.ts`

## Phase 2: User Story 1 - Reach a section (P1) 🎯 MVP

- [x] T004 [US1] Write failing tests in `src/app/ui/menu/menu.spec.ts` (renders 4 links in order with locale hrefs; compact marks `aria-current`)
- [x] T005 [US1] `src/app/ui/menu/` full and compact variants until T004 passes
- [x] T006 [US1] Home uses full menu; `src/app/pages/section/` placeholder page with compact menu and meta

## Phase 3: User Story 2 - Keyboard (P2)

- [x] T007 [US2] Failing tests for ArrowDown/ArrowUp wrap in `menu.spec.ts`
- [x] T008 [US2] Arrow-key handling in menu; Escape on section page; focus restore on home; focus `h1` on section load

## Phase 4: User Story 3 - Motion (P3)

- [x] T009 [US3] Stagger, marker, and wipe CSS; `withViewTransitions` in `app.config.ts`
- [x] T010 [US3] Reduced-motion block in `src/styles.css`

## Phase 5: Polish

- [x] T011 Run quickstart.md with Playwright (keyboard, reduced motion, 320px), screenshots reviewed
- [ ] T012 Commit, push, verify live
