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
      attachment: [
        {
          type: 'PropertyValue',
          name: 'Website',
          value: `<a href="${site.url}" rel="me">whoistheorchid.com</a>`
        },
        {
          type: 'PropertyValue',
          name: 'Bandcamp',
          value: '<a href="https://theorchid.bandcamp.com" rel="me">theorchid.bandcamp.com</a>'
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
