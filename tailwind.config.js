/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-1': '#0E141C',
        'dark-blue-2': '#0A0F14',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #0E141C, #0A0F14)',
      },
      fontFamily: {
        'usually': ['Usually-font', 'sans-serif'],
        'uindbase': ['Uindbase Font 1', 'sans-serif'],
        'usuallybold': ['Usually-font-Bold', 'sans-serif'],
        'arial': ['Arial', 'sans-serif'],
      },
      textShadow: {
        'custom': '10px 24px 10px #0000005E',
      }
    
    },
  },
  plugins: [],
}
