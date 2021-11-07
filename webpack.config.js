// webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'project-name.bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Messenger',
  })],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
        exclude: /(node_modules)/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    watchFiles: ['src/**/*.ts', 'src/**/*.scss'],
    compress: true,
    hot: true,
    port: 3000,
  },
};
