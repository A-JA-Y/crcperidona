import Link from "next/link";
import Image from "next/image";
import { getPosts, BLOG_PATH } from "@/lib/cms";
import { blogData } from "@/data/blogData";
import StickyDownloadButton from "@/components/StickyButton";
import CmsUnavailable from "@/components/CmsUnavailable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs & Guides | CRC The Peridona",
  description:
    "Explore the latest insights, investment guides, and real estate market trends from CRC The Peridona.",
  alternates: {
    canonical: "https://thecrcperidona.com/blog",
  },
};

type UnifiedPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string | null;
  imageAlt: string | null;
  date: string | null;
  readTime: string;
  category: string;
  isStudio: boolean;
};

export default async function BlogPage() {
  const cmsResult = await getPosts(1, 100);

  if (!cmsResult.ok) {
    return <CmsUnavailable />;
  }

  const studioItems = cmsResult.data.items;

  // Map Studio posts
  const studioPosts: UnifiedPost[] = studioItems.map((item) => ({
    id: `studio-${item.slug}`,
    slug: item.slug,
    title: item.heading ?? item.title,
    description: item.description,
    imageUrl: item.imageUrl,
    imageAlt: item.imageAlt ?? item.title,
    date: item.publishedAt,
    readTime: `${item.readingTimeMinutes || 5} min read`,
    category: item.tags?.[0] ?? "Insights",
    isStudio: true,
  }));

  // Map local posts
  const localPosts: UnifiedPost[] = blogData.map((b) => ({
    id: b.id,
    slug: b.slug,
    title: b.title,
    description: b.excerpt,
    imageUrl: b.image,
    imageAlt: b.altText ?? b.title,
    date: b.date,
    readTime: b.readTime,
    category: b.category,
    isStudio: false,
  }));

  // Combine: Studio posts take precedence (and sit at top), local posts follow
  const allPosts = [
    ...studioPosts,
    ...localPosts.filter((lp) => !studioPosts.some((sp) => sp.slug === lp.slug)),
  ];

  const [featured, ...rest] = allPosts;

  return (
    <section className="w-full min-h-screen bg-white">
      {/* ── HERO ── */}
      <div className="bg-gray-50 border-b border-gray-100 px-6 pt-12 pb-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
            Insights &amp; Guides
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-8">
            Investment knowledge,<br className="hidden md:block" /> clearly explained
          </h1>

          {/* Featured Post */}
          {featured && (
            <Link href={`${BLOG_PATH}/${featured.slug}`}>
              <div className="grid md:grid-cols-2 gap-0 rounded-2xl border border-gray-100 overflow-hidden group hover:border-gray-200 transition-colors bg-white">
                <div className="relative w-full h-56 md:h-auto bg-gradient-to-br from-amber-50 to-yellow-100">
                  {featured.imageUrl ? (
                    <Image
                      src={featured.imageUrl}
                      alt={featured.imageAlt ?? featured.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-amber-800/40 text-sm font-medium">
                      CRC The Peridona
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <span className="inline-block text-xs font-semibold tracking-wide text-amber-700 bg-amber-50 rounded-full px-3 py-1 mb-4 w-fit">
                    {featured.category}
                  </span>

                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug group-hover:text-amber-700 transition-colors mb-3">
                    {featured.title}
                  </h2>

                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    {featured.description}
                  </p>

                  <p className="text-xs text-gray-400">
                    {featured.readTime}
                    {featured.date && (
                      <>
                        {" "}
                        &middot;{" "}
                        {new Date(featured.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </>
                    )}
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-sm text-gray-400 mb-6">
          {allPosts.length} {allPosts.length === 1 ? "article" : "articles"}
        </p>

        {allPosts.length === 0 ? (
          <p className="text-center text-gray-400 py-16">
            No articles published yet. Check back soon.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.id} href={`${BLOG_PATH}/${post.slug}`}>
                <div className="group flex flex-col h-full bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-colors">
                  <div className="relative w-full h-44 bg-gradient-to-br from-amber-50 to-yellow-100">
                    {post.imageUrl ? (
                      <Image
                        src={post.imageUrl}
                        alt={post.imageAlt ?? post.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-amber-800/40 text-xs font-medium">
                        CRC The Peridona
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>

                    <h3 className="text-base font-semibold text-gray-900 leading-snug group-hover:text-amber-700 transition-colors mb-2 flex-1">
                      {post.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-3">
                      {post.description}
                    </p>

                    <div className="border-t border-gray-100 pt-3">
                      <p className="text-xs text-gray-400">
                        {post.date
                          ? new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })
                          : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </section>
  );
}
