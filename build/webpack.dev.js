const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清理上一次缓存文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
  },
  // 支持多种文件
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"]
  },
  // 生产环境打包优化, 错误跟踪
  devtool: 'source-map',
  // 编辑tsx
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // 如果用了ts文件,使用下面loader翻译成js
        // loader: 'awesome-typescript-loader'
        use: "ts-loader",
        exclude: /node_modules/, // 表示node_modules的tsx文件不做处理
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.less$/,
        loader: "less-loader",
        options: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      },
    ],
  },
  devServer: {
    compress: true, // 压缩
    // static: {
    //   directory: path.join(__dirname, 'src')
    // },
    port: 8091,
    host: "127.0.0.1",
    open: true,
    client: {
      progress: true, // 浏览器中以百分比显示编译进度
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 生成html文件
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      title: 'supr_resume'
    })
  ]
};
