import { NextRequest, NextResponse } from "next/server";

const GHL_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/IivI4GWZybydq2NxO7mj/webhook-trigger/dd3af2d7-a2fd-4df2-8f6a-4a35a9faae7e";

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
