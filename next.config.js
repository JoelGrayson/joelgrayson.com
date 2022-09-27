/** @type {import('next').NextConfig} */

const redirects=require('./redirects/main');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects
};

module.exports = nextConfig;
