/** @type {import('tailwindcss').Config} */

const tailwindPlugin=require('tailwindcss/plugin');

module.exports = {
    content: [ //all pages for compilation
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './data/**/*.{js,ts,jsx,tsx}',
        './helpers/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {}
    },
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

