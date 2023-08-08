/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'external-content.duckduckgo.com',
        port: '',
        pathname: '/iu/**',
      },
    ],
  },
};

module.exports = nextConfig;
