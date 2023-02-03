module.exports = class {
  data() {
    return {
      permalink: '/users/theorchid/following.json'
    };
  }

  render({ activitypub }) {
    return JSON.stringify({
      '@context': 'https://www.w3.org/ns/activitystreams',
      id: activitypub.following,
      type: 'OrderedCollection',
      totalItems: 0,
      orderedItems: []
    });
  }
};
