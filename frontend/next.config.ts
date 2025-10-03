import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // Add any experimental features here if needed
  },
  // Remove unsupported cache configuration
};

export default nextConfig;
