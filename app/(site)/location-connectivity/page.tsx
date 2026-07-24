import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import LocationAdvantages from "@/components/LocationAdvantages";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "CRC The Peridona Location — Jaypee Greens Greater Noida Connectivity",
  description:
    "CRC The Peridona location at Jaypee Greens, Greater Noida offers seamless connectivity to Pari Chowk (~2 km), metro, Yamuna Expressway and Jewar Noida International Airport (~35 km).",
  alternates: { canonical: "https://www.crcperidona.in/location-connectivity" },
};

const locationHighlights = [
  "Pari Chowk — approx. 2 km away",
  "Pari Chowk / Knowledge Park metro stations close by",
  "Jewar Noida International Airport — approx. 35 km",
  "IGI Airport, Delhi — approx. 55 km",
  "Direct access to the Yamuna Expressway",
  "Seamless connectivity to Noida–Greater Noida Expressway",
  "Jaypee Public School within walking distance",
  "Primary access via Narmada Gate, opposite the practice range",
];

const distanceData = [
  { destination: "Pari Chowk", distance: "~2 km" },
  { destination: "Pari Chowk / Knowledge Park Metro Stations", distance: "Close by" },
  { destination: "Yamuna Expressway", distance: "Direct access" },
  { destination: "Noida–Greater Noida Expressway", distance: "Connected" },
  { destination: "Jewar Noida International Airport", distance: "~35 km" },
  { destination: "IGI Airport, Delhi", distance: "~55 km" },
  { destination: "Jaypee Public School", distance: "Walking distance" },
  { destination: "Boomerang Clubhouse & Practice Range", distance: "Within the township" },
  { destination: "Jaypee Greens Golf & Spa Resort", distance: "Within the township" },
  { destination: "Integrated Sports Complex", distance: "Within the township" },
];

const educationData = [
  "Jaypee Public School — walking distance within the township",
  "Delhi Public School (DPS) — nearby",
  "Amity — nearby",
];

const healthcareData = [
  "Medicare centre within the Jaypee Greens township",
  "Hospitals in the Greater Noida neighbourhood",
  "24x7 multi-tier security and fire safety within the residences",
];

const conveniencesData = [
  "Retail shops and hypermarket",
  "Restaurants and food court",
  "Entertainment center",
  "Fitness center",
  "Co-working space",
  "Guest rooms",
  "Medicare center",
  "Ample car parking",
];

const lifestyleData = [
  "130-acre 18-hole Greg Norman Design Championship Golf Course",
  "60-acre nature park",
  "10-acre practice range",
  "Boomerang Clubhouse & practice range",
  "Jaypee Greens Golf & Spa Resort",
  "Integrated Sports Complex",
  "Scenic park with lake",
  "25-year-old green cover across the township",
];

const townshipEdgeItems = [
  "452-acre Jaypee Greens golf township — a delivered, mature address",
  "Only ~3,600 units across the township — remarkably low density for Delhi NCR",
  "130 acres of golf course, 60 acres of nature park and 10 acres of practice range",
  "25-year-old green cover with enhanced AQI versus the neighbourhood",
  "Jewar Noida International Airport approx. 35 km away via the Yamuna Expressway",
  "Direct Yamuna Expressway access and Noida–Greater Noida Expressway connectivity",
  "Pari Chowk / Knowledge Park metro stations close by",
  "Schools, hospitals, retail and daily conveniences within the township",
];

const faqData = [
  {
    question: "Where exactly is the CRC The Peridona location?",
    answer: "CRC The Peridona is located at C1, Jaypee Greens, Greater Noida, Uttar Pradesh 201310 — inside the 452-acre Jaypee Greens golf township, approximately 2 km from Pari Chowk."
  },
  {
    question: "What is the nearest metro station to CRC The Peridona?",
    answer: "The Pari Chowk and Knowledge Park metro stations are close by, keeping the Jaypee Greens township well connected to the metro network."
  },
  {
    question: "How far is the Jewar Noida International Airport from CRC The Peridona?",
    answer: "The Jewar Noida International Airport is approximately 35 km from CRC The Peridona, with direct access via the Yamuna Expressway. IGI Airport, Delhi is approximately 55 km away."
  },
  {
    question: "Which gate provides access to CRC The Peridona inside Jaypee Greens?",
    answer: "Primary access is via the Narmada Gate, located opposite the 10-acre practice range. The township is also served by the Sutlaj, Kaveri, Krishna, Baspa and Kamla gates."
  },
  {
    question: "Is CRC The Peridona well connected to Delhi and the rest of NCR?",
    answer: "Yes — the address enjoys direct access to the Yamuna Expressway and seamless connectivity to the Noida–Greater Noida Expressway, with Pari Chowk approximately 2 km away and metro stations close by."
  },
  {
    question: "What is the CRC The Peridona pin code?",
    answer: "CRC The Peridona at Jaypee Greens, Greater Noida falls under PIN code 201310."
  }
];

export default function LocationConnectivityPage() {
  return (
    <>


      {/* Main Content Section */}
      <section className="w-full bg-white py-16 px-6" id="location">
        <div className="max-w-5xl mx-auto">

          {/* Label */}
          <p className="text-center text-xs font-bold uppercase mb-4 text-[#c8922a] tracking-[0.2em]">
            Location & Connectivity
          </p>

          {/* H1 Heading */}
          <h1 className="text-center font-bold text-gray-900 mb-6 text-3xl md:text-4xl leading-tight">
            CRC The Peridona Location — Jaypee Greens, Greater Noida Connectivity & Neighbourhood Guide
          </h1>

          {/* Intro Paragraph */}
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              The CRC The Peridona location is one of the most strategically positioned luxury addresses in the entire National Capital Region. Set inside the 452-acre Jaypee Greens golf township in Greater Noida, the project sits approximately 2 km from Pari Chowk, with direct access to the Yamuna Expressway, seamless connectivity to the Noida–Greater Noida Expressway and the Jewar Noida International Airport around 35 km away. For luxury residence buyers and investors, location is not just a feature — it is the single most important factor that protects long-term value. And CRC The Peridona is built around exactly that principle.
            </p>
            <div className="mt-4">
              <a
                href="https://maps.google.com/?q=Jaypee+Greens,+Greater+Noida"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#c8922a] hover:bg-[#b07d20] text-white font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Get Driving Directions →
              </a>
            </div>
          </div>

          {/* H2 - Where Exactly */}
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mt-12 mb-4">
            Where Exactly is CRC The Peridona?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
            CRC The Peridona sits on 6.80 acres inside the 452-acre Jaypee Greens golf township, Greater Noida, Uttar Pradesh. Jaypee Greens is one of the most premium addresses of Greater Noida — a mature, delivered township built around a 130-acre 18-hole Greg Norman Design Championship Golf Course, a 60-acre nature park and a 10-acre practice range, with 25-year-old green cover throughout.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
            The address is oriented for views on every side: the golf course to the north, the 60-acre nature park to the south, the practice range and Jaypee residences to the east, and the township clubhouse and waterbodies to the west. Primary access is via the Narmada Gate, opposite the practice range — with the Sutlaj, Kaveri, Krishna, Baspa and Kamla gates serving the wider township.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-8">
            <p className="font-semibold text-gray-800">Project Address:</p>
            <p className="text-gray-600 text-sm">
              CRC The Peridona<br />
              C1, Jaypee Greens, Greater Noida<br />
              Uttar Pradesh 201310
            </p>
          </div>

          {/* H2 - Why Location Matters */}
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mt-12 mb-4">
            Why the CRC The Peridona Location at Jaypee Greens Matters
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
            When luxury buyers choose a residence, they are not just buying square footage — they are buying the address. The CRC The Peridona location delivers on every parameter that drives long-term value:
          </p>
          <ul className="space-y-2 mb-8">
            {[
              "Low-density township — only ~3,600 units across 452 acres, a rarity in Delhi NCR",
              "Mature, delivered infrastructure — Jaypee Greens is an established township with 25-year-old green cover",
              "Green on every side — 130-acre golf course, 60-acre nature park and 10-acre practice range, with enhanced AQI versus the neighbourhood",
              "Connected on all sides — metro close by, Pari Chowk ~2 km, direct Yamuna Expressway access and Noida–Greater Noida Expressway connectivity",
              "Township social infrastructure — schools, hospitals, retail, restaurants and daily conveniences within Jaypee Greens itself"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">✓</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
            For investors and end-users alike, the CRC The Peridona location at Jaypee Greens offers the rare combination of luxury, lifestyle and long-term value protection.
          </p>

          {/* Main Content with Map - Keep Original Layout */}
          <div className="flex flex-col lg:flex-row gap-12 items-start mt-8">

            {/* LEFT: TEXT */}
            <div className="flex-1 max-w-lg">

              <h3 className="font-bold text-gray-900 mb-3 text-base">
                Strategic Connectivity
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                Located at Jaypee Greens near Pari Chowk, the project enjoys
                seamless connectivity to Delhi and other NCR regions. With
                direct access to the Yamuna Expressway, metro stations close
                by and the Jewar Noida International Airport approximately
                35 km away, it offers strong future growth potential and
                everyday convenience.
              </p>

              <ul className="space-y-4">
                {locationHighlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#c8922a] mt-1">✓</span>
                    <span className="text-gray-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: MAP */}
            <div className="flex-1 w-full">
              <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md border border-[#e5dcc5]">
                <iframe
                  src="https://maps.google.com/maps?q=Jaypee+Greens,+Greater+Noida&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="CRC The Peridona Jaypee Greens Greater Noida Location Map"
                ></iframe>
              </div>
              <a
                href="https://maps.google.com/?q=Jaypee+Greens,+Greater+Noida"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-[#c8922a] hover:underline"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity Sections */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-8 text-center">
            Connectivity from CRC The Peridona, Jaypee Greens
          </h2>

          {/* Metro Connectivity */}
          <h3 className="font-bold text-gray-900 text-xl mb-3">Metro Connectivity</h3>
          <p className="text-gray-600 leading-relaxed mb-3 text-sm">
            The metro network keeps residents of CRC The Peridona within easy reach of fast urban transit.
          </p>
          <ul className="space-y-1 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Pari Chowk Metro Station — close by</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Knowledge Park Metro Station — close by</span>
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6 text-sm">
            The Jaypee Greens township itself sits near the metro station, so the everyday commute starts minutes from home — a quiet but powerful CRC The Peridona location advantage.
          </p>

          {/* Road Connectivity */}
          <h3 className="font-bold text-gray-900 text-xl mb-3">Road Connectivity</h3>
          <ul className="space-y-1 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Pari Chowk — approximately 2 km away</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Yamuna Expressway — direct access from the township</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Noida–Greater Noida Expressway — seamlessly connected, the spine of NCR connectivity</span>
            </li>
          </ul>

          {/* Air Connectivity */}
          <h3 className="font-bold text-gray-900 text-xl mb-3">Air Connectivity</h3>
          <ul className="space-y-1 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Jewar Noida International Airport — approximately 35 km via the Yamuna Expressway</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Indira Gandhi International Airport (Delhi) — approximately 55 km</span>
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6 text-sm">
            With direct Yamuna Expressway access, the drive to the Jewar Noida International Airport is a straight run — one of the strongest connectivity advantages of the CRC The Peridona location at Jaypee Greens.
          </p>

          {/* Township Access & Gates */}
          <h3 className="font-bold text-gray-900 text-xl mb-3">Township Access &amp; Gates</h3>
          <ul className="space-y-1 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Narmada Gate — primary access to CRC The Peridona, opposite the 10-acre practice range</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Additional township gates — Sutlaj, Kaveri, Krishna, Baspa and Kamla</span>
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-8 text-sm">
            Multiple gated entries across the 452-acre township keep arrival and departure smooth from every direction — while the Narmada Gate brings residents of The Peridona home in moments.
          </p>
        </div>
      </section>

      {/* Distance Snapshot Table */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-6 text-center">
            Distance Snapshot — CRC The Peridona Location
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-semibold">Destination</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-semibold">Distance / Access</th>
                </tr>
              </thead>
              <tbody>
                {distanceData.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600 text-sm">{item.destination}</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600 text-sm">{item.distance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            Education Near CRC The Peridona
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            Jaypee Greens keeps quality education close to home — starting with a reputed school inside the township itself.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {educationData.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Healthcare Section */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            Healthcare Near CRC The Peridona
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            The CRC The Peridona location places residents close to healthcare — within the township and in the wider Greater Noida neighbourhood.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {healthcareData.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Everyday Conveniences Section */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            Everyday Conveniences Inside Jaypee Greens
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            The 452-acre township is planned as a self-sufficient address — daily needs, work and leisure are all within Jaypee Greens itself, minutes from CRC The Peridona.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {conveniencesData.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            Lifestyle, Leisure &amp; Greens Around CRC The Peridona
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            The CRC The Peridona location offers a balance of premium leisure and quiet golf-township living.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {lifestyleData.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Future-Proof Section */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            Why the CRC The Peridona Location is Future-Proof
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            Most luxury addresses in India are sold on what they will be. CRC The Peridona is being launched inside a township that is already delivered and mature — and connected to the region&apos;s biggest infrastructure corridors. Here&apos;s what defines the address:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {townshipEdgeItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4 text-sm">
            A mature golf township on one side and the Yamuna Expressway–Jewar airport corridor on the other — the CRC The Peridona location sits at the centre of one of the NCR&apos;s most strategically positioned growth belts.
          </p>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="w-full bg-white py-16 px-6" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.answer}
                </p>
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
                "mainEntity": faqData.map(item => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                  }
                }))
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.crcperidona.in/location-connectivity#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.crcperidona.in/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Location & Connectivity",
                    "item": "https://www.crcperidona.in/location-connectivity"
                  }
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://www.crcperidona.in/location-connectivity#webpage",
                "url": "https://www.crcperidona.in/location-connectivity",
                "name": "CRC The Peridona Location — Jaypee Greens Greater Noida Connectivity",
                "description": "CRC The Peridona location at Jaypee Greens, Greater Noida offers seamless connectivity to Pari Chowk (~2 km), metro, Yamuna Expressway and Jewar Noida International Airport (~35 km).",
                "breadcrumb": {
                  "@id": "https://www.crcperidona.in/location-connectivity#breadcrumb"
                },
                "about": {
                  "@id": "https://www.crcperidona.in/#residence"
                },
                "mainEntity": {
                  "@id": "https://www.crcperidona.in/location-connectivity#faq"
                },
                "primaryImageOfPage": "https://www.crcperidona.in/homeHero.webp",
                "inLanguage": "en-IN"
              },
              {
                "@type": "ApartmentComplex",
                "@id": "https://www.crcperidona.in/#residence",
                "name": "CRC The Peridona",
                "description": "Ultra-luxury 4, 4.5 & 5.5 BHK residences with golf course and nature park views at Jaypee Greens, Greater Noida by CRC Group.",
                "url": "https://www.crcperidona.in/",
                "image": "https://www.crcperidona.in/homeHero.webp",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "C1, Jaypee Greens",
                  "addressLocality": "Greater Noida",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "201310",
                  "addressCountry": "IN"
                },
                "amenityFeature": [
                  { "@type": "LocationFeatureSpecification", "name": "Golf Course & Nature Park Views" },
                  { "@type": "LocationFeatureSpecification", "name": "Clubhouse — The Club" }
                ]
              },
              {
                "@type": "RealEstateAgent",
                "@id": "https://www.crcperidona.in/#organization",
                "name": "CRC The Peridona - Authorised Channel Partner",
                "url": "https://www.crcperidona.in/",
                "logo": "https://www.crcperidona.in/homeHero.webp",
                "image": "https://www.crcperidona.in/homeHero.webp",
                "telephone": "+91-7304216059",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Jaypee Greens",
                  "addressLocality": "Greater Noida",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "201310",
                  "addressCountry": "IN"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Greater Noida"
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
