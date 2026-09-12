import type { Metadata } from "next";
import Image from "next/image";
import Amenities from "@/components/Amenities";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import CtaRow from "@/components/CtaRow";
import ProjectSnapshot, { RERA_NO, ReraLink } from "@/components/ProjectSnapshot";
import { prose } from "@/utils/prose";
import heroImg from "@/assets-crc/galleryHero.webp";

export const metadata: Metadata = {
  title: "CRC The Peridona Amenities | 1.8 Lakh Sq Ft Club & Rooftop Skydeck",
  description:
    "Inside the amenities at CRC The Peridona, Jaypee Greens — a 1.8 lakh sq ft Rockwell Group clubhouse, a 75,500 sq ft rooftop skydeck, ice rink, theatres and observatories.",
  alternates: { canonical: "https://www.crcperidona.in/amenities" },
};

const clubGroups = [
  {
    title: "Water & Recreation",
    items: [
      "Three theme swimming pools and waterbodies",
      "Ice rink",
      "Indoor flow ride",
      "Bowling alley",
      "World-class gymnasium",
    ],
  },
  {
    title: "Entertainment",
    items: [
      "Two grand cinema theatres",
      "The Jazz Club",
      "Karaoke club",
      "Private observatory above the city",
    ],
  },
  {
    title: "Dining & Gathering",
    items: ["Grand dining", "Ballroom", "Private dining restaurant", "The Library", "Tea Lounge"],
  },
];

const rooftopItems = [
  "Rooftop bar and lounge",
  "Barbeque and event area with live screen",
  "Jogging track",
  "Yoga deck",
  "Padel ball court",
  "Miyawaki Forest Observatory",
  "The Wing Observatory",
];

const townshipItems = [
  <><strong>130-acre, 18-hole Greg Norman Design championship golf course</strong></>,
  <><strong>60-acre nature park</strong></>,
  <><strong>10-acre golf practice range</strong></>,
  "25-year-old mature green cover with improved air quality",
  "Schools, hospitals and retail within the township",
];

const faqData = [
  {
    question: "What amenities does CRC The Peridona offer?",
    answer:
      "CRC The Peridona offers The Club — a 1.8 lakh sq ft clubhouse across three levels designed by Rockwell Group, with three theme swimming pools and waterbodies, an ice rink, indoor flow ride, bowling alley, world-class gymnasium, two grand cinema theatres, The Jazz Club, karaoke club, a private observatory, grand dining, ballroom, private dining restaurant, The Library and Tea Lounge — plus The Rooftop, a 75,500 sq ft skydeck with a bar and lounge, barbeque and event area, jogging track, yoga deck, padel ball court and two observatories.",
  },
  {
    question: "Does CRC The Peridona have a golf course?",
    answer:
      "The Peridona sits inside the 452-acre Jaypee Greens golf township, home to a 130-acre, 18-hole Greg Norman Design championship golf course and a 10-acre golf practice range. Every residence gets 2-side views — the golf course on one side and the 60-acre nature park on the other.",
  },
  {
    question: "How big is the clubhouse at CRC The Peridona?",
    answer:
      "The Club at CRC The Peridona spans 1.8 lakh sq ft across three levels, with interiors by New York's Rockwell Group.",
  },
  {
    question: "What is on the rooftop at CRC The Peridona?",
    answer:
      "The Rooftop is a 75,500 sq ft skydeck running roughly 300 metres lengthwise across the top of the development, around 160 metres above the golf course, with a rooftop bar and lounge, barbeque and event area with live screen, jogging track, yoga deck, padel ball court, the Miyawaki Forest Observatory and The Wing Observatory.",
  },
  {
    question: "Do all residents get access to the amenities at CRC The Peridona?",
    answer:
      "Yes. All 341 residences across the 7 towers share The Club, The Rooftop and the Jaypee Greens township infrastructure, so the ratio of amenity space to households is unusually high.",
  },
];

export default function AmenitiesPage() {
  return (
    <>
      {/* Schema Markup - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.crcperidona.in/" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Amenities",
                item: "https://www.crcperidona.in/amenities",
              },
            ],
          }),
        }}
      />

      {/* Schema Markup - FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />

      {/* Schema Markup - RealEstateAgent */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "@id": "https://www.crcperidona.in/#realestateagent",
            name: "CRC The Peridona - Authorised Channel Partner",
            description:
              "Authorised channel partner for CRC The Peridona, an ultra-luxury residential project by CRC Group at Jaypee Greens, Greater Noida.",
            url: "https://www.crcperidona.in/",
            image: "https://www.crcperidona.in/homeHero.webp",
            telephone: "+91-7304216059",
            priceRange: "₹12.5Cr+",
            areaServed: { "@type": "Place", name: "Greater Noida, Uttar Pradesh" },
            address: {
              "@type": "PostalAddress",
              streetAddress: "C1, Jaypee Greens",
              addressLocality: "Greater Noida",
              addressRegion: "Uttar Pradesh",
              postalCode: "201310",
              addressCountry: "IN",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "10:00",
              closes: "19:00",
            },
          }),
        }}
      />

      {/* Page Banner with Hero Image */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg}
            alt="CRC The Peridona Amenities - The Club and The Rooftop at Jaypee Greens, Greater Noida"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block text-[#DCA54A] text-sm md:text-base uppercase tracking-widest font-semibold mb-3">
            Lifestyle
          </span>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">Amenities</p>
          <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            A 1.8 lakh sq ft Rockwell Group clubhouse at ground level. A 75,500 sq ft skydeck in the
            air. Between them, an amenity footprint larger than many entire projects.
          </p>
        </div>
      </section>

      <ModalWrapper />
      <Amenities />

      {/* Intro */}
      <section className={`${prose.section} bg-white`}>
        <div className={prose.inner}>
          <h1 className={prose.h1}>CRC The Peridona Amenities — The Club &amp; The Rooftop</h1>
          <p className={prose.lead}>
            Leisure at The Peridona happens in two places, and they could not be more different from
            each other.
          </p>
          <p className={prose.p}>
            <strong>The Club</strong> sits at ground level — 1.8 lakh square feet across three
            floors, designed by Rockwell Group. <strong>The Rooftop</strong> sits 300 metres in the
            air — a 75,500 sq ft skydeck running the length of the towers, looking out over the
            Jaypee Greens golf township.
          </p>
          <p className={prose.p}>
            One is interior, programmed and social. The other is open, elemental and quiet. Between
            them, the amenity footprint here is larger than many entire residential projects in
            Greater Noida.
          </p>
        </div>
      </section>

      {/* The Club */}
      <section className={`${prose.section} bg-[#FAF8F4]`}>
        <div className={prose.inner}>
          <h2 className={prose.h2}>The Club — 1.8 Lakh Sq Ft, Three Levels</h2>
          <p className={prose.p}>
            Rockwell Group’s background is hospitality — hotels, restaurants, theatres — and it shows
            in how the clubhouse is organised. Spaces flow into one another the way they do in a
            good hotel rather than sitting as separate rooms off a corridor.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {clubGroups.map((group) => (
              <div key={group.title} className={prose.cardWhite}>
                <h3 className={prose.h3}>{group.title}</h3>
                <ul className="space-y-2 mt-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-[#c8922a] mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className={prose.p}>
            The ice rink and indoor flow ride are the outliers here. Neither is standard in Indian
            residential development at any price, and both are the kind of facility that changes
            what a weekend at home looks like — particularly for families with children who
            currently drive somewhere else for it.
          </p>
        </div>
      </section>

      {/* The Rooftop */}
      <section className={`${prose.section} bg-white`}>
        <div className={prose.inner}>
          <h2 className={prose.h2}>The Rooftop — 75,500 Sq Ft, 300 Metres Up</h2>
          <p className={prose.p}>
            The skydeck runs roughly 300 metres lengthwise across the top of the development, around
            160 metres above the golf course.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {rooftopItems.map((item) => (
              <li key={item} className={`${prose.card} flex items-start gap-2 text-gray-700 text-sm`}>
                <span className="text-[#c8922a] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className={prose.p}>
            A jogging track at this height is a genuinely different experience from one at ground
            level — you run with the 130-acre Greg Norman championship course on one side and the
            60-acre nature park on the other, with none of the traffic, dust or interruption of a
            street-level circuit.
          </p>
          <p className={prose.p}>
            The two observatories are the quiet end of the programme. The Miyawaki Forest
            Observatory looks into dense native planting; The Wing Observatory looks outward across
            the township.
          </p>
        </div>
      </section>

      {/* What the Township Adds */}
      <section className={`${prose.section} bg-[#FAF8F4]`}>
        <div className={prose.inner}>
          <h2 className={prose.h2}>What the Township Adds</h2>
          <p className={prose.p}>
            Residents also sit inside the wider amenity set of the 452-acre Jaypee Greens estate:
          </p>
          <ul className={prose.ul}>
            {townshipItems.map((item, i) => (
              <li key={i} className={prose.li}>
                <span className={prose.tick}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className={prose.p}>
            Very few projects can list both a private clubhouse of this scale and a championship
            golf course that already exists rather than one still being planned.
          </p>
        </div>
      </section>

      {/* Why the Scale Matters */}
      <section className={`${prose.section} bg-white`}>
        <div className={prose.inner}>
          <h2 className={prose.h2}>Why the Scale Matters</h2>
          <p className={prose.p}>
            There is a practical reason to look at the numbers rather than the list.
          </p>
          <p className={prose.p}>
            With only <strong>341 residences</strong> sharing 1.8 lakh sq ft of clubhouse and 75,500
            sq ft of rooftop, the ratio of amenity space to households is unusually high. That is
            the difference between a facility you use and a facility you queue for. A pool shared by
            341 homes behaves nothing like the same pool shared by 2,000.
          </p>
          <p className={`${prose.p} mb-12`}>
            CRC’s brief for the project was two words — <strong>Live. More.</strong> — and the
            amenity programme is the clearest place that shows up.
          </p>

          <ProjectSnapshot
            rows={[
              ["Location", "C1, Jaypee Greens, Greater Noida 201310, Uttar Pradesh"],
              ["Configuration", "4, 4.5 & 5.5 BHK from 4,950 sq ft"],
              ["Scale", "6.80 acres · 7 towers · 43 floors · 341 residences"],
              ["Design", "Killa Design, Gensler, Rockwell Group, SWA"],
              ["Tentative price", "₹12.5 Cr* onwards"],
              [
                "UP RERA No.",
                <>
                  {RERA_NO} · <ReraLink />
                </>,
              ],
            ]}
          />

          <h2 className={`${prose.h2} mt-12`}>See the Full Amenity Plan</h2>
          <p className={prose.p}>
            The brochure carries the complete Club and Rooftop layouts, level-by-level. Our team can
            also arrange a walkthrough of the experience centre.
          </p>
          <CtaRow
            items={[
              { label: "Download Brochure", brochure: true },
              { label: "Book a Site Visit", href: "/contact-us" },
              { label: "Contact Us", href: "/contact-us" },
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
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
    </>
  );
}
