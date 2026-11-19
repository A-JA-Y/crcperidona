import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import GuideHero from "@/components/GuideHero";
import YouTubeFacade from "@/components/YouTubeFacade";
import PeridonaFilm from "@/components/PeridonaFilm";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import CtaRow from "@/components/CtaRow";
import { RERA_NO, ReraLink, SALES_PHONE_HREF } from "@/components/ProjectSnapshot";
import { prose } from "@/utils/prose";
import villaImg from "@/assets-crc/neighborhood.webp";
import terraceImg from "@/assets-crc/peridona-terrace-golf-view.webp";

const pageUrl = "https://thecrcperidona.com/villa-vs-flat-jaypee-greens";
const title = "Villa vs Flat in Jaypee Greens: Golf Villa or Sky Residence?";
const headline = "Villa vs Flat in Jaypee Greens: Golf Villa or One-Floor Sky Residence?";
const description =
  "Villa vs flat at the luxury end: compare Jaypee Greens golf villas with a one-apartment-per-floor sky residence on price, privacy, upkeep and resale.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  keywords:
    "villa vs flat, villa vs flat in Jaypee Greens, villa or flat which is better, difference between villa and flat, luxury villa vs apartment, villas in Jaypee Greens, one apartment per floor, luxury apartments in Greater Noida, CRC The Peridona",
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "CRC The Peridona",
    images: [{ url: "https://thecrcperidona.com/homeHero.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://thecrcperidona.com/homeHero.webp"],
  },
};

const tourVideos = [
  {
    id: "NZupopdpat8",
    title: "Jaypee Greens Most Premium & Luxurious Villas at Greater Noida",
    channel: "Investor’s Monopoly",
  },
  {
    id: "ouKGoPFc_Pw",
    title: "Inside Jaypee Greens Greater Noida: Where Golf-Course Living Meets Luxury",
    channel: "Investor’s Monopoly",
  },
];

const villaPrices = [
  "An established villa project listed at ₹14.04–16.2 crore, at a basic rate of about ₹27,000 per sq. ft.",
  "A 5,200 sq. ft. villa listed at ₹16.92 crore.",
  "Older town-home villas listed at about ₹9.98–10.75 crore.",
];

const chooseVilla = [
  "You want land, a private garden and your own gate",
  "You need a home you can move into now",
  "You enjoy customising and maintaining a large house",
  "Your family wants separate floors rather than one level",
];

const chooseSky = [
  "You want villa-level privacy without running a villa",
  "You’d rather look out over the golf course than over a lane",
  "You want a large modern club and new construction",
  "You travel often and want a home you can lock and leave",
];

const faqData = [
  {
    question: "Villa vs flat: which is better for a luxury buyer in Jaypee Greens?",
    answer:
      "A villa suits buyers who want land, a garden and a ready home now. A one-apartment-per-floor sky residence suits buyers who want villa-level privacy, golf views, a large club and lock-and-leave living.",
  },
  {
    question: "What do villas in Jaypee Greens cost?",
    answer:
      "Listings range from about ₹9.98–10.75 crore for older town-home villas to ₹14.04–16.2 crore in an established villa project, with one 5,200 sq. ft. villa listed at ₹16.92 crore.",
  },
  {
    question: "What is the price of CRC The Peridona?",
    answer:
      "4 BHK residences start from 4,950 sq. ft. at a tentative ₹12.5 crore* onwards. Larger homes and penthouses are priced on request.",
  },
  {
    question: "What does “one apartment per floor” mean at CRC The Peridona?",
    answer:
      "Each floor has a single residence, with a private lift lobby that opens straight into the home and no shared corridor. The layout is subject to the approved building plan.",
  },
  {
    question: "When is possession at CRC The Peridona?",
    answer: "Possession is scheduled for February 2030.",
  },
  {
    question: "Which is easier to maintain at this level, a villa or a flat?",
    answer:
      "A flat. Facility management runs the building and security is centralised. A large villa needs its own staff and ongoing repairs.",
  },
  {
    question: "Is CRC The Peridona RERA registered?",
    answer: "Yes, under UP RERA number UPRERAPRJ298067/05/2025. You can verify it on up-rera.in.",
  },
  {
    question: "How far is CRC The Peridona from Pari Chowk and Jewar airport?",
    answer:
      "Pari Chowk is about 2 km away, and Noida International Airport at Jewar is about 35 km.",
  },
];

const externalLink = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={prose.link}>
    {label}
  </a>
);

export default function VillaVsFlatPage() {
  return (
    <>
      <GuideHero
        vs
        images={[
          {
            src: villaImg,
            alt: "Luxury villa with a private garden and pool",
            label: "Golf Villa",
          },
          {
            src: terraceImg,
            alt: "Render from the CRC The Peridona film: a private terrace overlooking the Jaypee Greens golf course",
            label: "Sky Residence",
          },
        ]}
      />
      <PageBanner
        eyebrow="Buyer’s Guide"
        title="Villa vs Flat in Jaypee Greens"
        subtitle="Golf villa or one-apartment-per-floor sky residence? A side-by-side look at price, privacy, views, upkeep, timing and resale for buyers at ₹10 crore and above."
      />
      <ModalWrapper />

      <section className={`${prose.section} bg-white`}>
        <div className={prose.inner}>
          <h1 className={prose.h1}>{headline}</h1>
          <p className={prose.lead}>
            Above ₹10 crore, the villa vs flat question stops being about budget. At this level you
            can afford either, so the choice comes down to privacy, land, views, upkeep, and how
            soon you want to move in.
          </p>
          <p className={prose.p}>
            Jaypee Greens is one of the few places in NCR where both options sit inside the same
            golf township: established villa enclaves on one side, and new towers with a single home
            on each floor on the other.
          </p>
          <p className={prose.p}>
            This guide settles villa vs flat in Jaypee Greens for buyers at the top end. If you’re
            still asking “villa or flat, which is better?”, the answer here depends less on cost and
            more on how you want to live.
          </p>

          {/* Difference Between Villa and Flat */}
          <h2 className={`${prose.h2} mt-12`}>
            Difference Between Villa and Flat at the Luxury End
          </h2>
          <p className={prose.p}>
            In the mass market, the difference between villa and flat is simple: land and space
            versus convenience. At the luxury end the line blurs. A villa still gives you land, a
            private garden and your own gate. But a well-designed apartment can now offer much of
            the privacy people used to buy villas for.
          </p>
          <p className={prose.p}>
            At CRC The Peridona, each home has a private lift lobby that opens straight into the
            residence, with no shared corridor or landing. With only one home on each floor, the
            only neighbours you share a wall with are above and below you.
          </p>
          <p className={prose.p}>
            So the luxury villa vs apartment decision now comes down to the ground versus the sky.
            Do you want a lawn at your doorstep, or the golf course spread out below you?
          </p>

          {/* Price */}
          <h2 className={`${prose.h2} mt-12`}>Price</h2>
          <p className={prose.p}>
            At this level, villa prices in the township vary widely with age and size. Recent
            listings for villas in Jaypee Greens include:
          </p>
          <ul className={prose.ul}>
            {villaPrices.map((item) => (
              <li key={item} className={prose.li}>
                <span className={prose.tick}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className={prose.p}>
            At neighbouring{" "}
            {externalLink(
              "https://www.godrejgolflink.in/villas-configurations",
              "Godrej Golf Links",
            )}
            , a 4 BHK villa on a 220 sq. yd plot is listed at about ₹7.50 crore, and a 5 BHK on 300
            sq. yd at about ₹14 crore.
          </p>
          <p className={prose.p}>
            At CRC The Peridona, 4 BHK residences start from 4,950 sq. ft. at a tentative{" "}
            <strong>₹12.5 crore*</strong> onwards. Prices for larger homes and penthouses are on
            request. On the stated area, that works out to roughly ₹25,000 per sq. ft., close to the
            villa rate above. The two are measured differently, though, so ask for the carpet area
            on both before you compare — our guide to{" "}
            <Link href="/super-built-up-area-vs-carpet-area" className={prose.link}>
              super built-up area vs carpet area
            </Link>{" "}
            shows how.
          </p>
          <p className={prose.p}>
            The base price excludes registration, stamp duty, GST and other statutory charges. PLC,
            club membership, maintenance security, parking and power backup are charged on top. See
            the{" "}
            <Link href="/price" className={prose.link}>
              price
            </Link>{" "}
            page for the details.
          </p>

          {/* Privacy */}
          <h2 className={`${prose.h2} mt-12`}>Privacy</h2>
          <p className={prose.p}>
            A villa gives you privacy you can see: a gate, a garden, and nobody above or below you.
            A one-apartment-per-floor home gives you privacy in a different way. The lift opens only
            into your home, there’s no common corridor to share, and the height keeps you away from
            the street. If what bothers you about flats is neighbours across the landing, one
            apartment per floor takes that problem away.
          </p>

          {/* Views and Setting */}
          <h2 className={`${prose.h2} mt-12`}>Views and Setting</h2>
          <p className={prose.p}>
            Both formats share one of the best settings in NCR. Jaypee Greens is a 452-acre golf
            township with 25-year-old green cover, built around a 130-acre, 18-hole championship
            course designed by Greg Norman, plus a 10-acre practice range.
          </p>
          <p className={prose.p}>
            The difference is the view. A villa looks onto its own garden and the lane outside. At
            CRC The Peridona, homes face the golf course on one side and the 60-acre nature park on
            the other. Compare the{" "}
            <Link href="/floor-plans" className={prose.link}>
              floor plans
            </Link>{" "}
            to see how each layout uses those two views.
          </p>

          <h3 className={`${prose.h3} mt-8`}>Tour Jaypee Greens: Villas and Golf-Course Living</h3>
          <p className={prose.p}>
            See the township’s villa enclaves and the golf-course setting before you visit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
            {tourVideos.map((v) => (
              <YouTubeFacade key={v.id} id={v.id} title={v.title} channel={v.channel} />
            ))}
          </div>
          <p className={`${prose.note} mb-4`}>
            Third-party videos embedded from YouTube. The views in them are the creators’ own.
          </p>

          {/* Amenities */}
          <h2 className={`${prose.h2} mt-12`}>Amenities</h2>
          <p className={prose.p}>
            Villa enclaves usually share a community club, and these vary a lot by project and age.
            A new luxury tower can build amenities at a much bigger scale. At CRC The Peridona, The
            Club is 1.8 lakh sq. ft. across three levels, with interiors by Rockwell Group, and
            there is a 75,500 sq. ft. rooftop skydeck. See the full{" "}
            <Link href="/amenities" className={prose.link}>
              amenities
            </Link>{" "}
            list.
          </p>

          {/* Upkeep and Staff */}
          <h2 className={`${prose.h2} mt-12`}>Upkeep and Staff</h2>
          <p className={prose.p}>
            A large villa runs like a small estate. You’ll need a gardener, housekeeping, often a
            guard, and someone to look after the roof, the façade, the pumps and the pool if you
            have one. Daily life also spreads across several floors.
          </p>
          <p className={prose.p}>
            A sky residence is lock-and-leave. Facility management looks after the building,
            security is centralised, and everything is on one level with a private lift. For NRIs,
            frequent travellers and families with elderly parents, that difference often decides it.
          </p>

          {/* Timing */}
          <h2 className={`${prose.h2} mt-12`}>Timing</h2>
          <p className={prose.p}>
            Most villas in the township are ready homes you can buy today. Some of the listed villa
            projects date back to 2009, and one resale villa is seven years old. CRC The Peridona’s
            possession is set for February 2030. If you want to move in this year, a villa wins on
            timing. If you’d rather have a new building with today’s specifications, you’ll have to
            wait.
          </p>

          {/* Villa vs Flat Investment */}
          <h2 className={`${prose.h2} mt-12`}>Villa vs Flat Investment</h2>
          <p className={prose.p}>
            At ₹10 crore and above, the pool of buyers is small for both villas and luxury flats, so
            how easily you can sell later matters as much as price growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className={prose.card}>
              <h3 className={prose.h3}>Villas</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Their value is tied to land in an established township, and that land is limited.
                Older villas, though, need upgrades before they look as good as new construction.
              </p>
            </div>
            <div className={prose.card}>
              <h3 className={prose.h3}>Sky residences</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A one-per-floor home in a new branded tower is a rare product, and with only 341
                homes across seven towers, supply is limited. Its value depends on the developer’s
                delivery and on how this luxury segment develops in Greater Noida.
              </p>
            </div>
            <div className={prose.card}>
              <h3 className={prose.h3}>Location</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Both benefit from the same location. Pari Chowk is about 2 km away and Noida
                International Airport is about 35 km.
              </p>
            </div>
          </div>
          <p className={prose.p}>
            Read our take on{" "}
            <Link
              href="/blogs/jewar-airport-crc-the-peridona-investment-2026"
              className={prose.link}
            >
              Jewar airport and the rise of ultra-luxury homes
            </Link>
            .
          </p>

          {/* Choose a Villa / Sky Residence */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-6">
            <div className={prose.cardWhite}>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Choose a Villa If
              </h2>
              <ul className="space-y-2">
                {chooseVilla.map((item) => (
                  <li key={item} className={prose.li}>
                    <span className={prose.tick}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={prose.cardWhite}>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Choose a Sky Residence If
              </h2>
              <ul className="space-y-2">
                {chooseSky.map((item) => (
                  <li key={item} className={prose.li}>
                    <span className={prose.tick}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Checks Before You Buy */}
          <h2 className={`${prose.h2} mt-12`}>Checks Before You Buy</h2>
          <ul className={prose.ul}>
            <li className={prose.li}>
              <span className={prose.tick}>•</span>
              <span>
                <strong>RERA:</strong> Verify CRC The Peridona’s UP RERA number, {RERA_NO}, on{" "}
                <ReraLink />.
              </span>
            </li>
            <li className={prose.li}>
              <span className={prose.tick}>•</span>
              <span>
                <strong>Approved plan:</strong> The “one apartment per floor” layout is marked as
                indicative and subject to the approved building plan, so confirm it in the plan and
                in your agreement.
              </span>
            </li>
            <li className={prose.li}>
              <span className={prose.tick}>•</span>
              <span>
                <strong>Carpet area:</strong> The site gives only total areas, so ask for the carpet
                area in writing.
              </span>
            </li>
            <li className={prose.li}>
              <span className={prose.tick}>•</span>
              <span>
                <strong>Cost sheet:</strong> Get the full cost sheet, with PLC, club, parking and
                power backup charges added up.
              </span>
            </li>
            <li className={prose.li}>
              <span className={prose.tick}>•</span>
              <span>
                <strong>For a villa:</strong> Check the lease deed, the transfer terms, the age of
                the structure and what the club membership includes.
              </span>
            </li>
          </ul>
          <p className={prose.p}>
            Our{" "}
            <Link
              href="/blogs/crc-the-peridona-greater-noida-buyers-guide-2026"
              className={prose.link}
            >
              complete buyer’s guide
            </Link>{" "}
            covers these checks in more detail.
          </p>
        </div>
      </section>

      {/* CRC The Peridona */}
      <section className={`${prose.section} bg-[#FAF8F4]`}>
        <div className={prose.inner}>
          <h2 className={prose.h2}>CRC The Peridona</h2>
          <p className={prose.p}>
            CRC The Peridona is a{" "}
            <Link href="/about-crc-group" className={prose.link}>
              CRC Group
            </Link>{" "}
            project on 6.80 acres inside Jaypee Greens, Greater Noida, developed with Jaiprakash
            Associates Ltd as the land partner. It’s one of the most exclusive addresses for luxury
            apartments in Greater Noida: seven towers of 43 floors each, about 160 m tall, with 341
            residences in total.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-6">
            <ul className={prose.ul}>
              <li className={prose.li}>
                <span className={prose.tick}>✓</span>
                <span>
                  <strong>Homes:</strong>{" "}
                  <Link href="/residences" className={prose.link}>
                    4, 4.5 and 5.5 BHK residences and penthouses
                  </Link>
                </span>
              </li>
              <li className={prose.li}>
                <span className={prose.tick}>✓</span>
                <span>
                  <strong>Possession:</strong> February 2030
                </span>
              </li>
              <li className={prose.li}>
                <span className={prose.tick}>✓</span>
                <span>
                  <strong>RERA:</strong> {RERA_NO}
                </span>
              </li>
              <li className={prose.li}>
                <span className={prose.tick}>✓</span>
                <span>
                  <strong>More:</strong>{" "}
                  <Link href="/about-the-peridona" className={prose.link}>
                    About The Peridona
                  </Link>{" "}
                  and{" "}
                  <Link href="/location-connectivity" className={prose.link}>
                    location and connectivity
                  </Link>
                </span>
              </li>
            </ul>
            <PeridonaFilm />
          </div>

          <h2 className={`${prose.h2} mt-12`}>If a Villa Suits You Better</h2>
          <ul className={prose.ul}>
            <li className={prose.li}>
              <span className={prose.tick}>•</span>
              <span>
                {externalLink(
                  "https://www.godrejgolflink.in/villas-configurations",
                  "Godrej Golf Links villas",
                )}
                : 4 and 5 BHK villas near Pari Chowk
              </span>
            </li>
            <li className={prose.li}>
              <span className={prose.tick}>•</span>
              <span>
                {externalLink("https://thelegacybygaurs.com/", "Legacy by Gaurs")}: four towers and
                20 Legacy Villas in Jaypee Greens
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${prose.section} bg-white`} id="faq">
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

      {/* Conclusion */}
      <section className={`${prose.section} bg-[#FAF8F4]`}>
        <div className={prose.inner}>
          <h2 className={prose.h2}>Conclusion</h2>
          <p className={prose.p}>
            At the luxury end, villa vs flat isn’t about which one is cheaper. A golf villa gives
            you land, a garden and a home you can move into now, but it needs staff and upkeep. A
            one-apartment-per-floor sky residence gives you villa-level privacy, golf course views
            and a large modern club with very little upkeep, but you’ll wait until 2030 for the
            keys. Pick the trade-off that fits the next twenty years, not just the next two.
          </p>
          <p className={prose.p}>
            To request the full cost sheet for CRC The Peridona,{" "}
            <Link href="/contact-us" className={prose.link}>
              contact us
            </Link>{" "}
            or call{" "}
            <a href={SALES_PHONE_HREF} className={prose.link}>
              +91 73042 16059
            </a>
            .
          </p>
          <CtaRow
            className="mb-8"
            items={[
              { label: "Request Cost Sheet", href: "/contact-us" },
              { label: "Download Brochure", brochure: true },
              { label: "Call +91 73042 16059", href: SALES_PHONE_HREF },
            ]}
          />
          <p className={prose.note}>
            This website is not the official website of CRC The Peridona or CRC Group. It belongs to
            an authorised channel partner and is for information and marketing purposes only. Prices
            are tentative and indicative.
          </p>
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
                "@type": "Article",
                "@id": `${pageUrl}#article`,
                headline,
                description,
                url: pageUrl,
                mainEntityOfPage: pageUrl,
                image: "https://thecrcperidona.com/homeHero.webp",
                datePublished: "2026-11-18",
                dateModified: "2026-11-18",
                inLanguage: "en-IN",
                author: { "@type": "Organization", name: "Real Revenue" },
                publisher: { "@type": "Organization", name: "Real Revenue" },
              },
              {
                "@type": "FAQPage",
                "@id": `${pageUrl}#faq`,
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
                "@id": `${pageUrl}#breadcrumb`,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://thecrcperidona.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Villa vs Flat in Jaypee Greens",
                    item: pageUrl,
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
