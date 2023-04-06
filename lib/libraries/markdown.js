module.exports = markdown => {
  return markdown
    .set({
      breaks: true,
      typographer: true
    })
    .use(require('markdown-it-handle'), {
      attributes: false
    });
};
