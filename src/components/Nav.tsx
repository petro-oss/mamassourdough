"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF6F0]/95 backdrop-blur-sm border-b border-[#EAE0D5]">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative">

        {/* Left links — desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="font-sans text-base font-medium text-[#8B6347] hover:text-[#2C1A0E] transition-colors">
              {label}
            </Link>
          ))}
        </div>

        {/* Logo — centred absolutely */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-center">
          <p className="font-serif text-3xl italic font-light text-[#2C1A0E] leading-none">mama&apos;s sourdough</p>
          <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#A07850] mt-1">Ramsgate · handmade with love</p>
        </Link>

        {/* Right — Order Now pill */}
        <div className="hidden md:flex">
          <Link
            href="/order"
            className="font-sans text-base font-semibold bg-[#C4852A] text-white px-7 py-2.5 rounded-full hover:bg-[#A36920] transition-colors"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-6 h-0.5 bg-[#2C1A0E]" />
          <span className="block w-6 h-0.5 bg-[#2C1A0E]" />
          <span className="block w-4 h-0.5 bg-[#2C1A0E]" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-[#EAE0D5] px-6 py-6 flex flex-col gap-5 bg-[#FAF6F0]">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-sans text-lg font-medium text-[#8B6347] hover:text-[#2C1A0E] transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/order"
            onClick={() => setOpen(false)}
            className="font-sans text-base font-semibold bg-[#C4852A] text-white px-6 py-3 rounded-full text-center hover:bg-[#A36920] transition-colors"
          >
            Order Now
          </Link>
        </nav>
      )}
    </header>
  );
}
