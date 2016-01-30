// REQUIRE DEPENDENCIES
// =========================
var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');


// DEFAULT TASK
// =========================
gulp.task("default", ['watch']);

// TASKS
// =========================

//Jshint task config
gulp.task('jshint', function(){
  return gulp.src("source/javascript/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"));
});

gulp.task('watch', function(){
  gulp.watch("source/javascript/*.js", ["jshint"]);
})
