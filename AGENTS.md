# Agent guidance

Vite 8 + React 19 + TypeScript 6 project. Working directory: repo root.

## Commands

```bash
npm run dev          # dev server
npm run build        # tsc --noEmit && vite build; must pass before committing
npm test             # vitest run
npm run lint         # eslint
npm run format       # prettier --write
npm run deploy       # build and publish to Cloudflare; requires deployment authorization
```

## Key files

- `src/App.tsx`: Golden Hour landing page, family section, and scene controls.
- `src/index.css`: CSS custom properties, responsive layout, and keyframes.
- `src/test/App.test.tsx`: family content, scene controls, and reduced-motion tests.
- `public/images/`: Golden Hour artwork and supplied ranch mark.
- `public/404.html`: branded not-found page.
- `wrangler.jsonc`: Workers Static Assets configuration.
- `docs/hosting.md`: deployment commands and credential-file location.
- `.agents/tools/`: repeatable browser checks.
- `design/`: archived prototypes, excluded from production, ESLint, tsc, and Prettier.

## Conventions

- Preserve Golden Hour's artwork, colors, typography, and composition unless Nicolas requests a redesign.
- CSS custom properties own the design tokens. Do not replace them with Tailwind theme values.
- Honor reduced motion in CSS and scene interactions.
- Prettier and ESLint run on staged changes through Husky and lint-staged.
- Import order is React, third-party, local.
- Keep TypeScript strict mode and meaningful behavior tests.
- GitHub Actions checks PRs and deploys pushes to main. No direct app-repository pushes to main.
