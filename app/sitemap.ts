import type { MetadataRoute } from "next";
import { connection } from "next/server";
import { BLOG_PATH, getCmsSitemap, urlOf } from "@/lib/cms";

const ORIGIN = "https://thecrcperidona.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connection();
  const r = await getCmsSitemap();

  const posts = r.ok
    ? r.data.blog.map((e) => ({
        url: `${ORIGIN}${BLOG_PATH}/${e.slug}`,
        lastModified: e.lastmod ?? undefined,
      }))
    : [];

  const pages = r.ok
    ? r.data.paths
        .filter((e) => !e.inFolder && !e.noindex)
        .map((e) => ({
          url: `${ORIGIN}${urlOf(e)}`,
          lastModified: e.lastmod ?? undefined,
        }))
    : [];

  return [
    { url: ORIGIN },
    { url: `${ORIGIN}${BLOG_PATH}` },
    ...posts,
    ...pages,
  ];
}