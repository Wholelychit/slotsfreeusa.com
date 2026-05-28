# SlotsFreeUSA Deployment Notes

Last updated: 2026-05-28

## Hosting Source of Truth

SlotsFreeUSA should be restored to the **Cloudflare Pages project** named:

- `slotsfreeusa-com`

Cloudflare reported that the deployed Worker named `slotsfreeusa` only contains a placeholder coming-soon page.

Cloudflare also reported that the original website still exists at:

- `slotsfreeusa-com.pages.dev`

That Pages project is the likely original designed website.

## Current Recovery Decision

Use Cloudflare Pages project `slotsfreeusa-com` as the live website target.

Do not use GitHub Pages for this project unless the owner clearly requests a future migration.

Do not keep the placeholder Worker as the root website if the Pages project contains the designed site.

## DNS Recovery Plan

In Cloudflare:

1. Remove or detach Worker `slotsfreeusa` from `slotsfreeusa.com` and `www.slotsfreeusa.com`.
2. Do not delete the Worker yet; just detach it from the live custom domains/routes.
3. Restore `slotsfreeusa.com` to the Cloudflare Pages project `slotsfreeusa-com`.
4. Restore `www.slotsfreeusa.com` to the Cloudflare Pages project `slotsfreeusa-com`.
5. Confirm HTTPS is active.
6. Confirm `slotsfreeusa-com.pages.dev` still works.
7. Confirm the custom domain status is active in the Pages project.

## Keep These DNS Records

Do not delete these email/security records:

- `_dmarc.slotsfreeusa.com` TXT record
- `slotsfreeusa.com` SPF TXT record

## Repository Role

The GitHub repository is the source-control and build workspace for website files, copy, assets, scripts, compliance pages, SEO files, and deployment documentation.

Repository:

- `Wholelychit/slotsfreeusa.com`

## Important Source-Control Gap

The live Cloudflare Pages project may contain the original designed site, but the repository may not yet match it.

Before replacing the Cloudflare Pages project or making a major redesign, compare the deployed Pages project against this repository.

## Safe Deployment Path

1. Restore the custom domain to Cloudflare Pages project `slotsfreeusa-com`.
2. Verify the old designed website is visible at `slotsfreeusa.com`.
3. Export or connect the Pages project source if possible.
4. Compare the Pages source against this GitHub repository.
5. Bring the repository into sync with the best live version.
6. Continue building from the recovered live design.

## Do Not Do Yet

- Do not delete the Pages project.
- Do not delete the email TXT records.
- Do not publish over the Pages project until the live design is reviewed.
- Do not add live affiliate links until partner terms, age rules, location rules, tracking, and disclosures are checked.
- Do not add live ad scripts until ad network approval and privacy requirements are ready.
- Do not add private Cloudflare tokens, API keys, account IDs, or secrets to the repository.

## Future Cloudflare Improvements

Safe improvements after source is confirmed:

- Add `_headers` for security headers if static Pages assets are used.
- Add `_redirects` if static redirect rules are used.
- Add a confirmed Cloudflare Pages deployment checklist.
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
