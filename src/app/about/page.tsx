import Image from "next/image";
import Link from "next/link";

const healthBenefits = [
  { n: "01", title: "Easier to digest", body: "72-hour fermentation breaks down gluten and phytic acid — gentler on your gut than any conventional bread." },
  { n: "02", title: "Lower glycemic index", body: "A slower, steadier rise in blood sugar. Better energy, better long-term health." },
  { n: "03", title: "Natural probiotics", body: "Live fermentation creates beneficial bacteria that support a healthy gut microbiome." },
  { n: "04", title: "Better nutrient absorption", body: "Fermentation unlocks iron, zinc and magnesium your body can actually absorb." },
  { n: "05", title: "No additives", body: "Just flour, water, salt, and a live culture. Nothing artificial, ever." },
  { n: "06", title: "Gluten sensitivity friendly", body: "Many people with mild gluten sensitivity find properly fermented sourdough easier to tolerate." },
];

const foodPhotos = [
  { src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&q=80", alt: "Sourdough loaf" },
  { src: "https://images.unsplash.com/photo-1585325701956-60dd9c8399b6?w=700&q=80", alt: "Focaccia bread" },
  { src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=700&q=80", alt: "Chocolate chip cookies" },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <div className="mb-14">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#7A5C42] mb-3">— The story behind the bread</p>
        <h1 className="font-serif text-6xl italic font-light text-[#1C1009] max-w-lg leading-tight">
          Made the old way,<br />for good reason.
        </h1>
      </div>

      {/* ── LUCIE PHOTO + LOVE LETTER side by side ─────────────────────────── */}
      <div className="grid md:grid-cols-2 gap-px bg-[#1C1009]/15 mb-14">

        {/* Lucie photo */}
        <div className="relative aspect-[3/4] bg-[#E8DDD0] overflow-hidden">
          <Image
            src="/images/lucie.jpg"
            alt="Lucie Brissenden — Owner & Baker, Mama's Sourdough"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Love letter — dark block, same height as photo */}
        <div className="bg-[#1C1009] p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
          <span className="absolute -top-4 -left-2 font-serif text-[10rem] leading-none text-[#3D2B1A] select-none pointer-events-none">&ldquo;</span>
          <div className="relative">
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#B87333] mb-8">— A love letter to sourdough</p>
            <blockquote className="font-serif text-2xl md:text-3xl italic font-light text-[#F5F0E8] leading-relaxed mb-10">
              There once was a time I couldn&apos;t bake sourdough. I found it very daunting and had almost given up&hellip;
              <br /><br />
              Then one day everything clicked and I haven&apos;t stopped since. It brings me an enormous joy, it&apos;s therapy, it&apos;s true love&nbsp;🫶🏻
            </blockquote>
            <div className="w-8 h-px bg-[#B87333] mb-6" />
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#C8A882]">Lucie Brissenden</p>
            <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#7A5C42] mt-1">Owner &amp; Baker, Mama&apos;s Sourdough</p>
          </div>
        </div>
      </div>

      {/* ── STORY + VALUES side by side ────────────────────────────────────── */}
      <div className="grid md:grid-cols-2 gap-px bg-[#1C1009]/10 mb-14">
        <div className="bg-[#F5F0E8] p-12 flex flex-col justify-center">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#7A5C42] mb-6">— Humble beginnings</p>
          <h2 className="font-serif text-3xl italic font-light text-[#1C1009] mb-6 leading-tight">
            Baker, mother,<br />sourdough obsessive.
          </h2>
          <div className="space-y-4 font-sans text-[#3D2B1A] leading-relaxed">
            <p>
              Mama&apos;s Sourdough started in a small kitchen in Ramsgate, with a lot of flour on the counter and a starter that refused to be ignored. What began as baking for family became something much bigger.
            </p>
            <p>
              Every loaf is still made by hand, still fermented slowly over 72 hours, and still baked the old way. Simple ingredients. No shortcuts. Baked with love.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-px bg-[#1C1009]/10">
          {[
            { n: "01", v: "Honesty", b: "What you see is what you get — no hidden ingredients, no shortcuts." },
            { n: "02", v: "Patience", b: "Great bread can't be rushed. Ours ferments for 72 hours, minimum." },
            { n: "03", v: "Community", b: "We bake for our neighbours and sell at the local market every Saturday." },
          ].map(({ n, v, b }) => (
            <div key={n} className="bg-[#F5F0E8] p-8 flex gap-6 items-start">
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#B87333] mt-1 shrink-0">{n}</span>
              <div>
                <h3 className="font-serif text-xl italic text-[#1C1009] mb-1">{v}</h3>
                <p className="font-sans text-sm text-[#7A5C42] leading-relaxed">{b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHY SHE BAKES + COMMUNITY — moved lower ────────────────────────── */}
      <div className="grid md:grid-cols-2 gap-px bg-[#1C1009]/15 mb-14">
        <div className="bg-[#E8DDD0] p-10 md:p-12 flex flex-col">
          <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#B87333] mb-6">— On why she bakes</p>
          <blockquote className="font-serif text-xl italic font-light text-[#1C1009] leading-relaxed flex-1">
            &ldquo;When you bake, you always bake for a reason. And when you give it to people, you make it the best you can — you make it with love.
            <br /><br />
            Whenever I make anything, I stir love into it. I knead love into it.&rdquo;
          </blockquote>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#7A5C42] mt-8 pt-5 border-t border-[#1C1009]/10">— Lucie</p>
        </div>

        <div className="bg-[#F5F0E8] p-10 md:p-12 flex flex-col border border-[#1C1009]/10">
          <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#B87333] mb-6">— On community &amp; simplicity</p>
          <blockquote className="font-serif text-xl italic font-light text-[#1C1009] leading-relaxed flex-1">
            &ldquo;I started baking a couple of years ago for family and friends, and feel so blessed and honoured that so many lives are touched by my baking.
            <br /><br />
            Using just four ingredients to create such special breads — it is just grounding and brings me so much joy!&rdquo;
          </blockquote>
          <div className="mt-8 pt-5 border-t border-[#1C1009]/10 flex gap-3">
            {["Flour", "Water", "Salt", "Time"].map((ing) => (
              <div key={ing} className="text-center flex-1">
                <div className="aspect-square border border-[#1C1009]/15 flex items-center justify-center mb-1">
                  <span className="font-serif text-sm italic text-[#1C1009]">{ing[0]}</span>
                </div>
                <p className="font-mono text-[7px] tracking-[0.1em] uppercase text-[#7A5C42]">{ing}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FOOD PHOTOS ────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-3 gap-3 mb-14">
        {foodPhotos.map(({ src, alt }) => (
          <div key={alt} className="relative aspect-square overflow-hidden">
            <Image src={src} alt={alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>

      {/* ── HEALTH BENEFITS ───────────────────────────────────────────────── */}
      <div className="mb-14">
        <div className="mb-8">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#7A5C42] mb-3">— Why it&apos;s good for you</p>
          <h2 className="font-serif text-4xl italic font-light text-[#1C1009]">The health benefits of sourdough</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1009]/10">
          {healthBenefits.map(({ n, title, body }) => (
            <div key={n} className="bg-[#F5F0E8] p-8">
              <p className="font-mono text-[10px] tracking-[0.25em] text-[#B87333] mb-3">{n}</p>
              <h3 className="font-serif text-lg italic text-[#1C1009] mb-2">{title}</h3>
              <p className="font-sans text-sm text-[#7A5C42] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <div className="bg-[#1C1009] p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7A5C42] mb-2">Saturday Farmers Market · Ramsgate</p>
          <p className="font-serif text-3xl italic text-[#F5F0E8]">Come find us. Say hello.</p>
        </div>
        <Link
          href="/contact"
          className="font-mono text-xs tracking-[0.15em] uppercase bg-[#F5F0E8] text-[#1C1009] px-8 py-3.5 hover:bg-[#C8A882] transition-colors shrink-0"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
