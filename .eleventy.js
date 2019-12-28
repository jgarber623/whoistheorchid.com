const yaml = require('js-yaml');

module.exports = eleventy => {
  eleventy.setBrowserSyncConfig(require('./bs-config.js'));

  eleventy.setLibrary('md', require('./lib/libraries/markdown.js'));

  eleventy.addDataExtension('yml', contents => yaml.safeLoad(contents));

  eleventy.addFilter('display_date', require('./lib/filters/display_date.js'));
  eleventy.addFilter('prettify', require('./lib/filters/prettify.js'));

  eleventy.addPassthroughCopy('./src/assets/images');
  eleventy.addPassthroughCopy('./src/favicon.ico');
  eleventy.addPassthroughCopy('./src/robots.txt');

  return {
    dir: {
      input: './src',
      layouts: '_layouts',
      output: './public'
    }
  };
};
