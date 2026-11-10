/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F3EEE3',
        'cream-dark': '#E8E0D0',
        'cream-light': '#F8F5EE',
        ink: '#171412',
        'ink-light': '#2D2926',
        'ink-muted': '#5C564E',
        burnt: '#D9541E',
        'burnt-dark': '#B8441A',
        'burnt-light': '#E6784A',
        warm: {
          100: '#F8F5EE',
          200: '#F3EEE3',
          300: '#E8E0D0',
          400: '#D4CABC',
          500: '#B5AA99',
          600: '#8A7F72',
          700: '#5C564E',
          800: '#2D2926',
          900: '#171412',
        }
      },
      fontFamily: {
        serif: ['"PP Editorial New"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 8vw, 9rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display': ['clamp(2.5rem, 6vw, 6rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'heading-xl': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'subheading': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3' }],
        'body-lg': ['clamp(1.05rem, 1.2vw, 1.25rem)', { lineHeight: '1.7' }],
        'body': ['clamp(0.95rem, 1vw, 1.05rem)', { lineHeight: '1.7' }],
        'caption': ['0.85rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
        'overline': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.15em' }],
      },
      spacing: {
        'section': 'clamp(6rem, 12vw, 12rem)',
        'section-sm': 'clamp(4rem, 8vw, 8rem)',
      },
      borderRadius: {
        'editorial': '1.5rem',
        'pill': '100px',
      },
      boxShadow: {
        'editorial': '0 4px 40px rgba(23, 20, 18, 0.06)',
        'editorial-lg': '0 8px 60px rgba(23, 20, 18, 0.1)',
        'editorial-xl': '0 16px 80px rgba(23, 20, 18, 0.12)',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

