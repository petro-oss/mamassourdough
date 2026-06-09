import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2C1A0E] text-[#A07850]">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="md:col-span-2">
          <p className="font-serif text-2xl italic font-light text-[#FAF6F0] mb-1">mama&apos;s sourdough</p>
          <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#A07850] mb-5">Ramsgate · Handmade with love</p>
          <p className="font-sans text-sm leading-6 text-[#A07850]">
            46 Stirling Way, CT12 6NE, Ramsgate<br />
            <a href="tel:07891899367" className="hover:text-[#FAF6F0] transition-colors">07891 899367</a>
          </p>
          <p className="font-sans text-sm text-[#6B4A2A] mt-4 leading-relaxed">
            Pre-orders open Monday each week.<br />Collection Thursday from Ramsgate.
          </p>
        </div>

        {/* Pages */}
        <div className="flex flex-col gap-3">
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#6B4A2A] mb-1">Pages</p>
          {["/", "/menu", "/about", "/contact", "/order"].map((href) => (
            <Link key={href} href={href} className="font-sans text-sm hover:text-[#FAF6F0] transition-colors capitalize">
              {href === "/" ? "Home" : href.replace("/", "")}
            </Link>
          ))}
        </div>

        {/* Follow */}
        <div className="flex flex-col gap-3">
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#6B4A2A] mb-1">Follow</p>
          <a href="https://www.instagram.com/mamas_sourdough_" target="_blank" rel="noopener noreferrer" className="font-sans text-sm hover:text-[#FAF6F0] transition-colors">
            Instagram →
          </a>
          <a href="https://www.facebook.com/mamas_sourdough_" target="_blank" rel="noopener noreferrer" className="font-sans text-sm hover:text-[#FAF6F0] transition-colors">
            Facebook →
          </a>
          <a href="https://www.mamassourdough.co.uk" target="_blank" rel="noopener noreferrer" className="font-sans text-sm hover:text-[#FAF6F0] transition-colors">
            Website →
          </a>
        </div>
      </div>

      <div className="border-t border-[#4A2E1A] max-w-6xl mx-auto px-6 py-5">
        <p className="font-mono text-[10px] tracking-widest uppercase text-[#6B4A2A]">
          © {new Date().getFullYear()} mama&apos;s sourdough · all rights reserved
        </p>
      </div>
    </footer>
  );
}
