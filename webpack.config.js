// prod dev dev-serverで分けるか？

module.exports = {
  mode: "development",

  entry: "./src/index.tsx",
  output: {
    path: `${__dirname}/public/dist`,
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  // target: ["web", "es5"],
  target: "web",

  devServer: {
    contentBase: "./public",
    host: "localhost",
    port: 3000,
    watchContentBase: true,
    historyApiFallback: true,
    hot: true,
    writeToDisk: true,
    open: true,
  },
};
