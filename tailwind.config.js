/** @type {import('tailwindcss').Config} */

const tailwindPlugin=require('tailwindcss/plugin');

module.exports = {
    darkMode: ['class'],
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
    			font: [
    				'var(--font)'
    			]
    		},
    		colors: {
    			'light-bg': 'var(--light-bg)',
    			'light-bg-darker': 'var(--light-bg-darker)',
    			'dark-bg': 'var(--dark-bg)',
    			'dark-bg-lighter': 'var(--dark-bg-lighter)',
    			'light-text': 'var(--light-text)',
    			'dark-text': 'var(--dark-text)',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
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
        }),
        require("tailwindcss-animate")
    ],
};

