import { nextui } from "@nextui-org/react"
import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} config */


const dev = process.env.NODE_ENV === "development"

const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/blocks/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    dev
      ? "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
      : "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui(),
  ],
}

console.log(process.env.NODE_ENV)

export default config