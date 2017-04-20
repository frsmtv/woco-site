var gulp = require('gulp'); // Appelle le module Gulp
var browserSync = require('browser-sync');
// Raffraichissement du browserSync
var reload = browserSync.reload;
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var notify = require("gulp-notify");
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


// Task browser Sync qui permet de configurer au lancement Browser Sync
gulp.task('browser-sync', function(){
  browserSync({
    port: 3000,
    server :{
      baseDir: "./", // base directory
      index: "index.html" // fichier à lancer par défaut
    }
  })
});

// DEFAULT TASK
gulp.task('default', ['browser-sync', 'css', 'sass'], function(){    //  , 'js'
  gulp.watch('./**.html', ['html']);
  gulp.watch('./css/*.css', ['css']); // permet d'observer les changements dans tous les fichiers css du dossier    css et de relancer la tâhe "css"
  // gulp.watch('./js/*.js', ['js']);
  gulp.watch('./sass/**/*.scss', ['sass']);
  console.log('Ma tâche par défaut');
});

gulp.task('html', function(){
  console.log('Ma tâche pour le html');
  return gulp.src('./*.html')
  .pipe(reload({stream:true, once:true}));
});

gulp.task('css', function(){
  console.log('Ma tâche pour la css');
  return gulp.src('/css/**/*.css') // choisir fichiers css
  .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
  .pipe(concatCss("bundle.css")) // concaténation de tous les fichiers css en un seul
    .pipe(minifyCss()) // compresser css
    .pipe(gulp.dest('css/')) // permet d'envoyer le fichier minifié dans le rép dist/css
    .pipe(notify("CSS compréssée et concaténée !")) // Envoie une notif quand la css est modifiée

    .pipe(reload({stream:true, once:true})); // permet de re-sync le browser
});

gulp.task('sass', function(){
  console.log('Ma tâche pour la scss');
  return gulp.src('./sass/**/*.scss') // choisir fichiers sass

  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
  .pipe(concat("bundle-sass.css")) // concaténation de tous les fichiers sass en un seul
    .pipe(minifyCss()) // compresser css
    .pipe(gulp.dest('css/')) // permet d'envoyer le fichier minifié dans le rép dist/css
    .pipe(notify("SASS compilée compréssée et concaténée !")) // Envoie une notif quand la css est modifiée
    .pipe(reload({stream:true, once:true })); // permet de re-sync le browser
});


  gulp.task('js', function() {
  return gulp.src('./js/*.js')
    .pipe(concat('app.min.js'))
    .pipe(uglify()) //minify js
    .pipe(gulp.dest('dist/js'))
    .pipe(notify("js Modifié"))
    .pipe(reload({stream:true, once: true}));
});
