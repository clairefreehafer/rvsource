const path = require('path');

module.exports = {
  entry: './react/main.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      },
    },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader', options: {
            includePaths: ['./node_modules', './node_modules/grommet/node_modules']
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
