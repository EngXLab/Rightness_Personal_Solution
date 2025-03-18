import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-base': '#yourColorCode', // Replace with the desired color value
      },
      fontFamily: {
        primary: ['Poppins', ...fontFamily.sans],
        cursive: ['Itim', 'cursive', ...fontFamily.sans],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        rightToLeftSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        leftToRightSlide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out',
        rightToLeftSlide: 'rightToLeftSlide 30s linear infinite',
        leftToRightSlide: 'leftToRightSlide 30s linear infinite',
      },
    },
  },
  plugins: [],
};
