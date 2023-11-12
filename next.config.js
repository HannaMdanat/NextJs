/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.imgur.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'api.lorem.space',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'i.postimg.cc',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
