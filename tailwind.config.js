/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",        // Include the root HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all source files
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translatey(100%)' },
          '100%': { transform: 'translatey(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 7s linear infinite',
      },
    },
  },
  plugins: [],
}
