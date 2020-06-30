const path = require('path')
const scanDir = require('./scanDir')

/**
 * @typedef MoleculerRequireDirOptions
 * @property {boolean} recurse - load children dirs
 * @property {boolean} camelCase - convert filename to camel case
 */
/**
 *
 * @param {string} dir
 * @param {MoleculerRequireDirOptions} options
 * @return {Object}
 */
module.exports = function (dir, options = {}) {
  const directory = path.dirname(module.parent.filename)
  const reqPath = path.resolve(directory, dir)
  return scanDir(reqPath, {}, options)
}