const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackRTLPlugin = require('@automattic/webpack-rtl-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

module.exports = {
  mode: 'development',
  entry: {
    theme: './src/assets/main.scss'
  },
  output: {
    path: path.resolve(__dirname, 'public/css')
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].min.css'
    }),
    new WebpackRTLPlugin()
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};
