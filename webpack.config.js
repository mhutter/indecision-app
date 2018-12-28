const path = require('path')

const publicDir = path.join(__dirname, 'public')

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: publicDir,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: publicDir
  }
}
