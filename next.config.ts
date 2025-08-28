import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.metaboard.in",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "metaboard-assets.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
