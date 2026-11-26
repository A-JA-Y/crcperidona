import { Suspense } from "react";
import Link from "next/link";
import { BLOG_PATH, getPosts } from "@/lib/cms";
import CmsUnavailable from "@/components/CmsUnavailable";

async function PostGrid({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const resolved = await searchParams;
  const page = Math.max(1, Number(resolved.page) || 1);
  const res = await getPosts(page);

  if (!res.ok) return <CmsUnavailable />;

  const { items, pages } = res.data;
  console.log(res.data)
  if (items.length === 0) {
    return <p className="py-12 text-center opacity-75">No posts yet.</p>;
  }

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((post) => (
          <article key={post.slug} className="flex flex-col rounded-lg border p-4">
            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt={post.imageAlt ?? post.title}
                className="mb-4 aspect-video w-full rounded object-cover"
              />
            )}
            <h2 className="text-lg font-semibold">
              <Link href={`${BLOG_PATH}/${post.slug}`}>
                {post.heading ?? post.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm opacity-80">{post.description}</p>
            {post.publishedAt && (
              <time className="mt-auto pt-4 text-xs opacity-60">
                {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            )}
          </article>
        ))}
      </div>

      {pages > 1 && (
        <nav className="mt-10 flex justify-center gap-4">
          {page > 1 && (
            <Link href={`${BLOG_PATH}?page=${page - 1}`} className="underline">
              Previous
            </Link>
          )}
          <span>
            Page {page} of {pages}
          </span>
          {page < pages && (
            <Link href={`${BLOG_PATH}?page=${page + 1}`} className="underline">
              Next
            </Link>
          )}
        </nav>
      )}
    </>
  );
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>
      <Suspense fallback={<p>Loading posts...</p>}>
        <PostGrid searchParams={searchParams} />
      </Suspense>
    </main>
  );
}