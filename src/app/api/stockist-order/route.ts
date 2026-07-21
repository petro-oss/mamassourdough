import { NextRequest, NextResponse } from "next/server";

const SHEETS_WEBHOOK = process.env.GOOGLE_SHEETS_WEBHOOK ?? "";
const GHL_STOCKIST_WEBHOOK = "https://services.leadconnectorhq.com/hooks/IivI4GWZybydq2NxO7mj/webhook-trigger/0e9ebb13-5002-4086-8d03-2acd3b69e7ca";

// Formats items grouped by day into a readable string for GHL notes/SMS
function formatOrderSummary(items: { day: string; name: string; qty: number; price: number }[]): string {
  const byDay: Record<string, typeof items> = {};
  items.forEach((item) => {
    if (!byDay[item.day]) byDay[item.day] = [];
    byDay[item.day].push(item);
  });
  return Object.entries(byDay)
    .map(([day, dayItems]) => {
      const lines = dayItems.map((i) => `  ${i.name} × ${i.qty} — £${(i.qty * i.price).toFixed(2)}`).join("\n");
      return `${day.toUpperCase()}:\n${lines}`;
    })
    .join("\n");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!SHEETS_WEBHOOK) {
      return NextResponse.json({ ok: false, error: "Sheets webhook not configured" }, { status: 500 });
    }

    const items = body.items ?? [];
    const orderSummary = formatOrderSummary(items);

    // ── Google Sheets payload ─────────────────────────────────────────────
    const sheetsPayload = {
      type:        "stockist",
      shop:        body.shop,
      address:     body.address,
      order_items: items,
      order_notes: body.notes ?? "",
      order_total: body.order_total,
    };

    // ── GHL payload ───────────────────────────────────────────────────────
    // first_name / last_name used by GHL to create/update the contact
    const ghlPayload = {
      first_name:     body.contact || body.shop,
      last_name:      body.shop,
      email:          body.email   ?? "",
      phone:          body.phone   ?? "",
      shop:           body.shop,
      contact:        body.contact ?? "",
      address:        body.address,
      order_total:    body.order_total,
      order_summary:  orderSummary,
      order_notes:    body.notes   ?? "",
      date:           new Date().toLocaleDateString("en-GB"),
    };

    // Fire both in parallel — Sheets is required, GHL failure is logged but non-blocking
    const [sheetsRes, ghlRes] = await Promise.all([
      fetch(SHEETS_WEBHOOK, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(sheetsPayload),
      }),
      fetch(GHL_STOCKIST_WEBHOOK, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(ghlPayload),
      }),
    ]);

    const sheetsJson = await sheetsRes.json().catch(() => ({}));
    if (!sheetsJson.ok) {
      console.error("Sheets error:", sheetsJson);
      return NextResponse.json({ ok: false, error: "Sheet write failed" }, { status: 500 });
    }

    if (!ghlRes.ok) {
      console.error("GHL stockist webhook error:", ghlRes.status);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Stockist order error:", err);
    return NextResponse.json({ ok: false, error: "Internal error" }, { status: 500 });
  }
}
