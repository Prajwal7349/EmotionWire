import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Removed to enable dynamic runtime features for the Admin Panel
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
