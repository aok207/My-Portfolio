/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        shine: "shine 1s",
        ripple: "ripple 1s linear infinite",
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
        ripple: {
          "0%": { width: "0px", height: "0px", opacity: 0.5 },
          "100%": { width: "500px", height: "500px", opacity: 0 }
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        },
      },
    },
  },
  plugins: [],
  darkMode: "class"
}

