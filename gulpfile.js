var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function () { console.log("Hey, default"); });

gulp.task('html', function () {
  console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('styles', function () {
  //ssconsole.log("in styles task");
  return gulp.src('.app/assets/styles/styles.css').pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function () {
  watch('./app/index.html', function () {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('styles');
  });
});
