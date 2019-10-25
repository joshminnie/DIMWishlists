const { src, dest, series, parallel } = require('gulp');

var concat = require('gulp-concat');
var del = require('del');
var fs = require('fs');
var path = require('path');

var wishlists = 'wishlists';

function clean(cb) {
  del('wishlists/*.txt');
  cb();
}

function getFolders(directory) {
  return fs.readdirSync(directory)
    .filter(function(file) {
      return fs.statSync(path.join(directory, file)).isDirectory();
    });
}

function build(done) {
  var folders = getFolders(wishlists);
  if (folders.length === 0) { return done(); }

  var tasks = folders.map(function(folder) {
    return src(path.join(wishlists, folder, '/**/*.txt'))
      .pipe(concat(folder + '.txt'))
      .pipe(dest(wishlists));
  });

  done();
}

function compile(done) {
  src(['includes/compiled-header.txt', path.join(wishlists, '*.txt')])
    .pipe(concat('wishlist.txt'))
    .pipe(dest('./'));
  done();
}

exports.compile = compile;
exports.default = series(clean, build);
