/** @type {import('next').NextConfig} */

const redirects=require('./redirect/main');

module.exports={ //next configuration
    reactStrictMode: true,
    redirects
};
