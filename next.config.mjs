/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["madconsolution.com", "firebasestorage.googleapis.com"], // Add the external domains you need here
  },
};

export default nextConfig;
