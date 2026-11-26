/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://thecrcperidona.com",
  // Static export: `next build` has already copied public/ into out/ by the time this
  // runs, so write sitemap.xml (and robots.txt) straight into the deployed folder.
  outDir: "out",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // App Router icon files (app/icon.png, app/apple-icon.png) build as routes; they are not pages
  // Exclude studio-check (noindex) and placeholder from sitemap
  exclude: [
    "/icon.png",
    "/apple-icon.png",
    "/studio-check",
    "/studio-check/*",
    "/blog/placeholder",
  ],

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "daily",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
