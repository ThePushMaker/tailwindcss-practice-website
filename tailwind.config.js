module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-pattern': 'url(../img/wave-white.png)',
        'wave-pattern-dots': 'url(../img/pattern-white-dots.png)',
      })
    },
  },
  plugins: [],
}