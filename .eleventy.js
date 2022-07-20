module.exports = eleventyConfig => {
  eleventyConfig.setLibrary('md', require('./lib/libraries/markdown.js'));

  eleventyConfig.addDataExtension('yml', require('./lib/extensions/yaml.js'));

  eleventyConfig.addPassthroughCopy('./src/assets/images');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/icon-256x256.png');
  eleventyConfig.addPassthroughCopy('./src/icon-384x384.png');
  eleventyConfig.addPassthroughCopy('./src/icon-512x512.png');
  eleventyConfig.addPassthroughCopy('./src/icon.svg');
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
