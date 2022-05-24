const { name } = require("./package.json");

module.exports = {
  // 基本路径
  publicPath: "/main",
  // 输出文件目录
  outputDir: name,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,

  devServer: {
    open: true,
    port: 20880,
    disableHostCheck: true, // 关闭host check  方便ngrok等内网穿透工具
    // proxy: {}, // 代理
  },
  // 自定义webpack配置
  configureWebpack: {
    output: {
      jsonpFunction: `webpackJsonp-main`,
    },
  },
  chainWebpack: (config) => {
    // config.resolve.alias.set("@micro-zoe/micro-app", path.join(__dirname, '../../../micro-app/lib/index.esm.js'))

    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        options.compilerOptions = {
          ...(options.compilerOptions || {}),
          isCustomElement: (tag) => /^micro-app/.test(tag),
        };
        return options;
      });
  },
};
