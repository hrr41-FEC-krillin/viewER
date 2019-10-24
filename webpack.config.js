const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: [/node_modules/, /styled\.js/],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
