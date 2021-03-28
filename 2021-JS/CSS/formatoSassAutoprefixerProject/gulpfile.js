const { series } = require("gulp");
const gulp=require('gulp');
const sass=require('gulp-sass');
const autoprefixer=require('gulp-autoprefixer');
const browserSync=require('browser-sync');
const  sourcesmaps= require('gulp-sourcemaps');

gulp.task('sass', ()=> {
    return gulp.src('sass/**/*.scss')//en que archivo ejecuta la acción
     .pipe(sourcesmaps.init())
      .pipe(sass({
        outputStyle:'compressed'//comprimir el css
      }).on('error', sass.logError))
     
      .pipe(autoprefixer({
        cascade: false
        }))
      .pipe(sourcesmaps.write('./css'))
      .pipe(gulp.dest('css'))//fin en dode se ejecuta  el resultado del cambio
      .pipe(browserSync.stream());
  });


  gulp.task('default', () =>{
    gulp.watch('sass/**/*.scss',gulp.series('sass'))  

    
    gulp.watch("./*.html").on('change', browserSync.reload);
    browserSync.init({
        server: "./"
    });
     
  });