/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  async redirects() {
    return [
      {
        source: "/free",
        destination: "/services/free",
        permanent: true,
      },
      {
        source: "/apps",
        destination: "/services/apps",
        permanent: true,
      },
      {
        source: "/personal",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/huskycard",
        destination: "/husky-card",
        permanent: true,
      },
      {
        source: "/huskycard/:path",
        destination: "/husky-card/:path",
        permanent: true,
      },
    ];
  },
};
