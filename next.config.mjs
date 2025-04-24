/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: { ignoreDuringBuilds: true },
    devIndicators: false,
    async rewrites() {
      return [
        {
          source: '/dashboard',
          destination: '/', // or wherever you want to redirect it
        },
      ];
    },
  };
  
  export default nextConfig;
  