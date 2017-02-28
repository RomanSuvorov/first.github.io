var gulp = require("gulp");
var babel = require("gulp-babel");
var rename = require("gulp-rename");

gulp.task("babel", function () {
    return gulp.src("script/ES6_script.js")
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(rename("script/script.js"))
        .pipe(gulp.dest(""));
});

gulp.task('default', function () {

    gulp.run('babel');

    gulp.watch('script/ES6_script.js', function(event) {
        gulp.run('babel');
    })

})