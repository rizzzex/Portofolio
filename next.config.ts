import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.37.1', 'localhost'],
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "standalone",
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
