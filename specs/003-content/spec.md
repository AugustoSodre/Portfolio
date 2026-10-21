# Feature Specification: Section Content (Experience, About, Contact)

**Feature Branch**: `redesign`

**Created**: 2026-10-21

**Status**: Draft

**Input**: User description: "Fill Experience, About and Contact in Portuguese and English from the career context. About has the story, a photo, four featured certificates and a games card. Contact is links only, no email. Projects come in feature 004."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Recruiter checks experience (Priority: P1)

A recruiter opens Experience and sees, newest first, each role with period, organization, mode,
and what the owner did, plus education with expected graduation.

**Why this priority**: Experience is what recruiters screen for first.

**Independent Test**: Open `/pt/experience`; ZG, AceleraZG (with the Top 24 / Top 5 selection)
and UniCEUB monitoring appear with correct dates.

**Acceptance Scenarios**:

1. **Given** the Experience page, **Then** roles appear newest first with periods
   mar/2026–present, ago/2025–fev/2026, fev/2024–jul/2025.
2. **Given** the AceleraZG role, **Then** "selected among 2,000+ applicants (Top 24), hired at the
   end (Top 5)" is visible without interaction.
3. **Given** the Education block, **Then** it shows Computer Science, UniCEUB, fev/2024 → dez/2027
   (expected).

---

### User Story 2 - Visitor learns who the owner is (Priority: P2)

About shows a photo, a short story, four featured certificates, and a card about the owner's games
linking to itch.io.

**Independent Test**: Open `/en/about`; photo has alt text; certificates list AceleraZG, Kafka,
Angular, CS50x; the games link opens itch.io.

**Acceptance Scenarios**:

1. **Given** the About page, **Then** a link to the full certificate list on LinkedIn is present.

---

### User Story 3 - Visitor finds how to reach the owner (Priority: P3)

Contact lists LinkedIn, GitHub and itch.io as large links, plus location.

**Acceptance Scenarios**:

1. **Given** the Contact page, **Then** no email address appears anywhere on it.

### Edge Cases

- Long Portuguese words ("Experiência", stack names) wrap without horizontal scroll at 320px.
- Photo fails to load: alt text remains and layout does not collapse.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Every fact MUST come from the career context or the owner's answers in this session
  (constitution I). Facts not in those sources are left out, not guessed.
- **FR-002**: The site MUST NOT state "open to work"; that flag is recruiter-only on LinkedIn while
  the owner is employed.
- **FR-003**: Both locales MUST carry the same entries (enforced by type).
- **FR-004**: The photo MUST be served at most 600×600 and under 80 kB.
- **FR-005**: External links open in the same tab and have discernible names.

## Success Criteria *(mandatory)*

- **SC-001**: Lighthouse accessibility 100 on the three pages in both locales.
- **SC-002**: Owner reviews and approves the wording of both locales before feature 006 launch.

## Assumptions

- Certificate years shown only where the context gives them (AceleraZG 2026, CS50x 2024).
- Education start is fev/2024 (owner's answer; résumé to be corrected in feature 005).
- No email on the site (owner's answer).
