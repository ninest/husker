/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  async redirects() {
    return [
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
