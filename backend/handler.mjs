// latin-progress-api — progress sync for latin.lesnik.me. Lambda behind an API Gateway HTTP API
// with a Cognito JWT authorizer. Modelled on CTO-ed's sync backend (same event-delta design, same
// client contract), but its own code, its own table and its own deploy.
//
// Design: event deltas, not state blobs. The client (src/sync/transport.ts) sends per-answer and
// per-fact EVENTS; they are applied with atomic ADDs (counters) or last-write-wins conditional
// updates (streaks, facts), so writes commute — a stale device can never wipe progress made
// elsewhere. GET /state assembles the exact shape the client's ProgressStore expects.
//
// This file is SDK-free: makeHandler(db) takes four functions that accept DynamoDB DocumentClient
// inputs (index.mjs wires the real client, test.mjs an in-memory fake).
//
// Table (PAY_PER_REQUEST): PK (S), SK (S), TTL attribute `ttl`.   PK = "user#<cognito sub>"
// Every progress row is prefixed "store#<store>#" — added by scope(), stripped by queryAll().
//
//   store latin (kind quiz) — QuizHistory shape
//     SK = agg#topic#<topic>  {correct,total}                        ADD
//        | q#<qid>            {c,t,streak,lastTs}                    LWW by client ts
//        | missed#<qid>       {qid,topic,question,misses,lastMissed,recoveredAt?}
//        | session#<ts13>     {date,correct,total,topics[],app?}     Put (idempotent per date)
//   store latin-state (kind facts) — LessonFacts shape {[lesson]: {[key]: {v, at}}}
//     SK = fact#<lesson>#<key> {v, at}                               LWW by `at` (ISO, lexical)
//   every store
//     SK = meta#bootstrap {at}   guard: local history uploaded exactly once
//        | meta#reset     {gen}  reset epoch — bumped by POST /reset; devices behind it clear
//        | seen#<eventId> {ttl}  idempotency marker, expires via the table's TTL
//
// API (JSON; auth = a Cognito ID token the gateway has already verified):
//   GET  /state?store=<store>               -> store shape + _meta{bootstrapped, items, resetGen}
//   POST /events    {store, gen, events[]}  -> {applied, skipped, resetGen}
//   POST /bootstrap {store, data}           -> {bootstrapped, items|reason}
//   POST /reset     {store}                 -> {gen}

const SEEN_TTL_DAYS = 7;
const MAX_EVENTS = 200;     // per POST /events
const MAX_Q_LEN = 300;      // truncate question text
const SESSIONS_KEPT = 50;   // the client caps session history here too
const FACT_KEY_MAX = 120;
const FACT_V_MAX = 8 * 1024; // bytes of JSON(v); a note is the largest value
const LESSON_RE = /^[A-Za-z0-9_-]{1,8}$/; // lesson ids are numbers; never let '#' into an SK

// ---------- helpers ----------
const ts13 = n => String(n).padStart(13, "0");
const str = (v, max) => String(v ?? "").slice(0, max);
const num = v => Number(v) || 0;
const resp = (statusCode, body) => ({ statusCode, headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
const bad = msg => resp(400, { error: msg });
const isConditionFail = e => e?.name === "ConditionalCheckFailedException";

function parseBody(event) {
  try {
    const raw = event.isBase64Encoded ? Buffer.from(event.body ?? "", "base64").toString("utf8") : (event.body ?? "");
    return JSON.parse(raw || "{}");
  } catch { return null; }
}

// The gateway verified signature, issuer, audience and expiry before invoking us; only the claims
// are left to read. It accepts either Cognito token, so the ID token is insisted on here: an access
// token names a client, not a person.
function identify(event) {
  const claims = event.requestContext?.authorizer?.jwt?.claims;
  if (!claims?.sub) return null;
  if (String(claims.token_use ?? "") !== "id") return null;
  return { sub: String(claims.sub) };
}

// The ONLY place the key format is written down.
const scope = (sub, store) => ({
  store,
  PK: `user#${sub}`,
  pfx: `store#${store}#`,
  sk: rest => `store#${store}#${rest}`,
});

export function makeHandler(db, { table }) {
  // ---------- storage primitives ----------
  async function queryAll(S) {
    const items = [];
    let ExclusiveStartKey;
    do {
      const page = await db.query({
        TableName: table, KeyConditionExpression: "PK = :pk AND begins_with(SK, :pfx)",
        ExpressionAttributeValues: { ":pk": S.PK, ":pfx": S.pfx }, ExclusiveStartKey,
      });
      for (const it of page.Items ?? []) items.push({ ...it, SK: String(it.SK ?? "").slice(S.pfx.length) });
      ExclusiveStartKey = page.LastEvaluatedKey;
    } while (ExclusiveStartKey);
    return items;
  }

  // BatchWrite in chunks of 25, retrying unprocessed items (throttling).
  async function batchWrite(requests) {
    for (let i = 0; i < requests.length; i += 25) {
      let req = { [table]: requests.slice(i, i + 25) };
      for (let attempt = 0; attempt < 5 && Object.keys(req).length; attempt++) {
        const r = await db.batchWrite({ RequestItems: req });
        req = Object.keys(r.UnprocessedItems ?? {}).length ? r.UnprocessedItems : {};
        if (Object.keys(req).length) await new Promise(res => setTimeout(res, 100 * (attempt + 1)));
      }
    }
  }
  const putAll = items => batchWrite(items.map(Item => ({ PutRequest: { Item } })));
  const deleteAll = (S, items) => batchWrite(items.map(it => ({ DeleteRequest: { Key: { PK: S.PK, SK: S.sk(it.SK) } } })));

  const addCounter = (S, sk, correct) => db.update({
    TableName: table, Key: { PK: S.PK, SK: S.sk(sk) },
    UpdateExpression: "ADD #c :ok, #t :one",
    ExpressionAttributeNames: { "#c": "correct", "#t": "total" },
    ExpressionAttributeValues: { ":ok": correct ? 1 : 0, ":one": 1 },
  });

  // Last-write-wins: apply only when this event is at least as new as what is stored.
  async function lww(S, sk, fields, tsAttr, ts) {
    const names = { "#ts": tsAttr }, values = { ":ts": ts };
    const sets = Object.entries(fields).map(([k, v], i) => { names["#f" + i] = k; values[":v" + i] = v; return `#f${i}=:v${i}`; });
    sets.push("#ts=:ts");
    try {
      await db.update({
        TableName: table, Key: { PK: S.PK, SK: S.sk(sk) },
        UpdateExpression: "SET " + sets.join(", "),
        ConditionExpression: "attribute_not_exists(SK) OR #ts <= :ts",
        ExpressionAttributeNames: names, ExpressionAttributeValues: values,
      });
    } catch (e) { if (!isConditionFail(e)) throw e; }   // a newer write is already there
  }

  // missed#<qid>: a miss bumps the counter and clears recovery; a hit marks recovery (if ever missed).
  async function applyMissed(S, qid, correct, fields, now) {
    const sk = `missed#${qid}`;
    if (!correct) {
      const names = { "#lm": "lastMissed", "#m": "misses" }, values = { ":ts": now, ":one": 1 };
      const sets = Object.entries(fields).map(([k, v], i) => { names["#f" + i] = k; values[":v" + i] = v; return `#f${i}=:v${i}`; });
      await db.update({
        TableName: table, Key: { PK: S.PK, SK: S.sk(sk) },
        UpdateExpression: `SET ${sets.join(", ")}, #lm=:ts ADD #m :one REMOVE recoveredAt`,
        ExpressionAttributeNames: names, ExpressionAttributeValues: values,
      });
      return;
    }
    try {
      await db.update({
        TableName: table, Key: { PK: S.PK, SK: S.sk(sk) },
        UpdateExpression: "SET recoveredAt=:ts", ConditionExpression: "attribute_exists(SK)",
        ExpressionAttributeValues: { ":ts": now },
      });
    } catch (e) { if (!isConditionFail(e)) throw e; }   // never missed → nothing to recover
  }

  // ---------- kind quiz: scored items ----------
  const quiz = {
    events: {
      async answer(S, ev) {
        const topic = str(ev.topic || "Unknown", 120);
        const now = num(ev.ts) || Date.now();
        await addCounter(S, `agg#topic#${topic}`, ev.correct);
        const qid = str(ev.qid, 40);
        if (!qid) return;
        await applyMissed(S, qid, ev.correct, { qid, topic, question: str(ev.question, MAX_Q_LEN) }, now);
        // streak is not additive (a miss resets it) → LWW snapshot
        if (ev.streak != null && ev.t != null)
          await lww(S, `q#${qid}`, { streak: num(ev.streak), t: num(ev.t), c: num(ev.c) }, "lastTs", now);
      },
      async session(S, ev) {
        const date = num(ev.date) || Date.now();
        const Item = { PK: S.PK, SK: S.sk(`session#${ts13(date)}`), date, correct: num(ev.correct), total: num(ev.total),
          topics: Array.isArray(ev.topics) ? ev.topics.slice(0, 120).map(t => str(t, 120)) : [] };
        if (ev.app != null) Item.app = str(ev.app, 120);
        await db.put({ TableName: table, Item });
      },
    },
    assemble(items) {
      const out = { topics: {}, sessions: [], levels: {}, missed: {}, qstats: {} };
      for (const it of items) {
        const sk = it.SK ?? "";
        if (sk.startsWith("agg#topic#")) out.topics[sk.slice(10)] = { correct: num(it.correct), total: num(it.total) };
        else if (sk.startsWith("q#")) out.qstats[sk.slice(2)] = { c: num(it.c), t: num(it.t), streak: num(it.streak), last: num(it.lastTs) };
        else if (sk.startsWith("missed#")) {
          const m = { id: it.qid, topic: it.topic, level: "Unknown", question: it.question, misses: num(it.misses), lastMissed: num(it.lastMissed) };
          if (it.recoveredAt) m.recoveredAt = it.recoveredAt;
          out.missed[it.qid] = m;
        } else if (sk.startsWith("session#")) {
          const s = { date: it.date, correct: it.correct, total: it.total, topics: it.topics ?? [] };
          if (it.app != null) s.app = it.app;
          out.sessions.push(s);
        }
      }
      out.sessions.sort((a, b) => b.date - a.date);
      out.sessions = out.sessions.slice(0, SESSIONS_KEPT);
      return out;
    },
    seed(S, data) {
      const puts = [];
      for (const [t, v] of Object.entries(data?.topics ?? {}))
        puts.push({ PK: S.PK, SK: S.sk(`agg#topic#${str(t, 120)}`), correct: num(v.correct), total: num(v.total) });
      for (const [qid, m] of Object.entries(data?.missed ?? {})) {
        const item = { PK: S.PK, SK: S.sk(`missed#${str(qid, 40)}`), qid: str(qid, 40), topic: str(m.topic, 120),
          question: str(m.question, MAX_Q_LEN), misses: num(m.misses) || 1, lastMissed: num(m.lastMissed) };
        if (m.recoveredAt) item.recoveredAt = num(m.recoveredAt);
        puts.push(item);
      }
      for (const [qid, v] of Object.entries(data?.qstats ?? {}))
        puts.push({ PK: S.PK, SK: S.sk(`q#${str(qid, 40)}`), streak: num(v.streak), t: num(v.t), c: num(v.c), lastTs: num(v.last) || Date.now() });
      for (const s of (Array.isArray(data?.sessions) ? data.sessions : []).slice(0, SESSIONS_KEPT)) {
        const date = num(s.date); if (!date) continue;
        const it = { PK: S.PK, SK: S.sk(`session#${ts13(date)}`), date, correct: num(s.correct), total: num(s.total),
          topics: Array.isArray(s.topics) ? s.topics.slice(0, 120).map(t => str(t, 120)) : [] };
        if (s.app != null) it.app = str(s.app, 120);
        puts.push(it);
      }
      return puts;
    },
  };

  // ---------- kind facts: one LWW row per (lesson, key) ----------
  // A key is rejected, not truncated, when too long: truncation would silently merge two keys.
  const factValue = v => {
    const val = v === undefined ? null : v;
    return Buffer.byteLength(JSON.stringify(val)) <= FACT_V_MAX ? { ok: true, val } : { ok: false };
  };
  const facts = {
    events: {
      async fact(S, ev) {
        const lesson = String(ev.lesson ?? "");
        if (!LESSON_RE.test(lesson)) return;
        if (ev.kind === "forget") {
          const rows = (await queryAll(S)).filter(it => (it.SK ?? "").startsWith(`fact#${lesson}#`));
          await deleteAll(S, rows);
          return;
        }
        const key = String(ev.key ?? "");
        if (!key || key.length > FACT_KEY_MAX) return;
        const v = factValue(ev.v);
        if (!v.ok) return;
        await lww(S, `fact#${lesson}#${key}`, { v: v.val }, "at", str(ev.at, 40) || new Date().toISOString());
      },
    },
    assemble(items) {
      const out = {};
      for (const it of items) {
        const sk = it.SK ?? "";
        if (!sk.startsWith("fact#")) continue;
        const rest = sk.slice(5), j = rest.indexOf("#");   // fact#<lesson>#<key>; the key may contain '#'
        if (j <= 0) continue;
        (out[rest.slice(0, j)] ??= {})[rest.slice(j + 1)] = { v: it.v ?? null, at: it.at };
      }
      return out;
    },
    seed(S, data) {
      const puts = [];
      for (const [lesson, keys] of Object.entries(data ?? {})) {
        if (!LESSON_RE.test(lesson) || !keys || typeof keys !== "object") continue;
        for (const [key, f] of Object.entries(keys)) {
          const v = factValue(f?.v);
          if (!key || key.length > FACT_KEY_MAX || !v.ok) continue;
          puts.push({ PK: S.PK, SK: S.sk(`fact#${lesson}#${key}`), v: v.val, at: str(f?.at, 40) || new Date().toISOString() });
        }
      }
      return puts;
    },
  };

  // Every store the client may name (src/sync/config.ts STORES), and its kind.
  const STORES = { latin: quiz, "latin-state": facts };

  // ---------- reset epoch, idempotency ----------
  async function getResetGen(S) {
    const r = await db.query({
      TableName: table, KeyConditionExpression: "PK = :pk AND SK = :sk",
      ExpressionAttributeValues: { ":pk": S.PK, ":sk": S.sk("meta#reset") },
    });
    return num(r.Items?.[0]?.gen);
  }

  // The client mints ev.eventId; claiming a marker row first makes a retried batch apply once.
  // Keyed on `eventId`, never on a field an event kind uses for its own data.
  async function alreadyApplied(S, eventId) {
    const key = str(eventId, 80);
    if (!key) return false;
    try {
      await db.put({
        TableName: table,
        Item: { PK: S.PK, SK: S.sk(`seen#${key}`), ttl: Math.floor(Date.now() / 1000) + SEEN_TTL_DAYS * 86400 },
        ConditionExpression: "attribute_not_exists(SK)",
      });
      return false;
    } catch (e) {
      if (isConditionFail(e)) return true;
      throw e;
    }
  }

  // ---------- routes ----------
  async function getState(S) {
    const items = (await queryAll(S)).filter(it => !String(it.SK ?? "").startsWith("seen#"));
    const out = STORES[S.store].assemble(items);
    let bootstrapped = false, resetGen = 0;
    for (const it of items) {
      if (it.SK === "meta#bootstrap") bootstrapped = true;
      else if (it.SK === "meta#reset") resetGen = num(it.gen);
    }
    out._meta = { bootstrapped, items: items.length, resetGen };
    return out;
  }

  async function postEvents(S, b) {
    const events = Array.isArray(b.events) ? b.events : [];
    if (events.length > MAX_EVENTS) return bad(`too many events (max ${MAX_EVENTS})`);
    const resetGen = await getResetGen(S);
    if (num(b.gen) < resetGen) return resp(200, { applied: 0, resetGen });   // device is behind a reset: its queue is void
    const handlers = STORES[S.store].events;
    let applied = 0, skipped = 0;
    for (const ev of events) {
      const h = handlers[ev?.type];
      if (!h) continue;
      if (await alreadyApplied(S, ev.eventId)) { skipped++; continue; }
      await h(S, ev); applied++;
    }
    return resp(200, { applied, skipped, resetGen });
  }

  async function bootstrap(S, data) {
    try {   // first-writer-wins: exactly one device seeds the store
      await db.put({
        TableName: table, Item: { PK: S.PK, SK: S.sk("meta#bootstrap"), at: Date.now() },
        ConditionExpression: "attribute_not_exists(SK)",
      });
    } catch (e) {
      if (isConditionFail(e)) return { bootstrapped: false, reason: "already bootstrapped" };
      throw e;
    }
    const puts = STORES[S.store].seed(S, data);
    await putAll(puts);
    return { bootstrapped: true, items: puts.length };
  }

  async function reset(S) {
    const r = await db.update({
      TableName: table, Key: { PK: S.PK, SK: S.sk("meta#reset") },
      UpdateExpression: "ADD gen :one", ExpressionAttributeValues: { ":one": 1 }, ReturnValues: "ALL_NEW",
    });
    const gen = num(r.Attributes?.gen);
    const rows = (await queryAll(S)).filter(it => it.SK !== "meta#reset");   // the bootstrap guard goes too
    await deleteAll(S, rows);
    return { gen };
  }

  return async event => {
    const method = event.requestContext?.http?.method ?? "GET";
    const path = event.rawPath ?? "/";
    if (method === "OPTIONS") return { statusCode: 204 };   // the gateway answers CORS preflight itself

    const who = identify(event);
    if (!who) return resp(401, { error: "unauthenticated" });
    const isStore = s => Object.hasOwn(STORES, s);

    try {
      if (method === "GET" && path === "/state") {
        const store = event.queryStringParameters?.store;
        if (!isStore(store)) return bad("store must be one of: " + Object.keys(STORES).join(", "));
        return resp(200, await getState(scope(who.sub, store)));
      }
      const b = method === "POST" ? parseBody(event) : null;
      if (method === "POST" && path === "/events") {
        if (!b || !isStore(b.store)) return bad("body must be {store, gen, events[]}");
        return await postEvents(scope(who.sub, b.store), b);
      }
      if (method === "POST" && path === "/bootstrap") {
        if (!b || !isStore(b.store) || !b.data || typeof b.data !== "object") return bad("body must be {store, data}");
        return resp(200, await bootstrap(scope(who.sub, b.store), b.data));
      }
      if (method === "POST" && path === "/reset") {
        if (!b || !isStore(b.store)) return bad("body must be {store}");
        return resp(200, await reset(scope(who.sub, b.store)));
      }
      return resp(404, { error: "unknown route", routes: ["GET /state", "POST /events", "POST /bootstrap", "POST /reset"] });
    } catch (e) {
      console.error(e);
      return resp(500, { error: e?.name ?? "InternalError" });
    }
  };
}
