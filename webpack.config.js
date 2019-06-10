/*
 * Webpack config file.
 * Copyright Rex Twedt 2019
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const srcPath = path.resolve(__dirname, "src");
const outputPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: `${srcPath}/index.js`,
  output: {
    filename: "[name].js",
    path: outputPath
  },
  devServer: {
    port: 9000,
    historyApiFallback: true,
    hot: true,
    open: true
  },
  resolve: {
    extensions: [".js", ".styl", ".pug", ".png"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"]
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.pug"
    }),
    new CopyWebpackPlugin([{ from: `${srcPath}/img`, to: `${outputPath}/img` }])
  ]
};
