/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#0a0a0a', // very dark, almost black
        surface: '#111111',
        primary: '#ffffff',
        secondary: '#a1a1aa', // zinc-400
        border: '#27272a', // zinc-800
      }
    },
  },
  plugins: [],
}
