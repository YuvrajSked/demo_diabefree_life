import type { NextConfig } from "next";

type TurbopackConfig = {
  experimental: {
    turbopack?: {
      root?: string;
    };
  };
};

const nextConfig: NextConfig & TurbopackConfig = {
  reactStrictMode: true,
  experimental: {
    turbopack: {
      root: __dirname
    }
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  }
};

export default nextConfig;
