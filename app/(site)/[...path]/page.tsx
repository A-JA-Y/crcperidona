import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  type CmsPage,
  getPage,
  getPaths,
  splitLocale,
  urlOf,
} from "@/lib/cms";
import  CmsUnavailable from "@/components/CmsUnavailable";
import { StudioBody } from "@/components/StudioBody";

const ORIGIN = "https://thecrcperidona.com";

type Props = { params: Promise<{ path: string[] }> };

export async function generateStaticParams() {
  const r = await getPaths();
  const own = r.ok ? r.data.filter((e) => !e.inFolder) : [];
  return own.length
    ? own.map((e) => ({ path: urlOf(e).slice(1).split("/") }))
    : [{ path: ["studio-check"] }];
}

async function load(segments: string[]) {
  const { locale, path } = splitLocale(segments);
  const known = await getPaths();
  if (!known.ok) return { state: "down" as const };
  if (!known.data.some((e) => !e.inFolder && e.locale === locale && e.path === path)) {
    return { state: "missing" as const };
  }
  const r = await getPage(path, locale);
  if (!r.ok) return { state: "down" as const };
  return r.data ? { state: "ok" as const, page: r.data } : { state: "missing" as const };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = await load((await params).path);
  if (r.state !== "ok") return {};
  const p = r.page;
  const image = p.ogImageUrl ?? p.imageUrl;
  const canonical = `${ORIGIN}${urlOf({ path: p.path, locale: p.locale })}`;

  return {
    title: p.title,
    description: p.description,
    alternates: { canonical },
    openGraph: {
      title: p.title,
      description: p.description,
      url: canonical,
      images: image ? [image] : [],
    },
    robots: p.noindex ? { index: false, follow: false } : undefined,
    other: { "studio-page": p.id },
  };
}

function Breadcrumbs({ items }: { items?: { label: string; path: string }[] }) {
  if (!items || items.length === 0) return null;
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm opacity-75">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={`${item.path}-${idx}`} className="flex items-center gap-2">
            <span>/</span>
            {idx === items.length - 1 ? (
              <span>{item.label}</span>
            ) : (
              <Link href={item.path} className="hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ArticleView({ page }: { page: CmsPage }) {
  const pageUrl = `${ORIGIN}${urlOf({ path: page.path, locale: page.locale })}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.headline ?? page.title,
    description: page.description,
    image: page.imageUrl ?? page.ogImageUrl ?? undefined,
    datePublished: page.publishedAt ?? undefined,
    dateModified: page.updatedAt ?? page.publishedAt ?? undefined,
    mainEntityOfPage: pageUrl,
  };

  const faqJsonLd =
    page.faq && page.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }
      : null;

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Breadcrumbs items={page.breadcrumbs} />

      <header className="mb-8">
        {page.eyebrow && (
          <p className="text-sm font-medium uppercase tracking-wide opacity-70">
            {page.eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-bold">{page.heading ?? page.title}</h1>
        {page.standfirst && (
          <p className="mt-3 text-lg opacity-80">{page.standfirst}</p>
        )}
      </header>

      {page.toc && page.toc.length >= 2 && (
        <nav className="studio-toc mb-8" aria-label="In this article">
          <details open>
            <summary>In this article</summary>
            <ol>
              {page.toc.map((entry) => (
                <li key={`${entry.id}-${entry.level}`} data-level={entry.level}>
                  <a href={`#${entry.id}`}>{entry.text}</a>
                </li>
              ))}
            </ol>
          </details>
        </nav>
      )}

      <StudioBody html={page.contentHtml} />

      {page.faqPlacement === "field" && page.faq && page.faq.length > 0 && (
        <section className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold">
            {page.faqHeading ?? "Frequently asked questions"}
          </h2>
          <dl className="mt-6 space-y-6">
            {page.faq.map((item, idx) => (
              <div key={idx}>
                <dt className="font-semibold">{item.q}</dt>
                <dd className="mt-1 opacity-85">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}
    </article>
  );
}

function HubView({ page }: { page: CmsPage }) {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <Breadcrumbs items={page.breadcrumbs} />

      <header className="mb-8">
        {page.eyebrow && (
          <p className="text-sm font-medium uppercase tracking-wide opacity-70">
            {page.eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-bold">{page.heading ?? page.title}</h1>
        {page.standfirst && (
          <p className="mt-3 text-lg opacity-80">{page.standfirst}</p>
        )}
      </header>

      {page.contentHtml && (
        <div className="mb-10">
          <StudioBody html={page.contentHtml} />
        </div>
      )}

      {page.children && page.children.length > 0 && (
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {page.children.map((child) => (
            <article key={child.path} className="flex flex-col rounded-lg border p-4">
              {child.imageUrl && (
                <img
                  src={child.imageUrl}
                  alt={child.imageAlt ?? child.title}
                  className="mb-4 aspect-video w-full rounded object-cover"
                />
              )}
              <h2 className="text-lg font-semibold">
                <Link href={urlOf({ path: child.path, locale: child.locale })}>
                  {child.heading ?? child.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm opacity-80">{child.description}</p>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default async function StudioPage({ params }: Props) {
  const r = await load((await params).path);
  if (r.state === "down") return <CmsUnavailable />;
  if (r.state === "missing") notFound();
  const page = r.page;
  return page.kind === "hub" ? <HubView page={page} /> : <ArticleView page={page} />;
}