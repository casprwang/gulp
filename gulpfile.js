// var gulp        = require('gulp');
// var browserSync = require('browser-sync').create();
// var reload      = browserSync.reload;
//
//
// gulp.task('server', function() {
//   browserSync.init({
//     server: './app'
//   });
// });
//
// gulp.task('default', ['server'], function () {
//   gulp.watch('./app/index.html').on('change', reload)
//   gulp.watch('./app/css/*.css').on('change', reload)
// });
//
// // sakljfjdska
// //test

const gulp = require('gulp');
const jade = require('gulp-jade');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
// const del  = require('del');


gulp.task ('jade', function(){
    return gulp.src('src/jade/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('app/html'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('sass', function(){
    return gulp.src('src/sass/main.scss')
        .pipe(sass().on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './app'
    },
  })
})

gulp.task ('watch', ['browserSync', 'jade', 'sass'], function() {
    gulp.watch('src/jade/*.jade', ['jade']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('app/index.html', browserSync.reload);

})

// // del
// gulp.task('del', function () {
//   return del([
//     'dist/report.csv',
//     // here we use a globbing pattern to match everything inside the `mobile` folder
//     'dist/mobile/**/*',
//     // we don't want to clean this file though so we negate the pattern
//     '!dist/mobile/deploy.json'
//   ]);
// });
//
// gulp.task('default', ['clean:mobile']);
