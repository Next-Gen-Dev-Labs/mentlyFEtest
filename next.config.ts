import type { NextConfig } from "next";
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.plugins.push(new CaseSensitivePathsPlugin());
    return config;
  },
};

export default nextConfig;
