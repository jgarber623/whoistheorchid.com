const { absoluteURL } = require('../../lib/utils.js');

const url = 'https://whoistheorchid.com';

module.exports = {
  name: 'The Orchid',
  description: 'The Orchid is an instrumental post-rock band from Washington, DC.',
  short_description: 'an instrumental post-rock band from Washington, DC',
  url: url,
  icon: absoluteURL('/icon-512x512.png', url),
  theme_color: '#101010',
  license: {
    name: 'Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International',
    url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/'
  },
  source: {
    name: 'GitHub',
    url: 'https://github.com/jgarber623/whoistheorchid.com'
  }
};
