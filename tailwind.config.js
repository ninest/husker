const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.md",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Karla", "Inter", ...defaultTheme.fontFamily.mono],
      },
      spacing: {
        xs: `${2 * 0.25}em`,
        sm: `${3 * 0.25}em`,
        base: `${4 * 0.25}em`,
        md: `${5 * 0.25}em`,
        lg: `${7 * 0.25}em`,
        xl: `${9 * 0.25}em`,
        "2xl": `${12 * 0.25}em`,
        "3xl": `${16 * 0.25}em`,
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        light: "#fefefe",
        dark: "#010101",
        gray: {
          ...colors.gray,
          lightest: colors.gray[200],
          lighter: colors.gray[300],
          light: colors.gray[400],
          DEFAULT: colors.gray[500],
          dark: colors.gray[600],
          darker: colors.gray[700],
          darkest: colors.gray[800],
        },
        primary: {
          lightest: colors.indigo[100],
          lighter: colors.indigo[200],
          light: colors.indigo[400],
          DEFAULT: colors.indigo[600],
          dark: colors.indigo[700],
          darker: colors.indigo[800],
          darkest: colors.indigo[900],
        },
        error: {
          light: colors.red[300],
          DEFAULT: colors.red[500],
          dark: colors.red[700],
        },
        warning: {
          lightest: colors.orange[100],
          lighter: colors.orange[200],
          light: colors.orange[300],
          DEFAULT: colors.orange[500],
          dark: colors.orange[700],
          darker: colors.orange[800],
          darkest: colors.orange[900],
        },
      },
    },
  },

  plugins: [],
};
