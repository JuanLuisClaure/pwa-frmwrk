const riot = require('riot')
import '../../componentes/saludo/saludo'
import '../../componentes/uno/uno'
import dispatcher from '../../app/dispatcher'

riot.tag2('index', '<button type="button" name="button" onclick="{doSingle}">single</button> <button type="button" name="button" onclick="{doSplit}">split</button> <button type="button" name="button" onclick="{doTriple}">triple</button> <hr> <div class="grid-container" data-dato="{cualquieres}"> <div each="{x in cards}" class="flex_item--card" data-z="{x.id}"> <img riot-src="{x.img}" alt="{x.name}" width="100%"> <h4>{x.title}</h4> <h6>{x.parrafo}</h6> </div> </div> <hr> <button type="button" name="button" onclick="{verCodigo}">VerCodigo</button>', 'index .grid-container,[data-is="index"] .grid-container{ display: grid; grid-template-rows: auto; background-color: snow; } index .flex_item--card,[data-is="index"] .flex_item--card{ display: inline-flex; border-radius: 11px 11px 11px 11px; border: solid 2px black; flex-flow: column; word-wrap: break-word; margin: 6vh 0vw 0vw 3vw; width: 92.24%; align-items:flex-start; } index .flex_item--card[data-z="181"],[data-is="index"] .flex_item--card[data-z="181"]{ background-color:rgb(64, 61, 49)!important; } index .flex_item--card[data-z="182"],[data-is="index"] .flex_item--card[data-z="182"]{ background-color:rgb(75, 161, 119)!important; } index .grid-container[data-dato="single"],[data-is="index"] .grid-container[data-dato="single"]{ grid-template-columns:repeat(1, 100vw); } index .grid-container[data-dato="split"],[data-is="index"] .grid-container[data-dato="split"]{ grid-template-columns:repeat(2, 47vw); } index .grid-container[data-dato="triple"],[data-is="index"] .grid-container[data-dato="triple"]{ grid-template-columns:repeat(3, 30vw); }', '', function(opts) {

const tag = this
tag.cards = [
  {name:"Real",id:"181", img:"./client/assets/img/welcome_card.jpg",title:"Holavida", parrafo:"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",},
  {name:"Amistoso",id:"182", img:"./client/assets/img/welcome_card.jpg",title:"ComoEstas?", parrafo:"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",},
  {name:"Amable",id:"182", img:"./client/assets/img/welcome_card.jpg",title:"SiguesPensandoEnMi?", parrafo:"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",},
  {name:"Sincero",id:"181", img:"./client/assets/img/welcome_card.jpg",title:"vivesMisExperiencias", parrafo:"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",},
  {name:"Correcto",id:"182", img:"./client/assets/img/welcome_card.jpg",title:"otanSolodejaste", parrafo:"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",},
  {name:"Trabajador",id:"182", img:"./client/assets/img/welcome_card.jpg",title:"AlTiempoRealiceSu", parrafo:"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",},
  {name:"Amoroso",id:"181", img:"./client/assets/img/welcome_card.jpg",title:"TrabajoCosechandoMiVida", parrafo:"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",}
]

tag.ele = {}
tag.cualquieres = "split"

tag.on('mount', ()=>{
  console.log('empeznado')
  tag.mostrar()
})

tag.doSingle = () => {
  tag.cualquieres = "single"
}
tag.doSplit = () => {
  tag.cualquieres = "split"
}
tag.doTriple = () => {
  tag.cualquieres = "triple"
}

tag.verCodigo = () => {
  let texto = 'componente-uno'
  dispatcher.trigger('crear_modal', texto)
}

tag.getElement = (a) => {
  return document.getElementById(a)
}

tag.mostrar = () => {
  let e = tag.getElement('headline')

  console.log(e.dataset.z);
}

});
