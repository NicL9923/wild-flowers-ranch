> Archived design study. Golden Hour is now the production page at `/`. Current deployment instructions are in [hosting.md](hosting.md). The commands and deployment status below describe the initial concept stage.

# Family landing page concepts

The initial drawing board is at `design/concepts/index.html`. Start Vite with
`npm run dev`, then visit `http://localhost:5173/design/concepts/index.html`. Include
`index.html` when using Vite's development server, which otherwise serves the old
React prototype for this directory URL.

| Direction    | Intent                                                                                                                | Direct preview                                                                   |
| ------------ | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Golden hour  | A wide prairie at sunset with an illuminated ranch house and campfire. Large cream serif type over the scene.         | [Preview](http://localhost:5173/design/concepts/index.html?concept=golden-hour)  |
| Little world | A miniature ranch diorama on forest green. Warm windows, a copper roof, wildflowers, and four chairs around the fire. | [Preview](http://localhost:5173/design/concepts/index.html?concept=little-world) |
| Field notes  | A painted prairie on cream paper, centered editorial type, and botanical colors.                                      | [Preview](http://localhost:5173/design/concepts/index.html?concept=field-notes)  |

The selector updates the URL and supports browser Back and Forward. Scene settings
persist while comparing concepts. Blue hour applies a darker color treatment and
adds stars. Pointer movement shifts the artwork slightly; fireflies animate with CSS.
The pause control stops motion, and the page honors the system's reduced-motion setting.

These are image-based visual studies with a sense of depth, not navigable 3D models.
The family section uses first names and decorative flowers, with no invented biographies,
photos, location, founding date, or public business offerings. The scenes depict an
imagined ranch. The drawing-board selector and comparison gallery are review UI to
remove when a final direction is chosen.

## Assets

All artwork used by the page is saved in `design/concepts/assets/`.

- `ranch-mark.webp` is a resized copy of the supplied `PWAIconColor.png`.
- `botanical-brand.webp` is a resized copy of the supplied `WildFlowersRanchLogoConcept.png`,
  available as a branding reference in the concept gallery.
- `golden-hour.webp`, `little-world.webp`, and `field-notes.webp` were generated with
  the built-in imagegen tool on September 5, 2026. Exact prompts are in
  [landing-image-prompts.json](landing-image-prompts.json). Images were encoded as WebP
  with ImageMagick at quality 86. Original PNGs remain in the local generated-images folder.

The original branding files remain untouched in Nicolas's Documents folder.
The page uses Cormorant Garamond and DM Sans from Google Fonts, with local serif and
sans-serif fallbacks. There are no added application dependencies.

## Hosting

Use Cloudflare Workers Static Assets, matching WFT's platform. WFT's local
`wrangler.jsonc` confirms Workers plus static assets, with a custom Worker for its
own routing. This concept page only needs static files.

The prepared `wrangler.concepts.jsonc` publishes `design/concepts/` as an independent
site, putting the drawing board at `/` without publishing the older React prototype.
It does not configure a custom domain. No deployment or DNS change was made.

To check the configuration locally without publishing:

```bash
npx wrangler@4 deploy --dry-run --config wrangler.concepts.jsonc
```

Once a hosted concept preview is wanted, the publishing command is:

```bash
npx wrangler@4 deploy --config wrangler.concepts.jsonc
```

The eventual landing page can use the same static hosting approach. A database and
application server are unnecessary for the current scope. The prototype's `noindex`
tag discourages indexing; it is not access control.

Cloudflare's [Static Assets overview](https://developers.cloudflare.com/workers/static-assets/)
and [static-site setup guide](https://developers.cloudflare.com/workers/static-assets/get-started/)
confirm this deployment model. Checked September 5, 2026. High confidence in the
platform fit; account access, the final domain, and deployment have not been checked.

## Validation

See [the validation ledger](landing-validation.md) for checks tied to this prototype.
