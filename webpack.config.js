/* jshint esversion: 6 */
const path = require("path");
const webpack = require("webpack");
const PugPlugin = require("pug-plugin");

module.exports = {
  entry: {
    index: "./src/index.pug",
    404: "./src/404.pug",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new PugPlugin(), // rendering of Pug files defined in Webpack entry
  ],
  module: {
    rules: [
      {
        test: /\.(c|sa)ss$/,
        use: ["css-loader", "sass-loader"],
      },
      {
        test: /\.pug$/,
        loader: PugPlugin.loader, // Pug loader,
      },
      // loader for large images, uses svg traces to load placeholders
      {
        test: /\.(?:png|jpe?g|gif)$/,
        type: "asset/resource",
      },
      // loader for svgs
      {
        test: /\.svg$/,
        type: "asset/source",
      },
    ],
  },
};
