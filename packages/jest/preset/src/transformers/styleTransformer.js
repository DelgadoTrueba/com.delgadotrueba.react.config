module.exports = {
  process() {
    return { code: 'new Proxy({},{get: (_target, prop) => prop}' };
  },
  getCacheKey() {
    return 'cssTransform';
  },
};
