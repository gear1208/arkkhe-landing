import type { NextConfig } from "next";
import { ASSET_BASE } from "./lib/assets";

const base = ASSET_BASE ? new URL(ASSET_BASE) : null;
const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(base && {
    images: {
      remotePatterns: [{
        protocol: base.protocol.replace(":", "") as "https",
        hostname: base.hostname,
        pathname: `${base.pathname}/**`
      }]
    }
  })
};
export default nextConfig;
