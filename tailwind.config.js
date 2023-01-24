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
          DEFAULT:
            "rgba(var(--color-white, 255,255,255), var(--tw-bg-opacity, 1))",
        },
        black: {
          DEFAULT: "rgba(var(--color-black, 0,0,0), var(--tw-bg-opacity, 1))",
        },
        peach: {
          DEFAULT:
            "rgba(var(--color-peach, 250,122,122), var(--tw-bg-opacity, 1))",
        },
        orange: {
          DEFAULT:
            "rgba(var(--color-orange, 247,154,99), var(--tw-bg-opacity, 1))",
        },
        yellow: {
          DEFAULT:
            "rgba(var(--color-yellow, 247,191,99), var(--tw-bg-opacity, 1))",
        },
        red: {
          DEFAULT:
            "rgba(var(--color-red, 232,93,117), var(--tw-bg-opacity, 1))",
          100: "rgba(var(--color-red-100, 255,244,246), var(--tw-bg-opacity, 1))",
          200: "rgba(var(--color-red-200, 254,212,220), var(--tw-bg-opacity, 1))",
          300: "rgba(var(--color-red-300, 255,140,160), var(--tw-bg-opacity, 1))",
          400: "rgba(var(--color-red-400, 236,41,75), var(--tw-bg-opacity, 1))",
          500: "rgba(var(--color-red-500, 213,0,37), var(--tw-bg-opacity, 1))",
          600: "rgba(var(--color-red-600, 165,1,29), var(--tw-bg-opacity, 1))",
          700: "rgba(var(--color-red-700, 117,0,20), var(--tw-bg-opacity, 1))",
        },
        green: {
          DEFAULT:
            "rgba(var(--color-green, 123,213,85), var(--tw-bg-opacity, 1))",
          100: "rgba(var(--color-green-100, 245,249,243), var(--tw-bg-opacity, 1))",
          200: "rgba(var(--color-green-200, 226,246,217), var(--tw-bg-opacity, 1))",
          300: "rgba(var(--color-green-300, 160,241,126), var(--tw-bg-opacity, 1))",
          400: "rgba(var(--color-green-400, 119,220,76), var(--tw-bg-opacity, 1))",
          500: "rgba(var(--color-green-500, 83,175,45), var(--tw-bg-opacity, 1))",
          600: "rgba(var(--color-green-600, 56,126,26), var(--tw-bg-opacity, 1))",
          700: "rgba(var(--color-green-700, 46,90,27), var(--tw-bg-opacity, 1))",
          800: "rgba(var(--color-green-800, 41,66,31), var(--tw-bg-opacity, 1))",
        },
        blue: {
          DEFAULT:
            "rgba(var(--color-blue, 61,180,242), var(--tw-bg-opacity, 1))",
          50: "rgba(var(--color-blue-50, 172,213,242), var(--tw-bg-opacity, 1))",
          100: "rgba(var(--color-blue-100, 247,250,252), var(--tw-bg-opacity, 1))",
          200: "rgba(var(--color-blue-200, 236,246,254), var(--tw-bg-opacity, 1))",
          300: "rgba(var(--color-blue-300, 201,232,255), var(--tw-bg-opacity, 1))",
          400: "rgba(var(--color-blue-400, 143,215,255), var(--tw-bg-opacity, 1))",
          500: "rgba(var(--color-blue-500, 111,200,255), var(--tw-bg-opacity, 1))",
          550: "rgba(var(--color-blue-550, 53,119,255), var(--tw-bg-opacity, 1))",
          600: "rgba(var(--color-blue-600, 61,180,242), var(--tw-bg-opacity, 1))",
          700: "rgba(var(--color-blue-700, 8,143,214), var(--tw-bg-opacity, 1))",
          800: "rgba(var(--color-blue-800, 12,101,166), var(--tw-bg-opacity, 1))",
          900: "rgba(var(--color-blue-900, 11,70,113), var(--tw-bg-opacity, 1))",
          1000: "rgba(var(--color-blue-1000, 16,61,85), var(--tw-bg-opacity, 1))",
          dim: "rgba(var(--color-blue-dim, 141,178,219), var(--tw-bg-opacity, 1))",
        },
        gray: {
          100: "rgba(var(--color-gray-100, 251,251,251), var(--tw-bg-opacity, 1))",
          200: "rgba(var(--color-gray-200, 237,241,245), var(--tw-bg-opacity, 1))",
          300: "rgba(var(--color-gray-300, 221,230,238), var(--tw-bg-opacity, 1))",
          400: "rgba(var(--color-gray-400, 201,215,227), var(--tw-bg-opacity, 1))",
          500: "rgba(var(--color-gray-500, 173,192,210), var(--tw-bg-opacity, 1))",
          600: "rgba(var(--color-gray-600, 139,160,178), var(--tw-bg-opacity, 1))",
          700: "rgba(var(--color-gray-700, 116,136,153), var(--tw-bg-opacity, 1))",
          800: "rgba(var(--color-gray-800, 100,115,128), var(--tw-bg-opacity, 1))",
          900: "rgba(var(--color-gray-900, 81,97,112), var(--tw-bg-opacity, 1))",
          1000: "rgba(var(--color-gray-1000, 64,78,92), var(--tw-bg-opacity, 1))",
          1100: "rgba(var(--color-gray-1100, 38,52,63), var(--tw-bg-opacity, 1))",
          1200: "rgba(var(--color-gray-1200, 27,30,31), var(--tw-bg-opacity, 1))",
        },
        background: {
          100: "rgba(var(--color-background-100, 251,251,251), var(--tw-bg-opacity, 1))",
          200: "rgba(var(--color-background-200, 237,241,245), var(--tw-bg-opacity, 1))",
          300: "rgba(var(--color-background-300, 221,230,238), var(--tw-bg-opacity, 1))",
          400: "rgba(var(--color-background-400, 201,215,227), var(--tw-bg-opacity, 1))",
          500: "rgba(var(--color-background-500, 173,192,210), var(--tw-bg-opacity, 1))",
          600: "rgba(var(--color-background-600, 139,160,178), var(--tw-bg-opacity, 1))",
          700: "rgba(var(--color-background-700, 116,136,153), var(--tw-bg-opacity, 1))",
          800: "rgba(var(--color-background-800, 100,115,128), var(--tw-bg-opacity, 1))",
          900: "rgba(var(--color-background-900, 81,97,112), var(--tw-bg-opacity, 1))",
          1000: "rgba(var(--color-background-1000, 64,78,92), var(--tw-bg-opacity, 1))",
          1100: "rgba(var(--color-background-1100, 38,52,63), var(--tw-bg-opacity, 1))",
          1200: "rgba(var(--color-background-1200, 27,30,31), var(--tw-bg-opacity, 1))",
          DEFAULT:
            "rgba(var(--color-background, 237,241,245), var(--tw-bg-opacity, 1))",
          blue: "rgba(var(--color-background-blue-dark, 31,35,45), var(--tw-bg-opacity, 1))",
        },
        foreground: {
          DEFAULT:
            "rgba(var(--color-foreground, 250,250,250), var(--tw-bg-opacity, 1))",
          grey: "rgba(var(--color-foreground-grey, 245,246,246), var(--tw-bg-opacity, 1))",
          "grey-dark":
            "rgba(var(--color-foreground-grey-dark, 234,236,237), var(--tw-bg-opacity, 1))",
          blue: "rgba(var(--color-foreground-blue, 246,248,251), var(--tw-bg-opacity, 1))",
          "blue-dark":
            "rgba(var(--color-foreground-blue-dark, 241,243,247), var(--tw-bg-opacity, 1))",
        },
        overlay: {
          DEFAULT:
            "rgba(var(--color-overlay, 31,38,49), var(--tw-bg-opacity, 1))",
        },
        text: {
          DEFAULT:
            "rgba(var(--color-text, 92,114,138), var(--tw-bg-opacity, 1))",
          bright:
            "rgba(var(--color-text-bright, 237,241,245), var(--tw-bg-opacity, 1))",
          light:
            "rgba(var(--color-text-light, 122,133,143), var(--tw-bg-opacity, 1))",
          lighter:
            "rgba(var(--color-text-lighter, 146,153,161), var(--tw-bg-opacity, 1))",
        },
        shadow: {
          DEFAULT:
            "rgba(var(--color-shadow, 49,54,68), var(--tw-bg-opacity, 1))",
          dark: "rgba(var(--color-shadow-dark, 6,13,34), var(--tw-bg-opacity, 1))",
          blue: "rgba(var(--color-shadow-blue, 103,132,187), var(--tw-bg-opacity, 1))",
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
