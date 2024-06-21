/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tourism.chcg.gov.tw",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "travel.taichung.gov.tw",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cloud.culture.tw",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;
