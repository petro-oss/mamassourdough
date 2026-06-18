"use client";

import { useState } from "react";
import { menuItems } from "@/app/menu/page";

type Quantities = Record<string, number>;

export default function OrderPage() {
  const [quantities, setQuantities] = useState<Quantities>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const setQty = (id: string, delta: number) => {
    setQuantities((prev) => {
      const next = Math.max(0, (prev[id] ?? 0) + delta);
      return { ...prev, [id]: next };
    });
  };

  const orderLines = menuItems.filter((item) => (quantities[item.id] ?? 0) > 0);
  const total = orderLines.reduce(
    (sum, item) => sum + item.price * (quantities[item.id] ?? 0),
    0
  );
  const hasItems = orderLines.length > 0;

  const orderSummary = orderLines
    .map((item) => `${item.name} x${quantities[item.id]} = £${(item.price * (quantities[item.id] ?? 0)).toFixed(2)}`)
    .join("\n");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!hasItems) return;

    const payload = {
      // Contact fields GHL picks up automatically
      first_name: name.split(" ")[0],
      last_name: name.split(" ").slice(1).join(" ") || "",
      email,
      phone,
      // Order details
      order_summary: orderSummary,
      order_total: `£${total.toFixed(2)}`,
      order_notes: notes,
      recurring_order: recurring ? "Yes — weekly standing order" : "No",
      order_items: orderLines.map((item) => ({
        name: item.name,
        qty: quantities[item.id],
        unit_price: `£${item.price.toFixed(2)}`,
        line_total: `£${(item.price * (quantities[item.id] ?? 0)).toFixed(2)}`,
      })),
      source: "Website Order Form",
      collection_day: "Thursday",
    };

    try {
      await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("GHL webhook error:", err);
      // Still show confirmation — don't block the customer
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#C4852A] mb-6">— Order received</p>
        <h1 className="font-serif text-5xl italic font-light text-[#2C1A0E] mb-6">
          Thank you, {name.split(" ")[0]}! 🫶🏻
        </h1>
        <p className="font-sans text-lg text-[#8B6347] leading-relaxed mb-4">
          Your order has been received. Payment details and collection or delivery time will be sent to you shortly. Orders close <strong>Wednesday at 7pm</strong>.
        </p>
        <div className="bg-[#F2EAE0] rounded-2xl p-8 text-left mt-8 font-mono text-sm text-[#4A2E1A] leading-8 whitespace-pre-line">
          {orderSummary}
          {"\n"}{"─".repeat(30)}
          {"\n"}Total: £{total.toFixed(2)}
        </div>
      </div>
    );
  }

  const categories = ["Loaves", "Focaccia", "Sweet Bakes"];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* ── HOLIDAY NOTICE ── */}
      <div className="mb-10 bg-[#EAF0EA] border border-[#4A6741]/30 rounded-2xl px-8 py-6 flex gap-4 items-start">
        <span className="text-2xl mt-0.5">🌿</span>
        <div>
          <p className="font-sans font-semibold text-[#2C1A0E] mb-1">Orders are currently on hold</p>
          <p className="font-sans text-sm text-[#4A2E1A] leading-relaxed">
            Lucie is on holiday and will be back on <strong>7 July</strong>. Business resumes as normal from that date. You&apos;re welcome to browse the menu — orders will reopen on Monday 7 July. Thank you for your patience 🫶🏻
          </p>
        </div>
      </div>

      {/* Header */}
      <div className="mb-12">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#C4852A] mb-3">
          — Orders close Wednesday 7pm · Collection/Delivery TBA
        </p>
        <h1 className="font-serif text-6xl italic font-light text-[#2C1A0E]">Place Your Order</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">

          {/* Left: item selector */}
          <div>
            {categories.map((cat) => {
              const catItems = menuItems.filter((i) => i.category === cat);
              return (
                <div key={cat} className="mb-10">
                  <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C4852A] mb-4 pb-3 border-b border-[#EAE0D5]">
                    {cat}
                  </p>
                  <div className="divide-y divide-[#EAE0D5]">
                    {catItems.map((item) => {
                      const qty = quantities[item.id] ?? 0;
                      return (
                        <div key={item.id} className="py-5 flex items-center justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <p className="font-serif text-xl italic text-[#2C1A0E] leading-snug">{item.name}</p>
                            <p className="font-sans text-sm text-[#8B6347] mt-1 leading-relaxed">{item.desc}</p>
                          </div>
                          <span className="font-sans text-base font-semibold text-[#C4852A] w-14 text-right shrink-0">
                            {item.priceLabel}
                          </span>
                          {/* Quantity stepper */}
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              type="button"
                              onClick={() => setQty(item.id, -1)}
                              disabled={qty === 0}
                              className="w-9 h-9 flex items-center justify-center rounded-full border border-[#D4BFA8] font-sans text-lg text-[#2C1A0E] hover:bg-[#2C1A0E] hover:text-white hover:border-[#2C1A0E] transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
                            >
                              −
                            </button>
                            <span className="font-sans text-base font-semibold w-6 text-center text-[#2C1A0E]">{qty}</span>
                            <button
                              type="button"
                              onClick={() => setQty(item.id, 1)}
                              className="w-9 h-9 flex items-center justify-center rounded-full border border-[#D4BFA8] font-sans text-lg text-[#2C1A0E] hover:bg-[#C4852A] hover:text-white hover:border-[#C4852A] transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: order summary + details */}
          <div className="lg:sticky lg:top-6 flex flex-col gap-5">

            {/* Running total */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-[#EAE0D5]">
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#8B6347]">Your Order</p>
              </div>
              <div className="px-6 py-4 min-h-[80px]">
                {!hasItems ? (
                  <p className="font-sans text-base text-[#C8A882] italic">No items yet — add some above.</p>
                ) : (
                  <div className="divide-y divide-[#EAE0D5]">
                    {orderLines.map((item) => (
                      <div key={item.id} className="py-2.5 flex justify-between gap-2">
                        <span className="font-sans text-base text-[#4A2E1A] leading-snug">{item.name} <span className="text-[#8B6347]">×{quantities[item.id]}</span></span>
                        <span className="font-sans text-base font-semibold text-[#2C1A0E] shrink-0">
                          £{(item.price * (quantities[item.id] ?? 0)).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="px-6 py-4 border-t border-[#EAE0D5] flex justify-between items-center bg-[#FAF6F0]">
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#8B6347]">Total</span>
                <span className="font-serif text-3xl italic text-[#2C1A0E]">£{total.toFixed(2)}</span>
              </div>
            </div>

            {/* Customer details */}
            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#8B6347]">Your Details</p>
              {[
                { id: "name", label: "Name *", type: "text", placeholder: "Your full name", value: name, onChange: setName, required: true },
                { id: "email", label: "Email *", type: "email", placeholder: "your@email.com", value: email, onChange: setEmail, required: true },
                { id: "phone", label: "Phone", type: "tel", placeholder: "07700 000000", value: phone, onChange: setPhone, required: false },
              ].map(({ id, label, type, placeholder, value, onChange, required }) => (
                <div key={id}>
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-[#8B6347] mb-1.5" htmlFor={id}>
                    {label}
                  </label>
                  <input
                    id={id}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                    type={type}
                    placeholder={placeholder}
                    className="w-full bg-[#FAF6F0] border border-[#EAE0D5] rounded-xl px-4 py-3 font-sans text-base text-[#2C1A0E] focus:outline-none focus:border-[#C4852A] placeholder:text-[#C8A882] transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#8B6347] mb-1.5" htmlFor="notes">
                  Notes
                </label>
                <textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Any allergies, special requests…"
                  className="w-full bg-[#FAF6F0] border border-[#EAE0D5] rounded-xl px-4 py-3 font-sans text-base text-[#2C1A0E] focus:outline-none focus:border-[#C4852A] placeholder:text-[#C8A882] transition-colors resize-none"
                />
              </div>

              {/* Recurring order */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    checked={recurring}
                    onChange={(e) => setRecurring(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${recurring ? "bg-[#4A6741] border-[#4A6741]" : "bg-[#FAF6F0] border-[#D4BFA8] group-hover:border-[#4A6741]"}`}>
                    {recurring && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </div>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-[#2C1A0E] leading-snug">Set up a weekly standing order</p>
                  <p className="font-sans text-xs text-[#8B6347] mt-0.5 leading-relaxed">Same order every week — we&apos;ll reach out to confirm the details.</p>
                </div>
              </label>
            </div>

            <button
              type="submit"
              disabled={!hasItems || !name || !email}
              className="font-sans text-base font-semibold bg-[#C4852A] text-white py-4 rounded-full hover:bg-[#A36920] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {hasItems ? `Place Order · £${total.toFixed(2)}` : "Add items to order"}
            </button>

            <p className="font-sans text-sm text-[#8B6347] text-center leading-6">
              Orders close Wednesday at 7pm.<br />
              Payment details &amp; collection/delivery time sent on order placement.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
