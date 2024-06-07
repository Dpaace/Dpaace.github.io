/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: '#FF7F50',
        about: '#FFF2D7',
        btnHover: '#EA906C',
        skills: '#F9ED69',
        eduExp: '#F8C794',
      },
      fontFamily: {
        'markazi': ['Markazi Text'],
      },
      animation: {
        scroll: 'scroll 5s linear infinite',
        scrollBidirectional: 'scrollBidirectional 10s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },

        },
        scrollBidirectional: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-200%)' },
        },
      },
    },
  },
  plugins: [],
}

