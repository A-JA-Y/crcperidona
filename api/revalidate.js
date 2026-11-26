function secretsMatch(given, expected) {
  if (given.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < given.length; i += 1) {
    diff |= given.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

export async function POST(request) {
  const secret = process.env.CMS_REVALIDATE_SECRET;
  if (!secret) return Response.json({ ok: false }, { status: 503 }); // fail closed
  if (!secretsMatch(request.headers.get("x-revalidate-secret") ?? "", secret)) {
    return Response.json({ ok: false }, { status: 401 });
  }

  let payload = {};
  try {
    payload = (await request.json()) ?? {};
  } catch {}

  if (payload.event === "ping") return Response.json({ ok: true });

  if (process.env.CMS_DEPLOY_HOOK_URL) {
    const hook = await fetch(process.env.CMS_DEPLOY_HOOK_URL, { method: "POST" });
    return Response.json({ ok: hook.ok }, { status: hook.ok ? 200 : 502 });
  }

  return Response.json({ ok: true });
}
