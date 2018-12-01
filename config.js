/**
 * Generate the application configuration
 */
const path = require('path');
const appConfig = require('./config.json'),
  secretConfig = require('./config.secret.json');

const config = { root: __dirname, ...deepMerge(appConfig, secretConfig) };

module.exports = config;

/**
 * Merge objects deep, source values will overwrite target
 */
function deepMerge(target, source) {
  let output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target))
          Object.assign(output, { [key]: source[key] });
        else
          output[key] = deepMerge(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}

function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}