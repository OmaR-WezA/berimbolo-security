/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/api/:path*', // عنوان سيرفر PHP
      },
    ];
  },
};

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

// module.exports = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };



export default nextConfig;
