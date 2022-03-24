module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],

  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
  }
}