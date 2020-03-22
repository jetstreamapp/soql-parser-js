const webpack = require('webpack');

// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/soql-parser-js';

module.exports = {
  output: {
    publicPath: ASSET_PATH
  },

  plugins: [
    // This makes it possible for us to safely use env vars on our code
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    })
  ]
};
