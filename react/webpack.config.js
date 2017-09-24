let path = require('path');
let webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.optimize.DedupePlugin(), // dedupe similar code
    new webpack.optimize.UglifyJsPlugin(), // minify everything
    new webpack.optimize.AggressiveMergingPlugin(), // Merge chunks
  ],
  entry: {
    index: './js/client.js',
  },
  output: {
    path: '../public',
    publicPath: '../public',
    filename: 'client.min.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, './'),
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style!css!',
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline',
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
}
;
