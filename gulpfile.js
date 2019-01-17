var gulp         = require('gulp');
var sass         = require('gulp-sass');
var browserSync  = require('browser-sync').create();


// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['sass/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("public/assets/css"))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function(){
    browserSync.init({
        server: './'
    });
    gulp.watch('./sass/*.scss', ['sass']);
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
