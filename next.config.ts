import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		// viewTransition: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.ibb.co",
				port: "",
				pathname: "/**/*",
			},
		],
	},
};

export default nextConfig;
