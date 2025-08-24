import type { Config } from 'tailwindcss'
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0f19',
        card: '#111827',
        accent: '#60a5fa',
      },
    },
  },
  plugins: [],
} satisfies Config
