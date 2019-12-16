const path = require("path");
const hwp = require("html-webpack-plugin");
const mcep = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: ["@babel/polyfill", "./src/app/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: [mcep.loader, "css-loader"]
      }
    ]
  },
  devServer: {
    port: 3050
  },
  plugins: [
    new hwp({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new mcep({
      filename: "css/appbundle.css"
    })
  ]
};
