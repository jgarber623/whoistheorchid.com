const { URL } = require('node:url');

const absoluteURL = (path, base) => new URL(path, base).href;

module.exports = { absoluteURL };
