export default class {
  data() {
    return {
      permalink: ({ activitypub }) => `${activitypub.outbox.pathname}.json`,
    };
  }

  render({ activitypub, collections }) {
    const orderedItems =
      collections
        .post
        .map((post) => {
          /* eslint-disable sort-keys */
          return {
            "@context": "https://www.w3.org/ns/activitystreams",
            id: post.data.alternates.activity,
            type: "Create",
            actor: activitypub.id,
            published: post.date,
            to: ["https://www.w3.org/ns/activitystreams#Public"],
            cc: [activitypub.followers],
            object: post.data.alternates.object,
          };
          /* eslint-enable sort-keys */
        })
        .reverse();

    /* eslint-disable sort-keys */
    return JSON.stringify({
      "@context": "https://www.w3.org/ns/activitystreams",
      id: activitypub.outbox,
      totalItems: orderedItems.length,
      orderedItems,
    }, null, 2);
    /* eslint-enable sort-keys */
  }
}
