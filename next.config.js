/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
          // matching all API routes
          source: "/api/:path*",
          headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Allow-Origin", value: "*" }, 
              { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,DELETE,PATCH,POST,PUT" },
              { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
          ]
      }
  ]
  },
};
