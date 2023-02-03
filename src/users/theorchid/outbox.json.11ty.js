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
          const object_url = `${activitypub.id}/posts/${post.fileSlug}`;

          return {
            '@context': 'https://www.w3.org/ns/activitystreams',
            id: `${object_url}/activity`,
            type: 'Create',
            actor: activitypub.id,
            published: post.date,
            to: ['https://www.w3.org/ns/activitystreams#Public'],
            cc: [activitypub.followers],
            object: object_url
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
