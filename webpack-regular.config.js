const path = require('path');
const webpack = require('webpack');
const jf = require('jsonfile');
const pkg = jf.readFileSync('./package.json');
const LicenseWebpackPlugin = require('license-webpack-plugin').LicenseWebpackPlugin;

const banner = `/*! ${pkg.name} - v${pkg.version} */`;

module.exports = {
  mode: 'production',
  stats: {
    colors: true,
    modules: true,
    reasons: true,
  },
  entry: './dist/src/index.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'index.js',
    library: 'soqlParserJs',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    // https://github.com/webpack/webpack/issues/6784#issuecomment-375941431
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      // This rule ensures the validation checks are disabled for production build to improve startup performance
      {
        test: /parser|lexer\.js$/,
        loader: 'string-replace-loader',
        options: {
          search: 'skipValidations: false',
          replace: 'skipValidations: true',
        },
      },
    ],
  },
  plugins: [new webpack.BannerPlugin({ banner: banner, raw: true }), new LicenseWebpackPlugin()],
};
