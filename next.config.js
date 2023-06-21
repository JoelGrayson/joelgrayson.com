/** @type {import('next').NextConfig} */

const jredirects=require('./jredirects/dist');

module.exports={
    reactStrictMode: true,
    swcMinify: true,
    redirects: jredirects,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
                pathname: '/vi/**',
            }
        ]
    },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en'
    },
};

