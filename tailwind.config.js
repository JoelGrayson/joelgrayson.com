module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {}
    },
    plugins: [],
    purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx", "./public/**/*.html"],
};
