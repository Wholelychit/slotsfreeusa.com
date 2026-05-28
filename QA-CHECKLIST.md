# SlotsFreeUSA Manual QA Checklist

Last updated: 2026-05-28

Use this checklist before pushing major site changes or connecting live monetization.

## Page Basics

Check every public page for:

- one clear H1
- useful title tag
- meta description
- canonical URL
- mobile viewport tag
- favicon link
- working stylesheet path
- clear 21+ or safety language where needed

## Navigation

Check:

- logo returns to homepage
- mobile menu button appears on small screens
- mobile menu opens and closes
- Home link works
- Play Free link works
- Free Slots link works
- Bonuses link works
- Reviews link works
- Social Casinos link works
- Responsible Play link works

## Footer

Footer should include useful links to:

- About
- Play Free
- Free Slots
- Bonuses
- Reviews
- How We Review
- Beginner Slots
- Sweepstakes Guide
- Social Casinos
- Responsible Play
- Contact
- Privacy
- Terms
- Disclosure

## Internal Links

Check that guide pages link to helpful next steps:

- play-free-slots.html
- bonuses.html
- reviews.html
- how-we-review.html
- responsible-gaming.html
- affiliate-disclosure.html when money links are discussed

## Safety and Compliance Language

Remove or rewrite any claim that suggests:

- guaranteed winnings
- easy money
- secret slot systems
- risk-free gambling
- gambling as income
- legal everywhere
- no restrictions
- no need to read terms

## Monetization Safety

Before adding live money links:

- partner approval is confirmed
- tracking link is confirmed
- destination URL is checked
- age and location rules are checked
- terms are checked
- disclosure appears near links
- privacy policy is reviewed if tracking changes

Do not add live ad scripts, tracking scripts, or email collection until approval and privacy setup are ready.

## Technical Files

Check:

- robots.txt allows public pages
- robots.txt blocks `/go/` redirect paths if used
- sitemap.xml includes all public pages
- sitemap lastmod dates are current after major changes
- no private keys, tokens, account IDs, or passwords are in the repo

## Mobile Check

On phone width:

- text is readable
- buttons are easy to tap
- cards stack cleanly
- tables scroll if needed
- no content is cut off
- footer links are usable

## Final Review

Before marking a change complete:

1. Open homepage.
2. Open play-free-slots page.
3. Open bonuses page.
4. Open reviews page.
5. Open how-we-review page.
6. Open responsible-gaming page.
7. Test mobile menu.
8. Check footer links.
9. Check disclosure language.
10. Record any blocker in PROJECT-STATUS.md.
