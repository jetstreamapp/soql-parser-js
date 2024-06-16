const path = require('path');
const webpack = require('webpack');
const jf = require('jsonfile');
const pkg = jf.readFileSync('./package.json');

module.exports = {
  mode: 'production',
  stats: {
    colors: true,
    modules: true,
    reasons: true,
  },
  entry: './dist/cli/src/cli/index.js',
  output: {
    path: path.resolve(__dirname, './bin/'),
    filename: 'index.js',
    library: 'soqlParserJs',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    // https://github.com/webpack/webpack/issues/6784#issuecomment-375941431
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  externals: ['child_process', 'fs'],
  optimization: {
    minimize: false,
  },
  module: {
    rules: [{ test: /index.js$/, loader: 'shebang2-loader' }],
  },
  plugins: [
    new webpack.BannerPlugin({ banner: `/*! ${pkg.name} - v${pkg.version} */`, raw: true }),
    new webpack.BannerPlugin({ banner: '#!/usr/bin/env node\n\n', raw: true }),
  ],
};
