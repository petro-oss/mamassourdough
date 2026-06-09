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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!hasItems) return;
    // TODO: replace with GHL webhook / form submission
    console.log({ name, email, phone, notes, orderSummary, total });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#B87333] mb-6">— Order received</p>
        <h1 className="font-serif text-5xl italic font-light text-[#1C1009] mb-6">
          Thank you, {name.split(" ")[0]}! 🫶🏻
        </h1>
        <p className="font-sans text-[#7A5C42] leading-relaxed mb-4">
          Your order has been sent. We&apos;ll confirm by Tuesday and your bread will be ready for collection <strong>Friday morning</strong>.
        </p>
        <div className="bg-[#1C1009]/5 border border-[#1C1009]/10 p-6 text-left mt-8 font-mono text-xs text-[#3D2B1A] leading-7 whitespace-pre-line">
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
      {/* Header */}
      <div className="mb-12">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#7A5C42] mb-3">
          — Pre-orders open Monday · Collection Friday
        </p>
        <h1 className="font-serif text-6xl italic font-light text-[#1C1009]">Place Your Order</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">
          {/* Left: item selector */}
          <div>
            {categories.map((cat) => {
              const catItems = menuItems.filter((i) => i.category === cat);
              return (
                <div key={cat} className="mb-10">
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#B87333] mb-4 pb-2 border-b border-[#1C1009]/10">
                    {cat}
                  </p>
                  <div className="divide-y divide-[#1C1009]/10">
                    {catItems.map((item) => {
                      const qty = quantities[item.id] ?? 0;
                      return (
                        <div key={item.id} className="py-4 flex items-center justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <p className="font-serif text-lg italic text-[#1C1009] leading-snug">{item.name}</p>
                            <p className="font-sans text-xs text-[#7A5C42] mt-0.5">{item.desc}</p>
                          </div>
                          <span className="font-mono text-sm text-[#B87333] w-12 text-right shrink-0">
                            {item.priceLabel}
                          </span>
                          {/* Quantity stepper */}
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              type="button"
                              onClick={() => setQty(item.id, -1)}
                              disabled={qty === 0}
                              className="w-8 h-8 flex items-center justify-center border border-[#1C1009]/20 font-mono text-sm text-[#1C1009] hover:bg-[#1C1009] hover:text-[#F5F0E8] transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
                            >
                              −
                            </button>
                            <span className="font-mono text-sm w-5 text-center text-[#1C1009]">{qty}</span>
                            <button
                              type="button"
                              onClick={() => setQty(item.id, 1)}
                              className="w-8 h-8 flex items-center justify-center border border-[#1C1009]/20 font-mono text-sm text-[#1C1009] hover:bg-[#1C1009] hover:text-[#F5F0E8] transition-colors"
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
          <div className="lg:sticky lg:top-6 flex flex-col gap-6">
            {/* Running total */}
            <div className="border border-[#1C1009]/10 bg-white/50">
              <div className="px-6 py-4 border-b border-[#1C1009]/10">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7A5C42]">Your Order</p>
              </div>
              <div className="px-6 py-4 min-h-[80px]">
                {!hasItems ? (
                  <p className="font-sans text-sm text-[#C8A882] italic">No items yet — add some above.</p>
                ) : (
                  <div className="divide-y divide-[#1C1009]/10">
                    {orderLines.map((item) => (
                      <div key={item.id} className="py-2 flex justify-between gap-2">
                        <span className="font-sans text-sm text-[#3D2B1A] leading-snug">{item.name} <span className="text-[#7A5C42]">×{quantities[item.id]}</span></span>
                        <span className="font-mono text-sm text-[#1C1009] shrink-0">
                          £{(item.price * (quantities[item.id] ?? 0)).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="px-6 py-4 border-t border-[#1C1009]/10 flex justify-between items-center bg-[#1C1009]/5">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7A5C42]">Total</span>
                <span className="font-serif text-2xl italic text-[#1C1009]">£{total.toFixed(2)}</span>
              </div>
            </div>

            {/* Customer details */}
            <div className="border border-[#1C1009]/10 bg-white/50 p-6 flex flex-col gap-4">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7A5C42]">Your Details</p>
              <div>
                <label className="block font-mono text-[9px] tracking-widest uppercase text-[#7A5C42] mb-1.5" htmlFor="name">
                  Name *
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-transparent border border-[#1C1009]/20 px-3 py-2.5 font-sans text-sm text-[#1C1009] focus:outline-none focus:border-[#1C1009] placeholder:text-[#C8A882] transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[9px] tracking-widest uppercase text-[#7A5C42] mb-1.5" htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent border border-[#1C1009]/20 px-3 py-2.5 font-sans text-sm text-[#1C1009] focus:outline-none focus:border-[#1C1009] placeholder:text-[#C8A882] transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[9px] tracking-widest uppercase text-[#7A5C42] mb-1.5" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="07700 000000"
                  className="w-full bg-transparent border border-[#1C1009]/20 px-3 py-2.5 font-sans text-sm text-[#1C1009] focus:outline-none focus:border-[#1C1009] placeholder:text-[#C8A882] transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[9px] tracking-widest uppercase text-[#7A5C42] mb-1.5" htmlFor="notes">
                  Notes
                </label>
                <textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Any allergies, special requests…"
                  className="w-full bg-transparent border border-[#1C1009]/20 px-3 py-2.5 font-sans text-sm text-[#1C1009] focus:outline-none focus:border-[#1C1009] placeholder:text-[#C8A882] transition-colors resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={!hasItems || !name || !email}
              className="font-mono text-xs tracking-[0.2em] uppercase bg-[#1C1009] text-[#F5F0E8] py-4 hover:bg-[#3D2B1A] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {hasItems ? `Send Order · £${total.toFixed(2)}` : "Add items to order"}
            </button>

            <p className="font-mono text-[9px] tracking-wide text-[#7A5C42] text-center leading-5">
              We&apos;ll confirm your order by Tuesday.<br />
              Payment on collection. Friday morning.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
