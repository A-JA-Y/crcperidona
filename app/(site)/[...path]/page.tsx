import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  getPage,
  getPaths,
  splitLocale,
  urlOf,
  type CmsPage,
} from "@/lib/cms";
import { StudioBody } from "@/components/StudioBody";
import CmsUnavailable from "@/components/CmsUnavailable";

type Props = {
  params: Promise<{ path: string[] }>;
};

export async function generateStaticParams() {
  const r = await getPaths();
  const own = r.ok ? r.data.filter((e) => !e.inFolder) : [];

  // /studio-check is always listed when Studio is up.
  // Fallback covers a build during an outage.
  return own.length
    ? own.map((e) => ({ path: urlOf(e).slice(1).split("/") }))
    : [{ path: ["studio-check"] }];
}

async function load(segments: string[]) {
  const { locale, path } = splitLocale(segments);
  const known = await getPaths();

  if (!known.ok) return { state: "down" as const };

  const matches = known.data.some(
    (e) => !e.inFolder && e.locale === locale && e.path === path
  );

  if (!matches) return { state: "missing" as const };

  const r = await getPage(path, locale);
  if (!r.ok) return { state: "down" as const };

  return r.data
    ? { state: "ok" as const, page: r.data }
    : { state: "missing" as const };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { path } = await params;
  const r = await load(path);

  if (r.state !== "ok") return {};

  const p = r.page;
  const image = p.ogImageUrl ?? p.imageUrl;

  return {
    title: `${p.title} | CRC The Peridona`,
    description: p.description,
    openGraph: {
      title: p.title,
      description: p.description,
      images: image ? [{ url: image, alt: p.imageAlt ?? p.title }] : [],
    },
    robots: p.noindex ? { index: false, follow: false } : undefined,
    other: {
      "studio-page": p.id, // renders <meta name="studio-page" content="<id>">
    },
  };
}

export default async function StudioCatchAllPage({ params }: Props) {
  const { path } = await params;
  const r = await load(path);

  if (r.state === "down") return <CmsUnavailable />;
  if (r.state === "missing") notFound();

  const page = r.page;

  return page.kind === "hub" ? (
    <HubPageView page={page} />
  ) : (
    <ArticlePageView page={page} />
  );
}

/* ─────────────────────────────────────────────
   ARTICLE RENDERER (Section 10.1 & Blocks Guide)
───────────────────────────────────────────── */
function ArticlePageView({ page }: { page: CmsPage }) {
  const canonicalUrl = `https://thecrcperidona.com${urlOf(page)}`;
  const ogImage = page.ogImageUrl ?? page.imageUrl;

  const breadcrumbsList = [
    { name: "Home", path: "/" },
    ...(page.breadcrumbs ?? []).map((b) => ({
      name: b.label || b.title,
      path: b.path,
    })),
    { name: page.breadcrumbLabel || page.title, path: urlOf(page) },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbsList.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.path.startsWith("http")
        ? item.path
        : `https://thecrcperidona.com${item.path}`,
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.headline ?? page.title,
    description: page.description,
    image: ogImage ? [ogImage] : undefined,
    datePublished: page.publishedAt,
    dateModified: page.updatedAt ?? page.publishedAt,
    author: {
      "@type": "Organization",
      name: "CRC The Peridona",
      url: "https://thecrcperidona.com",
    },
    publisher: {
      "@type": "Organization",
      name: "CRC The Peridona",
      logo: {
        "@type": "ImageObject",
        url: "https://thecrcperidona.com/homeHero.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <>
      <Script
        id="schema-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="w-full bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-6">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-gray-400 mb-6 flex flex-wrap items-center gap-2"
          >
            {breadcrumbsList.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>›</span>}
                {i === breadcrumbsList.length - 1 ? (
                  <span className="text-gray-600 truncate max-w-xs">{b.name}</span>
                ) : (
                  <Link href={b.path} className="hover:text-gray-700">
                    {b.name}
                  </Link>
                )}
              </span>
            ))}
          </nav>

          {page.eyebrow && (
            <p className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-3">
              {page.eyebrow}
            </p>
          )}

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {page.heading ?? page.title}
          </h1>

          {page.standfirst && (
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 font-normal">
              {page.standfirst}
            </p>
          )}

          <div className="flex items-center gap-4 text-xs text-gray-400 border-b border-gray-100 pb-6">
            {page.publishedAt && (
              <span>
                {new Date(page.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            )}
            {page.readingTimeMinutes > 0 && (
              <span>&middot; {page.readingTimeMinutes} min read</span>
            )}
          </div>
        </div>

        {page.imageUrl && (
          <div className="max-w-4xl mx-auto px-6 mb-10">
            <div className="relative w-full h-72 md:h-[460px] rounded-2xl overflow-hidden border border-gray-100">
              <Image
                src={page.imageUrl}
                alt={page.imageAlt ?? page.title}
                fill
                priority
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        )}

        <div className="max-w-4xl mx-auto px-6 pb-20">
          {page.toc && page.toc.length >= 2 && (
            <div className="studio-toc my-8 p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <p className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                Contents
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {page.toc.map((item) => (
                  <li key={item.id} className={item.level === 3 ? "ml-4" : ""}>
                    <a
                      href={`#${item.id}`}
                      className="text-amber-800 hover:text-amber-900 hover:underline"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <StudioBody html={page.contentHtml} />
        </div>
      </article>
    </>
  );
}

/* ─────────────────────────────────────────────
   HUB RENDERER (Section 10.1 Rule 5)
───────────────────────────────────────────── */
function HubPageView({ page }: { page: CmsPage }) {
  const children = page.children ?? [];

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {page.heading ?? page.title}
        </h1>

        {page.contentHtml && (
          <div className="mb-12">
            <StudioBody html={page.contentHtml} />
          </div>
        )}

        {children.length > 0 && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {children.map((child) => (
              <Link key={child.path} href={child.path}>
                <div className="group border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-colors p-5 flex flex-col h-full bg-white">
                  {child.imageUrl && (
                    <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 bg-gray-50">
                      <Image
                        src={child.imageUrl}
                        alt={child.imageAlt ?? child.label}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <h2 className="text-base font-semibold text-gray-900 group-hover:text-amber-700 transition-colors mb-2">
                    {child.label}
                  </h2>

                  {child.description && (
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {child.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
