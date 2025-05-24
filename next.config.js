/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.cache = false; // Disable webpack cache temporarily
    return config;
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig 