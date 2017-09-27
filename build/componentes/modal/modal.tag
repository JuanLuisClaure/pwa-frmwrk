const riot = require('riot')
import dispatcher from '../../app/dispatcher'


<modal>
<style>
.flexcontainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#popUp{
position: fixed;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

/*
This doesn't work
margin-left: -25%;
margin-top: -25%;
*/

width: 92%;
height: 92%;

padding: 20px;
background: white;
color: black;
z-index: 17;
text-align: center;
box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
}


.sidebar-overlay {
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
opacity: 0.92;
background: #000;
z-index: 11;
}
</style>

  <!-- POP UP -->
<div id="popUp" if={ esta }}>
<div data-is={ componente }></div>
</div>
<div class="sidebar-overlay" onclick={ desmontarModal } if={ esta }></div>


<script>
  this.desmontarModal = (e) =>{
    // riot.unregister('modal')
    // let data = 'cerrando modal'
    // dispatcher.trigger('cerrar_modal', data)
    // console.log('kkegamos');
    this.esta = !this.esta
    this.unmount(true)
  }
  this.esta = true
  this.on('mount', ()=>{
    console.log('montando modal')
    this.update()
      // this.examnen = this.smethod()
  })
  this.on('update', ()=>{
    this.componente = opts.m
    console.log('updadeando Modal');
  })
  this.on('unmount', ()=>{
      console.log('desmontando modal')
  })


// //
//   this.smethod = () => {
//
//       Promise.all([opts.m]).then((response)=>{
//         this.componente = response[0]
//         console.log(this.componente)
//         this.update()
//       }).catch((err)=>{console.log('fallo');})
//     // var ListApp = riot.mount('','')[0]
//     // this.mountado = riot.mount(this.componente)
//     // console.log('sadlñkasdñas')
//     // return ListApp
//   }
</script>
</modal>
