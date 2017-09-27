const riot = require('riot')

class Dispatcher {
  constructor () {
    riot.observable(this)
  }
}
export default new Dispatcher()
