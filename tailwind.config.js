/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.neutral,
            red: colors.red,
            green: colors.emerald,
            rose: colors.rose,
            orange: colors.orange,
            amber: colors.amber,
            lime: colors.lime,
            yellow: colors.yellow,
        },
        container: {
            screens: {
                sm: '100%',
                md: '100%',
                lg: '1024px',
                xl: '1264px',
            },
        },
        extend: {
            colors: {
                success: '#008068',
                primary: {
                    default: '#CD5F15',
                    50: '#FFF2ED',
                    100: '#FCE3D6',
                    200: '#F5BAA6',
                    300: '#E88F76',
                    400: '#DC6547',
                    500: '#C54427',
                    600: '#A22F1A',
                    700: '#7D1E16',
                    800: '#5A1512',
                    900: '#3D0F0E',
                },
            },
            fontFamily: {
                sans: ['Inter', ...fontFamily.sans],
                serif: ['Lexend', ...fontFamily.serif],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
