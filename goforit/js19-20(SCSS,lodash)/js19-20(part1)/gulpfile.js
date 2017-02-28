'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var rename = require("gulp-rename");
var notify = require("gulp-notify");
var cleancss = require('gulp-cleancss');
var concatJS = require('gulp-concat');
var uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

gulp.task('sass', function () {
    return gulp.src('style/src_scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('style/dest/'))
        .pipe(notify("Done sass"));
});

gulp.task('Css', function () {
    return gulp.src('style/dest/stsyle.css')
        .pipe(concatCss("style.css"))
        .pipe(cleancss())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest('style/dest/'))
        .pipe(notify("Done CSS"));
});

gulp.task('JS', function () {
    return gulp.src('script/src/*.js')
        .pipe(concatJS('script.js'))
        .pipe(uglify())
        .pipe(rename("script.min.js"))
        .pipe(gulp.dest('script/dest/'))
        .pipe(notify("Done JS"));
});

gulp.task('imagemin', function () {
    return gulp.src('image/src/*')
        .pipe(imagemin())
        .pipe(gulp.dest('image/dest/'))
        .pipe(notify("Done imagemin"));
});

gulp.task('default', function() {
    gulp.run('sass', 'Css', 'imagemin');

    gulp.watch('style/src_scss/*.scss', function(event) {
        gulp.run('sass');
    })

    gulp.watch('style/dest/stsyle.css', function(event) {
        gulp.run('Css');
    })

    gulp.watch('script/src/*.js', function(event) {
        gulp.run('JS');
    })

    gulp.watch('image/src/*', function(event) {
        gulp.run('imagemin');
    })
})