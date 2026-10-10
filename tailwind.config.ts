import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class', '[data-theme="dusk"]'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          card: 'var(--bg-card)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        terracotta: {
          DEFAULT: '#D86A43',
          hover: '#BF532D',
          light: '#F8ECE6',
        },
        roseAccent: '#E58E80',
        goldAccent: '#EBB358',
        sageAccent: {
          DEFAULT: '#6B806E',
          soft: '#EDF3ED',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        glow: '0 0 35px rgba(216, 106, 67, 0.22)',
        subtle: '0 8px 24px rgba(38, 31, 29, 0.07)',
      },
    },
  },
  plugins: [],
} satisfies Config;
