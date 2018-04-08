// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var browserSync = require('browser-sync').create();

////////
// localhost address with a port + watching css/html files
gulp.task('serve', function() {

// change the server each time you change projects
    browserSync.init({
      server: {
        baseDir: "01 - JavaScript Drum Kit",
        index: "index-START.html"
      }
    });
    gulp.watch("**/*.html").on('change', browserSync.reload);
    gulp.watch("**/*.css").on('change', browserSync.reload);
});
/////////

// Default Task
gulp.task('default', ['serve']);
