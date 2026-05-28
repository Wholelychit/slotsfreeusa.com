# Codex Workflow

Last updated: 2026-05-28

## Purpose

Codex is the main workflow for routine SlotsFreeUSA repository editing.

SlotsFreeUSA must stay simple, mobile-first, beginner-friendly, and compliance-aware.

## Current Stack

SlotsFreeUSA uses:

- HTML
- CSS
- JavaScript
- GitHub Pages
- Cloudflare

Do not convert this project to React, Vite, Next.js, TypeScript, npm, or any build tool unless Gerry clearly requests a full rebuild later.

## Why Codex Is Primary

Codex should handle routine repo work directly because it can read the repo, make safe file edits, and commit useful changes without making Gerry manually paste, create, replace, or update files.

The ChatGPT GitHub connector may show internal write-action labels like `create_file` or `update_file`. Those labels can be confusing. Use that connector mainly for small reads, checks, reviews, or emergency single-file edits when Codex is unavailable.

## Required Read Order

Before editing, read these files when they exist:

1. `README.md`
2. `AGENTS.md`
3. `AGENT-INSTRUCTIONS.md`
4. `LOCKED-CHECKPOINT.md`
5. `FILE-MANAGEMENT.md`
6. `PROJECT-STATUS.md`
7. `CODEX-WORKFLOW.md`

## Safe Work Allowed

Codex may directly handle:

- Markdown documentation updates
- homepage copy improvements
- support page improvements
- footer and navigation fixes
- SEO metadata checks
- sitemap and robots.txt updates
- accessibility notes and test checklists
- simple CSS improvements
- small JavaScript repairs that preserve current behavior
- beginner guide pages
- review-page improvements
- disclosure page improvements
- safer-play education pages
- affiliate planning documents before live monetization

## Do Not Change Without Direct Approval

Do not do these without direct approval:

- framework conversion
- React, Vite, Next.js, TypeScript, npm, or build-tool migration
- major deletion of working site code
- payment setup
- live ads
- live tracking scripts
- accounts or logins
- private keys or API tokens
- gambling operation features
- accepting bets or payments
- promising winnings
- compliance-risk changes

## SlotsFreeUSA Content Rules

Keep content clear, beginner-friendly, adult-focused, and honest about risk.

The site may discuss free slot-style entertainment, social casino reviews, bonus explainers, safer play education, and partner links.

The site must not operate gambling, accept bets, process payments, or promise winnings.

Use clear FTC-style disclosure language when affiliate or partner links are discussed.

## Current Safe Queue

1. Keep the site static and mobile-first.
2. Improve beginner guides and safer-play pages.
3. Keep affiliate disclosure, privacy, terms, contact, and responsible-gaming pages available.
4. Check homepage title, meta description, canonical URL, navigation, footer, robots.txt, and sitemap.xml.
5. Add useful review/topic pages gradually.
6. Avoid live ads, payment handling, private keys, tracking, and compliance-risk changes until intentionally configured.

## Reporting Rule

Commit useful safe changes. Report after several useful commits or when a real blocker appears.

Record blockers in `PROJECT-STATUS.md` instead of stopping early.
