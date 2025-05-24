const { merge } = require("webpack-merge");
const { getDefaultAppConfig } = require("./preset/app/webpack.config");

module.exports = {
  createAppConfig: (customConfig = {}) => {
    return (env = {}, argv = {}) => {
      const baseConfig = getDefaultAppConfig(env, argv);
      return merge(baseConfig, customConfig);
    };
  },
};
