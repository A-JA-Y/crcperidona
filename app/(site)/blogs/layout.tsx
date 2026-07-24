import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | CRC The Peridona",
  description:
    "Read the latest insights, investment guides, and real estate trends around CRC The Peridona, Jaypee Greens, Greater Noida and the Yamuna Expressway.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
