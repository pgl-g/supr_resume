

const path = require('path');

const webpack = require('webpack');

const vendor = [
  'react',
  'react-dom',
  'antd'
]


module.exports = {
  mode: 'development',
  entry: vendor,
  output: {
    path: path.resolve('dll'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve('dll', '[name]-manifest.json'),
      name: '[name]_library'
    })
  ]
}