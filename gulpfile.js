// grab our gulp packages
const gulp  = require('gulp');
const gutil = require('gulp-util');
const webserver = require('gulp-webserver');

// create a default task and just log a message
gulp.task('default', function() {
    return gutil.log('Gulp is running!')
});

gulp.task('webserver', ['default'], function() {
    gulp.src('src')
        .pipe(webserver({
            port: 3000,
            livereload: true,
            directoryListing: false,
            open: true
        }));
});