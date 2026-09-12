import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ReasonsToInvest from "@/components/ReasonToInvest";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import CtaRow from "@/components/CtaRow";
import SimpleTable from "@/components/SimpleTable";
import { RERA_NO, ReraLink } from "@/components/ProjectSnapshot";
import { prose } from "@/utils/prose";

export const metadata: Metadata = {
  title: "Residences at CRC The Peridona | 4, 4.5 & 5.5 BHK and Penthouses",
  description:
    "Explore the home formats at CRC The Peridona, Jaypee Greens: whole-floor 4, 4.5 and 5.5 BHK residences from 4,950 sq ft and top-of-tower penthouses, each with a private lift lobby.",
  alternates: { canonical: "https://thecrcperidona.com/residences" },
};

const formats = [
  {
    title: "4 BHK Residences",
    spec: "From 4,950 sq ft · RERA-filed 4 BHK areas 3,450 to 6,555 sq ft",
    paras: [
      "The entry format here would be the top of the range almost anywhere else in Greater Noida.",
      "Four bedrooms, each sized to take a king bed and real furniture rather than the minimum that clears a doorway. Living and dining occupy a continuous open span on the golf course side of the floor, with the bedrooms set against the nature park. Utility, staff and service functions sit on their own circulation, so household work never crosses the family’s path.",
    ],
    suits:
      "Families of four to six who want a single-level home with genuine room separation, and buyers who value the whole-floor privacy more than they need additional square footage.",
  },
  {
    title: "4.5 BHK Residences",
    spec: "Four bedrooms plus a flexible half room",
    paras: [
      "The 4.5 BHK is not simply a four-bedroom plan with a room added. The half room is placed to work as a study, home office, lounge or staff suite — whichever the household needs — without disturbing the logic of the main bedroom cluster.",
      "The living and dining span is the same whole-floor sweep, with the private lift lobby opening into a dedicated entrance foyer so arrival happens inside your home, not in a corridor.",
    ],
    suits:
      "Households that work from home, host visiting family often, or simply want one more measure of adaptability without stepping up to the largest format.",
  },
  {
    title: "5.5 BHK Residences",
    spec: "The largest standard typology · RERA-filed 5 BHK areas reach 9,756 sq ft",
    paras: [
      "The additional area here goes into separating the house into zones that can operate independently of each other.",
      "A formal entertaining wing that guests never need to leave. A private family wing with bedrooms grouped away from the noise. A service zone with its own entry. Multi-generational households tend to gravitate here, as do buyers who entertain at home frequently and want to do it without the rest of the house being on display.",
    ],
    suits: "Three-generation families, and households where home and hosting overlap regularly.",
  },
  {
    title: "The Penthouses",
    spec: "Top of the towers · Layouts and areas on request",
    paras: [
      "The penthouse residences sit at the summit of the 43-floor towers, beneath the 75,500 sq ft rooftop with its observatories, theme waterbodies and yoga deck.",
      "From roughly 160 metres up, they carry the fullest expression of the two-side outlook — the 130-acre Greg Norman championship course on one side, the 60-acre nature park on the other. Everything that applies to the residences below — the design team, the specification, the estate amenities — applies here at the largest scale the project offers.",
    ],
    suits:
      "Buyers for whom scarcity is itself part of the proposition. Penthouse particulars are shared through a private preview.",
  },
];

export default function ResidencesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Residences"
        title="The Residences"
        subtitle="341 homes. Three typologies plus penthouses. One per floor."
      />
      <ModalWrapper />

      <section className={`${prose.section} bg-white`}>
        <div className={prose.inner}>
          <h1 className={prose.h1}>
            Residences at CRC The Peridona — 4, 4.5 &amp; 5.5 BHK and Penthouses
          </h1>
          <p className={prose.lead}>
            <strong>341 homes. Three typologies plus penthouses. One per floor.</strong>
          </p>
          <p className={prose.p}>
            That last number is the one that changes how these homes feel to live in. Because no
            floor is subdivided, every residence here is a through-floor home with the golf course on
            one side and the nature park on the other. Morning light, evening light, and
            cross-ventilation are not a function of which unit you picked — they come standard with
            the floor plate.
          </p>
          <p className={prose.p}>
            What follows is how the formats differ, and who each one is actually built for.
          </p>

          <div className="space-y-8 mt-10">
            {formats.map((f) => (
              <article key={f.title} className={prose.card}>
                <h2 className={prose.h2}>{f.title}</h2>
                <p className="text-[#c8922a] text-xs uppercase tracking-widest font-semibold mb-4">
                  {f.spec}
                </p>
                {f.paras.map((para) => (
                  <p key={para} className={prose.p}>
                    {para}
                  </p>
                ))}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  <strong>This suits:</strong> {f.suits}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How the Sizes Compare */}
      <section className={`${prose.section} bg-[#FAF8F4]`}>
        <div className={prose.inner}>
          <h2 className={prose.h2}>How the Sizes Compare</h2>
          <SimpleTable
            headers={["Format", "Approx. size", "Homes per floor", "Position"]}
            rows={[
              ["4 BHK", "From 4,950 sq ft (RERA-filed 3,450–6,555 sq ft)", "1", "Full floor"],
              ["4.5 BHK", "On request", "1", "Full floor"],
              ["5.5 BHK", "RERA-filed 5 BHK band up to 9,756 sq ft", "1", "Full floor"],
              ["Penthouse", "On request", "1", "Top of tower"],
            ]}
            className="mb-4"
          />
          <p className={prose.note}>
            *Indicative; subject to the approved building plan. Areas as filed with UP RERA under{" "}
            {RERA_NO}.
          </p>
        </div>
      </section>

      {/* Specification / Choosing / Availability */}
      <section className={`${prose.section} bg-white`}>
        <div className={prose.inner}>
          <h2 className={prose.h2}>Specification and Finish</h2>
          <p className={prose.p}>
            The interiors are conceived by Rockwell Group, the New York practice whose background in
            hospitality shapes how arrival, transition and shared space are handled throughout.
            Architecture and technical delivery sit with Gensler; the built form comes from Killa
            Design; landscape and environmental systems from SWA Group.
          </p>
          <p className={prose.p}>
            Every residence carries imported marble in the living and dining areas, engineered wood
            in the bedrooms, a modular kitchen with built-in appliances, European sanitaryware,
            double-glazed windows, VRV/VRF air conditioning and smart-home provisions. The complete
            specification sheet — structure, finishes, fittings, MEP and smart systems — is shared
            as part of the detailed documentation.
          </p>

          <h2 className={`${prose.h2} mt-12`}>Choosing a Floor and a Tower</h2>
          <p className={prose.p}>
            Because each home occupies a full floor, your choice is really about three things: which
            of the seven towers, which floor within it, and how that combination orients you to the
            golf course, the nature park and the wider Jaypee Greens estate.
          </p>
          <p className={prose.p}>
            Towers rise to 43 storeys, so the difference between a lower and an upper floor is
            substantial in both outlook and pricing. Our sales team can walk you through the master
            plan and show exactly what each available floor sees.
          </p>

          <h2 className={`${prose.h2} mt-12`}>Availability and Pricing</h2>
          <p className={prose.p}>
            Across all formats, homes start at a tentative ₹12.5 crore* and rise with size, tower,
            floor and orientation. The larger typologies and penthouses are priced on request.
          </p>
          <p className={prose.p}>
            With only 341 residences in the entire development and sales conducted largely by
            invitation, the inventory picture changes. For the current availability list,
            per-square-foot rates, booking amount and payment plan options, speak with us directly.
          </p>
          <p className={prose.p}>
            <strong>Possession:</strong> February 2030 · <strong>UP RERA No.:</strong> {RERA_NO} ·{" "}
            <ReraLink />
          </p>

          <h2 className={`${prose.h2} mt-12`}>See the Plans</h2>
          <p className={prose.p}>
            We can send the complete floor plan set for any format, along with the master plan,
            specification sheet and brochure — or arrange a site visit so you can stand on a floor
            and see the outlook for yourself.
          </p>
          <CtaRow
            items={[
              { label: "Request Floor Plans", href: "/floor-plans" },
              { label: "Download Brochure", brochure: true },
              { label: "Book a Site Visit", href: "/contact-us" },
            ]}
          />
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
      <ReasonsToInvest />
    </>
  );
}
