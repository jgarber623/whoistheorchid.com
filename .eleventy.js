module.exports = eleventyConfig => {
  eleventyConfig.setBrowserSyncConfig(require('@jgarber/browsersync-config/eleventy'));

  eleventyConfig.setLibrary('md', require('./lib/libraries/markdown.js'));

  eleventyConfig.addDataExtension('yml', require('./lib/extensions/yaml.js'));

  eleventyConfig.addFilter('date_with_ordinal', require('./lib/filters/date_with_ordinal.js'));
  eleventyConfig.addFilter('prettify', require('./lib/filters/prettify.js'));

  eleventyConfig.addPassthroughCopy('./src/assets/images');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');

  eleventyConfig.addWatchTarget('./src/assets/stylesheets');

  return {
    dir: {
      input: './src',
      layouts: '_layouts',
      output: './public'
    }
  };
};
