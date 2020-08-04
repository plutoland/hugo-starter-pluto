const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AssetsPlugin = require('assets-webpack-plugin')

module.exports = {
  entry: {
    main: path.join(__dirname, 'src', 'index.js'),
  },

  output: {
    path: path.join(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        exclude: /node_modules/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },

      {
        test: /\.js?$/,
        exclude: /node_modules/,
        query: { cacheDirectory: true },
        loader: 'babel-loader',
      },

      {
        test: /\.json$/,
        loader: 'json-loader',
      },

      {
        test: /\.((gif)|(jpg)|(png)|(svg)|(eot)|(ttf)|(woff)|(woff2))(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=/[hash].[ext]',
      },
    ],
  },

  plugins: [
    new AssetsPlugin({
      filename: 'webpack.json',
      path: path.join(__dirname, 'site/data'),
      prettyPrint: true,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/fonts',
          to: 'fonts',
          flatten: true,
        },
      ],
    }),
  ],
}
