import { merge } from 'webpack-merge';
import getDefaultConfig from './preset/webpack.config';

export function withDefaults(customConfig = {}) {
  return (env = {}, argv = {}) => {
    const baseConfig = getDefaultConfig(env, argv);
    return merge(baseConfig, customConfig);
  };
}
