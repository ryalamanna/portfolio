/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ryal-s3bucket-1.s3.amazonaws.com',
          },
        ],
      },
}

module.exports = nextConfig
