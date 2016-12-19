const common = require('./webpack.config.common');
const path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    filename: 'react-tween.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ReactTetherTooltip',
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
  resolve: common.resolve,
  module: {
    loaders: [
      common.module.loaders.js,
    ],
  },
};
