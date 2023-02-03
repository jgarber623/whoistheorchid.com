module.exports = class {
  data() {
    return {
      pagination: {
        alias: 'post',
        data: 'collections.post',
        size: 1
      },
      permalink: ({ post }) => `/users/theorchid/posts/${post.fileSlug}/activity.json`
    };
  }

  render({ activitypub, page, post, site}) {
    return JSON.stringify({
      '@context': 'https://www.w3.org/ns/activitystreams',
      id: `${site.url}${page.url}`.replace('.json', ''),
      type: 'Create',
      actor: activitypub.id,
      published: post.date,
      to: ['https://www.w3.org/ns/activitystreams#Public'],
      cc: [activitypub.followers],
      object: `${site.url}${page.url}`.replace('/activity.json', '')
    });
  }
};
