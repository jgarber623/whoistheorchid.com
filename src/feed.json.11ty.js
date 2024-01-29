export default class {
  data() {
    return {
      permalink: '/feed.json'
    };
  }

  render({ app, collections, permalink }) {
    const items =
      collections
        .post
        .map(post => {
          const url = `${app.start_url}${post.url}`;

          /* eslint-disable sort-keys */
          return {
            id: url,
            url,
            content_html: post.content.trim(),
            content_text: post.rawInput.trim(),
            date_published: post.date
          };
          /* eslint-enable sort-keys */
        })
        .reverse();

    const icon = `${app.start_url}${app.icons[2].src}`;

    /* eslint-disable sort-keys */
    return JSON.stringify({
      version: 'https://jsonfeed.org/version/1.1',
      title: `Updates from ${app.name}`,
      home_page_url: app.start_url,
      feed_url: `${app.start_url}${permalink}`,
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
