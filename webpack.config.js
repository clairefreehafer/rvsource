const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './react/main.jsx',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css', '.json']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react']
            },
          }
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader', options: {
              includePaths: ['./node_modules']
            }
          }
        ]
      },
    ]
  },
};

// const path = require('path');

// module.exports = {
//   entry: './react/main.jsx',
//   output: {
//     path: path.resolve(__dirname, 'public'),
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [{
//       test: /\.jsx?$/,
//       loader: 'babel-loader',
//       exclude: /node_modules/,
//       query: {
//         presets: ['es2015', 'react']
//       },
//     },
//       {
//         test: /\.scss$/,
//         use: [{
//           loader: 'style-loader'
//         }, {
//           loader: 'css-loader'
//         }, {
//           loader: 'sass-loader', options: {
//             includePaths: ['./node_modules', './node_modules/grommet/node_modules']
//           }
//         }]
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.js', '.jsx']
//   }
// };
