export default class {
  data() {
    return {
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
    return JSON.stringify({
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
    }, null, 2);
    /* eslint-enable sort-keys */
  }
}
