/** @type {import('next').NextConfig} */

const redirects=require('./redirects/dist/main').default;

module.exports={
    reactStrictMode: true,
    // reactStrictMode: false,
    swcMinify: true,
    redirects: redirects
};
