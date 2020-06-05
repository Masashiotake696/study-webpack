const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-source-map'
})