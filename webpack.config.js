const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    // bundled compiled 파일
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
    // publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 생성한 템플릿 파일
    }),
    new CopyWebpackPlugin({
      //개발 환경에서는 퍼블릭 폴더가 빌드 환경에 안 들어가서 정적 파일들이 없어 플러그인 추가
      patterns: [
        {
          from: "./public",
          to: "./",
        },
      ],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 4000,
    historyApiFallback: true, // router문제 해결 위함(CSR)
  },
};

//reference for route problem: https://ui.dev/react-router-cannot-get-url-refresh/

//referece for webpack setting: https://velog.io/@pop8682/%EB%B2%88%EC%97%AD-React-webpack-%EC%84%A4%EC%A0%95-%EC%B2%98%EC%9D%8C%EB%B6%80%ED%84%B0-%ED%95%B4%EB%B3%B4%EA%B8%B0

//reference for webpack for mockdata directory copy :https://webpack.js.org/plugins/copy-webpack-plugin/
