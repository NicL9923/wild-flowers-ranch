# Agent guidance

Vite 8 + React 19 + Tailwind CSS 4 project. Working directory: repo root.

## Commands

```bash
npm run dev          # dev server
npm run build        # production build (must pass before committing)
npm test             # vitest run
npm run lint         # eslint
npm run format       # prettier --write
```

## Key files

- `src/App.jsx` — root component, tab state, tweaks state
- `src/index.css` — all CSS custom properties, keyframes, layout (do not Tailwind-ify the animation or token rules)
- `src/components/TreeScene.jsx` — SVG scene; BRANCHES/CANOPY/GRASS/FLOWER_PALETTES are data arrays, edit those to change the scene
- `src/components/Panels.jsx` — one export per tab (AboutPanel, VisitPanel, BouquetsPanel, ContactPanel)
- `src/components/TweaksPanel.jsx` — self-contained floating debug widget; `useTweaks` hook lives here
- `design/` — original HTML prototype, reference only, excluded from ESLint

## Conventions

- Prettier runs on commit (Husky + lint-staged); run `npm run format` before touching many files
- ESLint flat config (`eslint.config.js`); `react-hooks/refs` is warn-only (intentional imperative drag pattern in TweaksPanel)
- Import order enforced by `@trivago/prettier-plugin-sort-imports`: `react` → third-party → local
- No TypeScript; plain JSX throughout
- CSS custom properties own the design tokens — don't replace them with Tailwind theme values
