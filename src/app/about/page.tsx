import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-20">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#7A5C42] mb-3">— The story behind the bread</p>
        <h1 className="font-serif text-6xl italic font-light text-[#1C1009] max-w-lg leading-tight">
          Made the old way, for good reason.
        </h1>
      </div>

      {/* Two column story */}
      <div className="grid md:grid-cols-2 gap-20 mb-20">
        <div className="space-y-6 font-sans text-[#3D2B1A] leading-relaxed text-base">
          <p>
            Mama&apos;s Sourdough started the way all the best things do — in a small kitchen, with a lot of flour on the counter and a starter that refused to be ignored.
          </p>
          <p>
            Our baker grew up watching her mother tend a sourdough culture that had been kept alive for generations. Every Friday the house filled with that warm, slightly tangy smell that means something good is coming.
          </p>
          <p>
            After years of baking for family and neighbours who kept asking &ldquo;can I buy one?&rdquo;, Mama&apos;s Sourdough was born. Every loaf is still made by hand, still fermented slowly over 72 hours, and still baked the old way.
          </p>
          <p>
            We believe bread should be simple: flour, water, salt, and time. No additives. No shortcuts. Just the kind of loaf you want to eat warm from the oven with too much butter.
          </p>
        </div>

        {/* Values */}
        <div className="flex flex-col gap-px bg-[#1C1009]/10">
          {[
            { n: "01", v: "Honesty", b: "What you see is what you get — no hidden ingredients, no shortcuts." },
            { n: "02", v: "Patience", b: "Great bread can't be rushed. Ours ferments for 72 hours, minimum." },
            { n: "03", v: "Community", b: "We bake for our neighbours and sell at the local market every Saturday." },
          ].map(({ n, v, b }) => (
            <div key={n} className="bg-[#F5F0E8] p-8">
              <p className="font-mono text-[10px] tracking-[0.25em] text-[#B87333] mb-3">{n}</p>
              <h3 className="font-serif text-xl italic text-[#1C1009] mb-2">{v}</h3>
              <p className="font-sans text-sm text-[#7A5C42] leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1C1009] p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#7A5C42] mb-2">Saturday Farmers Market</p>
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
