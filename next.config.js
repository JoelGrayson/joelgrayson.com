/** @type {import('next').NextConfig} */

const withMDX=require('@next/mdx')();
const jredirects=require('./jredirects/dist');
const { withPlausibleProxy }=require('next-plausible')

const nextConfig={
    reactStrictMode: true,
    swcMinify: true,
    redirects: jredirects,
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    i18n: {
        locales: ['en'],
        defaultLocale: 'en'
    },
    transpilePackages: [
        '@mui/material',
        '@ant-design/icons',
        '@ant-design/icons-svg',
        "rc-util"
    ],
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

module.exports=withMDX(withPlausibleProxy()(nextConfig));
