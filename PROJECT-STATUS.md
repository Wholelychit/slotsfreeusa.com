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

## Website Independence Rule

SlotsFreeUSA must work independently.

The public site should load, crawl, and be reviewed without ChatGPT being open.

AI may help build, update, market, and manage the site. Add controlled AI later only when it clearly helps revenue, trust, or visitor clarity.

## Public Contact

Use this email for SlotsFreeUSA website feedback, affiliate inquiries, advertising questions, partner review requests, and content corrections:

`slotsfreeusa@gmail.com`

## Completed Safe Work

- Homepage has SEO title, meta description, canonical URL, Open Graph tags, schema markup, free-slot CTA, disclosure bar, Lucky Lou section, newsletter placeholder, review cards, and FAQ content.
- Review hub has comparison criteria, partner status labels, future partner review structure, and clear pending/approved/paused/removed language.
- Added `how-we-review.html` as a public review-standards and partner-trust page.
- Linked the review hub and homepage footer to `how-we-review.html`.
- Added `how-we-review.html` to `sitemap.xml`.
- Upgraded `slot-terms-explained.html` into a full SEO guide with FAQ schema, tables, plain-English definitions, safety language, and internal links.
- Added `slot-terms-explained.html` to `sitemap.xml`.
- Linked `free-slots.html`, `best-free-slots-for-beginners.html`, and `bonuses.html` to the slot terms guide.
- Added partner/footer trust links to `slot-terms-explained.html` without overwriting newer page content.
- Added `free-spins-explained.html` as a full SEO guide with FAQ schema, comparison table, safety language, and internal links.
- Added `free-spins-explained.html` to `sitemap.xml`.
- Linked `bonuses.html`, `best-free-slots-for-beginners.html`, and `slot-terms-explained.html` to the free spins guide.
- Added partner/footer trust links to `free-spins-explained.html`.
- Standardized `about.html` with canonical URL, favicon, disclosure bar, current nav/footer, and links to review standards and slot terms.
- Standardized `privacy.html` with canonical URL, favicon, disclosure bar, updated contact email, future tracking/email language, and current nav/footer.
- Standardized `terms.html` with canonical URL, favicon, disclosure bar, stronger disclaimers, and current nav/footer.
- Standardized `play-free-slots.html` with favicon, social casino navigation link, and full footer with partner/trust links.
- Standardized `affiliate-disclosure.html` footer with Slot Terms, Free Spins, How We Review, Partner With Us, and current trust links.
- Improved `free-slots.html` with consistent navigation, footer links, favicon, and links to review standards, bonus guide, responsible play, and beginner tips.
- Improved `bonuses.html` with stronger review-process links, safer offer language, and consistent footer links.
- Improved `responsible-gaming.html` with a safety-check table, stronger plain-English limits, and consistent footer links.
- Contact page now shows `slotsfreeusa@gmail.com` for website feedback, affiliate inquiries, advertising questions, partner review requests, and content corrections.
- Contact page links to `partner-with-us.html` for partner requirements.
- Added `partner-with-us.html` as a public affiliate and advertising inquiry page.
- Added `partner-with-us.html` to `sitemap.xml`.
- Homepage footer now links to `partner-with-us.html`.
- Sitemap includes `lastmod` dates.
- Robots file allows public crawling and blocks `/go/` redirect paths.
- Agent workflow rules are in place: do not ask Gerry to paste/create/update routine safe files manually.
- Added `CODEX-WORKFLOW.md` for Codex-first repo editing.
- Added `MANUAL-QA-CHECKLIST.md` for affiliate, crawl, mobile, footer, trust-page, and compliance checks.
- Expanded `PARTNER-CHECKLIST.md` with status labels, red flags, removal rules, and approval records.
- Added `AFFILIATE-APPLICATION-TRACKER.md` for outreach tracking.
- Added `AFFILIATE-OUTREACH-BATCH-001.md` for regulated casino, social casino, sponsorship, and follow-up outreach drafts.
- Added `SOCIAL-LAUNCH-BATCH-001.md` for launch posts, YouTube Shorts scripts, Pinterest titles, and hashtags.
- Added `REVIEW-STATUS-TEMPLATES.md` for pending, contacted, approved, paused, and removed partner language.
- README now lists the public contact email, QA checklist, partner files, independence rule, and controlled-AI-later rule.
- Added FAQ schema and visible FAQ content to `best-free-slots-for-beginners.html`, `sweepstakes-casino-guide.html`, and `what-are-social-casinos.html`.
- Hardened `js/app.js` for mobile menu accessibility, escape-key closing, link-close behavior, and safer Lucky Lou rendering.
- Hardened `js/free-slots-game.js` so the free slot game checks required elements before running and avoids duplicate-spin problems.
- Replaced the `search.html` placeholder with a real static search page.
- Added `js/site-search.js` with static page search across key SlotsFreeUSA pages.
- Added `slot-terms-explained.html` and `free-spins-explained.html` to static search results.
- Added inline search page styling after separate CSS creation was blocked by the connector.

## Known Blockers

- Separate `css/search.css` creation was blocked by the connector safety filter. Search page styling was added inline instead.
- Privacy page clickable `mailto:` patch was blocked by the connector safety filter, but the correct contact email is visible in text.
- Actual affiliate application submission may require official portal login, affiliate account setup, business details, tax/payment details, or partner-manager approval.
- No live affiliate links should be added until partner terms, age rules, location rules, tracking, and disclosures are checked.
- No live ad scripts should be added until ad network approval and privacy requirements are ready.
- No email signup should collect data until email provider, consent language, and privacy policy updates are ready.
- No public AI feature should be added until there is a clear trust, revenue, privacy, and safety reason.

## Next Safe Queue

1. Continue footer/navigation consistency pass across remaining public pages.
2. Check every sitemap page exists and has matching canonical URL.
3. Continue affiliate applications manually through official portals using the prepared outreach batches.
4. Record each submitted application in `AFFILIATE-APPLICATION-TRACKER.md` and/or marketing-system posting logs.
5. Keep all monetization links inactive until approval and disclosure checks are complete.

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
- uncontrolled public AI
- unclear production risk
