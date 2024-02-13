/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/services/free",
        destination: "/wiki/free",
        permanent: true,
      },
      {
        source: "/house/:path*",
        destination: "/wiki/:path*",
        permanent: true,
      },
      {
        source: "/programs/:path*",
        destination: "/wiki/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
