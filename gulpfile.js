const gulp = require("gulp");
const imgMin = require("gulp-imagemin");
const uglify = require('gulp-uglify-es').default;
const watch = require('gulp-watch');

//Minify all img
gulp.task("imgMin", async () => {
    gulp.src("src/img/*")
    .pipe(imgMin())
    .pipe(gulp.dest("dist/img"))

    console.log("Minifying images...");
})

//Uglify JS
gulp.task("uglify", async () => {
    gulp.src("src/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/js/"))
    console.log("Uglifying JS...");
})

//watch js
gulp.task("watch", () => {
    return watch("src/js/*.js", uglify)
})