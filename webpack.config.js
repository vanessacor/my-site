const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "/public/index.html"),
  filename: "./index.html",
});

const env = process.env.NODE_ENV || "development";

const config = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env", "@babel/preset-react"] },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  entry: { app: "./src/index.js" },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js",
  },
  devServer: {
    port: 3000,
    hot: true,
    compress: true,
    inline: true,
    historyApiFallback: true,
    open: false,
  },
  devtool: "source-map",
  plugins: [new webpack.HotModuleReplacementPlugin(), htmlWebpackPlugin],
};

if (env === "production") {
  config.mode = "production";
}

module.exports = config;
