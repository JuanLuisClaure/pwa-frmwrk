const riot = require('riot')
import '../../componentes/saludo/saludo'
import '../../componentes/uno/uno'
import dispatcher from '../../app/dispatcher'

riot.tag2('index', '<h1>holamundocomo estas seguro estoybien</h1> <h1>holamundocomo estas seguro estoybien</h1> <h1>holamundocomo estas seguro estoybien</h1> <h1>holamundocomo estas seguro estoybien</h1> <h1>holamundocomo estas seguro estoybien</h1>', 'index #idea,[data-is="index"] #idea{ background-color:blue; }', '', function(opts) {
});
