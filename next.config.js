module.exports = {
  reactStrictMode: true,
  experimental: { esmExternals: true },
  async redirects() {
    return [
      {
        source: "/books",
        destination: "/resources/download-books",
        permanent: true,
      },
      {
        source: "/huskycard/uses",
        destination: "/free",
        permanent: true,
      },
    
    ];
  },
};
