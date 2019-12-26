// vue.config.js
module.exports = {
    filenameHashing: false,
    configureWebpack: {
        module: {
            rules: [  {
                test: /\.svg$/,
                loader: 'html-loader'
            }]
        }
    },
    // Решаем проблему обработки svg в Vue cli
    chainWebpack: config => {
        config.module
          .rule('svg')
          .test(() => false)
          .use('file-loader')
      }
}