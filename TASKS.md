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

## Core build
- [x] Design system / Tailwind config set up (Tailwind v4, brand tokens in `globals.css`)
- [x] Header & footer ("Designed by Wall Media" credit in footer)
- [x] Navigation
- [x] Order form wired to GHL webhook + Google Sheets
- [x] Mobile responsiveness pass
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
- [x] Google Sheet dedup fix (LockService + PropertiesService) — deployed, confirm still holding
- [ ] GHL SMS field-mapping issue (wrong details pulling through) — confirm resolved, was unfixed as of last check
- [ ] Buy GHL phone number (~£1.50/mo) — confirm purchased, needed for SMS sending
- [ ] Daily 6pm order summary workflow for Lucie — confirm built
- [x] Wednesday weekly rollup SMS workflow — working

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

## Ongoing
- [ ] Update Menu page weekly as Lucie's bake list changes
