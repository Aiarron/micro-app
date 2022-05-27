const { name } = require("./package.json");

module.exports = {
  publicPath: "/vue2/",
  outputDir: name,
  devServer: {
    disableHostCheck: true, // 关闭host check  方便ngrok等内网穿透工具
    open: false,
    port: 20882,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  lintOnSave: false,
  // 自定义webpack配置
  configureWebpack: {},
};
