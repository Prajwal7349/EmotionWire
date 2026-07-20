import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Re-enabled static export since Admin Panel was removed
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
