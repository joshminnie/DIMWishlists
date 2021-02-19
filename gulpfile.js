const { src, dest, series } = require('gulp');

var concat = require('gulp-concat');
var del = require('del');

function clean(done) {
  del('wishlist.txt');

  done();
}

function build(done) {
  src('./wishlists/**/*.txt')
    .pipe(concat({ path: 'wishlist.txt' }))
    .pipe(dest('./'));

  done();
}

exports.default = series(clean, build);
exports.clean = clean;
exports.build = build;
