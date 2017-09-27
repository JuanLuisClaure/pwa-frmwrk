const riot = require('riot')
import dispatcher from '../../app/dispatcher'


riot.tag2('modal', '<div id="popUp" if="{esta}}"> <div data-is="{componente}"></div> </div> <div class="sidebar-overlay" onclick="{desmontarModal}" if="{esta}"></div>', 'modal .flexcontainer,[data-is="modal"] .flexcontainer{ display: flex; flex-direction: column; align-items: center; justify-content: center; } modal #popUp,[data-is="modal"] #popUp{ position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 92%; height: 92%; padding: 20px; background: white; color: black; z-index: 17; text-align: center; box-shadow: 0 0 30px rgba(0, 0, 0, 0.2); } modal .sidebar-overlay,[data-is="modal"] .sidebar-overlay{ position: fixed; top: 0; left: 0; right: 0; bottom: 0; opacity: 0.92; background: #000; z-index: 11; }', '', function(opts) {
  this.desmontarModal = (e) =>{

    this.esta = !this.esta
    this.unmount(true)
  }
  this.esta = true
  this.on('mount', ()=>{
    console.log('montando modal')
    this.update()

  })
  this.on('update', ()=>{
    this.componente = opts.m
    console.log('updadeando Modal');
  })
  this.on('unmount', ()=>{
      console.log('desmontando modal')
  })

});
