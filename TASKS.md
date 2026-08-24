# Mama's Sourdough — Build Checklist

## Setup
- [x] Repo created (GitHub)
- [x] Next.js project initialised
- [x] Vercel project connected
- [x] Domain pointed (www.mamassourdough.co.uk connected to Vercel)

## Pages
- [x] Home
- [x] Menu
- [x] About
- [x] Order
- [x] Contact
- [x] Stockists directory (`/stockists`) — cards + Thanet map + order CTA
- [x] Per-shop stockist order pages (`/stockist/[shop]`) — 4 live: Shahla's, Crumb & Deli, Union Cafe, Njord Cafe Bar

## Core build
- [x] Design system / Tailwind config set up (Tailwind v4, brand tokens in `globals.css`)
- [x] Header & footer ("Designed by Wall Media" credit in footer)
- [x] Navigation (incl. Stockists link)
- [x] Order form wired to GHL webhook + Google Sheets
- [x] Stockist order forms wired to the same GHL webhook (tagged `type: "stockist"`) + Google Sheets
- [x] Loading spinner on order submit (customer + stockist) — prevents double-submits
- [x] Mobile responsiveness pass (incl. Thanet map, verified in browser)
- [ ] SEO basics (meta titles/descriptions, sitemap, favicon) — favicon/logo not yet confirmed live, see below

## Content
- [x] All page copy in place
- [x] Product/allergen info in place
- [ ] Confirm latest photoshoot images (end of July 2026) are the live set, not the earlier enhanced set
- [x] Client content review

## GHL / order pipeline
- [x] Order → GHL webhook working (contact creation, SMS)
- [x] Recurring vs one-off If/Else split working
- [x] Recurring Orders pipeline fix (second Create Opportunity action) — done
- [x] Google Sheet dedup fix (LockService + PropertiesService) — deployed
- [x] GHL contact-note `[object Object]` bug fixed (now uses `{{contact.order_notes}}`) — applies to all orders going forward, old pipeline entries stay broken
- [x] Stockist orders routed into the same Weekly Orders pipeline (no separate pipeline — deliberately simplified), new "Stockist Order Confirmed" stage added and SMS-tested (Delivered)
- [ ] **GHL SMS field-mapping issue** — status conflicting between sessions: reported fixed as of 21 Jun, but a later session flagged it as still unresolved. Verify current state.
- [ ] Buy GHL phone number (~£1.50/mo) — confirm purchased, needed for SMS sending
- [ ] **CRITICAL: Stockist "Order Confirmed" SMS "To" field still hardcoded to a test number (07775562102)** — must switch to `{{contact.phone}}` in the GHL workflow editor before real stockist orders should trigger confirmations. Not a code fix — do this directly in GHL.
- [ ] Recurring-order field-name mismatch (`recurring_order` vs `order_type`) — suspected, never confirmed
- [ ] Wednesday 7pm rollup SMS to Lucie — reported working 21 Jun, but a later session describes it as never built. Verify which is true.
- [ ] Daily 6pm order summary workflow for Lucie — never confirmed built
- [ ] Njord Cafe Bar's GHL contact — confirm added (Kirstey/Lucy/Shahla were, Njord wasn't explicitly confirmed)
- [ ] Monthly stockist invoicing decision — Lucie was going to confirm whether it's still needed given the print-receipt flow; no confirmation on record

## Google Sheets / Apps Script
- [x] 8-tab structure live: Orders, Baking Plan, Packing List, Weekly Menu, Stockist Deliveries, Shop Directory, Stockist Baking Plan, Order/Packing History
- [x] Weekly reset (Sunday 8pm) archives Orders/Packing, resets customer Baking Plan
- [x] Grain Grocer standing order auto-reseeds weekly (10/12/14 Thu/Fri/Sat, hardcoded)
- [x] **Fixed 24 Aug 2026**: Stockist Baking Plan was tallying all-time history instead of current week — added `weeklyStockistReset()`, wired into the existing Sunday trigger. **Action needed**: paste updated `google-apps-script/Code.gs` into the live Apps Script editor and run `weeklyStockistReset` once to clear the current backlog.
- [ ] Delete the stale duplicate `Code.gs` at the project root (old 3-tab version, not the live one — `google-apps-script/Code.gs` is current)

## Pre-launch
- [x] Cross-browser check
- [ ] Performance/Lighthouse check
- [ ] Analytics installed
- [x] Client sign-off (testers ran successfully pre go-live)

## Launch
- [x] DNS switched
- [x] Post-launch smoke test
- [ ] Add real logo to Nav and/or favicon — confirm done
- [ ] Update Instagram bio with `/order` link — confirm done
- [ ] Post Instagram/WhatsApp announcement directing customers to website — confirm done
- [x] Site reopened 24 Aug 2026 after 4–21 Aug closure (holiday banner/flags removed, verified live)

## Ongoing
- [ ] Update Menu page weekly as Lucie's bake list changes (`available` flag per product)
- [ ] Update Weekly Menu Sheet tab to match — does NOT auto-sync, Petro flips code manually based on Lucie's WhatsApp message
