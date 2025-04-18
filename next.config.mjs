/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'api.jsonsilo.com',
      'images.unsplash.com',
      'v0.blob.com',
      'i.ibb.co',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
