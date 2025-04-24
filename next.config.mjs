/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: { ignoreDuringBuilds: true },
    devIndicators: false, // you probably meant to disable the loading bar on dev
  };

export default nextConfig;
