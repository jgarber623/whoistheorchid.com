export default class {
  data() {
    return {
      pagination: {
        alias: 'post',
        data: 'collections.post',
        size: 1
      },
      permalink: ({ activitypub, post }) => `${activitypub.id.pathname}/${post.fileSlug}.json`
    };
  }

  render({ activitypub, app, post }) {
    /* eslint-disable sort-keys */
    return JSON.stringify({
      '@context': 'https://www.w3.org/ns/activitystreams',
      id: post.data.alternates.object,
      type: 'Note',
      published: post.date,
      url: new URL(post.url, app.start_url),
      attributedTo: activitypub.id,
      to: ['https://www.w3.org/ns/activitystreams#Public'],
      cc: [activitypub.followers],
      sensitive: false,
      content: post.content.trim()
    }, null, 2);
    /* eslint-enable sort-keys */
  }
}
