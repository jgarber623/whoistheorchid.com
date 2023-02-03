const { absoluteURL } = require('../../lib/utils.js');

const { url } = require('./site.js');

const user = '/users/theorchid';

module.exports = {
  id: absoluteURL(user, url),
  inbox: absoluteURL(`${user}/inbox`, url),
  outbox: absoluteURL(`${user}/outbox`, url),
  url: absoluteURL('/@theorchid', url)
};
