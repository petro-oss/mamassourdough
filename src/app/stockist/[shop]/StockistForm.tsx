"use client";

import { useState } from "react";
import { StockistShop } from "./config";

type Quantities = Record<string, number>;

export default function StockistForm({ shopConfig }: { shopConfig: StockistShop }) {
  const [quantities, setQuantities] = useState<Quantities>({});
  const [notes, setNotes]           = useState("");
  const [submitted, setSubmitted]   = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError]           = useState("");

  const setQty = (name: string, val: number) =>
    setQuantities((prev) => ({ ...prev, [name]: Math.max(0, val) }));

  const orderTotal = shopConfig.products.reduce(
    (sum, p) => sum + (quantities[p.name] ?? 0) * p.price,
    0
  );

  const hasItems = shopConfig.products.some((p) => (quantities[p.name] ?? 0) > 0);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!hasItems) return;
    setSubmitting(true);
    setError("");

    const items = shopConfig.products
      .filter((p) => (quantities[p.name] ?? 0) > 0)
      .map((p) => ({ name: p.name, qty: quantities[p.name], price: p.price }));

    try {
      const res = await fetch("/api/stockist-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          shop:        shopConfig.name,
          address:     shopConfig.address,
          items,
          notes,
          order_total: `£${orderTotal.toFixed(2)}`,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong — please try again or contact Lucie directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FAF6F0] flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-[#EAF0EA] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4A6741" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-3">Order received</p>
          <h1 className="font-serif text-3xl italic text-[#2C1A0E] mb-4">Thanks, {shopConfig.name}!</h1>
          <p className="font-sans text-sm text-[#8B6347] leading-relaxed mb-2">
            Lucie has your order and will have the loaves ready for your next delivery.
          </p>
          <p className="font-sans text-xs text-[#8B6347]">Order total: <span className="font-semibold text-[#2C1A0E]">£{orderTotal.toFixed(2)}</span></p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <div className="bg-[#2C1A0E] px-6 py-10">
        <div className="max-w-xl mx-auto">
          <p className="font-sans text-2xl font-semibold tracking-tight text-[#FAF6F0] leading-none">mama&apos;s sourdough</p>
          <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#A07850] mt-1">delicious homemade bakes</p>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-2">Weekly order form</p>
          <h1 className="font-serif text-4xl italic text-[#2C1A0E] mb-1">{shopConfig.name}</h1>
          <p className="font-sans text-sm text-[#8B6347]">{shopConfig.address}</p>
          <div className="mt-3 inline-flex items-center gap-2 bg-[#F2EAE0] px-3 py-1.5 rounded-full">
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#8B6347]">Delivery days: {shopConfig.days}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-2xl border border-[#EAE0D5] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#EAE0D5] bg-[#F9F5F0]">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#8B6347]">This week&apos;s order</p>
            </div>
            <div className="divide-y divide-[#EAE0D5]">
              {shopConfig.products.map((product) => {
                const qty = quantities[product.name] ?? 0;
                return (
                  <div key={product.name} className="px-6 py-5 flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-sans text-sm font-medium text-[#2C1A0E]">{product.name}</p>
                      <p className="font-mono text-xs text-[#C4852A] mt-0.5">£{product.price.toFixed(2)} each</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button type="button"
                        onClick={() => setQty(product.name, qty - 1)}
                        className="w-9 h-9 rounded-full border border-[#EAE0D5] bg-white text-[#2C1A0E] font-sans text-lg hover:bg-[#F2EAE0] transition-colors flex items-center justify-center leading-none"
                      >−</button>
                      <span className="font-mono text-base w-8 text-center text-[#2C1A0E]">{qty}</span>
                      <button type="button"
                        onClick={() => setQty(product.name, qty + 1)}
                        className="w-9 h-9 rounded-full bg-[#2C1A0E] text-white font-sans text-lg hover:bg-[#4A2E1A] transition-colors flex items-center justify-center leading-none"
                      >+</button>
                    </div>
                    <p className="font-mono text-sm text-[#8B6347] w-16 text-right shrink-0">
                      {qty > 0 ? `£${(qty * product.price).toFixed(2)}` : "—"}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="px-6 py-4 bg-[#2C1A0E] flex items-center justify-between">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#A07850]">Order total</p>
              <p className="font-mono text-lg text-[#FAF6F0]">£{orderTotal.toFixed(2)}</p>
            </div>
          </div>

          <div>
            <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#8B6347] mb-2">
              Notes (optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="Any changes, special requests or delivery notes..."
              className="w-full font-sans text-sm text-[#2C1A0E] bg-white border border-[#EAE0D5] rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-[#C4852A] transition-colors placeholder:text-[#C4A882]"
            />
          </div>

          {error && (
            <p className="font-sans text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>
          )}

          <button
            type="submit"
            disabled={!hasItems || submitting}
            className="w-full font-mono text-xs tracking-[0.15em] uppercase bg-[#C4852A] text-white py-4 rounded-xl hover:bg-[#A36920] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {submitting ? "Sending order…" : "Submit weekly order →"}
          </button>

          <p className="font-sans text-xs text-center text-[#C4A882]">
            Payment via monthly invoice · Bank transfer
          </p>
        </form>
      </div>
    </div>
  );
}
