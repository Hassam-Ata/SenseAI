import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to succeed even if there are type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
