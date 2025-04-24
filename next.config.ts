const { withNetlify } = require('@netlify/next');
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
};

export default withNetlify(nextConfig);
