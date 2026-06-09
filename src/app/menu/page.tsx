import Image from "next/image";
import Link from "next/link";

// ─── THIS WEEK'S MENU ────────────────────────────────────────────────────────
// Update these items each week to match the current menu image.
// Collection day and date are set in MENU_META below.
export const MENU_META = {
  collectionDay: "Thursday",
  collectionDate: "11th June",
};

export const menuItems = [
  // LOAVES
  {
    id: "country-white-wholemeal",
    name: "Country White & Wholemeal",
    desc: "Our classic sourdough loaves — open crumb, crackling crust.",
    price: 5.00,
    priceLabel: "£5.00",
    category: "Loaves",
  },
  {
    id: "seeded-rye-tin",
    name: "Seeded, Rye & Soft White Tin Loaves",
    desc: "Seeded rye or soft white tin — hearty, flavourful, perfect for sandwiches.",
    price: 6.00,
    priceLabel: "£6.00",
    category: "Loaves",
  },
  // FOCACCIA
  {
    id: "focaccia-plain",
    name: "Focaccia — Plain",
    desc: "Simple, pillowy focaccia drizzled with olive oil and sea salt.",
    price: 5.00,
    priceLabel: "£5.00",
    category: "Focaccia",
  },
  {
    id: "focaccia-sundried",
    name: "Focaccia — Sundried Tomato & Basil",
    desc: "Bright, herby focaccia topped with sundried tomatoes and fresh basil.",
    price: 6.00,
    priceLabel: "£6.00",
    category: "Focaccia",
  },
  {
    id: "focaccia-garlic-onion",
    name: "Focaccia — Garlic & Caramelised Onion",
    desc: "Sweet caramelised onion and roasted garlic on pillowy sourdough focaccia.",
    price: 6.00,
    priceLabel: "£6.00",
    category: "Focaccia",
  },
  {
    id: "focaccia-rosemary",
    name: "Focaccia — Rosemary & Garlic",
    desc: "Fragrant rosemary and garlic baked into a golden, airy focaccia.",
    price: 6.00,
    priceLabel: "£6.00",
    category: "Focaccia",
  },
  {
    id: "focaccia-olive-feta",
    name: "Focaccia — Olive & Feta",
    desc: "Salty olives and creamy feta baked into a beautifully flavoured focaccia.",
    price: 6.00,
    priceLabel: "£6.00",
    category: "Focaccia",
  },
  // SWEET BAKES
  {
    id: "choc-chip-cookie",
    name: "Chocolate Chip Cookie",
    desc: "Big, chewy, golden-edged sourdough cookies loaded with chocolate.",
    price: 2.00,
    priceLabel: "£2.00",
    category: "Sweet Bakes",
  },
  {
    id: "banana-loaf",
    name: "Banana Loaf",
    desc: "Moist, deeply flavoured banana loaf — soft crumb, golden top.",
    price: 6.00,
    priceLabel: "£6.00",
    category: "Sweet Bakes",
  },
];

const categories = ["Loaves", "Focaccia", "Sweet Bakes"];

export default function MenuPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header with pink flower decorations */}
      <div className="mb-14 relative">
        {/* Pink flower accents */}
        <span className="absolute -top-4 right-8 text-4xl select-none pointer-events-none opacity-80">✿</span>
        <span className="absolute top-8 right-2 text-2xl select-none pointer-events-none opacity-60">✽</span>
        <span className="absolute -top-2 left-1/2 text-xl select-none pointer-events-none opacity-50" style={{ color: "#e8a0b4" }}>✿</span>

        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#7A5C42] mb-3">
          — This week&apos;s bakes
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="font-serif text-6xl italic font-light text-[#1C1009]">This Week&apos;s Menu</h1>

          {/* Date badge */}
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-3xl select-none" style={{ color: "#e8a0b4" }}>✿</span>
            <div className="border-l-2 pl-4" style={{ borderColor: "#e8a0b4" }}>
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#7A5C42]">Collection</p>
              <p className="font-serif text-2xl italic text-[#1C1009]">{MENU_META.collectionDay}</p>
              <p className="font-mono text-sm text-[#B87333]">{MENU_META.collectionDate}</p>
            </div>
            <span className="text-3xl select-none" style={{ color: "#e8a0b4" }}>✿</span>
          </div>
        </div>
      </div>

      {/* Menu photo + item list side by side */}
      <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">

        {/* Menu photo — sticky on scroll */}
        <div className="md:sticky md:top-6">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/menu.jpg"
              alt="This week's menu"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Item list */}
        <div>
          {categories.map((cat) => {
            const catItems = menuItems.filter((i) => i.category === cat);
            return (
              <div key={cat} className="mb-8">
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase mb-3 pb-2 border-b border-[#1C1009]/10" style={{ color: "#e8a0b4" }}>
                  {cat}
                </p>
                <div className="divide-y divide-[#1C1009]/10">
                  {catItems.map(({ id, name, desc, priceLabel }) => (
                    <div key={id} className="py-4 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-lg italic text-[#1C1009] leading-snug">{name}</h3>
                        <p className="font-sans text-xs text-[#7A5C42] mt-0.5 leading-relaxed">{desc}</p>
                      </div>
                      <span className="font-mono text-sm text-[#B87333] shrink-0 pt-1">{priceLabel}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Order CTA */}
      <div className="bg-[#1C1009] p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7A5C42] mb-2">Pre-orders open Monday · Collection {MENU_META.collectionDay} {MENU_META.collectionDate}</p>
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
