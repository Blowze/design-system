"use strict"
const path = require("path")
const config = require("./config.js")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: "production",
  context: path.resolve(__dirname, "../"),
  entry: {
    app: "./src/main.js",
  },
  output: {
    path: config.build.assetsRoot,
    filename: "[name].js",
    publicPath: config.build.assetsPublicPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ],
  },
  plugins: [new MiniCssExtractPlugin("style.css")],
  
}