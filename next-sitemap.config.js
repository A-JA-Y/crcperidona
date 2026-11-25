/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://thecrcperidona.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // App Router icon files (app/icon.png, app/apple-icon.png) build as routes; they are not pages
  exclude: ["/icon.png", "/apple-icon.png"],

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "daily",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};