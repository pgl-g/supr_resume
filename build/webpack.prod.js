const {merge} = require('webpack-merge');

const webpack = require('webpack');

// 清理上一次缓存文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  // 生产环境打包优化, 错误跟踪
  devtool: 'source-map',


  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      chunks: 'initial',
      minSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 2,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          reuseExistingChunk: true,
        },
        tools: {
          test: /[\\/]src[\\/]tools[\\/]/,
          name: 'tools'
        }
      }
    },
  },
  performance: {
    hints: false, // 关闭size提示
  },
  plugins: [
    // 清除上一次dist文件
    new CleanWebpackPlugin(),
    new webpack.DllReferencePlugin({
      manifest: require('../dll/main-manifest.json')
    })
  ]
});
