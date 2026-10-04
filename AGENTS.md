# AGENTS.md — latin-learn

Guide for AI agents (and humans) extending this app. Read it before adding lessons, exercises or features. Non-public context (decisions, open questions, the learner's progress per session) lives in the owner's Obsidian vault — see `README.md` §"For agents and developers" and, on the owner's machine, `CLAUDE.local.md`.

> **Purpose:** an interactive companion for a 9-session Latin taster course (Oct 2026). Goal is **reading comprehension** of mottos, quotes, church texts and word origins — not fluency. The learner is a native Russian speaker with C1 English and B1→C1 German: lean on Russian/German case systems and cognates.

## 1. Repository layout

Branch `main`, remote `github.com:Blacknikomo/latin-learn`.

```
src/
├── types.ts              # Lesson / Section / Block schema — THE content contract
├── i18n.tsx              # UI strings (en/de/ru), grammar tag labels, language context
├── progress.tsx          # React facade over src/sync/* (derived lesson view + intent-level writes)
├── sync/                 # progress layers, ported from CTO-ed — see §6
│   ├── config.ts         # VITE_* env → auth/API config; cloud store names
│   ├── auth.ts           # Cognito via oidc-client-ts (the ONLY importer of it)
│   ├── transport.ts      # SyncTransport: event queue, /events, /state, /bootstrap, /reset, epochs
│   ├── progressStore.ts  # one persisted object per store, merge-on-pull, two resets
│   ├── quizHistory.ts    # model: scored items (store `latin`, kind quiz)
│   ├── lessonFacts.ts    # model: lesson state facts (store `latin-state`, kind facts)
│   └── storage.ts        # guarded localStorage
├── speech.ts             # pronunciation guide + TTS respelling (classical / ecclesiastical)
├── components/
│   ├── Blocks.tsx        # every block renderer + the BlockView dispatcher
│   ├── Latin.tsx         # <La>, SpeakButton, pronunciation-mode context
│   └── Rich.tsx          # inline markup renderer
├── pages/                # Home (course grid), Lesson (agenda + timer), Review (Leitner flashcards)
└── lessons/
    ├── index.ts          # LESSONS = [l01 … l09] in course order
    └── l01.ts … l09.ts   # one file per session; l01.ts is the reference lesson
backend/                  # progress-sync API (own Lambda + table + HTTP API) — see §6
├── handler.mjs           # all logic, SDK-free: makeHandler(db) — kinds quiz + facts
├── index.mjs             # Lambda entry: wires the real DynamoDB client
├── test.mjs              # contract test against an in-memory DynamoDB (part of npm run check)
└── template.yaml         # CloudFormation: table, role, Lambda, HTTP API + JWT authorizer
scripts/check-content.ts  # content validator (npm run check)
scripts/aws.sh            # hosting + backend: S3/CloudFront/ACM, `api`, deploy (npm run deploy) — read DEPLOY.md first
scripts/fake-sync-server.mjs  # in-memory progress API for e2e tests (quiz + facts kinds)
```

**Lesson N = vault `Learning/Latin/Module N` = calendar event "Latin N: …".** Keep the three aligned (id, date, title).

## 2. Content rules (binding)

1. **Every user-facing string is `{ en, de, ru }`, all three equally complete** — German and Russian are never shorter summaries of the English. Latin-only strings (forms, table cells, quiz options that are Latin) may be plain strings.
2. **Inline markup** in any localized string: `**bold**`, `*italic*`, `[[Latin]]` (Latin style + click to hear), lines starting `- ` = list, blank line = new paragraph.
3. **Latin accuracy beats coverage.** Check every form, macron, case label, etymology and attribution. If unsure, leave it out; note the doubt in the vault module's `## Log`, not in code.
4. Use macrons in displayed Latin where standard (rosā, amāre). `fill` checks ignore macrons.
5. Exercise ids are unique and prefixed by lesson: `l3-fill-amare`.
6. One `Section` per agenda item, in calendar order, with its minutes; an optional final "Practice" section has `minutes: 0` (outside the 60-min timer).
7. Use `callout` tone `compare` for Russian/German/English parallels — this is the learner's main lever.

## 3. Block kinds (`types.ts`)

| kind | use |
| --- | --- |
| `text`, `callout`, `table`, `links` | explanation, rules, paradigms, external material |
| `phrases` | Latin phrase list, literal meaning hidden until tapped |
| `flashcards` | flip cards; **also feed the Review page** (keyed by Latin text) |
| `quiz` | multiple choice with per-question `explain` |
| `match` | Latin ↔ meaning pairs |
| `stress` | click the stressed syllable |
| `fill` | type the endings of a paradigm (`stem` + `ending`) |
| `parse` | tag each word with a `Tag` (case / verb form / part of speech); answer must be in `options` |
| `interlinear` | text line by line, per-word glosses on tap, translation on reveal |
| `pronounce` | live classical vs ecclesiastical converter |
| `builder` | prefix + root word builder (one target per prefix/root pair) |
| `translate` | learner writes a translation, reveals model answer, self-grades |
| `notepad`, `rating`, `choice` | homework notes, 1–5 self-check, decisions (saved locally) |

## 4. Extension recipes

- **New lesson:** create `src/lessons/lNN.ts` exporting a `Lesson` (copy the shape of `l01.ts`), add it to `lessons/index.ts`, create/update the matching vault Module note.
- **New block kind:** add the variant to `Block` in `types.ts`, a renderer + `case` in `BlockView` (`Blocks.tsx`), UI strings in `i18n.tsx` (all three languages), styles in `styles.css`, a row in §3 above, and an ADR in the vault if it changes the content contract.
- **New UI string:** add to `UI` in `i18n.tsx` with en/de/ru.

## 5. Validation (run before committing)

```bash
npm run check    # tsc + scripts/check-content.ts: empty translations, length imbalance, duplicate ids,
                 # parse answers not in options, quiz/stress indexes out of range, empty fill endings
npm run build
```

## 6. Progress persistence & cross-device sync (`src/sync/*`)

Same model as CTO-ed (`progress-store.js` · `sync.js` · `quiz-history.js`), ported to TypeScript. Architecture decision: vault ADR-0004.

**Rule: components never touch `localStorage` or the transport.** They call `useLessonState()` / `useProgress()` (`progress.tsx`), which write through the two models:

| Layer | Role |
| --- | --- |
| `QuizHistory` → store `latin` (kind `quiz`) | every **scored item**: `answer(exId, index, question, correct)` → topic `L<n>/<exId>`, qid `<exId>:<index>` (≤40 chars, else hashed). Keeps `topics`, `qstats` (mastery streaks), `missed`, `sessions`. Call it once per item per attempt; `newRun(exId)` on Reset. |
| `LessonFacts` → store `latin-state` (kind `facts`) | every piece of **state**: `{[lesson]: {[key]: {v, at}}}`, keys `open`, `sec:<i>`, `chk:<hw|dw><i>`, `note:<k>`, `val:<k>`, `ex:<exId>` (last result), `card:<latin>` (lesson `0`, Review boxes). LWW by `at`. |
| `ProgressStore` | one persisted object per store: load + migrate from `defaults()`, adopt server state in place, `resetLocal()` / `resetEverywhere()`. |
| `SyncTransport` | event deltas with client `eventId`, per-account queue `ll_sync_queue_<store>_<sub|anon>`, debounced batch `POST /events`, `GET /state` on sign-in, one guarded `POST /bootstrap`, reset epochs `ll_sync_gen_<store>_<sub>`. Same-key events coalesce in the queue (fresh `eventId`). |

**Fail-soft.** Without `VITE_*` config (see `.env.example`), on `file://` or signed out, the app runs local-only exactly as before; the ☁ badge shows the state. Answers made signed out are claimed by the account that signs in next.

**Backend** (`backend/`): this app's own API — table, Lambda and HTTP API in one stack, the Cognito pool shared with CTO-ed for sign-in only. CTO-ed's handler was the reference design; nothing is shared at runtime. Deploy with `scripts/aws.sh api` (DEPLOY.md).

**Events** (contract shared with `backend/handler.mjs`): `answer {qid, topic, question, correct, ts, streak, t, c}`, `session {date, correct, total, topics[], app}`, `fact {lesson, key, v, at}`, `fact {kind:"forget", lesson, at}`. Changing a shape = change `backend/handler.mjs` + `backend/test.mjs` and the client model together, with a migration; redeploy the backend (`scripts/aws.sh api`) before the site.

**Keys:** `ll_facts_v1`, `ll_quiz_v1`; the pre-sync blob `latin-learn:v1` is imported once (`ll_migrated_v1`) and reaches the server via bootstrap.

**Testing sync locally:** `node scripts/fake-sync-server.mjs 4300`, build with `VITE_API_BASE=http://localhost:4300 vite build --mode e2e` and inject `window.__LL_TEST_AUTH__` (honoured only in `--mode e2e`). Real sign-in: fill `.env.local`, `npm run dev:auth` (port 3000 is a registered callback).

## 7. Git workflow

Commit only when asked. Deploy only when asked (`DEPLOY.md`). Plans, ADRs and progress go to the vault, never into the repo (`.gitignore` blocks `PLAN-*.md`). `CLAUDE.local.md` and `.claude/settings.local.json` are machine-local and git-ignored.
