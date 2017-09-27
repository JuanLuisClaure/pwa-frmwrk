const riot = require('riot')
import dispatcher from './dispatcher'
import '../componentes/toast/toast'
import '../componentes/modal/modal'




class ComponentsFactory {
  constructor () {
    dispatcher.on('crear_toast', this.createToast.bind(this))
    dispatcher.on('crear_modal', this.createModal.bind(this))
  }

  createToast(data){
    let msg = {
      message: data,
      timeout: 1111
    };
    var toast = riot.mount(document.querySelector('#toastFactory'), 'toast', {m:msg})
  }

  createModal(data){

       let modal = riot.mount(document.querySelector('#modalFactory'), 'modal', {m:data})
  }
}
export default new ComponentsFactory()
