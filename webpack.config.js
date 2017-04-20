const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      main: './src/main.ts',
      app: './src/app/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  node: {
    __dirname: false,
    __filename: false
  },
  devtool: 'source-map',
  target: 'electron-main',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'awesome-typescript-loader'
      },
      {
        test: /\.pug$/,
        use: ['raw-loader', 'pug-html-loader']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "./src/package.json" }
    ]),
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      chunks: ['app']
    })
  ]
};