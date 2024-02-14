export default class {
  data() {
    return {
      pagination: {
        alias: "post",
        data: "collections.post",
        size: 1,
      },
      permalink: ({ activitypub, post }) => `${activitypub.id.pathname}/${post.fileSlug}/activity.json`,
    };
  }

  render({ activitypub, post }) {
    /* eslint-disable sort-keys */
    return JSON.stringify({
      "@context": "https://www.w3.org/ns/activitystreams",
      id: post.data.alternates.activity,
      type: "Create",
      actor: activitypub.id,
      published: post.date,
      to: ["https://www.w3.org/ns/activitystreams#Public"],
      cc: [activitypub.followers],
      object: post.data.alternates.object,
    }, null, 2);
    /* eslint-enable sort-keys */
  }
}
