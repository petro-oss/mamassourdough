import Image from "next/image";

const photos = [
  { src: "/images/lucie-1.jpg", alt: "Lucie in the kitchen", wide: true },
  { src: "/images/lucie-4.jpg", alt: "Lucie pointing" },
  { src: "/images/lucie-3.jpg", alt: "Lucie gesturing" },
  { src: "/images/lucie-2.jpg", alt: "Lucie animated" },
  // Add bread/bake photos here as e.g. { src: "/images/bread-1.jpg", alt: "Fresh loaves" }
];

export default function LucieStrip() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8 gap-4">
        <div>
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#7A5C42] mb-2">— From the kitchen</p>
          <h2 className="font-serif text-3xl italic font-light text-[#1C1009]">
            &ldquo;Eternally grateful for being able to do what I love.&rdquo; 💙
          </h2>
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#7A5C42] mt-2">— Lucie</p>
        </div>
        <a
          href="https://www.instagram.com/mamas_sourdough_"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-mono text-[10px] tracking-[0.2em] uppercase text-[#7A5C42] border-b border-[#7A5C42] pb-0.5 hover:text-black hover:border-black transition-colors whitespace-nowrap"
        >
          @mamas_sourdough_ ↗
        </a>
      </div>

      {/* Photo grid — first item spans 2 cols */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {photos.map((photo, i) => (
          <div
            key={i}
            className={`relative overflow-hidden ${
              photo.wide ? "md:col-span-2 aspect-[16/9]" : "aspect-square"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
