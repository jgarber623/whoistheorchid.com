export default class {
  data() {
    return {
      permalink: ".well-known/webfinger.json",
    };
  }

  render({ activitypub }) {
    /* eslint-disable sort-keys */
    return JSON.stringify({
      subject: `acct:${activitypub.preferredUsername}@${activitypub.id.hostname}`,
      links: [
        {
          rel: "http://webfinger.net/rel/avatar",
          type: activitypub.icon.mediaType,
          href: activitypub.icon.url,
        },
        {
          rel: "http://webfinger.net/rel/profile-page",
          type: "text/html",
          href: activitypub.url,
        },
        {
          rel: "self",
          type: "application/activity+json",
          href: activitypub.id,
        },
      ],
    }, null, 2);
    /* eslint-enable sort-keys */
  }
}
