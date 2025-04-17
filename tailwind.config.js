/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 14px -7px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};