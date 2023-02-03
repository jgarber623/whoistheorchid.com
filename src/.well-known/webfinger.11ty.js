module.exports = class {
  data() {
    return {
      permalink: '/.well-known/webfinger'
    };
  }

  render({ activitypub, site }) {
    return JSON.stringify({
      subject: 'acct:theorchid@whoistheorchid.com',
      links: [
        {
          rel: 'http://webfinger.net/rel/avatar',
          type: 'image/png',
          href: site.icon
        },
        {
          rel: 'http://webfinger.net/rel/profile-page',
          type: 'text/html',
          href: activitypub.url
        },
        {
          rel: 'self',
          type: 'application/activity+json',
          href: activitypub.id
        }
      ]
    })
  }
};
