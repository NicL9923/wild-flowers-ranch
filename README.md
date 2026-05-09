# Wild Flowers Ranch

Website for Wild Flowers Ranch — a six-acre working flower farm in Bridgeport, OR. Features an animated SVG tree scene, seasonal wildflower palettes, and tab-based content panels.

## Stack

- **Vite 8** · **React 19** · **Tailwind CSS 4**
- **Vitest 4** + Testing Library for tests
- **ESLint 10** (flat config) + **Prettier 3** + **Husky** pre-commit hooks

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command                 | Description                      |
| ----------------------- | -------------------------------- |
| `npm run dev`           | Start dev server                 |
| `npm run build`         | Production build                 |
| `npm run preview`       | Preview production build         |
| `npm test`              | Run tests (single pass)          |
| `npm run test:watch`    | Run tests in watch mode          |
| `npm run test:coverage` | Run tests with v8 coverage       |
| `npm run lint`          | Lint with ESLint                 |
| `npm run lint:fix`      | Lint and auto-fix                |
| `npm run format`        | Format with Prettier             |
| `npm run format:check`  | Check formatting without writing |

## Project structure

```
src/
  App.jsx                  # Root component — layout, tab state, tweaks
  index.css                # Design tokens, animations, global styles
  components/
    TreeScene.jsx           # Animated SVG tree + wildflowers
    Panels.jsx              # About, Visit, Bouquets, Contact tab panels
    TweaksPanel.jsx         # Floating debug panel + form controls
  test/
    setup.js                # jest-dom setup
    App.test.jsx            # Smoke tests
design/                    # Original HTML prototype (reference only)
```

## Design system

CSS custom properties in `index.css` define the full palette (`--tan`, `--sage`, `--ink`, `--bark`, `--leaf-*`, `--bloom-*`). The tree growth and wildflower animations are pure CSS keyframes driven by `--delay` and `--dur` custom properties set inline per element.
