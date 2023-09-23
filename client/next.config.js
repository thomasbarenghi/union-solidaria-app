/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com'
      },
      {
        hostname: 'res.cloudinary.com'
      }
    ],
    disableStaticImages: true
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
