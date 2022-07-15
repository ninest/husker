/** @type {import('next').NextConfig} */

module.exports = {
  trailingSlash: false,
  reactStrictMode: true,
  pageExtensions: [
    "page.tsx",
    "page.ts",
    "page.jsx",
    "page.js",
    "api.tsx",
    "api.ts",
    "api.jsx",
    "api.js",
  ],
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
        source: "/dining",
        destination: "/huskycard/dining",
        permanent: true,
      },
      {
        source: "/huskycard/:path",
        destination: "/husky-card/:path",
        permanent: true,
      },
      {
        source: "/housing",
        destination: "/house",
        permanent: true,
      },
      {
        source: "/housing/:path",
        destination: "/house/:path",
        permanent: false,
      },
      {
        source: "/house/west-village",
        destination: "/house/west-village-a",
        permanent: false,
      },
    ];
  },
};
