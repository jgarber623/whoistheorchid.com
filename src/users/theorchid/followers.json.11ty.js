module.exports = class {
  data() {
    return {
      permalink: '/users/theorchid/followers.json'
    };
  }

  render({ activitypub, followers }) {
    return JSON.stringify({
      '@context': 'https://www.w3.org/ns/activitystreams',
      id: activitypub.followers,
      type: 'OrderedCollection',
      totalItems: followers.length,
      orderedItems: followers
    });
  }
};
