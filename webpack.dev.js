const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    host: 'localhost',
    port: 3000,
    watchContentBase: true,
    historyApiFallback: true,
    hot: true,
    writeToDisk: true,
    open: true,
  },
});
