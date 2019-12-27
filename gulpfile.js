const gulp = require('gulp');
const sass = require('gulp-sass');
const globImporter = require('node-sass-glob-importer');

sass.compiler = require('node-sass');

const sassCompilerOptions = {
  importer: globImporter(),
  outputStyle: 'compressed'
};

const stylesheets = () => {
  return gulp.src('./src/assets/stylesheets/**/*.scss')
    .pipe(sass(sassCompilerOptions).on('error', sass.logError))
    .pipe(gulp.dest('./public/assets/stylesheets'));
};

exports.build = stylesheets;

exports.watch = () => {
  gulp.watch('./src/assets/stylesheets/**/*.scss', stylesheets);
};
