/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: process.env.API_URL,
    BASE_URL: process.env.BASE_URL,
  },
  i18n: {
    locales: ["th", "en"],
    defaultLocale: "th",
    localeDetection: true,
  },
  images: {
    loader: "imgix",
    path: "/",
  },
};

// if (process.env.BASE_URL) {
//   nextConfig.assetPrefix = process.env.BASE_URL + "/";
//   nextConfig.basePath = process.env.BASE_URL;
// }

module.exports = nextConfig;
