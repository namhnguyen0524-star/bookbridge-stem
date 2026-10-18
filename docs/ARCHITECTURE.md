# Architecture (proposed - decisions can change)

| Need | Choice | Why |
|---|---|---|
| Website | Next.js + TypeScript + Tailwind | Popular, fast, great for SEO and security |
| Accounts + database | Supabase (Postgres + Auth) | Email + Google login built in, row-level security |
| Hosting | Vercel | Free tier, automatic HTTPS, deploys from GitHub |
| Email | Resend (later) | Status emails ("your books shipped") |
| Validation | Zod | Checks every form on the server |
| Checks | GitHub Actions | Lint, types, build, audit on every change |

## Main data (draft)
- `profiles` - one per user (name, role: donor / admin)
- `donations` - a donor's pledge (books, status, created date)
- `donation_events` - the timeline ("received", "shipped", ...). Stages are TBD.
- `destinations` - schools/libraries in Vietnam that receive books
- `stories` - photos and thank-you notes (admin-approved only)

## Security layers
HTTPS only, security headers, row-level security, server-side validation,
rate limiting on forms, admin 2FA, no secrets in git.
