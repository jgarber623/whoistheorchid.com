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

  render({ activitypub, page, post, site}) {
    return JSON.stringify({
      '@context': 'https://www.w3.org/ns/activitystreams',
      id: `${site.url}${page.url}`.replace('.json', ''),
      type: 'Note',
      published: post.date,
      url: `${site.url}${post.url}`,
      attributedTo: activitypub.id,
      to: ['https://www.w3.org/ns/activitystreams#Public'],
      cc: [activitypub.followers],
      sensitive: false,
      content: post.content
    });
  }
};
