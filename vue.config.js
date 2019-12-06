const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
module.exports = {
    configureWebpack: {
      plugins: [
        new SpriteLoaderPlugin()
      ]
    }
  }