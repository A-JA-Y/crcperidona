import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import logo from "@/assets/crc-group-logo.png";
import StickyDownloadButton from "@/components/StickyButton";

import workKilla from "@/assets-crc/work_killa.png";
import workGensler from "@/assets-crc/work_gensler.png";
import workRockwell from "@/assets-crc/work_rockwell.png";
import workSwa from "@/assets-crc/work_swa.png";
import workCbm from "@/assets-crc/work_cbm.png";
import workThornton from "@/assets-crc/work_thornton.png";
import workMace from "@/assets-crc/work_mace.png";
import logoKilla from "@/assets-crc/logo_killa.jpg";
import logoGensler from "@/assets-crc/logo_gensler.jpg";
import logoRockwell from "@/assets-crc/logo_rockwell.jpg";
import logoSwa from "@/assets-crc/logo_swa.jpeg";
import logoCbm from "@/assets-crc/logo_cbm.jpeg";
import logoThornton from "@/assets-crc/logo_thornton.jpeg";
import logoMace from "@/assets-crc/logo_mace.jpeg";
import mediaMoneycontrol from "@/assets-crc/media_moneycontrol.png";
import mediaEt from "@/assets-crc/media_et.png";
import mediaHt from "@/assets-crc/media_ht.png";
import mediaGulfToday from "@/assets-crc/media_gulftoday.png";
import mediaKhaleejTimes from "@/assets-crc/media_khaleejtimes.png";

export const metadata: Metadata = {
  title: "About CRC Group | CRC The Peridona Jaypee Greens Greater Noida",
  description:
    "CRC Group — Building Values. Learn about the Delhi NCR developer led by Founder & CEO Kunal Bhalla and the global design team behind CRC The Peridona at Jaypee Greens, Greater Noida.",
  alternates: { canonical: "https://www.crcperidona.in/about-crc-group" },
};

type DesignTeamMember = {
  name: string;
  role: string;
  works: string;
  workImage?: StaticImageData;
  workImageAlt?: string;
  firmLogo?: StaticImageData;
};

const designTeam: DesignTeamMember[] = [
  {
    name: "Killa Design (Dubai)",
    role: "Principal/Concept Architect — led by Shaun Killa, “Project Guardian”",
    works: "Museum of the Future, Bahrain WTC",
    workImage: workKilla,
    workImageAlt: "Museum of the Future, Dubai — by Killa Design",
    firmLogo: logoKilla,
  },
  {
    name: "Gensler (USA)",
    role: "Resident Architect",
    works: "Shanghai Tower, SFO",
    workImage: workGensler,
    workImageAlt: "Shanghai Tower — by Gensler",
    firmLogo: logoGensler,
  },
  {
    name: "Rockwell Group (New York)",
    role: "Interiors — designing the clubhouse",
    works: "Nobu Hotels, The Cosmopolitan, Dolby Theatre",
    workImage: workRockwell,
    workImageAlt: "Hospitality interiors — by Rockwell Group",
    firmLogo: logoRockwell,
  },
  {
    name: "SWA Group (USA)",
    role: "Landscape",
    works: "Hudson Yards, Beijing Olympic Green",
    workImage: workSwa,
    workImageAlt: "Landscape architecture — by SWA Group",
    firmLogo: logoSwa,
  },
  {
    name: "CBM Engineers (USA)",
    role: "Structural Consultant",
    works: "Petronas Towers",
    workImage: workCbm,
    workImageAlt: "Landmark engineering — CBM Engineers",
    firmLogo: logoCbm,
  },
  {
    name: "Thornton Tomasetti (USA)",
    role: "Structural Peer Consultant",
    works: "One World Trade Center",
    workImage: workThornton,
    workImageAlt: "Landmark structures — Thornton Tomasetti",
    firmLogo: logoThornton,
  },
  {
    name: "Mace (UK)",
    role: "Project Management Consultant",
    works: "The Shard, Expo 2020 Dubai",
    workImage: workMace,
    workImageAlt: "The Shard, London — delivered by Mace",
    firmLogo: logoMace,
  },
  {
    name: "B L Kashyap (India)",
    role: "Construction Partner",
    works: "",
  },
  {
    name: "L’Observatoire (USA)",
    role: "Lighting Consultant",
    works: "",
  },
];

const mediaCoverage = [
  { name: "Moneycontrol", image: mediaMoneycontrol },
  { name: "The Economic Times", image: mediaEt },
  { name: "Hindustan Times", image: mediaHt },
  { name: "Gulf Today", image: mediaGulfToday },
  { name: "Khaleej Times", image: mediaKhaleejTimes },
];

export default function AboutCrcGroupPage() {
  return (
    <>
      <PageBanner
        eyebrow="The Developer"
        title="About CRC Group"
        subtitle="CRC — Building Values. A Delhi NCR developer known for residential and commercial projects in Noida and Greater Noida."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/3 flex-shrink-0">
            <Image
              src={logo}
              alt="CRC Group — Building Values"
              width={160}
              height={140}
              className="w-auto h-auto max-w-[140px]"
            />
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <p className="text-gray-600 text-sm leading-relaxed">
              CRC Group is a Delhi NCR real-estate developer — &ldquo;CRC — Building
              Values&rdquo; — led by Founder &amp; CEO Kunal Bhalla, known for residential and
              commercial projects in Noida and Greater Noida such as CRC Sublimis, CRC Joyous,
              CRC The Flagship, and CRC Maesta.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              With The Peridona, CRC has assembled a global consultant roster — Killa Design,
              Gensler, Rockwell Group, SWA Group, Thornton Tomasetti, CBM Engineers, Mace,
              B L Kashyap, and L&apos;Observatoire — to deliver its flagship ultra-luxury project
              at Jaypee Greens, Greater Noida. Corporate website: www.crcgroup.in.
            </p>

            <ul className="flex flex-col gap-2 mt-2">
              {[
                "Delhi NCR developer with residential and commercial projects in Noida & Greater Noida",
                "Led by Founder & CEO Kunal Bhalla — “Building Values”",
                "Delivered projects include CRC Sublimis, CRC Joyous, CRC The Flagship, CRC Maesta",
                "Global consultant roster assembled for CRC The Peridona at Jaypee Greens",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-[#c8952a] mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <Link
                href="/about-the-peridona"
                className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors"
              >
                Explore CRC The Peridona
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Design Team Roster */}
      <section className="w-full bg-[#FAF8F4] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 text-center">
            The Global Design Team Behind The Peridona
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed text-center max-w-3xl mx-auto mb-10">
            A roster of global consultants — the studios behind some of the world&apos;s most
            recognised landmarks — has been brought together for CRC The Peridona.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designTeam.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg border border-[#e5dcc5] shadow-sm overflow-hidden flex flex-col"
              >
                {member.workImage && (
                  <div className="relative w-full h-44 overflow-hidden">
                    <Image
                      src={member.workImage}
                      alt={member.workImageAlt ?? member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    {member.firmLogo && (
                      <Image
                        src={member.firmLogo}
                        alt={`${member.name} logo`}
                        className="w-10 h-10 object-contain rounded-sm border border-[#eee5d0] flex-shrink-0"
                      />
                    )}
                    <h3 className="text-base font-bold text-gray-900">{member.name}</h3>
                  </div>
                  <p className="text-[#c8922a] text-xs uppercase tracking-wider font-semibold mb-2">
                    {member.role}
                  </p>
                  {member.works && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Notable works: {member.works}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 text-center">
            CRC The Peridona In The News
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed text-center max-w-3xl mx-auto mb-10">
            The unveiling of CRC The Peridona — including its Dubai launch event and the
            Rockwell Group clubhouse partnership — has been covered by leading Indian and
            international publications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {mediaCoverage.map((outlet) => (
              <div
                key={outlet.name}
                className="rounded-lg border border-[#e5dcc5] shadow-sm overflow-hidden bg-white"
              >
                <Image
                  src={outlet.image}
                  alt={`CRC The Peridona coverage — ${outlet.name}`}
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-500"
                />
                <p className="text-center text-[11px] font-semibold uppercase tracking-wider text-gray-500 py-2 border-t border-[#f0ead9]">
                  {outlet.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
