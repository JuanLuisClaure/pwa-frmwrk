Object.defineProperty(exports, "__esModule", {
  value: true
});
const paths = exports.paths = {

  //nombre dl projecto
  name: 'PWA-framework',
  //  servidor
  srv: './src/server/**/*.js',

  //  cliente
  clnt: './src/client/**/*.js',

  //  redireccion a la entrada de webpack2
  entry: 'entry.js',

  //  lint para arhivos especificos
  gulpFile: 'gulpfile.babel.js',
  webpackC: 'webpack.config.babel.js',


  //  carpertas de distribucion
  srvrDir: './www/server/',
  clntDir: './www/client/',



  pgnsTag: './build/paginas/**/*.tag',
  cmpntsTag: './build/componentes/**/*.tag',

  pgnsDir: './src/client/paginas/',
  cmpntsDir: './src/client/componentes/',


  themeScss: './build/theme/theme.scss',
  themeCss:'./src/client/theme/',

  template: './src/server/2V/**',
  tmpltDir: './www/server/2V/',

  wpIcon:'./src/browserconfig.xml',
  config:'./src/config.paths.js',
  favicon:'./src/favicon.ico',
  manifest:'./src/manifest.json',
  webapp: './src/manifest.webapp',


  assets: './src/client/assets/img/**/**',
  assetsDir: './www/client/assets/img/',



  srcStart: './src/*.js',
  wwwStart: './www/',

  initFile:'./www/index.js',


  port: process.env.PORT || 8889,


  //  limpieza de la direccion en el watcheo, buena practica

  wwwBundle: './www/**'

};
