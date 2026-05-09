# Agent guidance

Vite 8 + React 19 + TypeScript 6 + Tailwind CSS 4 project. Working directory: repo root.

## Commands

```bash
npm run dev          # dev server
npm run build        # tsc --noEmit && vite build (must pass before committing)
npm run typecheck    # type-check only
npm test             # vitest run
npm run lint         # eslint
npm run format       # prettier --write
```

## Key files

- `src/App.tsx` — root component, tab state, tweaks state; `Season`/`Density` types defined here
- `src/index.css` — all CSS custom properties, keyframes, layout (do not Tailwind-ify the animation or token rules)
- `src/vite-env.d.ts` — Vite client types (CSS/asset imports)
- `src/components/TreeScene.tsx` — SVG scene; `BRANCHES`/`CANOPY`/`GRASS`/`FLOWER_PALETTES` are typed data arrays
- `src/components/Panels.tsx` — one export per tab (AboutPanel, VisitPanel, BouquetsPanel, ContactPanel)
- `src/components/TweaksPanel.tsx` — self-contained floating debug widget; generic `useTweaks<T>` hook lives here
- `design/` — original HTML prototype, reference only, excluded from ESLint and tsc

## Conventions

- Prettier runs on commit (Husky + lint-staged); run `npm run format` before touching many files
- ESLint flat config (`eslint.config.js`); `react-hooks/refs` is warn-only (intentional imperative drag pattern in TweaksPanel)
- Import order enforced by `@trivago/prettier-plugin-sort-imports`: `react` → third-party → local
- TypeScript 6 with strict mode; `tsconfig.json` targets `src/` only
- CSS custom properties own the design tokens — don't replace them with Tailwind theme values
