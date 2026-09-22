# rtc-landing — multi-state RTC bus info, one domain, one directory per state

The reusable half of what `gsrtc-landing` proved on Gujarat, generalized so a second state is a
config file and a data file, not a fork. Uttar Pradesh is the first state; see the "Adding a
state" section for what state #2 costs.

## Why this is a separate project from gsrtc-landing

`gsrtc.shivrajsinh.in` already holds real rankings (position 3–4 on its head terms) on its own
domain. Migrating it here for the sake of a shared codebase would risk that ranking for no proven
gain. This project starts from zero, on its own domain, and the Gujarat site is not touched by
anything here.

## Why one domain with `/uttar-pradesh/`, not `up.rtc.shivrajsinh.in`

A subdomain starts Google's trust at zero per state. A subdirectory inherits the domain's
accumulated authority — every state's links feed one domain, and state #8 launches into an
already-strong site instead of starting over. It's also what every real competitor in this space
(redBus, AbhiBus, Paytm) already does: one domain, one path per operator.

## Why depot-contact pages first, and nothing about live tracking

GSRTC's own live GPS was gated behind app attestation on 2026-09-19 — the exact failure mode a
reverse-engineered, vendor-gated API is always one policy change away from. This project is
scoped to **public information only**: numbers, fares, and directory content a corporation
publishes for people to read, sourced from the corporation's own site, never from a portal built
for booking or a mobile app's private backend.

Depot contact pages are the proof this pattern already works: on Gujarat, 326 city-named queries
sat at ~14,000 impressions and 1.58% CTR because one generic directory page was trying to answer
a query for one specific city's number. Splitting that into per-city pages is the single highest
CTR-gap fix found in three months of that site's Search Console data (see that project's history
for the numbers). This is the same fix, for a state that had no page for it at all.

## Sourcing discipline

Every number in `src/data/<state>/depots.data.mjs` must trace to the corporation's own official
site — a `.gov.in` domain, not an aggregator that copied it from one. No address, opening hours,
or platform number is ever invented; a page that guesses is worse than no page, because the
reader can catch a wrong claim and never forgive a dead phone number. `scripts/verify-build.mjs`
fails the build if a depot page's own numbers don't appear on it, or if any page is unlinked from
both the state hub and every sibling page — the same two failure modes that stranded some of
Gujarat's depot pages until that was caught and fixed by hand.

## Adding a state

1. Source its public depot/helpline data from the corporation's own site, the way
   `src/data/uttar-pradesh/depots.data.mjs`'s header documents doing for UP. Verify, don't copy
   from an aggregator.
2. Add an entry to `STATES` in `src/config/states.mjs`.
3. Add a `src/data/<state-id>/depots.data.mjs` in the same shape.
4. Wire its import into the two `sources` maps in `src/pages/[state]/[slug].astro` and
   `src/pages/[state]/index.astro`, and into `scripts/verify-build.mjs`.

Nothing in `Base.astro` or `DepotPage.astro` changes — they read everything from props.

## Before this earns anything

- **Domain**: `rtc.shivrajsinh.in` in `src/config/states.mjs` is a placeholder pointing at the
  owner's existing domain, chosen so no new domain purchase is needed — change it there if a
  different one is wanted, and update DNS/hosting to match.
- **AdSense**: `public/ads.txt` reuses the existing publisher id, but this domain still needs to
  be added and verified as its own site in the AdSense dashboard, and the placeholder ad slot id
  (`0000000000` in `DepotPage.astro` / state index) replaced with real per-position slot ids —
  same reasoning as gsrtc-landing's slot-id gap, see that project's history.
- **Search Console**: a new property, separate from gsrtc.shivrajsinh.in's.
- **Rankings**: start at zero. Gujarat's head-term positions took months to earn; expect the
  same curve here before this shows up as real traffic, let alone real money.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build       # astro build, then the integrity checks
```
