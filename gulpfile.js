const gulp = require('gulp'),
    stylus = require('gulp-stylus')
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug'),
    browserSync = require('browser-sync').create();


gulp.task('default', ['styles'], function(){
    browserSync.init({
        server: "./app"
    });

    gulp.watch("stylus/**/*.styl", ['styles']);
    gulp.watch("pug/**/*.pug", ['pug']);
    gulp.watch("app/*.html").on('change', browserSync.reload);

});

gulp.task('pug', () =>
    gulp.src('./pug/index.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app/'))
);

gulp.task('compImagenes', function(){
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('app/images'))
});

gulp.task('styles', function(){
    gulp.src('stylus/**/*.styl')
        .pipe(stylus())
        //.pipe(cssnano())
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: true
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});