const gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    concatCss = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer');
    
var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        css: './dist/',
    },
    src: { //Пути откуда брать исходники
        css: './src/components/**/*.scss',
    }
};

//Собираем стили
function build() {
    return gulp.src(path.src.css) //Выберем компоненты
        .pipe(sass()) //Скомпилируем
        .pipe(autoprefixer())
        .pipe(concatCss('components.css'))
        .pipe(cssmin()) //Сожмем
        .pipe(gulp.dest(path.build.css)) //И в build
}
exports.build = build;
