const markdown = require('markdown-it');

module.exports = (() => {
  const options = {
    breaks: true,
    typographer: true
  };

  const parser = markdown(options);

  parser.use(require('markdown-it-handle'), {
    attributes: false
  });

  return parser;
})();
