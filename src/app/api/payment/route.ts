import { NextRequest, NextResponse } from "next/server";

const GHL_PAYMENT_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/IivI4GWZybydq2NxO7mj/webhook-trigger/a9e176f7-b676-4c83-ad50-1e430c2bd958";

const SHEETS_WEBHOOK = process.env.GOOGLE_SHEETS_WEBHOOK ?? "";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const requests: Promise<Response>[] = [
    fetch(GHL_PAYMENT_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),
  ];

  if (SHEETS_WEBHOOK) {
    requests.push(
      fetch(SHEETS_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        redirect: "manual",
      }).catch(() => new Response(null, { status: 200 }))
    );
  }

  const [ghlRes] = await Promise.all(requests);

  if (!ghlRes.ok) {
    return NextResponse.json({ error: "GHL payment webhook failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
