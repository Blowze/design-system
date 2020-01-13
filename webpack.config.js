const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

config = {
    "base": {
        "dist": "dist",
        "src": "src"
    },
};

const BASE_PATH = path.join(path.resolve(process.cwd(), './'));

module.exports = {
  context: BASE_PATH,
  mode: 'production',

  entry: {
    index: `./${config.base.src}/index.js`,
  },

   resolve: {
    modules: ['node_modules'],
    alias: {
      '@': path.resolve(BASE_PATH, config.base.src),
      vue: 'vue/dist/vue.js' // обеспечивает единое подключеник VUE в проекте
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
   
    {
        test: /\.scss$/,
        use: [
            'css-loader',
            'sass-loader'
        ]
    },
    {
        test: /\.svg$/,
        use: [
            {
                loader: 'html-loader',
            },
            {
                loader: 'svgo-loader'
            }
        ]
    },

    ]
  },

  plugins: [
    new VueLoaderPlugin(),
  ]

}
