/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['assets.aceternity.com', 'images.unsplash.com'],
    },
};

module.exports = {
  experimental: {
    modern: true,
    polyfillsOptimization: true,
  },
};


export default nextConfig;
