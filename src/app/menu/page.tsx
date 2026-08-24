import Link from "next/link";
import type { Metadata } from "next";
import { menuItems } from "./data";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "This week's sourdough loaves, focaccia and sweet bakes from mama's sourdough — order online for Friday collection in Ramsgate, Kent.",
};

const categories = ["Loaves", "Focaccia", "Sweet Bakes"];

export default function MenuPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-14 relative">
        {/* Pink flower accents */}
        <span className="absolute -top-4 right-8 text-4xl select-none pointer-events-none opacity-80">✿</span>
        <span className="absolute top-8 right-2 text-2xl select-none pointer-events-none opacity-60">✽</span>
        <span className="absolute -top-2 left-1/2 text-xl select-none pointer-events-none opacity-50" style={{ color: "#e8a0b4" }}>✿</span>

        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#7A5C42] mb-3">
          This week&apos;s bakes
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="font-serif text-6xl italic font-light text-[#1C1009]">This Week&apos;s Menu</h1>

          {/* Collection badge */}
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-3xl select-none" style={{ color: "#e8a0b4" }}>✿</span>
            <div className="border-l-2 pl-4" style={{ borderColor: "#e8a0b4" }}>
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#7A5C42]">Collection</p>
              <p className="font-serif text-xl italic text-[#1C1009]">Every Friday, 11am – 1pm, Stirling Way</p>
            </div>
            <span className="text-3xl select-none" style={{ color: "#e8a0b4" }}>✿</span>
          </div>
        </div>
      </div>

      {/* Item list — full width */}
      <div className="mb-16">
        <div>
          {categories.map((cat) => {
            const catItems = menuItems.filter((i) => i.category === cat && i.available);
            return (
              <div key={cat} className="mb-8">
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase mb-3 pb-2 border-b border-[#1C1009]/10" style={{ color: "#e8a0b4" }}>
                  {cat}
                </p>
                <div className="divide-y divide-[#1C1009]/10">
                  {catItems.map(({ id, name, desc, allergens, priceLabel, subheading }) => (
                    <div key={id}>
                    {subheading && (
                      <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#C4852A] pt-4 pb-1">{subheading}</p>
                    )}
                    <div className="py-4 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-lg italic text-[#1C1009] leading-snug">{name}</h3>
                        <p className="font-sans text-xs text-[#7A5C42] mt-0.5 leading-relaxed">{desc}</p>
                        {allergens && <p className="font-mono text-[9px] tracking-[0.05em] text-[#B87333]/70 mt-1">{allergens}</p>}
                      </div>
                      <span className="font-mono text-sm text-[#B87333] shrink-0 pt-1">{priceLabel}</span>
                    </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Allergen notice */}
      <div className="mb-10 bg-[#EAF0EA] border border-[#4A6741]/30 rounded-2xl px-6 py-5 flex gap-3 items-start">
        <span className="text-[#B87333] text-lg mt-0.5">⚠</span>
        <p className="font-sans text-xs text-[#7A5C42] leading-relaxed">
          <span className="font-semibold text-[#4A2E1A]">Allergen information:</span> All our bakes are made in a home kitchen that handles gluten, dairy, eggs, nuts and seeds. If you have a severe allergy, please contact us before ordering. Allergens listed per product above.
        </p>
      </div>

      {/* Order CTA */}
      <div className="bg-[#1C1009] p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7A5C42] mb-2">Orders close Wednesday at 7pm · Collection Friday</p>
          <p className="font-serif text-3xl italic text-[#F5F0E8]">Ready to order? Build your basket.</p>
        </div>
        <Link
          href="/order"
          className="font-mono text-xs tracking-[0.15em] uppercase bg-[#F5F0E8] text-[#1C1009] px-10 py-4 hover:bg-[#C8A882] transition-colors shrink-0"
        >
          Order Now →
        </Link>
      </div>
    </div>
  );
}
