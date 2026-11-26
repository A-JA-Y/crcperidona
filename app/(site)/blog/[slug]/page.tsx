import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import path from "path";
import fs from "fs";
import type { Metadata } from "next";
import { getPost, getCmsSitemap, type CmsPost } from "@/lib/cms";
import { blogData } from "@/data/blogData";
import { StudioBody } from "@/components/StudioBody";
import CmsUnavailable from "@/components/CmsUnavailable";
import BlogContactForm from "@/components/BlogContactForm";
import RelatedPosts from "@/components/RelatedPosts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/* ─────────────────────────────────────────────
   STATIC PARAMS
───────────────────────────────────────────── */
export async function generateStaticParams() {
  const r = await getCmsSitemap();
  const studioSlugs = r.ok ? r.data.blog.map((e) => ({ slug: e.slug })) : [];
  const localSlugs = blogData.map((b) => ({ slug: b.slug }));

  const seen = new Set<string>();
  const combined: { slug: string }[] = [];

  for (const item of [...studioSlugs, ...localSlugs]) {
    if (!seen.has(item.slug)) {
      seen.add(item.slug);
      combined.push(item);
    }
  }

  if (combined.length === 0) {
    return [{ slug: "placeholder" }];
  }

  return combined;
}

/* ─────────────────────────────────────────────
   METADATA
───────────────────────────────────────────── */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug === "placeholder") return {};

  // Check Studio first
  const studioResult = await getPost(slug);
  if (studioResult.ok && studioResult.data) {
    const post = studioResult.data;
    const ogImage = post.ogImageUrl ?? post.imageUrl;
    const url = `https://thecrcperidona.com/blog/${slug}`;

    return {
      title: `${post.title} | CRC The Peridona`,
      description: post.description,
      alternates: {
        canonical: url,
      },
      openGraph: {
        type: "article",
        title: post.title,
        description: post.description,
        url,
        siteName: "CRC The Peridona",
        locale: "en_IN",
        images: ogImage ? [{ url: ogImage, alt: post.imageAlt ?? post.title }] : [],
        publishedTime: post.publishedAt ?? undefined,
        modifiedTime: post.updatedAt ?? post.publishedAt ?? undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: ogImage ? [ogImage] : [],
      },
    };
  }

  // Check local blog data
  const local = blogData.find((b) => b.slug === slug);
  if (local) {
    const title = local.metaTitle || local.title;
    const description = local.metaDescription || local.excerpt;
    const url = `https://thecrcperidona.com/blog/${slug}`;
    const imageUrl = typeof local.image === "string" ? local.image : "";

    return {
      title,
      description,
      keywords: local.keywords ?? [],
      alternates: {
        canonical: local.canonical || url,
      },
      openGraph: {
        type: "article",
        url: local.canonical || url,
        title,
        description,
        siteName: "CRC The Peridona",
        locale: "en_IN",
        images: imageUrl ? [{ url: imageUrl, alt: local.title }] : [],
        publishedTime: local.date,
        modifiedTime: local.updatedAt,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: imageUrl ? [imageUrl] : [],
      },
    };
  }

  return {};
}

/* ─────────────────────────────────────────────
   LOCAL MDX LOADER
───────────────────────────────────────────── */
async function getLocalBlogContent(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "content", "blogs", `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;
    const mod = await import(`@/content/blogs/${slug}.mdx`);
    return mod.default;
  } catch {
    return null;
  }
}

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug === "placeholder") {
    notFound();
  }

  // Check Studio
  const studioResult = await getPost(slug);

  if (studioResult.ok && studioResult.data) {
    return <StudioPostView post={studioResult.data} />;
  }

  // If Studio is down, and it's not a local post, render calm page
  const local = blogData.find((b) => b.slug === slug);
  if (!studioResult.ok && !local) {
    return <CmsUnavailable />;
  }

  // Check local MDX
  if (local) {
    const LocalContent = await getLocalBlogContent(slug);
    if (LocalContent) {
      return <LocalPostView blog={local} Content={LocalContent} slug={slug} />;
    }
  }

  notFound();
}

/* ─────────────────────────────────────────────
   STUDIO POST RENDERER (Blocks Guide)
───────────────────────────────────────────── */
function StudioPostView({ post }: { post: CmsPost }) {
  const canonicalUrl = `https://thecrcperidona.com/blog/${post.slug}`;
  const ogImage = post.ogImageUrl ?? post.imageUrl;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.headline ?? post.title,
    description: post.description,
    image: ogImage ? [ogImage] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://thecrcperidona.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://thecrcperidona.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.breadcrumbLabel ?? post.title,
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema =
    post.faq && post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }
      : null;

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
      {faqSchema && (
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="w-full bg-white">
        {/* Header container */}
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-gray-700">Blog</Link>
            <span>›</span>
            <span className="text-gray-600 truncate max-w-xs">{post.breadcrumbLabel ?? post.title}</span>
          </nav>

          {post.eyebrow && (
            <p className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-3">
              {post.eyebrow}
            </p>
          )}

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {post.heading ?? post.title}
          </h1>

          {post.standfirst && (
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 font-normal">
              {post.standfirst}
            </p>
          )}

          <div className="flex items-center gap-4 text-xs text-gray-400 border-b border-gray-100 pb-6">
            {post.publishedAt && (
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            )}
            {post.readingTimeMinutes > 0 && (
              <span>&middot; {post.readingTimeMinutes} min read</span>
            )}
          </div>
        </div>

        {/* Hero Image */}
        {post.imageUrl && (
          <div className="max-w-4xl mx-auto px-6 mb-10">
            <div className="relative w-full h-72 md:h-[460px] rounded-2xl overflow-hidden border border-gray-100">
              <Image
                src={post.imageUrl}
                alt={post.imageAlt ?? post.title}
                fill
                priority
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Post Content */}
        <div className="max-w-4xl mx-auto px-6 pb-20">
          {/* Table of Contents */}
          {post.toc && post.toc.length >= 2 && (
            <div className="studio-toc my-8 p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <p className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                Contents
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {post.toc.map((item) => (
                  <li
                    key={item.id}
                    className={item.level === 3 ? "ml-4" : ""}
                  >
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

          {/* Sanitized HTML Body */}
          <StudioBody html={post.contentHtml} />

          {/* FAQ (rendered only if field placement, to avoid duplicating body placement) */}
          {post.faq && post.faq.length > 0 && post.faqPlacement === "field" && (
            <div className="mt-14 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {post.faqHeading || "Frequently Asked Questions"}
              </h2>
              <div className="space-y-4">
                {post.faq.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-gray-200 bg-gray-50/50"
                  >
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      {item.q}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}

/* ─────────────────────────────────────────────
   LOCAL MDX POST RENDERER
───────────────────────────────────────────── */
function LocalPostView({
  blog,
  Content,
  slug,
}: {
  blog: (typeof blogData)[0];
  Content: React.ComponentType;
  slug: string;
}) {
  const imageUrl = typeof blog.image === "string" ? blog.image : "";

  return (
    <article className="w-full bg-white">
      {/* HERO */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={blog.altText || blog.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        ) : null}

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

        <div className="absolute bottom-0 px-6 md:px-16 py-10 max-w-5xl">
          <span className="text-xs text-white/90 bg-amber-700/80 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
            {blog.category}
          </span>

          <h1 className="text-2xl md:text-4xl text-white font-bold mt-4 leading-tight">
            {blog.title}
          </h1>

          <p className="text-xs text-white/80 mt-3">
            {new Date(blog.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
            &middot; {blog.readTime}
          </p>
        </div>
      </div>

      {/* BODY */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid lg:grid-cols-[2.2fr_1fr] gap-12">
        <div className="prose prose-lg max-w-none">
          <Content />
        </div>

        <aside className="lg:sticky lg:top-8 space-y-8">
          <BlogContactForm />
          <RelatedPosts currentSlug={slug} />
        </aside>
      </div>
    </article>
  );
}
