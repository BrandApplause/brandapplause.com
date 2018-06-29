/* jshint esversion: 6 */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: '.dist'
  },
  module: {
    rules: [
      {
        test: /\.(c|sa)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.pug$/,
        use: [
          'file-loader?name=index.html',
          'extract-loader',
          'html-loader',
          'pug-html-loader'
        ]
      },
      // loader for large images, uses svg traces to load faster
      {
        test: /\.(?:png|svg|jpg|gif)$/,
        include: [path.resolve(__dirname, 'assets/large')],
        use: [
          'file-loader',
          // {
          //   loader: 'image-trace-loader'
          // },
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
      // loader for small images
    ]
  }
};
