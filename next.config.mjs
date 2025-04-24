// next.config.mjs

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.pravatar.cc',
        },
      ],
    },
  };
  
  export default nextConfig;
  