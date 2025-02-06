export default ({ app }) => {
  const { description, icons, name, start_url } = app;

  const url = new URL(start_url);
  const preferredUsername = "theorchid";

  /* eslint-disable sort-keys */
  return {
    id: new URL("activitypub/actor", url),
    type: "Group",
    following: new URL("activitypub/following", url),
    followers: new URL("activitypub/followers", url),
    inbox: new URL("activitypub/inbox", url),
    outbox: new URL("activitypub/outbox", url),
    preferredUsername,
    name,
    summary: `<p>${description}</p>`,
    url: new URL(`@${preferredUsername}`, url),
    discoverable: true,
    published: "2009-01-12T18:48:50Z",
    attributionDomains: [url.hostname],
    publicKey: {
      id: new URL("#main-key", url),
      owner: url,
      publicKeyPem: `\
      -----BEGIN PUBLIC KEY-----
      MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs5uQiGtTk52bLcvV8fQ0
      pDbWT7E14biC8FAWQKM5RiAJO6jIRJnClP1P9WOnlatE0Byv7h3scEGNUlKcyWxk
      PvlzHnCTsVFrv8XNxZ/HbfnB2d3p/RkpiiMI8HwedndRMcRbNX2uYYqRg51CS2wl
      1AJm8CKkBXpnQ+7qLBrUxoLEPVxcZ+fu6Pb2ofZatREos8U0OBGb9ZBfR0Z0rQRM
      XEXMnCFCzIF6RCWkATxcCS7B30sdZeB7TXG9Rb4EIMlIEcdlCYNR+Y/oWjK4894p
      MRCncTGp0cOMB3ZniF/abkZphEUwk95oRzKzfqllus5ya8TK/JMD8GjjQVlMdyJm
      hQIDAQAB
      -----END PUBLIC KEY-----
    `.replace(/ /g, ""),
    },
    icon: {
      mediaType: icons[2].type,
      type: "Image",
      url: new URL(icons[2].src, url),
    },
    image: {
      mediaType: "image/jpeg",
      type: "Image",
      url: new URL("assets/images/cover.jpg", url),
    },
    attachment: [
      {
        name: "Website",
        type: "PropertyValue",
        value: `<a href="${url}" rel="me"><span class="invisible">https://</span>${url.hostname}</a>`,
      },
      {
        name: "Bandcamp",
        type: "PropertyValue",
        value: `<a href="https://theorchid.bandcamp.com/music" rel="me"><span class="invisible">https://</span>theorchid.bandcamp.com/music</a>`,
      },
    ],
  };
  /* eslint-enable sort-keys */
};
