const { name } = require("./package.json");

module.exports = {
  publicPath: "/vue3/",
  // 输出文件目录
  outputDir: name,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,

  devServer: {
    disableHostCheck: true, // 关闭host check  方便ngrok等内网穿透工具
    open: false,
    port: 20881,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  lintOnSave: false,
  // 自定义webpack配置
  configureWebpack: {},
};
