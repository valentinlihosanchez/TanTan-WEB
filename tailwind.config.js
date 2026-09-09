/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          border: 'rgba(255, 255, 255, 0.25)',
          bg: 'rgba(255, 255, 255, 0.45)',
          surface: 'rgba(15, 23, 42, 0.75)',
          glow: 'rgba(59, 130, 246, 0.35)',
        },
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          900: '#0c4a6e',
          dark: '#0f172a',
          darker: '#020617'
        }
      },
      boxShadow: {
        'liquid': '0 12px 35px -5px rgba(100, 116, 139, 0.18), 0 4px 12px 0 rgba(100, 116, 139, 0.08)',
        'liquid-card': '0 8px 20px -3px rgba(100, 116, 139, 0.12), inset 0 1.2px 1.5px 0 rgba(255, 255, 255, 0.95)',
        'liquid-hover': '0 14px 28px -4px rgba(100, 116, 139, 0.18), inset 0 1.5px 2px 0 rgba(255, 255, 255, 1)',
        'liquid-glow': '0 0 35px rgba(56, 189, 248, 0.35)',
        'liquid-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.4)',
      },
      backdropBlur: {
        'liquid': '30px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
