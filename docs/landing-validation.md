# Custom-domain configuration validation

September 5, 2026, branch `connect-ranch-domain`, based on `668665b`.

- Cloudflare accepted the Free zone and both custom-domain bindings to `wild-flowers-ranch`.
- Verified all four scanned legacy DNS records against the old authoritative nameserver,
  imported them as DNS-only, and read back all six Cloudflare DNS records.
- Zone activation is pending the registrar nameserver change. Custom-hostname HTTPS
  has not been verified while delegation is pending.
- Production build and Wrangler deployment dry run passed. Configuration review
  confirmed exact hostnames, `custom_domain: true`, and the preserved workers.dev route.
- Existing application tests and browser checks below are reused: no application,
  artwork, styles, or dependency inputs changed.
- Final configuration SHA-256: `613068a577105c72d0e35d774ab06005c6aae24f6135017dbabe5b479be55e1a`.

---

# Golden Hour release validation

Validated September 5, 2026. Nicolas selected Golden Hour and authorized shipping it.

- Production build, three behavior tests, ESLint, and repository formatting passed.
- Browser checks passed at 1280, 820, 390, and 320 pixels, including loaded artwork,
  overflow, keyboard controls, golden/blue hour, pause/resume, pointer parallax,
  reduced motion, and family navigation. Zero page errors in the browser run.
- Visually inspected desktop and mobile screenshots of the final production page.
- Independent full-diff review found a manual-workflow deployment guard issue, a
  missing space at the mobile line break, and stale asset provenance paths. All
  three were fixed and independently rechecked.
- Cloudflare account access and GitHub deployment secrets are configured. Hosted
  verification follows the main-branch deployment; see GitHub Actions for its result.

The repeatable browser check is [.agents/tools/check-landing.js](../.agents/tools/check-landing.js).
Open the deployed or local origin before running it. Screenshots are saved locally
in .playwright-cli/. Historical concept validation follows below.

## Production source hashes

```text
04aa801172aedc7403824c7eb727d11db2b50b963b7b24d1e6ca18d89862964e  src/App.tsx
2ffeb5fffc6b1223c9a06ac4f0810cf12fb82431b343fca7612ce6160236e91b  src/index.css
48903d51a86cfd10ae431ea3699259c12666e56616dc165da843f284b5511523  index.html
25c465361e4c546097145634beb1e047d167a4e303849322cc479e3561e4aa2a  wrangler.jsonc
8b072b45caeba9e23679bc8380fc4aa8d4477cdec51483c313313a38d4e4bac8  .github/workflows/deploy.yml
e5d7bdf2d59f6ab7f562156a1ca60bc3ec26c756dd4f6c30f9262a946b7fd91f  src/test/App.test.tsx
f1c8b41446a9ecc42a8d0070ab67fc5e4b9a1f3c5f4cbd8bff15026689cb2797  .agents/tools/check-landing.js
d1f2a975822a9dd3d406fe4947c84200df0ae56e761b70b3af39d662ea4e55cf  public/images/golden-hour.webp
61ae61659e55e887ffb4a7ecc4d0e01fb607f3e037dda16e4beba335cf6c7211  public/images/ranch-mark.webp
```

---

# Concept validation ledger

Validated September 5, 2026, on branch `t3code/wildflowers-ranch-landing-concepts`,
based on `5701b05`. The fresh worktree was confirmed to contain the fetched
`origin/main` tip before editing.

| Check                                                                                | Result                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run build`                                                                      | Passed, including TypeScript and Vite. Final concept HTML, CSS, and JS in `dist/concepts/` match their source files byte for byte.                                                                                                                                                     |
| `npm test`                                                                           | Passed, both existing React tests. Reused after changes limited to standalone concepts, documentation, and the browser-check tool.                                                                                                                                                     |
| `npm run lint`                                                                       | Passed with five existing warnings in `src/components/TweaksPanel.tsx`.                                                                                                                                                                                                                |
| Prettier on the new and edited concept, documentation, configuration, and tool files | Passed. The existing root HTML received only its entry-point fix.                                                                                                                                                                                                                      |
| `node --check public/concepts/concepts.js`                                           | Passed.                                                                                                                                                                                                                                                                                |
| Playwright browser checks                                                            | Passed across all three concepts at 1280, 820, 390, and 320 CSS pixels. No horizontal overflow; artwork loaded and selection states matched.                                                                                                                                           |
| Interaction checks                                                                   | Passed keyboard selection, browser Back/Forward, direct concept URLs, unknown-concept fallback, family anchor, gallery selection and focus, blue-hour toggle, pause/resume, retained settings, and system reduced motion. Zero page JavaScript errors in the completed Playwright run. |
| Visual inspection                                                                    | Inspected all three concepts at desktop and phone widths. Screenshot evidence is in the local `.playwright-cli/` directory.                                                                                                                                                            |
| Cloudflare                                                                           | `npx wrangler@4 deploy --dry-run --config wrangler.concepts.jsonc` passed using Wrangler 4.129.0. No deployment or account access check.                                                                                                                                               |
| `git diff --check`                                                                   | Passed.                                                                                                                                                                                                                                                                                |

Repeat browser checks with the command in [.agents/tools/README.md](../.agents/tools/README.md).
The tool captures the six desktop and mobile screenshots. The system-wide
`playwright-cli` command was absent, so the CLI was run with `npx`. The initial
embedded browser rendered the first previews, but later screenshot requests failed;
the completed validation used the separate Playwright CLI browser.

## Validated source state

SHA-256 hashes of the final rendered concept files and browser check:

```text
4618aa82b39326cd8591843bb548534d9018aae55155ff653e12bdd25d6088f6  public/concepts/index.html
461f989e1f38c5da736438a92c6f813683ae0775403d1b046fb053894920b251  public/concepts/concepts.css
ae3930bfec21a92c398ffb42c84f030e36b72eaebd89a850ce49fd3c31e25a14  public/concepts/concepts.js
15d644347dc84380e359a7aff6608c60400d060a67ef7a5e868611954f476ce9  public/concepts/assets/botanical-brand.webp
2324d79b183c0ab3840bf8ba4f71d7a57f8540b4eeaf720128618bcdc4ec38dc  public/concepts/assets/field-notes.webp
d1f2a975822a9dd3d406fe4947c84200df0ae56e761b70b3af39d662ea4e55cf  public/concepts/assets/golden-hour.webp
f479b416fe6e8324b6ea9ff53fa011c0e141302d5a4affd9f101265c0a0d4171  public/concepts/assets/little-world.webp
61ae61659e55e887ffb4a7ecc4d0e01fb607f3e037dda16e4beba335cf6c7211  public/concepts/assets/ranch-mark.webp
f1383bcf84eeb53a4f83e40f18c964c54eef6baf6a20690aa67bf48163d2e6a1  .agents/tools/check-concepts.js
6be21d19b7c88b3396a3800f5cdd5f720ba8b80334aa29b0bd6c01d9d6738a96  index.html
2ae2a4a837fc1004d6a251579597e1bd82a4a882545129cd41a1312ab8ce395b  wrangler.concepts.jsonc
```
