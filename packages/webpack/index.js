const { merge } = require("webpack-merge");
const { getDefaultConfig } = require("./preset/webpack.config");

module.exports = {
  withDefaults: (customConfig = {}) => {
    return (env = {}, argv = {}) => {
      const baseConfig = getDefaultConfig(env, argv);
      return merge(baseConfig, customConfig);
    };
  },
};
