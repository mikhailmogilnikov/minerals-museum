/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '213.208.190.34',
        port: '8081',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
