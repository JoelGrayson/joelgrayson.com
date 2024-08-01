const withBundleAnalyzer=require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE==='true',
});

const withMDX=require('@next/mdx')();
const jredirects=require('./jredirects/dist');
const { withPlausibleProxy }=require('next-plausible');

/** @type {import('next').NextConfig} */
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
    async headers() {
        return [
            {
                source: '/api/contact',
                headers: CORSHeaders('https://shirtocracy.com', 'POST')
            },
            {
                source: '/api/lirong-art-email-list/add',
                headers: CORSHeaders()
            },
            {
                source: '/api/log-event/rick-roll',
                headers: CORSHeaders()
            },
            {
                source: '/api/log-error/joelgreyson.com',
                headers: CORSHeaders('https://joelgreyson.com')
            }
        ];

        function CORSHeaders(origin='*', methods='GET, POST, PUT, PATCH, OPTIONS') {
            return [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: origin }, //the origin
                { key: "Access-Control-Allow-Methods", value: methods },
                { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization, X-Requested-With" },
            ];
        }
    }

    // Uncomment below in order to export as HTML
    // output: 'export',
    // basePath: '/joelgrayson.com',
    // assetPath: '/joelgrayson.com',
};

module.exports=withBundleAnalyzer(withMDX(withPlausibleProxy()(nextConfig)));



