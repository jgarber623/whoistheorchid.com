module.exports = class {
  data() {
    return {
      permalink: '/users/theorchid.json'
    };
  }

  render({ activitypub, site }) {
    return JSON.stringify({
      '@context': [
        'https://www.w3.org/ns/activitystreams',
        'https://w3id.org/security/v1'
      ],
      id: activitypub.id,
      type: 'Group',
      following: activitypub.following,
      followers: activitypub.followers,
      inbox: activitypub.inbox,
      outbox: activitypub.outbox,
      preferredUsername: 'theorchid',
      name: site.name,
      summary: `<p>${site.description}</p>`,
      url: activitypub.url,
      discoverable: true,
      published: '2009-01-12T18:48:50Z',
      publicKey: {
        id: `${activitypub.id}#main-key`,
        owner: activitypub.id,
        publicKeyPem: '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs5uQiGtTk52bLcvV8fQ0\npDbWT7E14biC8FAWQKM5RiAJO6jIRJnClP1P9WOnlatE0Byv7h3scEGNUlKcyWxk\nPvlzHnCTsVFrv8XNxZ/HbfnB2d3p/RkpiiMI8HwedndRMcRbNX2uYYqRg51CS2wl\n1AJm8CKkBXpnQ+7qLBrUxoLEPVxcZ+fu6Pb2ofZatREos8U0OBGb9ZBfR0Z0rQRM\nXEXMnCFCzIF6RCWkATxcCS7B30sdZeB7TXG9Rb4EIMlIEcdlCYNR+Y/oWjK4894p\nMRCncTGp0cOMB3ZniF/abkZphEUwk95oRzKzfqllus5ya8TK/JMD8GjjQVlMdyJm\nhQIDAQAB\n-----END PUBLIC KEY-----\n'
      },
      attachment: [
        {
          type: 'PropertyValue',
          name: 'Website',
          value: `<a href="${site.url}" rel="me"><span class="invisible">https://</span>whoistheorchid.com</a>`
        },
        {
          type: 'PropertyValue',
          name: 'Bandcamp',
          value: '<a href="https://theorchid.bandcamp.com" rel="me"><span class="invisible">https://</span>theorchid.bandcamp.com</a>'
        }
      ],
      icon: {
        type: 'Image',
        mediaType: 'image/png',
        url: site.icon
      },
      image: {
        type: 'Image',
        mediaType: 'image/jpeg',
        url: `${site.url}/assets/images/cover.jpg`
      }
    });
  }
};
