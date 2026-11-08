/** @type {import('next').NextConfig} */
const nextConfig = {
  // Wiki pages read their Markdown from disk when rendered, so make sure the
  // files ship with the server build.
  outputFileTracingIncludes: {
    "/**": ["./content/pages/*.md"],
  },
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
