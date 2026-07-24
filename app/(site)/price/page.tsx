import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import EmiCalculator from "@/components/EmiCalculator";
import ReasonsToInvest from "@/components/ReasonToInvest";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "CRC The Peridona Price 2026 | ₹12.5 Cr* Onwards at Jaypee Greens",
  description:
    "CRC The Peridona price at Jaypee Greens, Greater Noida starts from ₹12.5 Cr* onwards for 4, 4.5 & 5.5 BHK residences from 4,950 sq ft. See the price table & EMI calculator.",
  alternates: { canonical: "https://www.crcperidona.in/price" },
  keywords: "CRC The Peridona price, CRC The Peridona Greater Noida, CRC Peridona Jaypee Greens, luxury apartments Jaypee Greens price, golf course residences Greater Noida, CRC Group",
};

const priceTable = [
  { type: "4 BHK", size: "From 4,950 sq ft*", config: "One Floor One Apartment*", price: "₹12.5 Cr* Onwards" },
  { type: "4.5 BHK", size: "On Request*", config: "One Floor One Apartment*", price: "Price on Request" },
  { type: "5.5 BHK", size: "On Request*", config: "One Floor One Apartment*", price: "Price on Request" },
  { type: "Penthouse", size: "On Request*", config: "Top-of-Tower Residence", price: "Price on Request" },
];

export default function PricePage() {
  return (
    <>
      <PageBanner
        eyebrow="Investment"
        title="Price"
        subtitle="CRC The Peridona Price at Jaypee Greens, Greater Noida"
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="prose max-w-none text-gray-700">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-4">CRC The Peridona Price at Jaypee Greens, Greater Noida</h1>
            <p className="text-lg leading-relaxed mb-6">
              The tentative price at CRC The Peridona starts from <strong>₹12.5 Cr* onwards</strong> for residences in 4 BHK, 4.5 BHK and 5.5 BHK typologies starting from 4,950 sq ft. The project by CRC Group is a 6.80-acre ultra-luxury enclave inside the 452-acre Jaypee Greens golf township in Greater Noida — 7 towers, just 341 residences, 43 floors, built on the One Floor One Apartment* concept with a private lift lobby and 2-side views of the golf course and the nature park. Exact unit pricing depends on typology, floor and orientation and is shared on request. Ask our authorised channel-partner team for the latest official price details.
            </p>
            <Link
              href="/contact-us"
              className="inline-block text-[#c8922a] hover:underline font-semibold"
            >
              Get Latest Price Details &rarr;
            </Link>

            <p className="mt-8 text-base leading-relaxed">
              If you are researching the CRC The Peridona price, this page gives you an honest, up-to-date view of the typologies, indicative sizes and how to get the official, unit-specific quote. The Peridona sits inside Jaypee Greens — a 452-acre golf township with a 130-acre, 18-hole Greg Norman Design Championship Course, a 60-acre nature park and a 10-acre practice range. The figures below are tentative/indicative to help you shortlist — the confirmed price for a specific residence is shared on request, since it varies by typology, floor and view. *Indicative; subject to approved building plan.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">CRC The Peridona Price Table 2026</h2>
            <p className="mb-6 text-gray-700">The table below covers the CRC The Peridona typologies at Jaypee Greens, Greater Noida, with indicative size, residence concept and tentative price.</p>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Typology</th>
                    <th className="px-5 py-4">Indicative Size</th>
                    <th className="px-5 py-4">Concept</th>
                    <th className="px-5 py-4">Tentative Price</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTable.map((row) => (
                    <tr key={row.type} className="border-t border-[#e5dcc5]">
                      <td className="px-5 py-4 font-semibold text-gray-900">{row.type}</td>
                      <td className="px-5 py-4 text-gray-600">{row.size}</td>
                      <td className="px-5 py-4 text-gray-600">{row.config}</td>
                      <td className="px-5 py-4 text-gray-800 font-semibold">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-6 italic">
              *Indicative; subject to approved building plan. Prices are tentative and subject to change without prior notice. Please contact our team for the latest availability, payment plans and official pricing.
            </p>
            <Link
              href="/contact-us"
              className="inline-block text-[#c8922a] hover:underline font-semibold"
            >
              Request the Official CRC The Peridona Price Details &rarr;
            </Link>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">CRC The Peridona Price by Configuration</h2>
            <div className="space-y-6">
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">4 BHK Price — 4,900 sq ft* (₹12.5 Cr* Onwards)</h3>
                <p>The 4 BHK is the entry point into The Peridona&apos;s full-floor living — a 4,900 sq ft* residence spanning its own level with a private lift lobby and 2-side views of the golf course and nature park. With the project&apos;s tentative pricing starting at ₹12.5 Cr* onwards, the exact quote for a specific 4 BHK unit is shared on request.</p>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">5 BHK Price — 5,600 sq ft* (Price on Request)</h3>
                <p>The 5 BHK offers 5,600 sq ft* of full-floor space for larger and multi-generational families, with imported-marble living areas, engineered-wood bedrooms and smart-home provisions. Unit-specific pricing is shared on request.</p>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">4 BHK Grande Price — 6,700 sq ft* (Price on Request)</h3>
                <p>The larger 4 BHK format spreads 6,700 sq ft* across a single floor plate — the most expansive 4 BHK in the collection. Pricing for specific floors and orientations is shared on request.</p>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Penthouse Price — (Price on Request)</h3>
                <p>The Penthouses crown the ~160 m* towers beside the 75,500 sq ft rooftop with its observatories, theme waterbodies and yoga deck. Penthouse pricing is exclusively on request through a private preview.</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How CRC The Peridona Pricing Is Shared</h2>
            <p className="mb-4">The Peridona is a limited collection — only 341 residences across 7 towers in the entire 6.80-acre enclave, within a township of only ~3,600 units in total. Because inventory in each typology is limited and every residence occupies its own floor, pricing is shared on a one-to-one basis rather than as a fixed rate card.</p>
            <p className="mb-6">The most reliable route is to request the current price sheet from our channel-partner team, or to schedule a private preview at the experience center, where unit-level pricing, payment plans and availability are walked through in detail.</p>
            <Link
              href="/contact-us"
              className="inline-block text-[#c8922a] hover:underline font-semibold"
            >
              Request a Private Preview &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Affects the CRC The Peridona Price?</h2>
              <p className="mb-4">Several factors influence the final CRC The Peridona Greater Noida price for any given residence:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li><strong>Typology (4 / 4.5 / 5.5 BHK):</strong> Larger typologies and Penthouses command higher pricing.</li>
                <li><strong>Size:</strong> Residences start from 4,950 sq ft, with floor-plan configurations of 4,900 sq ft*, 5,600 sq ft* and 6,700 sq ft* listed on the official microsite.</li>
                <li><strong>Floor level:</strong> Across 43 floors, higher residences carry a premium.</li>
                <li><strong>Orientation and views:</strong> Every residence gets 2-side views — golf course to the north and the 60-acre nature park to the south — but specific frontages are priced differently.</li>
                <li><strong>Penthouse tier:</strong> Top-of-tower residences beside the 75,500 sq ft rooftop are priced exclusively on request.</li>
                <li><strong>Current availability:</strong> With just 341 residences, limited inventory in any typology can move pricing.</li>
              </ul>
              <p>Because of these variables, the figures above are a guide — we share a unit-specific quote for the exact residence you shortlist.</p>
            </div>

            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why CRC The Peridona Is a Smart Investment</h2>
              <p className="mb-4">Beyond the CRC The Peridona price, here&apos;s why buyers and investors consider this address:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Set inside the 452-acre Jaypee Greens golf township, ~2 km from Pari Chowk.</li>
                <li>Jewar Noida International Airport ~35 km away — a major appreciation driver.</li>
                <li>Direct access to the Yamuna Expressway and connectivity to the Noida–Greater Noida Expressway.</li>
                <li>130-acre, 18-hole Greg Norman Design Championship Course with a 25-year-old green cover.</li>
                <li>Low density — only ~3,600 units in the entire township, and just 341 residences at The Peridona.</li>
                <li>A global design roster: Killa Design, Gensler, Rockwell Group, SWA and more, assembled by CRC Group.</li>
                <li>One Floor One Apartment* living with private lift lobbies and 2-side views.</li>
              </ul>
              <p>For end-users this means privacy and an abundant lifestyle; for investors it offers a rare, low-density ultra-luxury asset in Greater Noida.</p>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">EMI Calculator — Plan Your CRC The Peridona Purchase</h2>
            <p className="mb-4">Use the on-page EMI calculator to estimate your monthly outflow based on loan amount, down payment, tenure and interest rate. As an illustration, a typical home-loan structure for a residence at the ₹12.5 Cr* onwards price point can be planned around a 20% advance with a 20–25 year tenure — adjust the sliders to match your own budget and bank offer.</p>
            <p className="italic text-sm text-gray-500 mb-6">(EMI figures are indicative and for planning purposes only; actual rates depend on your lender and profile.)</p>
          </div>

          <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5] text-sm text-gray-600 space-y-2">
            <p><strong>Project:</strong> CRC The Peridona, C1, Jaypee Greens, Greater Noida, Uttar Pradesh 201310</p>
            <p><strong>Developer:</strong> CRC Group</p>
            <p><strong>RERA:</strong> UPRERAPRJ298067/05/2025 — verify at www.up-rera.in</p>
            <p><strong>Contact:</strong> +91 7304216059</p>
            <p><strong>Page last reviewed:</strong> July 2026</p>
          </div>
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
