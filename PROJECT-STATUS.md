# SlotsFreeUSA Project Status

Last updated: 2026-05-28

## Codex-first workflow

Codex is the primary workflow for routine SlotsFreeUSA repository editing.

Use the ChatGPT GitHub connector only for small reads, checks, reviews, or emergency single-file edits when Codex is unavailable.

Current workflow file:

- `CODEX-WORKFLOW.md`

## Current Stack

- Static HTML
- CSS
- JavaScript
- GitHub Pages
- Cloudflare-ready

No React, Vite, Next.js, TypeScript, build tools, private keys, live ad scripts, live tracking scripts, or payment handling.

## Current Site Direction

SlotsFreeUSA is a mobile-first adult information and entertainment site for:

- free slot-style demo play
- social casino explainers
- sweepstakes casino education
- bonus-language guides
- safer-play education
- future ad and partner monetization

The site must stay clear that it does not operate gambling, accept bets, process payments, manage accounts, or promise winnings.

## Completed Safe Work

- Homepage has SEO title, meta description, canonical URL, Open Graph tags, schema markup, free-slot CTA, disclosure bar, Lucky Lou section, newsletter placeholder, review cards, and FAQ content.
- Review hub has comparison criteria and future partner review structure.
- Added `how-we-review.html` as a public review-standards and partner-trust page.
- Linked the review hub and homepage footer to `how-we-review.html`.
- Added `how-we-review.html` to `sitemap.xml`.
- Improved `free-slots.html` with consistent navigation, footer links, favicon, and links to review standards, bonus guide, responsible play, and beginner tips.
- Improved `bonuses.html` with stronger review-process links, safer offer language, and consistent footer links.
- Improved `responsible-gaming.html` with a safety-check table, stronger plain-English limits, and consistent footer links.
- Affiliate disclosure page was strengthened with clearer revenue, review, and compliance language.
- Contact page was upgraded for reader feedback, business inquiries, correction requests, and privacy-safe limits.
- Sitemap now includes `lastmod` dates.
- Robots file allows public crawling and blocks `/go/` redirect paths.
- Agent workflow rules are in place: do not ask Gerry to paste/create/update routine safe files manually.
- Added `CODEX-WORKFLOW.md` for Codex-first repo editing.

## Known Blockers

- Updating `PARTNER-CHECKLIST.md` through the ChatGPT GitHub connector was blocked by the connector safety filter. Existing checklist remains in place and should be expanded later through Codex or smaller safe writes.
- Creating `partner-with-us.html` was blocked by the connector safety filter during direct write. This page should be retried later in Codex or through a smaller safe write path.
- No live affiliate links should be added until partner terms, age rules, location rules, tracking, and disclosures are checked.
- No live ad scripts should be added until ad network approval and privacy requirements are ready.
- No email signup should collect data until email provider, consent language, and privacy policy updates are ready.

## Next Safe Queue

1. Add manual QA checklist for links, mobile menu, footer, sitemap, disclosure language, and legal-risk wording.
2. Add lightweight schema to key guide pages where safe.
3. Improve `best-free-slots-for-beginners.html` with better internal links.
4. Improve `sweepstakes-casino-guide.html` with clearer terms and review-standard links.
5. Improve `what-are-social-casinos.html` with internal links and plain-language examples.
6. Retry partner inquiry page later through Codex or smaller safe write path.
7. Expand `PARTNER-CHECKLIST.md` later through Codex or smaller safe write path.

## Stop Points

Stop only for:

- missing repository write permission
- private keys or credentials
- payment setup
- live ad scripts
- live affiliate tracking
- account sign-ins
- major framework changes
- major code deletion
- compliance-risk claims
- unclear production risk
