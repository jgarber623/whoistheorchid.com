module.exports = class {
  data() {
    return {
      permalink: '/@theorchid/feed.json'
    };
  }

  render({ app, collections, permalink }) {
    const items =
      collections
        .post
        .map(post => {
          const post_url = `${app.start_url}${post.url}`;

          return {
            id: post_url,
            url: post_url,
            content_html: post.content.trim(),
            content_text: post.template._frontMatter.content.trim(),
            date_published: post.date
          };
        })
        .reverse();

    const icon = `${app.start_url}${app.icons[2].src}`;

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
  }
};
