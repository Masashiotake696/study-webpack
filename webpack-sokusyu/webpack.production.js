const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const OptimizationCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(base, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyjsWebpackPlugin({
        uglifyOptions: {
          compress: {
            drop_console: false
          }
        }
      }),
      new OptimizationCssAssetsWebpackPlugin({})
    ]
  }
})
