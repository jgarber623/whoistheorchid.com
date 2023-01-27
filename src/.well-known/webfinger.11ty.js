module.exports = class {
  data() {
    return {
      permalink: '/.well-known/webfinger'
    };
  }

  render({ site }) {
    return JSON.stringify({
      subject: `acct:${site.username}@whoistheorchid.com`,
      links: [
        {
          rel: 'http://webfinger.net/rel/avatar',
          type: 'image/png',
          href: `${site.url}/icon-512x512.png`
        },
        {
          rel: 'http://webfinger.net/rel/profile-page',
          type: 'text/html',
          href: `${site.url}/@${site.username}`
        },
        {
          rel: 'self',
          type: 'application/activity+json',
          href: `${site.url}/users/${site.username}`
        }
      ]
    })
  }
};
