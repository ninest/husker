const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.md",
  ],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Inter", ...defaultTheme.fontFamily.mono],
      },
      spacing: {
        xs: `${2 * 0.25}em`,
        sm: `${3 * 0.25}em`,
        base: `${4 * 0.25}em`,
        md: `${6 * 0.25}em`,
        lg: `${8 * 0.25}em`,
        xl: `${10 * 0.25}em`,
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#112",
        white: "#fff",
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
          lightest: "var(--indigo-100)",
          lighter: "var(--indigo-200)",
          light: "var(--indigo-400)",
          DEFAULT: "var(--indigo-600)",
          dark: "var(--indigo-800)",
        },
        error: {
          light: "var(--red-300)",
          DEFAULT: "var(--red-500)",
          dark: "var(--red-700)",
        },
        warning: {
          light: "var(--orange-300)",
          DEFAULT: "var(--orange-500)",
          dark: "var(--orange-700)",
        },
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};
