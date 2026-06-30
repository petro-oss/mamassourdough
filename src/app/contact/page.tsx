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
    <div className="bg-[#FAF6F0]">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#C4852A] mb-3">We&apos;d love to hear from you</p>
          <h1 className="font-serif text-6xl italic font-light text-[#2C1A0E]">Get in Touch</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left: contact info */}
          <div className="flex flex-col gap-10">

            {/* Phone */}
            <div>
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C4852A] mb-2">Phone</p>
              <a href="tel:07891899367" className="font-serif text-3xl italic text-[#2C1A0E] hover:text-[#C4852A] transition-colors">
                07891 899367
              </a>
            </div>

            {/* Location */}
            <div>
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C4852A] mb-2">Location</p>
              <address className="not-italic font-serif text-2xl italic text-[#2C1A0E] leading-relaxed">
                Stirling Way<br />
                Ramsgate, Kent
              </address>
              <p className="font-sans text-sm text-[#8B6347] mt-2">Full address provided on order placement.</p>
            </div>

            {/* Social links with icon badges */}
            <div>
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C4852A] mb-5">Follow &amp; Find Us</p>
              <div className="flex flex-col gap-5">

                <a href="https://www.instagram.com/mamas_sourdough_" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 group">
                  <span className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E1306C] via-[#C13584] to-[#833AB4] flex items-center justify-center shrink-0 group-hover:opacity-85 transition-opacity shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </span>
                  <div>
                    <p className="font-sans text-base font-medium text-[#2C1A0E] group-hover:text-[#C4852A] transition-colors">Instagram</p>
                    <p className="font-mono text-xs text-[#8B6347]">@mamas_sourdough_</p>
                  </div>
                </a>

                <a href="https://www.facebook.com/profile.php?id=61580395552567" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 group">
                  <span className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center shrink-0 group-hover:opacity-85 transition-opacity shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </span>
                  <div>
                    <p className="font-sans text-base font-medium text-[#2C1A0E] group-hover:text-[#C4852A] transition-colors">Facebook</p>
                    <p className="font-mono text-xs text-[#8B6347]">mamassourdough</p>
                  </div>
                </a>

                <a href="https://www.mamassourdough.co.uk" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 group">
                  <span className="w-12 h-12 rounded-full bg-[#C4852A] flex items-center justify-center shrink-0 group-hover:opacity-85 transition-opacity shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </span>
                  <div>
                    <p className="font-sans text-base font-medium text-[#2C1A0E] group-hover:text-[#C4852A] transition-colors">Website</p>
                    <p className="font-mono text-xs text-[#8B6347]">www.mamassourdough.co.uk</p>
                  </div>
                </a>

              </div>
            </div>

            {/* Ordering info */}
            <div className="bg-[#F2EAE0] rounded-2xl p-6">
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#C4852A] mb-3">Ordering</p>
              <p className="font-sans text-base text-[#4A2E1A] leading-relaxed">
                Orders close <span className="font-semibold">Wednesday at 7pm</span> each week. Payment details and collection time will be confirmed on order placement.
              </p>
            </div>
          </div>

          {/* Right: form */}
          {sent ? (
            <div className="bg-white rounded-2xl shadow-sm p-12 flex flex-col items-center justify-center text-center">
              <p className="font-serif text-4xl italic text-[#2C1A0E] mb-3">Thank you! 🫶🏻</p>
              <p className="font-sans text-lg text-[#8B6347]">We&apos;ll be in touch very soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-5">
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#8B6347]">Send a message</p>
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your full name", required: true },
                { id: "email", label: "Email", type: "email", placeholder: "your@email.com", required: true },
                { id: "phone", label: "Phone", type: "tel", placeholder: "07700 000000", required: false },
              ].map(({ id, label, type, placeholder, required }) => (
                <div key={id}>
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-[#8B6347] mb-1.5" htmlFor={id}>
                    {label}{required && " *"}
                  </label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    required={required}
                    placeholder={placeholder}
                    className="w-full bg-[#FAF6F0] border border-[#EAE0D5] rounded-xl px-4 py-3 font-sans text-base text-[#2C1A0E] focus:outline-none focus:border-[#C4852A] placeholder:text-[#C8A882] transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-[#8B6347] mb-1.5" htmlFor="message">
                  Message / Order *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us what you'd like, any allergies, special requests…"
                  className="w-full bg-[#FAF6F0] border border-[#EAE0D5] rounded-xl px-4 py-3 font-sans text-base text-[#2C1A0E] focus:outline-none focus:border-[#C4852A] placeholder:text-[#C8A882] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="font-sans text-base font-semibold bg-[#C4852A] text-white py-4 rounded-full hover:bg-[#A36920] transition-colors mt-2"
              >
                Send Message
              </button>
              <p className="font-sans text-sm text-[#8B6347] leading-5 text-center">
                Payment details confirmed on order placement.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
