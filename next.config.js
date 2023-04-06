/** @type {import('next').NextConfig} */

const redirects=require('./redirects/dist/main').default;

module.exports={
    reactStrictMode: true,
    swcMinify: true,
    redirects: redirects,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
                pathname: '/vi/**',
            }
        ]
    }
};
