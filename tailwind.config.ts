import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(248 250 252)',
        foreground: 'rgb(15 23 42)',
        muted: 'rgb(241 245 249)',
      },
    },
  },
  plugins: [],
} satisfies Config
