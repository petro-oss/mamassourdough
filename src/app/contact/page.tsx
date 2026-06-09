"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to GHL webhook
    setSent(true);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-14">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#7A5C42] mb-3">— We&apos;d love to hear from you</p>
        <h1 className="font-serif text-6xl italic font-light text-[#1C1009]">Get in Touch</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-16">

        {/* Left: contact info */}
        <div className="flex flex-col gap-10">

          {/* Phone */}
          <div>
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#B87333] mb-2">Phone</p>
            <a
              href="tel:07891899367"
              className="font-serif text-2xl italic text-[#1C1009] hover:text-[#B87333] transition-colors"
            >
              07891 899367
            </a>
          </div>

          {/* Collection address */}
          <div>
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#B87333] mb-2">Collection Address</p>
            <address className="not-italic font-serif text-xl italic text-[#1C1009] leading-relaxed">
              46 Stirling Way<br />
              CT12 6NE<br />
              Ramsgate
            </address>
            <a
              href="https://maps.google.com/?q=46+Stirling+Way,+Ramsgate,+CT12+6NE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 font-mono text-[9px] tracking-[0.2em] uppercase text-[#7A5C42] border-b border-[#7A5C42] pb-0.5 hover:text-black hover:border-black transition-colors"
            >
              Open in Maps →
            </a>
          </div>

          {/* Social / web */}
          <div>
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#B87333] mb-3">Follow & Find Us</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/mamas_sourdough_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="w-8 h-8 bg-[#1C1009] flex items-center justify-center shrink-0 group-hover:bg-[#B87333] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5F0E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </span>
                <span className="font-mono text-xs tracking-wide text-[#3D2B1A] group-hover:text-[#B87333] transition-colors">@mamas_sourdough_</span>
              </a>
              <a
                href="https://www.facebook.com/mamas_sourdough_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="w-8 h-8 bg-[#1C1009] flex items-center justify-center shrink-0 group-hover:bg-[#B87333] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#F5F0E8">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </span>
                <span className="font-mono text-xs tracking-wide text-[#3D2B1A] group-hover:text-[#B87333] transition-colors">mamas_sourdough_</span>
              </a>
              <a
                href="https://www.mamassourdough.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="w-8 h-8 bg-[#1C1009] flex items-center justify-center shrink-0 group-hover:bg-[#B87333] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5F0E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </span>
                <span className="font-mono text-xs tracking-wide text-[#3D2B1A] group-hover:text-[#B87333] transition-colors">www.mamassourdough.co.uk</span>
              </a>
            </div>
          </div>

          {/* Hours note */}
          <div className="bg-[#E8DDD0] p-6">
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#B87333] mb-3">Ordering</p>
            <p className="font-sans text-sm text-[#3D2B1A] leading-relaxed">
              Pre-orders open Monday each week. Tell us what you&apos;d like — we&apos;ll confirm by Tuesday. Collection {" "}
              <span className="font-semibold">Thursday or Friday morning</span> from Ramsgate.
            </p>
          </div>
        </div>

        {/* Right: form */}
        {sent ? (
          <div className="border border-[#1C1009]/10 p-12 flex flex-col items-center justify-center text-center">
            <p className="font-serif text-3xl italic text-[#1C1009] mb-3">Thank you! 🫶🏻</p>
            <p className="font-sans text-sm text-[#7A5C42]">We&apos;ll be in touch very soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#7A5C42]">Send a message</p>
            {[
              { id: "name", label: "Name", type: "text", placeholder: "Your full name", required: true },
              { id: "email", label: "Email", type: "email", placeholder: "your@email.com", required: true },
              { id: "phone", label: "Phone", type: "tel", placeholder: "07700 000000", required: false },
            ].map(({ id, label, type, placeholder, required }) => (
              <div key={id}>
                <label className="block font-mono text-[9px] tracking-widest uppercase text-[#7A5C42] mb-1.5" htmlFor={id}>
                  {label}{required && " *"}
                </label>
                <input
                  id={id}
                  name={id}
                  type={type}
                  required={required}
                  placeholder={placeholder}
                  className="w-full bg-transparent border border-[#1C1009]/20 px-4 py-3 font-sans text-sm text-[#1C1009] focus:outline-none focus:border-[#1C1009] placeholder:text-[#C8A882] transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="block font-mono text-[9px] tracking-widest uppercase text-[#7A5C42] mb-1.5" htmlFor="message">
                Message / Order *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell us what you'd like, any allergies, special requests…"
                className="w-full bg-transparent border border-[#1C1009]/20 px-4 py-3 font-sans text-sm text-[#1C1009] focus:outline-none focus:border-[#1C1009] placeholder:text-[#C8A882] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="font-mono text-xs tracking-[0.2em] uppercase bg-[#1C1009] text-[#F5F0E8] py-4 hover:bg-[#3D2B1A] transition-colors"
            >
              Send Message
            </button>
            <p className="font-mono text-[9px] tracking-wide text-[#7A5C42] leading-5">
              We usually reply within a few hours. Payment on collection.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
