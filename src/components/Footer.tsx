import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1C1009] text-[#C8A882]">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <p className="font-sans text-lg font-medium text-[#F5F0E8] mb-1">mama&apos;s sourdough</p>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#7A5C42] mb-4">delicious homemade bakes</p>
          <p className="font-mono text-xs leading-6 text-[#C8A882]">
            46 Stirling Way, CT12 6NE, Ramsgate<br />
            <a href="tel:07891899367" className="hover:text-[#F5F0E8] transition-colors">07891 899367</a>
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#7A5C42] mb-1">Pages</p>
          {["/", "/menu", "/about", "/contact", "/order"].map((href) => (
            <Link key={href} href={href} className="font-mono text-xs tracking-wide hover:text-[#F5F0E8] transition-colors capitalize">
              {href === "/" ? "Home" : href.replace("/", "")}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#7A5C42] mb-1">Follow</p>
          <a href="https://www.instagram.com/mamas_sourdough_" target="_blank" rel="noopener noreferrer" className="font-mono text-xs hover:text-[#F5F0E8] transition-colors">
            Instagram →
          </a>
          <a href="https://www.facebook.com/mamas_sourdough_" target="_blank" rel="noopener noreferrer" className="font-mono text-xs hover:text-[#F5F0E8] transition-colors">
            Facebook →
          </a>
          <a href="https://www.mamassourdough.co.uk" target="_blank" rel="noopener noreferrer" className="font-mono text-xs hover:text-[#F5F0E8] transition-colors">
            Website →
          </a>
          <p className="font-mono text-[9px] leading-5 text-[#7A5C42] mt-2">
            Pre-orders open Monday<br />
            Collection Thu/Fri morning
          </p>
        </div>
      </div>
      <div className="border-t border-[#3D2B1A] max-w-6xl mx-auto px-6 py-5">
        <p className="font-mono text-[10px] tracking-widest uppercase text-[#7A5C42]">
          © {new Date().getFullYear()} mama&apos;s sourdough · all rights reserved
        </p>
      </div>
    </footer>
  );
}
