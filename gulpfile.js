var gulp = require('gulp'),
    gulp_concat = require('gulp-concat'),
    gulp_uglify = require('gulp-uglify'),
    gulp_sourcemaps = require('gulp-sourcemaps');

gulp.task('concat-main-scripts', function(){
    gulp.src('./js/!(customizer).js')
        .pipe(gulp_sourcemaps.init())
        .pipe(gulp_concat('main.js'))
        .pipe(gulp_uglify())
        .pipe(gulp_sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('uglify-customizer-script', function(){
    gulp.src('./js/customizer.js')
        .pipe(gulp_sourcemaps.init())
        .pipe(gulp_concat('customizer.js'))
        .pipe(gulp_uglify())
        .pipe(gulp_sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function(){
    gulp.watch('./js/**/*.js', ['concat-main-scripts', 'uglify-customizer-script']);
});

gulp.task('default', ['concat-main-scripts', 'uglify-customizer-script', 'watch']);