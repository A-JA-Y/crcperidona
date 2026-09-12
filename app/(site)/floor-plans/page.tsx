import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import FloorPlanSection from "@/components/FloorPageSection";

import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

const title = "CRC The Peridona Floor Plans | 4, 4.5 & 5.5 BHK Layouts, Jaypee Greens";
const description =
  "View CRC The Peridona floor plans — 4 BHK, 4.5 BHK, 5.5 BHK and penthouse layouts from 4,950 sq ft, each a full-floor residence with private lift lobby at Jaypee Greens.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.crcperidona.in/floor-plans",
  },
  keywords:
    "CRC The Peridona floor plan, CRC The Peridona Greater Noida, CRC Peridona Jaypee Greens, luxury apartments Jaypee Greens, 4 BHK floor plan Greater Noida, penthouse Jaypee Greens",
  openGraph: {
    title,
    description,
    url: "https://www.crcperidona.in/floor-plans",
    type: "website",
  },
};

export default function FloorPlansPage() {
  return (
    <>
      <PageBanner
        eyebrow="Floor Plans"
        title="Floor Plans"
        subtitle="4 BHK, 4.5 BHK, 5.5 BHK and penthouse layouts from 4,950 sq ft — every plan a full-floor residence with a private lift lobby and 2-side views."
      />
      <ModalWrapper />
      <FloorPlanSection />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
