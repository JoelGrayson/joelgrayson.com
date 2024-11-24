/** @type {import('tailwindcss').Config} */

const tailwindPlugin=require('tailwindcss/plugin');

module.exports = {
    content: [ //all pages for compilation
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/data/**/*.{js,ts,jsx,tsx}',
        './src/helpers/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                font: ['var(--font)']
            },
            colors: {
                "dark-bg": "var(--dark-bg)",
                "dark-text": "var(--dark-text)",
                "dark-bg-lighter": "var(--dark-bg-lighter)"
            }
        }
    },
    blocklist: [
        'container'
    ],
    plugins: [
        tailwindPlugin(({ addVariant })=>{
            // 'mobile:red' or 'm:red' instead of 'black md:red'
            addVariant('mobile', "@media screen and (max-width: theme('screens.sm'))"); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
            addVariant('m', "@media screen and (max-width: theme('screens.sm'))"); // instead of hard-coded 640px use sm breakpoint value from config. Or anything

            // 'desktop:red' means only on desktop screens
            addVariant('desktop', "@media screen and (min-width: theme('screens.sm'))"); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
            addVariant('d', "@media screen and (min-width: theme('screens.sm'))"); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
        })
    ],
};

