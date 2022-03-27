/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://husker.vercel.app",
  sitemapSize: 100000,
  generateRobotsTxt: true,
};
