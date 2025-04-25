import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://cdn.builder.io/api/v1/image/assets/TEMP/**?placeholderIfAbsent=true&apiKey=90dcac741cde4de98ca9cc5989ba22be')],
  },
}
 
export default nextConfig