/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "images.unsplash.com", "plus.unsplash.com"],
    unoptimized: true,
  },
}

module.exports = nextConfig
