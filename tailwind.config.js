/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pageSetup/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: "rgb(var(--color-white, 255,255,255))",
        },
        black: {
          DEFAULT: "rgb(var(--color-black, 0,0,0))",
        },
        peach: {
          DEFAULT: "rgb(var(--color-peach, 250,122,122))",
        },
        orange: {
          DEFAULT: "rgb(var(--color-orange, 247,154,99))",
        },
        yellow: {
          DEFAULT: "rgb(var(--color-yellow, 247,191,99))",
        },
        red: {
          DEFAULT: "rgb(var(--color-red, 232,93,117))",
          100: "rgb(var(--color-red-100, 255,244,246))",
          200: "rgb(var(--color-red-200, 254,212,220))",
          300: "rgb(var(--color-red-300, 255,140,160))",
          400: "rgb(var(--color-red-400, 236,41,75))",
          500: "rgb(var(--color-red-500, 213,0,37))",
          600: "rgb(var(--color-red-600, 165,1,29))",
          700: "rgb(var(--color-red-700, 117,0,20))",
        },
        green: {
          DEFAULT: "rgb(var(--color-green, 123,213,85))",
          100: "rgb(var(--color-green-100, 245,249,243))",
          200: "rgb(var(--color-green-200, 226,246,217))",
          300: "rgb(var(--color-green-300, 160,241,126))",
          400: "rgb(var(--color-green-400, 119,220,76))",
          500: "rgb(var(--color-green-500, 83,175,45))",
          600: "rgb(var(--color-green-600, 56,126,26))",
          700: "rgb(var(--color-green-700, 46,90,27))",
          800: "rgb(var(--color-green-800, 41,66,31))",
        },
        blue: {
          DEFAULT: "rgb(var(--color-blue, 61,180,242))",
          50: "rgb(var(--color-blue-50, 172,213,242))",
          100: "rgb(var(--color-blue-100, 247,250,252))",
          200: "rgb(var(--color-blue-200, 236,246,254))",
          300: "rgb(var(--color-blue-300, 201,232,255))",
          400: "rgb(var(--color-blue-400, 143,215,255))",
          500: "rgb(var(--color-blue-500, 111,200,255))",
          550: "rgb(var(--color-blue-550, 53,119,255))",
          600: "rgb(var(--color-blue-600, 61,180,242))",
          700: "rgb(var(--color-blue-700, 8,143,214))",
          800: "rgb(var(--color-blue-800, 12,101,166))",
          900: "rgb(var(--color-blue-900, 11,70,113))",
          1000: "rgb(var(--color-blue-1000, 16,61,85))",
          dim: "rgb(var(--color-blue-dim, 141,178,219))",
        },
        gray: {
          100: "rgb(var(--color-gray-100, 251,251,251))",
          200: "rgb(var(--color-gray-200, 237,241,245))",
          300: "rgb(var(--color-gray-300, 221,230,238))",
          400: "rgb(var(--color-gray-400, 201,215,227))",
          500: "rgb(var(--color-gray-500, 173,192,210))",
          600: "rgb(var(--color-gray-600, 139,160,178))",
          700: "rgb(var(--color-gray-700, 116,136,153))",
          800: "rgb(var(--color-gray-800, 100,115,128))",
          900: "rgb(var(--color-gray-900, 81,97,112))",
          1000: "rgb(var(--color-gray-1000, 64,78,92))",
          1100: "rgb(var(--color-gray-1100, 38,52,63))",
          1200: "rgb(var(--color-gray-1200, 27,30,31))",
        },
        background: {
          100: "rgb(var(--color-background-100, 251,251,251))",
          200: "rgb(var(--color-background-200, 237,241,245))",
          300: "rgb(var(--color-background-300, 221,230,238))",
          400: "rgb(var(--color-background-400, 201,215,227))",
          500: "rgb(var(--color-background-500, 173,192,210))",
          600: "rgb(var(--color-background-600, 139,160,178))",
          700: "rgb(var(--color-background-700, 116,136,153))",
          800: "rgb(var(--color-background-800, 100,115,128))",
          900: "rgb(var(--color-background-900, 81,97,112))",
          1000: "rgb(var(--color-background-1000, 64,78,92))",
          1100: "rgb(var(--color-background-1100, 38,52,63))",
          1200: "rgb(var(--color-background-1200, 27,30,31))",
          DEFAULT: "rgb(var(--color-background, 237,241,245))",
          blue: "rgb(var(--color-background-blue-dark, 31,35,45))",
        },
        foreground: {
          DEFAULT: "rgb(var(--color-foreground, 250,250,250))",
          grey: "rgb(var(--color-foreground-grey, 245,246,246))",
          "grey-dark": "rgb(var(--color-foreground-grey-dark, 234,236,237))",
          blue: "rgb(var(--color-foreground-blue, 246,248,251))",
          "blue-dark": "rgb(var(--color-foreground-blue-dark, 241,243,247))",
        },
        overlay: {
          DEFAULT: "rgb(var(--color-overlay, 31,38,49))",
        },
        text: {
          DEFAULT: "rgb(var(--color-text, 92,114,138))",
          bright: "rgb(var(--color-text-bright, 237,241,245))",
          light: "rgb(var(--color-text-light, 122,133,143))",
          lighter: "rgb(var(--color-text-lighter, 146,153,161))",
        },
        shadow: {
          DEFAULT: "rgb(var(--color-shadow, 49,54,68))",
          dark: "rgb(var(--color-shadow-dark, 6,13,34))",
          blue: "rgb(var(--color-shadow-blue, 103,132,187))",
        },
      },
      overflow: {
        unset: "unset",
      },
    },
    overflow: {
      unset: "unset",
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    // ...
  ],
}
