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
    
    ];
  },
};
