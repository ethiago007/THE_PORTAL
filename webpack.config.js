const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // new line
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',  // new line
  devServer: {                 // new line
    static: './dist'      // new line
  },

  plugins: [
    new CleanWebpackPlugin(), // new line
    new ESLintPlugin({
      context: "compiler.context",
      eslintPath: "eslint",
      extensions: 'js',
      exclude: 'node_modules',
      fix: false,
      formatter: 'stylish',
      lintDirtyModulesOnly: false,
      threads: false,
      emitError: true,
      emitWarning: true,
      failOnError: true,
      failOnWarning: false,
      quiet: false,
      outputReport: false
    }),
    new HtmlWebpackPlugin({
      title: 'Blog',
      template: './src/index.html',
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      filename: 'mars.html',
      template: './src/mars.html',
    
    }),
    new HtmlWebpackPlugin({
      filename: 'blog.html',
      template: './src/blog.html',
    
    }),
    new HtmlWebpackPlugin({
      filename: 'freelance.html',
      template: './src/freelance.html',
    
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: './src/login.html',
    
    }),
    new HtmlWebpackPlugin({
      filename: 'signin.html',
      template: './src/signin.html',
    
    }),
    new HtmlWebpackPlugin({
      filename: 'simon.html',
      template: './src/simon.html',
    
    }),
    new Dotenv()
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

};