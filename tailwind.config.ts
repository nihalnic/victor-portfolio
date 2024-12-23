import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-500": "#0C151D",
        "primary-600": "#171F26",
        "light-primary": "#F1F2F4",
        "light-secondary": "#A3ABB2",
        "yellow-shade": "#FFE071",
      },
      backgroundImage: {
        "grid-bg":
          "radial-gradient(circle, rgba(255, 224, 113, 0.6) 0%, rgba(0, 0, 0, 0) 75%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
