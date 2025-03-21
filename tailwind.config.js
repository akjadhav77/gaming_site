/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-general": ["general", "sans-serif"],
        "robert-normal": ["robert-medium", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: '#DFDFF2',
          100: "#F0F2FA",
          200: "#101010",
          300: "#4FB4DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      }
    },
    plugins: [],
  },
};
