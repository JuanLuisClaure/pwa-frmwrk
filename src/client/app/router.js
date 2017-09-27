import route from 'riot-route'
import riot  from 'riot'

const renderHere = document.querySelector('#inicio')
const OptsMixins = {
  // init method is a special one which can initialize
  // the mixin when it's loaded to the tag and is not
  // accessible from the tag its mixed in
  init: function() {
    this.on('updated', function() {
      componentHandler.upgradeDom();
  })
  },

}

route('/', () => {
  System.import('../paginas/index-page/index').then( (module) => {
    renderHere.innerHTML='<index></index>'
    riot.mount('index')
    riot.mixin(OptsMixins)
  }).catch( (err) => {
    console.log(err)
  })
})


route.stop()
route.start(true)
