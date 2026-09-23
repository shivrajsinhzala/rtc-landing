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
import { DEPOTS as RJ_DEPOTS } from '../src/data/rajasthan/depots.data.mjs';
import { DEPOTS as HR_DEPOTS } from '../src/data/haryana/depots.data.mjs';
import { DEPOTS as HP_DEPOTS } from '../src/data/himachal-pradesh/depots.data.mjs';
import { DEPOTS as UK_DEPOTS } from '../src/data/uttarakhand/depots.data.mjs';
import { DEPOTS as PB_DEPOTS } from '../src/data/punjab/depots.data.mjs';
import { GUIDES as UP_GUIDES } from '../src/data/uttar-pradesh/guides.data.mjs';
import { ROUTES } from '../src/data/routes.data.mjs';

const DEPOT_SOURCES = {
  'uttar-pradesh': UP_DEPOTS,
  'maharashtra': MH_DEPOTS,
  'rajasthan': RJ_DEPOTS,
  'haryana': HR_DEPOTS,
  'himachal-pradesh': HP_DEPOTS,
  'uttarakhand': UK_DEPOTS,
  'punjab': PB_DEPOTS,
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

// Every depot page must be reachable from at least one other page besides the hub (siblings)
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

// Verify all 70 route pages
let routeIssues = 0;
for (const r of ROUTES) {
  const routePath = `/${r.stateId}/routes/${r.slug}`;
  const routeFile = fileFor(routePath);
  if (!fs.existsSync(routeFile)) { fail(`${routePath} did not build`); routeIssues++; continue; }
  const html = fs.readFileSync(routeFile, 'utf8');
  if (!html.includes(`tel:${digits(r.originStandPhone)}`)) {
    fail(`${routePath} does not carry origin station phone tel:${digits(r.originStandPhone)}`);
    routeIssues++;
  }
  const routesIndexFile = fileFor(`/${r.stateId}/routes`);
  if (fs.existsSync(routesIndexFile)) {
    const indexHtml = fs.readFileSync(routesIndexFile, 'utf8');
    if (!indexHtml.includes(routePath)) {
      fail(`Routes index /${r.stateId}/routes does not link to ${routePath}`);
      routeIssues++;
    }
  }
}
if (!routeIssues) pass(`routes: all ${ROUTES.length} intercity bus route pages carry their numbers and are linked from state route directories`);

// Verify new dedicated core pages
const corePages = [
  { path: '/states', label: 'State RTCs Directory' },
  { path: '/timetables', label: 'National Timetables Directory' },
  { path: '/emergency', label: 'Emergency & Highway Helplines' },
];

for (const p of corePages) {
  const f = fileFor(p.path);
  if (!fs.existsSync(f)) {
    fail(`Core page ${p.path} did not build`);
  } else {
    pass(`core: ${p.path} (${p.label}) built successfully`);
  }
}

// Utility guides: each must build and be linked from its state hub. Only states with a sourced
// guides file are checked (UP today).
const GUIDE_SOURCES = { 'uttar-pradesh': UP_GUIDES };
for (const [stateId, guides] of Object.entries(GUIDE_SOURCES)) {
  const hubFile = fileFor(`/${stateId}`);
  const hub = fs.existsSync(hubFile) ? fs.readFileSync(hubFile, 'utf8') : '';
  let issues = 0;
  for (const g of guides) {
    const gp = `/${stateId}/${g.slug}`;
    if (!fs.existsSync(fileFor(gp))) { fail(`${gp} did not build`); issues++; continue; }
    if (!hub.includes(gp)) { fail(`hub /${stateId} does not link to guide ${gp}`); issues++; }
  }
  if (!issues) pass(`${stateId}: all ${guides.length} utility guides built and linked from the hub`);
}

console.log(failures ? `\n${failures} check(s) failed.` : '\nAll checks passed.');
process.exit(failures ? 1 : 0);
