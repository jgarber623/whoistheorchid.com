module.exports = eleventyConfig => {
  // Global Data
  eleventyConfig.addGlobalData('app', require('./src/manifest.webmanifest.json'));

  eleventyConfig.amendLibrary('md', require('./lib/libraries/markdown.js'));

  eleventyConfig.setLiquidOptions(require('./lib/libraries/liquid.js'));

  eleventyConfig.addPlugin(require('./lib/plugins/postcss.js'));

  // Passthrough File Copy
  eleventyConfig
    .addPassthroughCopy('./src/*.{ico,png,svg,txt}')
    .addPassthroughCopy('./src/assets/images')
    .addPassthroughCopy({
      './src/manifest.webmanifest.json': 'manifest.webmanifest'
    });

  return {
    dir: {
      input: './src',
      layouts: '_layouts',
      output: './public'
    }
  };
};
