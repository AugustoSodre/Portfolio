# Feature Specification: Project Pages

**Feature Branch**: `redesign`

**Created**: 2026-10-21

**Status**: Draft

**Input**: User description: "Projects list plus one page each for Linketinder, AutoMatch and Web-Crawler: what it is, my part, stack, links, honest limits. AutoMatch credits the whole team. Clips come later."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Recruiter scans projects (Priority: P1)

The Projects page lists the three projects with a one-line description and stack; each opens a
detail page with a shareable URL.

**Independent Test**: `/pt/projects` → open Linketinder → `/pt/projects/linketinder`.

**Acceptance Scenarios**:

1. **Given** a project page, **Then** it shows: what it is, how it works, my part, stack, links to
   every repository, and limits when known.
2. **Given** Linketinder, **Then** it states that front end and back end are not integrated yet.

---

### User Story 2 - Team work is credited honestly (Priority: P1)

AutoMatch shows only the owner's part as his, and a Team block names every teammate with their
role.

**Acceptance Scenarios**:

1. **Given** AutoMatch, **Then** "my part" says: most of the Angular front end, and the initial two-tower engine, rewritten for the final version by Pedro Antonio.
2. **Given** AutoMatch, **Then** the Team block lists Lucas Moura (most of the back end and the AI
   integration), Ângelo Gaio (back end), Luana Lima (front end), Pedro Antonio (final AI engine),
   Sabrina Vianna (design and docs), Gustavo Fernandes (design), with GitHub links where known.

---

### User Story 3 - Keyboard back navigation (Priority: P3)

Escape on a project page returns to the Projects list.

### Edge Cases

- Unknown slug (`/en/projects/nope`): English not-found page, status 404.
- No clip yet: no media block and no "coming soon" placeholder on the live site.

## Requirements *(mandatory)*

- **FR-001**: Facts come only from the repositories' READMEs/metadata and the owner's statements.
- **FR-002**: Project order: Linketinder, AutoMatch, Web-Crawler.
- **FR-003**: Both locales cover every project (enforced by type).
- **FR-004**: Project URLs use the same slug in both locales; all prerendered.
- **FR-005**: Compact menu marks Projects as current on detail pages.

## Success Criteria *(mandatory)*

- **SC-001**: Each project page answers "what, how, my part, stack, where" above the fold on
  desktop and within two scrolls on a 375px phone.
- **SC-002**: Every teammate named by the owner appears on the AutoMatch page.

## Assumptions

- Linketinder and Web-Crawler are solo projects (career context; Linketinder README).
- Clips are added in feature 005; the media block renders only when a clip exists.
