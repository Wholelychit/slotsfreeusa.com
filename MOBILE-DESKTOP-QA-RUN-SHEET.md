# SlotsFreeUSA Mobile/Desktop QA Run Sheet

Last updated: 2026-05-28

Use this file for the remaining manual browser layout pass. This is not a redesign task. Do not add live ads, affiliate links, tracking, payments, accounts, or public AI during this check.

## Goal

Confirm SlotsFreeUSA looks finished and usable on common phone, tablet, and desktop widths before public promotion or partner follow-up.

## Viewports To Check

Use Chrome or Edge DevTools device toolbar.

1. Mobile narrow: 360px to 390px wide
2. Mobile large: 414px to 430px wide
3. Tablet: 768px wide
4. Desktop: 1280px or wider

## Priority Pages

Check these pages first:

1. `/`
2. `play-free-slots.html`
3. `free-slots.html`
4. `no-download-slots.html`
5. `search.html`
6. `reviews.html`
7. `how-we-review.html`
8. `partner-with-us.html`
9. `contact.html`
10. `responsible-gaming.html`
11. `privacy.html`
12. `terms.html`
13. `affiliate-disclosure.html`

## Fast Pass Test

For each page and viewport, check these five items:

1. No horizontal scrolling.
2. Header and menu are usable.
3. Main headline and first button are readable.
4. Cards, tables, and game areas do not clip.
5. Footer links are readable and not duplicated.

## Game Page Test

On `play-free-slots.html`, check:

- reels display correctly
- Spin works
- Reset works
- virtual credits update
- last win updates
- message text changes after spin
- rapid double-click does not break the game
- no real-money, deposit, payout, prize, or winning promise is implied

## Search Page Test

On `search.html`, test these searches:

- `slots`
- `bonus`
- `social`
- one no-result search such as `zzzztest`

Pass if the search is readable, useful, and does not require a server.

## Trust Page Test

Check these pages:

- `responsible-gaming.html`
- `affiliate-disclosure.html`
- `terms.html`
- `privacy.html`
- `how-we-review.html`
- `partner-with-us.html`
- `contact.html`

Pass if the pages clearly show:

- SlotsFreeUSA is informational/entertainment only
- site does not operate gambling
- site does not accept bets or payments
- site does not issue prizes or payouts
- affiliate/partner monetization is disclosed as future/conditional unless approved
- contact email is `slotsfreeusa@gmail.com`

## Pass / Fail Table

| Date | Viewport | Pages Checked | Result | Fix Needed |
|---|---|---|---|---|
|  | 360-390px |  |  |  |
|  | 414-430px |  |  |  |
|  | 768px |  |  |  |
|  | 1280px+ |  |  |  |

## If Something Fails

Record the issue in this format:

- Page:
- Viewport:
- Problem:
- Screenshot needed: yes/no
- Safe fix type: CSS / copy / link / JS / unclear

Fix only the specific issue. Do not redesign the site.

## Promotion Gate

Before public promotion or partner follow-up, the table above should show a pass or clearly documented minor issues that do not affect trust, navigation, safety, or mobile use.
