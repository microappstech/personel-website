module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily : {
      "fredoka":['Fredoka',' sans-serif'],
      "poppins":['Poppins', "sans-serif"]
    },
    extend: {
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}