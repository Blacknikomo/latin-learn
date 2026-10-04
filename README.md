# latin-learn

Interactive companion app for a 9-session Latin taster course: mottos, quotes, church texts and word origins — reading comprehension, not fluency. Vite + React + TypeScript; UI and explanations in English, German and Russian.

## Run

```bash
npm install
npm run dev      # http://localhost:5173 (local-only progress)
npm run dev:auth # http://localhost:3000 — Google sign-in + sync, needs .env.local (see .env.example)
npm run check    # typecheck + content checks
npm run build    # static output in dist/ (base './', works on GitHub Pages)
```

## Where things are

- **How the app is built and how lessons are written** (schema, block kinds, content rules, validation): [`AGENTS.md`](AGENTS.md). Read it before changing anything.
- **Hosting & deploy** (`https://latin.lesnik.me`, private S3 + CloudFront, `npm run deploy`): [`DEPLOY.md`](DEPLOY.md).
- **Progress** is stored locally and, when signed in, synced across devices (event deltas; own backend in `backend/`): `AGENTS.md` §6.
- **Plans, decisions (ADRs), open questions and the learner's progress notes:** **not in this repository.** They live in the owner's Obsidian vault: app docs in `Forest/Apps/latin-learn/`, study progress in `Forest/Learning/Latin/`.

## For agents and developers — read this first

Before starting any non-trivial work, consult the vault:

- App hub: [`Apps/latin-learn/latin-learn.md`](obsidian://open?vault=Forest&file=Apps%2Flatin-learn%2Flatin-learn)
- ADR index: [`Apps/latin-learn/ADR/ADR Index.md`](obsidian://open?vault=Forest&file=Apps%2Flatin-learn%2FADR%2FADR%20Index)
- Open questions: [`Apps/latin-learn/Open Questions.md`](obsidian://open?vault=Forest&file=Apps%2Flatin-learn%2FOpen%20Questions)
- Learning plan + progress: [`Learning/Latin/Latin Learning Plan.md`](obsidian://open?vault=Forest&file=Learning%2FLatin%2FLatin%20Learning%20Plan)

The absolute paths on the owner's machine are in `CLAUDE.local.md` (untracked); `.claude/settings.local.json` (untracked) grants Claude Code access to those two vault folders. If you have neither, you are not on the owner's machine — work from `AGENTS.md` and ask before making decisions that would need an ADR.

Rules that follow from this:

1. Never commit plans, ADRs, progress notes or anything personal. Write them to the vault in the same session, then reference them by name/ID from code and commits.
2. Never commit secret values anywhere (not even to the vault — it holds names and locations only).
