function conectar(socket) {

        socket.broadcast.emit('broadcast',{ description:' clients connected!'})

}

function desconectar(socket){

      socket.on('disconnect',  () => {
        socket.broadcast.emit('broadcast',{ description:' clients desconnected!'})
      });
}

module.exports = {
  on: conectar,
  off: desconectar
}
