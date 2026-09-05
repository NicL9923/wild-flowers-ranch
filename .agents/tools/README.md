# Repository tools

- `check-landing.js`: validates the production Golden Hour page at four widths, exercises scene controls, and saves desktop/mobile screenshots. Open the local or deployed site, then run `playwright-cli run-code --filename .agents/tools/check-landing.js`.

- `check-concepts.js`: Playwright CLI checks for the standalone concept gallery, responsive layouts, navigation, scene controls, and reduced motion; saves review screenshots in `.playwright-cli/`.

Run with Vite listening on port 5173:

```bash
npx --yes --package @playwright/cli playwright-cli open http://localhost:5173/design/concepts/index.html
npx --yes --package @playwright/cli playwright-cli run-code --filename .agents/tools/check-concepts.js
```
