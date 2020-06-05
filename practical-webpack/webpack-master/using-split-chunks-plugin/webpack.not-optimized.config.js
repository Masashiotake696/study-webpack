const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    app: './src/js/app.js',
    app2: './src/js/app2.js',
    app3: './src/js/app3.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/js')
  }
}