module.exports = {
  entry: "./src/app.js",
  output: {
    path: `${__dirname}/public`,
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(png|jpg|gif)$/, loader: "url-loader" }
    ]
  }
};
