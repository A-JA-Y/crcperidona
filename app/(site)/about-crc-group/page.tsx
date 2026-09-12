import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import PageBanner from "@/components/PageBanner";
import logo from "@/assets/crc-group-logo.png";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import CtaRow from "@/components/CtaRow";
import SimpleTable from "@/components/SimpleTable";
import { RERA_NO, ReraLink } from "@/components/ProjectSnapshot";
import { prose } from "@/utils/prose";

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
  title: "About CRC Group | Developer of CRC The Peridona, Greater Noida",
  description:
    "CRC Group, the Noida-based developer behind CRC The Peridona at Jaypee Greens. Track record, leadership, delivered projects and the move into ultra-luxury housing.",
  alternates: { canonical: "https://thecrcperidona.com/about-crc-group" },
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
    role: "Architectural form — known for Dubai’s Museum of the Future",
    works: "Museum of the Future, Bahrain WTC",
    workImage: workKilla,
    workImageAlt: "Museum of the Future, Dubai — by Killa Design",
    firmLogo: logoKilla,
  },
  {
    name: "Gensler (USA)",
    role: "Architecture and technical delivery",
    works: "Shanghai Tower, SFO",
    workImage: workGensler,
    workImageAlt: "Shanghai Tower — by Gensler",
    firmLogo: logoGensler,
  },
  {
    name: "Rockwell Group (New York)",
    role: "Interiors and the 1.8 lakh sq ft clubhouse",
    works: "Nobu Hotels, The Cosmopolitan, Dolby Theatre",
    workImage: workRockwell,
    workImageAlt: "Hospitality interiors — by Rockwell Group",
    firmLogo: logoRockwell,
  },
  {
    name: "SWA Group (USA)",
    role: "Landscape and sustainability",
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
    role: "Project management and execution",
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
        subtitle="The Noida-based developer behind CRC The Peridona at Jaypee Greens — track record, leadership, delivered projects and the move into ultra-luxury housing."
      />
      <ModalWrapper />

      {/* Intro + Who They Are */}
      <section className={`${prose.section} bg-white`}>
        <div className={`${prose.inner} flex flex-col md:flex-row gap-10 items-start`}>
          <div className="md:w-1/4 flex-shrink-0">
            <Image
              src={logo}
              alt="CRC Group — Building Values"
              width={160}
              height={140}
              className="w-auto h-auto max-w-[140px]"
            />
          </div>

          <div className="flex-1">
            <h1 className={prose.h1}>About CRC Group — Developer of CRC The Peridona</h1>
            <p className={prose.lead}>
              When you are committing ₹12 crore or more to a home that completes years from now, the
              developer matters more than the drawings. This page covers what CRC Group has actually
              built, who runs it, and where The Peridona sits in that history.
            </p>
            <p className={prose.p}>
              <strong>Building Values</strong> is the group’s stated philosophy. What follows is the
              record behind it.
            </p>

            <h2 className={`${prose.h2} mt-10`}>Who They Are</h2>
            <p className={prose.p}>
              CRC Group is a Noida-based real estate developer operating across the National Capital
              Region. Founded in 2006, the group has built its position in the mid and premium
              residential segment, with a parallel presence in commercial development.
            </p>
            <ul className={prose.ul}>
              <li className={prose.li}>
                <span className={prose.tick}>✓</span>
                <span>
                  <strong>Delivered:</strong> CRC Sublimis and CRC Joyous, residential projects in
                  Noida Extension (Greater Noida West).
                </span>
              </li>
              <li className={prose.li}>
                <span className={prose.tick}>✓</span>
                <span>
                  <strong>Under construction:</strong> CRC Maesta, a residential development in
                  Noida Extension, and CRC The Flagship, a commercial campus of roughly 2.4 million
                  sq ft in Sector 140A on the Noida Expressway.
                </span>
              </li>
              <li className={prose.li}>
                <span className={prose.tick}>✓</span>
                <span>
                  <strong>Now launching:</strong> CRC The Peridona — the group’s first project in
                  the ultra-luxury segment, and by some distance its largest undertaking.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className={`${prose.section} bg-[#FAF8F4]`}>
        <div className={prose.inner}>
          <h2 className={prose.h2}>Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={prose.cardWhite}>
              <h3 className={prose.h3}>Kunal Bhalla — Founder &amp; CEO</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bhalla co-founded CRC Group and has directed its growth from mid-market housing
                into the premium and now ultra-premium segment. The Peridona was unveiled under his
                leadership at a launch event in Dubai in July 2025 — a deliberate signal about the
                buyer profile the group is addressing.
              </p>
            </div>
            <div className={prose.cardWhite}>
              <h3 className={prose.h3}>Satish Garg — Founder &amp; Managing Director</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Garg co-founded the group in 2006 and heads it as Managing Director, overseeing the
                delivery record that CRC Sublimis and CRC Joyous were built on.
              </p>
            </div>
            <div className={prose.cardWhite}>
              <h3 className={prose.h3}>Salil Kumar — Director, Marketing &amp; Business Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kumar leads marketing and business strategy, and has been central to positioning The
                Peridona against the established luxury corridors of the NCR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Peridona in Context */}
      <section className={`${prose.section} bg-white`}>
        <div className={prose.inner}>
          <h2 className={prose.h2}>The Peridona in Context</h2>
          <p className={prose.p}>
            This project is a departure for CRC, and it is worth being direct about what that means.
          </p>
          <p className={prose.p}>
            <strong>The commitment is real.</strong> A development outlay of ₹1,500 crore excluding
            land, on a 6.80-acre parcel inside the 452-acre Jaypee Greens golf township, held through
            a partnership with Jaiprakash Associates Ltd. Seven towers, 43 floors, 341 residences.
          </p>
          <p className={prose.p}>
            <strong>The consultant roster is not typical.</strong> CRC brought in around fifty
            consultants for this project. The five that shape what gets built:
          </p>
          <SimpleTable
            headers={["Consultant", "Role"]}
            rows={[
              ["Killa Design", "Architectural form — known for Dubai’s Museum of the Future"],
              ["Gensler", "Architecture and technical delivery"],
              ["Rockwell Group", "Interiors and the 1.8 lakh sq ft clubhouse"],
              ["SWA Group", "Landscape and sustainability"],
              ["MACE", "Project management and execution"],
            ]}
            className="mb-6"
          />
          <p className={prose.p}>
            Assembling that particular group for a single residential project in North India is
            unusual at any price point.
          </p>
          <p className={prose.p}>
            <strong>And it is a first at this level.</strong> CRC has delivered at mid and premium
            scale, not previously at ultra-luxury. That is a genuine consideration for a buyer, and
            it cuts both ways: the group is investing heavily in international expertise precisely
            because it is entering new territory, and MACE’s presence on execution is a direct
            response to that gap. Weigh it alongside the rest rather than dismissing it.
          </p>
        </div>
      </section>

      {/* Design Team Roster */}
      <section className={`${prose.section} bg-[#FAF8F4]`}>
        <div className={prose.inner}>
          <h2 className={`${prose.h2} text-center mb-3`}>
            The Global Design Team Behind The Peridona
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed text-center max-w-3xl mx-auto mb-10">
            The studios behind some of the world’s most recognised landmarks, brought together for
            CRC The Peridona.
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

      {/* Track Record Summary + Verify */}
      <section className={`${prose.section} bg-white`}>
        <div className={prose.inner}>
          <h2 className={prose.h2}>Track Record Summary</h2>
          <SimpleTable
            rows={[
              ["Base", "Noida, Uttar Pradesh"],
              ["Founded", "2006"],
              ["Delivered", "CRC Sublimis, CRC Joyous (Noida Extension)"],
              ["Under construction", "CRC Maesta (residential) + CRC The Flagship, ~2.4 mn sq ft commercial (Noida)"],
              ["Segment history", "Mid and premium residential"],
              ["Current flagship", "CRC The Peridona, Jaypee Greens"],
              ["Founder & CEO", "Kunal Bhalla"],
              ["Founder & MD", "Satish Garg"],
            ]}
            className="mb-12"
          />

          <h2 className={prose.h2}>Verify Independently</h2>
          <p className={prose.p}>We would rather you check than take our word for it.</p>
          <p className={prose.p}>
            <strong>UP RERA registration for The Peridona:</strong> {RERA_NO} — searchable at{" "}
            <ReraLink />, where you can view approved plans, declared timelines and quarterly
            progress filings.
          </p>
          <p className={prose.p}>
            Reviewing a developer’s RERA history across projects is the most reliable due diligence
            available to a buyer in Uttar Pradesh. It is public, free and takes ten minutes.
          </p>
        </div>
      </section>

      {/* Media Coverage */}
      <section className={`${prose.section} bg-[#FAF8F4]`}>
        <div className={prose.inner}>
          <h2 className={`${prose.h2} text-center mb-3`}>CRC The Peridona In The News</h2>
          <p className="text-gray-600 text-sm leading-relaxed text-center max-w-3xl mx-auto mb-10">
            The unveiling of CRC The Peridona — including its Dubai launch event and the Rockwell
            Group clubhouse partnership — has been covered by leading Indian and international
            publications.
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

      {/* The Project */}
      <section className={`${prose.section} bg-white`}>
        <div className={prose.inner}>
          <h2 className={prose.h2}>The Project</h2>
          <div className={`${prose.card} mb-6 text-sm text-gray-700 space-y-1`}>
            <p className="font-semibold text-gray-900">
              CRC The Peridona — C1, Jaypee Greens, Greater Noida 201310
            </p>
            <p>4, 4.5 &amp; 5.5 BHK from 4,950 sq ft · ₹12.5 Cr* onwards</p>
            <p>6.80 acres · 7 towers · 43 floors · 341 residences</p>
            <p>One Floor One Apartment* with private lift lobby</p>
            <p>2-side views — 130-acre golf course and 60-acre nature park</p>
          </div>
          <CtaRow
            items={[
              { label: "Explore The Peridona", href: "/about-the-peridona" },
              { label: "Download Brochure", brochure: true },
              { label: "Book a Site Visit", href: "/contact-us" },
            ]}
          />
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
