const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".svg"],
    modules: ["node_modules"]
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: "/node_modules/",
        use: "babel-loader"
      },
      {
        test: /\.css?$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
      filename: "index.html"
    })
  ]
};
