import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ReasonsToInvest from "@/components/ReasonToInvest";
import VillaFeatures from "@/components/PremiumInventory";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "CRC The Peridona Residences — 4, 4.5 & 5.5 BHK Configurations at Jaypee Greens",
  description:
    "Explore CRC The Peridona residences & configurations — 4, 4.5 & 5.5 BHK luxury homes starting 4,950 sq ft with One Floor One Apartment* living, private lift lobby and 2-side golf & nature park views. ₹12.5 Cr* onwards.",
  alternates: { canonical: "https://www.crcperidona.in/residences" },
};

const configTable = [
  { type: "4 BHK", size: "4,900 sq ft", note: "Golf Course + Nature Park views" },
  { type: "5 BHK", size: "5,600 sq ft", note: "Golf Course + Nature Park views" },
  { type: "4 BHK", size: "6,700 sq ft", note: "Golf Course + Nature Park views" },
  { type: "Penthouse", size: "On request", note: "Indicative; subject to approved plan" },
];

export default function ResidencesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Residences"
        title="Residences & Configurations"
        subtitle="4, 4.5 & 5.5 BHK residences starting 4,950 sq ft — One Floor One Apartment* living with 2-side views at CRC The Peridona, Jaypee Greens"
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="prose max-w-none text-gray-700">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-4">CRC The Peridona Residences — 4, 4.5 & 5.5 BHK Configurations</h1>
            <p className="text-lg leading-relaxed mb-6">
              CRC The Peridona offers <strong>4 BHK, 4.5 BHK and 5.5 BHK</strong> residences starting at <strong>4,950 sq ft</strong>, at a tentative price of <strong>₹12.5 Cr* onwards</strong>. Just 341 residences are spread across 7 towers of 43 floors on a 6.80-acre parcel inside the 452-acre Jaypee Greens golf township, Greater Noida. Every home follows the One Floor One Apartment* concept with a private lift lobby, and every residence gets 2-side views — the golf course on one side and the nature park on the other. The project is RERA-registered under UPRERAPRJ298067/05/2025 (verify at www.up-rera.in).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Floor-Plan Configurations</h2>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Configuration</th>
                    <th className="px-5 py-4">Size*</th>
                    <th className="px-5 py-4">Views</th>
                  </tr>
                </thead>
                <tbody>
                  {configTable.map((row) => (
                    <tr key={`${row.type}-${row.size}`} className="border-t border-[#e5dcc5]">
                      <td className="px-5 py-4 font-semibold text-gray-900">{row.type}</td>
                      <td className="px-5 py-4 text-gray-600">{row.size}</td>
                      <td className="px-5 py-4 text-gray-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-6 italic">
              *Indicative; subject to approved building plan. Sizes, configurations, and the tentative price of ₹12.5 Cr* onwards are indicative and subject to change; they exclude registration, stamp duty, GST (where applicable), and other statutory charges. For live availability and the official current price list, request a callback.
            </p>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">The Typologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">4 BHK Residences</h3>
                <p>Expansive 4 BHK homes from 4,900 sq ft* to 6,700 sq ft* — a full floor to yourself, with a private lift lobby opening straight into your residence. The larger 4 BHK format adds generous entertaining and family spaces while keeping the same 2-side golf-and-park orientation.</p>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">4.5 BHK Residences</h3>
                <p>The 4.5 BHK typology adds a flexible half-room — study, home office, lounge, or staff suite — to the four-bedroom format, for families who want that extra measure of adaptability without stepping up to the largest homes.</p>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">5.5 BHK Residences</h3>
                <p>The grandest of the standard typologies — 5.5 BHK residences (5 BHK configurations from 5,600 sq ft* on the official floor-plan list) built for multi-generational living, with the full sweep of the 330 m* facade&apos;s dual outlooks.</p>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Penthouses</h3>
                <p>Penthouse residences crown the towers beneath the 75,500 sq ft rooftop realm. Details are indicative and subject to the approved building plan — <Link href="/contact-us" className="text-[#c8922a] hover:underline font-semibold">request a private preview</Link> for particulars.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">One Floor, One Apartment*</h2>
              <p className="mb-4">The defining idea of The Peridona: your floor is your home. What that means in daily life:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li><strong>Private lift lobby</strong> — high-speed lifts open into a lobby that belongs only to your residence</li>
                <li><strong>No shared walls with neighbours</strong> on your level — a full floor plate per apartment*</li>
                <li><strong>2-side views for every residence</strong> — golf course (north) and 60-acre nature park (south)</li>
                <li><strong>Low density by design</strong> — only 341 residences across 7 towers on 6.80 acres</li>
                <li><strong>43 floors, ~160 m* tower height</strong> — homes lifted above the township&apos;s 25-year-old green cover</li>
              </ul>
              <Link href="/floor-plans" className="text-[#c8922a] hover:underline font-semibold">Check floor plans</Link>
            </div>

            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Residence Specifications</h2>
              <p className="mb-4">Every residence is finished to an ultra-luxury standard:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Imported marble in living/dining; engineered wood in bedrooms</li>
                <li>Modular kitchen with premium fittings & built-in appliances</li>
                <li>European-brand sanitaryware and CP fittings</li>
                <li>Double-glazed thermally broken aluminium windows</li>
                <li>VRV/VRF air conditioning</li>
                <li>Smart-home provisions — lighting, climate, security</li>
                <li>24x7 multi-tier security, video door phone, fire safety</li>
                <li>High-speed lifts with private lobby access</li>
              </ul>
              <p>For a personalised walkthrough of finishes and options, <Link href="/contact-us" className="text-[#c8922a] hover:underline font-semibold">book a site visit</Link>.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Set Inside Jaypee Greens</h2>
              <p className="mb-4">The residences draw their value from a township few in Delhi NCR can match:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li><strong>452-acre golf township</strong> with only ~3,600 units in total — rare low density for Delhi NCR</li>
                <li><strong>130-acre, 18-hole Greg Norman Design Championship golf course</strong> to the north</li>
                <li><strong>60-acre nature park</strong> to the south and a 10-acre practice range</li>
                <li><strong>25-year-old green cover</strong> and enhanced AQI versus the neighbourhood</li>
                <li><strong>Primary access via Narmada Gate</strong>, opposite the practice range</li>
              </ul>
              <p>See <Link href="/location-connectivity" className="text-[#c8922a] hover:underline font-semibold">Location & Connectivity</Link> for Pari Chowk (~2 km), Yamuna Expressway access, and airport distances.</p>
            </div>

            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Amenities That Come With Every Home</h2>
              <p className="mb-4">Ownership at The Peridona includes access to:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li><strong>The Club</strong> — 1.8 lakh sq ft across 3 levels, with 3 theme pools, ice rink, 2 grand cinema theatres, The Jazz Club, bowling alley, indoor flow ride, and a private observatory</li>
                <li><strong>The Rooftop</strong> — 75,500 sq ft stretching 300 m, with theme waterbodies, bar & lounge, jogging track, Miyawaki Forest Observatory, yoga deck & padel ball court</li>
                <li><strong>Township living</strong> — schools, hospitals, retail, Integrated Sports Complex, and the Jaypee Greens Golf & Spa Resort nearby</li>
              </ul>
              <p>Explore the full list on the <Link href="/amenities" className="text-[#c8922a] hover:underline font-semibold">Amenities</Link> page.</p>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-[#e5dcc5]">
            <Link
              href="/contact-us"
              className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-base font-semibold tracking-widest uppercase px-10 py-4 rounded-md transition-colors shadow-md"
            >
              Get Latest Price List & Availability
            </Link>
          </div>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>
      <VillaFeatures />
      <ReasonsToInvest />
    </>
  );
}
