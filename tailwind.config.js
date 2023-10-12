/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        black: '#000000',
        darkGray: '#303030',
        yellow: '#ffdc26',
        green: '#00de91',
        gray: '#979797',
        lightGray: '#fafafa',
        white: '#ffffff',
        blue: '#1cadff',
        error: '#c53636',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      height: {
        165: '42rem',
      },
    },
  },
  plugins: [],
};
