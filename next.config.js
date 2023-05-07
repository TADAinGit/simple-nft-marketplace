/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "logos-world.net",
  //       port: "",
  //       // pathname: '/account123/**',
  //     },
  //   ],
  // },
  images: {
    domains: ["logos-world.net", "ipfs.moralis.io"],
  },
};

module.exports = nextConfig;
