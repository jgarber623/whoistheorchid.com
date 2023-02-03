module.exports = class {
  data() {
    return {
      permalink: '/@theorchid/feed.json'
    };
  }

  render({ collections, permalink, site }) {
    const items =
      collections
        .post
        .map(post => {
          const post_url = `${site.url}${post.url}`;

          return {
            id: post_url,
            url: post_url,
            content_html: post.content.trim(),
            content_text: post.template._frontMatter.content.trim(),
            date_published: post.date
          };
        })
        .reverse();

    return JSON.stringify({
      version: 'https://jsonfeed.org/version/1.1',
      title: `Updates from ${site.name}`,
      home_page_url: site.url,
      feed_url: `${site.url}${permalink}`,
      description: site.description,
      icon: site.icon,
      authors: [
        {
          name: site.name,
          url: site.url,
          avatar: site.icon
        }
      ],
      language: 'en-US',
      items: items
    });
  }
};
