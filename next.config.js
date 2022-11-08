/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOS_API: process.env.HOS_API,
  },
};

module.exports = nextConfig;
