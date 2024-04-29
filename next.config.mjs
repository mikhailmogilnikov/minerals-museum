/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '1.downloader.disk.yandex.ru',
        port: '',
        pathname: '/preview/**',
      },
    ],
  },
};

export default nextConfig;
