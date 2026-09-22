/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // "navy" остаётся именем токена по историческим причинам, но теперь
        // это тёплый графитово-чёрный (ink), а не синий — так весь сайт
        // перекрашивается в золотисто-белую палитру только через этот файл.
        navy: {
          950: '#1C1710',
          900: '#241D14',
          800: '#33291A',
          700: '#4A3B22',
          600: '#6B5730',
        },
        accent: {
          700: '#8A6A22',
          600: '#B8923C',
          500: '#C9A227',
          400: '#E0C673',
        },
        graphite: {
          900: '#221F1A',
          700: '#4A453D',
          500: '#79736A',
          300: '#B7B0A2',
        },
        mist: {
          50: '#FBF9F4',
          100: '#F5F0E6',
          200: '#E9E0CC',
        },
      },
      maxWidth: {
        content: '1180px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(28,23,16,0.05), 0 10px 28px -14px rgba(28,23,16,0.14)',
      },
    },
  },
  plugins: [],
}
