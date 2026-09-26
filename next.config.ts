import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname:"ik.imagekit.io",
        protocol:"https"
      },
      {
        hostname:"images.unsplash.com",
        protocol:"https"
      }
    ]
  }
};

export default nextConfig;
