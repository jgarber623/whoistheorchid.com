export default ({ app }) => {
  const { icons, start_url } = app;

  const url = new URL(start_url);
  const id = new URL("activitypub/actor", url);

  /* eslint-disable sort-keys */
  return {
    subject: `acct:theorchid@${url.hostname}`,
    aliases: [
      `mailto:booking@${url.hostname}`,
      url,
      new URL("@theorchid", url),
      id,
    ],
    links: [
      {
        href: new URL(icons[2].src, url),
        rel: "http://webfinger.net/rel/avatar",
        type: icons[2].type,
      },
      {
        href: url,
        rel: "http://webfinger.net/rel/profile-page",
        type: "text/html",
      },
      {
        href: id,
        rel: "self",
        type: "application/activity+json",
      },
    ],
  };
  /* eslint-enable sort-keys */
};
