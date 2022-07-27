const debug = require('debug');

const dirPath = (dirname) => {
  return dirname
    .replace(process.cwd(), '')
    .replace(/.js$/, '')
    .replaceAll('/', ':');
}

const log = (dirname) => {
  return debug(`app${dirPath(dirname)}`);
}

module.exports = log;
