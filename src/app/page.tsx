import Link from "next/link";
import Image from "next/image";
import LucieStrip from "@/components/LucieStrip";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    alt: "Sourdough loaf",
    label: "Country Loaf",
  },
  {
    // Rosemary focaccia
    src: "https://images.unsplash.com/photo-1585325701956-60dd9c8399b6?w=800&q=80",
    alt: "Focaccia bread",
    label: "Focaccia",
  },
  {
    src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
    alt: "Chocolate chip cookies",
    label: "Cookies",
  },
  {
    src: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&q=80",
    alt: "Fresh baked bread",
    label: "Fresh Bakes",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-14 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#7A5C42] mb-5">
            — Handmade in small batches · Ramsgate
          </p>
          <h1 className="font-serif text-6xl md:text-7xl font-light italic leading-tight text-[#1C1009] mb-6">
            Baked with<br />love, every<br />single day.
          </h1>
          <p className="font-sans text-[#7A5C42] text-base leading-relaxed mb-10 max-w-sm">
            Real sourdough. 72-hour cold fermentation. Stone-baked in small batches by Lucie, made fresh for your table.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/order"
              className="font-mono text-xs tracking-[0.15em] uppercase bg-black text-[#F5F0E8] px-8 py-3.5 hover:bg-[#333] transition-colors"
            >
              Order Now
            </Link>
            <Link
              href="/menu"
              className="font-mono text-xs tracking-[0.15em] uppercase text-[#3D2B1A] border-b border-[#3D2B1A] pb-0.5 hover:text-[#B87333] hover:border-[#B87333] transition-colors"
            >
              See Menu →
            </Link>
          </div>
        </div>

        {/* Lucie sequence — 2×2 contact-sheet grid */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-2 bg-[#1C1009] p-3">
            {[
              { src: "/images/lucie-1.jpg", alt: "Lucie talking", rotate: "-rotate-1" },
              { src: "/images/lucie-2.jpg", alt: "Lucie animated", rotate: "rotate-1" },
              { src: "/images/lucie-3.jpg", alt: "Lucie gesturing", rotate: "rotate-1" },
              { src: "/images/lucie-4.jpg", alt: "Lucie pointing", rotate: "-rotate-1" },
            ].map(({ src, alt, rotate }) => (
              <div key={src} className={`relative aspect-[9/11] overflow-hidden bg-[#3D2B1A] ${rotate} transition-transform hover:rotate-0 hover:scale-[1.03] duration-300`}>
                <Image src={src} alt={alt} fill className="object-cover object-center" />
              </div>
            ))}
          </div>
          {/* Caption strip */}
          <div className="bg-[#1C1009] px-3 pb-3 -mt-1">
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#7A5C42] text-center pt-1 pb-0.5">
              @mamas_sourdough_ · &ldquo;Eternally grateful for being able to do what I love&rdquo; 💙
            </p>
          </div>
          <div className="absolute -bottom-5 -left-5 bg-[#1C1009] text-[#F5F0E8] p-5 w-28 h-28 flex flex-col items-center justify-center text-center">
            <span className="font-serif text-3xl italic leading-none">72</span>
            <span className="font-mono text-[8px] tracking-widest uppercase mt-1">hour<br />ferment</span>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="bg-[#1C1009] py-3.5 overflow-hidden">
        <div className="flex gap-10 whitespace-nowrap font-mono text-[10px] tracking-[0.25em] uppercase text-[#7A5C42]">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i}>slow fermented &nbsp;·&nbsp; stone baked &nbsp;·&nbsp; handmade &nbsp;·&nbsp; no additives &nbsp;·&nbsp;</span>
          ))}
        </div>
      </div>

      {/* Photo gallery grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {gallery.map(({ src, alt, label }) => (
            <div key={label} className="relative aspect-square group overflow-hidden">
              <Image src={src} alt={alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#1C1009]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#F5F0E8]">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Two quote blocks */}
      <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-px bg-[#1C1009]/10">
        <div className="bg-[#F5F0E8] p-12">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#B87333] mb-5">— On baking with love</p>
          <blockquote className="font-serif text-2xl italic font-light text-[#1C1009] leading-relaxed">
            &ldquo;Whenever I make anything, I stir love into it. I knead love into it.&rdquo;
          </blockquote>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7A5C42] mt-5">— Lucie</p>
        </div>
        <div className="bg-[#E8DDD0] p-12">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#B87333] mb-5">— On joy</p>
          <blockquote className="font-serif text-2xl italic font-light text-[#1C1009] leading-relaxed">
            &ldquo;It brings me an enormous joy, it&apos;s therapy, it&apos;s true love.&rdquo;&nbsp;🫶🏻
          </blockquote>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7A5C42] mt-5">
            — Lucie &nbsp;·&nbsp;{" "}
            <Link href="/about" className="border-b border-[#7A5C42] hover:text-[#B87333] hover:border-[#B87333] transition-colors">
              Read our story →
            </Link>
          </p>
        </div>
      </section>

      {/* Lucie photo strip */}
      <LucieStrip />

      {/* CTA */}
      <section className="bg-[#1C1009] py-20 px-6 text-center">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#7A5C42] mb-4">— Pre-orders open Monday</p>
        <h2 className="font-serif text-5xl italic font-light text-[#F5F0E8] mb-8">
          Ready for the best<br />bread of your week?
        </h2>
        <Link
          href="/order"
          className="inline-block font-mono text-xs tracking-[0.2em] uppercase bg-[#F5F0E8] text-[#1C1009] px-10 py-4 hover:bg-[#C8A882] transition-colors"
        >
          Place an Order
        </Link>
      </section>
    </>
  );
}
