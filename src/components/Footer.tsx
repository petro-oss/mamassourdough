import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1C1009] text-[#C8A882]">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-sans text-lg font-medium text-[#F5F0E8] mb-1">mama&apos;s sourdough</p>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#7A5C42]">delicious homemade bakes</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#7A5C42] mb-1">Links</p>
          {[
            { href: "/", label: "Home" },
            { href: "/menu", label: "Menu" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link key={href} href={href} className="font-mono text-xs tracking-wide hover:text-[#F5F0E8] transition-colors">
              {label}
            </Link>
          ))}
        </div>
        <div>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#7A5C42] mb-3">Hours</p>
          <p className="font-mono text-xs leading-6">
            Pre-orders open Monday<br />
            Collection Friday morning<br />
            Farmers market — Saturday
          </p>
        </div>
      </div>
      <div className="border-t border-[#3D2B1A] max-w-6xl mx-auto px-6 py-5">
        <p className="font-mono text-[10px] tracking-widest uppercase text-[#7A5C42]">
          © {new Date().getFullYear()} mama&apos;s sourdough — all rights reserved
        </p>
      </div>
    </footer>
  );
}
