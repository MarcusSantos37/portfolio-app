/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["portfolio-production-9e97.up.railway.app"],
  },
  env: {
    CMS_URL: "https://portfolio-production-9e97.up.railway.app",
  },
};

module.exports = nextConfig;
