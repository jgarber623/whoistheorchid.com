export default class {
  data() {
    return {
      permalink: ({ activitypub }) => `${activitypub.followers.pathname}.json`,
    };
  }

  render({ activitypub }) {
    const orderedItems = [];

    /* eslint-disable sort-keys */
    return JSON.stringify({
      "@context": "https://www.w3.org/ns/activitystreams",
      id: activitypub.followers,
      totalItems: orderedItems.length,
      orderedItems,
    }, null, 2);
    /* eslint-enable sort-keys */
  }
}
