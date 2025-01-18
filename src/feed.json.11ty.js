export default class {
  data() {
    return {
      layout: "layouts/base.11ty.js",
      permalink: "feed.json",
    };
  }

  render({ activitypub: { actor }, app, collections, permalink }) {
    const { description, lang: language, name, start_url: url } = app;
    const { icon } = actor;

    const items =
      collections
        .post
        .map((post) => {
          const id = new URL(post.url, url);

          /* eslint-disable sort-keys */
          return {
            id,
            url: id,
            content_html: post.content.trim(),
            content_text: post.rawInput.trim(),
            date_published: post.date,
          };
          /* eslint-enable sort-keys */
        })
        .reverse();

    /* eslint-disable sort-keys */
    return {
      version: "https://jsonfeed.org/version/1.1",
      title: `Updates from ${name}`,
      home_page_url: url,
      feed_url: new URL(permalink, url),
      description,
      icon,
      authors: [
        {
          name,
          url,
          avatar: icon
        }
      ],
      language,
      items,
    };
    /* eslint-enable sort-keys */
  }
}
