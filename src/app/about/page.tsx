import Image from "next/image";
import Link from "next/link";

const healthBenefits = [
  { icon: "🌿", title: "Easier to digest", body: "72-hour fermentation breaks down gluten and phytic acid — gentler on your gut than any conventional bread." },
  { icon: "📉", title: "Lower glycemic index", body: "A slower, steadier rise in blood sugar. Better energy, better long-term health." },
  { icon: "🦠", title: "Natural probiotics", body: "Live fermentation creates beneficial bacteria that support a healthy gut microbiome." },
  { icon: "⚡", title: "Better nutrient absorption", body: "Fermentation unlocks iron, zinc and magnesium your body can actually absorb." },
  { icon: "✋", title: "No additives", body: "Just flour, water, salt, and a live culture. Nothing artificial, ever." },
  { icon: "🌾", title: "Gluten sensitivity friendly", body: "Many people with mild gluten sensitivity find properly fermented sourdough easier to tolerate." },
];

const lucieFrames = [
  { src: "/images/lucie-1.jpg", alt: "Lucie talking" },
  { src: "/images/lucie-2.jpg", alt: "Lucie animated" },
  { src: "/images/lucie-3.jpg", alt: "Lucie gesturing" },
  { src: "/images/lucie-4.jpg", alt: "Lucie pointing" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FAF6F0]">

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 text-center">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-3">— The story behind the bread</p>
        <h1 className="font-sans text-6xl md:text-7xl font-bold tracking-tight text-[#2C1A0E] max-w-2xl mx-auto leading-tight">
          Made the old way,<br />for good reason.
        </h1>
      </section>

      {/* ── LOVE LETTER + 4-FRAME GRID ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6 rounded-3xl overflow-hidden shadow-sm">

          {/* Love letter */}
          <div className="bg-[#2C1A0E] p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
            <span className="absolute -top-6 -left-2 font-serif text-[9rem] leading-none text-[#4A2E1A] select-none pointer-events-none">&ldquo;</span>
            <div className="relative">
              <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#C4852A] mb-8">— A love letter to sourdough</p>
              <blockquote className="font-serif text-2xl md:text-3xl italic font-light text-[#FAF6F0] leading-relaxed mb-10">
                There once was a time I couldn&apos;t bake sourdough. I found it very daunting and had almost given up&hellip;
                <br /><br />
                Then one day everything clicked and I haven&apos;t stopped since. It brings me an enormous joy, it&apos;s therapy, it&apos;s true love&nbsp;🫶🏻
              </blockquote>
              <div className="w-8 h-px bg-[#C4852A] mb-5" />
              <p className="font-sans font-medium text-[#FAF6F0]">Lucie Brissenden</p>
              <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#A07850] mt-1">Owner &amp; Baker, Mama&apos;s Sourdough</p>
            </div>
          </div>

          {/* 4-frame grid */}
          <div className="bg-[#2C1A0E] p-3">
            <div className="grid grid-cols-2 gap-2 h-full">
              {lucieFrames.map(({ src, alt }) => (
                <div key={src} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image src={src} alt={alt} fill className="object-cover object-center hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MEET LUCIE ─────────────────────────────────────────────────────── */}
      <section className="bg-[#F2EAE0] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-4">— Humble beginnings</p>
            <h2 className="font-sans text-4xl font-bold tracking-tight text-[#2C1A0E] mb-6 leading-tight">
              Baker, mother,<br />sourdough obsessive.
            </h2>
            <div className="space-y-4 font-sans text-[#4A2E1A] leading-relaxed mb-8">
              <p>
                Mama&apos;s Sourdough started in a small kitchen in Ramsgate, with a lot of flour on the counter and a starter that refused to be ignored. What began as baking for family became something much bigger.
              </p>
              <p>
                Every loaf is still made by hand, still fermented slowly over 72 hours, and still baked the old way. Simple ingredients. No shortcuts. Baked with love.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { n: "01", v: "Honesty", b: "What you see is what you get — no hidden ingredients, no shortcuts." },
              { n: "02", v: "Patience", b: "Great bread can't be rushed. Ours ferments for 72 hours, minimum." },
              { n: "03", v: "Community", b: "We bake for our neighbours and sell at the local market every Saturday." },
            ].map(({ n, v, b }) => (
              <div key={n} className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-mono text-[10px] tracking-[0.25em] text-[#C4852A] mb-2">{n}</p>
                <h3 className="font-serif text-lg italic text-[#2C1A0E] mb-2">{v}</h3>
                <p className="font-sans text-xs text-[#8B6347] leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SHE BAKES + COMMUNITY ──────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#F2EAE0] rounded-2xl p-10 flex flex-col">
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#C4852A] mb-6">— On why she bakes</p>
            <blockquote className="font-serif text-2xl italic font-light text-[#2C1A0E] leading-relaxed flex-1">
              &ldquo;When you bake, you always bake for a reason. And when you give it to people, you make it the best you can — you make it with love. Whenever I make anything, I stir love into it. I knead love into it.&rdquo;
            </blockquote>
            <p className="font-sans text-sm text-[#8B6347] mt-6 pt-6 border-t border-[#D4BFA8]">— Lucie</p>
          </div>
          <div className="bg-white rounded-2xl p-10 flex flex-col shadow-sm">
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#C4852A] mb-6">— On community &amp; simplicity</p>
            <blockquote className="font-serif text-2xl italic font-light text-[#2C1A0E] leading-relaxed flex-1">
              &ldquo;I started baking a couple of years ago for family and friends, and feel so blessed that so many lives are touched by my baking. Using just four ingredients — it is just grounding and brings me so much joy!&rdquo;
            </blockquote>
            <div className="mt-6 pt-6 border-t border-[#EAE0D5] flex gap-4">
              {["Flour", "Water", "Salt", "Time"].map((ing) => (
                <div key={ing} className="text-center flex-1">
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#F2EAE0] flex items-center justify-center mb-1">
                    <span className="font-serif text-sm italic text-[#2C1A0E]">{ing[0]}</span>
                  </div>
                  <p className="font-mono text-[7px] tracking-[0.1em] uppercase text-[#8B6347]">{ing}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOD PHOTOS ────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&q=80" alt="Sourdough loaf" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=700&q=80" alt="Chocolate chip cookies" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* ── HEALTH BENEFITS ───────────────────────────────────────────────── */}
      <section className="bg-[#F2EAE0] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-3">— Why it&apos;s good for you</p>
            <h2 className="font-sans text-5xl font-bold tracking-tight text-[#2C1A0E]">The health benefits of sourdough</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {healthBenefits.map(({ icon, title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-serif text-lg italic text-[#2C1A0E] mb-2">{title}</h3>
                <p className="font-sans text-sm text-[#8B6347] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-[#2C1A0E] rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#A07850] mb-2">Saturday Farmers Market · Ramsgate</p>
            <p className="font-serif text-4xl italic text-[#FAF6F0]">Come find us. Say hello.</p>
          </div>
          <Link
            href="/contact"
            className="font-sans text-sm font-medium bg-[#C4852A] text-white px-8 py-3.5 rounded-full hover:bg-[#A36920] transition-colors shrink-0"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
