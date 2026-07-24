"use client";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import ImageSlider from "./ImageSlider";

import vision from "../assets-crc/vision.webp";
import residenceLiving from "../assets-crc/residenceLiving.webp";
import residenceBalcony from "../assets-crc/residenceBalcony.webp";
import towerFacade from "../assets-crc/gallery_tower1.webp";
import golfCourse from "../assets-crc/golfCourse.webp";


import { useModal } from "./ModalContext";

const AboutProject = ({heading}) => {
  const { openModal } = useModal();
  return (
    <section
      id="overview"
      className="relative w-full bg-white py-[70px] px-[30px] md:min-h-[750px] overflow-hidden"
    >
      <div className="glow-blob top-10 -right-24 w-[420px] h-[420px] opacity-30" />
      <div className="glow-blob -bottom-32 -left-28 w-[360px] h-[360px] opacity-25" style={{ animationDelay: "-8s" }} />
      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 center-box">

        {/* Left: Images */}
        <div
          className="flex flex-col items-start relative w-full md:w-1/2 h-[260px] sm:h-[340px] md:h-[500px]"
          data-reveal="left"
        >
          <ImageSlider images={[vision,residenceLiving,residenceBalcony,towerFacade,golfCourse]}/>
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4" data-reveal="right">

          {/* Tagline */}
          <h6 className="text-[#c8952a] font-semibold text-xs tracking-widest uppercase">
            Live. More. — The Address of Abundance
          </h6>

          {/* Title */}
         {heading ? ( <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            About CRC The Peridona
          </h1>):( <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            About CRC The Peridona
          </h2>)}

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            CRC The Peridona is an ultra-luxury residential enclave spread over
            6.8 acres inside the 452-acre Jaypee Greens golf township, Greater
            Noida. Just 7 towers house only 341 residences, built around a One
            Floor One Apartment* concept with private lift lobbies.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Choose from 4 BHK, 4.5 BHK and 5.5 BHK residences starting at 4,950
            sq ft, each opening to 2-side views — the golf course on one side
            and the 60-acre nature park on the other.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Crafted by CRC Group with a global design team, this is not just a
            home — it is an address of abundance, made to Live. More.
          </p>

          {/* Checklist */}
          <ul className="flex flex-col gap-2 mt-1">
            {[
              "6.8 Acres, 7 Towers, 341 Residences",
              "One Floor One Apartment* Concept",
              "4, 4.5 & 5.5 BHK from 4,950 Sq Ft",
              "2-Side Golf Course & Nature Park Views",
            ].map((item, i) => (
              <li
                key={item}
                className="group flex items-start gap-2 text-gray-700 text-sm"
                data-reveal
                style={{ "--reveal-delay": i + 1 }}
              >
                <FaCheck className="mt-0.5 text-[#c8952a] flex-shrink-0 text-sm transition-transform duration-300 group-hover:scale-125" />
                <span className="transition-colors duration-300 group-hover:text-gray-900">{item}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="mt-4">
            <button
              onClick={() => openModal()}
              className="btn-shine btn-gold-glow hover-lift inline-block bg-[#c8952a] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-[#b07d1f] transition-colors duration-300 cursor-pointer"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;