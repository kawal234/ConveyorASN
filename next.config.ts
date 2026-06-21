import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/ConveyorASN' : '',
  assetPrefix: isProd ? '/ConveyorASN/' : '',
};

export default nextConfig;
