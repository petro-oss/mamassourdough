# Mama's Sourdough — Tech Setup

## Standard stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Hosted on Vercel
- Code synced via GitHub

## Project-specific additions

- **Tailwind CSS v4** — uses `@import "tailwindcss"` syntax, not v3 config
- **Fonts:** DM Sans, Cormorant Garamond, DM Mono via `next/font`
- **GoHighLevel (GHL)** — CRM/order pipeline + SMS notifications, inbound webhook trigger, shared between customer and stockist orders
- **Google Sheets + Google Apps Script** — order log, weekly archive, dedup logic (see below)
- **Stockist/wholesale program** — `/stockists` directory + `/stockist/[shop]` order pages for 6 local shops (No23 added 1 Sep 2026), see [CLIENT.md](CLIENT.md) and the `stockist-program` memory file for full contact/product detail
- **Custom animation system** in `globals.css` — `.reveal`/`.revealed` scroll-triggered classes, `ScrollReveal`, `HealthBenefitsGrid`, `StatsRow` client components
- **ThanetMap** (`web/src/components/ThanetMap.tsx` or similar) — SVG map of Thanet with brand-styled pins per stockist, linking to Google Maps directions

## Environment variables

| Key | Purpose | Where to get it |
|---|---|---|
| `GOOGLE_SHEETS_WEBHOOK` | Google Apps Script web app URL that the order API proxies to for sheet logging | Google Apps Script deployment (Deploy → Web app) |
| GHL webhook URL | Inbound webhook target for order form submissions (hardcoded/used in `api/order/route.ts`) | GHL → Automation → Webhook trigger |

## Domain & hosting

**Domain:** www.mamassourdough.co.uk — connected to Vercel
**DNS managed by:** TBC (registrar not recorded)
**Vercel project:** team `team_p03axjfAQHIGnqLVSAQQMiBh`, auto-deploy from `main`
**GitHub repo:** https://github.com/petro-oss/mamassourdough

## Deployment notes

Standard Vercel deploy from `main` branch (auto-deploy on push). `option-1-stock-photos` and `option-2-lucie-photos` branches exist from an early photo-direction decision (settled in favour of `main`/Lucie's real photos) — both are 80+ commits behind `main` and not being kept in sync; treat them as historical, not active.

## Integration details

### Order flow (customer + stockist)
1. Customer submits order on `/order` → `web/src/app/api/order/route.ts`. Stockist submits on `/stockist/[shop]` → `web/src/app/api/stockist-order/route.ts`.
2. Route posts to the GHL inbound webhook (same webhook for both, stockist payload tagged `type: "stockist"`) — creates/updates contact, triggers workflows. The customer routes (`api/order`, `api/payment`) rewrite `order_notes` for the GHL payload only, via `api/orderNote.ts` (`buildGhlOrderNotes`), so the note/SMS templates' `{{contact.order_notes}}` gets the full itemised order; the Sheets payload keeps the raw customer note.
3. Route also posts to the Google Apps Script web app (`GOOGLE_SHEETS_WEBHOOK`), which writes to the Sheet (`writeOrder` for customers, `writeStockistOrder` for stockists).
4. Apps Script uses `LockService` + `PropertiesService` for dedup on customer orders (key: email + order_total + timestamp rounded to a 10s window) after an earlier duplicate-row bug.

### GHL workflows
- Customer orders: contact/opportunity created, split by If/Else into Weekly Orders vs Recurring Orders pipelines based on standing-order checkbox.
- Stockist orders: **no separate pipeline** (tried, Lucie found it too complicated) — routed into the same Weekly Orders pipeline, with a dedicated **"Stockist Order Confirmed"** stage. See `ghl-integration` memory file for full workflow detail. (The old "SMS To field hardcoded to a test number" issue was resolved 24 Aug 2026 — now `{{contact.phone}}`.)
- SMS on order confirmation (customer) and internal notification (Lucie); SMS on stage-change for both flows.
- Wednesday 7pm SMS to Lucie with the Sheet link — status conflicting between sessions (reported working 21 Jun, reported not built later); verify current state.

### Google Sheet (current structure, corrects an earlier stale note)
8 tabs: **Orders**, **Baking Plan**, **Packing List**, **Weekly Menu**, **Stockist Deliveries**, **Shop Directory**, **Stockist Baking Plan**, plus **Order History** / **Packing History** archives. Weekly reset runs **Sunday 8pm** (not Friday), archiving Orders/Packing/Stockist Deliveries and resetting both baking plans; cancellations are handled via a manual Active/Cancelled **Status** dropdown on the Orders tab (not a "Paid" column). Full detail — including the Apps Script `ss`-parameter bug pattern and a stale duplicate `Code.gs` at the project root — is in the `google-sheets-integration` memory file; the live script is `google-apps-script/Code.gs`, not the one at the project root.
