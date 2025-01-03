import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-in-menu': 'slideInMenu 0.15s',
        'electric-border': 'electric-border 4s linear infinite',
        'spin-slow' : "spin 3s linear infinite",
      },
      keyframes: {
        slideInMenu: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'electric-border': {
          '0%': { 'background-position': '0 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0 50%' }
        }
      },
      backgroundSize: { '400%': '400%' }
    }

  },
  plugins: [],
} satisfies Config;
