import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HealthBenefitsGrid } from "@/components/HealthBenefitsGrid";

const healthBenefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 23C7 23 7 9 21 5c4 4 3 14-7 17"/>
        <line x1="7" y1="23" x2="15" y2="14"/>
      </svg>
    ),
    title: "Easier to digest",
    body: "Wild fermentation breaks down gluten proteins and phytic acid, making sourdough far gentler on your digestive system than any commercial loaf.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3,20 8,13 13,17 18,9 24,13"/>
        <line x1="3" y1="25" x2="25" y2="25"/>
      </svg>
    ),
    title: "Lower glycemic index",
    body: "The natural acids produced during fermentation slow starch digestion, giving you steadier energy, no sugar spike, no afternoon crash.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="6"/>
        <circle cx="14" cy="5" r="2"/>
        <circle cx="22" cy="9" r="2"/>
        <circle cx="22" cy="19" r="2"/>
        <circle cx="14" cy="23" r="2"/>
        <circle cx="6" cy="19" r="2"/>
        <circle cx="6" cy="9" r="2"/>
      </svg>
    ),
    title: "Lactic acid bacteria",
    body: "Wild fermentation introduces beneficial lactic acid bacteria linked to a healthier gut microbiome and reduced inflammation throughout the body.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="14,3 22,9 22,19 14,25 6,19 6,9"/>
        <line x1="6" y1="12" x2="22" y2="12"/>
      </svg>
    ),
    title: "Unlocked minerals",
    body: "Fermentation neutralises phytic acid, an anti-nutrient in grains, releasing iron, zinc, magnesium and B vitamins your body can actually absorb.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="10"/>
        <polyline points="9,14 12,17 19,11"/>
      </svg>
    ),
    title: "Nothing artificial",
    body: "Flour, water, salt, and a living culture. That is the entire ingredient list. No preservatives, no additives, no shortcuts.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="10"/>
        <ellipse cx="14" cy="14" rx="5" ry="10"/>
        <line x1="4" y1="14" x2="24" y2="14"/>
      </svg>
    ),
    title: "Better for the planet",
    body: "No industrial processing, no plastic-wrapped additives, no waste. Real bread made slowly, with deep respect for ingredients and the earth.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="4"/>
        <path d="M2 26c0-4.4 3.5-8 8-8s8 3.6 8 8"/>
        <circle cx="21" cy="9" r="3"/>
        <path d="M21 18c3.5 0 6 2.5 6 6"/>
      </svg>
    ),
    title: "Food that connects people",
    body: "Sourdough is about community. Starters shared between neighbours, loaves baked for families, bread that brings people around a table together.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4C26 8 24 20 12 24L8 28"/>
        <path d="M12 24C8 22 4 16 6 10C8 5 16 3 20 4Z"/>
        <line x1="12" y1="24" x2="20" y2="10"/>
      </svg>
    ),
    title: "Gentler on sensitivity",
    body: "Many people who struggle with commercial bread find long-fermented sourdough easier to tolerate, as fermentation pre-digests much of the gluten.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FAF6F0]">

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 text-center">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-3">The story behind the bread</p>
        <h1 className="font-sans text-6xl md:text-7xl font-bold tracking-tight text-[#2C1A0E] max-w-2xl mx-auto leading-tight">
          Made the old way,<br />for good reason.
        </h1>
      </section>

      {/* ── LOVE LETTER + SOURDOUGH PHOTO ──────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6 rounded-3xl overflow-hidden shadow-sm">

          {/* Love letter */}
          <div className="bg-[#2C1A0E] p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
            <span className="absolute -top-6 -left-2 font-serif text-[9rem] leading-none text-[#4A2E1A] select-none pointer-events-none">&ldquo;</span>
            <div className="relative">
              <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#C4852A] mb-8">A love letter to sourdough</p>
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

          {/* Painting by Lucie's daughter Rosie */}
          <div className="relative min-h-[400px]">
            <Image
              src="/images/painting.jpg"
              alt="Painting of sourdough bread by Rosie, Lucie's daughter"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ── MEET LUCIE ─────────────────────────────────────────────────────── */}
      <section className="bg-[#F2EAE0] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-4">Humble beginnings</p>
            <h2 className="font-sans text-4xl font-bold tracking-tight text-[#2C1A0E] mb-6 leading-tight">
              Baker, mother,<br />sourdough obsessive.
            </h2>
            <div className="space-y-4 font-sans text-[#4A2E1A] leading-relaxed mb-8">
              <p>
                Mama&apos;s Sourdough started in a small kitchen in Ramsgate, with a lot of flour on the counter and a starter that has been alive and loved for over a decade. What began as baking for family became something much bigger.
              </p>
              <p>
                Lucie&apos;s mission is to make a real difference, inspiring families to choose real, nourishing food over processed alternatives, teaching people to bake sourdough themselves, and building a community rooted in love, nature, and the simple act of sharing bread.
              </p>
              <p>
                Paying it forward is at the heart of everything she does. Every loaf made with intention. Every recipe shared freely. Every customer treated like family.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { n: "01", v: "Community", b: "Bread brings people together. Building community, teaching families to bake, sharing knowledge and paying it forward, is Lucie's deepest why." },
              { n: "02", v: "Love & Giving", b: "Every loaf is baked with genuine love and given freely from the heart. It is not just bread. It is care, connection, and joy made tangible." },
              { n: "03", v: "Patience", b: "Great bread cannot be rushed. Lucie's starter has been alive for over 10 years, tended, fed, and listened to, not hurried." },
            ].map(({ n, v, b }, i) => (
              <ScrollReveal key={n} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border-t-2 border-[#4A6741] h-full">
                  <div className="w-9 h-9 rounded-full bg-[#C4852A] flex items-center justify-center mb-3">
                    <span className="font-mono text-[9px] text-white font-bold tracking-wider">{n}</span>
                  </div>
                  <h3 className="font-serif text-lg italic text-[#2C1A0E] mb-2">{v}</h3>
                  <p className="font-sans text-xs text-[#8B6347] leading-relaxed">{b}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SHE BAKES + COMMUNITY ──────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#F2EAE0] rounded-2xl p-10 flex flex-col">
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#C4852A] mb-6">On why she bakes</p>
            <blockquote className="font-serif text-2xl italic font-light text-[#2C1A0E] leading-relaxed flex-1">
              &ldquo;When you bake, you always bake for a reason. And when you give it to people, you make it the best you can. Whenever. Whenever I make anything, I stir love into it. I knead love into it.&rdquo;
            </blockquote>
            <p className="font-sans text-sm text-[#8B6347] mt-6 pt-6 border-t border-[#D4BFA8]">Lucie</p>
          </div>
          <div className="bg-white rounded-2xl p-10 flex flex-col shadow-sm">
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#4A6741] mb-6">On community &amp; simplicity</p>
            <blockquote className="font-serif text-2xl italic font-light text-[#2C1A0E] leading-relaxed flex-1">
              &ldquo;I started baking a couple of years ago for family and friends, and feel so blessed that so many lives are touched by my baking. Using just four ingredients, grounding and brings me so much joy!&rdquo;
            </blockquote>
            <div className="mt-6 pt-6 border-t border-[#EAE0D5] flex gap-4">
              {["Flour", "Water", "Salt", "Time"].map((ing) => (
                <div key={ing} className="text-center flex-1">
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#EAF0EA] flex items-center justify-center mb-1">
                    <span className="font-serif text-sm italic text-[#4A6741]">{ing[0]}</span>
                  </div>
                  <p className="font-mono text-[7px] tracking-[0.1em] uppercase text-[#4A6741]">{ing}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="mb-8">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-2">From Lucie&apos;s kitchen</p>
          <h2 className="font-sans text-4xl font-bold tracking-tight text-[#2C1A0E]">Behind the bake</h2>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Row 1: tall left, two stacked right */}
          <div className="relative rounded-2xl overflow-hidden row-span-2" style={{ aspectRatio: "3/4" }}>
            <Image src="/images/gallery-loaves-prebake.jpg" alt="Scored loaves ready for the oven" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-sm italic text-white">Scored &amp; ready for the oven</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-square">
            <Image src="/images/gallery-loaves-baked.jpg" alt="Fresh golden loaves from the oven" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 font-serif text-sm italic text-white">Fresh from the oven</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-square">
            <Image src="/images/gallery-focaccia-baked.jpg" alt="Golden baked focaccia" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 font-serif text-sm italic text-white">Golden focaccia, just baked</p>
          </div>

          {/* Row 2: two images filling the right columns */}
          <div className="relative rounded-2xl overflow-hidden aspect-square">
            <Image src="/images/gallery-focaccia-prebake.jpg" alt="Rosemary focaccia proving" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 font-serif text-sm italic text-white">Rosemary focaccia proving</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-square">
            <Image src="/images/gallery-shop-display.jpg" alt="Loaves at the shop" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 font-serif text-sm italic text-white">At the shop, ready to go</p>
          </div>

          {/* Row 3: existing photos filling out the grid */}
          <div className="relative rounded-2xl overflow-hidden aspect-square">
            <Image src="/images/sourdough-linen.jpg" alt="Sourdough loaf" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-square">
            <Image src="/images/seeded-loaf.jpg" alt="Seeded sourdough loaf" fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* ── HEALTH BENEFITS ───────────────────────────────────────────────── */}
      <section className="bg-[#F2EAE0] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#4A6741] mb-3">Why it&apos;s good for you</p>
            <h2 className="font-sans text-5xl font-bold tracking-tight text-[#2C1A0E]">The real benefits of sourdough</h2>
            <p className="font-sans text-[#8B6347] mt-4 max-w-xl mx-auto leading-relaxed">
              Unlike commercial bread, real sourdough is slowly fermented using wild yeast and bacteria. That process changes everything, from how it digests to how it nourishes your family.
            </p>
          </div>
          <HealthBenefitsGrid benefits={healthBenefits} />
        </div>
      </section>

      {/* ── STOCKISTS ─────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-10">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-2">Now available in store</p>
          <h2 className="font-sans text-4xl font-bold tracking-tight text-[#2C1A0E]">Find us locally</h2>
          <p className="font-sans text-[#8B6347] mt-3 max-w-lg leading-relaxed">Fresh loaves delivered to local shops every week — find us near you.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 border border-[#EAE0D5] border-t-4 flex flex-col" style={{ borderTopColor: "#C4852A" }}>
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#C4852A] mb-2">Margate</p>
            <h3 className="font-serif text-2xl italic text-[#2C1A0E] mb-1">Grain Grocer</h3>
            <a href="https://maps.google.com/?q=216+Northdown+Rd,+Cliftonville,+Margate+CT9+2QU" target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-[#C4852A] hover:underline mb-4">216 Northdown Rd, Cliftonville, Margate →</a>
            <span className="inline-block font-mono text-[10px] tracking-widest bg-[#F2EAE0] text-[#8B6347] px-3 py-1.5 rounded-full mb-4 w-fit">Thurs · Fri · Sat</span>
            <p className="font-sans text-sm text-[#8B6347] leading-relaxed mb-3">Wholemeal sourdough</p>
            <p className="font-sans text-xs font-semibold text-[#2C1A0E] mt-auto">Limited quantities — get there early! 🍞</p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[#EAE0D5] border-t-4 flex flex-col" style={{ borderTopColor: "#4A6741" }}>
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#4A6741] mb-2">Broadstairs</p>
            <h3 className="font-serif text-2xl italic text-[#2C1A0E] mb-1">Flowers & Felicities</h3>
            <a href="https://maps.google.com/?q=5+The+Broadway,+Broadstairs+CT10+2AD" target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-[#C4852A] hover:underline mb-4">5 The Broadway, Broadstairs →</a>
            <span className="inline-block font-mono text-[10px] tracking-widest bg-[#EAF0EA] text-[#4A6741] px-3 py-1.5 rounded-full mb-4 w-fit">Thursdays*</span>
            <p className="font-sans text-sm text-[#8B6347] leading-relaxed mb-1">White & wholemeal sourdough</p>
            <p className="font-mono text-[9px] text-[#C4852A] mb-3">*subject to change</p>
            <p className="font-sans text-xs font-semibold text-[#2C1A0E] mt-auto">Limited quantities — get there early! 🍞</p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[#EAE0D5] border-t-4 flex flex-col" style={{ borderTopColor: "#2C1A0E" }}>
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#8B6347] mb-2">Ramsgate</p>
            <h3 className="font-serif text-2xl italic text-[#2C1A0E] mb-1">Union Cafe</h3>
            <a href="https://maps.google.com/?q=25-27+Queen+St,+Ramsgate+CT11+9DZ" target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-[#C4852A] hover:underline mb-4">25-27 Queen St, Ramsgate →</a>
            <span className="inline-block font-mono text-[10px] tracking-widest bg-[#F2EAE0] text-[#8B6347] px-3 py-1.5 rounded-full mb-4 w-fit">Thurs · Fri · Sat</span>
            <p className="font-sans text-sm text-[#8B6347] leading-relaxed mb-3">Wholemeal sourdough</p>
            <p className="font-sans text-xs font-semibold text-[#2C1A0E] mt-auto">Limited quantities — get there early! 🍞</p>
          </div>
        </div>
      </section>
    </div>
  );
}
