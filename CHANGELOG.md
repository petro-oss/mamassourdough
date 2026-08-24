# Mama's Sourdough — Changelog

All notable changes to this project are logged here, most recent first.

## 2026-08-24
- Project documentation scaffolded (CLAUDE.md, CLIENT.md, DESIGN.md, CONTENT.md, TECH.md, TASKS.md, CHANGELOG.md) retroactively for an already-live project.

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
