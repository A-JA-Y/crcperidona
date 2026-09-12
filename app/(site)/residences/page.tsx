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
  title: "Residences at CRC The Peridona | 4 BHK, 5 BHK, Duplexes & Villas",
  description:
    "Explore the four home formats at CRC The Peridona, Jaypee Greens: whole-floor 4 and 5 BHK residences from 3,930 sq ft, 10,000 sq ft duplexes and two 15,000 sq ft villas.",
  alternates: { canonical: "https://www.crcperidona.in/residences" },
};

const formats = [
  {
    title: "Four-Bedroom Residences",
    spec: "Floor plate from approximately 4,000 sq ft · Carpet area from around 3,930 sq ft",
    paras: [
      "The entry format here would be the top of the range almost anywhere else in Greater Noida.",
      "Four bedrooms, each sized to take a king bed and real furniture rather than the minimum that clears a doorway. Living and dining occupy a continuous open span across one side of the floor, with the golf course and the landscaped grounds framed through the glazing. Utility, staff and service functions sit on their own circulation, so household work never crosses the family’s path.",
    ],
    suits:
      "Families of four to six who want a single-level home with genuine room separation, and buyers who value the whole-floor privacy more than they need additional square footage.",
  },
  {
    title: "Five-Bedroom Residences",
    spec: "Larger floor plates, scaling toward 11,000+ sq ft carpet at the upper end",
    paras: [
      "The five-bedroom homes are not simply four-bedroom plans with a room added. The additional area goes into separating the house into zones that can operate independently of each other.",
      "A formal entertaining wing that guests never need to leave. A private family wing with bedrooms grouped away from the noise. A service zone with its own entry. Multi-generational households tend to gravitate here, as do buyers who entertain at home frequently and want to do it without the rest of the house being on display.",
    ],
    suits: "Three-generation families, and households where home and hosting overlap regularly.",
  },
  {
    title: "Duplex Residences",
    spec: "Approximately 10,000 sq ft across two connected levels",
    paras: [
      "The duplexes solve a problem that even very large single-floor apartments cannot: vertical separation.",
      "Two floors joined by an internal stair gives you a real ground and a real upstairs. Public life happens on one level — arrival, living, dining, entertaining, the terrace. Private life happens on the other. The distance between the two is not measured in metres of corridor but in a flight of stairs, which is a different psychological experience entirely.",
      "At 10,000 sq ft, these are houses that happen to sit forty floors above a golf course.",
    ],
    suits:
      "Buyers who want the spatial logic of a villa without giving up height, views or the security of a managed tower.",
  },
  {
    title: "The Villas",
    spec: "Approximately 15,000 sq ft each · Two in total",
    paras: [
      "There are two. That is the complete villa inventory of the project, and no more will be created.",
      "Ground-level homes within the estate, with their own land, their own arrival and their own relationship to the landscape around them. Everything that applies to the apartments — the design team, the specification, the estate amenities, the golf course access — applies here, at house scale.",
    ],
    suits:
      "Buyers for whom scarcity is itself part of the proposition. If you are reading this and the villas are still available, that is a matter of timing.",
  },
];

export default function ResidencesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Residences"
        title="The Residences"
        subtitle="341 homes. Four formats. One per floor."
      />
      <ModalWrapper />

      <section className={`${prose.section} bg-white`}>
        <div className={prose.inner}>
          <h1 className={prose.h1}>
            Residences at CRC The Peridona — 4 BHK, 5 BHK, Duplexes &amp; Villas
          </h1>
          <p className={prose.lead}>
            <strong>341 homes. Four formats. One per floor.</strong>
          </p>
          <p className={prose.p}>
            That last number is the one that changes how these homes feel to live in. Because no
            floor is subdivided, every residence here is a through-floor home with exposure on all
            four sides. Morning light, evening light, and cross-ventilation are not a function of
            which unit you picked — they come standard with the floor plate.
          </p>
          <p className={prose.p}>
            What follows is how the four formats differ, and who each one is actually built for.
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
            headers={["Format", "Approx. size", "Homes per floor", "Levels"]}
            rows={[
              ["4 BHK", "3,930 sq ft carpet upward", "1", "Single"],
              ["5 BHK", "Scaling to ~11,860 sq ft carpet", "1", "Single"],
              ["Duplex", "~10,000 sq ft", "1", "Two"],
              ["Villa", "~15,000 sq ft", "—", "Ground-level"],
            ]}
          />
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
            CRC has specified materials to a standard the group describes as best-in-class, with
            several finishes and systems being brought into the Indian residential market for the
            first time. The complete specification sheet — structure, finishes, fittings, MEP and
            smart systems — is shared as part of the detailed documentation.
          </p>

          <h2 className={`${prose.h2} mt-12`}>Choosing a Floor and a Tower</h2>
          <p className={prose.p}>
            Because each home occupies a full floor, your choice is really about three things: which
            of the seven towers, which floor within it, and how that combination orients you to the
            golf course, the nature park and the wider Jaypee Greens estate.
          </p>
          <p className={prose.p}>
            Towers rise to roughly 42 storeys, so the difference between a lower and an upper floor
            is substantial in both outlook and pricing. Our sales team can walk you through the
            master plan and show exactly what each available floor sees.
          </p>

          <h2 className={`${prose.h2} mt-12`}>Availability and Pricing</h2>
          <p className={prose.p}>
            Across all four formats, homes are positioned broadly between ₹12 crore and ₹36 crore,
            varying with size, tower, floor and orientation.
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
