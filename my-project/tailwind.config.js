/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceOnce: {
          '0%, 100%': {
            transform: 'rotateY(60deg)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'rotateY(180deg)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        bounceOnce: 'bounceOnce 2.5s ease-out',
      },
       screens: {
      'tablet': '640px',     
      'laptop': '1024px',
      'desktop': '1280px',
    },
    },

   
  },
  plugins: [],
}


