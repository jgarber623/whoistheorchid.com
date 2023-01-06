module.exports = eleventyConfig => {
  eleventyConfig.setLibrary('md', require('./lib/libraries/markdown.js'));

  eleventyConfig.addDataExtension('yml', require('./lib/extensions/yaml.js'));

  eleventyConfig.addPlugin(require('./lib/plugins/postcss.js'));

  eleventyConfig
    .addPassthroughCopy('./src/assets/images')
    .addPassthroughCopy('./src/favicon.ico')
    .addPassthroughCopy('./src/icon-256x256.png')
    .addPassthroughCopy('./src/icon-384x384.png')
    .addPassthroughCopy('./src/icon-512x512.png')
    .addPassthroughCopy('./src/icon.svg')
    .addPassthroughCopy('./src/robots.txt');

  return {
    dir: {
      input: './src',
      layouts: '_layouts',
      output: './public'
    }
  };
};
