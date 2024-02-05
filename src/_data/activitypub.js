export default function({ app }) {
  const preferredUsername = 'theorchid';
  const id = new URL(`users/${preferredUsername}`, app.start_url);

  /* eslint-disable sort-keys */
  return {
    id,
    type: 'Group',
    following: new URL(`${id}/following`),
    followers: new URL(`${id}/followers`),
    inbox: new URL(`${id}/inbox`),
    outbox: new URL(`${id}/outbox`),
    preferredUsername,
    name: app.name,
    summary: `<p>${app.description}</p>`,
    url: new URL(`@${preferredUsername}`, app.start_url),
    discoverable: true,
    published: '2009-01-12T18:48:50Z',
    publicKey: {
      id: `${id}#main-key`,
      owner: id,
      publicKeyPem: '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs5uQiGtTk52bLcvV8fQ0\npDbWT7E14biC8FAWQKM5RiAJO6jIRJnClP1P9WOnlatE0Byv7h3scEGNUlKcyWxk\nPvlzHnCTsVFrv8XNxZ/HbfnB2d3p/RkpiiMI8HwedndRMcRbNX2uYYqRg51CS2wl\n1AJm8CKkBXpnQ+7qLBrUxoLEPVxcZ+fu6Pb2ofZatREos8U0OBGb9ZBfR0Z0rQRM\nXEXMnCFCzIF6RCWkATxcCS7B30sdZeB7TXG9Rb4EIMlIEcdlCYNR+Y/oWjK4894p\nMRCncTGp0cOMB3ZniF/abkZphEUwk95oRzKzfqllus5ya8TK/JMD8GjjQVlMdyJm\nhQIDAQAB\n-----END PUBLIC KEY-----\n'
    },
    attachment: [
      {
        type: 'PropertyValue',
        name: 'Website',
        value: `<a href="${app.start_url}" rel="me"><span class="invisible">https://</span>whoistheorchid.com</a>`
      },
      {
        type: 'PropertyValue',
        name: 'Bandcamp',
        value: '<a href="https://theorchid.bandcamp.com/music" rel="me"><span class="invisible">https://</span>theorchid.bandcamp.com/music</a>'
      }
    ],
    icon: {
      type: 'Image',
      mediaType: 'image/png',
      url: new URL(app.icons[2].src, app.start_url)
    },
    image: {
      type: 'Image',
      mediaType: 'image/jpeg',
      url: new URL('assets/images/cover.jpg', app.start_url)
    }
  };
  /* eslint-enable sort-keys */
}
