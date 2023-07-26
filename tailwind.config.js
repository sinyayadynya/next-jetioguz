/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
// const { fontFamily } = require('tailwindcss/defaultTheme');

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
            indigo: colors.indigo,
            sky: colors.sky,
            red: colors.red,
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
                    default: '#b65e41',
                    50: '#fbf6f1',
                    100: '#f5eadf',
                    200: '#ead2be',
                    300: '#dcb295',
                    400: '#ce8d69',
                    500: '#c3724c',
                    600: '#b65e41',
                    700: '#974a37',
                    800: '#7a3d32',
                    900: '#63342b',
                    950: '#351915',
                },
                green: {
                    default: '#7b8a2d',
                    50: '#f8f9ec',
                    100: '#f0f2d5',
                    200: '#e1e6b0',
                    300: '#cbd581',
                    400: '#b4c259',
                    500: '#97a73b',
                    600: '#7b8a2d',
                    700: '#5a6625',
                    800: '#495222',
                    900: '#3e4621',
                    950: '#20260d',
                },
                blue: {
                    default: '#228389',
                    50: '#f2fbfa',
                    100: '#d3f4f2',
                    200: '#a6e9e6',
                    300: '#72d6d5',
                    400: '#45b9bc',
                    500: '#2b9da1',
                    600: '#228389',
                    700: '#1e6167',
                    800: '#1c4e53',
                    900: '#1b4346',
                    950: '#0a2529',
                },
            },
            fontFamily: {
                // sans: ['Inter', ...fontFamily.sans],
                // mono: ['Martian Mono', ...fontFamily.serif],
                sans: ['var(--font-inter)'],
                heading: ['var(--font-sofia)'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
