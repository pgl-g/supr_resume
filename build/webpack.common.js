const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const entryPath = path.resolve(__dirname, '/src/index');

module.exports = {
  mode: 'development',
  entry: entryPath,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  // 支持多种文件
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    mainFields: ['main'],
  },
  // 警告webpack性能提示
  performance: {
    hints:'warning',
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js');
      }
  },
  // 编辑tsx
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-babel'
      },
      {
        test: /\.tsx?$/,
        // 如果用了ts文件,使用下面loader翻译成js
        use: 'ts-loader',
        exclude: /node_modules/, // 表示node_modules的tsx文件不做处理
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.less$/,
        loader: 'less-loader',
        options: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      },
    ],
  },
  plugins: [
    // 生成html文件
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      title: 'supr_resume'
    }),
    // css进行打包处理
    new MiniCssExtractPlugin()
  ]
};
