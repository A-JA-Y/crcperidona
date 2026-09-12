import CtaRow from "@/components/CtaRow";
import SimpleTable from "@/components/SimpleTable";
import { RERA_NO, ReraLink, SALES_PHONE_HREF } from "@/components/ProjectSnapshot";
import { prose } from "@/utils/prose";

const residenceTypes = [
  {
    name: "Four-bedroom residences",
    text: "Starting past 4,000 sq ft of floor plate, carpet areas from roughly 3,930 sq ft upward. Whole-floor living.",
  },
  {
    name: "Five-bedroom residences",
    text: "Larger configurations for families who need genuine separation between generations, staff and guests.",
  },
  {
    name: "Duplexes",
    text: "Around 10,000 sq ft across two connected levels — the format for people who want a house that happens to be in the sky.",
  },
  {
    name: "Villas",
    text: "Two only. Approximately 15,000 sq ft each. These will not come up twice.",
  },
];

const clubhouseItems = [
  "An 18-hole night golf facility",
  "Nature trails threading the site",
  "Water bodies and reflective landscaping",
  "Wellness, fitness and recovery spaces",
  "Several experiential amenities appearing in India for the first time",
];

export default function HomeContent() {
  return (
    <section className={`${prose.section} bg-white`} id="about-crc-the-peridona">
      <div className={prose.inner}>
        <h1 className={prose.h1}>CRC The Peridona: Where Greater Noida Stops Being Suburban</h1>

        <p className={prose.lead}>
          There is a difference between a large apartment and a private residence. The Peridona is
          built around that distinction.
        </p>
        <p className={prose.p}>
          Seven towers. Forty-two floors each. And exactly one home on every single floor.
        </p>
        <p className={prose.p}>
          That constraint shapes everything else about the project. Your floor is yours. Light enters
          from four sides. There is no common corridor, no neighbour sharing your landing, no
          negotiation over the lift. In a market where luxury usually means better fittings in the
          same old floor plate, this is a structural decision, not a cosmetic one.
        </p>

        {/* The Setting */}
        <h2 className={`${prose.h2} mt-12`}>The Setting</h2>
        <p className={prose.p}>
          The project occupies seven acres <strong>inside</strong> Jaypee Greens Golf Course — not
          adjacent to it, not overlooking it from across a road. Direct course access comes with the
          address.
        </p>
        <p className={prose.p}>
          Around the towers sit landscaped grounds and a dedicated nature park, which is where the
          remaining million square feet of the 3.1 million sq ft development goes. Roughly 2.1
          million sq ft is saleable. The rest stays open.
        </p>
        <p className={`${prose.p} font-semibold text-gray-900`}>Getting anywhere:</p>
        <SimpleTable
          headers={["Destination", "Approx. drive"]}
          rows={[
            ["Noida International Airport, Jewar", "20 minutes"],
            ["Yamuna Expressway", "Immediate access"],
            ["Greater Noida Expressway", "Short drive"],
            ["Pari Chowk", "Nearby"],
          ]}
          className="mb-6"
        />
        <p className={prose.p}>
          The Jewar airport is the variable most buyers are watching. When it opens as one of the
          world’s largest, the corridor it sits on changes character — and the established addresses
          inside Jaypee Greens are positioned to absorb that shift first.
        </p>

        {/* Residence Types */}
        <h2 className={`${prose.h2} mt-12`}>Residence Types</h2>
        <p className={prose.p}>Only 341 homes exist here, across four distinct formats.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {residenceTypes.map((r) => (
            <div key={r.name} className={prose.card}>
              <h3 className={prose.h3}>{r.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
        <p className={prose.p}>
          Upper-end carpet areas reach close to 11,860 sq ft. Full unit plans, tower orientation and
          the master plan are shared on request.
        </p>

        {/* Who Built This */}
        <h2 className={`${prose.h2} mt-12`}>Who Built This</h2>
        <p className={prose.p}>
          CRC engaged around fifty consultants. The ones that matter to how the building looks and
          lasts:
        </p>
        <p className={prose.p}>
          <strong>Killa Design</strong> brings the form — the same studio responsible for Dubai’s
          Museum of the Future. <strong>Gensler</strong> handles architecture.{" "}
          <strong>Rockwell Group</strong> from New York does the interiors.{" "}
          <strong>SWA Group</strong> shapes the landscape and the sustainability layer.{" "}
          <strong>MACE</strong> runs execution and delivery.
        </p>
        <p className={prose.p}>
          That combination is unusual for an Indian residential project at any price point. It is the
          reason the specification sheet reads more like Dubai or Singapore than NCR.
        </p>

        {/* Inside the Clubhouse */}
        <h2 className={`${prose.h2} mt-12`}>Inside the Clubhouse</h2>
        <p className={prose.p}>Over one lakh square feet of it. Within and around it:</p>
        <ul className={prose.ul}>
          {clubhouseItems.map((item) => (
            <li key={item} className={prose.li}>
              <span className={prose.tick}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className={prose.p}>
          CRC frames the brief in two words — <em>Live More</em> — and the amenity programme is sized
          to back that up rather than decorate a brochure.
        </p>

        {/* What It Costs */}
        <h2 className={`${prose.h2} mt-12`}>What It Costs</h2>
        <p className={prose.p}>
          Residences sit broadly in the <strong>₹12 crore to ₹36 crore</strong> range, moving with
          configuration, floor and orientation.
        </p>
        <p className={prose.p}>
          CRC is selling this inventory largely by invitation. Exact per-square-foot rates, the
          current price list, booking amount and construction-linked payment options are discussed
          directly with buyers rather than posted publicly. If you want those numbers, ask and we
          will send them.
        </p>

        {/* Timeline and Registration */}
        <h2 className={`${prose.h2} mt-12`}>Timeline and Registration</h2>
        <p className={prose.p}>
          Construction is active on site. <strong>Possession is scheduled for February 2030.</strong>
        </p>
        <p className={prose.p}>
          The land is held through a tie-up with Jaiprakash Associates Ltd, the original developer of
          the Jaypee Greens township.
        </p>
        <p className={prose.p}>
          <strong>UP RERA Registration No.:</strong> {RERA_NO} · <ReraLink />
        </p>
        <p className={prose.p}>
          Quarterly construction updates are posted here so you can watch progress without calling
          anyone.
        </p>

        {/* The Developer */}
        <h2 className={`${prose.h2} mt-12`}>The Developer</h2>
        <p className={prose.p}>
          CRC Group operates out of Noida and has completed around 1,400 homes across two residential
          projects, with another residential development in Greater Noida and a 2.2 million sq ft
          commercial asset in Noida currently building out. Kunal Bhalla founded the group and leads
          it as CEO.
        </p>
        <p className={prose.p}>
          The Peridona is CRC’s first ultra-premium project. That cuts both ways honestly: the
          ambition and consultant roster are genuine, and it is also a step up in segment for the
          developer. Worth weighing alongside everything else.
        </p>

        {/* Should You Buy Here? */}
        <h2 className={`${prose.h2} mt-12`}>Should You Buy Here?</h2>
        <p className={prose.p}>The honest version:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className={prose.card}>
            <h3 className={prose.h3}>In favour</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Supply is hard-capped at 341 units on land that cannot be extended. The golf course
              position is inside, not beside. Comparable specification in Gurgaon’s DLF or Golf
              Course Road corridors typically trades meaningfully higher, so the relative value is
              real.
            </p>
          </div>
          <div className={prose.card}>
            <h3 className={prose.h3}>To consider</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Possession is 2030, so this is a four-year horizon, not a move-in. The Jewar airport
              thesis is widely held, which means some of it is already priced in. And the
              ultra-luxury resale market in Greater Noida is thinner than Gurgaon’s, so exit
              liquidity deserves thought.
            </p>
          </div>
        </div>
        <p className={prose.p}>
          We would rather you run those numbers properly than take our word for it.
        </p>

        {/* Next Step */}
        <h2 className={`${prose.h2} mt-12`}>Next Step</h2>
        <p className={prose.p}>
          Site visits are by appointment. We can share the brochure, the full floor plan set, current
          pricing, or arrange a walkthrough of the site and experience centre.
        </p>
        <CtaRow
          items={[
            { label: "Request Brochure", brochure: true },
            { label: "Schedule a Site Visit", href: "/contact-us" },
            { label: "Talk to Sales", href: SALES_PHONE_HREF },
          ]}
        />
      </div>
    </section>
  );
}
