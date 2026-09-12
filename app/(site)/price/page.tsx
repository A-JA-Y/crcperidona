import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import EmiCalculator from "@/components/EmiCalculator";
import ReasonsToInvest from "@/components/ReasonToInvest";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import CtaRow from "@/components/CtaRow";
import SimpleTable from "@/components/SimpleTable";
import { RERA_NO, ReraLink } from "@/components/ProjectSnapshot";
import { prose } from "@/utils/prose";

export const metadata: Metadata = {
  title: "CRC The Peridona Price List 2026 | 4, 4.5 & 5.5 BHK and Penthouse Costs",
  description:
    "Current pricing for CRC The Peridona, Jaypee Greens Greater Noida. Tentative ₹12.5 Cr* onwards by configuration, payment plan structure, booking amount and what's included.",
  alternates: { canonical: "https://thecrcperidona.com/price" },
  keywords:
    "CRC The Peridona price, CRC The Peridona price list 2026, CRC The Peridona Greater Noida, CRC Peridona Jaypee Greens, luxury apartments Jaypee Greens price, CRC Group",
};

const priceDrivers = [
  {
    name: "Configuration.",
    text: "The jump from a 4 BHK to a 5.5 BHK or a penthouse is a jump in format, not just area. Per-square-foot rates differ across formats.",
  },
  {
    name: "Floor level.",
    text: "Towers rise to 43 storeys. Higher floors command a premium, and the gradient across forty-plus floors is meaningful.",
  },
  {
    name: "Tower and orientation.",
    text: "Seven towers sit differently against the golf course, the nature park and the wider Jaypee Greens estate. Direct course outlook is priced accordingly.",
  },
  {
    name: "Timing.",
    text: "Pricing at launch stage differs from pricing as construction progresses toward the February 2030 possession date. Early-stage entry has historically carried an advantage on projects of this profile — though that is a pattern, not a guarantee.",
  },
];

const paymentPlans = [
  {
    name: "Construction-linked plan",
    text: "Payments released against verified construction milestones. Lower exposure early, spread across the build period.",
  },
  {
    name: "Down payment plan",
    text: "A larger proportion paid upfront in exchange for a price advantage.",
  },
  {
    name: "Flexi or custom structures",
    text: "Arranged case by case for buyers with specific liquidity requirements.",
  },
];

const extraCosts = [
  <><strong>Stamp duty and registration</strong> as applicable in Uttar Pradesh</>,
  <><strong>GST</strong> at the prevailing rate for under-construction property</>,
  <><strong>Preferential location charges</strong> where applicable to floor or orientation</>,
  <><strong>Club membership and one-time charges</strong></>,
  <><strong>Interest-free maintenance security and maintenance charges</strong> post-possession</>,
  <><strong>Parking and power backup charges</strong> as specified</>,
];

export default function PricePage() {
  return (
    <>
      <PageBanner
        eyebrow="Investment"
        title="Price List"
        subtitle="CRC The Peridona pricing at Jaypee Greens, Greater Noida — tentative ₹12.5 Cr* onwards, payment plans, and what sits beyond the base price."
      />
      <ModalWrapper />

      <section className={`${prose.section} bg-white`}>
        <div className={prose.inner}>
          <h1 className={prose.h1}>CRC The Peridona Price List 2026</h1>
          <p className={prose.lead}>
            Residences at The Peridona start at a tentative <strong>₹12.5 crore*</strong> and rise
            with configuration, tower, floor level and orientation.
          </p>
          <p className={prose.p}>
            Below is how that pricing breaks down, what drives the variation, and what you should
            expect on top of the base figure. Where we can’t publish an exact number, we say so
            rather than dressing up a placeholder.
          </p>

          {/* Indicative Ranges by Configuration */}
          <h2 className={`${prose.h2} mt-12`}>Indicative Pricing by Configuration</h2>
          <SimpleTable
            headers={["Configuration", "Approx. size", "Tentative price"]}
            rows={[
              ["4 BHK residence", "From 4,950 sq ft", "₹12.5 Cr* onwards"],
              ["4.5 BHK residence", "On request", "On request"],
              ["5.5 BHK residence", "RERA-filed 5 BHK band up to 9,756 sq ft", "On request"],
              ["Penthouse", "On request", "On request"],
            ]}
            className="mb-4"
          />
          <p className={`${prose.note} mb-4`}>
            *Indicative; subject to the approved building plan. Prices are tentative and exclude
            registration, stamp duty, GST and other statutory charges.
          </p>
          <p className={prose.p}>
            We share configuration-specific figures and the live per-square-foot rate directly,
            because CRC revises pricing across construction stages and a number published here would
            be stale within a quarter.
          </p>
          <CtaRow items={[{ label: "Request the Current Price List →", brochure: true }]} />

          {/* Why Pricing Isn't Posted Publicly */}
          <h2 className={`${prose.h2} mt-12`}>Why Pricing Isn’t Posted Publicly</h2>
          <p className={prose.p}>
            CRC is selling this inventory largely by invitation. With only 341 residences in the
            entire development and one home per floor, each unit is effectively unique — a
            22nd-floor home in one tower and a 22nd-floor home in another are different products
            with different views and different prices.
          </p>
          <p className={prose.p}>
            A single published rate card would be misleading for most of the inventory. So instead
            of a number that applies to nothing, we send you the specific figure for the specific
            floors that are actually available.
          </p>

          {/* What Moves the Price */}
          <h2 className={`${prose.h2} mt-12`}>What Moves the Price</h2>
          <p className={prose.p}>
            Four variables account for most of the spread between the bottom and the top of the
            range.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {priceDrivers.map((d) => (
              <div key={d.name} className={prose.card}>
                <h3 className={prose.h3}>{d.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>

          {/* Payment Plan */}
          <h2 className={`${prose.h2} mt-12`}>Payment Plan</h2>
          <p className={prose.p}>
            CRC offers structured payment options rather than a single fixed schedule. The common
            structures for a project at this stage are:
          </p>
          <ul className={prose.ul}>
            {paymentPlans.map((p) => (
              <li key={p.name} className={prose.li}>
                <span className={prose.tick}>✓</span>
                <span>
                  <strong>{p.name}</strong> — {p.text}
                </span>
              </li>
            ))}
          </ul>
          <p className={prose.p}>
            Booking amounts and the full milestone schedule are confirmed at the time of enquiry,
            since CRC adjusts these across sales phases. Home loan tie-ups with leading lenders are
            in place for buyers who want to finance a portion.
          </p>

          {/* Costs Beyond the Base Price */}
          <h2 className={`${prose.h2} mt-12`}>Costs Beyond the Base Price</h2>
          <p className={prose.p}>The headline figure is not the total outgo. Budget for:</p>
          <ul className={prose.ul}>
            {extraCosts.map((item, i) => (
              <li key={i} className={prose.li}>
                <span className={prose.tick}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className={prose.p}>
            We’ll give you a full cost sheet — base price plus every applicable charge, totalled —
            rather than leaving you to discover them at agreement stage.
          </p>

          {/* How It Compares */}
          <h2 className={`${prose.h2} mt-12`}>How It Compares</h2>
          <p className={prose.p}>
            At this specification level, the honest comparison is not against other Greater Noida
            projects. It is against Gurgaon’s Golf Course Road and DLF corridors, where equivalent
            whole-floor residences with comparable design pedigree typically trade at a higher
            per-square-foot rate.
          </p>
          <p className={prose.p}>
            Delhi-NCR recorded around 3,960 luxury home sales at ₹6 crore and above in the first
            half of 2025 — roughly three times the previous year’s figure. The segment has depth.
            What The Peridona offers within it is scarcity: 341 homes on 6.80 acres inside an
            established golf estate, with land that cannot be extended.
          </p>
          <p className={prose.p}>
            Whether that arithmetic works for you depends on your holding period and your view on
            the Jewar airport corridor. We would rather you test that yourself than take our framing
            for it.
          </p>

          {/* Registration and Timeline */}
          <h2 className={`${prose.h2} mt-12`}>Registration and Timeline</h2>
          <div className={`${prose.card} mb-6 text-sm text-gray-600 space-y-2`}>
            <p>
              <strong>Possession:</strong> February 2030
            </p>
            <p>
              <strong>Developer:</strong> CRC Group, in partnership with Jaiprakash Associates Ltd
            </p>
            <p>
              <strong>UP RERA Registration No.:</strong> {RERA_NO} · <ReraLink />
            </p>
          </div>
          <p className={prose.note}>
            Only the RERA-registered figures and the executed agreement are binding. Everything on
            this page is indicative and subject to revision by the developer.
          </p>

          {/* Get the Numbers */}
          <h2 className={`${prose.h2} mt-12`}>Get the Numbers</h2>
          <p className={prose.p}>
            Send us your preferred configuration and floor range and we’ll come back with current
            pricing, the applicable payment plan, booking amount and a complete cost sheet.
          </p>
          <CtaRow
            items={[
              { label: "Request Price List", href: "/contact-us" },
              { label: "Download Brochure", brochure: true },
              { label: "Book a Site Visit", href: "/contact-us" },
            ]}
          />
        </div>
      </section>

      <EmiCalculator />
      <ReasonsToInvest />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
