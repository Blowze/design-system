"use strict"
const webpack = require("webpack");
const webpackConfig =  {
  
  mode: "production",
  entry: {
    app: "./src/main.js",
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
}

module.exports = webpackConfig
