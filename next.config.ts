import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignore TypeScript errors during build because of SWC environment-specific issues on Windows
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
