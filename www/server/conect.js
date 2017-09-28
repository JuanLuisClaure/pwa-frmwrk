"use strict";

var _conectar = require("./3C/conectar");

function setup(io) {
  io.on('connect', function (socket) {
    console.log('socket connect');
    console.log('socket connect');
    console.log('socket connect');
    console.log('socket connect');
    console.log('socket connect');
    console.log('socket connect');
    console.log('socket connect');
  });
}

module.exports = {
  setup: setup
};