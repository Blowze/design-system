
"use strict"

process.env.NODE_ENV = "production"
const webpack = require("webpack")

const ora = require("ora")
const rm = require("rimraf")
const path = require("path")
const chalk = require("chalk")
const config = require("./config.js")
const utils = require('./utils.js')
const baseWebpackConfig = require("./base.js")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require("webpack-merge")
const CopyPlugin = require('copy-webpack-plugin');

baseWebpackConfig.entry = {
  system: ["./src/system.js"],
}

const webpackConfig =  merge(baseWebpackConfig, {
  output: {
    path: config.system.assetsRoot,
    filename: utils.assetsSystemPath("[name].js"),
    library: "[name]",
    libraryTarget: config.system.libraryTarget,
  },
  plugins: [
    new MiniCssExtractPlugin("style.css"),
   
    // copy custom static assets
    new CopyPlugin([{
      from: path.resolve(__dirname, "../src/assets"),
      to: config.system.assetsSubDirectory,
      ignore: [".*"],
    }])
  ]
})


const spinner = ora("Building Design System...")
spinner.start()

rm(path.join(config.system.assetsRoot, config.system.assetsSubDirectory), err => {
  webpack(webpackConfig, () => {
    spinner.stop()
    console.log(
      chalk.yellow(
        "  Tip: You can now publish the design system as a private NPM module.\n" +
          "  Users can import the provided UMD module using:\n\n" +
          "  import DesignSystem from 'vue-design-system'\n" +
          "  import 'vue-design-system/dist/system/system.css'\n\n" +
          "  Vue.use(DesignSystem)\n"
      )
    )
  })
})


