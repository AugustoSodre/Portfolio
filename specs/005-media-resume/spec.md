# Feature Specification: Résumé Download and Project Clips

**Feature Branch**: `redesign`

**Created**: 2026-10-21

**Status**: In progress (résumé done here; clips pending owner recordings)

**Input**: User description: "Updated PT and EN résumés downloadable from every page; public PDF has only LinkedIn, GitHub and the site, no phone or email; a full private version for applications. Fix the old résumé issues from the career context. Later: project clips."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Recruiter downloads the résumé (Priority: P1)

From any page, the visitor downloads the résumé in the page's language with one click.

**Acceptance Scenarios**:

1. **Given** any `/pt/` page, **Then** a "Currículo" link downloads the Portuguese PDF; on `/en/`
   pages "Résumé" downloads the English PDF.
2. **Given** the public PDFs, **Then** they contain no phone number and no email address.

---

### User Story 2 - Résumé matches the site (Priority: P1)

**Acceptance Scenarios**:

1. No "+2"/"+1" artifacts; education reads fev/2024 → dez/2027 (expected), not "5th semester".
2. ZG bullets cover Kafka, Userflow, Liquibase, Spock and generative AI.
3. Projects list AutoMatch (with only the owner's part), Linketinder, Web Crawler; no Digital
   Catalog.
4. One A4 page, real selectable text (ATS-readable).

---

### User Story 3 - Project clips (Priority: P2, blocked on owner)

Each project page shows a short muted looping clip when one exists.

## Requirements *(mandatory)*

- **FR-001**: Résumé sources live in the repo as HTML; PDFs are generated from them.
- **FR-002**: Phone and email MUST NOT be committed; the private version is generated outside the
  repo.
- **FR-003**: Résumé facts follow constitution I (career context, old résumé, owner answers).

## Success Criteria *(mandatory)*

- **SC-001**: `pdftotext` on both public PDFs finds no `@` and no phone pattern.
- **SC-002**: Each PDF is exactly one A4 page.

## Assumptions

- Skills lists keep the old résumé's claims, plus Spock and Liquibase from the ZG role.
- No languages section (levels not in the sources).
