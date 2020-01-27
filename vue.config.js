module.exports = {
  chainWebpack: config => {
    config.resolve.symlinks(false);

    // if (process.env.NODE_ENV === "production") {
    //   config.module
    //     .rule("exclude-mirage")
    //     .test(/node_modules\/miragejs/)
    //     .use("null-loader")
    //     .loader("null-loader");
    // }
  }
};
