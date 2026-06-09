import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#7A5C42] mb-6">
            — Handmade in small batches
          </p>
          <h1 className="font-serif text-6xl md:text-7xl font-light italic leading-tight text-[#1C1009] mb-6">
            Baked with<br />love, every<br />single day.
          </h1>
          <p className="font-sans text-[#7A5C42] text-base leading-relaxed mb-10 max-w-sm">
            Real sourdough. 72-hour cold fermentation. Stone-baked in small batches — made fresh for your table.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/menu"
              className="font-mono text-xs tracking-[0.15em] uppercase bg-[#1C1009] text-[#F5F0E8] px-8 py-3.5 hover:bg-[#3D2B1A] transition-colors"
            >
              See Menu
            </Link>
            <Link
              href="/about"
              className="font-mono text-xs tracking-[0.15em] uppercase text-[#3D2B1A] border-b border-[#3D2B1A] pb-0.5 hover:text-[#B87333] hover:border-[#B87333] transition-colors"
            >
              Our Story →
            </Link>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative">
          <div className="aspect-[4/5] bg-[#E8DDD0] overflow-hidden">
            <Image
              src="/menu.jpg"
              alt="Freshly baked sourdough"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-5 -left-5 bg-[#1C1009] text-[#F5F0E8] p-5 w-28 h-28 flex flex-col items-center justify-center text-center">
            <span className="font-serif text-3xl italic leading-none">72</span>
            <span className="font-mono text-[8px] tracking-widest uppercase mt-1">hour<br />ferment</span>
          </div>
        </div>
      </section>

      {/* Divider strip */}
      <div className="bg-[#1C1009] py-4 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap font-mono text-[10px] tracking-[0.3em] uppercase text-[#7A5C42] animate-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>slow fermented &nbsp;·&nbsp; stone baked &nbsp;·&nbsp; handmade &nbsp;·&nbsp; no additives &nbsp;·&nbsp;</span>
          ))}
        </div>
      </div>

      {/* Feature grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-px bg-[#1C1009]/10">
          {[
            {
              label: "01",
              title: "Natural Ingredients",
              body: "Flour, water, salt, and a century-old starter. Nothing artificial, ever.",
            },
            {
              label: "02",
              title: "Long Fermentation",
              body: "72 hours in the cold. Complex flavour, better texture, easier to digest.",
            },
            {
              label: "03",
              title: "Stone-Baked",
              body: "Dutch-oven baked for the perfect open crumb and crackling crust.",
            },
          ].map(({ label, title, body }) => (
            <div key={label} className="bg-[#F5F0E8] p-10">
              <p className="font-mono text-[10px] tracking-[0.25em] text-[#B87333] mb-6">{label}</p>
              <h3 className="font-serif text-2xl italic text-[#1C1009] mb-3">{title}</h3>
              <p className="font-sans text-sm text-[#7A5C42] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C1009] py-24 px-6 text-center">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#7A5C42] mb-4">— Pre-orders open Monday</p>
        <h2 className="font-serif text-5xl italic font-light text-[#F5F0E8] mb-8">
          Ready for the best<br />bread of your week?
        </h2>
        <Link
          href="/contact"
          className="inline-block font-mono text-xs tracking-[0.2em] uppercase bg-[#F5F0E8] text-[#1C1009] px-10 py-4 hover:bg-[#C8A882] transition-colors"
        >
          Place an Order
        </Link>
      </section>
    </>
  );
}
