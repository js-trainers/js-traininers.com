var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var serve = require('gulp-serve');

gulp.task('server', serve({
  root: ['./public'],
  port: 8080
}));

gulp.task('deploy', function() {
  return gulp.src('./public/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['server'])
