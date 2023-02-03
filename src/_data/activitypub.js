const { url } = require('./site.js');

const actor = `${url}/users/theorchid`;

module.exports = {
  id: actor,
  inbox: `${actor}/inbox`,
  outbox: `${actor}/outbox`,
  url: `${url}/@theorchid`,
  following: `${actor}/following`,
  followers: `${actor}/followers`
};
