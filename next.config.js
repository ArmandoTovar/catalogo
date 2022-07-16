/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:true
}
module.exports = {
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}