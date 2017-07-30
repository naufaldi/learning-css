var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create(); //browser syncron
var useref = require('gulp-useref'); // 
var cssnano = require('gulp-cssnano');
// Other requires..
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var sequence = require('run-sequence');


/*
gulp.task('task-name',function(){
    //stuff here
    // console.log("Hello Gulp");
    return gulp.src('source-file') //get resource file from gulp.src
    .pipe(aGulpPlugin()) //send it tough  gulp plugin
    .pipe(gulp.dest('destination')) //output program go to destination folder
});

*/

gulp.task('sass',function(){
    return gulp.src('app/**/*.scss') //app/scss/styles.scss , get ending file in app with .scss
    .pipe(sass()) //using gulp-sass
    .pipe(gulp.dest('app/css'))
});

/* 
Gulp Watch syntax
*/
//===============================================
gulp.watch('files-to-watch',['task','to','run']);
//so it become 
gulp.watch('app/**/*.scss',['sass']);
//for more task watch use :
gulp.task('watch',function(){
    gulp.watch('app/**/*.scss',['sass']);
    //other watcher
});
//===============================================
/*
Gulp Task syncron
*/
gulp.task('browser-sync',function(){
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})

/* We also have to change our sass task slightly so Browser 
Sync can inject new CSS styles (update the CSS) into the browser whenever the sass task is ran.
*/

gulp.task('sass',function(){
    return gulp.src('app/scss/**/*.scss') //get all file .scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
        stream : true
    }))
});

/*
 To make run together watch and browsersync

gulp.task('watch',['aray','of','task','to','complete','before','watch'],function(){
    // . . . .
});
 */

 gulp.task('watch',['browserSync','sass'],function(){
     gulp.watch('app/scss/**/*.scss',['scss']);
     //other wacth
      // Reloads the browser whenever HTML or JS files change
      gulp.watch('app/*.html',browserSync.reload);
      gulp.watch('app/js/**/*js',browserSync.reload);
 });

 /*
Gulp task useref
 */

 gulp.task('useref',function(){
     return gulp.src('app/*.html')
     .pipe(useref())
     // Minifies only if it's a JavaScript file
     .pipe(gulpIf('*.js',uglify()))
     /* List Syntax CSS Nano*/
     .pipe(gulpIf('*.css',cssnano()))
     .pipe(gulp.dest('dist'))
 });

 // gulp-imagemin to help us with optimizing images, minify png,jpg and gif and add some cache to more fast
 gulp.task('imagemin',function(){
     return gulp.src('app/images/**/*.(png|jpg|gif|svg)')
     .pipe(cache(imagemin({
         //// Setting interlaced to true
         interlaced: true
     })))
     .pipe(gulp.dest('dist/images'))
 });

//copying font to dist
gulp.task('fonts',function(){
    return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

//The del function takes in an array of node globs which tells it what folders to delete.
gulp.task('clean:dist',function(){
    return del.sync('dist')
})
//Now Gulp will delete the `dist` folder for you whenever gulp clean:dist is run.

/* Here's the syntax of a task sequence with run sequence: */
gulp.task('task-name', function(callback){
    runSequence('task-one','task-two','task-three',callback);
})

