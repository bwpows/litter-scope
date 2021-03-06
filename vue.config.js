const CompressionPlugin = require("compression-webpack-plugin")


module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: './',

  devServer: {
    https: true
  },

  configureWebpack: {
    externals: {
       'vue': 'Vue',
       'vuetify': 'Vuetify'
    },
    plugins: [
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css/,
        threshold: 10240,
        deleteOriginalAssets: false,
        algorithm: 'gzip'
      })
    ]
  }


}
