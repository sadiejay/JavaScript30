// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();

// Lint Task
gulp.task('lint', function() {
return gulp.src('**/index.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

////////
// localhost address with a port + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server:true
    });

    gulp.watch('app/index.js', ['lint']);
    gulp.watch("**/*.html", "**/*.css" ).on('change', browserSync.reload);
});
/////////

// Default Task
gulp.task('default', ['lint', 'serve']);
