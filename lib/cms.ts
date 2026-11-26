// Studio connect guide: version 6 · blocks guide: version 1.4

const CMS_BASE =
  process.env.CMS_API_URL ?? "https://cms.gcombinator.co";

export const CMS_SITE = "thecrcperidona";
export const BLOG_PATH = "/blog";
export const CMS_TAG = "cms-blog";
export const POSTS_PER_PAGE = 12;

export const DEFAULT_LOCALE = "en";
export const LOCALES = ["en"];

// --------------------------------------------------
// TYPES
// --------------------------------------------------

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
  toc: {
    id: string;
    text: string;
    level: number;
  }[];
  faq: {
    q: string;
    a: string;
  }[];
  faqPlacement: "body" | "field";
  headline: string | null;
  breadcrumbLabel: string | null;
  alternates: {
    locale: string;
    slug: string;
  }[];
}

export interface CmsPostList {
  total: number;
  page: number;
  limit: number;
  pages: number;
  items: CmsPostMeta[];
}

export interface CmsPathEntry {
  id: string;
  path: string;
  locale: string;
  kind: string;
  inFolder: boolean;
  noindex: boolean;
  lastmod: string | null;
  alternates: {
    locale: string;
    path: string;
  }[];
}

export interface CmsPageLink {
  path: string;
  kind: string;
  title: string;
  label: string;
  description: string;
  imageUrl: string | null;
  imageAlt: string | null;
  publishedAt: string | null;
  updatedAt: string | null;
}

export interface CmsPage extends Omit<CmsPost, "alternates"> {
  type: "page";
  id: string;
  noindex: boolean;
  path: string;
  kind: string;
  kindData: Record<string, unknown>;
  inFolder: boolean;
  breadcrumbs: CmsPageLink[];
  children?: CmsPageLink[];
  alternates: {
    locale: string;
    path: string;
  }[];
}

export interface CmsSitemap {
  blog: {
    slug: string;
    lastmod: string | null;
    locale: string;
    alternates: {
      locale: string;
      slug: string;
    }[];
  }[];
  pages: {
    slug: string;
    lastmod: string | null;
  }[];
  paths: CmsPathEntry[];
}

export type CmsResult<T> = { ok: true; data: T } | { ok: false };
type Outcome<T> = { kind: "ok"; data: T } | { kind: "missing" } | { kind: "error" };

// --------------------------------------------------
// FETCH HELPER
// --------------------------------------------------

async function cmsFetch<T>(path: string): Promise<Outcome<T>> {
  try {
    const res = await fetch(`${CMS_BASE}/api/v1/sites/${CMS_SITE}${path}`, {
      headers: {
        Accept: "application/json",
      },
    });

    if (res.status === 404) {
      return { kind: "missing" };
    }

    if (!res.ok) {
      console.warn(`[Studio] HTTP ${res.status} from ${path}`);
      return { kind: "error" };
    }

    const data = (await res.json()) as T;
    return { kind: "ok", data };
  } catch (err) {
    console.warn(`[Studio] Fetch failed for ${path}:`, err);
    return { kind: "error" };
  }
}

// --------------------------------------------------
// BLOG APIs
// --------------------------------------------------

export async function getPosts(page = 1, limit = POSTS_PER_PAGE): Promise<CmsResult<CmsPostList>> {
  const r = await cmsFetch<CmsPostList>(`/blog?page=${page}&limit=${limit}`);
  return r.kind === "ok" ? { ok: true, data: r.data } : { ok: false };
}

export async function getAllPosts(): Promise<CmsPostMeta[]> {
  const first = await getPosts(1, 500);
  if (!first.ok) {
    return [];
  }

  const posts = [...first.data.items];
  for (let page = 2; page <= first.data.pages; page++) {
    const next = await getPosts(page, 500);
    if (next.ok) {
      posts.push(...next.data.items);
    }
  }

  return posts;
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

// --------------------------------------------------
// SECTION 10: PAGES AT ANY ADDRESS
// --------------------------------------------------

export async function getPaths(): Promise<CmsResult<CmsPathEntry[]>> {
  const r = await cmsFetch<{ paths: CmsPathEntry[] }>("/paths?locale=all");
  return r.kind === "ok" ? { ok: true, data: r.data.paths } : { ok: false };
}

export async function getPage(
  path: string,
  locale: string = DEFAULT_LOCALE
): Promise<CmsResult<CmsPage | null>> {
  const r = await cmsFetch<CmsPage>(
    `/resolve?path=${encodeURIComponent(path)}&locale=${encodeURIComponent(locale)}`
  );
  if (r.kind === "ok") return { ok: true, data: r.data };
  if (r.kind === "missing") return { ok: true, data: null };
  return { ok: false };
}

// --------------------------------------------------
// URL HELPERS
// --------------------------------------------------

export const urlOf = (e: { path: string; locale: string }) =>
  e.locale === DEFAULT_LOCALE ? e.path : `/${e.locale}${e.path}`;

export function splitLocale(segments: string[]): { locale: string; path: string } {
  const [first, ...rest] = segments;
  if (first && first !== DEFAULT_LOCALE && LOCALES.includes(first)) {
    return { locale: first, path: `/${rest.join("/")}` };
  }
  return { locale: DEFAULT_LOCALE, path: `/${segments.join("/")}` };
}
