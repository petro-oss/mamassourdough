# Mama's Sourdough — Tech Setup

## Standard stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Hosted on Vercel
- Code synced via GitHub

## Project-specific additions

- **Tailwind CSS v4** — uses `@import "tailwindcss"` syntax, not v3 config
- **Fonts:** DM Sans, Cormorant Garamond, DM Mono via `next/font`
- **GoHighLevel (GHL)** — CRM/order pipeline + SMS notifications, inbound webhook trigger
- **Google Sheets + Google Apps Script** — order log, weekly archive, dedup logic (see below)
- **Custom animation system** in `globals.css` — `.reveal`/`.revealed` scroll-triggered classes, `ScrollReveal`, `HealthBenefitsGrid`, `StatsRow` client components

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

Standard Vercel deploy from `main` branch (auto-deploy on push). A second branch, `option-1-stock-photos`, is kept for the alternate visual direction but is not deployed to production.

## Integration details

### Order flow
1. Customer submits order on `/order` → `web/src/app/api/order/route.ts`
2. Route posts to the GHL inbound webhook (creates/updates contact, triggers workflows)
3. Route also posts to the Google Apps Script web app (`GOOGLE_SHEETS_WEBHOOK`), which writes a row to the Google Sheet
4. Apps Script uses `LockService` + `PropertiesService` for dedup (key: email + order_total + timestamp rounded to a 10s window) after an earlier duplicate-row bug

### GHL workflows
- Order creates a GHL contact/opportunity, split by If/Else into Weekly Orders vs Recurring Orders pipelines
- Weekly Orders pipeline stages: Order Received → Payment Confirmed → Ready to Bake → Collected
- SMS on order confirmation (customer) and internal notification (Lucie)
- SMS on Payment Confirmed stage change
- Wednesday 7pm SMS to Lucie with the Google Sheet link (weekly rollup)

### Google Sheet
- Tabs: All Orders, Recurring Orders, This Week, plus dated "Delivered [date]" archive tabs
- Friday 8pm auto-archive trigger via Apps Script (`archiveWeekAndReset`)
- Manual "Paid" column — Lucie marks Yes when payment received
