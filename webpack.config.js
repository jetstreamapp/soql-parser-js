const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
      'my-lib': './src/app/index.ts',
      'my-lib.min': './src/app/index.ts'
    },
    output: {
      path: path.resolve(__dirname, '_bundles'),
      filename: '[name].js',
      libraryTarget: 'umd',
      library: 'SoqlParserJs',
      umdNamedDefine: true
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    devtool: 'source-map',
    plugins: [],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          sourceMap: true,
          include: /\.min\.js$/,
        })
      ]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          exclude: /node_modules/,
          options: {
            configFileName: 'tsconfig.package.json'
          }
        }
      ]
    }
  }