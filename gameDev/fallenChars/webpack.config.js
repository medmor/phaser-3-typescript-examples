const path = require("path");

module.exports = {
  mode: "development",
  entry: './src/game.ts',
  output: {
    filename: 'Index.js',
    path: path.resolve(__dirname)
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  externals: {
    "phaser": "Phaser"
  }
};