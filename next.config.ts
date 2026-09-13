import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/santhosh-portfolio",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
