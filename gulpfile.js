"use strict";

const fs = require( 'fs' ),
    gulp = require( 'gulp' ),
    sass = require( 'gulp-sass' ),
    sourcemaps = require( 'gulp-sourcemaps' );

/*gulp.task( 'js', () => {
    gulp.src( './src/core/js/app.js' )
        .pipe( fileOverride( 'core/js/*', 'course/core/js/$1' ) )
        .pipe( sourcemaps.init() )
        .pipe( rollup( {
            plugins: [
                eslint( eslintOptions ),
                cjs(),
                babel( {
                    presets: [['es2015', { 'modules': false }]],
                    sourceMaps: true,
                    exclude: 'node_modules/**',
                    babelrc: false,
                    plugins: [
                        [ 'module-resolver', {
                            root: [
                                './src/course/core/js',
                                './src/course/core/js/components',
                                './src/course/core/js/partials',
                                './src/course/core/js/resources',
                                './src/core/js',
                                './src/core/js/components',
                                './src/core/js/partials',
                                './src/core/js/resources'
                            ]
                        } ]
                    ]
                } ),
                uglify()
            ]
        }, {
            format: 'iife'
        } ) )
        .pipe( rename( 'morsels.min.js' ) )
        .pipe( sourcemaps.write( '' ) )
        .pipe( gulp.dest( './build/js' ) );
} );*/

gulp.task( 'scss', () => {
    return gulp.src( './src/scss/base.scss' )
        .pipe( sourcemaps.init() )
        .pipe( sass( { outputStyle: 'compressed' } )
            .on( 'error', err => {
                sass.logError( err );
                this.emit( 'end' );
            } )
        )
        .pipe( sourcemaps.write( './' ) )
        .pipe( gulp.dest( './docs' ) );
} );

gulp.task( 'default', ['scss'] );