/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f4ff",
          200: "#c7d7fe",
          300: "#a5bcfc",
          400: "#8098f9",
          500: "#6172f3",
          600: "#4e52e8",
          700: "#3f3fcc",
          900: "#2f3282",
          950: "#1c1d4e",
        },
        accent: {
          500: "#8b5cf6",
          600: "#7c3aed",
        },
        dark: {
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(97, 114, 243, 0.3)",
        "glow-lg": "0 0 40px rgba(97, 114, 243, 0.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "fade-up": "fadeUp 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};
