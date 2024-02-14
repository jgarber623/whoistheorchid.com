export default class {
  data() {
    return {
      permalink: ({ activitypub }) => `${activitypub.id.pathname}.json`,
    };
  }

  render({ activitypub }) {
    return JSON.stringify({
      "@context": [
        "https://www.w3.org/ns/activitystreams",
        "https://w3id.org/security/v1",
        {
          discoverable: "http://joinmastodon.org/ns#discoverable",
          PropertyValue: "http://schema.org#PropertyValue",
          value: "http://schema.org#value",
        },
      ],
      ...activitypub,
    }, null, 2);
  }
}
