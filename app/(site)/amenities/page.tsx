import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Amenities from "@/components/Amenities";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import heroImg from "@/assets-crc/galleryHero.webp";

export const metadata: Metadata = {
  title: "CRC The Peridona Amenities | The Club, Rooftop & Golf Township at Jaypee Greens",
  description:
    "Explore CRC The Peridona amenities — a 1.8 lakh sq ft clubhouse across 3 levels, a 75,500 sq ft rooftop, theme pools, ice rink, cinemas, and the 130-acre Greg Norman golf course at Jaypee Greens, Greater Noida.",
  alternates: { canonical: "https://www.crcperidona.in/amenities" },
};

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
                "name": "Amenities",
                "item": "https://www.crcperidona.in/amenities"
              }
            ]
          })
        }}
      />

      {/* Schema Markup - FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What amenities does CRC The Peridona offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CRC The Peridona offers The Club — a 1.8 lakh sq ft clubhouse across 3 levels with 3 theme swimming pools and waterbodies, an ice rink, 2 grand cinema theatres, grand dining and ballroom, a private dining restaurant, The Jazz Club, The Library and Tea Lounge, a world-class gymnasium, karaoke club, bowling alley, indoor flow ride, and a private observatory — plus a 75,500 sq ft rooftop with theme waterbodies, bar and lounge, jogging track, observatories, yoga deck and padel ball court."
                }
              },
              {
                "@type": "Question",
                "name": "Does CRC The Peridona have a golf course?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Peridona sits inside the 452-acre Jaypee Greens golf township, home to a 130-acre, 18-hole Greg Norman Design Championship golf course and a 10-acre practice range. Every residence gets 2-side views — the golf course on one side and the 60-acre nature park on the other."
                }
              },
              {
                "@type": "Question",
                "name": "How big is the clubhouse at CRC The Peridona?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Club at CRC The Peridona spans 1.8 lakh sq ft across 3 levels, with interiors by New York's Rockwell Group — the studio behind Nobu Hotels, The Cosmopolitan, and the Dolby Theatre."
                }
              },
              {
                "@type": "Question",
                "name": "Is there a swimming pool at CRC The Peridona?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The Club features 3 theme swimming pools and waterbodies, and the rooftop adds 3 more theme waterbodies at sky level."
                }
              },
              {
                "@type": "Question",
                "name": "What is on the rooftop at CRC The Peridona?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Rooftop spans 75,500 sq ft and stretches 300 m lengthwise, with 3 theme waterbodies, a bar and lounge, an event area with live screen, kids play area, barbeque and lounge, a jogging track, the Miyawaki Forest Observatory, The Wing Observatory, and a yoga deck with a padel ball court."
                }
              },
              {
                "@type": "Question",
                "name": "What sports and recreation facilities are available at CRC The Peridona?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Beyond the township's 18-hole golf course and 10-acre practice range, residents have a world-class gymnasium, ice rink, bowling alley, indoor flow ride, theme pools, jogging track, yoga deck, and padel ball court. The township also offers an Integrated Sports Complex and the Boomerang Clubhouse."
                }
              },
              {
                "@type": "Question",
                "name": "Do all residents get access to the amenities at CRC The Peridona?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. All 341 residences across the 7 towers get access to The Club, The Rooftop, and the Jaypee Greens township infrastructure, along with 24x7 multi-tier security and private lift lobby access."
                }
              },
              {
                "@type": "Question",
                "name": "Is CRC The Peridona a gated and secure community?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The Peridona is set inside the gated Jaypee Greens township with 24x7 multi-tier security, video door phones, and fire safety systems, with primary access via the Narmada Gate."
                }
              },
              {
                "@type": "Question",
                "name": "Who has designed the clubhouse at CRC The Peridona?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The clubhouse interiors are by Rockwell Group, New York. Rockwell Group's Greg Keffer describes the clubhouse as being about community, serenity, and a sense of belonging."
                }
              },
              {
                "@type": "Question",
                "name": "Where is CRC The Peridona located and what is nearby?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CRC The Peridona is at C1, Jaypee Greens, Greater Noida, Uttar Pradesh 201310 — about 2 km from Pari Chowk, with direct access to the Yamuna Expressway and connectivity to the Noida-Greater Noida Expressway. Jewar Noida International Airport is around 35 km away and IGI Airport Delhi around 55 km. Jaypee Public School is walking distance, with DPS and Amity nearby."
                }
              }
            ]
          })
        }}
      />

      {/* Schema Markup - Local Business / RealEstateAgent */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "@id": "https://www.crcperidona.in/#realestateagent",
            "name": "CRC The Peridona - Authorised Channel Partner",
            "description": "Authorised channel partner for CRC The Peridona, an ultra-luxury residential project by CRC Group at Jaypee Greens, Greater Noida.",
            "url": "https://www.crcperidona.in/",
            "image": "https://www.crcperidona.in/homeHero.webp",
            "telephone": "+91-7304216059",
            "priceRange": "₹12.5Cr+",
            "areaServed": {
              "@type": "Place",
              "name": "Greater Noida, Uttar Pradesh"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "C1, Jaypee Greens",
              "addressLocality": "Greater Noida",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "201310",
              "addressCountry": "IN"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "10:00",
              "closes": "19:00"
            }
          })
        }}
      />

      {/* Page Banner with Hero Image */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg}
            alt="CRC The Peridona Amenities - The Club and Rooftop at Jaypee Greens, Greater Noida"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block text-[#DCA54A] text-sm md:text-base uppercase tracking-widest font-semibold mb-3">
            Lifestyle
          </span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Amenities
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            The Club, The Rooftop, and the Jaypee Greens golf township — amenities designed for wellness, recreation, entertainment, and everyday abundance.
          </p>

        </div>
      </section>

      <ModalWrapper />
      <Amenities />

      {/* New Content Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* H1 */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            CRC The Peridona Amenities
          </h1>

          {/* Intro */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            At CRC The Peridona, amenities aren&apos;t an afterthought — they are the very foundation
            of the lifestyle. Imagine a morning round on an 18-hole Greg Norman Design Championship
            course, an afternoon at an ice rink or bowling alley inside a 1.8 lakh sq ft clubhouse,
            an evening at The Jazz Club, and a nightcap 43 floors up on a 75,500 sq ft rooftop with
            the city glittering below. That is the everyday reality The Peridona&apos;s amenities are
            designed to deliver. Live. More.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Set within the 452-acre Jaypee Greens golf township in Greater Noida, this collection of
            world-class facilities transforms a residence into a complete living experience. Whether
            you&apos;re a family seeking space and recreation, a professional craving wellness and
            convenience, or an investor evaluating long-term lifestyle value, the amenities at
            CRC The Peridona sit at the heart of what makes this address exceptional.
          </p>
        </div>
      </section>

      {/* A Lifestyle Township Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A Golf Township, Not Just a Home
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Most residential projects offer facilities. CRC The Peridona offers an ecosystem. The
            452-acre Jaypee Greens township weaves together a 130-acre golf course, a 60-acre nature
            park, a 10-acre practice range, and 25-year-old green cover — with only around 3,600
            units in the entire township, a rarity in the density of Delhi NCR.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Within it, The Peridona adds its own two worlds: The Club, 1.8 lakh sq ft across 3
            levels, and The Rooftop, 75,500 sq ft stretching 300 m across the towers. A round of
            golf, a swim in a theme pool, a film in a grand cinema theatre, and stargazing from a
            private observatory all happen within your own gated township — no commute, no
            compromise.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              href="/about-the-peridona"
              className="text-[#DCA54A] hover:underline font-medium"
            >
              About The Peridona →
            </Link>
            <Link
              href="/about-crc-group"
              className="text-[#DCA54A] hover:underline font-medium"
            >
              About CRC Group →
            </Link>
          </div>
        </div>
      </section>

      {/* The Signature Amenities Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            The Signature Amenities at The Peridona
          </h2>
          <p className="text-lg text-center max-w-4xl mx-auto text-gray-700 mb-12">
            The amenities at CRC The Peridona are organised across three realms — The Club, The
            Rooftop, and the Jaypee Greens township — each curated with global design partners to
            bring international standards to everyday life in Greater Noida.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Amenity Card 1 - Golf Course */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">18-Hole Championship Golf Course</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The township&apos;s crown jewel is its 130-acre, 18-hole Greg Norman Design
                Championship golf course, complemented by a 10-acre practice range opposite the
                Narmada Gate.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                For residents of The Peridona, the course is quite literally the northern view from
                home — every residence gets 2-side views, with the golf course on one side and the
                60-acre nature park on the other, thanks to the One Floor One Apartment* layout.
              </p>
            </div>

            {/* Amenity Card 2 - Pools */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">3 Theme Swimming Pools & Waterbodies</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The Club houses 3 theme swimming pools and waterbodies, and The Rooftop adds 3 more
                theme waterbodies at sky level — recreation, fitness laps, and family time framed by
                golf-course and nature-park views.
              </p>
            </div>

            {/* Amenity Card 3 - Clubhouse */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">The Club — 1.8 Lakh Sq Ft Across 3 Levels</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Social life at The Peridona revolves around The Club: 1.8 lakh sq ft across three
                levels, with a grand dining &amp; ballroom, private dining restaurant, The Jazz
                Club, The Library &amp; Tea Lounge, karaoke club, and more.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                Interiors are by New York&apos;s Rockwell Group — the studio behind Nobu Hotels, The
                Cosmopolitan, and the Dolby Theatre — designed, in Greg Keffer&apos;s words, around
                &ldquo;community, serenity, and a sense of belonging.&rdquo;
              </p>
            </div>

            {/* Amenity Card 4 - Ice Rink & Flow Ride */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ice Rink, Bowling Alley & Indoor Flow Ride</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Rare-in-NCR recreation lives inside The Club: an ice rink, a bowling alley, and an
                indoor flow ride bring resort-grade adventure into the community — no memberships
                elsewhere, no drives across town.
              </p>
            </div>

            {/* Amenity Card 5 - Gymnasium & Wellness */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">World-Class Gymnasium & Wellness</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A world-class gymnasium anchors fitness at The Club, while The Rooftop adds a yoga
                deck, padel ball court, and a jogging track 300 m lengthwise — complementing the
                active lifestyle the golf course and pools encourage.
              </p>
            </div>

            {/* Amenity Card 6 - Cinemas */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">2 Grand Cinema Theatres</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Two grand cinema theatres inside The Club bring the big-screen experience home —
                perfect for family movie nights and private screenings — while The Rooftop&apos;s
                event area with live screen hosts match nights under the stars.
              </p>
            </div>

            {/* Amenity Card 7 - Observatories */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Observatories Above the City</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A private observatory above the city crowns The Club, while The Rooftop offers the
                Miyawaki Forest Observatory and The Wing Observatory — vantage points ~160 m* up,
                looking out over the golf course, the nature park, and the lights of Greater Noida.
              </p>
            </div>

            {/* Amenity Card 8 - Rooftop Social */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">The Rooftop — Bar, Lounge & Barbeque</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The 75,500 sq ft rooftop realm is the social summit of The Peridona: a bar &amp;
                lounge, barbeque &amp; lounge, an event area with live screen, and a kids play area
                — everyday hospitality with a skyline address.
              </p>
            </div>

            {/* Amenity Card 9 - Security */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">24x7 Multi-Tier Security</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Underpinning every luxury is the assurance of safety. 24x7 multi-tier security,
                video door phones, fire safety systems, and private lift lobby access protect the
                towers at all hours — inside a gated township entered via the Narmada Gate. It&apos;s
                the foundation that allows every other amenity to be enjoyed freely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Stand Apart Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why The Peridona&apos;s Amenities Stand Apart
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            What truly distinguishes CRC The Peridona is the calibre of its partnerships. Rather
            than generic in-house facilities, CRC Group assembled a global roster — Killa Design as
            principal architect, Gensler as resident architect, Rockwell Group for the clubhouse
            interiors, SWA Group for landscape, and L&apos;Observatoire for lighting. Each partner
            imports international standards directly into daily life.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Layer onto this the rarity of an 18-hole championship golf course at your doorstep, a
            1.8 lakh sq ft clubhouse, and a 75,500 sq ft rooftop, and the result is a lifestyle
            proposition that is difficult to replicate anywhere else in the region. For investors,
            these amenities are also a powerful driver of long-term value.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              href="/price"
              className="text-[#DCA54A] hover:underline font-medium"
            >
              View Pricing →
            </Link>
            <Link
              href="/residences"
              className="text-[#DCA54A] hover:underline font-medium"
            >
              Residences & Configurations →
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Amenities That Complement an Unbeatable Location
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            The Peridona&apos;s amenities are made even more valuable by where they sit — Pari Chowk
            is around 2 km away, with direct access to the Yamuna Expressway and connectivity to the
            Noida–Greater Noida Expressway; Jewar Noida International Airport is ~35 km and IGI
            Airport Delhi ~55 km. Jaypee Public School is walking distance, with DPS and Amity,
            hospitals, retail, and the Jaypee Greens Golf &amp; Spa Resort all within the township
            ecosystem. Together, the internal amenities and external social infrastructure create a
            genuinely self-sufficient lifestyle.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/location-connectivity"
              className="px-6 py-3 bg-[#DCA54A] text-white rounded-lg hover:bg-[#c9953a] transition-colors font-medium"
            >
              View Location & Connectivity
            </Link>
            <Link
              href="/floor-plans"
              className="px-6 py-3 border-2 border-[#DCA54A] text-[#DCA54A] rounded-lg hover:bg-[#DCA54A] hover:text-white transition-colors font-medium"
            >
              Explore Floor Plans
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20  bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Experience The Peridona Lifestyle
          </h2>
          <p className="text-lg md:text-xl text-black mb-6 leading-relaxed">
            From an 18-hole championship golf course and a 1.8 lakh sq ft clubhouse to theme pools,
            an ice rink, grand cinema theatres, and a 75,500 sq ft rooftop with its own
            observatories, every element of the CRC The Peridona amenities is designed to elevate
            everyday living. This is more than a collection of facilities — it is an invitation to
            Live. More., surrounded by greenery, comfort, and the vision of CRC Group.
          </p>
          <p className="text-lg text-black mb-8 leading-relaxed">
            Make The Peridona your address and step into a community built around wellness,
            recreation, and uncompromising luxury at Jaypee Greens, Greater Noida. Schedule a
            private preview at the experience center.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="px-8 py-4 bg-[#DCA54A] text-white font-semibold rounded-lg hover:bg-[#c9953a] transition-colors text-lg"
            >
              Enquire Now
            </Link>
            <Link
              href="/blogs"
              className="px-8 py-4 border-2 border-[#DCA54A] text-[#DCA54A] font-semibold rounded-lg hover:bg-[#DCA54A] hover:text-white transition-colors text-lg"
            >
              Blog & News
            </Link>
          </div>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>

      {/* Your Existing Amenities Component */}

    </>
  );
}
