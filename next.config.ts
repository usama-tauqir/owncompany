import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/learning", destination: "/blogs", permanent: true },
      { source: "/insights", destination: "/thought-leadership", permanent: true },
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/careers", destination: "/career", permanent: true },
      { source: "/industries", destination: "/industry", permanent: true },
      { source: "/ksa", destination: "/ksa-arabic", permanent: true },
      { source: "/ksa-en", destination: "/ksa-english", permanent: true },
    ];
  },
};

export default nextConfig;
