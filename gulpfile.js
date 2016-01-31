// REQUIRE DEPENDENCIES
// =========================
var gulp            = require('gulp');
var gutil           = require('gulp-util');
var jshint          = require('gulp-jshint');
var stylus          = require('gulp-stylus');
var sourcemaps      = require('gulp-sourcemaps');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');
var gulpIf          = require('gulp-if');
var browserSync     = require('browser-sync').create();


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
    .pipe(gulp.dest("public/assets/css"))
    .pipe(browserSync.reload({
      stream: true
    }));
});

//Javascript task config
gulp.task('build-js',function(){
  return gulp.src("source/javascript/*js")
    .pipe(sourcemaps.init())//process original sources
    .pipe(concat("bundle.js"))
    .pipe(gulpIf('*.js', uglify()))//minifies only if its a JS file
    .pipe(sourcemaps.write())//add map to modified source
    .pipe(gulp.dest("public/assets/scripts"))
    .pipe(browserSync.reload({
      stream: true
    }));
});

//Browser sync
gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: './public/assets'
    }
  });
});

// WATCH FOR CHANGES
// ==================================================
gulp.task('watch', ['browserSync'], function(){
  gulp.watch("source/javascript/*.js", ["jshint"]);
  gulp.watch("source/javascript/*.js", ["build-js"]);
  gulp.watch("source/stylus/*.styl", ["build-css"]);
});
