# Feature Specification: Persona-Style Menu and Navigation

**Feature Branch**: `redesign`

**Created**: 2026-10-21

**Status**: Draft

**Input**: User description: "The home becomes a huge typographic menu inspired by Persona 3 Reload: PROJETOS / EXPERIÊNCIA / SOBRE / CONTATO, keyboard navigable, a selection marker that slides between items, staggered entry, diagonal transitions between pages. No intro, no sound. All motion off under reduced motion. Content of each section stays plain Swiss and readable."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Recruiter reaches a section from the home (Priority: P1)

A recruiter lands on the home, sees the owner's name and role plus four large menu entries, and
opens one with a click or tap.

**Why this priority**: The menu is the only way into the content.

**Independent Test**: From `/pt/`, click "PROJETOS"; the projects section page opens.

**Acceptance Scenarios**:

1. **Given** the home, **When** it loads, **Then** name, role, and the four entries are visible
   in the first screen on a 375×667 phone and a 1440×900 desktop.
2. **Given** the home, **When** an entry is activated, **Then** its section page opens and its URL
   can be shared and reopened directly.
3. **Given** a section page, **When** the visitor wants another section, **Then** a compact
   version of the menu is available on that page without going back home.

---

### User Story 2 - Keyboard user navigates like a game menu (Priority: P2)

A visitor uses only the keyboard: Tab or arrow keys move between entries, the selection marker
follows, Enter opens, and Escape on a section page returns to the menu.

**Why this priority**: Accessibility is a constitution rule and the "game menu" feel depends on it.

**Independent Test**: Keyboard only, open every section and return home.

**Acceptance Scenarios**:

1. **Given** focus on an entry, **When** Down/Up arrow is pressed, **Then** focus moves to the
   next/previous entry, wrapping at the ends.
2. **Given** an entry focused or hovered, **Then** the selection marker sits on that entry, and
   focus is also visible without relying on color alone.
3. **Given** a section page, **When** Escape is pressed (and no text field is focused), **Then**
   the home menu opens with that section's entry focused.

---

### User Story 3 - Motion that feels like Persona, and none when asked (Priority: P3)

Entries enter one after another on first view, the marker slides between entries, and page
changes use a diagonal wipe. Visitors who ask the system for reduced motion get instant changes.

**Why this priority**: Personality layer; the site must already work without it.

**Independent Test**: Compare default and reduced-motion runs.

**Acceptance Scenarios**:

1. **Given** default motion settings, **When** navigating between pages, **Then** a diagonal
   transition plays and completes within 400 ms.
2. **Given** reduced motion, **When** loading or navigating, **Then** no animation or transition
   plays.

### Edge Cases

- Browser without view-transition support: pages change instantly, nothing breaks.
- JavaScript disabled: entries are plain links and every section page still loads.
- Very narrow screens (320px): entries scale down and never overflow horizontally.
- Direct load of a section URL: no entry animation is required; the compact menu marks the current
  section.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The home MUST show name, role, and four entries in this order: Projetos, Experiência,
  Sobre, Contato (English: Projects, Experience, About, Contact).
- **FR-002**: Each entry MUST link to a section page in the same locale; section pages exist in
  both locales and are prerendered. Their content is out of scope (feature 003/004): a heading is
  enough.
- **FR-003**: Section URLs MUST use the same slug in both locales (`projects`, `experience`,
  `about`, `contact`) so switching language keeps the visitor on the same section.
- **FR-004**: Arrow keys MUST move focus between entries (wrapping); Tab order MUST follow visual
  order.
- **FR-005**: Escape on a section page MUST return to the home with that entry focused.
- **FR-006**: Every section page MUST show a compact menu marking the current section
  (`aria-current="page"`).
- **FR-007**: Motion (stagger, marker slide, page wipe) MUST be disabled under
  `prefers-reduced-motion: reduce`.
- **FR-008**: No intro screen, no sound, no content hidden behind interaction.

### Key Entities

- **Section**: slug, localized label, order. Shared by home menu, compact menu, and routes.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Every section is reachable from the home in one activation, by pointer or keyboard.
- **SC-002**: Page transitions finish in ≤ 400 ms; no layout shift on the home after load (CLS 0).
- **SC-003**: Lighthouse accessibility stays at 100 on home and section pages.
- **SC-004**: With reduced motion emulated, zero CSS animations or transitions run.

## Assumptions

- Slugs are English in both locales (simplest language switch); labels are localized.
- The résumé download action is added with the PDFs in feature 005.
- Selection marker uses the accent color on a skewed bar, as in P3 Reload menus.
