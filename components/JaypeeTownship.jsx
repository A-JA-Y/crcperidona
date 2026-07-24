"use client";

import Image from "next/image";

import golfCourse from "@/assets-crc/golfCourse.webp";
import neighborhood from "@/assets-crc/neighborhood.webp";

const cards = [
  {
    title: "130-Acre 18-Hole Greg Norman Design Championship Golf Course",
    image: golfCourse,
  },
  {
    title: "60-Acre Nature Park",
    image: neighborhood,
  },
  {
    title: "10-Acre Golf Practice Range",
    image: golfCourse,
  },
  {
    title: "25-Year-Old Green Cover with Enhanced AQI",
    image: neighborhood,
  },
  {
    title: "Only ~3,600 Units — Low-Density Living in Delhi NCR",
    image: neighborhood,
  },
];

export default function JaypeeTownship() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <h6 className="text-center uppercase mb-3 text-[#c8922a] tracking-widest text-sm" data-reveal>
          The Township
        </h6>

        {/* Heading */}
        <h2 className="text-center font-semibold text-gray-900 mb-4 text-[clamp(2rem,4vw,2.6rem)] leading-tight" data-reveal>
          Jaypee Greens, Greater Noida
        </h2>
        <span className="gold-line block h-[2px] w-16 mx-auto mb-4 bg-gradient-to-r from-transparent via-[#DCA54A] to-transparent" data-reveal="fade" />

        {/* Description */}
        <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto text-sm leading-relaxed" data-reveal style={{ "--reveal-delay": 1 }}>
          CRC The Peridona rises inside the 452-acre Jaypee Greens golf
          township — a mature, low-density enclave wrapped in a 25-year-old
          green cover, with an 18-hole championship golf course and a 60-acre
          nature park at its heart.
        </p>

        {/* Cards — swipeable row on mobile, grid on larger screens */}
        <div className="snap-row flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-4 px-4 pb-2 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:gap-6 sm:overflow-visible">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative h-56 rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition-shadow duration-400 flex-shrink-0 w-[78%] snap-center sm:w-auto sm:flex-shrink"
              data-reveal
              style={{ "--reveal-delay": i + 1 }}
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="img-rich object-cover group-hover:scale-110 transition duration-700 ease-out"
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 50vw, 230px"
                quality={80}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80"></div>

              {/* Gold edge on hover */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition duration-500 group-hover:ring-[#DCA54A]/60"></div>

              {/* Title */}
              <div className="absolute bottom-0 p-4 transition-transform duration-500 group-hover:-translate-y-1.5">
                <p className="text-white text-sm font-medium leading-snug">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile swipe hint */}
        <p className="sm:hidden text-center text-gray-400 text-[11px] tracking-widest uppercase mt-4">
          Swipe to explore →
        </p>

      </div>
    </section>
  );
}