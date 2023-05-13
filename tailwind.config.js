/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '320px',
      // => @media (min-width: 640px) { ... }
      md: '375px',
      lg: '425px',
      xl: '768px',
      '2xl': '1024px',
      '3xl': '1440px'
    },
    extend: {}
  },
  plugins: []
};
