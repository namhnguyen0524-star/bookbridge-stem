# CHECKPOINT - resume here

Last saved: 2026-10-17

## Done
- Tools installed: Git, GitHub CLI, Node 24, Python 3.12 (new terminals may need a restart to see them).
- Logged in to GitHub as `namhnguyen0524-star` (gh CLI).
- Private repo created: https://github.com/namhnguyen0524-star/bookbridge-stem (EMPTY - first push was rejected).
- Local project builds OK (lint, typecheck, build pass): `web/` = Next.js + TypeScript + Tailwind.
- Docs, license, security policy, CI, Dependabot written.
- Switched to GitHub Pages plan: static export, basePath `/bookbridge-stem`, deploy workflow.

## NEXT STEPS (in order)
1. Re-run in Claude Code prompt:
   `! & "C:\Program Files\GitHub CLI\gh.exe" auth refresh -h github.com -s workflow`
   (approve in browser) - needed so GitHub accepts `.github/workflows` files.
2. Claude: commit, then `git push -u origin main`.
3. GitHub Pages on a FREE account requires a PUBLIC repo. Decide: make repo public
   (safe as long as no secrets are committed) or keep private and wait for a paid plan/other host.
   Then Settings > Pages > Source: GitHub Actions. Site URL:
   https://namhnguyen0524-star.github.io/bookbridge-stem/
4. Phase 1 design: ask the user for colors/mood (they asked to be reminded!). Use Claude Design if available.
5. Build features (static-site friendly): homepage, how it works, map, leaderboard, blog, then
   accounts/donations/tracking/admin via Supabase (backend service) called from the browser.

## Decisions so far
- Name: BookBridge STEM. Slogan: "Turn your unused books into a student's dream in Vietnam."
- Books only (no money). English first, Vietnamese later. Login: email + Google.
- Wanted: map, leaderboard, blog. Tracking stages TBD. Shipping/domain/budget: user's mom decides.
- Student project first (no nonprofit yet; no tax-deductible claims).

## Known limits of GitHub Pages
- No custom security headers (only meta tags). No server code: logins/data need Supabase with
  strict row-level security. Upgrade path: Vercel/Cloudflare + real domain.
- 5 "high" npm audit warnings are dev-tools only (production deps: 0).
