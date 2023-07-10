module.exports = class {
  data() {
    return {
      pagination: {
        alias: 'post',
        data: 'collections.post',
        size: 1
      },
      permalink: ({ post }) => `/users/theorchid/posts/${post.fileSlug}.json`
    };
  }

  render({ activitypub, app, page, post }) {
    return JSON.stringify({
      '@context': 'https://www.w3.org/ns/activitystreams',
      id: `${app.start_url}${page.url}`.replace('.json', ''),
      type: 'Note',
      published: post.date,
      url: `${app.start_url}${post.url}`,
      attributedTo: activitypub.id,
      to: ['https://www.w3.org/ns/activitystreams#Public'],
      cc: [activitypub.followers],
      sensitive: false,
      content: post.content
    });
  }
};
