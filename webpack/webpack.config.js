const path = require('path')

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  devtool: 'eval-source-map',
  experiments: {
    outputModule: true,
  },
  output: {
    clean: true,
    library: {type: 'module'},
    path: path.resolve(__dirname, 'dist'),
    filename: 'vendor.js'
  }
}