/** @type {import('next').NextConfig} */

const redirects=require('./redirect/main');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects
};

module.exports = nextConfig;
