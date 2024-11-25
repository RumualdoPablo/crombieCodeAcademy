import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      hostname: "fakestoreapi.com"
    }]
  }
  /* config options here */
};

export default nextConfig;
