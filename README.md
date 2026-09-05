# Wild Flowers Ranch

Golden Hour is the family landing page for Kim, Isa, Maya, and Nicolas. It has a
sunset wildflower prairie, a glowing ranch house, a campfire, and a small family
section. Nicolas selected this direction from the initial concept gallery.

## Development

```bash
npm ci
npm run dev
```

Open `http://localhost:5173/`.

```bash
npm run build
npm test
npm run lint
npm run format:check
npm run preview
```

The site uses React 19, TypeScript 6, and Vite 8. CSS custom properties own the
palette and layout. Scene controls switch between golden and blue hour, pause
motion, and honor the system's reduced-motion preference.

## Hosting

Cloudflare Workers Static Assets serves the production `dist/` directory. The
configuration is in `wrangler.jsonc`. Pull requests run the quality checks; pushes
to `main` deploy through GitHub Actions. See [hosting notes](docs/hosting.md).

## Files

- `src/App.tsx`: production page and scene interactions.
- `src/index.css`: Golden Hour styles and responsive layout.
- `public/images/`: production scene and ranch mark.
- `public/404.html`: missing-page response.
- `src/test/App.test.tsx`: family content and scene-control tests.
- `.agents/tools/check-landing.js`: browser validation and screenshots.
- `design/concepts/`: archived HTML concept gallery and its artwork.
- `design/legacy-react/`: archived tree prototype.

Design archives are excluded from production output, linting, and TypeScript.
[Image prompts and provenance](docs/landing-image-prompts.json) document the original
artwork. The generated ranch scene is an imagined setting.
