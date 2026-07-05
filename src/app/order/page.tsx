"use client";

import { useState } from "react";
import Image from "next/image";
import { menuItems } from "@/app/menu/page";

type Quantities = Record<string, number>;

// Set to true during testing to keep the order form open regardless of day/time.
// Flip to false before go-live on 7 July.
const TESTING_MODE = false;

// Returns whether orders are currently open (Mon 9am – Wed 7pm UK time)
function getOrderWindowStatus(): { open: boolean; message: string } {
  if (TESTING_MODE) return { open: true, message: "" };

  const now = new Date();
  const ukTime = new Date(now.toLocaleString("en-GB", { timeZone: "Europe/London" }));
  const day = ukTime.getDay(); // 0=Sun,1=Mon,2=Tue,3=Wed,4=Thu,5=Fri,6=Sat
  const timeInMinutes = ukTime.getHours() * 60 + ukTime.getMinutes();

  const EIGHT_AM = 8 * 60;
  const SEVEN_PM = 19 * 60;

  // Open: Monday 8am through Wednesday 7pm
  const isOpen =
    (day === 1 && timeInMinutes >= EIGHT_AM) ||
    day === 2 ||
    (day === 3 && timeInMinutes < SEVEN_PM);

  if (isOpen) return { open: true, message: "" };

  // Days until next Monday: lookup table [Sun,Mon,Tue,Wed,Thu,Fri,Sat]
  const daysUntilMonday = [1, 7, 6, 5, 4, 3, 2][day];
  const addDays = (day === 1 && timeInMinutes < EIGHT_AM) ? 0 : daysUntilMonday;
  const nextMonday = new Date(ukTime);
  nextMonday.setDate(ukTime.getDate() + addDays);
  nextMonday.setHours(8, 0, 0, 0);
  const mondayStr = nextMonday.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });

  return {
    open: false,
    message: `Orders for this week have closed. New orders open on ${mondayStr} at 8am. We can't wait to bake for you! 🍞`,
  };
}

export default function OrderPage() {
  const [quantities, setQuantities] = useState<Quantities>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [paid, setPaid] = useState(false);
  const [paidMethod, setPaidMethod] = useState("");
  const [cashOnCollection, setCashOnCollection] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);

  const orderWindow = getOrderWindowStatus();

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

  // Base order payload — shared between both webhook calls
  function buildPayload(paymentMethod?: string) {
    return {
      first_name: name.split(" ")[0],
      last_name: name.split(" ").slice(1).join(" ") || "",
      email,
      phone,
      order_summary: orderSummary,
      order_total: `£${total.toFixed(2)}`,
      order_notes: notes,
      recurring_order: recurring ? "Yes, weekly standing order" : "No",
      order_type: recurring ? "Yes" : "No",
      sms_consent: "Yes",
      order_items: orderLines.map((item) => ({
        id: item.id,
        name: item.name,
        qty: quantities[item.id],
        unit_price: `£${item.price.toFixed(2)}`,
        line_total: `£${(item.price * (quantities[item.id] ?? 0)).toFixed(2)}`,
      })),
      source: "Website Order Form",
      collection_day: "Friday",
      ...(paymentMethod ? { payment_method: paymentMethod } : {}),
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!hasItems || submitting) return;
    setSubmitting(true);

    // First webhook: creates contact + opportunity in GHL, notifies Lucie
    fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildPayload()),
    }).catch(() => {});

    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmitted(true);
  }

  function handlePaymentConfirm(method?: string) {
    const paymentMethod = method ?? (cashOnCollection ? "Cash on Collection" : "Bank Transfer");

    fetch("/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildPayload(paymentMethod)),
    }).catch(() => {});

    setPaidMethod(paymentMethod);
    setPaid(true);
  }

  if (submitting && !submitted) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="flex flex-col items-center gap-6">
          {/* Animated spinner */}
          <div className="w-16 h-16 rounded-full border-4 border-[#EAE0D5] border-t-[#C4852A] animate-spin" />
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#C4852A]">Placing your order</p>
          <h1 className="font-serif text-4xl italic font-light text-[#2C1A0E]">
            Just a moment…
          </h1>
          <p className="font-sans text-base text-[#8B6347] leading-relaxed max-w-sm">
            We&apos;re sending your order through. Please don&apos;t close this page or click back.
          </p>
        </div>
      </div>
    );
  }

  // ── PAYMENT PAGE ──────────────────────────────────────────────────────────
  if (submitted && !paid) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#C4852A] mb-3 text-center">Step 2 of 2</p>
        <h1 className="font-serif text-4xl italic font-light text-[#2C1A0E] mb-2 text-center">
          Complete your payment
        </h1>
        <p className="font-sans text-base text-[#8B6347] text-center mb-8">
          Your order is placed, {name.split(" ")[0]}! Please complete payment to confirm your bake.
        </p>

        {/* Order total reminder */}
        <div className="bg-[#FAF6F0] border border-[#EAE0D5] rounded-2xl px-6 py-4 mb-8 flex justify-between items-center">
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-[#8B6347]">Amount due</p>
            <p className="font-mono text-xs text-[#8B6347] mt-1 whitespace-pre-line leading-6">{orderSummary}</p>
          </div>
          <span className="font-serif text-4xl italic text-[#2C1A0E] shrink-0 ml-6">£{total.toFixed(2)}</span>
        </div>

        {/* SumUp card payment */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#8B6347] mb-1">Option 1 — Pay by card</p>
          <p className="font-sans text-sm text-[#8B6347] mb-6">Scan the QR code with your phone camera, or tap the button below.</p>

          <div className="flex flex-col items-center gap-6">
            <Image
              src="/images/sumup-qr.jpg"
              alt="SumUp payment QR code"
              width={200}
              height={200}
              className="rounded-xl border border-[#EAE0D5]"
            />
            <a
              href="https://pay.sumup.com/b2c/Q1LLGDJ7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full font-sans text-base font-semibold bg-[#00B4D8] text-white py-4 rounded-full hover:bg-[#0096B4] transition-colors text-center block"
            >
              Pay £{total.toFixed(2)} with SumUp →
            </a>
            <p className="font-sans text-xs text-[#8B6347] text-center mt-3 leading-5">
              SumUp will open in a new tab. Once payment is complete, come back to this page and click the button below.
            </p>
          </div>
        </div>

        {/* Bank transfer */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#8B6347] mb-1">Option 2 — Bank transfer</p>
          <p className="font-sans text-sm text-[#8B6347] mb-5">Transfer directly to Lucie&apos;s account using the details below.</p>
          <div className="font-mono text-sm text-[#2C1A0E] space-y-2 bg-[#FAF6F0] rounded-xl p-5">
            <div className="flex justify-between"><span className="text-[#8B6347]">Account name</span><span className="font-semibold">Lucie Brissenden</span></div>
            <div className="flex justify-between"><span className="text-[#8B6347]">Sort code</span><span className="font-semibold">04-00-04</span></div>
            <div className="flex justify-between"><span className="text-[#8B6347]">Account number</span><span className="font-semibold">43591445</span></div>
            <div className="flex justify-between"><span className="text-[#8B6347]">Reference</span><span className="font-semibold">{name.split(" ")[0]} sourdough</span></div>
            <div className="flex justify-between border-t border-[#EAE0D5] pt-2 mt-2"><span className="text-[#8B6347]">Amount</span><span className="font-semibold text-[#C4852A]">£{total.toFixed(2)}</span></div>
          </div>
        </div>

        {/* Cash on collection */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#8B6347] mb-4">Option 3 — Cash on collection</p>
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5 shrink-0">
              <input
                type="checkbox"
                checked={cashOnCollection}
                onChange={(e) => setCashOnCollection(e.target.checked)}
                className="sr-only"
              />
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${cashOnCollection ? "bg-[#4A6741] border-[#4A6741]" : "bg-[#FAF6F0] border-[#D4BFA8] group-hover:border-[#4A6741]"}`}>
                {cashOnCollection && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              </div>
            </div>
            <div>
              <p className="font-sans text-sm font-medium text-[#2C1A0E] leading-snug">I have a cash on collection agreement with Lucie</p>
              <p className="font-sans text-xs text-[#8B6347] mt-0.5 leading-relaxed">Tick this only if you have a prior arrangement to pay cash when you collect your order.</p>
            </div>
          </label>
        </div>

        <button
          onClick={() => handlePaymentConfirm(cashOnCollection ? "Cash on Collection" : undefined)}
          className="w-full font-sans text-base font-semibold bg-[#C4852A] text-white py-4 rounded-full hover:bg-[#A36920] transition-colors"
        >
          {cashOnCollection ? "Confirm cash on collection" : "I have completed my payment"}
        </button>

        <p className="font-sans text-xs text-[#8B6347] text-center mt-4 leading-5">
          Your order is only confirmed once payment is received.<br />
          If you have any issues, call or text Lucie on <a href="tel:07891899367" className="underline">07891 899367</a>.
        </p>
      </div>
    );
  }

  // ── THANK YOU PAGE ─────────────────────────────────────────────────────────
  if (paid) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="w-14 h-14 rounded-full bg-[#4A6741] flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#C4852A] mb-4">All done!</p>
        <h1 className="font-serif text-5xl italic font-light text-[#2C1A0E] mb-6">
          Thank you, {name.split(" ")[0]}! 🫶🏻
        </h1>
        <p className="font-sans text-lg text-[#8B6347] leading-relaxed mb-4">
          {paidMethod === "Cash on Collection"
            ? "Thank you for your order. Lucie will confirm your cash on collection arrangement and you will receive an SMS confirmation. Collection is this Friday between 11am–1pm at 46 Stirling Way, Ramsgate."
            : "Thank you for your order. Payment receipt will be confirmed and you will receive an SMS confirmation shortly. Collection is this Friday between 11am–1pm at 46 Stirling Way, Ramsgate."}
        </p>
        <p className="font-serif text-xl italic text-[#C4852A] mt-2">Love Lucie — Mama&apos;s Sourdough 🍞</p>
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

      {/* ── HOLIDAY NOTICE — remove after 7 July ── */}
      <div className="mb-10 bg-[#EAF0EA] border border-[#4A6741]/30 rounded-2xl px-8 py-6 flex gap-4 items-start">
        <span className="text-2xl mt-0.5">🌿</span>
        <div>
          <p className="font-sans font-semibold text-[#2C1A0E] mb-1">Orders opening Monday 6 July!</p>
          <p className="font-sans text-sm text-[#4A2E1A] leading-relaxed">
            Orders are opening on <strong>Monday 6 July at 8am</strong>. Our new website and ordering system is going live this week — thank you for your patience and support. Feel free to send us any comments or messages that might help us improve the user experience! Much love, Lucie 🫶🏻
          </p>
        </div>
      </div>

      {/* ── ORDER WINDOW NOTICE — only shows when TESTING_MODE is false ── */}
      {!orderWindow.open && (
        <div className="mb-10 bg-[#EAF0EA] border border-[#4A6741]/30 rounded-2xl px-8 py-6 flex gap-4 items-start">
          <span className="text-2xl mt-0.5">🌿</span>
          <div>
            <p className="font-sans font-semibold text-[#2C1A0E] mb-1">Orders are currently closed</p>
            <p className="font-sans text-sm text-[#4A2E1A] leading-relaxed">{orderWindow.message}</p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-12">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#C4852A] mb-3">
          Orders close Wednesday 7pm · Collection Friday
        </p>
        <h1 className="font-serif text-6xl italic font-light text-[#2C1A0E]">Place Your Order</h1>
      </div>

      {/* Allergen notice */}
      <div className="mb-8 bg-[#EAF0EA] border border-[#4A6741]/30 rounded-2xl px-6 py-5 flex gap-3 items-start">
        <span className="text-[#B87333] text-lg mt-0.5">⚠</span>
        <p className="font-sans text-xs text-[#7A5C42] leading-relaxed">
          <span className="font-semibold text-[#4A2E1A]">Allergen information:</span> All our bakes are made in a home kitchen that handles gluten, dairy, eggs, nuts and seeds. If you have a severe allergy, please contact us before ordering. Allergens are listed under each product below.
        </p>
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
                        <div key={item.id}>
                          {item.subheading && (
                            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#C4852A] pt-4 pb-1">{item.subheading}</p>
                          )}
                        <div className="py-5 flex items-center justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <p className="font-serif text-xl italic text-[#2C1A0E] leading-snug">{item.name}</p>
                            <p className="font-sans text-sm text-[#8B6347] mt-1 leading-relaxed">{item.desc}</p>
                            {item.allergens && <p className="font-mono text-[9px] tracking-[0.05em] text-[#B87333]/70 mt-1">{item.allergens}</p>}
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
                  <p className="font-sans text-base text-[#C8A882] italic">No items yet. Add some above.</p>
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

              {/* Recurring order — hidden until recurring system is live */}

              {/* SMS consent — required */}
              <div className="border-t border-[#EAE0D5] pt-4 mt-1">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5 shrink-0">
                    <input
                      type="checkbox"
                      checked={smsConsent}
                      onChange={(e) => setSmsConsent(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${smsConsent ? "bg-[#C4852A] border-[#C4852A]" : "bg-[#FAF6F0] border-[#D4BFA8] group-hover:border-[#C4852A]"}`}>
                      {smsConsent && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </div>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-[#2C1A0E] leading-snug">
                      I agree to receive order updates by SMS <span className="text-[#C4852A]">*</span>
                    </p>
                    <p className="font-sans text-xs text-[#8B6347] mt-0.5 leading-relaxed">
                      We&apos;ll send order confirmation, payment updates, and collection details by text. Reply STOP at any time to unsubscribe.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={!hasItems || !name || !email || !smsConsent || submitting || !orderWindow.open}
              className="font-sans text-base font-semibold bg-[#C4852A] text-white py-4 rounded-full hover:bg-[#A36920] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {submitting ? "Placing order…" : !orderWindow.open ? "Orders are currently closed" : hasItems ? `Place Order · £${total.toFixed(2)}` : "Add items to order"}
            </button>

            <p className="font-sans text-sm text-[#8B6347] text-center leading-6">
              Orders close Wednesday at 7pm.<br />
              Payment details &amp; collection time sent on order placement.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
