webpackJsonp([0],{

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(184);

__webpack_require__(185);

var _dispatcher = __webpack_require__(28);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const riot = __webpack_require__(15);

riot.tag2('index', '<componente-uno></componente-uno>', 'index #idea,[data-is="index"] #idea{ background-color:blue; }', '', function (opts) {});

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const riot = __webpack_require__(15);

riot.tag2('saludo', '<div class="demo-card-wide mdl-card mdl-shadow--2dp"> <div class="mdl-card__title" riot-style="{opts.datos.img[0].contenido}"> <h2 class="mdl-card__title-text">{opts.datos.titulo[0].contenido}</h2> </div> <div class="mdl-card__supporting-text"> {opts.datos.texto[0].contenido} </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"> {opts.datos.texto[1].contenido} </a> </div> <div class="mdl-card__menu"> <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"> <i class="material-icons">{opts.datos.svg[0].contenido}</i> </button> </div> </div>', 'saludo .demo-card-wide.mdl-card,[data-is="saludo"] .demo-card-wide.mdl-card{ width: 100%; } saludo .demo-card-wide > .mdl-card__title,[data-is="saludo"] .demo-card-wide > .mdl-card__title{ color: #fff; height: 176px; } saludo .demo-card-wide > .mdl-card__menu,[data-is="saludo"] .demo-card-wide > .mdl-card__menu{ color: red; }', '', function (opts) {});

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const riot = __webpack_require__(15);

riot.tag2('componente-uno', '<button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button> <button type="button" name="button">tes</button>', 'componente-uno button,[data-is="componente-uno"] button{ background-color: white; color:red; }', '', function (opts) {});

/***/ })

});
//# sourceMappingURL=0.map