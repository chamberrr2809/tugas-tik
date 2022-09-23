/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: [
      "tailwindui.com",
      "source.unsplash.com",
      "images.unsplash.com",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
