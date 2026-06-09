"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#7A5C42] mb-3">— We&apos;d love to hear from you</p>
        <h1 className="font-serif text-6xl italic font-light text-[#1C1009]">Get in Touch</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-20">
        {/* Info */}
        <div className="flex flex-col gap-10">
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#B87333] mb-3">Ordering</p>
            <p className="font-sans text-[#3D2B1A] leading-relaxed">
              Pre-orders open Monday each week. Tell us what you&apos;d like and how many — we&apos;ll confirm by Tuesday. Collection is Friday morning.
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#B87333] mb-3">Farmers Market</p>
            <p className="font-sans text-[#3D2B1A] leading-relaxed">
              We sell a limited selection every Saturday morning. No pre-order needed — just come find us.
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#B87333] mb-3">Response Time</p>
            <p className="font-sans text-[#3D2B1A] leading-relaxed">
              We usually reply within a few hours. We&apos;re a small operation, so please be patient during busy baking days.
            </p>
          </div>
        </div>

        {/* Form */}
        {sent ? (
          <div className="border border-[#1C1009]/10 p-12 flex flex-col items-center justify-center text-center">
            <p className="font-serif text-3xl italic text-[#1C1009] mb-3">Thank you!</p>
            <p className="font-sans text-sm text-[#7A5C42]">We&apos;ll be in touch very soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#7A5C42] mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-transparent border border-[#1C1009]/20 px-4 py-3 font-sans text-sm text-[#1C1009] focus:outline-none focus:border-[#1C1009] transition-colors placeholder:text-[#C8A882]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#7A5C42] mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-transparent border border-[#1C1009]/20 px-4 py-3 font-sans text-sm text-[#1C1009] focus:outline-none focus:border-[#1C1009] transition-colors placeholder:text-[#C8A882]"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-[#7A5C42] mb-2" htmlFor="message">
                Message / Order
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full bg-transparent border border-[#1C1009]/20 px-4 py-3 font-sans text-sm text-[#1C1009] focus:outline-none focus:border-[#1C1009] transition-colors resize-none placeholder:text-[#C8A882]"
                placeholder="Tell us what you'd like..."
              />
            </div>
            <button
              type="submit"
              className="font-mono text-xs tracking-[0.2em] uppercase bg-[#1C1009] text-[#F5F0E8] py-4 hover:bg-[#3D2B1A] transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
