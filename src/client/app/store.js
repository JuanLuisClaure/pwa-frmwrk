import dispatcher from './dispatcher'
const firebase = require('firebase/app')
                 require("firebase/database");



const app = firebase.initializeApp({
  apiKey: "AIzaSyAID5-ytwfqmJlPPourVZ-QhVT0nowpEG8",
  authDomain: "zupa-d966c.firebaseapp.com",
  databaseURL: "https://zupa-d966c.firebaseio.com",
  projectId: "zupa-d966c",
  storageBucket: "zupa-d966c.appspot.com",
  messagingSenderId: "1047111970402"
});


class MyStore {
  constructor () {
      dispatcher.on('create', this.create.bind(this))
      dispatcher.on('read', this.read.bind(this))
      dispatcher.on('delete', this.delete.bind(this))
      dispatcher.on('update', this.update.bind(this))
      dispatcher.on('kill', this.kill.bind(this))


    }

  create(){
    dispatcher.trigger('create_event', 'objeto creado')
  }
  read(list){
    this.listObj = firebase.database().ref(list)
    this.listObj.off()
    let evento = list + '_returned'
    this.listObj.on('value', (data)=>{
      let itemsArray = []
      data.forEach((item)=>{
        itemsArray.push(item.val())
      })
      dispatcher.trigger(evento, itemsArray)
    })
  }
  delete(){
    dispatcher.trigger('delete_event')

  }
  update(){
    dispatcher.trigger('update_event')
  }

  kill(list){
    this.listObj = firebase.database().ref(list)
    this.listObj.off()
  }
}
export default new MyStore()
