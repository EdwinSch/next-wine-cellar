/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      //   {
      //     protocol: "https",
      //     hostname: "images.vivino.com",
      //     port: "",
      //     pathname: "/**",
      //   },
      //   {
      //     protocol: "https",
      //     hostname: "www.henribloem.nl",
      //     port: "",
      //     pathname: "/**",
      //   },
    ],
  },
};

export default nextConfig;
