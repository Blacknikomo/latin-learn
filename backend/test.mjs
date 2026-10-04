// Contract test for handler.mjs against an in-memory DynamoDB fake.   node backend/test.mjs
// No AWS SDK needed: the handler only ever sees the four db functions below.
import assert from "node:assert/strict";
import { makeHandler } from "./handler.mjs";

// ---------- fake DynamoDB: the subset handler.mjs uses ----------
function makeFakeDb() {
  const table = new Map(); const key = (PK, SK) => PK + " " + SK;
  class CondFail extends Error { constructor() { super("cond"); this.name = "ConditionalCheckFailedException"; } }
  const names = (expr, n) => expr.replace(/#\w+/g, m => n?.[m] ?? m);
  function cond(item, c, n, v) {
    if (!c) return true;
    return names(c, n).split(" OR ").map(s => s.trim()).some(part => {
      let m;
      if ((m = part.match(/^attribute_not_exists\((\w+)\)$/))) return !item || item[m[1]] === undefined;
      if ((m = part.match(/^attribute_exists\((\w+)\)$/))) return !!item && item[m[1]] !== undefined;
      if ((m = part.match(/^(\w+) <= (:\w+)$/))) return !!item && item[m[1]] <= v[m[2]];
      throw new Error("unsupported condition " + part);
    });
  }
  const db = {
    async query(i) {
      const V = i.ExpressionAttributeValues;
      return { Items: [...table.values()].filter(it => it.PK === V[":pk"] && (V[":sk"] == null || it.SK === V[":sk"])
        && (V[":pfx"] == null || it.SK.startsWith(V[":pfx"]))).map(it => structuredClone(it)) };
    },
    async put(i) {
      const k = key(i.Item.PK, i.Item.SK);
      if (!cond(table.get(k), i.ConditionExpression, i.ExpressionAttributeNames, i.ExpressionAttributeValues)) throw new CondFail();
      table.set(k, structuredClone(i.Item)); return {};
    },
    async update(i) {
      const k = key(i.Key.PK, i.Key.SK), cur = table.get(k), V = i.ExpressionAttributeValues;
      if (!cond(cur, i.ConditionExpression, i.ExpressionAttributeNames, V)) throw new CondFail();
      const it = cur ? structuredClone(cur) : { ...i.Key };
      const parts = names(i.UpdateExpression, i.ExpressionAttributeNames).split(/\b(SET|ADD|REMOVE)\b/).map(s => s.trim()).filter(Boolean);
      for (let j = 0; j < parts.length; j += 2) for (const clause of parts[j + 1].split(",").map(s => s.trim())) {
        if (parts[j] === "SET") { const e = clause.indexOf("="); it[clause.slice(0, e).trim()] = structuredClone(V[clause.slice(e + 1).trim()]); }
        else if (parts[j] === "ADD") { const [a, b] = clause.split(/\s+/); it[a] = (it[a] || 0) + V[b]; }
        else delete it[clause];
      }
      table.set(k, it); return { Attributes: it };
    },
    async batchWrite(i) {
      for (const reqs of Object.values(i.RequestItems)) for (const r of reqs) {
        if (r.PutRequest) table.set(key(r.PutRequest.Item.PK, r.PutRequest.Item.SK), structuredClone(r.PutRequest.Item));
        if (r.DeleteRequest) table.delete(key(r.DeleteRequest.Key.PK, r.DeleteRequest.Key.SK));
      }
      return { UnprocessedItems: {} };
    },
  };
  return { db, table };
}

const { db, table } = makeFakeDb();
const handler = makeHandler(db, { table: "latin-progress" });
const as = sub => async (method, path, body, qs) => {
  const r = await handler({ requestContext: { http: { method }, authorizer: { jwt: { claims: { sub, token_use: "id" } } } },
    rawPath: path, queryStringParameters: qs, body: body ? JSON.stringify(body) : undefined });
  return { code: r.statusCode, body: r.body ? JSON.parse(r.body) : null };
};
const ok = (c, msg) => { assert.ok(c, msg); console.log("ok  ", msg); };
const me = as("denis"), other = as("someone-else");

// ---------- auth + validation ----------
ok((await handler({ requestContext: { http: { method: "GET" } }, rawPath: "/state" })).statusCode === 401, "401 without claims");
ok((await handler({ requestContext: { http: { method: "GET" }, authorizer: { jwt: { claims: { sub: "s", token_use: "access" } } } }, rawPath: "/state" })).statusCode === 401, "401 for an access token");
ok((await me("GET", "/state", null, { store: "sd" })).code === 400, "a CTO-ed store name is rejected");
ok((await me("POST", "/events", { store: "latin", events: new Array(201).fill({}) })).code === 400, "too many events rejected");
ok((await me("GET", "/nope")).code === 404, "unknown route 404");
for (const s of ["latin", "latin-state"]) {
  const r = await me("GET", "/state", null, { store: s });
  ok(r.code === 200 && r.body._meta.items === 0 && r.body._meta.resetGen === 0, `empty store ${s}`);
}

// ---------- quiz (store latin) ----------
let r = await me("POST", "/events", { store: "latin", gen: 0, events: [
  { type: "answer", qid: "l1-q:0", topic: "L1/l1-q", question: "sum?", correct: false, ts: 1000, streak: 0, t: 1, c: 0, eventId: "e1" },
  { type: "answer", qid: "l1-q:0", topic: "L1/l1-q", question: "sum?", correct: true, ts: 2000, streak: 1, t: 2, c: 1, eventId: "e2" },
  { type: "session", date: 5000, correct: 1, total: 2, topics: ["L1/l1-q"], app: "l1-q", eventId: "e3" },
] });
ok(r.code === 200 && r.body.applied === 3, "quiz events applied");
r = await me("POST", "/events", { store: "latin", gen: 0, events: [{ type: "answer", qid: "l1-q:0", topic: "L1/l1-q", correct: true, ts: 2000, streak: 1, t: 2, c: 1, eventId: "e2" }] });
ok(r.body.applied === 0 && r.body.skipped === 1, "a retried eventId is applied once");
await me("POST", "/events", { store: "latin", gen: 0, events: [{ type: "answer", qid: "l1-q:0", topic: "L1/l1-q", correct: false, ts: 1500, streak: 0, t: 1, c: 0 }] });
r = await me("GET", "/state", null, { store: "latin" });
ok(r.body.topics["L1/l1-q"].correct === 1 && r.body.topics["L1/l1-q"].total === 3, "topic counters add");
ok(r.body.qstats["l1-q:0"].streak === 1 && r.body.qstats["l1-q:0"].last === 2000, "older qstats snapshot loses (LWW)");
ok(r.body.missed["l1-q:0"].misses === 2, "misses counted");
ok(r.body.sessions[0].app === "l1-q" && Array.isArray(r.body.sessions), "session stored with app");
ok(r.body.levels && Object.keys(r.body.levels).length === 0, "levels kept for client shape");

// ---------- facts (store latin-state) ----------
r = await me("POST", "/events", { store: "latin-state", gen: 0, events: [
  { type: "fact", lesson: 3, key: "note:verbs", v: "first", at: "2026-10-04T10:00:00.000Z", eventId: "f1" },
  { type: "fact", lesson: 3, key: "note:verbs", v: "stale", at: "2026-10-04T09:00:00.000Z", eventId: "f2" },
  { type: "fact", lesson: 3, key: "val:rating", v: { stars: 4, ok: true }, at: "2026-10-04T10:00:00.000Z", eventId: "f3" },
  { type: "fact", lesson: 0, key: "card:amo#1", v: 2, at: "2026-10-04T10:00:00.000Z", eventId: "f4" },
  { type: "fact", lesson: 4, key: "sec:0", v: true, at: "2026-10-04T10:00:00.000Z", eventId: "f5" },
] });
ok(r.body.applied === 5, "fact events applied");
r = await me("GET", "/state", null, { store: "latin-state" });
ok(r.body["3"]["note:verbs"].v === "first", "older fact loses (LWW by at)");
ok(r.body["3"]["val:rating"].v.stars === 4, "structured values round-trip");
ok(r.body["0"]["card:amo#1"].v === 2, "a key containing '#' parses back");
ok(r.body._meta.items === 4, "_meta counts rows (seen markers excluded)");
await me("POST", "/events", { store: "latin-state", gen: 0, events: [
  { type: "fact", lesson: 3, key: "note:verbs", v: "newer", at: "2026-10-04T11:00:00.000Z" },
  { type: "fact", lesson: "3#x", key: "k", v: 1, at: "2026-10-04T11:00:00.000Z" },
  { type: "fact", lesson: 3, key: "x".repeat(121), v: 1, at: "2026-10-04T11:00:00.000Z" },
  { type: "fact", lesson: 3, key: "big", v: "x".repeat(9000), at: "2026-10-04T11:00:00.000Z" },
] });
r = await me("GET", "/state", null, { store: "latin-state" });
ok(r.body["3"]["note:verbs"].v === "newer", "newer fact wins");
ok(!r.body["3#x"] && !r.body["3"]["x".repeat(121)] && !r.body["3"].big, "bad lesson / long key / oversized value rejected");
await me("POST", "/events", { store: "latin-state", gen: 0, events: [{ type: "fact", kind: "forget", lesson: 3, at: "2026-10-04T12:00:00.000Z" }] });
r = await me("GET", "/state", null, { store: "latin-state" });
ok(!r.body["3"] && r.body["4"]["sec:0"].v === true, "forget clears one lesson only");
ok((await me("GET", "/state", null, { store: "latin" })).body.topics["L1/l1-q"], "…and not the quiz store");

// ---------- isolation between users ----------
r = await other("GET", "/state", null, { store: "latin-state" });
ok(r.body._meta.items === 0 && !r.body["4"], "another user sees nothing");

// ---------- bootstrap ----------
const ob = as("bootstrapper");
r = await ob("POST", "/bootstrap", { store: "latin-state", data: { 1: { open: { v: true, at: "2026-10-01T00:00:00.000Z" } }, _meta: {}, "a#b": { k: { v: 1, at: "x" } } } });
ok(r.body.bootstrapped === true && r.body.items === 1, "facts bootstrap seeds valid lessons only");
r = await ob("POST", "/bootstrap", { store: "latin-state", data: { 2: { open: { v: true, at: "2026-10-01T00:00:00.000Z" } } } });
ok(r.body.bootstrapped === false, "second bootstrap refused");
r = await ob("GET", "/state", null, { store: "latin-state" });
ok(r.body["1"].open.v === true && !r.body["2"] && r.body._meta.bootstrapped, "bootstrap state reads back");
r = await ob("POST", "/bootstrap", { store: "latin", data: { topics: { "L2/x": { correct: 2, total: 3 } }, qstats: { "x:0": { c: 2, t: 3, streak: 2, last: 9 } },
  missed: { "x:1": { topic: "L2/x", question: "q", misses: 1, lastMissed: 5 } }, sessions: [{ date: 7, correct: 2, total: 3, topics: ["L2/x"], app: "x" }] } });
ok(r.body.items === 4, "quiz bootstrap seeds every part");
r = await ob("GET", "/state", null, { store: "latin" });
ok(r.body.topics["L2/x"].total === 3 && r.body.qstats["x:0"].streak === 2 && r.body.missed["x:1"].misses === 1 && r.body.sessions[0].app === "x", "quiz bootstrap reads back");

// ---------- reset epoch ----------
r = await me("POST", "/reset", { store: "latin-state" });
ok(r.body.gen === 1, "reset bumps the epoch");
r = await me("POST", "/events", { store: "latin-state", gen: 0, events: [{ type: "fact", lesson: 5, key: "open", v: true, at: "2026-10-04T13:00:00.000Z" }] });
ok(r.body.applied === 0 && r.body.resetGen === 1, "a device behind the reset is dropped");
r = await me("GET", "/state", null, { store: "latin-state" });
ok(r.body._meta.resetGen === 1 && r.body._meta.items === 1 && !r.body["4"], "reset wiped the store, kept the epoch");
ok((await me("GET", "/state", null, { store: "latin" })).body.topics["L1/l1-q"], "reset of one store leaves the other");
ok([...table.keys()].every(k => k.startsWith("user#")), "every row lives in a user partition");

console.log("\nALL PASSED");
