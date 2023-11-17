const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: "./src/index.js",
      runtime: "runtime"
    }
  },
  devtool: 'eval-source-map',
  experiments: {
    outputModule: true,
  },
  output: {
    // clean: true,
    library: {type: 'module'},
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.ProgressPlugin((percentage, msg, ...args) => {
      console.log(percentage, msg, ...args)
    })
  ]
}