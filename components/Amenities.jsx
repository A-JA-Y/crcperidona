"use client";
import {
  FaBuilding,
  FaSwimmingPool,
  FaSkating,
  FaFilm,
  FaUtensils,
  FaMusic,
  FaBook,
  FaDumbbell,
  FaBinoculars,
  FaCity,
  FaGlassMartiniAlt,
  FaRunning,
  FaTree,
} from "react-icons/fa";

import clubhouse from "@/assets-crc/clubhouse.webp";
import club1 from "@/assets-crc/gallery_club1.webp";
import club2 from "@/assets-crc/gallery_club2.webp";
import club3 from "@/assets-crc/gallery_club3.webp";
import rooftop from "@/assets-crc/rooftop.webp";
import rooftop1 from "@/assets-crc/gallery_rooftop1.webp";
import rooftop2 from "@/assets-crc/gallery_rooftop2.webp";
import rooftop3 from "@/assets-crc/gallery_rooftop3.webp";


const images = [clubhouse, club1, club2, club3, rooftop, rooftop1, rooftop2, rooftop3];
const imageAlts = [
  "The Club at CRC The Peridona — 1.8 lakh sq ft clubhouse",
  "CRC The Peridona clubhouse — theme swimming pools and waterbodies",
  "CRC The Peridona clubhouse — grand dining and lounge spaces",
  "CRC The Peridona clubhouse — indoor leisure and entertainment",
  "The Rooftop at CRC The Peridona — 75,500 sq ft skydeck",
  "CRC The Peridona rooftop — theme waterbodies and lounge",
  "CRC The Peridona rooftop — event area and observatories",
  "CRC The Peridona rooftop — jogging track and yoga deck",
];
import ImageSlider from "@/components/ImageSlider";


import bgImg from "../assets/Lines-PNG-Free-Image.webp";


const amenities = [
  { icon: <FaBuilding />,        text: "The Club — 1.8 lakh sq ft clubhouse across 3 levels" },
  { icon: <FaSwimmingPool />,    text: "3 theme swimming pools & waterbodies" },
  { icon: <FaSkating />,         text: "Ice rink & indoor flow ride" },
  { icon: <FaFilm />,            text: "2 grand cinema theatres" },
  { icon: <FaUtensils />,        text: "Grand dining, ballroom & private dining restaurant" },
  { icon: <FaMusic />,           text: "The Jazz Club & karaoke club" },
  { icon: <FaBook />,            text: "The Library & Tea Lounge" },
  { icon: <FaDumbbell />,        text: "World-class gymnasium & bowling alley" },
  { icon: <FaBinoculars />,      text: "Private observatory above the city" },
  { icon: <FaCity />,            text: "The Rooftop — 75,500 sq ft, 300 m lengthwise" },
  { icon: <FaGlassMartiniAlt />, text: "Rooftop bar & lounge, barbeque & event area with live screen" },
  { icon: <FaRunning />,         text: "Jogging track, yoga deck & padel ball court" },
  { icon: <FaTree />,            text: "Miyawaki Forest Observatory & The Wing Observatory" },
];

import { useModal } from "./ModalContext";

export default function Amenities() {
  const { openModal } = useModal();
  return (
    <section
      id="amenities"
      className="w-full bg-[#4F3318] py-16 px-6 md:px-12 lg:px-20 text-[#FDE6C0] relative overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-3 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
      />

      {/* Mirrored background */}
      <div
        className="absolute inset-0 opacity-3 transform scale-x-[-1] pointer-events-none"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
      />

      {/* Ambient gold glow */}
      <div className="glow-blob -top-24 -left-24 w-[400px] h-[400px] opacity-35" />
      <div className="glow-blob -bottom-28 -right-20 w-[360px] h-[360px] opacity-30" style={{ animationDelay: "-7s" }} />

      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center" data-reveal>
          <h6 className="text-[#DCA54A] uppercase mb-4">
            The Club &amp; The Rooftop
          </h6>
          <h2 className="text-[#FDE6C0] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            Curated Amenities for a Life of Abundance
          </h2>
          <span className="gold-line block h-[2px] w-16 mx-auto mt-5 bg-gradient-to-r from-transparent via-[#DCA54A] to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* Left */}
          <div className="flex-1 flex flex-col gap-5" data-reveal="left">
            <p className="text-sm md:text-base leading-relaxed">
              At CRC The Peridona, leisure unfolds across two landmark spaces —
              The Club, a 1.8 lakh sq ft clubhouse designed by Rockwell Group,
              and The Rooftop, a 75,500 sq ft skydeck stretching 300 metres
              above Jaypee Greens.
            </p>

            <ul className="flex flex-col gap-[18px]">
              {amenities.map((item, i) => (
                <li
                  key={i}
                  className="group flex items-center gap-4"
                  data-reveal
                  style={{ "--reveal-delay": (i % 5) + 1 }}
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-[rgba(220,165,74,0.35)] text-base text-[#DCA54A] transition-all duration-300 group-hover:bg-[#DCA54A] group-hover:text-[#4F3318] group-hover:scale-110 group-hover:border-[#DCA54A]">
                    {item.icon}
                  </span>
                  <span className="text-sm md:text-base transition-colors duration-300 group-hover:text-white">{item.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm md:text-base leading-relaxed mt-1">
              From wellness and recreation to entertainment and serenity, every
              space is crafted to give plenty — true to the Peridona name.
            </p>

            <div className="mt-3">
              <button
                onClick={() => openModal()}
                className="btn-shine btn-gold-glow hover-lift inline-block bg-[#c9a84c] text-[#fff] text-xs rounded-[8px] font-bold uppercase px-7 py-3 cursor-pointer hover:bg-[#b8933e] transition"
              >
                Know More
              </button>
            </div>
          </div>

          {/* Right Image */}
         <div className="w-full lg:w-[50%]  h-[300px] md:h-[550px] flex-shrink-0 lg:sticky lg:top-24" data-reveal="right">
  <ImageSlider images={images} alts={imageAlts} />
</div>

        </div>
      </div>
    </section>
  );
}
