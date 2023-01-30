module.exports = {
  layout: 'post.liquid',
  permalink: ({ page }) => `/@theorchid/${page.fileSlug}/`,
  tags: ['post']
};
