'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  // place code for your default task here
  return gulp.src('main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(''));
});

gulp.task('sass:watch', function () {
  gulp.watch('main.scss', ['sass']);
});
