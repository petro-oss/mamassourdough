@AGENTS.md

# Mama's Sourdough — Project Brief

**Status:** Launched & live
**Last updated:** 24 August 2026

## What we're building

A marketing + ordering website for Mama's Sourdough, Lucie Brissenden's small-batch artisan sourdough bakery in Ramsgate, Kent — showcasing the brand and taking weekly bread/bake orders that flow into GoHighLevel (GHL) for order management and customer SMS.

## Business goals

- Take weekly orders online (closing Wednesday 7pm) and route them into GHL without manual re-entry
- Build brand presence and trust — community, provenance, real ingredients, 10+ year sourdough starter
- Support recurring/standing weekly orders alongside one-off orders

## Target audience

Local Ramsgate/Kent customers who want fresh, real sourdough and home bakes; found via Instagram/Facebook and word of mouth; ordering weekly ahead of Friday collection/delivery.

## Scope

### In scope
- Home, Menu, About, Order, Contact pages
- Order form → GHL webhook → Google Sheets order log
- Recurring/standing order support (separate GHL pipeline)
- SMS notifications to customer and to Lucie via GHL

### Out of scope
- Online payment processing on-site (payment handled via GHL/manual flow, not site-side checkout)
- Farmers market references (Lucie no longer does markets)
- Any personal photos of Lucie

## Success criteria

- Orders placed on the site land correctly and once in the Google Sheet and correct GHL pipeline (Weekly vs Recurring)
- Lucie receives accurate SMS notifications for new orders and the Wednesday weekly rollup
- Site reflects current brand/photos and passes basic mobile + cross-browser checks

## Timeline

**Target launch:** 7 July 2026 (met) — site is live at www.mamassourdough.co.uk

## Notes

See [CLIENT.md](CLIENT.md), [DESIGN.md](DESIGN.md), [CONTENT.md](CONTENT.md), [TECH.md](TECH.md), [TASKS.md](TASKS.md) and [CHANGELOG.md](CHANGELOG.md) for details. This project has an ongoing memory log outside this repo at `~/.claude/projects/.../memory/` with session-by-session history — this doc set is the persistent, repo-tracked summary of that.
