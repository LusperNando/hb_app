/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",        
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translatey(100%)' },
          '100%': { transform: 'translatey(-100%)' },
        },
        waveAnimation: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(0)' },
        },
      animation: {
        wave: 'waveAnimation 20s  linear',
      },
    },
      animation: {
        scroll: 'scroll 7s linear infinite',
      },
    },
  },
  plugins: [],
}
