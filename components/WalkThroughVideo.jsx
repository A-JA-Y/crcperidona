"use client";

import ImageSlider from "@/components/ImageSlider";

import tower1 from "@/assets-crc/gallery_tower1.webp";
import tower2 from "@/assets-crc/gallery_tower2.webp";
import tower3 from "@/assets-crc/gallery_tower3.webp";
import golfCourse from "@/assets-crc/golfCourse.webp";
import residenceLiving from "@/assets-crc/residenceLiving.webp";
import residenceBalcony from "@/assets-crc/residenceBalcony.webp";

const galleryImages = [tower1, tower2, tower3, golfCourse, residenceLiving, residenceBalcony];
const galleryAlts = [
  "CRC The Peridona towers — 330 m* front facade at Jaypee Greens",
  "CRC The Peridona — 43-floor towers overlooking the golf course",
  "CRC The Peridona facade view from the Jaypee Greens township",
  "18-hole Greg Norman Design Championship Golf Course at Jaypee Greens",
  "CRC The Peridona residence living space with imported marble",
  "CRC The Peridona residence balcony with golf course and nature park views",
];

export default function WalkthroughSection() {
  return (
    <section className="relative w-full bg-[#FAF8F4] py-16 px-6 overflow-hidden" id="walkthrough">
      <div className="glow-blob -top-20 -right-28 w-[400px] h-[400px] opacity-30" />
      <div className="glow-blob -bottom-28 -left-24 w-[340px] h-[340px] opacity-25" style={{ animationDelay: "-9s" }} />
      <div className="relative max-w-5xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center" data-reveal>
          <h6 className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">
            Gallery
          </h6>

          <h2 className="text-3xl   md:text-4xl font-bold text-gray-900">
            Experience The Peridona
          </h2>
          <span className="gold-line block h-[2px] w-16 mx-auto mt-4 bg-gradient-to-r from-transparent via-[#DCA54A] to-transparent" />

          <p className="text-gray-600 text-sm mt-3 max-w-xl mx-auto">
            A glimpse of the towers, residences, and the Greg Norman Design
            golf course that surrounds life at CRC The Peridona.
          </p>
        </div>


        <div className="relative w-full rounded-xl overflow-hidden shadow-lg max-w-[720px] mx-auto transition-shadow duration-500 hover:shadow-2xl" data-reveal="zoom">
          <div className="aspect-video w-full h-full">
            <ImageSlider images={galleryImages} alts={galleryAlts} />
          </div>
        </div>


        <div className="text-center" data-reveal>
          <p className="text-sm text-gray-600 mb-3">
            Want complete details including pricing &amp; plans?
          </p>

          <a
            href="#book-site-visit"
            className="btn-shine btn-gold-glow hover-lift animate-pulse-glow inline-block bg-[#DCA54A] text-white text-xs px-6 py-3 rounded uppercase"
          >
            Get Full Details
          </a>
        </div>

      </div>
    </section>
  );
}
