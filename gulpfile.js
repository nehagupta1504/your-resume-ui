"use strict";
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cssimport = require("gulp-cssimport");
const autoprefixer = require("gulp-autoprefixer");
const mergeStream = require("merge-stream");

gulp.task("sass to css", function () {
  const allFiles = gulp
    .src("ui/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cssimport())
    .pipe(autoprefixer())
    .pipe(gulp.dest("ui/dist"));
  return mergeStream(allFiles);
});

gulp.task("watch", function () {
  gulp.watch("ui/scss/**/*.scss", gulp.series("css"));
});
