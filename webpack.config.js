const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      app: './src/app/index.ts'
  },
  resolve: {
    extensions: ['.js', '.json', '.ts']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].map'
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
        use: 'awesome-typescript-loader?configFileName=tsconfig.webpack.json'
      },
      {
        test: /\.pug$/,
        use: ['raw-loader', 'pug-html-loader']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/package.json' },
      { from: './src/client_secret.json' }
    ]),
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      chunks: ['app']
    })
  ]
};