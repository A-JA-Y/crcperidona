import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import AboutProject from "@/components/AboutProject";
import JaypeeTownship from "@/components/JaypeeTownship";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import CtaRow from "@/components/CtaRow";
import SimpleTable from "@/components/SimpleTable";
import { RERA_NO, ReraLink } from "@/components/ProjectSnapshot";
import { prose } from "@/utils/prose";
import visionImg from "@/assets-crc/vision.webp";
import clubhouseImg from "@/assets-crc/clubhouse.webp";

export const metadata: Metadata = {
  title: "About CRC The Peridona | The Project, Vision & Developer",
  description:
    "The story behind CRC The Peridona in Jaypee Greens, Greater Noida: 341 residences, seven towers, a global design team, and CRC Group's move into ultra luxury.",
  alternates: { canonical: "https://www.crcperidona.in/about-the-peridona" },
};

const numbers: [string, string][] = [
  ["Land parcel", "7 acres"],
  ["Total development", "3.1 million sq ft"],
  ["Saleable area", "2.1 million sq ft"],
  ["Towers", "7"],
  ["Height", "Approx. 42 floors / 160 m"],
  ["Total residences", "341"],
  ["Homes per floor", "1"],
  ["Development outlay", "₹1,500 crore (excluding land)"],
  ["Possession", "February 2030"],
];

const homeFormats = [
  {
    name: "Four-bedroom residences",
    text: "Occupy whole floors from around 4,000 sq ft upward, with carpet areas beginning near 3,930 sq ft.",
  },
  {
    name: "Five-bedroom residences",
    text: "Scale that further, sized for households that need real separation between private, formal and service zones.",
  },
  {
    name: "Duplexes",
    text: "Run to approximately 10,000 sq ft across two connected levels — vertical homes rather than large flats.",
  },
  {
    name: "Villas",
    text: "Exist in a quantity of two, at roughly 15,000 sq ft each. That is the entire villa inventory of the project and it will not be repeated.",
  },
];

const designers = [
  {
    name: "Killa Design",
    text: "Shapes the form. The Dubai studio is best known for the Museum of the Future, and their involvement is the clearest signal of what CRC was aiming at architecturally.",
  },
  {
    name: "Gensler",
    text: "One of the largest architecture practices in the world, holds the architectural vision and technical delivery.",
  },
  {
    name: "Rockwell Group",
    text: "Out of New York, handles interiors — a practice with deep hospitality roots, which shows in how the shared spaces are conceived.",
  },
  {
    name: "SWA Group",
    text: "Takes the landscape and sustainability layer, working the open ground, the nature park and the ecological systems.",
  },
  {
    name: "MACE",
    text: "Manages execution — the discipline that determines whether the other four names amount to anything on site.",
  },
];

export default function AboutThePeridonaPage() {
  return (
    <>
      <PageBanner
        eyebrow="The Project"
        title="About The Peridona"
        subtitle="341 residences, seven towers, a global design team, and CRC Group's move into ultra luxury — inside Jaypee Greens Golf Course, Greater Noida."
      />
      <ModalWrapper />
      <AboutProject heading={true} />

      {/* The Idea That Started It */}
      <section className={`${prose.section} bg-white`}>
        <div className={`${prose.inner} flex flex-col md:flex-row gap-10 items-center`}>
          <div className="md:w-1/2">
            <Image
              src={visionImg}
              alt="CRC The Peridona — one apartment per floor inside Jaypee Greens Golf Course, Greater Noida"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className={prose.h2}>The Idea That Started It</h2>
            <p className={prose.p}>
              Most premium housing in the NCR follows a familiar script. Build tall, fit four or six
              apartments to a floor, spend the budget on marble and marketing, and call it luxury.
            </p>
            <p className={prose.p}>
              CRC took a different starting question: what would you have to give up in yield to
              build something genuinely private?
            </p>
            <p className={prose.p}>
              The answer became the organising principle of the entire project. One apartment per
              floor. Across seven towers rising roughly 42 storeys — around 160 metres — that yields
              just <strong>341 homes</strong> on seven acres. A conventional developer would have
              put three times that number on the same land.
            </p>
            <p className={prose.p}>
              Everything downstream follows from that single constraint. Every home has exposure on
              all four sides. There is no shared corridor, no shared landing, no lift lobby you
              negotiate with strangers. Cross-ventilation and natural light stop being brochure
              words and become facts of the floor plate.
            </p>
          </div>
        </div>
      </section>

      {/* Where It Sits */}
      <section className={`${prose.section} bg-[#FAF8F4]`}>
        <div className={prose.inner}>
          <h2 className={prose.h2}>Where It Sits</h2>
          <p className={prose.p}>
            The Peridona is located <strong>within</strong> Jaypee Greens Golf Course in Greater
            Noida — inside the estate boundary, not on its edge. Residents get direct access to the
            course.
          </p>
          <p className={prose.p}>
            Jaypee Greens has had three decades to mature. The trees are grown, the roads are laid,
            the social infrastructure exists. That matters more than most buyers account for when
            comparing a golf course address here against a newer township elsewhere, where the
            greenery is still rendered rather than real.
          </p>
          <p className={prose.p}>
            The land itself comes through a partnership with{" "}
            <strong>Jaiprakash Associates Ltd</strong>, the original developer of the township.
          </p>
          <p className={prose.p}>
            The wider location math is straightforward: Noida International Airport at Jewar is
            about twenty minutes away, with the Yamuna Expressway and Greater Noida Expressway both
            immediately accessible. When Jewar reaches full operation, this becomes one of the few
            established luxury addresses already sitting inside its catchment.
          </p>
        </div>
      </section>

      {/* The Numbers Behind the Project */}
      <section className={`${prose.section} bg-white`}>
        <div className={prose.inner}>
          <h2 className={prose.h2}>The Numbers Behind the Project</h2>
          <SimpleTable rows={numbers} className="mb-6" />
          <p className={prose.p}>
            Roughly a million square feet of the development is not sold at all. It becomes
            landscape, open ground, water bodies and a nature park.
          </p>
        </div>
      </section>

      {/* How the Homes Are Composed */}
      <section className={`${prose.section} bg-[#FAF8F4]`}>
        <div className={prose.inner}>
          <h2 className={prose.h2}>How the Homes Are Composed</h2>
          <p className={prose.p}>
            Four residence formats, deliberately kept distinct rather than blended into a spread of
            near-identical sizes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {homeFormats.map((f) => (
              <div key={f.name} className={prose.cardWhite}>
                <h3 className={prose.h3}>{f.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
          <p className={prose.p}>At the upper end, carpet areas approach 11,860 sq ft.</p>
        </div>
      </section>

      {/* The People Who Designed It */}
      <section className={`${prose.section} bg-white`}>
        <div className={prose.inner}>
          <h2 className={prose.h2}>The People Who Designed It</h2>
          <p className={prose.p}>
            CRC brought in close to fifty consultants. Five of them define what the project actually
            is.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {designers.map((d) => (
              <div key={d.name} className={prose.card}>
                <h3 className={prose.h3}>{d.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
          <p className={prose.p}>
            Assembling that particular group for a single residential project in North India is, as
            far as we can tell, without precedent.
          </p>
        </div>
      </section>

      {/* Life Inside the Estate */}
      <section className={`${prose.section} bg-[#FAF8F4]`}>
        <div className={`${prose.inner} flex flex-col md:flex-row gap-10 items-center`}>
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className={prose.h2}>Life Inside the Estate</h2>
            <p className={prose.p}>
              The clubhouse alone exceeds <strong>one lakh square feet</strong>. Beyond it, the
              amenity programme includes an 18-hole night golf facility, nature trails through the
              landscaped grounds, water bodies, and wellness and fitness spaces — along with several
              experiential features CRC is introducing to the Indian market for the first time.
            </p>
            <p className={prose.p}>
              The brief CRC gave its consultants was two words: <strong>Live More</strong>. The
              amenity footprint is sized to make that literal rather than aspirational.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <Image
              src={clubhouseImg}
              alt="The clubhouse at CRC The Peridona — over one lakh sq ft of amenities"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* About CRC Group */}
      <section className={`${prose.section} bg-white`}>
        <div className={prose.inner}>
          <h2 className={prose.h2}>About CRC Group</h2>
          <p className={prose.p}>
            CRC Group is a Noida-based developer that has spent the last decade in the mid and
            premium housing market across the NCR. The group has delivered around{" "}
            <strong>1,400 homes</strong> across two completed residential projects, with a further
            residential development underway in Greater Noida and a{" "}
            <strong>2.2 million sq ft</strong> commercial project building out in Noida.
          </p>
          <p className={prose.p}>
            <strong>Kunal Bhalla</strong> founded the group and leads it as CEO.{" "}
            <strong>Salil Kumar</strong> serves as Director of Marketing and Business Management.
          </p>
          <p className={prose.p}>
            The Peridona represents a deliberate change of segment for CRC — its first entry into
            ultra-premium residential, unveiled at a launch event in Dubai in July 2025. That is
            worth naming plainly rather than glossing over: the consultant roster and the capital
            commitment are serious, and this is also the group’s first project at this standard.
            Buyers should weigh both sides of that.
          </p>

          <h2 className={`${prose.h2} mt-12`}>Approvals and Status</h2>
          <p className={prose.p}>
            Construction is underway on site, with possession scheduled for{" "}
            <strong>February 2030</strong>.
          </p>
          <p className={prose.p}>
            <strong>UP RERA Registration No.:</strong> {RERA_NO} · <ReraLink />
          </p>
          <p className={prose.p}>Construction progress is published on this site through the year.</p>

          <h2 className={`${prose.h2} mt-12`}>Want the Details?</h2>
          <p className={prose.p}>
            Pricing at The Peridona sits broadly in the ₹12 crore to ₹36 crore range depending on
            configuration and placement, with the full price list and payment structure shared
            directly with prospective buyers.
          </p>
          <p className={prose.p}>
            For the brochure, complete floor plan set, master plan or current pricing — or to arrange
            a site visit — get in touch.
          </p>
          <CtaRow
            items={[
              { label: "Request the Brochure", brochure: true },
              { label: "View Floor Plans", href: "/floor-plans" },
              { label: "Book a Site Visit", href: "/contact-us" },
            ]}
          />
        </div>
      </section>

      <JaypeeTownship />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
