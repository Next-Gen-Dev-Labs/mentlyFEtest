import path from 'path';
import type { Configuration } from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config: Configuration) => {
    if (!config.resolve) config.resolve = {};
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, 'src'),
      },
    };
    
    return config;
  },
};

export default nextConfig;
