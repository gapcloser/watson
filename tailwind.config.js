module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "back-1": "#ecb899",
      "back-2": "#eac0d3",
      "back-3": "#203b3d",
      "back-4": "#cbddd1",
      "back-red": "#f73859",
      "back-black": "#232931",
      "back-light-blue": "#907fa4",
      "back-light-green": "#ffded5",
      "back-brown": "#951555",
      "back-dark-green": "#00587a",
      "back-milky": "#faf1e6",
      "back-dark-milky": "#e4efe7",
      "back-light-white": "#f4f1ee",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#ecb899",
      red: "#f73859",
    }),
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "10xl": "8rem",
    },
    lineHeight: {
      12: "8rem",
    },
    fontFamily: {
      amatic: ["Amatic SC", "cursive"],
      josefin: ["Josefin Sans", "sans-serif"],
      monton: ["Monoton", "cursive"],
    },
    extend: {
      zIndex: {
        "-1": "-1",
        1: "1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
