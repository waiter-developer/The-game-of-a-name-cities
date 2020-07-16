
let preprocessor = 'sass' ,
    baseDir = 'app',
    imagesWatch = 'jpg,jpeg,png,webp,svg',
    filesWatch = 'html',
    online = true

const paths = {

    scripts: {
                src: [
                    `${baseDir}/js/app.js`// should be at the end
                ],

                dest: `${baseDir}/js`
    },

    styles: {
        src: `${baseDir}/${preprocessor}/main.*`,
        dest: `${baseDir}/css`
    },

    images: {
        src: `${baseDir}/images/src/**/*`,
        dest: `${baseDir}/images/dest`
    },

    cssOutputName: 'app.min.css',
    jsOutputName: 'app.min.js'
}

const  { src, dest, series, parallel, watch } = require('gulp')
const browserSync  = require('browser-sync').create()
const concat       = require('gulp-concat')
const uglify       = require('gulp-uglify-es').default
const autoprefixer = require('gulp-autoprefixer')
const cleancss     = require('gulp-clean-css')
const newer        = require('gulp-newer')
const imgagemin    = require('gulp-imagemin')
const del          = require('del')
const sass         = require('gulp-sass')

//const normalize_sass = require('node-normalize-scss') { includePaths: normalize_sass.includePaths }


function browsersync() {
    browserSync.init({
        server: { baseDir: `${baseDir}/` },
        directory: true,
        open: true,
        notify: false,
        online: online
    })
}

function scripts() {
    return src(paths.scripts.src)
        .pipe(concat(paths.jsOutputName))
        .pipe(uglify())
        .pipe(dest(paths.scripts.dest))
        .pipe(browserSync.stream())
}

function styles() {
    return src(paths.styles.src)
        .pipe(eval(preprocessor)())
        .pipe(concat(paths.cssOutputName))
        .pipe(autoprefixer({ overrideBrowserlist: ['last 5versions'] }))
        .pipe(cleancss({ level: { 1: { specialComments: 0 } } }))
        .pipe(dest(paths.styles.dest))
        .pipe(browserSync.stream())

}

function images() {
    return src(paths.images.src)
        .pipe(newer(paths.images.dest))
        .pipe(imgagemin())
        .pipe(dest(paths.images.dest))
        .pipe(browserSync.stream())
}

function cleaning() {
    return del(`${paths.images.dest}/**/*`, { force: true })
}

function startWatch() {
    watch(`${baseDir}/**/${preprocessor}/**/*`, styles)
    watch(`${baseDir}/**/*.${imagesWatch}`, images)
    watch(`${baseDir}/**/*.${filesWatch}`).on('change', browserSync.reload)
    watch([`${baseDir}/**/*.js`, `!${paths.scripts.dest}/*.min.js`], scripts)
}



exports.browsersync = browsersync
exports.scripts = scripts
exports.styles = styles
exports.images = images
exports.cleening = cleaning
exports.assets = series(cleaning, styles, scripts, images)
exports.default = parallel(images, styles, scripts, browsersync, startWatch)






