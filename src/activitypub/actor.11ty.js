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
    return {
      "@context": [
        "https://www.w3.org/ns/activitystreams",
        "https://w3id.org/security/v1",
        {
          schema: "https://schema.org/",
          toot: "http://joinmastodon.org/ns#",

          attributionDomains: { "@id": "toot:attributionDomains", "@type": "@id" },
          discoverable: "toot:discoverable",
          PropertyValue: "schema:PropertyValue",
          value: "schema:value",
        },
      ],
      ...activitypub,
    };
  }
}
