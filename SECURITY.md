# Security Policy

## Reporting a problem
Please do NOT open a public issue for security problems. Use GitHub's
"Report a vulnerability" button under the Security tab of this repository.

## Rules for this project
1. **Never commit secrets** (passwords, API keys, tokens). They go in `.env.local`
   (ignored by git) or in the hosting provider's secret settings.
2. **Don't build our own login.** Use a trusted provider (planned: Supabase Auth with
   email + Google). Passwords are never stored by our own code.
3. **Least data.** Collect only what is needed (name, email, shipping address when required).
4. **Database rules.** Every table uses row-level security: users can only read their own rows;
   only admins can see everything.
5. **Validate all input** on the server (planned: Zod), never trust the browser.
6. **Security headers** (CSP, HSTS, etc.) are set in `web/next.config.ts`.
7. **Dependencies** are updated automatically by Dependabot and checked in CI.
8. Admin accounts must use two-factor authentication.
