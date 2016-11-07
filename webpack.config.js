var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './front/src/js/main.jsx',
  output: { path: path.join(__dirname, 'public/js'), filename: 'main.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  resolve: { root: [ path.resolve('./front/src/js') ] }
}
