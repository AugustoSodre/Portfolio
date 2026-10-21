# Research: Persona-Style Menu and Navigation

## Page transitions
- **Decision**: `withViewTransitions({ skipInitialTransition: true })` and a CSS clip-path wipe on
  `::view-transition-new(root)`.
- **Rationale**: Native, no dependency; unsupported browsers just switch instantly (spec edge case).
- **Alternatives**: `@angular/animations` route animations rejected (deprecated direction in
  recent Angular, more code).

## Selection marker
- **Decision**: Per-entry skewed bar (`::before`, `skewX(-12deg)`) that scales in from the left on
  hover and `:focus-visible`; the focused entry also shifts right and gets an outline.
- **Rationale**: CSS only, reads as a P3R swipe, and focus never relies on color alone.
- **Alternatives**: One JS-positioned bar that slides between entries rejected for now: measuring
  layout adds code and hydration timing issues for little gain.

## Escape back to the menu
- **Decision**: Section page listens for Escape (ignored when focus is in a form field) and
  navigates home with `state: { focus: slug }`; home reads `history.state.focus` after render.
- **Rationale**: Survives the view transition and needs no service.

## Slugs
- **Decision**: English slugs in both locales.
- **Rationale**: `switchLocalePath` keeps working unchanged (FR-003).
