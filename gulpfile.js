const gulp = require('gulp');
// const jade = require('gulp-jade');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// const watch = require('gulp-watch');
// const del  = require('del');


gulp.task ('pug', function(){
    return gulp.src('src/pug/*.pug')
        .pipe(pug({
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


// build in 'watch'
gulp.task ('default', ['browserSync', 'pug', 'sass'], function() {
    gulp.watch('src/pug/*.pug', ['pug']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('app/index.html', browserSync.reload);
    gulp.watch('app/main.css', browserSync.reload);
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
