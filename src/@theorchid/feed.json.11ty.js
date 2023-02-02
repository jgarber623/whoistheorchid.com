const { URL } = require('node:url');

const absoluteURL = (path, base) => new URL(path, base).href;

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
          return {
            id: absoluteURL(post.url, site.url),
            url: absoluteURL(post.url, site.url),
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
      feed_url: absoluteURL(permalink, site.url),
      description: site.description,
      icon: absoluteURL('/icon-512x512.png', site.url),
      authors: [
        {
          name: site.name,
          url: site.url,
          avatar: absoluteURL('/icon-512x512.png', site.url)
        }
      ],
      language: 'en-US',
      items: items
    });
  }
};
