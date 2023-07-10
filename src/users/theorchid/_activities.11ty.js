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

  render({ activitypub, app, page, post }) {
    const activityUrl = `${app.start_url}${page.url}`;

    return JSON.stringify({
      '@context': 'https://www.w3.org/ns/activitystreams',
      id: activityUrl.replace('.json', ''),
      type: 'Create',
      actor: activitypub.id,
      published: post.date,
      to: ['https://www.w3.org/ns/activitystreams#Public'],
      cc: [activitypub.followers],
      object: activityUrl.replace('/activity.json', '')
    });
  }
};
