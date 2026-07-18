/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: 'oklch(23% 0.03 255)',
        coral: 'oklch(70% 0.17 35)',
        'coral-dark': 'oklch(45% 0.14 35)',
        'coral-nav': 'oklch(55% 0.16 35)',
        'coral-tint': 'oklch(95% 0.02 35)',
        'coral-border': 'oklch(85% 0.06 35)',
        body: 'oklch(38% 0.01 255)',
        muted: 'oklch(50% 0.01 255)',
        card: 'oklch(98% 0.004 255)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
