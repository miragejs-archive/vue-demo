module.exports = {
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  },

  chainWebpack: config => {
    config.resolve.symlinks(false);

    if (
      process.env.NODE_ENV === "production" &&
      process.env.MIRAGE_ENABLED !== "true"
    ) {
      config.module
        .rule("exclude-mirage")
        .test(/node_modules\/miragejs\//)
        .use("null-loader")
        .loader("null-loader");
    }
  }
};
