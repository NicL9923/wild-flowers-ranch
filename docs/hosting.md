# Hosting

Golden Hour is a Vite static build on Cloudflare Workers Static Assets.

- Worker: `wild-flowers-ranch`.
- Custom domains: `https://wildflowersranch.com` and `https://www.wildflowersranch.com`.
- Fallback URL: `https://wild-flowers-ranch.nicl9923.workers.dev`.
- Configuration: `wrangler.jsonc`.
- Published directory: `dist/`.
- Missing paths return `public/404.html` with HTTP 404.
- Both custom domains are bound to the Worker and declared in `wrangler.jsonc`.

## Domain activation

The Cloudflare Free zone was created on September 5, 2026. Both custom-domain
bindings were accepted, but public DNS and HTTPS activation require the registrar
to delegate `wildflowersranch.com` to these exact nameservers:

```text
bob.ns.cloudflare.com
irena.ns.cloudflare.com
```

Replace the four `ns-cloud-d*.googledomains.com` nameservers at the registrar with
those two. Domain registration stays with the current registrar. Cloudflare handles
the hostname DNS records and certificates. Both hostnames serve the same site;
there is no `www` redirect. The workers.dev URL remains available during activation.

The DNS scan found existing `agent`, `cloud`, and `tv` A records pointing to
`40.160.88.167`, plus Squarespace's `_domainconnect` CNAME. All four were checked
against the current authoritative nameserver and copied as DNS-only records.

Before activation, inspect the zone status in Cloudflare and check delegation with
`dig NS wildflowersranch.com +short`. Once active, verify both HTTPS hostnames and
a missing path returning the branded 404. No WFT DNS records were changed.

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
