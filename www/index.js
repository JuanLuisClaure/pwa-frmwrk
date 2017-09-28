"use strict";

require("babel-polyfill");

var _config = require("./config.paths");

function _asyncToGenerator(fn) { return function () { var _this = this, _arguments = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(_this, _arguments); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var init = require('./server/conect');

var https = require('http');

var path = require('path');

var Koa = require('koa');

var Router = require('koa-router');

var serve = require('koa-static');

var pug = require('pug');

var app = new Koa();
var api = new Router();
var server = https.createServer(app.callback());

var io = require('socket.io')(server);

app.use(serve(path.join(__dirname + '/')));
app.use(api.routes());
app.use(api.allowedMethods());
app.use(function (ctx, next) {
  ctx.status === 404 ? ctx.body = pug.renderFile(__dirname + '/server/2V/nofound.pug') : next();
});
api.get('/', function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(ctx, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return pug.renderFile(__dirname + '/server/2V/inicio.pug');

          case 3:
            ctx.body = _context.sent;
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 9:
            _context.prev = 9;
            console.log('final');
            return _context.finish(9);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 6, 9, 12]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
api.get('/dashboard', function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(ctx, next) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return pug.renderFile(__dirname + '/server/2V/dashboard.pug');

          case 3:
            ctx.body = _context2.sent;
            _context2.next = 9;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 9:
            _context2.prev = 9;
            console.log('final');
            return _context2.finish(9);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 6, 9, 12]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
server.listen(_config.paths.port);