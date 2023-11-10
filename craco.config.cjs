module.exports = {
  webpack: {
    configure: webpackConfig => {
      webpackConfig.ignoreWarnings = [{ module: /typescript/ }];

      return webpackConfig;
    }
  }
};
