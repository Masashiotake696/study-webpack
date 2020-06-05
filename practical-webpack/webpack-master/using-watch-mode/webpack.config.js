const path = require('path')

module.exports = {
  watch: true,
  mode: 'development',
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js')
  }
}