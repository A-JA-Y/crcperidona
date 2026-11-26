function secretsMatch(given, expected) {
  if (given.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < given.length; i += 1) {
    diff |= given.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Update route: /api/revalidate
    if (url.pathname === "/api/revalidate") {
      if (request.method !== "POST") {
        return new Response("Method not allowed", { status: 405 });
      }

      const secret = env.CMS_REVALIDATE_SECRET;
      if (!secret) {
        return Response.json({ ok: false }, { status: 503 }); // fail closed
      }

      const headerSecret = request.headers.get("x-revalidate-secret") ?? "";
      if (!secretsMatch(headerSecret, secret)) {
        return Response.json({ ok: false }, { status: 401 });
      }

      let payload = {};
      try {
        payload = (await request.json()) ?? {};
      } catch {}

      if (payload.event === "ping") {
        return Response.json({ ok: true });
      }

      if (env.CMS_DEPLOY_HOOK_URL) {
        const hook = await fetch(env.CMS_DEPLOY_HOOK_URL, { method: "POST" });
        return Response.json({ ok: hook.ok }, { status: hook.ok ? 200 : 502 });
      }

      return Response.json({ ok: true });
    }

    // Serve static assets from out/
    return env.ASSETS.fetch(request);
  },
};

export default worker;
