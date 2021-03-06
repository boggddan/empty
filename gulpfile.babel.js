'use strict';

import {src, dest, watch, parallel, series} from 'gulp';
import sass from 'gulp-sass';

import slim from 'gulp-slim';
import coffee from 'gulp-coffee';

import del from 'del';
import concat from 'gulp-concat';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import connect from 'gulp-connect';

////////////////////////////////////////
const dirs = {
  src: 'src',
  lib: 'node_modules',
  dest: 'app'
};

const paths = {
  html: {
    src: `${dirs.src}/html/**/*.html`,
    dest: `${dirs.dest}`
  },
  slim: {
    src: `${dirs.src}/slim/**/*.slim`,
    dest: `${dirs.dest}`
  },
  sass: {
    src: `${dirs.src}/sass/**/*.scss`,
    dest: `${dirs.dest}/styles/`
  },
  coffee: {
    src: `${dirs.src}/coffee/**/*.coffee`,
    dest: `${dirs.dest}/scripts/`
  },
  js: {
    src: `${dirs.src}/js/**/*.js`,
    dest: `${dirs.dest}/scripts/`
  },
  img: {
    src: `${dirs.src}/img/**/*.*`,
    dest: `${dirs.dest}/img/`
  }
};
////////////////////////////////////////

// Clean
export const clean = () => del([dirs.dest]);

export const devConnect = () =>
  connect.server({
    root: dirs.dest,
    port: 8888,
    livereload: true
  });

export const bLib = () =>
   src([`${dirs.lib}/jquery/dist/jquery.slim.js`,
        `${dirs.lib}/moment/min/moment-with-locales.min.js`])
  .pipe(concat('lib.js'))
  .pipe(dest(paths.js.dest));

export const bImg = () => src(paths.img.src)
  .pipe(dest(paths.img.dest))
  .pipe(connect.reload());

export const bHtml = () => src(paths.html.src)
  .pipe(dest(paths.html.dest))
  .pipe(connect.reload());

export const bSlim = () => src(paths.slim.src)
  .pipe(plumber({errorHandler: notify.onError({message: '<%= error.message %>', title: 'Ошибка'})}))
  .pipe(slim({pretty: true}))
  .pipe(dest(paths.slim.dest))
  .pipe(connect.reload());

export const bSass = () => src(paths.sass.src)
  .pipe(plumber({errorHandler: notify.onError({message: '<%= error.message %>', title: 'Ошибка'})}))
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(dest(paths.sass.dest))
  .pipe(connect.reload());

export const bJs = () => src(paths.js.src)
  .pipe(dest(paths.js.dest))
  .pipe(connect.reload());

export const bCoffee = () => src(paths.coffee.src)
  .pipe(plumber({errorHandler: notify.onError({message: '<%= error.message %>', title: 'Ошибка'})}))
  .pipe(coffee({bare: true}))
  .pipe(dest(paths.coffee.dest))
  .pipe(connect.reload());

// Watch Task
export const devWatch = () => {
  devConnect();
  watch(paths.img.src, bImg);
  watch(paths.html.src, bHtml);
  watch(paths.slim.src, bSlim);
  watch(paths.sass.src, bSass);
  watch(paths.coffee.src, bCoffee);
  watch(paths.js.src, bJs);
};

// Development Task
export const dev = series(clean, parallel(bLib, bImg, bHtml, bSlim, bSass, bJs, bCoffee), devWatch);
export default dev;
