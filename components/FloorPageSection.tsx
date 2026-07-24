"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import plan1 from "@/assets-crc/residenceLiving.webp";
import plan2 from "@/assets-crc/residenceBalcony.webp";
import plan3 from "@/assets-crc/gallery_tower1.webp";
import plan4 from "@/assets-crc/gallery_tower2.webp";
import brochureImage from "@/assets-crc/gallery_tower3.webp";

import { useModal } from "./ModalContext";

// Residence floor plan data (indicative; subject to approved building plan)
const residencePlans = [
  {
    id: "r1",
    type: "4 BHK",
    size: "4,900 sq ft*",
    config: "4 BHK",
    price: "Price on Request",
    image: plan1,
    description:
      "One Floor One Apartment* residence with a private lift lobby, imported-marble living and dining spaces, and 2-side views of the golf course and nature park.",
    features: ["One Floor One Apartment*", "Private Lift Lobby", "Golf Course View", "Nature Park View"],
  },
  {
    id: "r2",
    type: "5 BHK",
    size: "5,600 sq ft*",
    config: "5 BHK",
    price: "Price on Request",
    image: plan2,
    description:
      "Expansive 5 BHK layout for larger families — engineered-wood bedrooms, modular kitchen with built-in appliances, and dual golf-and-park frontage on every floor.",
    features: ["One Floor One Apartment*", "Private Lift Lobby", "2-Side Views", "Smart-Home Provisions"],
  },
  {
    id: "r3",
    type: "4 BHK Grande",
    size: "6,700 sq ft*",
    config: "4 BHK",
    price: "Price on Request",
    image: plan3,
    description:
      "The larger 4 BHK format — generous living, dining and family zones across a full floor plate, with VRV/VRF air conditioning and double-glazed windows throughout.",
    features: ["One Floor One Apartment*", "Full-Floor Living", "Golf Course View", "VRV/VRF Air Conditioning"],
  },
  {
    id: "r4",
    type: "Penthouse",
    size: "On Request*",
    config: "Penthouse",
    price: "Price on Request",
    image: plan4,
    description:
      "Crowning residences near the ~160 m* summit of the towers, close to the 75,500 sq ft rooftop with its observatories, theme waterbodies and yoga deck.",
    features: ["Top-of-Tower Living", "Rooftop Access", "Panoramic Views", "Private Lift Lobby"],
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

  // Price comparison table data
  const priceData = [
    { type: "4 BHK", size: "4,900 sq ft*", config: "4 BHK", price: "Price on Request" },
    { type: "5 BHK", size: "5,600 sq ft*", config: "5 BHK", price: "Price on Request" },
    { type: "4 BHK Grande", size: "6,700 sq ft*", config: "4 BHK", price: "Price on Request" },
    { type: "Penthouse", size: "On Request*", config: "Penthouse", price: "Price on Request" },
  ];

  return (
    <section className="w-full py-16 px-6" id="floor-plans" aria-label="CRC The Peridona Floor Plans">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* H1 Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            CRC The Peridona Floor Plans — 4 BHK, 5 BHK &amp; Penthouse Residences at Jaypee Greens
          </h1>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
            Explore the CRC The Peridona floor plan collection — expansive full-floor
            residences set within a 6.80-acre enclave inside the 452-acre Jaypee Greens
            golf township, Greater Noida. The configurations listed on the official
            microsite span a 4 BHK of 4,900 sq ft*, a 5 BHK of 5,600 sq ft*, a larger
            4 BHK of 6,700 sq ft* and Penthouses — all built on the One Floor One
            Apartment* concept with a private lift lobby and 2-side views of the golf
            course and the 60-acre nature park. *Indicative; subject to approved
            building plan.
          </p>
          <button
            onClick={() => openModal()}
            className="mt-6 bg-[#DCA54A] text-white text-sm px-8 py-3 rounded uppercase font-semibold hover:bg-[#c9943a] transition"
            aria-label="Download Brochure"
          >
            Download Brochure
          </button>
        </div>

        {/* H2 - Price Chart */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            CRC The Peridona Configurations at a Glance
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-8">
            The Peridona offers just 341 residences across 7 towers of 43 floors —
            typologies of 4 BHK, 4.5 BHK and 5.5 BHK starting from 4,950 sq ft, with
            a tentative price of ₹12.5 Cr* onwards. Exact unit pricing is shared on
            request. Use the table below to compare the floor-plan configurations at
            a glance:
          </p>

          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-[#DCA54A] text-white">
                  <th className="px-4 py-3 text-left">Residence</th>
                  <th className="px-4 py-3 text-left">Indicative Size</th>
                  <th className="px-4 py-3 text-left">Configuration</th>
                  <th className="px-4 py-3 text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((item, idx) => (
                  <tr
                    key={item.type}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="px-4 py-3 font-semibold">{item.type}</td>
                    <td className="px-4 py-3">{item.size}</td>
                    <td className="px-4 py-3">{item.config}</td>
                    <td className="px-4 py-3 font-semibold text-[#DCA54A]">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            *Indicative; subject to approved building plan. Prices are tentative
            (₹12.5 Cr* onwards) and subject to change. Contact our channel partner
            team for the most current CRC The Peridona price list.
          </p>
        </div>

        {/* H2 - Floor Plan Configurations */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            CRC The Peridona Floor Plan Configurations
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-10">
            CRC The Peridona is an ultra-luxury development by CRC Group — every floor
            plan follows the One Floor One Apartment* concept, so each residence spans
            its own level with a private lift lobby and uninterrupted 2-side views:
            the Greg Norman-designed golf course to one side and the 60-acre nature
            park to the other.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {residencePlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer border border-gray-100"
                onClick={() => {
                  if (!isUnlocked) {
                    openModal();
                  } else {
                    setActivePlan(plan);
                  }
                }}
              >
                <div className="relative h-48 overflow-hidden">
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
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {plan.type} Floor Plan <span className="text-sm font-normal">({plan.size})</span>
                  </h3>
                  <p className="text-sm text-[#DCA54A] font-semibold">{plan.config} · {plan.price}</p>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-2">{plan.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {plan.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="text-[10px] bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                    {plan.features.length > 3 && (
                      <span className="text-[10px] text-gray-500">+{plan.features.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* H2 - Selection Guide Table */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Choose the Right Peridona Residence for You
          </h2>

          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left">If You Are...</th>
                  <th className="px-4 py-3 text-left">Recommended Residence</th>
                  <th className="px-4 py-3 text-left">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { buyer: "Moving up to full-floor luxury living", residence: "4 BHK (4,900 sq ft*)", why: "The entry point into the One Floor One Apartment* concept with 2-side views" },
                  { buyer: "A larger or multi-generational family", residence: "5 BHK (5,600 sq ft*)", why: "An extra bedroom suite with the same private-lobby, full-floor format" },
                  { buyer: "Seeking maximum space in a 4 BHK", residence: "4 BHK Grande (6,700 sq ft*)", why: "The most expansive 4 BHK floor plate in the collection" },
                  { buyer: "After the crowning address", residence: "Penthouse", why: "Top-of-tower residences beside the 75,500 sq ft rooftop amenities" },
                ].map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="px-4 py-3 font-medium">{item.buyer}</td>
                    <td className="px-4 py-3 font-semibold text-[#DCA54A]">{item.residence}</td>
                    <td className="px-4 py-3 text-sm">{item.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* H2 - Brochure Section */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            CRC The Peridona Project Brochure
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-6">
            Alongside the individual residence layouts, the CRC The Peridona brochure
            presents the full picture of the development — 7 towers of 43 floors rising
            ~160 m*, a 330 m* long front facade, the 1.8 lakh sq ft Club across 3
            levels, and the 75,500 sq ft rooftop. It also maps the setting: the
            130-acre Greg Norman-designed championship golf course to the north, the
            60-acre nature park to the south, and the practice range and township
            clubhouse on either side.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-sm mb-6">
            <ul className="space-y-1 list-disc list-inside text-gray-600">
              <li>18-Hole Greg Norman Design Championship Golf Course</li>
              <li>The Club — 1.8 lakh sq ft across 3 levels</li>
              <li>The Rooftop — 75,500 sq ft, 300 m lengthwise</li>
            </ul>
            <ul className="space-y-1 list-disc list-inside text-gray-600">
              <li>60-acre nature park and 10-acre practice range</li>
              <li>2-side views for every residence (golf course + nature park)</li>
              <li>24x7 multi-tier security with video door phone</li>
            </ul>
          </div>

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
            <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-[10px] px-2 py-1 rounded">
              Premium
            </span>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => {
                if (!isUnlocked) openModal();
                else setIsMasterOpen(true);
              }}
              className="bg-[#DCA54A] text-white text-xs px-6 py-2 rounded uppercase hover:bg-[#c9943a] transition"
            >
              View Brochure PDF
            </button>
          </div>
        </div>

        {/* H2 - PDF Download Section */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6 md:p-8 text-center border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            CRC The Peridona Floor Plan PDF — Download
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm mb-6">
            The official CRC The Peridona brochure includes the residence
            configurations — the 4,900 sq ft* 4 BHK, 5,600 sq ft* 5 BHK, 6,700 sq ft*
            4 BHK and Penthouses — along with The Club, The Rooftop, specifications
            and the global design team. It is shared directly with verified buyers to
            maintain accurate, RERA-aligned distribution.
          </p>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-6">
            To download the CRC The Peridona brochure, share your name, phone and
            preferred residence configuration via the enquiry form below. Our channel
            partner team will email the latest PDF along with current pricing details
            within a few hours.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Your Name"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Phone Number"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Email Address"
              />
              <select
                value={selectedResidence}
                onChange={(e) => setSelectedResidence(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
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
                Email Me the Brochure
              </button>
            </div>
          </div>
        </div>

        {/* H2 - Price Info */}
        <div className="text-center text-sm text-gray-500 mt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            CRC The Peridona Floor Plan Price
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The tentative price at CRC The Peridona is <strong>₹12.5 Cr* onwards</strong>,
            with typologies of 4 BHK, 4.5 BHK and 5.5 BHK starting from 4,950 sq ft.
            Exact unit pricing depends on typology, floor and orientation, and is
            shared on a one-to-one basis so you receive the most current offer for the
            residence you shortlist.
          </p>
          <p className="mt-3">
            For the latest pricing on any CRC The Peridona residence, visit the{" "}
            <a href="/price" className="text-[#DCA54A] hover:underline">
              Price page
            </a>{" "}
            or request a callback through the{" "}
            <a href="/contact-us" className="text-[#DCA54A] hover:underline">
              Contact form
            </a>.
          </p>
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
                Request a Private Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
