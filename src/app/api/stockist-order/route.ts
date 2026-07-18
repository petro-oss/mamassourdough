import { NextRequest, NextResponse } from "next/server";

const SHEETS_WEBHOOK = process.env.GOOGLE_SHEETS_WEBHOOK ?? "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!SHEETS_WEBHOOK) {
      return NextResponse.json({ ok: false, error: "Sheets webhook not configured" }, { status: 500 });
    }

    const payload = {
      type:        "stockist",
      shop:        body.shop,
      address:     body.address,
      order_items: body.items,
      order_notes: body.notes ?? "",
      order_total: body.order_total,
    };

    const sheetsRes = await fetch(SHEETS_WEBHOOK, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload),
    });

    const sheetsJson = await sheetsRes.json().catch(() => ({}));
    if (!sheetsJson.ok) {
      console.error("Sheets error:", sheetsJson);
      return NextResponse.json({ ok: false, error: "Sheet write failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Stockist order error:", err);
    return NextResponse.json({ ok: false, error: "Internal error" }, { status: 500 });
  }
}
