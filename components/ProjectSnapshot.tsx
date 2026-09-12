import { Fragment, type ReactNode } from "react";

export const RERA_NO = "UPRERAPRJ298067/05/2025";
export const SALES_PHONE = "+91 7304216059";
export const SALES_PHONE_HREF = "tel:+917304216059";

export function ReraLink() {
  return (
    <a
      href="https://www.up-rera.in"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#c8922a] hover:underline"
    >
      up-rera.in
    </a>
  );
}

/** Rows used by most pages' "Project Details" block. */
export const standardProjectRows: [string, ReactNode][] = [
  ["Location", "C1, Jaypee Greens, Greater Noida 201310, Uttar Pradesh"],
  ["Configuration", "4, 4.5 & 5.5 BHK from 4,950 sq ft"],
  ["Scale", "6.80 acres · 7 towers · 43 floors · 341 residences"],
  ["Tentative price", "₹12.5 Cr* onwards"],
  [
    "UP RERA No.",
    <>
      {RERA_NO} · <ReraLink />
    </>,
  ],
];

export default function ProjectSnapshot({
  title = "Project Details",
  rows = standardProjectRows,
  headingLevel = "h2",
}: {
  title?: string;
  rows?: [string, ReactNode][];
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <div className="bg-[#FAF8F4] p-6 md:p-8 rounded-lg border border-[#e5dcc5]">
      <Heading className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">{title}</Heading>
      <dl className="grid grid-cols-1 sm:grid-cols-[max-content_1fr] gap-x-8 gap-y-2 text-sm">
        {rows.map(([label, value]) => (
          <Fragment key={label}>
            <dt className="font-semibold text-gray-900">{label}</dt>
            <dd className="text-gray-600 mb-2 sm:mb-0">{value}</dd>
          </Fragment>
        ))}
      </dl>
    </div>
  );
}
