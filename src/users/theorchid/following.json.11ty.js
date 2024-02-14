export default class {
  data() {
    return {
      permalink: ({ activitypub }) => `${activitypub.following.pathname}.json`,
    };
  }

  render({ activitypub }) {
    const orderedItems = [];

    /* eslint-disable sort-keys */
    return JSON.stringify({
      "@context": "https://www.w3.org/ns/activitystreams",
      id: activitypub.following,
      totalItems: orderedItems.length,
      orderedItems,
    }, null, 2);
    /* eslint-enable sort-keys */
  }
}
