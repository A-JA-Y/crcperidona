import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AboutProject from "@/components/AboutProject";
import JaypeeTownship from "@/components/JaypeeTownship";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import visionImg from "@/assets-crc/vision.webp";
import clubhouseImg from "@/assets-crc/clubhouse.webp";

export const metadata: Metadata = {
  title: "About The Peridona | CRC The Peridona Jaypee Greens Greater Noida",
  description:
    "Learn about CRC The Peridona at Jaypee Greens, Greater Noida — 7 towers, 341 ultra-luxury residences with One Floor One Apartment* living, golf course and nature park views, by CRC Group.",
  alternates: { canonical: "https://www.crcperidona.in/about-the-peridona" },
};

const keyFacts = [
  { label: "Land Parcel", value: "6.80 acres inside the 452-acre Jaypee Greens golf township" },
  { label: "Towers & Residences", value: "7 towers, 341 residences" },
  { label: "Scale", value: "43 floors, ~160 m* tower height, 330 m* long front facade" },
  { label: "Concept", value: "One Floor One Apartment* with private lift lobby" },
  { label: "Views", value: "Every residence gets 2-side views — Golf Course + Nature Park" },
  { label: "Typologies", value: "4 BHK / 4.5 BHK / 5.5 BHK, starting 4,950 sq ft" },
  { label: "Tentative Price", value: "₹12.5 Cr* onwards" },
  { label: "RERA", value: "UPRERAPRJ298067/05/2025 (verify at www.up-rera.in)" },
];

const clubHighlights = [
  "3 theme swimming pools & waterbodies",
  "Ice rink",
  "2 grand cinema theatres",
  "Grand dining & ballroom",
  "Private dining restaurant",
  "The Jazz Club",
  "The Library & Tea Lounge",
  "World-class gymnasium",
  "Karaoke club",
  "Bowling alley",
  "Indoor flow ride",
  "Private observatory above the city",
];

const rooftopHighlights = [
  "3 theme waterbodies",
  "Bar & lounge",
  "Event area with live screen",
  "Kids play area",
  "Barbeque & lounge",
  "Jogging track",
  "Miyawaki Forest Observatory",
  "The Wing Observatory",
  "Yoga deck & padel ball court",
];

const specifications = [
  "Imported marble in living/dining areas; engineered wood in bedrooms",
  "Modular kitchen with premium fittings & built-in appliances",
  "European-brand sanitaryware and CP fittings",
  "Double-glazed thermally broken aluminium windows",
  "VRV/VRF air conditioning",
  "Smart-home provisions — lighting, climate, security",
  "24x7 multi-tier security, video door phone, fire safety",
  "High-speed lifts with private lobby access",
];

export default function AboutThePeridonaPage() {
  return (
    <>
      <PageBanner
        eyebrow="The Project"
        title="About The Peridona"
        subtitle="CRC The Peridona — ultra-luxury residences at Jaypee Greens, Greater Noida, where every home opens to the golf course on one side and a 60-acre nature park on the other. Live. More."
      />
      <ModalWrapper />
      <AboutProject heading={true} />

      {/* Overview */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <Image
              src={visionImg}
              alt="CRC The Peridona — The Address of Abundance at Jaypee Greens Greater Noida"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              The Address of Abundance
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Derived from the Greek word meaning &ldquo;giving plenty&rdquo;, Peridona stands
              for abundance — prosperity, growth, and good fortune. CRC The Peridona brings that
              idea to life on a 6.80-acre parcel inside the 452-acre Jaypee Greens golf township:
              7 towers rising 43 floors, housing just 341 residences.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              With the One Floor One Apartment* concept and a private lift lobby for each home,
              every residence enjoys 2-side views — the 130-acre, 18-hole Greg Norman Design
              Championship golf course to the north and the 60-acre nature park to the south —
              framed by a 330 m* long front facade.
            </p>
            <p className="text-xs text-gray-400 italic">
              *Indicative; subject to approved building plan.
            </p>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="w-full bg-[#FAF8F4] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">
            Key Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyFacts.map((fact) => (
              <div
                key={fact.label}
                className="bg-white p-5 rounded-lg border border-[#e5dcc5] shadow-sm"
              >
                <p className="text-[#c8922a] text-xs uppercase tracking-widest font-semibold mb-1">
                  {fact.label}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Club */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2 flex flex-col gap-4 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              The Club — 1.8 Lakh Sq Ft Across 3 Levels
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Designed by New York&apos;s Rockwell Group, The Club at The Peridona spans 1.8 lakh
              sq ft across three levels — conceived around community, serenity, and a sense of
              belonging.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {clubHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-[#c8952a] mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <Image
              src={clubhouseImg}
              alt="The Club at CRC The Peridona — 1.8 lakh sq ft clubhouse across 3 levels"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* The Rooftop */}
      <section className="w-full bg-[#FAF8F4] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 text-center">
            The Rooftop — 75,500 Sq Ft, 300 m Lengthwise
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mx-auto text-center mb-8">
            Crowning the towers is a 75,500 sq ft rooftop realm stretching 300 metres lengthwise —
            a sky-level extension of the lifestyle below.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {rooftopHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700 text-sm bg-white p-4 rounded-lg border border-[#e5dcc5]">
                <span className="text-[#c8952a] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Specifications */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">
            Residence Specifications
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {specifications.map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                <span className="text-[#c8952a] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center flex flex-wrap justify-center gap-4">
            <Link
              href="/residences"
              className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors"
            >
              Explore Residences & Configurations
            </Link>
            <Link
              href="/contact-us"
              className="inline-block border-2 border-[#DCA54A] text-[#DCA54A] hover:bg-[#DCA54A] hover:text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors"
            >
              Request a Private Preview
            </Link>
          </div>
        </div>
      </section>

      <JaypeeTownship />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
