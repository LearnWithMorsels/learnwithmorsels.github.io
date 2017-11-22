"use strict";

const gulp = require( 'gulp' ),
    sass = require( 'gulp-sass' ),
    concat = require( 'gulp-concat' ),
    rename = require( 'gulp-rename' ),
    uglify = require( 'gulp-uglify' ),
    sourcemaps = require( 'gulp-sourcemaps' );

gulp.task( 'scss', () => {
    return gulp.src( './css/src/base.scss' )
        .pipe( sourcemaps.init() )
        .pipe( sass( { outputStyle: 'compressed' } )
            .on( 'error', err => {
                sass.logError( err );
                this.emit( 'end' );
            } )
        )
        .pipe( rename( 'learnwithmorsels.github.io.css' ) )
        .pipe( sourcemaps.write( './' ) )
        .pipe( gulp.dest( './css' ) );
} );

gulp.task( 'js', () => {
    return gulp.src( [
            './js/src/components/*.js',
            './js/src/app.js'
        ] )
        .pipe( sourcemaps.init() )
        .pipe( concat( 'learnwithmorsels.github.io.js', {newLine: ';'} ) )
        .pipe( uglify() )
        .pipe( sourcemaps.write( './' ) )
        .pipe( gulp.dest( './js' ) );
} );

gulp.task( 'dev', ['default'], () => {
    gulp.watch( './css/src/**/*.scss', ['scss'] );
    gulp.watch( './js/src/**/*.js', ['js'] );
} );

gulp.task( 'default', ['scss', 'js'] );