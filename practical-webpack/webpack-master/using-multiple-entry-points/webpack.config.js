const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/js/app.js',
    search: './src/js/search.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/js')
  }
}