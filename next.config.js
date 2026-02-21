/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/', destination: '/landing.html', permanent: false },
      { source: '/webinar', destination: '/webinar.html', permanent: false },
    ]
  },
}
module.exports = nextConfig
