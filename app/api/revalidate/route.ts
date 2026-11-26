import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { timingSafeEqual } from "node:crypto";
import { BLOG_PATH, CMS_TAG, LOCALES, urlOf } from "@/lib/cms";

function secretsMatch(given: string, expected: string): boolean {
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(request: Request) {
  const secret = process.env.CMS_REVALIDATE_SECRET;
  if (!secret) return NextResponse.json({ ok: false }, { status: 503 });

  if (!secretsMatch(request.headers.get("x-revalidate-secret") ?? "", secret)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  let payload: Record<string, unknown> = {};
  try {
    payload = ((await request.json()) ?? {}) as Record<string, unknown>;
  } catch {}

  revalidateTag(CMS_TAG, { expire: 0 });
  revalidatePath(BLOG_PATH);
  revalidatePath("/sitemap.xml");

  const slug = typeof payload.slug === "string" ? payload.slug : "";
  if (slug && payload.type === "blog") {
    revalidatePath(`${BLOG_PATH}/${slug}`);
  }

  const path = typeof payload.path === "string" ? payload.path : "";
  const locales = typeof payload.locale === "string" ? [payload.locale] : LOCALES;
  if (path) {
    for (const locale of locales) {
      revalidatePath(urlOf({ path, locale }));
    }
  }

  return NextResponse.json({ ok: true });
}