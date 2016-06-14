var path = require('path');
var webpack = require('webpack');

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
    './src/index.js'
  ]
}
