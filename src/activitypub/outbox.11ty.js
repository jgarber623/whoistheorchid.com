export default class {
  data() {
    return {
      eleventyAllowMissingExtension: true,
      eleventyExcludeFromCollections: true,
      layout: "layouts/base.11ty.js",
      permalink: ({ page }) => page.filePathStem,
    };
  }

  render({ activitypub }) {
    const orderedItems = [];

    /* eslint-disable sort-keys */
    return {
      "@context": "https://www.w3.org/ns/activitystreams",
      id: activitypub.outbox,
      type: "OrderedCollection",
      totalItems: orderedItems.length,
      orderedItems,
    };
    /* eslint-enable sort-keys */
  }
}
