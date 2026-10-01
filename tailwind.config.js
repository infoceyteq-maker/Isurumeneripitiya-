/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand palette: Black / Ash (grey) / White
        ink: {
          DEFAULT: "#000000", // pure black – page background
          soft: "#070707", // slightly lifted black – alternating sections
          card: "#0e0e0e", // card surfaces
        },
        ash: {
          50: "#f5f5f5",
          100: "#e5e5e5",
          200: "#cfcfcf",
          300: "#a8a8a8", // secondary text
          400: "#8a8a8a",
          500: "#6b6b6b",
          600: "#4a4a4a",
          700: "#2e2e2e", // borders
          800: "#1c1c1c", // subtle surfaces
          900: "#121212",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        shimmer: "shimmer 6s linear infinite",
      },
      backgroundImage: {
        "ash-gradient":
          "linear-gradient(135deg, #000000 0%, #121212 45%, #1c1c1c 100%)",
      },
    },
  },
  plugins: [],
};
