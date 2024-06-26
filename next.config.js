/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.com",
        port: "",
      },
    ],
    // domains: [
    //   "lh3.googleusercontent.com",
    //   "avatars.githubusercontent.com",
    //   "res.cloudinary.com",
    // ],
  },
  experimental: {
    // missingSuspenseWithCSRBailout: false,
  },
};

module.exports = nextConfig;
