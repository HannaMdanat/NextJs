/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
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
          {
            protocol: 'https',
            hostname: 'ibb.co',
            port: ''
          },
          {
            protocol: 'https',
            hostname: 'via.placeholder.com',
            port: ''
          },
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
            port: ''
          }
        ],
      },
}

module.exports = nextConfig
