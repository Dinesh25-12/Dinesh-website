/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
 theme: {
  extend: {
    animation: {
      spin: 'spin 40s linear infinite',
      'spin-reverse': 'spin 60s linear infinite reverse',
    },
  },
}

};
