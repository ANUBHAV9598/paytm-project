/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui", "@repo/store"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};
