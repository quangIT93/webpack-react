const path = require("path");
// const fs = require("fs");
const config = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        use: {
          loader: "babel-loader",
        },
        test: /\.js$/,
        exclude: "/node_modules/",
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/,
      },
    ],
  },
};

module.exports = config;
