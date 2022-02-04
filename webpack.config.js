const path = require('path');


module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // 支持多种文件
  resolve: ['.ts', '.tsx', '.js', '.jsx'],
  // 编辑tsx
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // 如果用了ts文件,使用下面loader翻译成js
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}