'use strict'
import gulp from 'gulp'
const browserSync = require('browser-sync').create()
const babel = require('gulp-babel')
const riot = require('gulp-riot');
const sass = require('gulp-sass');
const webpackstream = require('webpack-stream')
const webpack = require('webpack')
const del  = require('del')
const nodemon = require('gulp-nodemon')
import webpackConfig from './webpack.config.babel'
import { paths } from './src/config.paths'



gulp.task('browsersync', browsersync)
gulp.task('nodemon', iniciarNodemon)
gulp.task('iniciar', iniciarTodo)
gulp.task('default', gulp.parallel( 'nodemon', 'browsersync', gulp.series('iniciar', (done)=>{
promesasG().then(()=>{
  gulp.watch(['./build/componentes/**/**.tag', './build/paginas/**/**.tag', './build/theme/**/**.scss', './src/server/**/**.js'], (done)=>{
        promsesasCreacionTodo().then(()=>{
          done()
        })
    })
})
done()
})))






function iniciarNodemon(done) {

var started = false;



let sta =  nodemon({
  script: paths.initFile,
  ignore: [
  'gulpfile.babel.js',
  'webpack-config.babel.js',
  'node_modules/'
  ]
}).on('start', function () {
  if (!started) {
                  started = true
                  browserSync.reload()
                  browserSync.notify('Reload....')
                  done()
  }
}).on('crash', function () {
    // browserSync.exit()
    started = false
    browserSync.notify('CRASH!!!!')
}).on('restart', function () {
    // browserSync.exit()
    started = false
    browserSync.notify('Restart!!!!')
})

return sta

}








function browsersync(done){

  if(!browserSync.active){
    browserSync.init({
      logPrefix: paths.name,
      proxy:{
              target: 'http://localhost:' + paths.port + '/',
              ws: true
            },
      // port: 8888,
      // reloadOnRestart: false,
      browser: ["firefox"],
      ghostMode: {
                  clicks: true,
                  forms: true,
                  scroll: true
              }

    })
    done()
  }else{
    browserSync.reload()
    browserSync.notify('Reload....')
    done()
  }




}












function promsesasCreacionTodo(){
  let yes = copiarTemplate()
  let dos = copiarIndex()
  let dse = copiarImagenes()
  let dsa = babelEmpezar()
  let ase = babelIndex()
  let asa = tranformarScss()
  let kdf = tranformarTags()
  let jus = tranformarComponentes()

  return Promise.all([yes, dos, dsa, ase, asa, kdf, jus, dse])
}
function iniciarTodo(done){
  limpiarFolder().then(()=>{
    promsesasCreacionTodo().then(()=>{
      console.log('realizado-copiar')
    })
  })
  done()
}
function promesasG(){
    console.log('realizado-webpack')
    let yes = new Promise((resolve)=>{resolve(webpackstream(webpackConfig, webpack).pipe(gulp.dest(paths.clntDir)))})
    return yes
}
function limpiarFolder(){
  let oto = del([paths.wwwBundle])
  let yes = new Promise((resolve, reject)=>{resolve(oto)})
  return yes
}
function tranformarScss(){
  let sas = gulp.src([paths.themeScss]).pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)).pipe(gulp.dest(paths.themeCss))
  return sas
}
function tranformarTags(){
let as = gulp.src([paths.pgnsTag]).pipe(riot()).pipe(gulp.dest(paths.pgnsDir))
return as
}
function tranformarComponentes(){
  let a = gulp.src([paths.cmpntsTag]).pipe(riot()).pipe(gulp.dest(paths.cmpntsDir))
  return a
}
function babelEmpezar(){
let dys = gulp.src(paths.srv).pipe(babel({presets: ['env']})).pipe(gulp.dest(paths.srvrDir))
return dys
}
function babelIndex(){
  let daagh = gulp.src([paths.srcStart]).pipe(babel({presets: ['env']})).pipe(gulp.dest(paths.wwwStart))
  return daagh
}
function copiarIndex(){
let esto = gulp.src([paths.wpIcon, paths.favicon, paths.manifest, paths.webapp, paths.config]).pipe(gulp.dest(paths.wwwStart))
return esto
}
function copiarTemplate(){
  let yes = gulp.src([paths.template]).pipe(gulp.dest(paths.tmpltDir))
  return yes
}
function copiarImagenes(){
  let yes = gulp.src([paths.assets]).pipe(gulp.dest(paths.assetsDir))
  return yes
}
