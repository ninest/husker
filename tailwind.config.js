const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.md",
  ],
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
        light: "var(--light)",
        dark: "var(--dark)",
        gray: {
          50: "var(--gray-50)",
          100: "var(--gray-100)",

          lightest: "var(--gray-200)",
          200: "var(--gray-200)",

          lighter: "var(--gray-300)",
          300: "var(--gray-300)",

          light: "var(--gray-400)",
          400: "var(--gray-400)",

          DEFAULT: "var(--gray-500)",
          500: "var(--gray-500)",

          dark: "var(--gray-600)",
          600: "var(--gray-600)",

          darker: "var(--gray-700)",
          700: "var(--gray-700)",

          800: "var(--gray-800)",
          900: "var(--gray-900)",
        },
        primary: {
          50: "var(--indigo-50)",
          lightest: "var(--indigo-100)",
          lighter: "var(--indigo-200)",
          light: "var(--indigo-400)",
          DEFAULT: "var(--indigo-600)",
          dark: "var(--indigo-700)",
          darker: "var(--indigo-800)",
          darkest: "var(--indigo-900)",
        },
        error: {
          light: "var(--red-300)",
          DEFAULT: "var(--red-500)",
          dark: "var(--red-700)",
        },
        warning: {
          lightest: "var(--orange-100)",
          lighter: "var(--orange-200)",
          light: "var(--orange-300)",
          DEFAULT: "var(--orange-500)",
          dark: "var(--orange-700)",
        },
      },
    },
  },

  plugins: [],
};
