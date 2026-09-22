#!/usr/bin/env node
/**
 * Same discipline as gsrtc-landing's verify-build: a wrong or unlinked phone number is the
 * worst thing this site can ship, so checking it is a build gate, not a lint warning.
 *
 * Run against dist/ after `astro build`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { STATES } from '../src/config/states.mjs';
import { DEPOTS as UP_DEPOTS, depotSlug } from '../src/data/uttar-pradesh/depots.data.mjs';
import { DEPOTS as MH_DEPOTS } from '../src/data/maharashtra/depots.data.mjs';

const DEPOT_SOURCES = {
  'uttar-pradesh': UP_DEPOTS,
  'maharashtra': MH_DEPOTS,
};
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');

let failures = 0;
const fail = (m) => { console.error(`  ✗ ${m}`); failures++; };
const pass = (m) => console.log(`  ✓ ${m}`);

if (!fs.existsSync(DIST)) { console.error('dist/ not found — run `npm run build` first.'); process.exit(1); }

const digits = (s) => s.replace(/[^0-9]/g, '');
const fileFor = (p) => path.join(DIST, p === '/' ? 'index.html' : `${p.replace(/^\//, '')}.html`);

for (const [stateId, depots] of Object.entries(DEPOT_SOURCES)) {
  const hubPath = `/${stateId}`;
  if (!fs.existsSync(fileFor(hubPath))) { fail(`${hubPath} did not build`); continue; }
  const hub = fs.readFileSync(fileFor(hubPath), 'utf8');

  let stateIssues = 0;
  for (const d of depots) {
    const p = `/${stateId}/${depotSlug(d.city)}`;
    const file = fileFor(p);
    if (!fs.existsSync(file)) { fail(`${p} did not build`); stateIssues++; continue; }
    const html = fs.readFileSync(file, 'utf8');
    for (const n of d.stands.flatMap((s) => s.numbers)) {
      if (!html.includes(`tel:${digits(n)}`)) { fail(`${p} does not carry its own number ${n}`); stateIssues++; }
    }
    if (!hub.includes(p)) { fail(`hub /${stateId} does not link to ${p}`); stateIssues++; }
  }
  if (!stateIssues) pass(`${stateId}: all ${depots.length} depot pages carry their numbers and are linked from the hub`);
}

// Every depot page must be reachable from at least one other page besides the hub (siblings),
// matching the near-orphan fix applied to gsrtc-landing's depot pages.
for (const [stateId, depots] of Object.entries(DEPOT_SOURCES)) {
  const inbound = new Map(depots.map((d) => [d.city, 0]));
  for (const d of depots) {
    const file = fileFor(`/${stateId}/${depotSlug(d.city)}`);
    if (!fs.existsSync(file)) continue;
    const html = fs.readFileSync(file, 'utf8');
    for (const other of depots) {
      if (other.city === d.city) continue;
      if (html.includes(`/${stateId}/${depotSlug(other.city)}`)) inbound.set(other.city, inbound.get(other.city) + 1);
    }
  }
  const orphans = [...inbound].filter(([, n]) => n === 0);
  if (orphans.length) fail(`${stateId}: ${orphans.length} depot page(s) with no sibling inbound link: ${orphans.map(([c]) => c).join(', ')}`);
  else pass(`${stateId}: every depot page has at least one sibling inbound link`);
}

console.log(failures ? `\n${failures} check(s) failed.` : '\nAll checks passed.');
process.exit(failures ? 1 : 0);
