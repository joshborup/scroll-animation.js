const path = require('path');
const config = {
  entry: './src/js/scroll-animation.js',

  output: {
    path: path.join(__dirname + '/dist'),
    filename: 'scroll-animation.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader'},
          { loader: 'postcss-loader',
            options: {
              plugins: () => [ require('autoprefixer')({browsers: ['last 2 versions'] })]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },

  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 3000,
    watchContentBase: true,
  }
}

module.exports = config;
