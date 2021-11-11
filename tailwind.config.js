module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "414px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fill: (theme) => ({
      red: theme("colors.red.500"),
    }),
    stroke: (theme) => ({
      red: theme("colors.red.500"),
      gray: theme("colors.gray.500"),
    }),
  },
  variants: {
    extend: {
      minHeight: {
        48: "12rem",
      },
    },
  },
  plugins: [],
};
