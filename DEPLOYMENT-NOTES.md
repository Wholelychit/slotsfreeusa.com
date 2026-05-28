# SlotsFreeUSA Deployment Notes

Last updated: 2026-05-28

## Hosting Source of Truth

SlotsFreeUSA is hosted through **Cloudflare**, not GitHub Pages.

Cloudflare DNS currently routes:

- `slotsfreeusa.com` to Cloudflare Worker `slotsfreeusa`
- `www.slotsfreeusa.com` to Cloudflare Worker `slotsfreeusa`

Keep those Worker routes active unless the owner intentionally migrates hosting later.

## Repository Role

The GitHub repository is the source-control and build workspace for website files, copy, assets, scripts, compliance pages, SEO files, and deployment documentation.

Repository:

- `Wholelychit/slotsfreeusa.com`

## Do Not Switch To GitHub Pages

Do not treat GitHub Pages as the active deployment target for this project.

Do not remove the Cloudflare Worker DNS records unless the owner clearly requests a hosting migration.

Do not replace Cloudflare Worker routing with GitHub Pages records without first confirming that the live Worker code has been copied into the repository.

## Current Cloudflare Setup Seen By Owner

Cloudflare DNS has four records:

- `_dmarc.slotsfreeusa.com` TXT record
- `slotsfreeusa.com` TXT SPF record
- `slotsfreeusa.com` Worker route to `slotsfreeusa`
- `www.slotsfreeusa.com` Worker route to `slotsfreeusa`

The two TXT records are email/security records and should stay.

The two Worker records are the live website routes and should stay.

## Current Repository Gap

No `wrangler.toml` or `wrangler.json` file was found in the repository during the 2026-05-28 check.

That means the live Worker may have been created directly in Cloudflare, or the deploy config is not yet stored in this repo.

## Safe Deployment Path

1. Keep Cloudflare Worker routes active.
2. Use GitHub for source files and documentation.
3. Find or export the live Worker code from Cloudflare.
4. Compare live Worker code against this repository before overwriting anything.
5. Add a safe Cloudflare deploy config only after the live source is confirmed.
6. Do not add private Cloudflare tokens, API keys, account IDs, or secrets to the repository.

## Cloudflare Manual Check

In Cloudflare, check:

1. Workers & Pages
2. Worker named `slotsfreeusa`
3. Deployments
4. Routes
5. Preview
6. Source/code view if available

If the Worker contains the designed website that was already online, copy or export that source before making major repo changes.

## Future Cloudflare Improvements

Safe improvements after source is confirmed:

- Add `_headers` for security headers if Cloudflare Pages/static assets are used.
- Add `_redirects` if static redirect rules are used.
- Add `wrangler.toml` only if the Cloudflare deploy method is confirmed.
- Add deployment checklist for Worker routes.
- Add cache rules for static assets.
- Add analytics only after privacy requirements are ready.

## Performance Rules

- Avoid oversized images.
- Avoid frameworks.
- Avoid unnecessary scripts.
- Keep CSS organized.
- Prioritize mobile speed.
- Keep game scripts lightweight.

## SEO Rules

- Maintain `sitemap.xml`.
- Maintain `robots.txt`.
- Use internal linking.
- Create evergreen article clusters.
- Keep disclosure language visible on money pages.
