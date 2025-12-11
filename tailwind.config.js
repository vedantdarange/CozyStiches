/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                sage: '#9CAF88',
                terracotta: '#D4A574',
                cream: '#F5F1E8',
                dustyRose: '#E8B4B8',
                linen: '#F9F5EB',
                clay: '#B8624A'
            },
            fontFamily: {
                handwritten: ['"Kalam"', 'cursive'],
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif']
            },
            animation: {
                'yarn-spin': 'yarn-spin 3s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}
