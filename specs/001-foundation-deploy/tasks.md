# Tasks: Foundation and Deploy Pipeline

**Input**: Design documents from `/specs/001-foundation-deploy/`

## Format: `[ID] [P?] [Story] Description`

## Phase 1: Setup

- [x] T001 Remove 2024 site files (`index.html`, `about.html`, `style.css`, `Assets/`) from repo root
- [x] T002 Scaffold Angular 21 (`--ssr --zoneless --style=css --test-runner=vitest`, project `portfolio`) in scratch and move into repo root; add `.nvmrc` = `24`
- [x] T003 Set `outputMode: "static"` in `angular.json`; strip the generated Express server entry

## Phase 2: Foundational

- [x] T004 [P] Write `src/styles.css`: tokens, reset, base type, focus ring
- [x] T005 [P] Add Google Fonts link to `src/index.html`
- [x] T006 Write failing tests for `isLocale` and `switchLocalePath` in `src/app/i18n/locale.spec.ts`
- [x] T007 Implement `src/app/i18n/locale.ts` until T006 passes
- [x] T008 [P] `src/app/i18n/content.ts`, `pt.ts`, `en.ts` per data-model.md

## Phase 3: User Story 1 - New identity on the home (P1) 🎯 MVP

- [x] T009 [US1] Routes in `src/app/app.routes.ts` (`''` → `pt`, `:lang` with locale guard, `**` → not-found) and `src/app/app.routes.server.ts` (prerender `pt`/`en`, plus `pt/404`, `en/404`)
- [x] T010 [US1] Home page `src/app/pages/home/` (name, role, LinkedIn, GitHub) setting `lang`, title, description
- [x] T011 [US1] Not-found page `src/app/pages/not-found/` (locale from URL, link home)
- [x] T012 [US1] `public/_redirects` and `scripts/postbuild.mjs`; `build` script in `package.json`

## Phase 4: User Story 2 - Language switch (P2)

- [x] T013 [US2] `src/app/ui/lang-switch/` using `switchLocalePath`, rendered in the app shell

## Phase 5: User Story 3 - Preview deploys (P3)

- [x] T014 [US3] Owner connects repo on Cloudflare Pages (build `npm run build`, output `dist/portfolio/browser`, prod branch `main`) — guided, owner-only
- [x] T015 [US3] Push `redesign`, verify preview against quickstart.md step 4

## Phase 6: Polish

- [x] T016 Rewrite `README.md` (PT + EN): what it is, run, build, SDD workflow
- [x] T017 Run quickstart.md steps 1–3

## Dependencies

T001–T003 → T004–T008 → US1 → US2 → US3. T014 needs only a pushed branch with a passing build.
