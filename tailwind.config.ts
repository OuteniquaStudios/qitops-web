import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a237e',    // Deep blue
        accent: '#00e5ff',     // Cyan accent
        secondary: '#f5f5f5',   // Light gray
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        body: ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
