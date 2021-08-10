const gulp = require("gulp");
const imgMin = require("gulp-imagemin");
const uglify = require('gulp-uglify-es').default;

function defaultTask(cb){
    gulp.src("src/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/js/"))
    console.log("Uglifying JS...");

    gulp.src("src/img/*")
    .pipe(imgMin())
    .pipe(gulp.dest("dist/img"))

    console.log("Minifying images...");
    cb()
}

exports.default = defaultTask