/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  darkMode: "class",
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
     
    },
    screens: {
      xs: '330px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px'
    },
    fontFamily: {
      primary: 'var(--font-poppins)',
    },
    extend: {

      colors: {
        primary: '#1c1c22',
        dark: '#000C07',
        light: '#FFFFFF',
      accent: {
        DEFAULT: '#4D80E4',
        // DEFAULT: '#FE346E',
        // DEFAULT: '#00ff99',
        hover: '#00e187'
      }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      background: {
        lightCircle: 'background: repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 50px);'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}