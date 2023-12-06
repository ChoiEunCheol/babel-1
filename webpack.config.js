const path = require("path");

module.exports = {
    entry: "./src/index.js", // 엔트리 포인트 설정
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
  };