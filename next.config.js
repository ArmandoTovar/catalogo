/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:true
}
module.exports = {
  images: {
    disableStaticImages: true,
    loader: "custom",
    unoptimized: true,


  },
}