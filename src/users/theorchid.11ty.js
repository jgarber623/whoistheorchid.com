module.exports = class {
  data() {
    return {
      permalink: '/users/theorchid'
    };
  }

  render({ site }) {
    return JSON.stringify({
      '@context': [
        'https://www.w3.org/ns/activitystreams',
        'https://w3id.org/security/v1'
      ],
      id: `${site.url}/users/${site.username}`,
      type: 'Group',
      inbox: `${site.url}/users/${site.username}/inbox`,
      preferredUsername: `${site.username}`,
      name: site.name,
      summary: `<p>${site.description}</p>`,
      url: `${site.url}/@${site.username}`,
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
        url: `${site.url}/icon-512x512.png`
      },
      image: {
        type: 'Image',
        mediaType: 'image/jpeg',
        url: `${site.url}/assets/images/cover.jpg`
      }
    });
  }
};