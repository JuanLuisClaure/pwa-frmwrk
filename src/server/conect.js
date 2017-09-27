import { on, off } from './3C/conectar'


function setup(io) {
    io.on('connect', (socket) => {
      console.log('socket connect')
      console.log('socket connect')
      console.log('socket connect')
      console.log('socket connect')
      console.log('socket connect')
      console.log('socket connect')
      console.log('socket connect')
      
    })
}


module.exports = {
  setup:setup
}
