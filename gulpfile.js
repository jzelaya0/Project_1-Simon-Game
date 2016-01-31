// REQUIRE DEPENDENCIES
// =========================
var gulp       = require('gulp');
var gutil      = require('gulp-util');
var jshint     = require('gulp-jshint');
var stylus     = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');


// DEFAULT TASK
// =========================
gulp.task("default", ['watch']);

// TASKS
// ==================================================

//Jshint task config
gulp.task('jshint', function(){
  return gulp.src("source/javascript/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"));
});


//Stylus task config
gulp.task('build-css', function(){
  return gulp.src("source/stylus/*styl")
    .pipe(sourcemaps.init())//process original sources
    .pipe(stylus())
    .pipe(sourcemaps.write())//add map to modified source
    .pipe(gulp.dest("public/assets/css"));
});

// WATCH FOR CHANGES
// ==================================================
gulp.task('watch', function(){
  gulp.watch("source/javascript/*.js", ["jshint"]);
  gulp.watch("source/stylus/*.styl", ["build-css"]);
});
