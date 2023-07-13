const { withContentlayer } = require("next-contentlayer");
const { get } = require("@vercel/edge-config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["media.licdn.com"],
  },
  redirects() {
    try {
      return get("redirects");
    } catch {
      return [];
    }
  },
};

module.exports = withContentlayer(nextConfig);
