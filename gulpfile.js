var gulp = require('gulp');
var browserSync = require('browser-sync').create(); //to dodane ostatnio
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({errLogToConsole: true}))
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({
      outputStyle: 'nested'
      //outputStyle: 'expanded'
      //outputStyle: 'compact'
      //outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
})

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: "./"
});

  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('css/**/*.css').on('change', browserSync.reload);
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('js/**/*.js').on('change', browserSync.reload);
})

gulp.task('default', ['serve']);
