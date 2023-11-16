/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.lexica.art",
      },
    ],
  },
};

module.exports = nextConfig;
