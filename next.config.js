module.exports = {
  images: {
    domains: ["fakestoreapi.com"],
    // For newer Next.js versions (v12+), use:
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/img/**",
      },
    ],
  },
};
