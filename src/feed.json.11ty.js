export default class {
  data() {
    return {
      permalink: 'feed.json'
    };
  }

  render({ app, collections, permalink }) {
    const items =
      collections
        .post
        .map(post => {
          const id = new URL(post.url, app.start_url);

          /* eslint-disable sort-keys */
          return {
            id,
            url: id,
            content_html: post.content.trim(),
            content_text: post.rawInput.trim(),
            date_published: post.date
          };
          /* eslint-enable sort-keys */
        })
        .reverse();

    const icon = new URL(app.icons[2].src, app.start_url);

    /* eslint-disable sort-keys */
    return JSON.stringify({
      version: 'https://jsonfeed.org/version/1.1',
      title: `Updates from ${app.name}`,
      home_page_url: app.start_url,
      feed_url: new URL(permalink, app.start_url),
      description: app.description,
      icon,
      authors: [
        {
          name: app.name,
          url: app.start_url,
          avatar: icon
        }
      ],
      language: 'en-US',
      items
    });
    /* eslint-enable sort-keys */
  }
}
