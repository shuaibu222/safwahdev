/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        autoFit: 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      colors: {
        'midnight': '#060515',
      },
      fontSize: {
        highfont: '21rem',
        highestfont: '26rem'
      },
    },
    
  },
  plugins: [],
};
