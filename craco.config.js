module.exports = {
  webpack: {
    configure: webpackConfig => {
      // CRA 설정은 기본적으로 src 내부에 대해서만 transpile하게 되어있습니다.
      // 따라서 외부의 typescript 파일을 불러올 때 loader 추가가 필요합니다.
      // 예를 들어 하나의 패키지에서 "import { api } from '@mono/shared';" 를 사용하기 위해 필요합니다.
      webpackConfig.module.rules.push({
        test: /.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          configFile: 'tsconfig.json',
        },
      });
      return webpackConfig;
    },
  },
};
