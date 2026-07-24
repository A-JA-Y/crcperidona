import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import EnquirySection from "@/components/EnquirySection";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Contact Us | CRC The Peridona Jaypee Greens Greater Noida",
  description:
    "Contact CRC The Peridona for pricing, site visits, brochures, and private previews of 4, 4.5 & 5.5 BHK luxury residences at Jaypee Greens, Greater Noida. Call +91 7304216059.",
  alternates: { canonical: "https://www.crcperidona.in/contact-us" },
};

export default function ContactUsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Request a private preview, book a site visit, or speak with our team for pricing, availability, and personalised assistance."
      />
      <ModalWrapper />
      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
              <p className="text-[#c8922a] text-xs uppercase tracking-widest font-semibold mb-1">
                Call Us
              </p>
              <a
                href="tel:+917304216059"
                className="text-gray-900 text-lg font-semibold hover:text-[#C49A2B] transition-colors"
              >
                +91 7304216059
              </a>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                Speak with our team to schedule a private preview at the experience center.
              </p>
            </div>
            <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
              <p className="text-[#c8922a] text-xs uppercase tracking-widest font-semibold mb-1">
                Project Address
              </p>
              <p className="text-gray-900 text-lg font-semibold">
                CRC The Peridona
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                C1, Jaypee Greens, Greater Noida, Uttar Pradesh 201310
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <EnquirySection />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
