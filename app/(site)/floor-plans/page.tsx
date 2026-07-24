import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import FloorPlanSection from "@/components/FloorPageSection"

import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "CRC The Peridona Floor Plans | 4 BHK, 5 BHK & Penthouse Layouts",
  description:
    "Explore CRC The Peridona floor plans — 4 BHK 4,900 sq ft*, 5 BHK 5,600 sq ft*, 4 BHK 6,700 sq ft* & Penthouses at Jaypee Greens, Greater Noida. Download brochure.",
  alternates: {
    canonical: "https://www.crcperidona.in/floor-plans",
  },
  keywords:
    "CRC The Peridona floor plan, CRC The Peridona Greater Noida, CRC Peridona Jaypee Greens, luxury apartments Jaypee Greens, 4 BHK floor plan Greater Noida, penthouse Jaypee Greens",
  openGraph: {
    title: "CRC The Peridona Floor Plans | 4 BHK, 5 BHK & Penthouse Layouts",
    description:
      "Explore CRC The Peridona floor plans — 4 BHK 4,900 sq ft*, 5 BHK 5,600 sq ft*, 4 BHK 6,700 sq ft* & Penthouses at Jaypee Greens, Greater Noida. Download brochure.",
    url: "https://www.crcperidona.in/floor-plans",
    type: "website",
  },
};

export default function FloorPlansPage() {
  return (
    <>
      <PageBanner
        eyebrow="Floor Plans"
        title="CRC The Peridona Floor Plans"
        subtitle="Explore full-floor 4 BHK, 5 BHK and Penthouse layouts at Jaypee Greens, Greater Noida — every residence with a private lift lobby and 2-side views."
      />
      <ModalWrapper />
      <FloorPlanSection />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
