import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News | CRC The Peridona, Jaypee Greens — Market & Project Updates",
  description:
    "Latest news on CRC The Peridona at Jaypee Greens, Greater Noida — project milestones, construction progress, circle rate changes and NCR luxury market updates.",
  alternates: { canonical: "https://thecrcperidona.com/news" },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
