const {merge} = require('webpack-merge');
// 清理上一次缓存文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  // 生产环境打包优化, 错误跟踪
  devtool: 'source-map',
  plugins: [
    // 清除上一次dist文件
    new CleanWebpackPlugin(),
  ]
});
