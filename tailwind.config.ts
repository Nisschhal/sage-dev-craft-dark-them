import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
        center: true,
      },
      spacing: {
        "custom-y-padding": "96px",
      },
    },
  },
  plugins: [],
} satisfies Config
