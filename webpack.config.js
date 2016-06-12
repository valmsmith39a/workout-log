var path = require('path');
var webpack = require('webpack');

import 'whatwg-fetch'

module.exports = {
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ],
        test: /\.jsx?$/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react'],
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
    ]
  },
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  entry: [
    // 'whatwg-fetch',
    // 'babel-polyfill',
    './src/index.js'
  ]
}
