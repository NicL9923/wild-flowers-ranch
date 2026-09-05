# Hosting

Golden Hour is a Vite static build on Cloudflare Workers Static Assets.

- Worker: `wild-flowers-ranch`.
- Public URL: `https://wild-flowers-ranch.nicl9923.workers.dev`.
- Configuration: `wrangler.jsonc`.
- Published directory: `dist/`.
- Missing paths return `public/404.html` with HTTP 404.
- No custom ranch domain is configured. WFT's DNS is unchanged.

## Automated deployment

`.github/workflows/deploy.yml` checks pull requests and deploys `main` after format,
lint, test, and build checks pass. Repository secrets are `CLOUDFLARE_API_TOKEN` and
`CLOUDFLARE_ACCOUNT_ID`. No credential belongs in the repository.

## Local deployment

On NicolasDESKTOP, the existing shared Cloudflare credential file has `CF_PAT` and
`CF_ACCT_ID`. Load and map them without printing their contents:

```bash
set -a
source /home/nicolas/dev/.resources/generalpats.env
set +a
CLOUDFLARE_API_TOKEN="$CF_PAT" CLOUDFLARE_ACCOUNT_ID="$CF_ACCT_ID" npm run deploy
```

`npm run deploy` builds and publishes the site. Run lint and tests first. To check
asset routing locally after building, use `npm run preview:cloudflare`.

Inspect versions with `npx wrangler deployments list`. Restore a previous version
with `npx wrangler rollback VERSION_ID` using the same credential mapping.

The static deployment model follows Cloudflare's
[Static Assets documentation](https://developers.cloudflare.com/workers/static-assets/),
checked September 5, 2026. No application server or database is required.
