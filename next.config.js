/** @type {import('next').NextConfig} */

const jredirects=require('./jredirects/dist');

module.exports={
    reactStrictMode: true,
    swcMinify: true,
    redirects: jredirects,
    i18n: {
        locales: ['en'],
        defaultLocale: 'en'
    },
    images: {
        unoptimized: true, //comment out this line to export as HTML
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
                pathname: '/vi/**',
            }
        ]
    },

    // Uncomment below in order to export as HTML
    // output: 'export',
    // basePath: '/joelgrayson.com',
    // assetPath: '/joelgrayson.com',
};

