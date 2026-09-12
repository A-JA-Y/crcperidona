import CtaRow from "@/components/CtaRow";
import SimpleTable from "@/components/SimpleTable";
import { RERA_NO, ReraLink, SALES_PHONE_HREF } from "@/components/ProjectSnapshot";
import { prose } from "@/utils/prose";

const residenceTypes = [
  {
    name: "4 BHK residences",
    text: "The entry format, from 4,950 sq ft. A whole floor to yourself, with the private lift lobby opening straight into the home. RERA-filed 4 BHK areas run from 3,450 to 6,555 sq ft across the towers.",
  },
  {
    name: "4.5 BHK residences",
    text: "The four-bedroom plan plus a flexible half room — study, home office, lounge or staff suite — for families who want that extra measure of adaptability without stepping up to the largest homes.",
  },
  {
    name: "5.5 BHK residences",
    text: "The largest standard typology, built for multi-generational living with genuine separation between private, formal and service zones. RERA-filed 5 BHK areas reach 9,756 sq ft.",
  },
  {
    name: "Penthouses",
    text: "Top-of-tower residences beneath the 75,500 sq ft rooftop, with the fullest expression of the two-side outlook. Layouts and areas are shared on request.",
  },
];

const clubhouseItems = [
  "Three theme swimming pools and waterbodies",
  "An ice rink and an indoor flow ride",
  "Two grand cinema theatres, The Jazz Club and a karaoke club",
  "Grand dining, a ballroom, a private dining restaurant, The Library and Tea Lounge",
  "A world-class gymnasium, bowling alley and a private observatory above the city",
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
          Seven towers. Forty-three floors each. And exactly one home on every single floor.
        </p>
        <p className={prose.p}>
          That constraint shapes everything else about the project. Your floor is yours. Light enters
          from both sides. There is no common corridor, no neighbour sharing your landing, no
          negotiation over the lift. In a market where luxury usually means better fittings in the
          same old floor plate, this is a structural decision, not a cosmetic one.
        </p>

        {/* The Setting */}
        <h2 className={`${prose.h2} mt-12`}>The Setting</h2>
        <p className={prose.p}>
          The project occupies 6.80 acres <strong>inside</strong> the 452-acre Jaypee Greens golf
          township — not adjacent to it, not overlooking it from across a road. The 130-acre,
          18-hole Greg Norman Design championship course sits on one side of the towers and the
          60-acre nature park on the other, so every residence looks out on both.
        </p>
        <p className={prose.p}>
          The township itself carries only around 3,600 homes across its 452 acres, with a green
          cover that has had twenty-five years to mature. The Peridona adds 3.1 million sq ft of
          built-up area to that setting, and the vast majority of its own site stays as landscape,
          water bodies and open ground.
        </p>
        <p className={`${prose.p} font-semibold text-gray-900`}>Getting anywhere:</p>
        <SimpleTable
          headers={["Destination", "Approx. distance"]}
          rows={[
            ["Pari Chowk", "2 km"],
            ["Yamuna Expressway", "Direct access"],
            ["Noida–Greater Noida Expressway", "Connected"],
            ["Noida International Airport, Jewar", "35 km"],
            ["IGI Airport, Delhi", "55 km"],
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
        <p className={prose.p}>
          Only 341 homes exist here, across three typologies plus penthouses — all starting from
          4,950 sq ft.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {residenceTypes.map((r) => (
            <div key={r.name} className={prose.card}>
              <h3 className={prose.h3}>{r.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
        <p className={prose.p}>
          Full unit plans, tower orientation and the master plan are shared on request. Areas are
          indicative and subject to the approved building plan.
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
        <p className={prose.p}>
          The Club runs to 1.8 lakh square feet across three levels, with interiors by Rockwell
          Group. Within it:
        </p>
        <ul className={prose.ul}>
          {clubhouseItems.map((item) => (
            <li key={item} className={prose.li}>
              <span className={prose.tick}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className={prose.p}>
          Above the towers sits The Rooftop — a 75,500 sq ft skydeck running 300 metres lengthwise,
          with theme waterbodies, a bar and lounge, a jogging track, a yoga deck and padel court, and
          two observatories. Beyond the gate is the township’s 18-hole Greg Norman championship
          course.
        </p>
        <p className={prose.p}>
          CRC frames the brief in two words — <em>Live More</em> — and the amenity programme is sized
          to back that up rather than decorate a brochure.
        </p>

        {/* What It Costs */}
        <h2 className={`${prose.h2} mt-12`}>What It Costs</h2>
        <p className={prose.p}>
          Residences start at a tentative <strong>₹12.5 crore*</strong>, moving up with
          configuration, floor and orientation. The larger typologies and penthouses are priced on
          request.
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
          Construction is active on site. <strong>Possession is scheduled for February 2030</strong>,
          as declared to UP RERA.
        </p>
        <p className={prose.p}>
          The land is held through a partnership with Jaiprakash Associates Ltd, the original
          developer of the Jaypee Greens township.
        </p>
        <p className={prose.p}>
          <strong>UP RERA Registration No.:</strong> {RERA_NO} · <ReraLink />
        </p>
        <p className={prose.p}>
          Construction updates are posted here so you can watch progress without calling anyone.
        </p>

        {/* The Developer */}
        <h2 className={`${prose.h2} mt-12`}>The Developer</h2>
        <p className={prose.p}>
          CRC Group was founded in 2006 and operates out of Noida. It has delivered CRC Sublimis and
          CRC Joyous in Noida Extension, with CRC Maesta under construction there and CRC The
          Flagship, a roughly 2.4 million sq ft commercial campus on the Noida Expressway, building
          out. Kunal Bhalla is Founder and CEO; Satish Garg is Founder and Managing Director.
        </p>
        <p className={prose.p}>
          The Peridona is CRC’s first ultra-premium project, with a development outlay of ₹1,500
          crore excluding land. That cuts both ways honestly: the ambition and consultant roster are
          genuine, and it is also a step up in segment for the developer. Worth weighing alongside
          everything else.
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
              Possession is 2030, so this is a multi-year horizon, not a move-in. The Jewar airport
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
