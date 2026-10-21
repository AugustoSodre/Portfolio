# Data Model: Foundation and Deploy Pipeline

## Locale
- Values: `pt` (default), `en`.
- `isLocale(value)`: true only for those two.
- `switchLocalePath(path, to)`: replaces the first path segment with `to`, keeps the rest
  (`/pt/projetos/x` → `/en/projetos/x`); a path without a locale becomes `/<to>/`.

## SiteContent (one per locale, same shape enforced by type)
- `meta`: `{ title: string; description: string }` for the home.
- `name`: `"Augusto S. Lima"` (same in both).
- `role`: `"Desenvolvedor Full Stack"` / `"Full Stack Developer"`.
- `links`: `{ linkedin: url; github: url }`.
- `langSwitch`: `{ label: string; target: Locale }` (e.g. pt page shows "English").
- `notFound`: `{ title: string; body: string; home: string }`.

Features 002+ extend `SiteContent`; both locales must be updated together or the build fails.
