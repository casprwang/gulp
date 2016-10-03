var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


gulp.task('server', function() {
  browserSync.init({
    server: './app'
  });
});

gulp.task('default', ['server'], function () {
  gulp.watch('./app/*.html').on('change', reload)
  gulp.watch('./app/css/*.css').on('change', reload)
});

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
// });
