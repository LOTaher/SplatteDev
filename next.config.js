const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.licdn.com", "utfs.io"],
  },
};

module.exports = withContentlayer(nextConfig);
