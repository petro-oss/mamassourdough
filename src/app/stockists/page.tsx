import Link from "next/link";
import { ThanetMap } from "@/components/ThanetMap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find us locally — mama's sourdough",
  description: "Fresh mama's sourdough loaves available at four local stockists across Thanet — Westbrook, Westgate, Cliftonville, and Ramsgate.",
};

const stockists = [
  {
    area: "Westbrook",
    areaColour: "#8B6347",
    badgeBg: "#F2EAE0",
    badgeText: "#8B6347",
    topColour: "#8B6347",
    name: "Shahla's Cakes",
    address: "1a Wentworth Avenue, Margate CT9 5HW",
    mapsUrl: "https://maps.google.com/?q=1a+Wentworth+Avenue,+Margate+CT9+5HW",
    days: "Fridays",
    products: "White sourdough · Focaccia",
    note: null,
  },
  {
    area: "Westgate",
    areaColour: "#C4852A",
    badgeBg: "#F2EAE0",
    badgeText: "#8B6347",
    topColour: "#C4852A",
    name: "Crumb & Deli",
    address: "52 Station Road, Westgate CT8 8QY",
    mapsUrl: "https://maps.google.com/?q=52+Station+Road,+Westgate,+CT8+8QY",
    days: "Wed · Sat",
    products: "Mixed loaves · Focaccia · Rye",
    note: null,
  },
  {
    area: "Cliftonville",
    areaColour: "#4A6741",
    badgeBg: "#EAF0EA",
    badgeText: "#4A6741",
    topColour: "#4A6741",
    name: "Grain Grocer",
    address: "216 Northdown Road, Cliftonville, Margate",
    mapsUrl: "https://maps.google.com/?q=216+Northdown+Road,+Cliftonville,+Margate",
    days: "Thurs · Fri · Sat",
    products: "Wholemeal sourdough",
    note: null,
  },
  {
    area: "Ramsgate",
    areaColour: "#8B6347",
    badgeBg: "#F2EAE0",
    badgeText: "#8B6347",
    topColour: "#2C1A0E",
    name: "Union Cafe",
    address: "25-27 Queen St, Ramsgate CT11 9DZ",
    mapsUrl: "https://maps.google.com/?q=25-27+Queen+St,+Ramsgate+CT11+9DZ",
    days: "Tues · Thurs · Fri · Sat",
    products: "Wholemeal · Focaccia",
    note: null,
  },
];

export default function StockistsPage() {
  return (
    <div className="bg-[#FAF6F0]">

      {/* ── HEADER ───────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-3">Now available in store</p>
        <h1 className="font-sans text-6xl md:text-7xl font-bold tracking-tight text-[#2C1A0E] mb-4">Find us locally</h1>
        <p className="font-serif text-xl italic font-light text-[#8B6347] max-w-xl leading-relaxed">
          Fresh loaves delivered to four local shops across Thanet every week — tap any pin on the map for directions.
        </p>
      </section>

      {/* ── STOCKIST CARDS ───────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stockists.map((s) => (
            <div
              key={s.name}
              className="bg-white rounded-2xl p-6 border border-[#EAE0D5] border-t-4 flex flex-col"
              style={{ borderTopColor: s.topColour }}
            >
              <p className="font-mono text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: s.areaColour }}>{s.area}</p>
              <h2 className="font-serif text-xl italic text-[#2C1A0E] mb-1">{s.name}</h2>
              <a
                href={s.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-[#C4852A] hover:underline mb-3"
              >
                {s.address} →
              </a>
              <span
                className="inline-block font-mono text-[10px] tracking-widest px-3 py-1.5 rounded-full mb-3 w-fit"
                style={{ background: s.badgeBg, color: s.badgeText }}
              >
                {s.days}
              </span>
              <p className="font-sans text-xs text-[#8B6347] leading-relaxed mb-2">{s.products}</p>
              {s.note && <p className="font-mono text-[9px] text-[#C4852A] mb-2">{s.note}</p>}
              <p className="font-sans text-xs font-semibold text-[#2C1A0E] mt-auto">Limited — get there early! 🍞</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MAP ──────────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <ThanetMap />
      </section>

      {/* ── ORDER ONLINE STRIP ───────────────────────────────────────────────── */}
      <section className="bg-[#2C1A0E] py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-2">Can't make it to a shop?</p>
            <h2 className="font-sans text-3xl font-bold text-[#FAF6F0] leading-tight">Order direct for collection</h2>
            <p className="font-sans text-[#A07850] mt-2 text-sm leading-relaxed">
              Orders close Wednesday at 7pm · Collection Friday · Stirling Way, Ramsgate
            </p>
          </div>
          <Link
            href="/order"
            className="font-sans text-sm font-semibold bg-[#C4852A] text-white px-10 py-4 rounded-full hover:bg-[#A36920] transition-colors shrink-0 text-center"
          >
            Place an Order
          </Link>
        </div>
      </section>

    </div>
  );
}
