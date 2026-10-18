# Contributing

## Workflow
1. Create a branch: `git switch -c feat/short-name` (never work directly on `main`).
2. Make small changes. Run `npm run lint`, `npm run typecheck`, `npm run build` inside `web/`.
3. Commit with a clear message using this style:
   - `feat: add donation form`
   - `fix: correct signup redirect`
   - `docs: update roadmap`
   - `chore: update dependencies`
4. Open a Pull Request (a request to merge your branch into `main`). CI must pass.

## Code standards
- TypeScript everywhere, `strict` mode on, no `any` unless explained in a comment.
- Components in `web/src/components`, pages in `web/src/app`, helpers in `web/src/lib`.
- File names: `kebab-case.ts`; React components: `PascalCase`.
- Comments explain *why*, not what.
- Accessible by default: alt text, labels on inputs, keyboard friendly, good color contrast.
