import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  // Explicitly set the root directory to resolve workspace root inference warnings.
  outputFileTracingRoot: path.join(__dirname),
  // @ts-ignore - Turbopack specific configuration to silence workspace warnings
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;