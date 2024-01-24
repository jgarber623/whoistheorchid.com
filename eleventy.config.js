module.exports = function(eleventyConfig) {
  // Global Data
  eleventyConfig.addGlobalData('app', require('./src/manifest.webmanifest.json'));

  // Passthrough File Copy
  eleventyConfig
    .addPassthroughCopy('./src/*.{ico,png,svg,txt}')
    .addPassthroughCopy('./src/assets/images')
    .addPassthroughCopy({
      './src/manifest.webmanifest.json': 'manifest.webmanifest'
    });

  // Libraries
  eleventyConfig.setLiquidOptions(require('./lib/libraries/liquid.js'));

  // Plugins
  eleventyConfig.addPlugin(require('@jgarber/eleventy-plugin-markdown'), {
    plugins: [
      [require('markdown-it-handle'), { attributes: false }]
    ]
  });

  eleventyConfig.addPlugin(require('@jgarber/eleventy-plugin-postcss'));

  return {
    dir: {
      input: './src'
    }
  };
};
