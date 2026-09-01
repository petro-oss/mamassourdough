import { NextRequest, NextResponse } from "next/server";
import { buildGhlOrderNotes } from "../orderNote";

const GHL_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/IivI4GWZybydq2NxO7mj/webhook-trigger/dd3af2d7-a2fd-4df2-8f6a-4a35a9faae7e";

// Paste your Google Apps Script Web App URL here after deploying it
const SHEETS_WEBHOOK = process.env.GOOGLE_SHEETS_WEBHOOK ?? "";

export async function POST(req: NextRequest) {
  const body = await req.json();

  // GHL note/SMS templates read {{contact.order_notes}} — give it the full,
  // formatted order (date, items, total, customer note). Sheets keeps the raw
  // `order_notes` so the Orders tab Notes column stays clean.
  const ghlBody = { ...body, order_notes: buildGhlOrderNotes(body) };

  // Send to GHL and Google Sheet in parallel
  const requests: Promise<Response>[] = [
    fetch(GHL_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ghlBody),
    }),
  ];

  if (SHEETS_WEBHOOK) {
    requests.push(
      fetch(SHEETS_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        redirect: "manual", // prevent double-execution caused by GAS redirect
      }).catch(() => new Response(null, { status: 200 }))
    );
  }

  const [ghlRes] = await Promise.all(requests);

  if (!ghlRes.ok) {
    return NextResponse.json({ error: "GHL webhook failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
