/** @type {import('next').NextConfig} */

const redirects=require('./redirects/dist/main');

module.exports={
    reactStrictMode: true,
    swcMinify: true,
    redirects: async function() {
        return [
            {
              source: '/2019-campaign',
              destination: 'https://thejoelgrayson.wixsite.com/mysite',
              permanent: true
            },
            {
              source: '/2020-campaign',
              destination: '/joel-for-grade-rep-2020',
              permanent: true
            },
            { source: '/about', destination: '/', permanent: true },
            {
              source: '/audio/big-sur-sounds',
              destination: '/big-sur-sounds',
              permanent: true
            },
            {
              source: '/audio/zoom-sound-effects',
              destination: '/zoom-sfx',
              permanent: true
            },
            {
              source: '/box-direct-download-generator',
              destination: '/box-download-link-generator',
              permanent: true
            },
            {
              source: '/box-direct-download-link-generator',
              destination: '/box-download-link-generator',
              permanent: true
            },
            {
              source: '/box-download-generator',
              destination: '/box-download-link-generator',
              permanent: true
            },
            {
              source: '/box-download-link',
              destination: '/box-download-link-generator',
              permanent: true
            },
            {
              source: '/direct-download-link-generator-box',
              destination: '/box-download-link-generator',
              permanent: true
            },
            {
              source: '/download-link-generator-box',
              destination: '/box-download-link-generator',
              permanent: true
            },
            {
              source: '/bus-info-kiosk',
              destination: 'https://w.joelgrayson.com/bus-info-kiosk',
              permanent: true
            },
            {
              source: '/dev-merch',
              destination: 'https://developer-merch.herokuapp.com',
              permanent: true
            },
            {
              source: '/dev-merchandise',
              destination: 'https://developer-merch.herokuapp.com',
              permanent: true
            },
            {
              source: '/developer-merch',
              destination: 'https://developer-merch.herokuapp.com',
              permanent: true
            },
            {
              source: '/developer-merchandise',
              destination: 'https://developer-merch.herokuapp.com',
              permanent: true
            },
            {
              source: '/direct-download-link-generator-dropbox',
              destination: '/dropbox-download-link-generator',
              permanent: true
            },
            {
              source: '/download-link-generator-dropbox',
              destination: '/dropbox-download-link-generator',
              permanent: true
            },
            {
              source: '/dropbox-download-generator',
              destination: '/dropbox-download-link-generator',
              permanent: true
            },
            {
              source: '/dropbox-download-link',
              destination: '/dropbox-download-link-generator',
              permanent: true
            },
            {
              source: '/dropbox-generator',
              destination: '/dropbox-download-link-generator',
              permanent: true
            },
            {
              source: '/dropbox-link',
              destination: '/dropbox-download-link-generator',
              permanent: true
            },
            {
              source: '/dropbox-link-generator',
              destination: '/dropbox-download-link-generator',
              permanent: true
            },
            {
              source: '/drive-download-file-link-generator',
              destination: '/drive-download-link-generator',
              permanent: true
            },
            {
              source: '/drive-download-link',
              destination: '/drive-download-link-generator',
              permanent: true
            },
            {
              source: '/drive-link-generator',
              destination: '/drive-download-link-generator',
              permanent: true
            },
            {
              source: '/dropbox-direct-raw-image-link-generator',
              destination: '/dropbox-image-raw-link-generator',
              permanent: true
            },
            {
              source: '/dropbox-direct-raw-link-generator',
              destination: '/dropbox-image-raw-link-generator',
              permanent: true
            },
            {
              source: '/dropbox-image-direct-link-generator',
              destination: '/dropbox-image-raw-link-generator',
              permanent: true
            },
            {
              source: '/dropbox-image-direct-raw-link-generator',
              destination: '/dropbox-image-raw-link-generator',
              permanent: true
            },
            {
              source: '/dropbox-raw-image-link-generator',
              destination: '/dropbox-image-raw-link-generator',
              permanent: true
            },
            {
              source: '/dropbox-raw-link-generator',
              destination: '/dropbox-image-raw-link-generator',
              permanent: true
            },
            {
              source: '/electric-school-buses',
              destination: 'https://w.joelgrayson.com/electric-school-buses',
              permanent: true
            },
            {
              source: '/favicon',
              destination: '/favicon-fetcher',
              permanent: true
            },
            { source: '/jcase', destination: '/joel-case', permanent: true },
            { source: '/joelcase', destination: '/joel-case', permanent: true },
            {
              source: '/kiosk',
              destination: 'https://w.joelgrayson.com/kiosk',
              permanent: true
            },
            {
              source: '/muffin',
              destination: 'https://w.joelgrayson.com/kiosk',
              permanent: true
            },
            {
              source: '/download-link-generator-onedrive',
              destination: '/onedrive-download-link-generator',
              permanent: true
            },
            {
              source: '/onedrive-download-link',
              destination: '/onedrive-download-link-generator',
              permanent: true
            },
            {
              source: '/onedrive-link-generator',
              destination: '/onedrive-download-link-generator',
              permanent: true
            },
            {
              source: '/onedrive-download-generator',
              destination: '/onedrive-download-link-generator',
              permanent: true
            },
            {
              source: '/onedrive-download-generator-link',
              destination: '/onedrive-download-link-generator',
              permanent: true
            },
            {
              source: '/wix-code-new-tab',
              destination: '/open-in-new-tab-wix-code',
              permanent: true
            },
            {
              source: '/open-in-new-tab(-using)?(-wix-code)?-velo',
              destination: '/open-in-new-tab-wix-code',
              permanent: true
            },
            {
              source: '/performance',
              destination: '/performances',
              permanent: true
            },
            {
              source: '/perspective',
              destination: '/the-perspective',
              permanent: true
            },
            {
              source: '/Slaphappy',
              destination: 'https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A',
              permanent: true
            },
            {
              source: '/slaphappy',
              destination: 'https://www.youtube.com/channel/UCAwfG8BfhLuhMddFZh7z09A',
              permanent: true
            },
            { source: '/sfx', destination: '/audio', permanent: true },
            { source: '/sound', destination: '/audio', permanent: true },
            { source: '/sound-effects', destination: '/audio', permanent: true },
            {
              source: '/thelunarsquad-audio',
              destination: '/audio',
              permanent: true
            },
            { source: '/study', destination: '/study-music', permanent: true },
            { source: '/to-be', destination: '/to-be-finder', permanent: true },
            {
              source: '/to-be-verb',
              destination: '/to-be-finder',
              permanent: true
            },
            {
              source: '/to-be-verb-finder',
              destination: '/to-be-finder',
              permanent: true
            },
            { source: '/be-verb', destination: '/to-be-finder', permanent: true },
            { source: '/tools', destination: '/programs', permanent: true },
            { source: '/tool', destination: '/programs', permanent: true },
            {
              source: '/ccc',
              destination: '/combating-climate-change',
              permanent: true
            },
            {
              source: '/climate-change',
              destination: '/combating-climate-change',
              permanent: true
            }
          ]
    }
};
