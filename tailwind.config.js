module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary:{
          base:"(203, 89%, 53%)",
          dark:" (203, 89%, 46%)",
          light:"(203, 89%, 96%)",

        },
        gray:{
          dark:"(207, 14%, 46%)",
          light:"(205, 16%, 71%)",
          extralight:"(205, 25%, 91%)",
          lightest:"(204, 33%, 97%)",

        },
        black:"#14171A",
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
