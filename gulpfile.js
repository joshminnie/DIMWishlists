const { src, dest } = require('gulp');
const concat = require('gulp-concat');

function build(done) {
  src(['./wishlists/_meta.txt', './wishlists/**/*.txt'])
    .pipe(concat({ path: 'wishlist.txt' }))
    .pipe(dest('./'));

  done();
}

exports.default = build;
exports.build = build;
