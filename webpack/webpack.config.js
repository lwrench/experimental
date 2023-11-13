const path = require('path')
const webpack = require('webpack')

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
  },
  plugins: [
    new webpack.ProgressPlugin((percentage, msg, ...args) => {
      console.log(percentage, msg, ...args)
    })
  ]
}