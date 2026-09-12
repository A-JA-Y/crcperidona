"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import plan1 from "@/assets-crc/residenceLiving.webp";
import plan2 from "@/assets-crc/residenceBalcony.webp";
import plan3 from "@/assets-crc/gallery_tower1.webp";
import plan4 from "@/assets-crc/gallery_tower2.webp";
import brochureImage from "@/assets-crc/gallery_tower3.webp";

import { useModal } from "./ModalContext";
import CtaRow from "./CtaRow";
import SimpleTable from "./SimpleTable";
import ProjectSnapshot from "./ProjectSnapshot";
import { prose } from "@/utils/prose";

// Residence floor plan data (indicative; subject to approved building plan)
const residencePlans = [
  {
    id: "r1",
    type: "4 BHK",
    size: "4,900 sq ft*",
    config: "4 BHK",
    price: "Price on Request",
    image: plan1,
    intro: "The entry layout, and larger than the top-end offering at most projects in Greater Noida.",
    paras: [
      "Four bedrooms, each with attached bath and wardrobe wall, arranged along the nature park side of the floor. Living and dining occupy a continuous span on the golf course side. The private lift lobby opens into a dedicated entrance foyer, so arrival happens inside your home, not in a corridor.",
      "Service areas — kitchen, utility, staff — sit on their own circulation so household work never crosses family or guest movement.",
    ],
    bestFor: "Families of four to six wanting a full-floor home on a single level.",
    features: ["One Floor One Apartment*", "Private Lift Lobby", "Golf Course View", "Nature Park View"],
  },
  {
    id: "r2",
    type: "5 BHK",
    size: "5,600 sq ft*",
    config: "5 BHK",
    price: "Price on Request",
    image: plan2,
    intro: "The additional bedroom here comes with additional separation, not just additional area.",
    paras: [
      "The extra 700 sq ft lets the plan pull a guest or parent suite away from the main bedroom cluster, giving it its own quiet corner of the floor. The living and dining span widens, and the formal entertaining zone gains enough distance from the private wing that hosting no longer puts the whole house on display.",
    ],
    bestFor: "Multi-generational households, or buyers who entertain at home regularly.",
    features: ["One Floor One Apartment*", "Private Lift Lobby", "2-Side Views", "Smart-Home Provisions"],
  },
  {
    id: "r3",
    type: "4 BHK (larger)",
    size: "6,700 sq ft*",
    config: "4 BHK",
    price: "Price on Request",
    image: plan3,
    intro: "Four bedrooms across 6,700 sq ft is a deliberate choice: fewer rooms, each considerably larger.",
    paras: [
      "Bedrooms approach suite proportions with room for a seating area or study within the bedroom itself. Living, dining and the family lounge become three distinct spaces rather than one open span asked to do all three jobs. The balcony frontage widens accordingly.",
    ],
    bestFor: "Buyers who want scale within each room rather than more rooms.",
    features: ["One Floor One Apartment*", "Full-Floor Living", "Golf Course View", "VRV/VRF Air Conditioning"],
  },
  {
    id: "r4",
    type: "Penthouse",
    size: "On Request*",
    config: "Penthouse",
    price: "Price on Request",
    image: plan4,
    intro:
      "The penthouse residences sit at the top of the towers, with the fullest expression of the 2-side outlook — the 130-acre Greg Norman championship golf course on one side, the 60-acre nature park on the other, from roughly 160 metres up.",
    paras: ["Layouts and areas are shared on request."],
    bestFor: "",
    features: ["Top-of-Tower Living", "Rooftop Access", "Panoramic Views", "Private Lift Lobby"],
  },
];

const everyPlanIncludes = [
  "One Floor One Apartment* concept",
  "Private lift lobby per residence",
  "2-side views — golf course and nature park",
  "Imported marble in living and dining",
  "Engineered wood flooring in bedrooms",
  "Modular kitchen with built-in appliances",
  "VRV/VRF air conditioning and smart-home provisions",
  "Double-glazed windows and European sanitaryware",
  "High-speed lifts serving private lobbies",
];

const readingThePlan = [
  {
    name: "Which side faces what.",
    text: "Both outlooks are good, but they are different. The golf course side is open and long-range; the nature park side is greener and quieter. Where your bedrooms sit relative to those two matters more than the total area.",
  },
  {
    name: "Floor level within the tower.",
    text: "With 43 floors, the outlook at level 8 and level 38 are different products at different prices.",
  },
  {
    name: "Tower position.",
    text: "Seven towers sit differently against the course and the park. The master plan shows how, and we can walk you through it.",
  },
];

export default function FloorPlanSection() {
  const { openModal, isLeadSubmitted } = useModal();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activePlan, setActivePlan] = useState<(typeof residencePlans)[0] | null>(null);
  const [isMasterOpen, setIsMasterOpen] = useState(false);
  const [selectedResidence, setSelectedResidence] = useState("");

  useEffect(() => {
    if (isLeadSubmitted) {
      setIsUnlocked(true);
      localStorage.setItem("plansUnlocked", "true");
    } else {
      const saved = localStorage.getItem("plansUnlocked");
      if (saved === "true") setIsUnlocked(true);
    }
  }, [isLeadSubmitted]);

  return (
    <section className="w-full py-16 px-6" id="floor-plans" aria-label="CRC The Peridona Floor Plans">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Intro */}
        <div>
          <h1 className={prose.h1}>
            CRC The Peridona Floor Plans — 4, 4.5 &amp; 5.5 BHK Layouts at Jaypee Greens
          </h1>
          <p className={prose.lead}>
            Every layout at The Peridona starts from the same premise: one apartment per floor.
          </p>
          <p className={prose.p}>
            That is not a marketing line about exclusivity. It is a structural decision that
            determines what the plan can do. Because no floor is split between two or three homes,
            the plan is free to run the full width of the tower, place the living spaces against the
            golf course, and put the bedrooms against the nature park — with a private lift lobby
            opening directly into your own home rather than a shared landing.
          </p>
          <p className={prose.p}>
            Across 7 towers rising 43 floors on 6.80 acres, there are only 341 residences in total.
          </p>
        </div>

        {/* Configurations at a Glance */}
        <div>
          <h2 className={prose.h2}>Configurations at a Glance</h2>
          <SimpleTable
            headers={["Layout", "Indicative size", "Views"]}
            rows={[
              ["4 BHK", "4,900 sq ft*", "Golf course + nature park"],
              ["5 BHK", "5,600 sq ft*", "Golf course + nature park"],
              ["4 BHK (larger)", "6,700 sq ft*", "Golf course + nature park"],
              ["Penthouse", "On request", "Golf course + nature park"],
            ]}
            className="mb-4"
          />
          <p className={prose.p}>
            Typologies are offered as <strong>4 BHK, 4.5 BHK and 5.5 BHK</strong>, starting from
            4,950 sq ft.
          </p>
          <p className={`${prose.note} mb-6`}>*Indicative; subject to the approved building plan.</p>
          <CtaRow items={[{ label: "Unlock the Full Plan Set →", brochure: true }]} />
        </div>

        {/* Layouts — detail + unlockable plan cards */}
        <div>
          <h2 className={prose.h2}>The Layouts</h2>
          <p className={`${prose.p} mb-8`}>
            Click any plan to view it. Plans unlock once you share your details with our team.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {residencePlans.map((plan) => (
              <article
                key={plan.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition border border-[#e5dcc5] flex flex-col"
              >
                <div
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => {
                    if (!isUnlocked) {
                      openModal();
                    } else {
                      setActivePlan(plan);
                    }
                  }}
                >
                  <Image
                    src={plan.image}
                    alt={`${plan.type} CRC The Peridona Floor Plan - ${plan.size}`}
                    className={`w-full h-full object-cover transition duration-500 ${
                      !isUnlocked ? "blur-[2px] scale-105" : "hover:scale-105"
                    }`}
                    loading="lazy"
                  />
                  {!isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm font-semibold">
                      🔒 Unlock to View
                    </div>
                  )}
                  <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-xs px-3 py-1 rounded">
                    {plan.config}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {plan.type} — {plan.size}
                  </h3>
                  <p className="text-sm text-[#DCA54A] font-semibold mb-3">{plan.price}</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{plan.intro}</p>
                  {plan.paras.map((para) => (
                    <p key={para} className="text-gray-600 text-sm leading-relaxed mb-3">
                      {para}
                    </p>
                  ))}
                  {plan.bestFor && (
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <strong>Best for:</strong> {plan.bestFor}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1 mt-4">
                    {plan.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-[10px] bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* What Every Plan Includes */}
        <div>
          <h2 className={prose.h2}>What Every Plan Includes</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {everyPlanIncludes.map((item) => (
              <li key={item} className={prose.li}>
                <span className={prose.tick}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Reading the Plan Before You Visit */}
        <div>
          <h2 className={prose.h2}>Reading the Plan Before You Visit</h2>
          <p className={prose.p}>
            Three things worth checking when you go through the drawings with us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {readingThePlan.map((item) => (
              <div key={item.name} className={prose.card}>
                <h3 className={prose.h3}>{item.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brochure preview */}
        <div>
          <h2 className={prose.h2}>The Full Plan Set &amp; Brochure</h2>
          <p className={`${prose.p} mb-6`}>
            Detailed unit plans, the master plan, tower layouts and the brochure are available on
            request. Unlock once and view everything here.
          </p>
          <div
            className="relative w-full rounded-lg overflow-hidden shadow-lg cursor-pointer group max-w-4xl mx-auto"
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
              alt="CRC The Peridona Brochure - Towers at Jaypee Greens, Greater Noida"
              className="w-full h-[260px] md:h-[320px] object-cover blur-[1px] scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
              <p className="text-lg font-semibold">📐 CRC The Peridona Brochure</p>
              <p className="text-sm mt-1">
                {isUnlocked ? "Click to View & Download" : "Unlock to Access"}
              </p>
              <button
                className="mt-4 bg-[#DCA54A] text-white text-xs px-6 py-2 rounded uppercase hover:bg-[#c9943a] transition"
                aria-label="View Brochure"
              >
                {isUnlocked ? "View Brochure" : "Unlock Now"}
              </button>
            </div>
          </div>
        </div>

        {/* Email me the brochure */}
        <div className="bg-[#FAF8F4] rounded-lg p-6 md:p-8 text-center border border-[#e5dcc5]">
          <h2 className={prose.h2}>Get the Plans by Email</h2>
          <p className={`${prose.p} max-w-2xl mx-auto`}>
            Share your name, phone and preferred residence configuration and our team will email the
            full plan set, master plan and brochure along with current pricing.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A] bg-white"
                aria-label="Your Name"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A] bg-white"
                aria-label="Phone Number"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A] bg-white"
                aria-label="Email Address"
              />
              <select
                value={selectedResidence}
                onChange={(e) => setSelectedResidence(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A] bg-white"
                aria-label="Preferred Residence Configuration"
              >
                <option value="">Preferred Residence Configuration</option>
                <option value="4bhk-4900">4 BHK — 4,900 sq ft*</option>
                <option value="5bhk-5600">5 BHK — 5,600 sq ft*</option>
                <option value="4bhk-6700">4 BHK — 6,700 sq ft*</option>
                <option value="penthouse">Penthouse</option>
              </select>
              <button
                onClick={() => openModal()}
                className="bg-[#DCA54A] text-white font-semibold px-6 py-3 rounded uppercase hover:bg-[#c9943a] transition"
              >
                Email Me the Plans
              </button>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <ProjectSnapshot
          rows={[
            ["Location", "C1, Jaypee Greens, Greater Noida 201310, Uttar Pradesh"],
            ["Configuration", "4, 4.5 & 5.5 BHK from 4,950 sq ft"],
            ["Towers", "7"],
            ["Floors", "43"],
            ["Residences", "341"],
            ["Site", "6.80 acres"],
            ["Tentative price", "₹12.5 Cr* onwards"],
            [
              "UP RERA No.",
              <>
                UPRERAPRJ298067/05/2025 ·{" "}
                <a
                  href="https://www.up-rera.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c8922a] hover:underline"
                >
                  up-rera.in
                </a>
              </>,
            ],
          ]}
        />

        {/* Get the Plans */}
        <div>
          <h2 className={prose.h2}>Get the Plans</h2>
          <p className={prose.p}>
            Detailed unit plans, the master plan, tower layouts and the brochure are available on
            request. Our team can also arrange a site visit so you can see the actual outlook from
            an available floor. For pricing, see the{" "}
            <Link href="/price" className={prose.link}>
              Price page
            </Link>
            .
          </p>
          <CtaRow
            items={[
              { label: "Unlock Floor Plans", brochure: true },
              { label: "Download Brochure", brochure: true },
              { label: "Book a Site Visit", href: "/contact-us" },
            ]}
          />
        </div>
      </div>

      {/* FLOOR PLAN MODAL */}
      {activePlan && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${activePlan.type} Residence Floor Plan`}
          onClick={() => setActivePlan(null)}
        >
          <div className="relative bg-white p-3 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActivePlan(null)}
              className="absolute top-2 right-2 text-black text-xl hover:text-gray-600 z-10 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Close plan preview"
            >
              ✕
            </button>

            <div className="mb-3">
              <h3 className="text-lg font-bold text-gray-900">
                {activePlan.type} Floor Plan
              </h3>
              <p className="text-sm text-gray-600">
                {activePlan.size} · {activePlan.price}
              </p>
            </div>

            <Image
              src={activePlan.image}
              alt={`${activePlan.type} CRC The Peridona Floor Plan - ${activePlan.size}`}
              className="w-full h-auto object-contain"
            />

            <div className="mt-3 flex flex-wrap gap-2">
              {activePlan.features.map((feature) => (
                <span key={feature} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* BROCHURE MODAL */}
      {isMasterOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="CRC The Peridona Brochure"
          onClick={() => setIsMasterOpen(false)}
        >
          <div className="relative bg-white p-4 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsMasterOpen(false)}
              className="absolute top-2 right-2 text-black text-xl hover:text-gray-600 z-10 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Close brochure preview"
            >
              ✕
            </button>

            <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
              CRC The Peridona Brochure
            </h3>

            <Image
              src={brochureImage}
              alt="CRC The Peridona - Towers at Jaypee Greens, Greater Noida"
              className="w-full h-auto object-contain mb-4"
            />

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="/brochure.pdf"
                download
                className="bg-[#DCA54A] text-white text-sm px-6 py-3 rounded uppercase hover:bg-[#c9943a] transition"
                aria-label="Download Brochure PDF"
              >
                📥 Download Brochure PDF
              </a>
              <button
                onClick={() => {
                  setIsMasterOpen(false);
                  openModal();
                }}
                className="bg-gray-200 text-gray-700 text-sm px-6 py-3 rounded uppercase hover:bg-gray-300 transition"
              >
                Book a Site Visit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
