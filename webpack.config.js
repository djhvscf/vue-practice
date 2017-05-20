var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      'Vue': 'vue/dist/vue.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
};