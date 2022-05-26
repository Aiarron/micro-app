// eslint-disable-next-line
const config: Record<string, string> = {
  vue3: "http://localhost:20881",
  vue2: "http://localhost:20882",
};

if (process.env.NODE_ENV === "production") {
  // 基座应用和子应用部署在同一个域名下，这里使用location.origin进行补全
  Object.keys(config).forEach((key) => {
    config[key] = window.location.origin;
  });
}

export default config;
