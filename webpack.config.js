const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  context: path.resolve(__dirname, 'src'),
  devtool: 'source-map',
  entry: ['./index.tsx'],
  output: { filename: '[contenthash].js', path: path.resolve(__dirname, 'dist') },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    },
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  devServer: {
    port: 8000,
    hot: isDev,
    historyApiFallback: true,
  },
  plugins: [new HTMLWebpackPlugin({ template: './index.html', filename: 'index.html' }), new CleanWebpackPlugin()],
  module: {
    rules: [
      { test: /\.ttf$/, type: 'asset/resource' },
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: { loader: 'ts-loader' },
      },
    ],
  },
};
