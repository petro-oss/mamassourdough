import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StatsRow } from "@/components/StatsRow";

const bestSellers = [
  {
    src: "/images/sourdough-scored.jpg",
    alt: "Sourdough country loaf",
    name: "Country Sourdough",
    desc: "Stone-baked with a golden crackling crust, open crumb, and deep flavour that only wild fermentation can deliver.",
    price: "£5.00",
    objectPosition: "center 40%",
    rotate: "-rotate-[1.5deg]",
  },
  {
    src: "/images/cookies.jpg",
    alt: "Chocolate chip cookies",
    name: "Choc Chip Cookies",
    desc: "Big, chewy, golden-edged sourdough cookies loaded with chocolate. Baked fresh every week.",
    price: "£2.00 each",
    objectPosition: "center center",
    rotate: "rotate-[1deg]",
  },
  {
    src: "/images/banana-loaf.jpg",
    alt: "Banana loaf",
    name: "Banana Loaf",
    desc: "Moist, deeply flavoured banana loaf with a soft crumb and golden top. A firm weekly favourite.",
    price: "£6.00",
    objectPosition: "center 30%",
    rotate: "-rotate-[0.8deg]",
  },
];

const features = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13" cy="11" r="4.5"/>
        <path d="M4 30c0-5 4-9 9-9s9 4 9 9"/>
        <circle cx="26" cy="10" r="3.5"/>
        <path d="M26 20c4 0 7 3 7 7"/>
      </svg>
    ),
    title: "Built on Community",
    body: "Lucie bakes to bring people together, teaching families to bake, sharing recipes, paying it forward.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="32" x2="18" y2="4"/>
        <path d="M18 25c-5-2.5-7-7-4.5-10 1.5 2.5 4 6 4.5 10z"/>
        <path d="M18 25c5-2.5 7-7 4.5-10-1.5 2.5-4 6-4.5 10z"/>
        <path d="M18 17c-5-2.5-7-7-4.5-10 1.5 2.5 4 6 4.5 10z"/>
        <path d="M18 17c5-2.5 7-7 4.5-10-1.5 2.5-4 6-4.5 10z"/>
      </svg>
    ),
    title: "Real Ingredients",
    body: "Just flour, water, salt, and a living starter over 10 years old. No additives, no preservatives.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 30V16a3 3 0 0 1 6 0v8"/>
        <path d="M18 24a3 3 0 0 1 6 0v2"/>
        <path d="M24 26a3 3 0 0 1 6 0v2c0 4-3 6-7 6h-3c-5 0-8-3-8-7v-4a3 3 0 0 1 6 0"/>
      </svg>
    ),
    title: "Handmade Always",
    body: "Every loaf shaped by hand. No machines, no shortcuts. The way bread has always been made.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 30s-13-8-13-18a8 8 0 0 1 13-6.2A8 8 0 0 1 31 12c0 10-13 18-13 18z"/>
      </svg>
    ),
    title: "Baked with Love",
    body: "Lucie stirs love into every batch. You can taste the difference when bread is made with intention.",
  },
];


export default function Home() {
  return (
    <div className="bg-[#FAF6F0]">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative h-[92vh] min-h-[600px] overflow-hidden">
        <Image
          src="/images/sourdough-marble.jpg"
          alt="Fresh sourdough loaves"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />

        {/* Badge */}
        <div className="absolute top-8 right-8 w-20 h-20 rounded-full border-2 border-white/50 flex flex-col items-center justify-center text-center bg-white/10 backdrop-blur-sm">
          <span className="font-mono text-[7px] tracking-widest uppercase text-white/80 leading-tight">Est.</span>
          <span className="font-sans text-lg font-bold text-white leading-none">2022</span>
          <span className="font-mono text-[7px] tracking-widest uppercase text-white/70 leading-tight mt-0.5">Ramsgate</span>
        </div>

        {/* Hero text */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 max-w-4xl">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/70 mb-4">delicious homemade bakes</p>
          <h1 className="font-sans text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.0] mb-3">
            mama&apos;s<br />sourdough
          </h1>
          <p className="font-serif text-2xl md:text-3xl italic font-light text-white/85 mb-6">Baked with warmth &amp; true love.</p>
          <p className="font-sans text-white/75 text-base leading-relaxed mb-10 max-w-md">
            Real sourdough, stone-baked in small batches by Lucie, made fresh for your table every week from Ramsgate using a starter she has tended for over a decade.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="/order"
              className="font-sans text-sm font-medium bg-[#C4852A] text-white px-8 py-3.5 rounded-full hover:bg-[#A36920] transition-colors"
            >
              Order This Week
            </Link>
            <Link
              href="/menu"
              className="font-sans text-sm font-medium bg-white/15 backdrop-blur-sm text-white border border-white/40 px-8 py-3.5 rounded-full hover:bg-white/25 transition-colors"
            >
              See the Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Wavy section break */}
      <div className="relative overflow-hidden" style={{height: "80px", marginTop: "-79px"}}>
        <svg viewBox="0 0 1440 80" className="absolute bottom-0 w-full" preserveAspectRatio="none" style={{height: "80px"}}>
          <path d="M0,80 C360,10 1080,70 1440,20 L1440,80 L0,80 Z" fill="#FAF6F0" />
        </svg>
      </div>

      {/* ── BEST SELLERS ─────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-8 pb-20">
        <div className="text-center mb-14">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-3">From the kitchen</p>
          <h2 className="font-sans text-5xl font-bold tracking-tight text-[#2C1A0E]">Some of Our Bakes</h2>
          <p className="font-sans text-[#8B6347] mt-3 max-w-md mx-auto">A taste of what Lucie makes. See the menu for everything available this week.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bestSellers.map(({ src, alt, name, desc, price, objectPosition, rotate }, i) => (
            <ScrollReveal key={name} delay={i * 100}>
            <div className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-full ${rotate} hover:rotate-0`}>
              <div className="relative aspect-square overflow-hidden">
                <Image src={src} alt={alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" style={{ objectPosition }} />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl italic text-[#2C1A0E] mb-2">{name}</h3>
                <p className="font-sans text-sm text-[#8B6347] leading-relaxed mb-4">{desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-sans font-semibold text-[#C4852A] text-lg">{price}</span>
                  <Link href="/order" className="font-sans text-xs text-[#8B6347] hover:text-[#C4852A] transition-colors">
                    Order now →
                  </Link>
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/menu" className="font-sans text-sm text-[#8B6347] border-b border-[#8B6347] pb-0.5 hover:text-[#C4852A] hover:border-[#C4852A] transition-colors">
            View full menu →
          </Link>
        </div>
      </section>

      {/* ── FIND US IN STORE ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-3">Now available in store</p>
          <h2 className="font-sans text-5xl font-bold tracking-tight text-[#2C1A0E]">Come find us locally</h2>
          <p className="font-serif text-xl italic font-light text-[#8B6347] mt-3">Fresh loaves delivered to local shops every week — find us near you.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Grain Grocer */}
          <div className="bg-white rounded-2xl p-8 border border-[#EAE0D5] border-t-4 flex flex-col" style={{ borderTopColor: "#C4852A" }}>
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#C4852A] mb-2">Margate</p>
            <h3 className="font-serif text-2xl italic text-[#2C1A0E] mb-1">Grain Grocer</h3>
            <a href="https://maps.google.com/?q=216+Northdown+Rd,+Cliftonville,+Margate+CT9+2QU" target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-[#C4852A] hover:underline mb-4">216 Northdown Rd, Cliftonville, Margate →</a>
            <span className="inline-block font-mono text-[10px] tracking-widest bg-[#F2EAE0] text-[#8B6347] px-3 py-1.5 rounded-full mb-4 w-fit">Thurs · Fri · Sat</span>
            <p className="font-sans text-sm text-[#8B6347] leading-relaxed mb-3">Wholemeal sourdough</p>
            <p className="font-sans text-xs font-semibold text-[#2C1A0E] mt-auto">Limited quantities — get there early! 🍞</p>
          </div>

          {/* Flowers & Felicities */}
          <div className="bg-white rounded-2xl p-8 border border-[#EAE0D5] border-t-4 flex flex-col" style={{ borderTopColor: "#4A6741" }}>
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#4A6741] mb-2">Broadstairs</p>
            <h3 className="font-serif text-2xl italic text-[#2C1A0E] mb-1">Flowers & Felicities</h3>
            <a href="https://maps.google.com/?q=5+The+Broadway,+Broadstairs+CT10+2AD" target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-[#C4852A] hover:underline mb-4">5 The Broadway, Broadstairs →</a>
            <span className="inline-block font-mono text-[10px] tracking-widest bg-[#EAF0EA] text-[#4A6741] px-3 py-1.5 rounded-full mb-4 w-fit">Thursdays*</span>
            <p className="font-sans text-sm text-[#8B6347] leading-relaxed mb-1">White & wholemeal sourdough</p>
            <p className="font-mono text-[9px] text-[#C4852A] mb-3">*subject to change</p>
            <p className="font-sans text-xs font-semibold text-[#2C1A0E] mt-auto">Limited quantities — get there early! 🍞</p>
          </div>

          {/* Union Cafe */}
          <div className="bg-white rounded-2xl p-8 border border-[#EAE0D5] border-t-4 flex flex-col" style={{ borderTopColor: "#2C1A0E" }}>
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#8B6347] mb-2">Ramsgate</p>
            <h3 className="font-serif text-2xl italic text-[#2C1A0E] mb-1">Union Cafe</h3>
            <a href="https://maps.google.com/?q=25-27+Queen+St,+Ramsgate+CT11+9DZ" target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-[#C4852A] hover:underline mb-4">25-27 Queen St, Ramsgate →</a>
            <span className="inline-block font-mono text-[10px] tracking-widest bg-[#F2EAE0] text-[#8B6347] px-3 py-1.5 rounded-full mb-4 w-fit">Thurs · Fri · Sat</span>
            <p className="font-sans text-sm text-[#8B6347] leading-relaxed mb-3">Wholemeal sourdough</p>
            <p className="font-sans text-xs font-semibold text-[#2C1A0E] mt-auto">Limited quantities — get there early! 🍞</p>
          </div>
        </div>

        <div className="border-t border-[#EAE0D5] pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-serif text-lg italic text-[#4A2E1A]">Want your regular order? Still baking fresh for collection every Friday.</p>
          <Link href="/order" className="font-sans text-sm font-semibold text-[#C4852A] border-b border-[#C4852A] pb-0.5 hover:text-[#A36920] hover:border-[#A36920] transition-colors shrink-0">
            Order online for collection →
          </Link>
        </div>
      </section>

      {/* ── GALLERY TEASER STRIP ─────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F2EAE0] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-8 flex items-end justify-between">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-2">From Lucie&apos;s kitchen</p>
            <h2 className="font-sans text-4xl font-bold tracking-tight text-[#2C1A0E]">Behind the bake</h2>
          </div>
          <Link href="/about" className="font-sans text-sm text-[#8B6347] border-b border-[#8B6347] pb-0.5 hover:text-[#C4852A] hover:border-[#C4852A] transition-colors shrink-0">
            See more →
          </Link>
        </div>
        <div className="flex gap-4 pl-6 md:pl-[calc((100vw-72rem)/2+1.5rem)] overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {[
            { src: "/images/gallery-loaves-prebake.jpg", caption: "Scored & ready for the oven" },
            { src: "/images/gallery-loaves-baked.jpg", caption: "Fresh from the oven" },
            { src: "/images/gallery-focaccia-prebake.jpg", caption: "Rosemary focaccia proving" },
            { src: "/images/gallery-focaccia-baked.jpg", caption: "Golden focaccia, just baked" },
            { src: "/images/gallery-shop-display.jpg", caption: "At the shop, ready to go" },
          ].map(({ src, caption }) => (
            <div key={src} className="relative shrink-0 w-64 h-80 rounded-2xl overflow-hidden snap-start group">
              <Image src={src} alt={caption} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-sm italic text-white leading-snug">{caption}</p>
            </div>
          ))}
          <div className="shrink-0 w-6" />
        </div>
      </section>

      {/* ── ABOUT MAMA'S ─────────────────────────────────────────────────────── */}
      <section className="bg-[#F2EAE0] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-4">About Mama&apos;s</p>
            <h2 className="font-sans text-5xl font-bold tracking-tight text-[#2C1A0E] leading-tight mb-6">
              Baking happiness<br />every single week.
            </h2>
            <div className="space-y-4 font-sans text-[#4A2E1A] leading-relaxed mb-8">
              <p>
                Every week, Lucie&apos;s kitchen in Ramsgate fills with the scent of freshly baked sourdough. What started as baking for family and friends has become a mission: to inspire families to eat real bread, learn to bake it themselves, and share that gift with others.
              </p>
              <p>
                Paying it forward is at the heart of everything. Bread is one of life&apos;s most fundamental foods. Lucie believes everyone deserves access to the real thing, made with love, shared with care, one loaf at a time.
              </p>
            </div>
            <blockquote className="border-l-2 border-[#4A6741] pl-5 text-left font-serif text-xl italic text-[#2C1A0E] mb-8 max-w-md mx-auto">
              &ldquo;It brings me an enormous joy. It&apos;s therapy, it&apos;s true love.&rdquo;
              <footer className="font-sans text-sm not-italic text-[#8B6347] mt-2">Lucie Brissenden, Owner &amp; Baker</footer>
            </blockquote>
            <Link href="/about" className="inline-block font-sans text-sm font-medium bg-[#2C1A0E] text-white px-8 py-3 rounded-full hover:bg-[#4A2E1A] transition-colors">
              Our Story →
            </Link>
          </div>

          <StatsRow />
        </div>
      </section>

      {/* ── FROM THE KITCHEN ─────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-4">From Lucie&apos;s kitchen</p>
        <h2 className="font-serif text-4xl italic font-light text-[#2C1A0E] leading-tight mb-8">
          &ldquo;Eternally grateful<br />for being able to<br />do what I love.&rdquo;
        </h2>
        <p className="font-sans text-[#8B6347] leading-relaxed mb-8">
          Orders close Wednesday at 7pm. Collection details are shared on Thursday. Every loaf baked fresh, never a day old.
        </p>
        <a
          href="https://www.instagram.com/mamas_sourdough_"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-sans text-sm text-[#8B6347] border-b border-[#8B6347] pb-0.5 hover:text-[#C4852A] hover:border-[#C4852A] transition-colors"
        >
          Follow @mamas_sourdough_ →
        </a>
      </section>

      {/* ── WHY PEOPLE RETURN ────────────────────────────────────────────────── */}
      <section className="bg-[#F2EAE0] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-sans text-5xl font-bold tracking-tight text-[#2C1A0E]">Why people return every week</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {features.map(({ icon, title, body }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 h-full">
                  <div className="w-16 h-16 rounded-full bg-[#C4852A] flex items-center justify-center mb-5 mx-auto">
                    {icon}
                  </div>
                  <h3 className="font-serif text-lg italic text-[#2C1A0E] mb-2">{title}</h3>
                  <p className="font-sans text-sm text-[#8B6347] leading-relaxed">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="/images/sourdough-linen.jpg"
          alt="Fresh sourdough"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#2C1A0E]/75" />
        <div className="relative text-center max-w-2xl mx-auto px-6">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#D4A96A] mb-4">Orders close Wednesday at 7pm</p>
          <h2 className="font-sans text-6xl font-bold tracking-tight text-white mb-6">
            Ready for the best<br />bread of your week?
          </h2>
          <p className="font-sans text-white/70 mb-10">
            Collection details shared on Thursday · Payment details sent on order placement
          </p>
          <Link
            href="/order"
            className="inline-block font-sans text-sm font-medium bg-[#C4852A] text-white px-10 py-4 rounded-full hover:bg-[#A36920] transition-colors"
          >
            Place an Order
          </Link>
        </div>
      </section>

    </div>
  );
}
