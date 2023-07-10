const config = require('@jgarber/eslint-config');
const globals = require('globals');

module.exports = [
  ...config,
  {
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },
  {
    files: ['.github/**/*.js', 'google/**/*.js'],
    languageOptions: {
      sourceType: 'module'
    }
  }
];
