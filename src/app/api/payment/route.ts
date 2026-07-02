import { NextRequest, NextResponse } from "next/server";

const GHL_PAYMENT_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/IivI4GWZybydq2NxO7mj/webhook-trigger/a9e176f7-b676-4c83-ad50-1e430c2bd958";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await fetch(GHL_PAYMENT_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "GHL payment webhook failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
