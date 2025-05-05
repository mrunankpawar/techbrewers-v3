/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.aceternity.com', 'images.unsplash.com', 'techthrusters.org'],
  },
  experimental: {
    modern: true,
    polyfillsOptimization: true,
  },
};

export default nextConfig;