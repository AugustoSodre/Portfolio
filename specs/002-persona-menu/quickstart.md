# Quickstart: Persona-Style Menu and Navigation

1. `npm test` → menu keyboard tests pass.
2. `npm run build` → 13 prerendered routes; `dist/portfolio/browser/en/about/index.html` contains
   the "About" heading.
3. Serve the build; on `/pt/`: Tab to the first entry, ArrowUp wraps to "Contato", Enter opens
   `/pt/contact`, Escape returns with "Contato" focused.
4. Emulate `prefers-reduced-motion: reduce`: no animations run (`document.getAnimations()` empty
   after navigation).
5. 320px wide: no horizontal scroll on home or section pages.
