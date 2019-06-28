/* jshint esversion: 6 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(c|sa)ss$/,
        use: ['css-loader', 'sass-loader']
      },
      {
        test: /\.pug$/,
        use: [
          'file-loader?name=index.html',
          'extract-loader',
          'html-loader?interpolate=true',
          'pug-html-loader'
        ]
      },
      // loader for large images, uses svg traces to load placeholders
      {
        test: /\.(?:png|jpe?g|gif)$/,
        include: [path.resolve(__dirname, 'src/assets/large')],
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/'
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      },
      // loader for small images
      {
        test: /\.(?:png|jpe?g|gif)$/,
        include: [path.resolve(__dirname, 'src/assets/small')],
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/'
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      },
      // loader for svgs
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  }
};
