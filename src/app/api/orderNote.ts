// Builds the full human-readable order block that GHL's "Add Contact Note" and
// SMS templates render via {{contact.order_notes}}.
//
// The website sends the itemised order in `order_summary` and only the
// customer's optional free-text in `order_notes`. GHL needs everything in one
// field, so we compose it here for the GHL-facing payload only — the Google
// Sheets payload keeps `order_notes` as the raw customer note so the Orders tab
// stays readable.

type OrderNotePayload = {
  order_date?: string;
  order_summary?: string;
  order_total?: string;
  order_notes?: string;
  payment_method?: string;
};

export function buildGhlOrderNotes(body: OrderNotePayload): string {
  const lines: string[] = [];

  if (body.order_date) lines.push(`Ordered: ${body.order_date}`);
  if (body.order_summary?.trim()) lines.push("", body.order_summary.trim());
  if (body.order_total) lines.push("", `Total: ${body.order_total}`);
  if (body.payment_method) lines.push(`Payment: ${body.payment_method}`);
  if (body.order_notes?.trim()) lines.push("", `Customer note: ${body.order_notes.trim()}`);

  return lines.join("\n");
}
