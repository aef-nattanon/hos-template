/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOS_API: process.env.HOS_API,
  },
  i18n: {
    locales: ["th", "en"],
    defaultLocale: "th",
  },
};

module.exports = nextConfig;
