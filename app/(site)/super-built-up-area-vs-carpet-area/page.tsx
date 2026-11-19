import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import GuideHero from "@/components/GuideHero";
import YouTubeFacade from "@/components/YouTubeFacade";
import PeridonaFilm from "@/components/PeridonaFilm";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import CtaRow from "@/components/CtaRow";
import SimpleTable from "@/components/SimpleTable";
import { RERA_NO, ReraLink, SALES_PHONE_HREF } from "@/components/ProjectSnapshot";
import { prose } from "@/utils/prose";
import heroImg from "@/assets-crc/vision.webp";

const pageUrl = "https://thecrcperidona.com/super-built-up-area-vs-carpet-area";
const title = "Super Built-Up Area vs Carpet Area: Reading a UP RERA Record";
const headline =
  "Super Built-Up Area vs Carpet Area: How to Read a UP RERA Record, with CRC The Peridona";
const description =
  "Super built-up area vs carpet area, shown on CRC The Peridona’s UP RERA record: carpet by tower in sq. ft., loading and price per sq. ft. on carpet.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  keywords:
    "super built-up area vs carpet area, super area vs carpet area, how to check carpet area on UP RERA, carpet area sq m to sq ft, RERA carpet area, price per sq ft on carpet area, CRC The Peridona price, CRC The Peridona floor plans",
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

const explainerVideos = [
  {
    id: "o_2FVJMorHY",
    title: "Property Explained: Carpet Area vs Built-Up Area vs Super Area",
    channel: "NDTV",
  },
  {
    id: "R3fKEhecdPw",
    title: "Carpet Area vs Built-Up Area vs Super Built-Up Area",
    channel: "MBTV by Magicbricks · in Hindi",
  },
];

const reraSteps = [
  <>
    Go to <ReraLink /> and search the project by its registration number. For CRC The Peridona it is{" "}
    {RERA_NO}.
  </>,
  <>
    Open the table of apartments. Each row gives the tower, the floor, the home type, the number of
    homes and the unit carpet area.
  </>,
  <>Note the unit. The record gives carpet area in sq. m, not sq. ft.</>,
  <>
    Convert it: <strong>sq. m × 10.764 = sq. ft.</strong>
  </>,
  <>
    Look for the balcony and terrace figures. They are disclosed separately and are not part of
    carpet.
  </>,
];

const beforeYouSign = [
  {
    name: "Match three things.",
    text: (
      <>
        The tower and floor on your cost sheet, the RERA carpet filed for that tower, and the carpet
        area written in the builder-buyer agreement should all agree.
      </>
    ),
  },
  {
    name: "Get balcony and deck areas in writing.",
    text: <>They sit outside RERA carpet and inside super area.</>,
  },
  {
    name: "Ask which area maintenance is billed on.",
    text: <>On homes this size the difference is large.</>,
  },
  {
    name: "Ask for a plan with dimensions.",
    text: (
      <>
        Start with the{" "}
        <Link href="/floor-plans" className={prose.link}>
          CRC The Peridona floor plans
        </Link>
        .
      </>
    ),
  },
  {
    name: "Ask about the final measurement.",
    text: (
      <>
        Possession is given as February 2030, so check how a change between the agreed and the final
        measured carpet is settled.
      </>
    ),
  },
];

const faqData = [
  {
    question: "What is the difference between super built-up area and carpet area?",
    answer:
      "Carpet area is the floor inside the home, including internal walls. Super built-up area, called super area in NCR, adds the outer walls, balconies and a share of common areas such as lobbies, lifts and the club.",
  },
  {
    question: "Why is the UP RERA carpet area smaller than the brochure size?",
    answer:
      "The brochure quotes super area, which includes walls, balconies and a share of common areas. The UP RERA record lists only the carpet area inside the home, so it is always the smaller number.",
  },
  {
    question: "How do I check the carpet area of a project on UP RERA?",
    answer:
      "Search the project on up-rera.in by its registration number and open the table of apartments. It lists the carpet area for each tower and floor in sq. m.",
  },
  {
    question: "How do I convert carpet area from sq. m to sq. ft.?",
    answer: "Multiply by 10.764. For example, 345.05 sq. m is about 3,714 sq. ft.",
  },
  {
    question: "What is the carpet area of a 4 BHK at CRC The Peridona?",
    answer:
      "The UP RERA record files typical 4 BHK homes at about 275 to 345 sq. m of carpet, roughly 2,962 to 3,714 sq. ft., depending on the tower. A few larger homes on select floors are filed higher.",
  },
  {
    question: "What is the average loading in NCR?",
    answer:
      "ANAROCK’s research puts it at 41% in early 2025, against 31% in 2019. No rule caps it, so it varies from project to project.",
  },
  {
    question: "How do I calculate the price per sq. ft. on carpet area?",
    answer:
      "Add up the full cost and divide by the RERA carpet area. For example, ₹12.5 crore on 3,450 sq. ft. of carpet is about ₹36,230 per sq. ft.",
  },
  {
    question: "Is a balcony part of carpet area in UP?",
    answer:
      "No. Balconies, verandahs and open terraces are outside RERA carpet and are disclosed as separate figures.",
  },
];

export default function SuperBuiltUpVsCarpetAreaPage() {
  return (
    <>
      <GuideHero
        images={[
          {
            src: heroImg,
            alt: "Measuring a floor plan with a scale ruler to check the carpet area",
          },
        ]}
        chips={["Carpet area", "Super area", "UP RERA"]}
      />
      <PageBanner
        eyebrow="Buyer’s Guide"
        title="Super Built-Up Area vs Carpet Area"
        subtitle="How to read a UP RERA record, convert the filed carpet area to sq. ft., and work out the real price per sq. ft. — with CRC The Peridona as the worked example."
      />
      <ModalWrapper />

      <section className={`${prose.section} bg-white`}>
        <div className={prose.inner}>
          <h1 className={prose.h1}>{headline}</h1>
          <p className={prose.lead}>
            A luxury brochure gives you one size. The UP RERA record gives you another, smaller one,
            in a different unit. Both describe the same home.
          </p>
          <p className={prose.p}>
            This guide explains super built-up area vs carpet area and shows how to pull the carpet
            figure from a UP RERA record yourself. The worked example is CRC The Peridona in Jaypee
            Greens, Greater Noida.
          </p>

          {/* Super Area vs Carpet Area */}
          <h2 className={`${prose.h2} mt-12`}>Super Area vs Carpet Area</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className={prose.card}>
              <h3 className={prose.h3}>Carpet area</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The floor inside the home. Rooms and internal walls count. Outer walls, shafts,
                balconies and terraces don’t.
              </p>
            </div>
            <div className={prose.card}>
              <h3 className={prose.h3}>Super area</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                NCR’s word for super built-up or saleable area. It adds the walls, the balconies and
                a share of the lobbies, lifts, club and other common areas.
              </p>
            </div>
            <div className={prose.card}>
              <h3 className={prose.h3}>Loading</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The gap between the two, shown as a percentage of carpet: (super area − carpet area)
                ÷ carpet area × 100.
              </p>
            </div>
          </div>
          <p className={prose.p}>
            Under a January 2024 order from UP RERA, apartments in the state are sold on carpet area
            only. A June 2026 advisory tells buyers to confirm that figure on the portal before they
            finalise. Brochures still quote super area, so you need both numbers.
          </p>

          <h3 className={`${prose.h3} mt-8`}>Video Explainers: Carpet, Built-Up and Super Area</h3>
          <p className={prose.p}>
            Two short explainers on how the three measures differ. They cover the national picture;
            for the UP-specific steps, follow the guide below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
            {explainerVideos.map((v) => (
              <YouTubeFacade key={v.id} id={v.id} title={v.title} channel={v.channel} />
            ))}
          </div>
          <p className={`${prose.note} mb-4`}>
            Third-party videos embedded from YouTube. The views in them are the creators’ own.
          </p>

          {/* How to Check Carpet Area on UP RERA */}
          <h2 className={`${prose.h2} mt-12`}>How to Check Carpet Area on UP RERA</h2>
          <ol className={prose.ul}>
            {reraSteps.map((step, i) => (
              <li key={i} className={prose.li}>
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FAF8F4] border border-[#e5dcc5] text-[#c8922a] text-xs font-semibold flex items-center justify-center">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          {/* RERA Carpet Area at CRC The Peridona */}
          <h2 className={`${prose.h2} mt-12`}>RERA Carpet Area at CRC The Peridona</h2>
          <p className={prose.p}>
            The record for CRC The Peridona files these carpet areas on typical floors:
          </p>
          <SimpleTable
            headers={["Tower", "Home", "RERA carpet (sq. m)", "RERA carpet (sq. ft.)"]}
            rows={[
              ["Tower 1", "5 BHK", "416.90", "about 4,488"],
              ["Tower 2", "5 BHK", "416.80", "about 4,486"],
              ["Tower 3", "4 BHK", "345.05", "about 3,714"],
              ["Tower 4", "4 BHK", "344.96", "about 3,713"],
              ["Tower 5", "4 BHK", "320.48", "about 3,450"],
              ["Tower 6", "4 BHK", "339.60", "about 3,655"],
              ["Tower 7", "4 BHK", "277.91 and 275.15", "about 2,991 and 2,962"],
            ]}
            className="mb-4"
          />
          <p className={`${prose.note} mb-6`}>
            Figures from the UP RERA record as shown on a public mirror, converted at 10.764. Check
            the live record before you rely on them.
          </p>
          <p className={prose.p}>
            A few larger homes on select floors are filed between 516 and 906 sq. m, which is about
            5,557 to 9,756 sq. ft. of carpet.
          </p>
          <p className={prose.p}>
            The brochure figure is a different measure. The 4 BHK is marketed from 4,950 sq. ft.,
            and that is super area. No home’s carpet matches that number, and none should.
          </p>

          {/* Loading in a Luxury Tower */}
          <h2 className={`${prose.h2} mt-12`}>Loading in a Luxury Tower</h2>
          <p className={prose.p}>
            ANAROCK’s research puts NCR’s average loading at 41% in early 2025, against 31% in 2019,
            and no rule caps it.
          </p>
          <p className={prose.p}>
            A tower with very few homes on each floor has little shared corridor, which pulls
            loading down. It also has fewer owners to share the lobby, lifts and amenities, which
            pulls it up. At CRC The Peridona those shared spaces include a 1.8 lakh sq. ft. club on
            three levels and a 75,500 sq. ft. rooftop.
          </p>
          <p className={prose.p}>
            So the layout alone won’t tell you the loading. Two numbers will: the super area on your
            cost sheet and the carpet area filed for your tower.
          </p>

          {/* Price per Sq. Ft. on Carpet Area */}
          <h2 className={`${prose.h2} mt-12`}>Price per Sq. Ft. on Carpet Area</h2>
          <p className={prose.p}>
            The tentative price for a 4 BHK from 4,950 sq. ft. is <strong>₹12.5 crore*</strong>{" "}
            onwards. On super area that is about ₹25,250 per sq. ft. The rate on carpet depends on
            which tower the home is in:
          </p>
          <SimpleTable
            headers={["", "If the carpet is 3,450 sq. ft.", "If the carpet is 3,714 sq. ft."]}
            rows={[
              ["Carpet as a share of 4,950 sq. ft.", "about 70%", "about 75%"],
              ["Loading", "about 43%", "about 33%"],
              ["₹12.5 crore per sq. ft. of carpet", "about ₹36,230", "about ₹33,660"],
            ]}
            className="mb-6"
          />
          <p className={prose.p}>
            This shows the method. It doesn’t say which tower the 4,950 sq. ft. home sits in. Ask
            for the tower and the RERA carpet of the exact home on your cost sheet, then run the
            same sum.
          </p>
          <p className={prose.p}>
            The base price is not the full cost. Stamp duty, registration, GST, PLC, club
            membership, maintenance security and charges, parking and power backup come on top. Add
            them before you divide. Current figures are on the{" "}
            <Link href="/price" className={prose.link}>
              CRC The Peridona price
            </Link>{" "}
            page.
          </p>

          {/* Before You Sign */}
          <h2 className={`${prose.h2} mt-12`}>Before You Sign</h2>
          <ul className={prose.ul}>
            {beforeYouSign.map((item) => (
              <li key={item.name} className={prose.li}>
                <span className={prose.tick}>✓</span>
                <span>
                  <strong>{item.name}</strong> {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CRC The Peridona */}
      <section className={`${prose.section} bg-[#FAF8F4]`}>
        <div className={prose.inner}>
          <h2 className={prose.h2}>CRC The Peridona</h2>
          <p className={prose.p}>
            <Link href="/about-the-peridona" className={prose.link}>
              CRC The Peridona
            </Link>{" "}
            has 341 residences in seven towers on 6.80 acres inside Jaypee Greens, Greater Noida.
            The developer is{" "}
            <Link href="/about-crc-group" className={prose.link}>
              CRC Group
            </Link>
            .
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <ul className={prose.ul}>
              <li className={prose.li}>
                <span className={prose.tick}>✓</span>
                <span>
                  <strong>Homes:</strong> 4, 4.5 and 5.5 BHK{" "}
                  <Link href="/residences" className={prose.link}>
                    residences
                  </Link>{" "}
                  and penthouses
                </span>
              </li>
              <li className={prose.li}>
                <span className={prose.tick}>✓</span>
                <span>
                  <strong>More:</strong>{" "}
                  <Link href="/amenities" className={prose.link}>
                    amenities
                  </Link>
                  ,{" "}
                  <Link href="/location-connectivity" className={prose.link}>
                    location and connectivity
                  </Link>
                  , and the{" "}
                  <Link
                    href="/blogs/crc-the-peridona-greater-noida-buyers-guide-2026"
                    className={prose.link}
                  >
                    CRC The Peridona buyer’s guide
                  </Link>
                </span>
              </li>
              <li className={prose.li}>
                <span className={prose.tick}>✓</span>
                <span>
                  <strong>Weighing a villa instead?</strong> Read{" "}
                  <Link href="/villa-vs-flat-jaypee-greens" className={prose.link}>
                    villa vs flat in Jaypee Greens
                  </Link>
                </span>
              </li>
            </ul>
            <PeridonaFilm />
          </div>
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
            On super built-up area vs carpet area, the UP RERA record settles the question. The
            brochure size is super area. The filed size is carpet, in sq. m, and it differs by
            tower. Convert it, match it to your cost sheet, and work out your own rate before you
            compare homes.
          </p>
          <p className={prose.p}>
            For the cost sheet, unit plans and the RERA carpet of any home at CRC The Peridona,{" "}
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
            This page comes from an authorised channel partner and not from CRC Group. Prices are
            tentative. RERA figures are taken from the public record and converted to sq. ft., and
            the price table is an illustration. Verify all areas on up-rera.in and in the
            builder-buyer agreement.
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
                publisher: {
                  "@type": "Organization",
                  name: "Real Revenue",
                  url: "https://thecrcperidona.com/",
                },
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
                    name: "Super Built-Up Area vs Carpet Area",
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
