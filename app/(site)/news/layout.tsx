import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | CRC The Peridona",
  description:
    "Stay updated with the latest news, developments, and infrastructure updates around CRC The Peridona, Jaypee Greens, Greater Noida and the Yamuna Expressway.",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
