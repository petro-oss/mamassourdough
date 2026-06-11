import { NextRequest, NextResponse } from "next/server";

const GHL_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/IivI4GWZybydq2NxO7mj/webhook-trigger/cd419f78-40f3-4880-be4c-67a3a7465b32";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await fetch(GHL_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "GHL webhook failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
