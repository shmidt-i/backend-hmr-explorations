const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const StartServerPlugin = require("start-server-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["webpack/hot/poll?1000", "./src/index.ts"],
  watch: true,
  target: "node",
  externals: [
    nodeExternals({
      whitelist: ["webpack/hot/poll?1000"],
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new StartServerPlugin("index.js"),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
  },
};
