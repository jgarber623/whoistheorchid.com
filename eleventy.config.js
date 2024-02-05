import fs from 'node:fs/promises';

import markdownItHandle from 'markdown-it-handle';
import markdownPlugin from '@jgarber/eleventy-plugin-markdown';
import postcssPlugin from '@jgarber/eleventy-plugin-postcss';

import liquidOptions from './lib/libraries/liquid.js';

export default async function(eleventyConfig) {
  // Global Data
  eleventyConfig.addGlobalData('app', JSON.parse(await fs.readFile('./src/manifest.webmanifest.json')));

  // Passthrough File Copy
  eleventyConfig
    .addPassthroughCopy('./src/_{headers,redirects}')
    .addPassthroughCopy('./src/*.{ico,png,svg,txt}')
    .addPassthroughCopy('./src/assets/images')
    .addPassthroughCopy({
      './src/manifest.webmanifest.json': 'manifest.webmanifest'
    });

  // Libraries
  eleventyConfig.setLiquidOptions(liquidOptions);

  // Plugins
  eleventyConfig.addPlugin(markdownPlugin, {
    plugins: [
      [markdownItHandle, { attributes: false }]
    ]
  });

  eleventyConfig.addPlugin(postcssPlugin);

  return {
    dir: {
      input: './src'
    }
  };
}
