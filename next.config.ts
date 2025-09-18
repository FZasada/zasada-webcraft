import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export', // Required for npm run export
    images: {
        unoptimized: true, // GitHub Pages doesn’t support dynamic image optimization
    },
};

export default nextConfig;
