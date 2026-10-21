# Quickstart: Foundation and Deploy Pipeline

Prereq: `nvm use` (Node 24), `npm ci`.

1. `npm test` → all unit tests pass.
2. `npm run build` → `dist/portfolio/browser/` contains `pt/index.html`, `en/index.html`,
   `404.html`, `pt/404.html`, `en/404.html`, `_redirects`.
3. `grep -l "Augusto S. Lima" dist/portfolio/browser/{pt,en}/index.html` → both files
   (content present without JS); `grep 'lang="en"' dist/portfolio/browser/en/index.html` → match.
4. `npx wrangler pages dev dist/portfolio/browser` (or any static server) → `/` lands on `/pt/`,
   the language switch toggles `/pt/` ↔ `/en/`, `/en/nope` shows the English not-found.
5. Push the branch → Cloudflare preview URL behaves as in step 4 (see
   [contracts/routes.md](contracts/routes.md)).
