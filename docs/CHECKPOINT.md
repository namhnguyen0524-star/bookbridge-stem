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
1. DONE (2026-10-19): gh `workflow` scope granted; code pushed to origin/main (repo now PUBLIC, Pages live).
   Tip: plain `git push` can't prompt for login here; use
   `git -c "credential.helper=!'C:/Program Files/GitHub CLI/gh.exe' auth git-credential" push`.
3. GitHub Pages on a FREE account requires a PUBLIC repo. Decide: make repo public
   (safe as long as no secrets are committed) or keep private and wait for a paid plan/other host.
   Then Settings > Pages > Source: GitHub Actions. Site URL:
   https://namhnguyen0524-star.github.io/bookbridge-stem/
4. Phase 1 homepage + How it works + Donate placeholder BUILT (2026-10-19). Next: donation form, photo area (user unsure, maybe later), creator name (currently none).
5. Build features (static-site friendly): homepage, how it works, map, leaderboard, blog, then
   accounts/donations/tracking/admin via Supabase (backend service) called from the browser.

## Decisions so far
- Name: BookBridge STEM. Slogan: "Turn your unused books into a student's dream in Vietnam."
- Books only (no money). English first, Vietnamese later. Login: email + Google.
- Wanted: map, leaderboard, blog. Tracking stages TBD. Shipping/domain/budget: user's mom decides.
- Student project first (no nonprofit yet; no tax-deductible claims).

## Design answers (2026-10-19)
- Audience: US students donating. Phase 1: homepage + How it works only.
- Mood: calm and trustworthy, soft blue/green, white space, rounded shapes.
- Donation flow v1: simple form, user reviews each one (no accounts yet).
- User wants the repo PUBLIC. Secret scan was clean (history uses noreply email).
  The auto-mode guard blocked Claude from flipping visibility, so the USER must do it.

## Known limits of GitHub Pages
- No custom security headers (only meta tags). No server code: logins/data need Supabase with
  strict row-level security. Upgrade path: Vercel/Cloudflare + real domain.
- 5 "high" npm audit warnings are dev-tools only (production deps: 0).

## Donation flow answers (2026-10-19)
- After submit: user gets email and replies manually (no auto-approve).
- Shipping: donor ships themselves (mom may revisit).
- Form fields: name, email, book titles/subject/condition, number of books. NOT city/state (add later if map is built).
- Minimum condition: good (no missing pages, light writing OK).
- How-it-works page expanded with steps, why STEM, FAQ (live). FAQ/steps text must match these answers.

## Built 2026-10-19 (leaderboard, certificate, form)
- /donate form -> Formspree (emails owner). USER MUST: create free form at formspree.io, paste ID into
  web/src/lib/config.ts (FORMSPREE_FORM_ID). Empty = form shows "not connected yet".
- /leaderboard reads web/src/data/leaderboard.json: [{"slug":"ada","name":"Ada L.","books":12}].
  Add rows by hand ONLY after books arrive + donor consented. Top 10 get /certificate/<slug>/ (printable). /certificate/sample/ is a labeled sample.
- Later: replace the JSON with Supabase if hand-editing becomes a chore.
