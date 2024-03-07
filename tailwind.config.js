/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      extend: {
        flex: {
          '2': '2 1 0%',
        },
      },
    },
  },
  plugins: [],
}

