# SlotsFreeUSA Project Status

Last updated: 2026-05-28

## Current Stack

- Static HTML
- CSS
- JavaScript
- GitHub Pages source control
- Cloudflare-ready hosting target

No React, Vite, Next.js, TypeScript, build tools, private keys, live ad scripts, live tracking scripts, payment handling, uncontrolled public AI, or live affiliate links.

## Website Independence Rule

SlotsFreeUSA must work independently. The public site should load, crawl, and be reviewed without ChatGPT being open.

GitHub owns the code. Cloudflare or GitHub Pages hosts the public site. Visitors, Google, partners, and affiliates should be able to review the website directly.

## Public Contact

Use this email for website feedback, affiliate inquiries, advertising questions, partner review requests, and content corrections:

`slotsfreeusa@gmail.com`

## Current Site Direction

SlotsFreeUSA is a mobile-first adult information and entertainment site for:

- free slot-style demo play
- no-download slot guides
- social casino explainers
- sweepstakes casino education
- bonus-language guides
- safer-play education
- future ad and partner monetization after approval

The site must stay clear that it does not operate gambling, accept bets, process payments, manage outside accounts, issue payouts, or promise winnings.

## Safe Build Queue Review

Completed checks and safe work:

- Read the required repo guidance files that are present: `README.md`, `AGENTS.md`, `CODEX-WORKFLOW.md`, `PROJECT-STATUS.md`, `AFFILIATE-APPLICATION-TRACKER.md`, `AFFILIATE-APPLICATION-FORM-ANSWERS.md`, `AFFILIATE-SUBMISSION-LOG.md`, and `PARTNER-CHECKLIST.md`.
- Confirmed the homepage has title, meta description, canonical URL, disclosure bar, navigation, footer links, Open Graph tags, and schema markup.
- Confirmed `robots.txt` allows public crawling, blocks `/go/` redirect paths, and points to `https://slotsfreeusa.com/sitemap.xml`.
- Confirmed `sitemap.xml` exists and lists public pages.
- Confirmed sampled sitemap pages have canonical URLs, favicon links, navigation, and footer links.
- Added `no-download-slots.html` as a new evergreen SEO guide with FAQ schema, canonical URL, trust language, responsible-play reminders, and no live affiliate links.
- Added `no-download-slots.html` to `sitemap.xml`.
- Added `no-download-slots.html` to static site search in `js/site-search.js`.
- Updated `free-slots.html` to link to the no-download guide from the hero, guide card area, footer, and visitor safety note.
- Updated `CONTENT-PLAN.md` with live SEO clusters and the next safe content queue.
- Expanded `MANUAL-QA-CHECKLIST.md` with SEO guide checks, crawl checks, sitemap canonical checks, and search checks.
- Reviewed affiliate tracker and submission log for BetMGM, B2Spin / SpinBlitz, RSI / BetRivers, and Caesars.
- Added `FOLLOW-UP-CALENDAR.md` for one polite 5 to 7 business day follow-up after each submitted application or contact.
- Added `AFFILIATE-APPROVAL-CHECKLIST.md` as the required pre-live gate before any affiliate link, tracking URL, sponsored placement, or ad script can go public.
- Clarified `AFFILIATE-APPLICATION-TRACKER.md` so BetMGM, B2Spin / SpinBlitz, and RSI / BetRivers have clear application/contact instructions and Caesars remains Hold until verified.
- Clarified `AFFILIATE-SUBMISSION-LOG.md` with follow-up windows, approval gates, and no-live-link rules.
- Updated `README.md` to list the affiliate workflow docs and approval checklist.

## Current Affiliate Workflow Status

- BetMGM Partners: Ready to apply through the official BetMGM Partners portal. Use `AFFILIATE-APPLICATION-FORM-ANSWERS.md`, then record the submission and schedule follow-up.
- B2Spin / SpinBlitz: Ready to contact from `slotsfreeusa@gmail.com` using the prepared email. Record send date and schedule follow-up.
- RSI / BetRivers: Ready to contact through the official RSI contact form to request the correct affiliate/media partner path. Record reply path before applying.
- Caesars: Hold until verified. Do not use guessed portals or third-party pages.
- Display ads: Not ready. No live ad scripts until approval and privacy requirements are ready.

## Current Public Pages To Keep Crawlable

- `/`
- `play-free-slots.html`
- `about.html`
- `coming-soon.html`
- `free-slots.html`
- `no-download-slots.html`
- `slot-terms-explained.html`
- `free-spins-explained.html`
- `casino-bonus-terms-explained.html`
- `bonuses.html`
- `reviews.html`
- `how-we-review.html`
- `responsible-gaming.html`
- `privacy.html`
- `terms.html`
- `contact.html`
- `partner-with-us.html`
- `affiliate-disclosure.html`
- `best-free-slots-for-beginners.html`
- `sweepstakes-casino-guide.html`
- `what-are-social-casinos.html`
- `search.html`

## Known Blockers

- Local shell does not have `git` available, so this session used the GitHub connector for direct file commits.
- Separate `css/search.css` creation was previously blocked by the connector safety filter. Search page styling remains inline.
- Actual affiliate application submission may require official portal login, affiliate account setup, business details, tax/payment details, or partner-manager approval.
- BetMGM application cannot be marked submitted until the official portal submission is completed.
- B2Spin / SpinBlitz cannot be marked contacted until the email is sent from `slotsfreeusa@gmail.com`.
- RSI / BetRivers cannot be marked contacted until the official contact form is submitted.
- Caesars remains blocked until an official verified affiliate path is found.
- No live affiliate links should be added until partner terms, age rules, location rules, tracking, and disclosures are checked.
- No live ad scripts should be added until ad network approval and privacy requirements are ready.
- No email signup should collect data until email provider, consent language, and privacy policy updates are ready.
- No public AI feature should be added until there is a clear trust, revenue, privacy, and safety reason.

## Next Safe Queue

1. Submit BetMGM application through the official portal when account access is available, then update `AFFILIATE-SUBMISSION-LOG.md` and `FOLLOW-UP-CALENDAR.md`.
2. Send B2Spin / SpinBlitz inquiry from `slotsfreeusa@gmail.com`, then update `AFFILIATE-SUBMISSION-LOG.md` and `FOLLOW-UP-CALENDAR.md`.
3. Submit RSI / BetRivers contact form through the official RSI site, then update `AFFILIATE-SUBMISSION-LOG.md` and `FOLLOW-UP-CALENDAR.md`.
4. Keep Caesars on hold until an official verified affiliate path is found.
5. Keep all monetization inactive until approval and disclosure checks are complete.
6. Continue safe SEO content expansion only after affiliate workflow docs remain current.

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
