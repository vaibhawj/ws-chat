module.exports = {
  entry: __dirname + '/client/index.js',
  output: {
    path: __dirname + '/out',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
      { test: /\.jsx?$/, loader: 'babel-loader' }
    ]
  }
};