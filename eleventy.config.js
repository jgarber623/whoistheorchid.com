import markdownItHandle from "markdown-it-handle";

import eleventyPluginLiquid from "@jgarber/eleventy-plugin-liquid";
import eleventyPluginMarkdown from "@jgarber/eleventy-plugin-markdown";
import eleventyPluginPostcss from "@jgarber/eleventy-plugin-postcss";

import manifest from "./src/manifest.webmanifest.json" with { type: "json" };

export default async function(eleventyConfig) {
  // Global Data
  eleventyConfig.addGlobalData("app", manifest);

  // Configuration
  eleventyConfig.setDataFileBaseName("_data");

  // Passthrough File Copy
  eleventyConfig
    .addPassthroughCopy("./src/_{headers,redirects}")
    .addPassthroughCopy("./src/*.{ico,png,svg,txt}")
    .addPassthroughCopy("./src/assets/images")
    .addPassthroughCopy({
      "./src/manifest.webmanifest.json": "manifest.webmanifest",
    });

  // Plugins
  eleventyConfig.addPlugin(eleventyPluginLiquid, {
    globals: {
      dates: {
        display: "%B %e<sup>%q</sup>, %Y",
        display_with_time: "%B %e<sup>%q</sup>, %Y at %-l:%M %p",
        iso8601: "%Y-%m-%d",
      },
    },
  });

  eleventyConfig.addPlugin(eleventyPluginMarkdown, {
    plugins: [
      [markdownItHandle, { attributes: false }],
    ],
  });

  eleventyConfig.addPlugin(eleventyPluginPostcss);
}

export const config = {
  dir: {
    input: "./src",
  },
};
