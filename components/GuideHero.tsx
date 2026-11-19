import Image, { type StaticImageData } from "next/image";

export type HeroImage = {
  src: StaticImageData;
  alt: string;
  /** Small caption shown in the lower-left corner of the image. */
  label?: string;
};

/**
 * Full-width hero image for long-form guide pages.
 * Pass one image for a single hero, or two images (with `vs`) for a split comparison.
 */
export default function GuideHero({
  images,
  vs = false,
  chips,
}: {
  images: HeroImage[];
  vs?: boolean;
  /** Optional topic chips shown over a single-image hero. */
  chips?: string[];
}) {
  const split = images.length > 1;

  return (
    <section className="w-full" aria-label="Hero image">
      <div className="relative w-full h-[42vh] min-h-[260px] md:h-[60vh] max-h-[640px] overflow-hidden bg-[#141004]">
        <div className={`absolute inset-0 grid ${split ? "grid-cols-2" : "grid-cols-1"}`}>
          {images.map((img, i) => (
            <div key={img.alt} className="relative h-full overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority
                sizes={split ? "50vw" : "100vw"}
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/65 to-transparent pointer-events-none" />
              {img.label ? (
                <p
                  className={`absolute bottom-5 md:bottom-8 ${
                    split && i === 1 ? "right-4 md:right-8 text-right" : "left-4 md:left-8"
                  } text-white text-lg md:text-3xl font-bold leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]`}
                  style={{ fontFamily: "var(--font-work-sans)" }}
                >
                  {img.label}
                  <span
                    className={`block h-[2px] w-10 md:w-16 mt-2 bg-gradient-to-r from-[#DCA54A] to-transparent ${
                      split && i === 1 ? "ml-auto bg-gradient-to-l" : ""
                    }`}
                  />
                </p>
              ) : null}
            </div>
          ))}
        </div>

        {split && vs ? (
          <>
            <div className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-white/70 pointer-events-none" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#DCA54A] border-4 border-white shadow-xl text-white text-base md:text-2xl font-bold tracking-wider pointer-events-none">
              VS
            </div>
          </>
        ) : null}

        {!split && chips?.length ? (
          <div className="absolute bottom-5 left-4 md:bottom-8 md:left-8 flex flex-wrap gap-2 pr-4">
            {chips.map((chip) => (
              <span
                key={chip}
                className="bg-white/90 text-gray-900 text-[11px] md:text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#DCA54A]"
              >
                {chip}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
