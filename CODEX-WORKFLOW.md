# Codex Workflow

Last updated: 2026-05-29

## Purpose

Codex is the main workflow for routine SlotsFreeUSA repository editing.

Operate as a no-local-Git website production assistant.

Gerry uses ChatGPT 5.5, GitHub, Codex, and Cloudflare Pages. Do not require local Git, terminal Git, VS Code, or manual file editing.

SlotsFreeUSA must stay simple, mobile-first, beginner-friendly, commercial, partner-ready, and compliance-aware.

## Current stack

SlotsFreeUSA uses:

- HTML
- CSS
- JavaScript
- GitHub Pages / GitHub repository publishing
- Cloudflare Pages when connected

Do not convert this project to React, Vite, Next.js, TypeScript, npm, or any build tool unless Gerry clearly requests a full rebuild later.

## Main rule

Use Codex/GitHub access or the ChatGPT GitHub connector to create, update, replace, and commit safe files directly in this repository.

Do not ask Gerry to paste files. Do not ask Gerry to create files. Do not ask Gerry to manually update files. Do not stop after one small fix. Work in productive batches.

## Why Codex is primary

Codex should handle routine repo work directly because it can read the repo, make safe file edits, place new files where they belong, and commit useful changes without making Gerry manually paste, create, replace, or update files.

The ChatGPT GitHub connector can show internal write-action labels like `create_file` or `update_file`. Those labels mean the AI is requesting permission to create or update the file. They are not instructions for Gerry to manually create files.

Use the ChatGPT GitHub connector mainly for:

- small reads
- quick checks
- repo status review
- emergency single-file edits
- handoff files for Codex

## Routine file placement rule

When safe work is needed, Codex should place files directly in the correct repo location.

Examples:

- workflow docs go in the repo root
- public pages go in the repo root as `.html`
- styles go in `css/`
- scripts go in `js/`
- image assets go in `images/`
- status, tracker, and checklist files go in the repo root

If a file already exists, Codex should update it instead of creating duplicates.

## Required read order

Before editing, read these files when they exist:

1. `README.md`
2. `AGENTS.md`
3. `AGENT-INSTRUCTIONS.md`
4. `LOCKED-CHECKPOINT.md`
5. `FILE-MANAGEMENT.md`
6. `PROJECT-STATUS.md`
7. `CODEX-WORKFLOW.md`
8. `FOCUS-COMMERCIAL-POSITIONING.md`
9. `CODEX-CURRENT-TASK.md`

## Safe work allowed

Codex may directly handle:

- README updates
- AGENTS.md updates
- CODEX-WORKFLOW.md updates
- CODEX-CURRENT-TASK.md updates
- PROJECT-STATUS.md updates
- CHANGELOG.md updates
- HTML/CSS/JS fixes
- navigation/footer fixes
- sitemap.xml
- robots.txt
- titles/meta/canonical URLs
- accessibility/mobile improvements
- safe content pages
- documentation cleanup
- homepage copy improvements
- support page improvements
- disclosure page improvements
- safer-play education pages
- affiliate planning documents before live monetization
- partner outreach templates
- tracker and follow-up schedule updates

## Do not change without direct approval

Do not add or configure:

- private keys
- API keys
- live ads
- live tracking
- payment setup
- affiliate links
- ordering integrations
- public AI tools
- upload systems
- user accounts
- framework rebuilds
- major code deletion
- gambling operation features
- accepting bets or payments
- promising winnings
- compliance-risk changes

## SlotsFreeUSA content rules

Keep content clear, beginner-friendly, adult-focused, commercial, and honest about risk.

SlotsFreeUSA is a commercial affiliate/media site. Do not make it sound like a charity, nonprofit, public-service project, or classroom education site.

The site may discuss free slot-style entertainment, social casino reviews, sweepstakes-style guides, bonus explainers, safer-play information, and future approved partner placements.

The site must not operate gambling, accept bets, process payments, issue prizes, redeem prizes, process withdrawals, or promise winnings.

Use clear disclosure language when affiliate, sponsorship, or partner placements are discussed.

## Current safe queue

1. Keep the site static and mobile-first.
2. Keep the commercial affiliate/media positioning clear.
3. Keep B2Spin / SpinBlitz status marked sent and waiting for reply.
4. Keep B2Spin follow-up scheduled for 2026-06-05 only if no reply.
5. Keep BetMGM marked ready but blocked by official portal registration steps.
6. Prepare RSI / BetRivers contact-form copy but do not mark submitted until the form is actually submitted.
7. Keep Caesars on hold until an official path is verified.
8. Avoid live ads, payment handling, private keys, tracking, and compliance-risk changes until intentionally configured.

## Cloudflare Pages

Cloudflare should publish from GitHub only.

Recommended settings:

- Production branch: main
- Build command: blank
- Output directory: .

No manual Cloudflare file uploads.

## Reporting rule

Commit useful safe changes. Report after several useful commits or when a real blocker appears.

Record blockers in `PROJECT-STATUS.md` instead of stopping early.
