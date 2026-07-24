"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import plan1 from "@/assets-crc/residenceLiving.webp";
import plan2 from "@/assets-crc/residenceBalcony.webp";
import plan3 from "@/assets-crc/gallery_tower1.webp";
import plan4 from "@/assets-crc/gallery_tower2.webp";
import brochureImage from "@/assets-crc/gallery_tower3.webp";

import { useModal } from "./ModalContext";

export default function PlansSection() {
  const { openModal, isLeadSubmitted } = useModal();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activePlan, setActivePlan] = useState(null);
  const [isMasterOpen, setIsMasterOpen] = useState(false);

  useEffect(() => {
    if (isLeadSubmitted) {
      setIsUnlocked(true);
      localStorage.setItem("plansUnlocked", "true");
    } else {
      const saved = localStorage.getItem("plansUnlocked");
      if (saved === "true") setIsUnlocked(true);
    }
  }, [isLeadSubmitted]);

  const plans = [
    { img: plan1, label: "4 BHK — 4,900 sq ft*" },
    { img: plan2, label: "5 BHK — 5,600 sq ft*" },
    { img: plan3, label: "4 BHK — 6,700 sq ft*" },
    { img: plan4, label: "Penthouse" },
  ];

  return (
    <section  className="relative w-full  py-16 px-6 overflow-hidden" id="plans">
      <div className="glow-blob top-1/3 -left-28 w-[360px] h-[360px] opacity-25" />
      <div className="relative max-w-6xl mx-auto flex flex-col gap-12">

        {/* Heading */}
        <div className="text-center" data-reveal>
          <h6 className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">
            Floor Plans
          </h6>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Available Layouts
          </h2>
          <span className="gold-line block h-[2px] w-16 mx-auto mt-4 bg-gradient-to-r from-transparent via-[#DCA54A] to-transparent" />
          <p className="text-gray-600 text-sm mt-3">
            *Indicative; subject to approved building plan
          </p>
        </div>

        {/* FLOOR PLAN GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="card-lift relative rounded-md overflow-hidden shadow-md group cursor-pointer active:scale-[0.97]"
              data-reveal
              style={{ "--reveal-delay": i + 1 }}
              onClick={() => {
                if (!isUnlocked) {
                  openModal();
                } else {
                  setActivePlan(plan);
                }
              }}
            >
              <Image
                src={plan.img}
                alt={`CRC The Peridona ${plan.label} floor plan`}
                className={`img-rich w-full h-[140px] object-cover transition duration-500 ${
                  !isUnlocked ? "blur-[1px] scale-105" : "group-hover:scale-105"
                }`}
              />

              <span className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[11px] text-center py-1">
                {plan.label}
              </span>

              {!isUnlocked && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/40 text-white text-xs transition-colors duration-300 group-hover:bg-black/55">
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  Unlock
                </div>
              )}
            </div>
          ))}
        </div>

        {/*  BROCHURE SUBSECTION */}
        <div className="flex flex-col items-center text-center mt-6" data-reveal>

          {/* Sub heading */}
          <h6 className="text-gold-gradient text-xl md:text-2xl font-semibold mb-2">
            Project Brochure
          </h6>

          <p className="text-gray-600 text-sm mb-6 max-w-lg">
            Get the complete overview of CRC The Peridona — the 6.80-acre enclave
            inside the 452-acre Jaypee Greens golf township, The Club, The Rooftop
            and residence configurations.
          </p>

          {/* Card */}
          <div
            className="relative w-full md:w-[70%] rounded-lg overflow-hidden shadow-lg cursor-pointer group"
            onClick={() => {
              if (!isUnlocked) {
                openModal();
              } else {
                setIsMasterOpen(true);
              }
            }}
          >
            <Image
              src={brochureImage}
              alt="CRC The Peridona Brochure"
              className="w-full h-[260px] md:h-[320px] object-cover blur-[1px] scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
              <p className="text-lg font-semibold">Project Brochure</p>
              <p className="text-sm mt-1">
                {isUnlocked ? "Click to View & Download" : "Unlock to Access"}
              </p>

              <button className="btn-shine btn-gold-glow hover-lift animate-pulse-glow mt-4 bg-[#DCA54A] text-white text-xs px-6 py-2 rounded uppercase">
                {isUnlocked ? "View Brochure" : "Unlock Now"}
              </button>
            </div>

            {/* Premium badge */}
            <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-[10px] px-2 py-1 rounded">
              Premium
            </span>
          </div>
        </div>
      </div>

      {/* FLOOR PLAN MODAL */}
      {activePlan && (
        <div className="animate-overlay-fade fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="animate-modal-pop relative bg-white p-3 rounded-lg max-w-3xl w-full">
            <button
              onClick={() => setActivePlan(null)}
              className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded-full text-black text-xl transition-all duration-300 hover:rotate-90 hover:bg-black/5 active:scale-90"
            >
              ✕
            </button>

            <Image
              src={activePlan.img}
              alt={`CRC The Peridona ${activePlan.label} plan preview`}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* BROCHURE MODAL */}
      {isMasterOpen && (
        <div className="animate-overlay-fade fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
          <div className="animate-modal-pop relative bg-white p-4 rounded-lg max-w-4xl w-full text-center">

            <button
              onClick={() => setIsMasterOpen(false)}
              className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded-full text-black text-xl transition-all duration-300 hover:rotate-90 hover:bg-black/5 active:scale-90"
            >
              ✕
            </button>

            <Image
              src={brochureImage}
              alt="CRC The Peridona Brochure"
              className="w-full h-auto object-contain mb-4"
            />

            <a
              href="/brochure.pdf"
              download
              className="btn-shine btn-gold-glow hover-lift inline-block bg-[#DCA54A] text-white text-xs px-6 py-3 rounded uppercase"
            >
              Download Brochure
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
