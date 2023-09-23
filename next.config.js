const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["media.licdn.com", "utfs.io"],
  },
};

module.exports = withContentlayer(nextConfig);
