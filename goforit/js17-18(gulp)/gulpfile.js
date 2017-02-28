var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var notify = require("gulp-notify");
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');

gulp.task('imagemin', function() {
    return gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('out/images'))
});


gulp.task('css', function () {
    return gulp.src('style/*.css')
        .pipe(concatCss("style/bundle.css"))
        .pipe(cleanCSS())
        .pipe(rename("style/bundle.min.css"))
        .pipe(gulp.dest('out/'))
        .pipe(notify("Done CSS"));



});


gulp.task('js', function () {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(concat('script/script.min.js'))
        .pipe(gulp.dest('out/'))
        .pipe(notify("Done JS"));
});

gulp.task('watch', function () {
    gulp.watch('js/*.js', ['js'])
    gulp.watch('style/*.css', ['css'])
    gulp.watch('img/*', ['imagemin'])
});


