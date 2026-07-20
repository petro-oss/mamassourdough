"use client";

import { useState } from "react";
import { StockistShop } from "./config";

type Quantities = Record<string, number>;
type Step = "order" | "payment" | "confirmed";

const BANK = {
  name:    "Lucie Brissenden",
  sort:    "04-00-04",
  account: "43591445",
};

export default function StockistForm({ shopConfig }: { shopConfig: StockistShop }) {
  const [quantities, setQuantities] = useState<Quantities>({});
  const [notes, setNotes]           = useState("");
  const [step, setStep]             = useState<Step>("order");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError]           = useState("");
  const [confirmed, setConfirmed]   = useState(false);
  const [orderDate]                 = useState(() => new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" }));

  const setQty = (name: string, val: number) =>
    setQuantities((prev) => ({ ...prev, [name]: Math.max(0, val) }));

  const orderedItems = shopConfig.products.filter((p) => (quantities[p.name] ?? 0) > 0);

  const orderTotal = shopConfig.products.reduce(
    (sum, p) => sum + (quantities[p.name] ?? 0) * p.price,
    0
  );

  const hasItems = orderedItems.length > 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!hasItems) return;
    setSubmitting(true);
    setError("");

    const items = orderedItems.map((p) => ({ name: p.name, qty: quantities[p.name], price: p.price }));

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
      setStep("payment");
    } catch {
      setError("Something went wrong — please try again or contact Lucie directly.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleConfirmPayment() {
    if (!confirmed) return;
    setStep("confirmed");
  }

  // ── Header shared across steps ───────────────────────────────────────────
  const Header = () => (
    <div className="bg-[#2C1A0E] px-6 py-10 print:hidden">
      <div className="max-w-xl mx-auto">
        <p className="font-sans text-2xl font-semibold tracking-tight text-[#FAF6F0] leading-none">mama&apos;s sourdough</p>
        <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#A07850] mt-1">delicious homemade bakes</p>
      </div>
    </div>
  );

  // ── STEP 1: Order form ───────────────────────────────────────────────────
  if (step === "order") {
    return (
      <div className="min-h-screen bg-[#FAF6F0]">
        <Header />
        <div className="max-w-xl mx-auto px-6 py-12">
          <div className="mb-10">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-2">Weekly order form</p>
            <h1 className="font-serif text-4xl italic text-[#2C1A0E] mb-1">{shopConfig.name}</h1>
            {shopConfig.contact && (
              <p className="font-sans text-sm text-[#8B6347] mb-1">For the attention of {shopConfig.contact}</p>
            )}
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
          </form>
        </div>
      </div>
    );
  }

  // ── STEP 2: Payment ──────────────────────────────────────────────────────
  if (step === "payment") {
    return (
      <div className="min-h-screen bg-[#FAF6F0]">
        <Header />
        <div className="max-w-xl mx-auto px-6 py-12 space-y-6">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-2">Order received</p>
            <h1 className="font-serif text-4xl italic text-[#2C1A0E] mb-1">Now pay by bank transfer</h1>
            <p className="font-sans text-sm text-[#8B6347] leading-relaxed">
              Please transfer the total below to Lucie&apos;s account. Once payment reflects in the bank, Lucie will confirm your order.
            </p>
          </div>

          {/* Order summary */}
          <div className="bg-white rounded-2xl border border-[#EAE0D5] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#EAE0D5] bg-[#F9F5F0]">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#8B6347]">Order summary — {shopConfig.name}</p>
            </div>
            <div className="divide-y divide-[#EAE0D5]">
              {orderedItems.map((p) => (
                <div key={p.name} className="px-6 py-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-sans text-sm font-medium text-[#2C1A0E]">{p.name}</p>
                    <p className="font-mono text-xs text-[#8B6347] mt-0.5">× {quantities[p.name]}</p>
                  </div>
                  <p className="font-mono text-sm text-[#8B6347]">£{((quantities[p.name] ?? 0) * p.price).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 bg-[#2C1A0E] flex items-center justify-between">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#A07850]">Total to pay</p>
              <p className="font-mono text-lg text-[#FAF6F0]">£{orderTotal.toFixed(2)}</p>
            </div>
          </div>

          {/* Bank details */}
          <div className="bg-white rounded-2xl border border-[#EAE0D5] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#EAE0D5] bg-[#F9F5F0]">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#8B6347]">Bank transfer details</p>
            </div>
            <div className="px-6 py-5 space-y-3">
              {[
                ["Account name",   BANK.name],
                ["Sort code",      BANK.sort],
                ["Account number", BANK.account],
                ["Reference",      shopConfig.name],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between items-center">
                  <span className="font-sans text-sm text-[#8B6347]">{label}</span>
                  <span className="font-mono text-sm font-semibold text-[#2C1A0E]">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Confirmation checkbox */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="mt-0.5 w-5 h-5 rounded border-[#EAE0D5] accent-[#C4852A] shrink-0"
            />
            <span className="font-sans text-sm text-[#2C1A0E] leading-relaxed">
              I confirm I will pay <span className="font-semibold">£{orderTotal.toFixed(2)}</span> to Lucie Brissenden via bank transfer using the details above.
            </span>
          </label>

          <button
            onClick={handleConfirmPayment}
            disabled={!confirmed}
            className="w-full font-mono text-xs tracking-[0.15em] uppercase bg-[#2C1A0E] text-white py-4 rounded-xl hover:bg-[#4A2E1A] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Confirm payment →
          </button>
        </div>
      </div>
    );
  }

  // ── STEP 3: Confirmed + printable receipt ────────────────────────────────
  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <Header />

      <div className="max-w-xl mx-auto px-6 py-12 space-y-6">
        <div>
          <div className="w-16 h-16 bg-[#EAF0EA] rounded-full flex items-center justify-center mb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4A6741" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-2">All done</p>
          <h1 className="font-serif text-4xl italic text-[#2C1A0E] mb-3">Thanks, {shopConfig.contact || shopConfig.name}!</h1>
          <p className="font-sans text-sm text-[#8B6347] leading-relaxed">
            Lucie will confirm your order once the payment reflects in her account. Save or print the receipt below for your records.
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="print:hidden w-full font-mono text-xs tracking-[0.15em] uppercase bg-[#C4852A] text-white py-4 rounded-xl hover:bg-[#A36920] transition-colors"
        >
          Print / Save as PDF
        </button>

        {/* ── Printable receipt ── */}
        <div id="receipt" className="bg-white rounded-2xl border border-[#EAE0D5] overflow-hidden print:border-0 print:rounded-none print:shadow-none">
          {/* Receipt header — only visible when printing */}
          <div className="hidden print:block px-8 pt-10 pb-6 border-b border-[#EAE0D5]">
            <p className="font-sans text-2xl font-semibold tracking-tight text-[#2C1A0E]">mama&apos;s sourdough</p>
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#C4852A] mt-1">delicious homemade bakes</p>
          </div>

          <div className="px-6 py-5 border-b border-[#EAE0D5] bg-[#F9F5F0] print:bg-white">
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#8B6347]">Order receipt</p>
          </div>

          <div className="px-6 py-5 space-y-2 border-b border-[#EAE0D5]">
            {[
              ["Shop",    shopConfig.name],
              ["Address", shopConfig.address],
              ...(shopConfig.contact ? [["Contact", shopConfig.contact]] : []),
              ["Date",    orderDate],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between items-start gap-4">
                <span className="font-sans text-sm text-[#8B6347] shrink-0">{label}</span>
                <span className="font-sans text-sm font-medium text-[#2C1A0E] text-right">{value}</span>
              </div>
            ))}
          </div>

          <div className="divide-y divide-[#EAE0D5]">
            {orderedItems.map((p) => (
              <div key={p.name} className="px-6 py-4 flex items-center justify-between gap-4">
                <div>
                  <p className="font-sans text-sm font-medium text-[#2C1A0E]">{p.name}</p>
                  <p className="font-mono text-xs text-[#8B6347] mt-0.5">× {quantities[p.name]} @ £{p.price.toFixed(2)}</p>
                </div>
                <p className="font-mono text-sm text-[#8B6347]">£{((quantities[p.name] ?? 0) * p.price).toFixed(2)}</p>
              </div>
            ))}
          </div>

          {notes && (
            <div className="px-6 py-4 border-t border-[#EAE0D5] bg-[#F9F5F0] print:bg-white">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#8B6347] mb-1">Notes</p>
              <p className="font-sans text-sm text-[#2C1A0E]">{notes}</p>
            </div>
          )}

          <div className="px-6 py-4 bg-[#2C1A0E] flex items-center justify-between print:bg-white print:border-t-2 print:border-[#2C1A0E]">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#A07850] print:text-[#8B6347]">Total paid by bank transfer</p>
            <p className="font-mono text-lg text-[#FAF6F0] print:text-[#2C1A0E]">£{orderTotal.toFixed(2)}</p>
          </div>

          <div className="px-6 py-5 border-t border-[#EAE0D5] space-y-2">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#8B6347] mb-3">Payment sent to</p>
            {[
              ["Account name",   BANK.name],
              ["Sort code",      BANK.sort],
              ["Account number", BANK.account],
              ["Reference",      shopConfig.name],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between items-center">
                <span className="font-sans text-sm text-[#8B6347]">{label}</span>
                <span className="font-mono text-sm font-semibold text-[#2C1A0E]">{value}</span>
              </div>
            ))}
          </div>

          <div className="px-6 py-5 border-t border-[#EAE0D5] bg-[#F9F5F0] print:bg-white">
            <p className="font-sans text-xs text-[#8B6347] leading-relaxed">
              This receipt confirms your order was placed. Lucie will confirm once payment reflects in her account. Payment via monthly invoice available on request.
            </p>
          </div>
        </div>
      </div>

      {/* Print-only global styles */}
      <style>{`
        @media print {
          body { background: white; }
          .print\\:hidden { display: none !important; }
          .print\\:block { display: block !important; }
          .print\\:bg-white { background: white !important; }
          .print\\:border-0 { border: none !important; }
          .print\\:rounded-none { border-radius: 0 !important; }
          .print\\:shadow-none { box-shadow: none !important; }
          .print\\:border-t-2 { border-top-width: 2px !important; }
          .print\\:border-\\[\\#2C1A0E\\] { border-color: #2C1A0E !important; }
          .print\\:text-\\[\\#8B6347\\] { color: #8B6347 !important; }
          .print\\:text-\\[\\#2C1A0E\\] { color: #2C1A0E !important; }
        }
      `}</style>
    </div>
  );
}
