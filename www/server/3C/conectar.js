"use strict";

function conectar(socket) {
  socket.broadcast.emit('broadcast', {
    description: ' clients connected!'
  });
}

function desconectar(socket) {
  socket.on('disconnect', function () {
    socket.broadcast.emit('broadcast', {
      description: ' clients desconnected!'
    });
  });
}

module.exports = {
  on: conectar,
  off: desconectar
};