var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

gulp.task('default', ['js'], function () {
	gulp.watch('./jquery_polyfill.js', ['js']);
});

gulp.task('js', function () {
	gulp.src('./jquery_polyfill.js')
		.pipe(concat('jquery_polyfill.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});