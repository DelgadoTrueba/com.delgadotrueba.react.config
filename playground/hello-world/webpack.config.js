const path = require("path");

const { createAppConfig } = require("@delgadotrueba/react-config/webpack");

const defaultWebpack = createAppConfig({
  output: {
    uniqueName: "hello-world",
    path: path.resolve(__dirname, "dist"),
  },
});

console.log(defaultWebpack());

module.exports = defaultWebpack;
