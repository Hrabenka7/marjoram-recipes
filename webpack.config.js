const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/js/index.js'], // starts look for dependencies here
  output: {  // location of the saved bundle file
    path: path.resolve(__dirname,'dist'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './dist'    // from where to serve the code 
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};