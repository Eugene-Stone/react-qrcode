import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	basePath: '/react-qrcode',
	output: 'export',
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
