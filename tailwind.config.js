/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          500: '#f43f5e',
        },
        purple: {
          500: '#a855f7',
        },
        cyan: {
          500: '#06b6d4',
        },
        amber: {
          500: '#f59e0b',
        },
        pink: {
          500: '#ec4899',
        },
        violet: {
          500: '#8b5cf6',
        },
        emerald: {
          500: '#10b981',
        },
        teal: {
          500: '#14b8a6',
        },
        blue: {
          500: '#3b82f6',
        },
        fuchsia: {
          500: '#d946ef',
        },
        orange: {
          500: '#f97316',
        },
        yellow: {
          500: '#eab308',
        },
        indigo: {
          500: '#6366f1',
        },
      },
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};