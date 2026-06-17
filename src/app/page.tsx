import Link from "next/link";
import Image from "next/image";

const bestSellers = [
  {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    alt: "Sourdough country loaf",
    name: "Country Sourdough",
    desc: "Stone-baked with a golden crackling crust, open crumb, and deep flavour that only wild fermentation can deliver.",
    price: "£5.00",
  },
  {
    src: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=600&q=80",
    alt: "Hands shaping sourdough",
    name: "Handmade Every Week",
    desc: "Every loaf shaped by hand, every batch made with intention. This is slow baking. This is bread with soul.",
    price: "From £5.00",
  },
  {
    src: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&q=80",
    alt: "Banana loaf",
    name: "Banana Loaf",
    desc: "Moist, deeply flavoured banana loaf with a soft crumb and golden top. A firm weekly favourite.",
    price: "£6.00",
  },
];

const features = [
  { icon: "🤝", title: "Built on Community", body: "Lucie bakes to bring people together — teaching families to bake, sharing recipes, paying it forward." },
  { icon: "🌾", title: "Real Ingredients", body: "Just flour, water, salt, and a living starter over 10 years old. No additives, no preservatives." },
  { icon: "🤲", title: "Handmade Always", body: "Every loaf shaped by hand — no machines, no shortcuts. The way bread has always been made." },
  { icon: "🫶🏻", title: "Baked with Love", body: "Lucie stirs love into every batch. You can taste the difference when bread is made with intention." },
];

const stats = [
  { n: "10+", label: "Year old starter" },
  { n: "4", label: "Ingredients" },
  { n: "100%", label: "Handmade" },
  { n: "∞", label: "Love" },
];

export default function Home() {
  return (
    <div className="bg-[#FAF6F0]">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative h-[92vh] min-h-[600px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=85"
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
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/70 mb-4">— delicious homemade bakes</p>
          <h1 className="font-sans text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.0] mb-3">
            mama&apos;s<br />sourdough
          </h1>
          <p className="font-serif text-2xl md:text-3xl italic font-light text-white/85 mb-6">Baked with warmth &amp; true love.</p>
          <p className="font-sans text-white/75 text-base leading-relaxed mb-10 max-w-md">
            Real sourdough, stone-baked in small batches by Lucie — made fresh for your table every week from Ramsgate, using a starter she has tended for over a decade.
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
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-3">— Featured Favourites</p>
          <h2 className="font-sans text-5xl font-bold tracking-tight text-[#2C1A0E]">This Week&apos;s Bakes</h2>
          <p className="font-sans text-[#8B6347] mt-3 max-w-md mx-auto">The bakes our customers come back for every single week.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {bestSellers.map(({ src, alt, name, desc, price }) => (
            <div key={name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={src} alt={alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
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
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/menu" className="font-sans text-sm text-[#8B6347] border-b border-[#8B6347] pb-0.5 hover:text-[#C4852A] hover:border-[#C4852A] transition-colors">
            View full menu →
          </Link>
        </div>
      </section>

      {/* ── ABOUT MAMA'S ─────────────────────────────────────────────────────── */}
      <section className="bg-[#F2EAE0] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Photos collage */}
            <div className="relative grid grid-cols-2 gap-3">
              <div className="relative rounded-2xl overflow-hidden col-span-1 mt-10" style={{aspectRatio: "3/4"}}>
                <Image src="https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=600&q=80" alt="Hands shaping dough" fill className="object-cover object-center" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=400&q=80" alt="Chocolate chip cookies" fill className="object-cover object-center" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80" alt="Sourdough loaf" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-4">— About Mama&apos;s</p>
              <h2 className="font-sans text-5xl font-bold tracking-tight text-[#2C1A0E] leading-tight mb-6">
                Baking happiness<br />every single week.
              </h2>
              <div className="space-y-4 font-sans text-[#4A2E1A] leading-relaxed mb-8">
                <p>
                  Every week, Lucie&apos;s kitchen in Ramsgate fills with the scent of freshly baked sourdough. What started as baking for family and friends has become a mission — to inspire families to eat real bread, learn to bake it themselves, and share that gift with others.
                </p>
                <p>
                  Paying it forward is at the heart of everything. Bread is one of life&apos;s most fundamental foods. Lucie believes everyone deserves access to the real thing — made with love, shared with care, one loaf at a time.
                </p>
              </div>
              <blockquote className="border-l-2 border-[#4A6741] pl-5 font-serif text-xl italic text-[#2C1A0E] mb-8">
                &ldquo;It brings me an enormous joy — it&apos;s therapy, it&apos;s true love.&rdquo;
                <footer className="font-sans text-sm not-italic text-[#8B6347] mt-2">— Lucie Brissenden, Owner &amp; Baker</footer>
              </blockquote>
              <Link href="/about" className="inline-block font-sans text-sm font-medium bg-[#2C1A0E] text-white px-8 py-3 rounded-full hover:bg-[#4A2E1A] transition-colors">
                Our Story →
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mt-16 pt-12 border-t border-[#D4BFA8]">
            {stats.map(({ n, label }) => (
              <div key={label} className="text-center">
                <p className="font-serif text-4xl md:text-5xl italic text-[#2C1A0E]">{n}</p>
                <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#8B6347] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FROM THE KITCHEN ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C4852A] mb-4">— From Lucie&apos;s kitchen</p>
            <h2 className="font-serif text-4xl italic font-light text-[#2C1A0E] leading-tight mb-8">
              &ldquo;Eternally grateful<br />for being able to<br />do what I love.&rdquo;
            </h2>
            <p className="font-sans text-[#8B6347] leading-relaxed mb-8">
              Orders close Wednesday at 7pm. Collection or delivery details are shared on Thursday. Every loaf baked fresh — never a day old.
            </p>
            <a
              href="https://www.instagram.com/mamas_sourdough_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-[#8B6347] border-b border-[#8B6347] pb-0.5 hover:text-[#C4852A] hover:border-[#C4852A] transition-colors"
            >
              Follow @mamas_sourdough_ →
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { src: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=500&q=80", alt: "Hands shaping dough" },
              { src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80", alt: "Sourdough loaf" },
              { src: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=500&q=80", alt: "Hands shaping dough" },
              { src: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&q=80", alt: "Banana loaf" },
            ].map(({ src, alt }) => (
              <div key={src} className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
                <Image src={src} alt={alt} fill className="object-cover object-center hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PEOPLE RETURN ────────────────────────────────────────────────── */}
      <section className="bg-[#F2EAE0] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-sans text-5xl font-bold tracking-tight text-[#2C1A0E]">Why people return every week</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {features.map(({ icon, title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-serif text-lg italic text-[#2C1A0E] mb-2">{title}</h3>
                <p className="font-sans text-sm text-[#8B6347] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=1400&q=80"
          alt="Fresh bread"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#2C1A0E]/75" />
        <div className="relative text-center max-w-2xl mx-auto px-6">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#D4A96A] mb-4">— Orders close Wednesday at 7pm</p>
          <h2 className="font-sans text-6xl font-bold tracking-tight text-white mb-6">
            Ready for the best<br />bread of your week?
          </h2>
          <p className="font-sans text-white/70 mb-10">
            Collection or delivery details shared on Thursday · Payment details sent on order placement
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
