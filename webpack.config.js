const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'], 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [require.resolve('react-refresh/babel')] 
          }
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              sourceMap: true, 
            },
          }
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(), 
    new ReactRefreshWebpackPlugin() 
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    hot: true, 
    historyApiFallback: true, 
    watchFiles: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.css'], 
  },
};
