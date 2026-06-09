import Image from "next/image";
import Link from "next/link";

const items = [
  { name: "Classic Country Loaf", desc: "White sourdough with golden crust and open crumb.", price: "£8" },
  { name: "Seeded Rye", desc: "Dark rye with sunflower, pumpkin & linseed. Dense and earthy.", price: "£9" },
  { name: "Rosemary & Olive Oil", desc: "Focaccia-style sourdough with fresh rosemary and cold-pressed olive oil.", price: "£9" },
  { name: "Wholemeal Tin Loaf", desc: "100% wholemeal, soft crumb. Perfect for sandwiches.", price: "£8" },
  { name: "Cinnamon Raisin", desc: "Lightly sweetened with warm spice and plump raisins. Brilliant toasted.", price: "£10" },
  { name: "Sourdough Crumpets (6)", desc: "Pillowy crumpets with the tang of sourdough. Best fresh.", price: "£5" },
];

export default function MenuPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#7A5C42] mb-3">— What we bake</p>
        <h1 className="font-serif text-6xl italic font-light text-[#1C1009]">Our Menu</h1>
      </div>

      {/* Two column layout */}
      <div className="grid md:grid-cols-2 gap-16 mb-20">
        {/* Menu photo */}
        <div className="relative aspect-[3/4] bg-[#E8DDD0] overflow-hidden">
          <Image
            src="/menu.jpg"
            alt="Mama's Sourdough menu board"
            fill
            className="object-cover"
          />
        </div>

        {/* Item list */}
        <div className="flex flex-col justify-center divide-y divide-[#1C1009]/10">
          {items.map(({ name, desc, price }) => (
            <div key={name} className="py-6 flex items-start justify-between gap-6">
              <div>
                <h3 className="font-serif text-xl italic text-[#1C1009] mb-1">{name}</h3>
                <p className="font-sans text-sm text-[#7A5C42] leading-relaxed">{desc}</p>
              </div>
              <span className="font-mono text-sm text-[#B87333] shrink-0 mt-1">{price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1C1009]/10 pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7A5C42] mb-1">Pre-orders open Monday · Collection Friday</p>
          <p className="font-serif text-2xl italic text-[#1C1009]">Everything baked to order, in small batches.</p>
        </div>
        <div className="flex gap-4">
          <a
            href="/menu.pdf"
            download
            className="font-mono text-xs tracking-[0.15em] uppercase border border-[#1C1009] text-[#1C1009] px-6 py-3 hover:bg-[#1C1009] hover:text-[#F5F0E8] transition-colors"
          >
            Download PDF
          </a>
          <Link
            href="/contact"
            className="font-mono text-xs tracking-[0.15em] uppercase bg-[#1C1009] text-[#F5F0E8] px-6 py-3 hover:bg-[#3D2B1A] transition-colors"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
}
