# Data Model: Persona-Style Menu and Navigation

## Section
- `slug`: `projects` | `experience` | `about` | `contact` (this order is the menu order).

## SiteContent additions
- `nav`: label per section (pt: Projetos, Experiência, Sobre, Contato; en: Projects, Experience,
  About, Contact).
- `sections`: per slug `{ title; description }` for the page `<title>` and meta description.
- `menu`: `{ label }` for the nav landmark and `{ back }` hint shown on section pages ("Esc · voltar").
