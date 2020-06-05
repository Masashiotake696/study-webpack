const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    sub: './src/sub.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]-[chunkhash].js'
  },
  optimization: {
    splitChunks: {
      name: 'commonlib',
      chunks: 'initial'
    }
  },
  module: {
    rules: [
      {
        test: /\.(gitf|png|jpg)$/,
        loader: 'url-loader',
        options: {
          limit: 51200,
          name: './images/[name].[ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.(csv|tsv)$/,
        loader: 'csv-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          attributes: {
            list: [
              {
                tag: 'img',
                attribute: 'src',
                type: 'src'
              },
              {
                tag: 'img',
                attribute: 'data-src',
                type: 'src'
              }
            ]
          }
        }
      },
      {
        test: /\.xml$/,
        loader: 'xml-loader'
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: false,
              failOnError: true
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    })
  ],
  resolve: {
    extensions: [
      '.ts',
      '.js',
      '.json'
    ]
  }
}
