/** @type {import('next').NextConfig} */

const jredirects=require('./jredirects/dist');
const tailwindPlugin=require('tailwindcss/plugin');

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
    plugins: [
        tailwindPlugin(({addVariant})=>{
            addVariant('mobile', "@media screen and (max-width: theme('screens.sm'))"); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
                // for mobile:red instead of black md:red
        })
    ]
};
