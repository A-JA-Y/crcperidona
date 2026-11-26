import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_PATH, getCmsSitemap, getPost } from "@/lib/cms";
import  CmsUnavailable  from "@/components/CmsUnavailable";
import { StudioBody } from "@/components/StudioBody";

const ORIGIN = "https://thecrcperidona.com";

export async function generateStaticParams() {
  const r = await getCmsSitemap();
  if (!r.ok || r.data.blog.length === 0) {
    return [{ slug: "placeholder" }];
  }
  return r.data.blog.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = await getPost(slug);
  if (!r.ok || !r.data) return {};

  const post = r.data;
  const ogImage = post.ogImageUrl ?? post.imageUrl;
  const canonical = `${ORIGIN}${BLOG_PATH}/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonical,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = await getPost(slug);

  if (!r.ok) return <CmsUnavailable />;
  if (r.data === null) notFound();

  const post = r.data;
  const postUrl = `${ORIGIN}${BLOG_PATH}/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.headline ?? post.title,
    description: post.description,
    image: post.imageUrl ?? post.ogImageUrl ?? undefined,
    datePublished: post.publishedAt ?? undefined,
    dateModified: post.updatedAt ?? post.publishedAt ?? undefined,
    mainEntityOfPage: postUrl,
  };

  const faqJsonLd =
    post.faq && post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((item) => ({
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

      <header className="mb-8">
        {post.eyebrow && (
          <p className="text-sm font-medium uppercase tracking-wide opacity-70">
            {post.eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-bold">{post.heading ?? post.title}</h1>
        {post.standfirst && (
          <p className="mt-3 text-lg opacity-80">{post.standfirst}</p>
        )}
      </header>

      {post.toc && post.toc.length >= 2 && (
        <nav className="studio-toc mb-8" aria-label="In this article">
          <details open>
            <summary>In this article</summary>
            <ol>
              {post.toc.map((entry) => (
                <li key={`${entry.id}-${entry.level}`} data-level={entry.level}>
                  <a href={`#${entry.id}`}>{entry.text}</a>
                </li>
              ))}
            </ol>
          </details>
        </nav>
      )}

      <StudioBody html={post.contentHtml} />

      {post.faqPlacement === "field" && post.faq && post.faq.length > 0 && (
        <section className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold">
            {post.faqHeading ?? "Frequently asked questions"}
          </h2>
          <dl className="mt-6 space-y-6">
            {post.faq.map((item, idx) => (
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