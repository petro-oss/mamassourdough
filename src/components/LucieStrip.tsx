/**
 * LucieStrip — personal photo sequence from Lucie's kitchen / Instagram.
 *
 * HOW TO ADD PHOTOS:
 * 1. Save your photos/screenshots into: web/public/images/
 *    e.g. lucie-1.jpg, lucie-2.jpg, bread-1.jpg etc.
 * 2. Add them to the `photos` array below with a src and alt.
 *    Landscape photos work best in the wide slot (first item).
 *    Portrait / square photos work best in the tall slots.
 */

const photos: { src: string; alt: string; wide?: boolean }[] = [
  // ← Drop your images into public/images/ and list them here
  // Example entries (uncomment and rename when you have the files):
  // { src: "/images/lucie-1.jpg", alt: "Lucie in the kitchen", wide: true },
  // { src: "/images/lucie-2.jpg", alt: "Fresh loaves out of the oven" },
  // { src: "/images/lucie-3.jpg", alt: "Focaccia topping" },
  // { src: "/images/bread-1.jpg", alt: "Country white sourdough" },
  // { src: "/images/lucie-4.jpg", alt: "Lucie kneading dough" },
];

// Placeholder shown when photos aren't loaded yet
function Placeholder({ wide }: { wide?: boolean }) {
  return (
    <div
      className={`bg-[#E8DDD0] flex items-center justify-center ${
        wide ? "md:col-span-2 aspect-[16/9]" : "aspect-square"
      }`}
    >
      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#C8A882] text-center px-4">
        photo coming soon
      </span>
    </div>
  );
}

export default function LucieStrip() {
  // Use placeholders if no photos uploaded yet
  const slots = photos.length > 0 ? photos : [
    { src: "", alt: "", wide: true },
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
  ];

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

      {/* Photo grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {slots.map((photo, i) => {
          if (!photo.src) return <Placeholder key={i} wide={photo.wide} />;
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={photo.src}
              alt={photo.alt}
              className={`object-cover w-full ${
                photo.wide ? "md:col-span-2 aspect-[16/9]" : "aspect-square"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
