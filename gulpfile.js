var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task("sass", function(){

  gulp.src('assets/scss/*.scss')
  .pipe(sass({
        errLogToConsole: true
    }))
  .pipe(gulp.dest('assets/css'));

});

gulp.task("sassWatch", function(){

  gulp.watch(['assets/scss/*.scss', 'assets/scss/**/*.scss'], ['sass']);

});

gulp.task("default", ['sassWatch']);
