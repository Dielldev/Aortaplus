/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111413',
        cream: '#F4F5F3',
        card: '#EBECEA',
        mint: '#0EB57F',
        'mint-dark': '#099061',
        'mint-soft': '#E3F3EC',
        line: '#E4E6E4',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(17,20,19,0.18)',
        pill: '0 10px 30px -10px rgba(17,20,19,0.25)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        'fade-up': 'fadeUp 0.8s ease both',
      },
    },
  },
  plugins: [],
}

