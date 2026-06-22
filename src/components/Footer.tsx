import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2C1A0E] text-[#A07850]">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand — matches printed logo */}
        <div className="md:col-span-2">
          <p className="font-sans text-2xl font-semibold tracking-tight text-[#FAF6F0] leading-none">mama&apos;s sourdough</p>
          <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#A07850] mt-1 mb-5">delicious homemade bakes</p>
          <p className="font-sans text-base leading-7 text-[#A07850]">
            Stirling Way, Ramsgate, Kent<br />
            <a href="tel:07891899367" className="hover:text-[#FAF6F0] transition-colors">07891 899367</a>
          </p>
          <p className="font-sans text-sm text-[#6B4A2A] mt-4 leading-relaxed">
            Orders close Wednesday at 7pm.<br />Collection/delivery details confirmed on order placement.
          </p>
        </div>

        {/* Pages */}
        <div className="flex flex-col gap-3">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#6B4A2A] mb-1">Pages</p>
          {["/", "/menu", "/about", "/contact", "/order"].map((href) => (
            <Link key={href} href={href} className="font-sans text-base hover:text-[#FAF6F0] transition-colors capitalize">
              {href === "/" ? "Home" : href.replace("/", "")}
            </Link>
          ))}
        </div>

        {/* Follow — with icon badges */}
        <div className="flex flex-col gap-4">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#6B4A2A] mb-1">Follow</p>

          <a href="https://www.instagram.com/mamas_sourdough_" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 group">
            <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E1306C] via-[#C13584] to-[#833AB4] flex items-center justify-center shrink-0 group-hover:opacity-90 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </span>
            <span className="font-sans text-base text-[#A07850] group-hover:text-[#FAF6F0] transition-colors">@mamas_sourdough_</span>
          </a>

          <a href="https://www.facebook.com/profile.php?id=61580395552567" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 group">
            <span className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center shrink-0 group-hover:opacity-90 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </span>
            <span className="font-sans text-base text-[#A07850] group-hover:text-[#FAF6F0] transition-colors">mamas_sourdough</span>
          </a>

          <a href="https://www.mamassourdough.co.uk" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 group">
            <span className="w-10 h-10 rounded-full bg-[#C4852A] flex items-center justify-center shrink-0 group-hover:opacity-90 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </span>
            <span className="font-sans text-base text-[#A07850] group-hover:text-[#FAF6F0] transition-colors">mamassourdough.co.uk</span>
          </a>
        </div>
      </div>

      <div className="border-t border-[#4A2E1A] max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="font-mono text-[11px] tracking-widest uppercase text-[#6B4A2A]">
          © {new Date().getFullYear()} mama&apos;s sourdough · all rights reserved
        </p>
        <p className="font-mono text-[11px] tracking-widest uppercase text-[#6B4A2A]">
          Designed by{" "}
          <a href="https://www.wallmedia.co.uk/" target="_blank" rel="noopener noreferrer"
            className="text-[#A07850] hover:text-[#FAF6F0] transition-colors">
            Wall Media
          </a>
        </p>
      </div>
    </footer>
  );
}
