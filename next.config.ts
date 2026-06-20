import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/ConveyorASN',
  assetPrefix: '/ConveyorASN/',
};

export default nextConfig;
