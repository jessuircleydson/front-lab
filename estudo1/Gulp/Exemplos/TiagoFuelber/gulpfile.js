var gulp = require('gulp');

gulp.task('default', ['task1', 'sass', 'watch'], function() {

});

gulp.task('task1', function() {
  console.log('Hello World');
});

var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
	gulp.watch('./*.scss', ['sass']);
});