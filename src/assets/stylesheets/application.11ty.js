const sass = require('node-sass');
const sassGlobImporter = require('node-sass-glob-importer');

module.exports = class {
  data() {
    return {
      inputFilePath: './src/assets/stylesheets/application.scss',
      permalink: data => data.inputFilePath.replace(/\.\/src\//, '').replace(/\.scss/, '.css')
    }
  }

  render({ inputFilePath }) {
    return sass.renderSync({
      file: inputFilePath,
      importer: sassGlobImporter(),
      outputStyle: 'compressed'
    }).css.toString();
  }
};
