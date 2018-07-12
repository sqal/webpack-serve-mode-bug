const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: resolve('src/main.js'),
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};