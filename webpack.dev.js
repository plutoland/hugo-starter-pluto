const { merge } = require('webpack-merge')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',

  output: {
    filename: '[name].js',
    chunkFilename: '[id].js',
  },

  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    quiet: false,
    open: false,
    historyApiFallback: {
      rewrites: [{ from: /./, to: '404.html' }],
    },
  },

  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: [
        '**/*.js',
        '**/*.css',
        // path.join(__dirname, "site/data/webpack.json")
      ],
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
})
