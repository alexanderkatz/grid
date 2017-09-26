const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

gulp.task('styles', function() {
     gulp.src("src/ibm-grid.scss")
      .pipe(sass().on('error', sass.logError))
      .pipe(rename('ibm-grid.css'))
      .pipe(gulp.dest('dist'))
      .pipe(gulp.dest('docs/styles/dist'))
      .pipe(cleanCSS({
        level: 2
      }))
      .pipe(rename('ibm-grid.min.css'))
      .pipe(gulp.dest('dist'))
      .pipe(gulp.dest('docs/styles/dist'));
});

gulp.task('watch',function() {
    browserSync.init({
        server: {
            baseDir: "./docs"
        }
    });

    gulp.watch('src/**/*.scss', ['styles']);
    gulp.watch("dist/**/*").on("change", browserSync.reload);
    gulp.watch("docs/**/*").on("change", browserSync.reload);
});