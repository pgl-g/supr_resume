const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    compress: true, // 压缩
    static: ['dist'],
    port: 8091,
    host: '127.0.0.1',
    open: true,
    client: {
      progress: true, // 浏览器中以百分比显示编译进度
    }
  },
})