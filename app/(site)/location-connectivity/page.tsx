import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import CtaRow from "@/components/CtaRow";
import SimpleTable from "@/components/SimpleTable";
import ProjectSnapshot, { RERA_NO, ReraLink } from "@/components/ProjectSnapshot";
import { prose } from "@/utils/prose";

const title = "CRC The Peridona Location | Jaypee Greens, Greater Noida Connectivity";
const description =
  "CRC The Peridona sits at C1, Jaypee Greens, Greater Noida — 2 km from Pari Chowk, on the Yamuna Expressway, and around 35 km from Jewar Noida International Airport.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://www.crcperidona.in/location-connectivity" },
};

const townshipItems = [
  {
    name: "130-acre, 18-hole Greg Norman Design championship golf course",
    text: "The reason the township exists, and the outlook from one side of every residence.",
  },
  { name: "60-acre nature park", text: "The outlook from the other side." },
  {
    name: "10-acre golf practice range",
    text: "The primary site access, via Narmada Gate, sits directly opposite it.",
  },
  {
    name: "25-year-old green cover",
    text: "Mature planting across the estate, with measurably better air quality than the newer sectors of Greater Noida.",
  },
  {
    name: "~3,600 units across 452 acres",
    text: "One of the lowest residential densities anywhere in Delhi NCR.",
  },
];

const valueItems = [
  {
    name: "The land is finite.",
    text: "The township is fully planned at 452 acres. New supply inside it is limited to infill parcels like this one — 6.80 acres carrying just 341 residences. You cannot manufacture more golf-course frontage here.",
  },
  {
    name: "Maturity is not replicable.",
    text: "Twenty-five years of tree growth is the one amenity a competing developer cannot build, budget for, or accelerate.",
  },
  {
    name: "Density stays low.",
    text: "At roughly 3,600 units across the estate, the daily experience — traffic within the township, pressure on shared infrastructure, general quiet — is structurally different from sectors carrying ten times that count.",
  },
];

const faqData = [
  {
    question: "Where exactly is the CRC The Peridona location?",
    answer:
      "CRC The Peridona is located at C1, Jaypee Greens, Greater Noida, Uttar Pradesh 201310 — inside the 452-acre Jaypee Greens golf township, approximately 2 km from Pari Chowk.",
  },
  {
    question: "What is the nearest metro station to CRC The Peridona?",
    answer:
      "The Pari Chowk and Knowledge Park metro stations are close by, keeping the Jaypee Greens township well connected to the metro network.",
  },
  {
    question: "How far is the Jewar Noida International Airport from CRC The Peridona?",
    answer:
      "The Jewar Noida International Airport is approximately 35 km from CRC The Peridona, with direct access via the Yamuna Expressway. IGI Airport, Delhi is approximately 55 km away.",
  },
  {
    question: "Which gate provides access to CRC The Peridona inside Jaypee Greens?",
    answer:
      "Primary access is via the Narmada Gate, located opposite the 10-acre golf practice range. From Delhi, take the Noida–Greater Noida Expressway to Pari Chowk and enter the township from there; from the Yamuna Expressway side, exit at Pari Chowk.",
  },
  {
    question: "Is CRC The Peridona well connected to Delhi and the rest of NCR?",
    answer:
      "Yes — the address has direct access to the Yamuna Expressway and is connected to the Noida–Greater Noida Expressway, with Pari Chowk approximately 2 km away and metro stations close by.",
  },
  {
    question: "What is the CRC The Peridona pin code?",
    answer: "CRC The Peridona at Jaypee Greens, Greater Noida falls under PIN code 201310.",
  },
];

export default function LocationConnectivityPage() {
  return (
    <>
      <PageBanner
        eyebrow="Location & Connectivity"
        title="Location & Connectivity"
        subtitle="C1, Jaypee Greens, Greater Noida, Uttar Pradesh 201310"
      />
      <ModalWrapper />

      {/* Intro */}
      <section className={`${prose.section} bg-white`} id="location">
        <div className={prose.inner}>
          <h1 className={prose.h1}>
            CRC The Peridona Location — Jaypee Greens, Greater Noida Connectivity
          </h1>
          <p className={prose.lead}>
            Most luxury projects in Greater Noida are selling you a location that will be good in
            five years. This one is already built.
          </p>
          <p className={prose.p}>
            The Peridona sits inside the 452-acre Jaypee Greens golf township — a low-density
            enclave with roughly 3,600 units across the entire estate and a green cover that has
            had twenty-five years to mature. The trees are grown. The roads are laid. The golf
            course has been in play for two decades. Nothing here is waiting on a masterplan to be
            delivered.
          </p>

          {/* Inside the Township */}
          <h2 className={`${prose.h2} mt-12`}>Inside the Township</h2>
          <p className={prose.p}>
            Before you get to expressways and airports, the more immediate question is what
            surrounds the building itself.
          </p>
          <ul className={prose.ul}>
            {townshipItems.map((item) => (
              <li key={item.name} className={prose.li}>
                <span className={prose.tick}>✓</span>
                <span>
                  <strong>{item.name}</strong> — {item.text}
                </span>
              </li>
            ))}
          </ul>
          <p className={prose.p}>
            Jaypee Public School is within walking distance, and hospitals, retail and everyday
            conveniences are inside the township rather than a drive away.
          </p>
        </div>
      </section>

      {/* Connectivity */}
      <section className={`${prose.section} bg-[#FAF8F4]`}>
        <div className={prose.inner}>
          <h2 className={prose.h2}>Connectivity</h2>
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1 w-full">
              <SimpleTable
                headers={["Destination", "Approx. distance"]}
                rows={[
                  ["Pari Chowk", "2 km"],
                  ["Yamuna Expressway", "Direct access"],
                  ["Noida–Greater Noida Expressway", "Connected"],
                  ["Pari Chowk / Knowledge Park metro", "Nearby"],
                  ["Jewar Noida International Airport", "35 km"],
                  ["IGI Airport, Delhi", "55 km"],
                ]}
              />
            </div>
            <div className="flex-1 w-full">
              <div className="w-full h-[300px] md:h-[360px] rounded-lg overflow-hidden shadow-md border border-[#e5dcc5]">
                <iframe
                  src="https://maps.google.com/maps?q=Jaypee+Greens,+Greater+Noida&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="CRC The Peridona Jaypee Greens Greater Noida Location Map"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <p className={prose.p}>
              <strong>Pari Chowk at 2 km</strong> is the detail that matters most day to day. It is
              the commercial and transport centre of Greater Noida, which means the practical
              business of living — banking, dining, retail, metro — is a short drive rather than an
              expedition.
            </p>
            <p className={prose.p}>
              <strong>Two expressways</strong> give you separate routes out. The Yamuna Expressway
              runs south toward Jewar and Agra; the Noida–Greater Noida Expressway runs north toward
              Noida and Delhi. Having both means a single point of congestion never traps you.
            </p>
            <p className={prose.p}>
              <strong>Jewar at 35 km</strong> is the long-term variable. The Noida International
              Airport is set to become one of the largest in the world, and the corridor between
              Greater Noida and Jewar is where most of the region’s infrastructure spending is
              currently directed. Established addresses already sitting inside that catchment tend
              to capture the benefit before newly launched ones do.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Location Holds Value */}
      <section className={`${prose.section} bg-white`}>
        <div className={prose.inner}>
          <h2 className={prose.h2}>Why This Location Holds Value</h2>
          <p className={prose.p}>
            A few things distinguish Jaypee Greens from the rest of the Greater Noida luxury market.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {valueItems.map((item) => (
              <div key={item.name} className={prose.card}>
                <h3 className={prose.h3}>{item.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <p className={prose.p}>
            The honest counterpoint: Greater Noida’s ultra-luxury resale market is thinner than
            Gurgaon’s, so if you are buying with a short exit horizon, factor that in. Over a longer
            hold, the airport corridor and the scarcity of golf-township land are the two forces
            working in your favour.
          </p>

          {/* Getting Here */}
          <h2 className={`${prose.h2} mt-12`}>Getting Here</h2>
          <p className={prose.p}>
            Primary site access is through <strong>Narmada Gate</strong>, opposite the golf practice
            range. If you are coming from Delhi, take the Noida–Greater Noida Expressway to Pari
            Chowk and enter the township from there. From the Yamuna Expressway side, exit at Pari
            Chowk.
          </p>
          <a
            href="https://maps.google.com/?q=Jaypee+Greens,+Greater+Noida"
            target="_blank"
            rel="noopener noreferrer"
            className={`${prose.link} inline-block mb-12`}
          >
            View on Google Maps →
          </a>

          {/* Project Details */}
          <ProjectSnapshot
            rows={[
              ["Address", "C1, Jaypee Greens, Greater Noida 201310, Uttar Pradesh"],
              ["Configuration", "4, 4.5 & 5.5 BHK from 4,950 sq ft"],
              ["Scale", "6.80 acres · 7 towers · 43 floors · 341 residences"],
              ["Tentative price", "₹12.5 Cr* onwards"],
              [
                "UP RERA No.",
                <>
                  {RERA_NO} · <ReraLink />
                </>,
              ],
            ]}
          />

          {/* See It in Person */}
          <h2 className={`${prose.h2} mt-12`}>See It in Person</h2>
          <p className={prose.p}>
            A location page can give you distances. It cannot show you what twenty-five years of
            green cover looks like from the 30th floor. Our team can arrange a site visit and walk
            you through the township, the golf frontage and the available floors.
          </p>
          <CtaRow
            items={[
              { label: "Book a Site Visit", href: "/contact-us" },
              { label: "Download Brochure", brochure: true },
              { label: "Contact Us", href: "/contact-us" },
            ]}
          />
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className={`${prose.section} bg-[#FAF8F4]`} id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className={`${prose.h2} text-center mb-8`}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((item) => (
              <div key={item.question} className={prose.cardWhite}>
                <h3 className="font-semibold text-gray-800 text-base mb-2">{item.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>

      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                "@id": "https://www.crcperidona.in/location-connectivity#faq",
                mainEntity: faqData.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.crcperidona.in/location-connectivity#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.crcperidona.in/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Location & Connectivity",
                    item: "https://www.crcperidona.in/location-connectivity",
                  },
                ],
              },
              {
                "@type": "WebPage",
                "@id": "https://www.crcperidona.in/location-connectivity#webpage",
                url: "https://www.crcperidona.in/location-connectivity",
                name: title,
                description,
                breadcrumb: {
                  "@id": "https://www.crcperidona.in/location-connectivity#breadcrumb",
                },
                about: {
                  "@id": "https://www.crcperidona.in/#residence",
                },
                mainEntity: {
                  "@id": "https://www.crcperidona.in/location-connectivity#faq",
                },
                primaryImageOfPage: "https://www.crcperidona.in/homeHero.webp",
                inLanguage: "en-IN",
              },
              {
                "@type": "ApartmentComplex",
                "@id": "https://www.crcperidona.in/#residence",
                name: "CRC The Peridona",
                description:
                  "Ultra-luxury 4, 4.5 & 5.5 BHK residences with golf course and nature park views at Jaypee Greens, Greater Noida by CRC Group.",
                url: "https://www.crcperidona.in/",
                image: "https://www.crcperidona.in/homeHero.webp",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "C1, Jaypee Greens",
                  addressLocality: "Greater Noida",
                  addressRegion: "Uttar Pradesh",
                  postalCode: "201310",
                  addressCountry: "IN",
                },
                amenityFeature: [
                  { "@type": "LocationFeatureSpecification", name: "Golf Course & Nature Park Views" },
                  { "@type": "LocationFeatureSpecification", name: "Clubhouse — The Club" },
                ],
              },
              {
                "@type": "RealEstateAgent",
                "@id": "https://www.crcperidona.in/#organization",
                name: "CRC The Peridona - Authorised Channel Partner",
                url: "https://www.crcperidona.in/",
                logo: "https://www.crcperidona.in/homeHero.webp",
                image: "https://www.crcperidona.in/homeHero.webp",
                telephone: "+91-7304216059",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Jaypee Greens",
                  addressLocality: "Greater Noida",
                  addressRegion: "Uttar Pradesh",
                  postalCode: "201310",
                  addressCountry: "IN",
                },
                areaServed: {
                  "@type": "City",
                  name: "Greater Noida",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
