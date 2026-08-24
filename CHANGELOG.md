# Mama's Sourdough — Changelog

All notable changes to this project are logged here, most recent first.

## 2026-08-24 (evening)
- Added Vercel Web Analytics (`@vercel/analytics`), enabled in the Vercel dashboard, confirmed deployed and collecting.
- Fixed all 6 high-severity `npm audit` advisories: bumped Next.js 16.2.7 → 16.3.2 (fixes SSRF/DoS/cache-confusion issues in Next.js itself, same major version, verified working post-upgrade), and `npm audit fix` for the remaining eslint-toolchain-only advisories (`js-yaml`, `brace-expansion` — build-time only, never touched live traffic).
- Deleted the stale duplicate `Code.gs` at the project root.
- GHL phone number confirmed purchased.

## 2026-08-24 (later)
- Added SEO basics: per-page metadata on every route, `sitemap.ts`, `robots.ts` (stockist order pages excluded from both, kept private). Fixed a real production bug — `metadataBase` was unset, so Open Graph/Twitter share images resolved to `localhost` instead of the live domain; verified fixed.
- Extracted shared menu data out of `menu/page.tsx` into `menu/data.ts` so the order form (client component) no longer imports directly from a page file with metadata.
- Code-level performance review: confirmed all images go through `next/image`, no raw `<img>` tags, fonts load via `next/font`. No fixes needed; official Lighthouse score still to be run by Petro.
- Closed out several outstanding decisions with Petro: recurring/standing orders for regular customers are no longer offered (moot the earlier GHL field-mismatch concern); monthly stockist invoicing decided against in favour of the print-receipt flow; Instagram bio + launch announcement confirmed done; Shop Directory contact gaps (Kirstey's email, Grain Grocer's contact) confirmed not needed; still on the old "enhanced" photo set, not the July photoshoot — Petro following up.

## 2026-08-24
- Reopened the site after Lucie's 4–21 August leave (removed holiday banner, flipped `EARLY_CLOSE`/`HOLIDAY_CLOSE` flags off in the customer and stockist order forms); verified live.
- Fixed a real bug: the Stockist Baking Plan was tallying all-time order history instead of the current week (confirmed — Grain Grocer's tally was exactly 7x the correct amount, one multiple per un-archived week since 22 July). Added `weeklyStockistReset()` to `google-apps-script/Code.gs`, deployed to the live Apps Script editor, ran manually, and verified correct on the live sheet. A same-day live order caught in the mid-week archive sweep was recovered.
- Confirmed in GHL: stockist "Order Confirmed" SMS now sends to the real shop (`{{contact.phone}}`), not a test number. Njord Cafe Bar's GHL contact confirmed created.
- Corrected a stale Google Sheet ID in project memory — the real live sheet is `1tDzpX_RkBK8RxcJJDtdl7mCIPijxF3gremWy4Xs4bwE`, not the older one previously on record.
- Project documentation scaffolded (CLAUDE.md, CLIENT.md, DESIGN.md, CONTENT.md, TECH.md, TASKS.md, CHANGELOG.md) retroactively for an already-live project, then corrected once the full stockist-program history was recovered from an earlier session's transcript.

## 2026-07 (exact dates not recorded — recovered from an earlier session's history)
- Built the full stockist/wholesale program: `/stockists` directory page, per-shop `/stockist/[shop]` order pages, 3-step order → payment → print-receipt flow.
- Iterated the stockist list several times: Grain Grocer removed then re-added (standing order only, no page); Shahla's Cakes added; Flowers & Felicities added then permanently removed at Lucie's request; Njord Cafe Bar added as the 5th/newest stockist.
- Routed stockist orders into the existing GHL Weekly Orders pipeline (a separate stockist pipeline was tried and abandoned as too complex) with a new "Stockist Order Confirmed" stage; fixed a `[object Object]` bug in GHL contact notes.
- Built the Thanet map component through several redesigns, landing on realistic coastline + branded teardrop pins linking to Google Maps directions.
- Added Google Sheets tabs for the stockist side: Stockist Deliveries, Shop Directory, Stockist Baking Plan; hardcoded Grain Grocer's standing weekly order.
- Added a loading spinner on order submission (customer + stockist) to prevent double-submits.

## 2026-07-07
- Go-live: site launched publicly, orders reopened after Lucie's holiday.

## 2026-06-22
- Nav simplified (logo removed, text-only), nav links made bolder/bigger
- Menu split out individual loaf varieties; Blueberry Muffin added (£3.00, incl. Apps Script PRODUCTS array)
- Allergen info added per product plus allergen notice banner on Menu and Order pages
- "Designed by Wall Media" footer credit added
- Google Sheet updated for new product column; all test data cleared ahead of tester rollout

## 2026-06-21
- GHL workflow fully wired: order → contact creation, customer SMS, internal SMS to Lucie
- Recurring vs one-off order If/Else branch working; Recurring Orders and Weekly Orders pipelines live
- Wednesday 7pm weekly rollup SMS to Lucie (with Google Sheet link) working
- Google Sheet structure finalised (All Orders / Recurring Orders / This Week tabs, Friday 8pm auto-archive)
- Fixed duplicate order rows in Google Sheet (manual redirect handling in API route + LockService/PropertiesService dedup in Apps Script, deployed as Version 3)
