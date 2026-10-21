# Augusto S. Lima · Portfolio

**PT** · Portfólio pessoal em Angular, com estilo suíço e um menu inspirado em Persona. Todas as
páginas são pré-renderizadas em HTML estático, em português (`/pt`) e inglês (`/en`), e publicadas
no Cloudflare Pages.

**EN** · Personal portfolio built with Angular: Swiss-style layout with a Persona-inspired menu.
Every page is prerendered to static HTML in Portuguese (`/pt`) and English (`/en`) and deployed on
Cloudflare Pages.

## Run / Rodar

```bash
nvm use        # Node 24
npm ci
npm start      # dev server: http://localhost:4200/pt
npm test       # unit tests (Vitest)
npm run build  # static output: dist/portfolio/browser
```

## Spec-driven development

Built with [GitHub Spec Kit](https://github.com/github/spec-kit). Project rules live in
[`.specify/memory/constitution.md`](.specify/memory/constitution.md); each feature has its spec,
plan and tasks in [`specs/`](specs/).

Feito com SDD via Spec Kit: as regras do projeto estão na constituição e cada feature tem spec,
plano e tarefas em `specs/`.

## Content / Conteúdo

All site text lives in `src/app/i18n/pt.ts` and `src/app/i18n/en.ts`. Both share one type, so a
missing translation fails the build.
