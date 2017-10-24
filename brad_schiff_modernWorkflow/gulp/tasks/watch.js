var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync');

gulp.task('watch', function() {
	browserSync.init({
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function() {
		browserSync.reload();
	});

	//** means any future hypothetical folders
	//*.css means any file with css extentions
  watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	});
});

//styles is a dependency that HAS to run before Sync is used
gulp.task('cssInject',['styles'], function(){
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});
