const riot = require('riot')
import '../../componentes/saludo/saludo'
import '../../componentes/uno/uno'
import dispatcher from '../../app/dispatcher'

riot.tag2('index', '<componente-uno></componente-uno>', 'index #idea,[data-is="index"] #idea{ background-color:blue; }', '', function(opts) {
});
