# BookBridge STEM

> Turn your unused books into a student's dream in Vietnam.

BookBridge STEM invites American students and families to donate their
Science, Technology, Engineering, Art and Math (STEM/STEAM) books to students in Vietnam,
and lets donors follow their books on the journey.

Status: early development (student project).

## Repository layout

| Folder | What lives there |
|---|---|
| `web/` | The website (Next.js + TypeScript + Tailwind CSS) |
| `docs/` | Plans, architecture decisions, roadmap |
| `.github/` | Automatic checks (CI), dependency updates, templates |

## Run it on your computer

```powershell
cd web
npm install
npm run dev      # then open http://localhost:3000
```

## Quality checks (run before every commit)

```powershell
cd web
npm run lint
npm run typecheck
npm run build
```

## More

- [Architecture](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Security policy](SECURITY.md)
- [Contributing](CONTRIBUTING.md)

License: MIT
