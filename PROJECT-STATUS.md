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
- Affiliate disclosure page was strengthened with clearer revenue, review, and compliance language.
- Contact page was upgraded for reader feedback, business inquiries, correction requests, and privacy-safe limits.
- Sitemap now includes `lastmod` dates.
- Robots file allows public crawling and blocks `/go/` redirect paths.
- Agent workflow rules are in place: do not ask Gerry to paste/create/update routine safe files manually.
- Added `CODEX-WORKFLOW.md` for Codex-first repo editing.

## Known Blockers

- Creating `partner-with-us.html` was blocked by the connector safety filter during direct write. This page should be retried later in Codex or through a smaller safe write path.
- No live affiliate links should be added until partner terms, age rules, location rules, tracking, and disclosures are checked.
- No live ad scripts should be added until ad network approval and privacy requirements are ready.
- No email signup should collect data until email provider, consent language, and privacy policy updates are ready.

## Next Safe Queue

1. Retry or add partner inquiry page safely.
2. Add a `PARTNER-CHECKLIST.md` file for affiliate/program approval review.
3. Improve `bonuses.html` with a clearer bonus-terms explainer.
4. Improve `responsible-gaming.html` with stronger help-resource language and plain-English limits.
5. Improve `free-slots.html` and beginner guide internal links.
6. Add lightweight schema to key guide pages.
7. Add manual QA checklist for links, mobile menu, footer, sitemap, and disclosure language.

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
