import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import EnquirySection from "@/components/EnquirySection";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import CtaRow from "@/components/CtaRow";
import SimpleTable from "@/components/SimpleTable";
import { RERA_NO, ReraLink, SALES_PHONE, SALES_PHONE_HREF } from "@/components/ProjectSnapshot";
import { prose } from "@/utils/prose";

export const metadata: Metadata = {
  title: "Contact Us | CRC The Peridona, Jaypee Greens Greater Noida",
  description:
    "Enquire about CRC The Peridona at Jaypee Greens, Greater Noida. Request the price list, floor plans or brochure, or book a site visit. Call +91 7304216059.",
  alternates: { canonical: "https://thecrcperidona.com/contact-us" },
};

const whatWeSend = [
  {
    name: "Price list",
    text: "Current pricing for 4, 4.5 and 5.5 BHK residences, with the applicable per-square-foot rate for available floors.",
  },
  {
    name: "Floor plans",
    text: "Detailed unit layouts for each configuration, plus the master plan and tower positioning.",
  },
  {
    name: "Brochure",
    text: "The complete project overview covering The Club, The Rooftop, specifications and the 6.80-acre enclave inside Jaypee Greens.",
  },
  {
    name: "Payment plan",
    text: "Booking amount, milestone schedule and available structures.",
  },
  {
    name: "Availability",
    text: "Which floors and towers are open across each configuration.",
  },
];

export default function ContactUsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Request the price list, floor plans or brochure, or book a site visit at CRC The Peridona, Jaypee Greens."
      />
      <ModalWrapper />

      <section className={`${prose.section} bg-white`}>
        <div className={prose.inner}>
          <h1 className={prose.h1}>Contact Us — CRC The Peridona, Jaypee Greens Greater Noida</h1>
          <p className={prose.lead}>
            Buying at this level is not a form-fill decision. Most people who reach out want three
            things before anything else: the current price for a specific configuration, the floor
            plan, and a look at the actual outlook from an available floor.
          </p>
          <p className={prose.p}>We can arrange all three. Tell us which matters first.</p>

          {/* Speak to Us */}
          <h2 className={`${prose.h2} mt-12`}>Speak to Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className={prose.card}>
              <p className="text-[#c8922a] text-xs uppercase tracking-widest font-semibold mb-1">
                Phone
              </p>
              <a
                href={SALES_PHONE_HREF}
                className="text-gray-900 text-lg font-semibold hover:text-[#C49A2B] transition-colors"
              >
                {SALES_PHONE}
              </a>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                Speak with our team for pricing, availability or to arrange a site visit.
              </p>
            </div>
            <div className={prose.card}>
              <p className="text-[#c8922a] text-xs uppercase tracking-widest font-semibold mb-1">
                Project Address
              </p>
              <p className="text-gray-900 text-lg font-semibold">CRC The Peridona</p>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                C1, Jaypee Greens, Greater Noida 201310, Uttar Pradesh, India
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                <strong>Site access:</strong> Primary entry via Narmada Gate, opposite the golf
                practice range.
              </p>
            </div>
          </div>

          {/* What We Can Send You */}
          <h2 className={`${prose.h2} mt-12`}>What We Can Send You</h2>
          <ul className={prose.ul}>
            {whatWeSend.map((item) => (
              <li key={item.name} className={prose.li}>
                <span className={prose.tick}>✓</span>
                <span>
                  <strong>{item.name}</strong> — {item.text}
                </span>
              </li>
            ))}
          </ul>

          {/* Book a Site Visit */}
          <h2 className={`${prose.h2} mt-12`}>Book a Site Visit</h2>
          <p className={prose.p}>The single most useful thing you can do is stand on a floor.</p>
          <p className={prose.p}>
            Distances and square footage only tell you so much. What a site visit shows you is the
            two-side outlook — the 130-acre championship golf course on one side, the 60-acre nature
            park on the other — and what twenty-five years of mature green cover actually looks like
            from forty floors up.
          </p>
          <p className={prose.p}>
            Visits are arranged by appointment. Let us know your preferred day and we’ll confirm a
            time and coordinate access.
          </p>
          <CtaRow items={[{ label: "Request a Site Visit", brochure: true }]} />

          {/* Enquiry Form */}
          <h2 className={`${prose.h2} mt-12`}>Enquiry Form</h2>
          <p className={prose.p}>Share your details and our team will call you back.</p>
          <ContactForm />

          {/* Before You Call */}
          <h2 className={`${prose.h2} mt-12`}>Before You Call</h2>
          <p className={prose.p}>A few details that answer the most common opening questions:</p>
          <SimpleTable
            rows={[
              ["Configuration", "4, 4.5 & 5.5 BHK from 4,950 sq ft"],
              ["Tentative price", "₹12.5 Cr* onwards"],
              ["Scale", "6.80 acres · 7 towers · 43 floors · 341 residences"],
              ["Location", "Inside 452-acre Jaypee Greens golf township"],
              ["Connectivity", "Pari Chowk ~2 km · Jewar airport ~35 km"],
              ["Developer", "CRC Group"],
              [
                "UP RERA No.",
                <>
                  {RERA_NO} · <ReraLink />
                </>,
              ],
            ]}
            className="mb-6"
          />

          {/* A Note on Who We Are */}
          <h2 className={`${prose.h2} mt-12`}>A Note on Who We Are</h2>
          <p className={prose.p}>
            This is a channel partner website, not the official site of CRC Group or CRC The
            Peridona. We handle enquiries, share project information and coordinate site visits. All
            logo and image rights remain with CRC Group, and the information here is for marketing
            purposes only — only the RERA-registered particulars and your executed agreement are
            binding.
          </p>

          <div className="mt-10 pt-8 border-t border-[#e5dcc5]">
            <CtaRow
              items={[
                { label: `Call ${SALES_PHONE}`, href: SALES_PHONE_HREF },
                { label: "Download Brochure", brochure: true },
                { label: "Book a Site Visit", brochure: true },
              ]}
            />
          </div>
        </div>
      </section>

      <EnquirySection />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
