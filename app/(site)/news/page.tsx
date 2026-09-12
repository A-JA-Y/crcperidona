"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import NewsData from "@/data/newsData";
import StickyDownloadButton from "@/components/StickyButton";
import CtaRow from "@/components/CtaRow";
import ProjectSnapshot from "@/components/ProjectSnapshot";
import { prose } from "@/utils/prose";

type News = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  excerpt: string;
  date: string;
};

const whatWeTrack = [
  {
    name: "Project milestones",
    text: "Launch announcements, RERA filings, design partner appointments, construction commencement and progress against declared timelines.",
  },
  {
    name: "Construction updates",
    text: "Where the build actually stands. Structure, floors completed, and how that compares with what has been filed with UP RERA.",
  },
  {
    name: "Regulatory and pricing changes",
    text: "Circle rate revisions, stamp duty adjustments, GST changes on under-construction property, and Greater Noida Authority decisions that affect cost of acquisition.",
  },
  {
    name: "Infrastructure",
    text: "Noida International Airport at Jewar, expressway works, metro extensions and anything else shifting the connectivity picture around the 452-acre Jaypee Greens township.",
  },
  {
    name: "NCR luxury market",
    text: "Absorption data, launch activity in the ₹6 crore-plus segment, and how Greater Noida is tracking against Gurgaon and South Delhi.",
  },
];

export default function NewsPage() {
  const sorted: News[] = useMemo(
    () =>
      [...NewsData].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );

  const featured = sorted[0];
  const rest = sorted.slice(1);

  const categories = ["All", ...Array.from(new Set(NewsData.map((n) => n.category)))];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? rest : rest.filter((n) => n.category === active);

  if (!featured) return null;

  return (
    <section className="w-full min-h-screen bg-white">

      {/* ── HERO ── */}
      <div className="bg-gray-50 border-b border-gray-100 px-6 pt-12 pb-8">
        <div className="max-w-5xl mx-auto">

          <p className="text-xs uppercase tracking-widest text-[#c8922a] mb-3">
            News
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
            Market &amp; Infrastructure Updates
          </h1>
          <p className="text-lg text-gray-700 font-medium mb-3">Things that actually move the number.</p>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mb-8">
            Circle rate revisions, airport timelines, construction milestones, launch announcements
            — the developments that change what this address is worth, reported as they happen
            rather than summarised once a year in a brochure.
          </p>

          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Latest</p>

          {/* Featured */}
          <Link href={`/news/${featured.slug}`}>
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl border border-gray-100 overflow-hidden group hover:border-gray-200 transition-colors bg-white">
              <div className="relative w-full h-56 md:h-auto bg-gradient-to-br from-indigo-50 to-blue-100">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="inline-block text-xs font-semibold tracking-wide text-blue-600 bg-blue-50 rounded-full px-3 py-1 mb-4 w-fit">
                  {featured.category}
                </span>

                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug group-hover:text-gray-600 transition-colors mb-3">
                  {featured.title}
                </h2>

                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {featured.excerpt}
                </p>

                <p className="text-xs text-gray-400">
                  {new Date(featured.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </Link>

          {/* ── FILTERS ── */}
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-sm px-4 py-1.5 rounded-full border transition-all ${active === cat
                    ? "bg-gray-900 text-white border-gray-900"
                    : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* ── GRID ── */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-sm text-gray-400 mb-6">
          {filtered.length} more {filtered.length === 1 ? "story" : "stories"}
          {active !== "All" && ` in ${active}`}
        </p>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-16">No more stories in this category yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((news) => (
              <Link key={news.id} href={`/news/${news.slug}`}>
                <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-colors h-full flex flex-col">
                  <div className="relative w-full h-40 bg-gradient-to-br from-purple-50 to-indigo-100">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-500 mb-2">
                      {news.category}
                    </p>

                    <h3 className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-gray-600 transition-colors mb-2 flex-1">
                      {news.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                      {news.excerpt}
                    </p>

                    <p className="text-xs text-gray-400 mt-3">
                      {new Date(news.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* ── WHAT WE TRACK ── */}
      <div className="bg-[#FAF8F4] border-t border-[#e5dcc5]">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className={prose.h2}>What We Track</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeTrack.map((item) => (
              <div key={item.name} className={prose.cardWhite}>
                <h3 className={prose.h3}>{item.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY THIS PAGE EXISTS ── */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className={prose.h2}>Why This Page Exists</h2>
        <p className={prose.p}>
          Buyers in this segment are typically making a four to five year commitment on a property
          that does not exist yet. What happens in the interim — to regulation, to infrastructure, to
          the market, to the build — is the substance of the investment.
        </p>
        <p className={`${prose.p} mb-12`}>
          We publish that here whether it helps the sales case or not. A circle rate hike raises your
          stamp duty; that goes on the page the same as a favourable market report does. You are
          better served by a full picture than a flattering one, and you would find the news
          elsewhere regardless.
        </p>

        <ProjectSnapshot
          title="Project Snapshot"
          rows={[
            ["Project", "CRC The Peridona, C1, Jaypee Greens, Greater Noida 201310"],
            ["Configuration", "4, 4.5 & 5.5 BHK from 4,950 sq ft"],
            ["Scale", "6.80 acres · 7 towers · 43 floors · 341 residences"],
            ["Tentative price", "₹12.5 Cr* onwards"],
            ["Developer", "CRC Group"],
            [
              "UP RERA No.",
              <>
                UPRERAPRJ298067/05/2025 ·{" "}
                <a
                  href="https://www.up-rera.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c8922a] hover:underline"
                >
                  up-rera.in
                </a>
              </>,
            ],
          ]}
        />

        <h2 className={`${prose.h2} mt-12`}>Related</h2>
        <p className={prose.p}>
          <Link href="/blogs" className={prose.link}>
            Blogs →
          </Link>{" "}
          — buyer guides and longer-form analysis
        </p>
        <p className={`${prose.p} mb-12`}>
          <Link href="/price" className={prose.link}>
            Price →
          </Link>{" "}
          ·{" "}
          <Link href="/floor-plans" className={prose.link}>
            Floor Plans →
          </Link>{" "}
          ·{" "}
          <Link href="/location-connectivity" className={prose.link}>
            Location →
          </Link>
        </p>

        <h2 className={prose.h2}>Speak to the Team</h2>
        <p className={prose.p}>For current pricing, availability, payment plans or a site visit:</p>
        <CtaRow
          items={[
            { label: "Contact Us", href: "/contact-us" },
            { label: "Download Brochure", brochure: true },
            { label: "Book a Site Visit", href: "/contact-us" },
          ]}
        />
      </div>

      <div className="relative">
        <StickyDownloadButton />
      </div>

    </section>
  );
}
