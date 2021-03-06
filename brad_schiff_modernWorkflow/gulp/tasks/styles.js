var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

//cssvars allows us to call on a variable
//autoprefixer adds all prefixes automatically
//on
gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, mixins, cssvars, autoprefixer, nested]))
  .on('error', function(errorInfo) {
    console.log(errorInfo.toString())
    this.emit('end');
  })
	.pipe(gulp.dest('./app/temp/styles'));
});
