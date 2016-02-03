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
var rename          = require('gulp-rename');
var browserSync     = require('browser-sync').create();


// PATHS
// ===================
input = {
  js: "source/javascript/app.js",
  vendorJs: ["source/javascript/vendors/jquery-1.12.0.js"],
  styl: "source/stylus/main.styl"
};

output = {
  js: "public/assets/scripts",
  css: "public/assets/css"
};


// DEFAULT TASK
// =========================
gulp.task("default", ['watch']);

// TASKS
// ==================================================

//Jshint task config
gulp.task('jshint', function(){
  return gulp.src(input.js)
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"));
});


//Stylus task config
gulp.task('build-css', function(){
  return gulp.src(input.styl)
    .pipe(sourcemaps.init())//process original sources
    .pipe(stylus({compress: true}))
    .pipe(sourcemaps.write())//add map to modified source
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(output.css)).on("error", gutil.log)
    .pipe(browserSync.reload({
      stream: true
    }));
});

//Javascript task config
gulp.task('build-js',function(){
  return gulp.src([input.vendorJs[0], input.js])
    .pipe(sourcemaps.init())//process original sources
    .pipe(concat("bundle.min.js"))
    .pipe(gulpIf('*.js', uglify()))//minifies only if its a JS file
    .pipe(sourcemaps.write())//add map to modified source
    .pipe(gulp.dest(output.js)).on("error", gutil.log)
    .pipe(browserSync.reload({
      stream: true
    }));
});

//HTML reload task config
gulp.task('html-reload', function(){
  return gulp.src("/source/index.html")
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
  gulp.watch("source/index.html", ["html-reload"]);
  gulp.watch("source/javascript/*.js", ["build-js"]);
  gulp.watch("source/stylus/*.styl", ["build-css"]);
});
