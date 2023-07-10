module.exports = class {
  data() {
    return {
      permalink: '/users/theorchid/outbox.json'
    };
  }

  render({ activitypub, collections }) {
    const items =
      collections
        .post
        .map(post => {
          const object = `${activitypub.id}/posts/${post.fileSlug}`;

          return {
            id: `${object}/activity`,
            type: 'Create',
            actor: activitypub.id,
            published: post.date,
            to: ['https://www.w3.org/ns/activitystreams#Public'],
            cc: [activitypub.followers],
            object
          };
        })
        .reverse();

    return JSON.stringify({
      '@context': 'https://www.w3.org/ns/activitystreams',
      id: activitypub.outbox,
      type: 'OrderedCollection',
      totalItems: items.length,
      orderedItems: items
    });
  }
};
