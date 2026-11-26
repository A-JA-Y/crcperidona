// Studio connect guide: version 6 · blocks guide: version 1.4

const CMS_BASE = process.env.CMS_API_URL ?? "https://cms.gcombinator.co";
export const CMS_SITE = "thecrcperidona";
export const BLOG_PATH = "/blog";
export const CMS_TAG = "cms-blog";
export const POSTS_PER_PAGE = 12;
export const DEFAULT_LOCALE = "en";
export const LOCALES = ["en"];

export interface CmsPostMeta {
  slug: string;
  locale: string;
  title: string;
  description: string;
  imageUrl: string | null;
  imageAlt: string | null;
  ogImageUrl: string | null;
  tags: string[];
  readingTimeMinutes: number;
  publishedAt: string | null;
  updatedAt: string | null;
  heading: string | null;
  eyebrow: string | null;
  standfirst: string | null;
  faqHeading: string | null;
}

export interface CmsPost extends CmsPostMeta {
  contentHtml: string;
  toc: { id: string; text: string; level: number }[];
  faq: { q: string; a: string }[];
  faqPlacement: "body" | "field";
  headline: string | null;
  breadcrumbLabel: string | null;
  alternates: { locale: string; slug: string }[];
}

export interface CmsPostList {
  total: number;
  page: number;
  limit: number;
  pages: number;
  items: CmsPostMeta[];
}

export interface CmsPathEntry {
  path: string;
  locale: string;
  inFolder: boolean;
  noindex: boolean;
  lastmod: string | null;
}

export interface CmsPageChild {
  path: string;
  slug: string;
  locale: string;
  title: string;
  heading: string | null;
  description: string;
  imageUrl: string | null;
  imageAlt: string | null;
  publishedAt: string | null;
}

export interface CmsPage extends CmsPost {
  id: string;
  path: string;
  kind: "article" | "hub";
  noindex: boolean;
  breadcrumbs?: { label: string; path: string }[];
  children?: CmsPageChild[];
}

export interface CmsSitemap {
  blog: {
    slug: string;
    lastmod: string | null;
    locale: string;
    alternates: { locale: string; slug: string }[];
  }[];
  pages: { slug: string; lastmod: string | null }[];
  paths: CmsPathEntry[];
}

export type CmsResult<T> = { ok: true; data: T } | { ok: false };
type Outcome<T> = { kind: "ok"; data: T } | { kind: "missing" } | { kind: "error" };

async function cmsFetch<T>(path: string): Promise<Outcome<T>> {
  const res = await fetch(`${CMS_BASE}/api/v1/sites/${CMS_SITE}${path}`, {
    next: { revalidate: 300, tags: [CMS_TAG] },
  });
  if (res.status === 404) {
    return { kind: "missing" };
  }
  if (!res.ok) {
    throw new Error(`Studio answered ${res.status} for ${path}`);
  }
  const data = (await res.json()) as T;
  return { kind: "ok", data };
}

export async function getPosts(page = 1): Promise<CmsResult<CmsPostList>> {
  const r = await cmsFetch<CmsPostList>(`/blog?page=${page}&limit=${POSTS_PER_PAGE}`);
  return r.kind === "ok" ? { ok: true, data: r.data } : { ok: false };
}

export async function getPost(slug: string): Promise<CmsResult<CmsPost | null>> {
  const r = await cmsFetch<CmsPost>(`/blog/${encodeURIComponent(slug)}`);
  if (r.kind === "ok") return { ok: true, data: r.data };
  if (r.kind === "missing") return { ok: true, data: null };
  return { ok: false };
}

export async function getCmsSitemap(): Promise<CmsResult<CmsSitemap>> {
  const r = await cmsFetch<CmsSitemap>("/sitemap");
  return r.kind === "ok" ? { ok: true, data: r.data } : { ok: false };
}

export async function getPaths(): Promise<CmsResult<CmsPathEntry[]>> {
  const r = await cmsFetch<{ paths: CmsPathEntry[] } | CmsPathEntry[]>("/paths?locale=all");
  if (r.kind !== "ok") return { ok: false };
  const list = Array.isArray(r.data) ? r.data : (r.data.paths ?? []);
  return { ok: true, data: list };
}

export async function getPage(path: string, locale: string): Promise<CmsResult<CmsPage | null>> {
  const r = await cmsFetch<CmsPage>(
    `/resolve?path=${encodeURIComponent(path)}&locale=${encodeURIComponent(locale)}`
  );
  if (r.kind === "ok") return { ok: true, data: r.data };
  if (r.kind === "missing") return { ok: true, data: null };
  return { ok: false };
}

export const urlOf = (e: { path: string; locale: string }) =>
  e.locale === DEFAULT_LOCALE ? e.path : `/${e.locale}${e.path}`;

export function splitLocale(segments: string[]): { locale: string; path: string } {
  const [first, ...rest] = segments;
  if (first && first !== DEFAULT_LOCALE && LOCALES.includes(first)) {
    return { locale: first, path: `/${rest.join("/")}` };
  }
  return { locale: DEFAULT_LOCALE, path: `/${segments.join("/")}` };
}