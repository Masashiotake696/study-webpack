const merge = require('webpack-merge')
const base = require('./webpack.base.js')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    port: 8888,
    open: true,
    compress: true
  },
  devtool: 'eval-source-map'
})
