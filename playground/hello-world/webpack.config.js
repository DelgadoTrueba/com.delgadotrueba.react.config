const path = require("path");

const { withDefaults } = require("@delgadotrueba/react-config/webpack");

const defaultWebpack = withDefaults({
  output: {
    uniqueName: "hello-world",
    path: path.resolve(__dirname, "dist"),
  },
});

console.log(defaultWebpack());

module.exports = defaultWebpack;
