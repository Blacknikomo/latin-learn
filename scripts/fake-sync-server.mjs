/* In-memory stand-in for the progress API, for e2e tests only (node scripts/fake-sync-server.mjs [port]).
   Mirrors the contract of the real handler (backend/handler.mjs) for the two kinds this
   app uses: "quiz" (store latin) and "facts" (store latin-state). Auth: `Bearer <sub>`. */
import http from 'node:http';

const KIND = { latin: 'quiz', 'latin-state': 'facts' };
const db = new Map(); // `${sub}|${store}` → {gen, bootstrapped, seen:Set, quiz:{...}, facts:{...}}
const rec = (sub, store) => {
  const k = `${sub}|${store}`;
  if (!db.has(k)) db.set(k, { gen: 0, bootstrapped: false, seen: new Set(), topics: {}, qstats: {}, missed: {}, sessions: {}, facts: {} });
  return db.get(k);
};
const assemble = (r, kind) => kind === 'quiz'
  ? { topics: r.topics, levels: {}, missed: r.missed, qstats: r.qstats, sessions: Object.values(r.sessions).sort((a, b) => b.date - a.date) }
  : Object.fromEntries(Object.entries(r.facts).map(([l, keys]) => [l, Object.fromEntries(Object.entries(keys))]));
const items = (r, kind) => kind === 'quiz' ? Object.keys(r.topics).length + Object.keys(r.sessions).length : Object.values(r.facts).reduce((a, l) => a + Object.keys(l).length, 0);

function apply(r, kind, ev) {
  if (kind === 'quiz') {
    if (ev.type === 'answer') {
      const t = (r.topics[ev.topic] ??= { correct: 0, total: 0 }); t.total++; if (ev.correct) t.correct++;
      const q = r.qstats[ev.qid];
      if (!q || q.last <= ev.ts) r.qstats[ev.qid] = { c: ev.c, t: ev.t, streak: ev.streak, last: ev.ts };
      if (!ev.correct) { const m = r.missed[ev.qid]; r.missed[ev.qid] = { id: ev.qid, topic: ev.topic, level: 'Unknown', question: ev.question, misses: (m?.misses ?? 0) + 1, lastMissed: ev.ts }; }
      else if (r.missed[ev.qid]) r.missed[ev.qid].recoveredAt = ev.ts;
    } else if (ev.type === 'session') r.sessions[ev.date] = { date: ev.date, correct: ev.correct, total: ev.total, topics: ev.topics, app: ev.app };
  } else if (ev.type === 'fact') {
    if (ev.kind === 'forget') { delete r.facts[ev.lesson]; return; }
    const l = (r.facts[ev.lesson] ??= {});
    if (!l[ev.key] || l[ev.key].at <= ev.at) l[ev.key] = { v: ev.v, at: ev.at };
  }
}

const server = http.createServer((req, res) => {
  const send = (code, body) => { res.writeHead(code, { 'content-type': 'application/json', 'access-control-allow-origin': '*', 'access-control-allow-headers': 'authorization,content-type', 'access-control-allow-methods': 'GET,POST,OPTIONS' }); res.end(JSON.stringify(body)); };
  if (req.method === 'OPTIONS') return send(204, {});
  const sub = (req.headers.authorization ?? '').replace(/^Bearer /, '');
  if (!sub) return send(401, { error: 'no token' });
  let raw = '';
  req.on('data', c => { raw += c; });
  req.on('end', () => {
    const url = new URL(req.url, 'http://x');
    const b = raw ? JSON.parse(raw) : {};
    const store = url.searchParams.get('store') ?? b.store;
    const kind = KIND[store];
    if (url.pathname === '/__dump') return send(200, Object.fromEntries(db));
    if (!kind) return send(400, { error: 'unknown store' });
    const r = rec(sub, store);
    if (req.method === 'GET' && url.pathname === '/state') return send(200, { ...assemble(r, kind), _meta: { bootstrapped: r.bootstrapped, items: items(r, kind), resetGen: r.gen } });
    if (req.method === 'POST' && url.pathname === '/events') {
      if ((b.gen ?? 0) < r.gen) return send(200, { applied: 0, resetGen: r.gen });
      let applied = 0, skipped = 0;
      for (const ev of b.events ?? []) { if (ev.eventId && r.seen.has(ev.eventId)) { skipped++; continue; } if (ev.eventId) r.seen.add(ev.eventId); apply(r, kind, ev); applied++; }
      return send(200, { applied, skipped, resetGen: r.gen });
    }
    if (req.method === 'POST' && url.pathname === '/bootstrap') {
      if (r.bootstrapped || items(r, kind)) return send(200, { bootstrapped: false, reason: 'exists' });
      if (kind === 'quiz') { Object.assign(r.topics, b.data.topics); Object.assign(r.qstats, b.data.qstats); Object.assign(r.missed, b.data.missed); for (const s of b.data.sessions ?? []) r.sessions[s.date] = s; }
      else for (const [l, keys] of Object.entries(b.data ?? {})) r.facts[l] = { ...keys };
      r.bootstrapped = true;
      return send(200, { bootstrapped: true, items: items(r, kind) });
    }
    if (req.method === 'POST' && url.pathname === '/reset') { const gen = r.gen + 1; db.delete(`${sub}|${store}`); rec(sub, store).gen = gen; return send(200, { gen }); }
    send(404, { error: 'no route' });
  });
});
server.listen(Number(process.argv[2] ?? 4300), () => console.log('fake sync on', server.address().port));
