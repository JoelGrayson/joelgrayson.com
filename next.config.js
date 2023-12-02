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

    // Uncomment below in order to export as HTML
    // output: 'export',
    // basePath: '/joelgrayson.com',
    // assetPath: '/joelgrayson.com',
    // images: {
    //     unoptimized: true,
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: 'i.ytimg.com',
    //             pathname: '/vi/**',
    //         }
    //     ]
    // },
};

