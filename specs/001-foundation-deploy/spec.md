# Feature Specification: Foundation and Deploy Pipeline

**Feature Branch**: `redesign`

**Created**: 2026-10-21

**Status**: Draft

**Input**: User description: "Replace the 2024 static site with a new app shell: visual identity from the LinkedIn banner, Portuguese and English versions of every page, every page delivered as ready-made HTML, and a free hosting pipeline with a preview link per branch. Ship a minimal placeholder home so the pipeline is proven before real content."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Visitor opens the site and sees the new identity (Priority: P1)

A recruiter opens the portfolio link and immediately sees the owner's name, title, and the same
visual identity as the LinkedIn banner (dark background, green accent, same typefaces).

**Why this priority**: Without a working shell nothing else can be built or shown.

**Independent Test**: Open the home URL; name and title render with the banner's look, with
scripts disabled too.

**Acceptance Scenarios**:

1. **Given** a visitor with no language preference, **When** they open the root URL, **Then** they
   land on the Portuguese home.
2. **Given** a visitor with scripts disabled, **When** they open any page, **Then** the full text
   of that page is present.

---

### User Story 2 - Visitor switches language (Priority: P2)

A visitor reading Portuguese switches to English (and back) and stays on the equivalent page.

**Why this priority**: International and remote roles need an English version.

**Independent Test**: From `/pt/`, use the language switch; the URL becomes `/en/` and the text is
English.

**Acceptance Scenarios**:

1. **Given** a visitor on a Portuguese page, **When** they activate the language switch, **Then**
   they see the same page in English.
2. **Given** an English page, **When** it loads, **Then** the document declares English as its
   language (and Portuguese pages declare Portuguese).

---

### User Story 3 - Owner previews a change before it goes live (Priority: P3)

The owner pushes a branch and gets a private-enough preview link; merging to the main branch
publishes the live site.

**Why this priority**: Lets every later feature be checked before reaching recruiters.

**Independent Test**: Push a branch; a preview URL serves that branch's build.

**Acceptance Scenarios**:

1. **Given** a push to any branch, **When** the build finishes, **Then** a preview URL serves it.
2. **Given** a merge to the main branch, **When** the build finishes, **Then** the production URL
   serves it.
3. **Given** a build error, **When** the pipeline runs, **Then** the live site stays on the last
   good version.

### Edge Cases

- Unknown path (e.g. `/pt/nope`): a not-found page in the matching language with a link home.
- Path without a locale (e.g. `/projetos`): the Portuguese not-found page with a link home.
- A text key present in Portuguese but missing in English: the build fails.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The root URL MUST redirect to the Portuguese home.
- **FR-002**: Every page MUST exist in Portuguese (`/pt/...`) and English (`/en/...`).
- **FR-003**: Every page MUST be delivered as complete HTML (readable without scripts).
- **FR-004**: Each page MUST declare its language and have a unique, localized title and
  description.
- **FR-005**: A language switch MUST be visible on every page and keep the visitor on the
  equivalent page.
- **FR-006**: The visual identity MUST use the banner tokens: background `#0a0c10`, accent
  `#10b981`, display serif for the owner's name only, sans-serif for text, monospace for technical
  details. Dark theme only.
- **FR-007**: All site text MUST come from one content source per language, and both MUST be
  checked for the same structure at build time.
- **FR-008**: Pushes MUST produce preview deployments; the main branch MUST produce production.
- **FR-009**: The 2024 site files MUST be removed from the source (git history keeps them).
- **FR-010**: The placeholder home MUST show name, title, and links to LinkedIn and GitHub; no
  other content is in scope.

### Key Entities

- **Locale**: `pt` or `en`; drives URL prefix, document language, and content source.
- **Site content**: per-locale text (name, title, page titles, descriptions, nav labels).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The production home loads with name and title visible in under 1.5s on a mid-range
  phone on 4G (Lighthouse mobile LCP < 1.5s).
- **SC-002**: Lighthouse accessibility and SEO scores are 100 on both locale homes.
- **SC-003**: A push to a branch produces a working preview URL in under 5 minutes.
- **SC-004**: Text contrast meets WCAG 2.2 AA on every element of the shell.

## Assumptions

- Hosting is Cloudflare Pages free tier; the owner creates the account and connects the repo
  (guided). No custom domain yet.
- The legacy GitHub Pages redirect is handled in a later feature (006), not here.
- Fonts: Playfair Display, Inter, JetBrains Mono, as in the banner.
- The owner's name and title come from the career context: "Augusto S. Lima", "Desenvolvedor Full
  Stack" / "Full Stack Developer".
