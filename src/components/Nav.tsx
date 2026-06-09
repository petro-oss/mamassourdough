"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#F5F0E8] border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo — black & white */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-sans text-xl font-medium tracking-tight text-black group-hover:opacity-60 transition-opacity">
            mama&apos;s sourdough
          </span>
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#888] mt-0.5">
            delicious homemade bakes
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-mono text-xs tracking-[0.15em] uppercase transition-colors hover:text-black ${
                pathname === href ? "text-black" : "text-[#888]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/order"
            className="font-mono text-xs tracking-[0.15em] uppercase bg-black text-[#F5F0E8] px-5 py-2.5 hover:bg-[#333] transition-colors"
          >
            Order Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-5 h-px bg-black" />
          <span className="block w-5 h-px bg-black" />
          <span className="block w-3 h-px bg-black" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-black/10 px-6 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-mono text-xs tracking-[0.15em] uppercase text-[#888] hover:text-black transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/order"
            onClick={() => setOpen(false)}
            className="font-mono text-xs tracking-[0.15em] uppercase bg-black text-[#F5F0E8] px-5 py-3 text-center hover:bg-[#333] transition-colors"
          >
            Order Now
          </Link>
        </nav>
      )}
    </header>
  );
}
