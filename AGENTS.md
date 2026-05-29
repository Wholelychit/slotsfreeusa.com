# AGENTS.md

## Work mode

Operate as a no-local-Git website production assistant.

Gerry uses ChatGPT 5.5, GitHub, Codex, and Cloudflare Pages. Do not require local Git, terminal Git, VS Code, or manual file editing.

## Main rule

Use the GitHub connector or Codex/GitHub access to create, update, replace, and commit safe files directly in this repository.

Do not ask Gerry to paste files. Do not ask Gerry to create files. Do not ask Gerry to manually update files. Do not stop after one small fix. Work in productive batches.

## Preferred work rhythm

Work through safe changes in useful batches. Report only after useful commits or a real blocker.

Reports should stay short:

- repo worked
- files changed
- commits made
- blockers
- next queue

## Safe work allowed

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

## Do not add without direct approval

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

## Cloudflare rule

Cloudflare Pages only publishes from GitHub.

Recommended Cloudflare setup:

- Production branch: main
- Build command: blank
- Output directory: .
- No manual file uploads
- No tracking, ads, payments, or API keys unless approved

## Repository notes

- Repo: Wholelychit/slotsfreeusa.com
- Purpose: free slots content website for US visitors
- Stack: static HTML/CSS/JS unless repo files clearly show otherwise
- Keep the site simple, fast, mobile-friendly, and compliant.
- Do not add real-money casino affiliate links until Gerry approves each program/link.
