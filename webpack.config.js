const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/scripts/main.js",
    output: {
        path: path.resolve(__dirname, "dist"), // 아웃풋 디렉토리 설정
        filename: "bundle.js", // 번들링된 파일의 이름 설정
    },
    module: {
      rules: [
        {
          test: /\.css$/, // .css 확장자를 가진 파일을 찾기
          use: ["style-loader", "css-loader"], // 순서 주의: 뒤에서부터 앞으로 로더가 실행됨
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html", // 사용할 템플릿 HTML 파일 경로
      }),
    ],
  };