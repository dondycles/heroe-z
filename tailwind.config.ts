import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./main-components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["var(--font-kanit)"],
        montserrat: ["var(--font-montserrat)"],
      },
      colors: { primaryblue: "#11bbff", primaryred: "#e11d48" },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#11bbff",
            secondary: "#e11d48",
            background: "#ffffff",
            content1: "#ffffff",
            content2: "#1d1d1d",
            content3: "#1d1d1d",
          },
        },
        dark: {
          colors: {
            primary: "#11bbff",
            secondary: "#e11d48",
            background: "#1d1d1d",
            content1: "#1d1d1d",
            content2: "#ffffff",
            content3: "#cccccc",
          },
        },
      },
    }),
    require("tailwind-scrollbar"),
  ],
};
export default config;
