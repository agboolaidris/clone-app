/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com'],
  },
  reactStrictMode: true,
  webpack5: true,
};

module.exports = nextConfig;
