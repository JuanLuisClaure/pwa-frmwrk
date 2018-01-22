webpackJsonp([0],{

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(160);

__webpack_require__(161);

var _dispatcher = __webpack_require__(28);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const riot = __webpack_require__(15);

riot.tag2('index', '<button type="button" name="button" onclick="{doSingle}">single</button> <button type="button" name="button" onclick="{doSplit}">split</button> <button type="button" name="button" onclick="{doTriple}">triple</button> <hr> <div class="grid-container" data-dato="{cualquieres}"> <div each="{x in cards}" class="flex_item--card" data-z="{x.id}"> <img riot-src="{x.img}" alt="{x.name}" width="100%"> <h4>{x.title}</h4> <h6>{x.parrafo}</h6> </div> </div> <hr> <button type="button" name="button" onclick="{verCodigo}">VerCodigo</button>', 'index .grid-container,[data-is="index"] .grid-container{ display: grid; grid-template-rows: auto; background-color: snow; } index .flex_item--card,[data-is="index"] .flex_item--card{ display: inline-flex; border-radius: 11px 11px 11px 11px; border: solid 2px black; flex-flow: column; word-wrap: break-word; margin: 6vh 0vw 0vw 3vw; width: 92.24%; align-items:flex-start; } index .flex_item--card[data-z="181"],[data-is="index"] .flex_item--card[data-z="181"]{ background-color:rgb(64, 61, 49)!important; } index .flex_item--card[data-z="182"],[data-is="index"] .flex_item--card[data-z="182"]{ background-color:rgb(75, 161, 119)!important; } index .grid-container[data-dato="single"],[data-is="index"] .grid-container[data-dato="single"]{ grid-template-columns:repeat(1, 100vw); } index .grid-container[data-dato="split"],[data-is="index"] .grid-container[data-dato="split"]{ grid-template-columns:repeat(2, 47vw); } index .grid-container[data-dato="triple"],[data-is="index"] .grid-container[data-dato="triple"]{ grid-template-columns:repeat(3, 30vw); }', '', function (opts) {
  const tag = this;
  tag.cards = [{
    name: "Real",
    id: "181",
    img: "./client/assets/img/welcome_card.jpg",
    title: "Holavida",
    parrafo: "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }, {
    name: "Amistoso",
    id: "182",
    img: "./client/assets/img/welcome_card.jpg",
    title: "ComoEstas?",
    parrafo: "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }, {
    name: "Amable",
    id: "182",
    img: "./client/assets/img/welcome_card.jpg",
    title: "SiguesPensandoEnMi?",
    parrafo: "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }, {
    name: "Sincero",
    id: "181",
    img: "./client/assets/img/welcome_card.jpg",
    title: "vivesMisExperiencias",
    parrafo: "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }, {
    name: "Correcto",
    id: "182",
    img: "./client/assets/img/welcome_card.jpg",
    title: "otanSolodejaste",
    parrafo: "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }, {
    name: "Trabajador",
    id: "182",
    img: "./client/assets/img/welcome_card.jpg",
    title: "AlTiempoRealiceSu",
    parrafo: "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }, {
    name: "Amoroso",
    id: "181",
    img: "./client/assets/img/welcome_card.jpg",
    title: "TrabajoCosechandoMiVida",
    parrafo: "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }];
  tag.ele = {};
  tag.cualquieres = "split";
  tag.on('mount', () => {
    console.log('empeznado');
    tag.mostrar();
  });

  tag.doSingle = () => {
    tag.cualquieres = "single";
  };

  tag.doSplit = () => {
    tag.cualquieres = "split";
  };

  tag.doTriple = () => {
    tag.cualquieres = "triple";
  };

  tag.verCodigo = () => {
    let texto = 'componente-uno';

    _dispatcher2.default.trigger('crear_modal', texto);
  };

  tag.getElement = a => {
    return document.getElementById(a);
  };

  tag.mostrar = () => {
    let e = tag.getElement('headline');
    console.log(e.dataset.z);
  };
});

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const riot = __webpack_require__(15);

riot.tag2('saludo', '<div class="demo-card-wide mdl-card mdl-shadow--2dp"> <div class="mdl-card__title" riot-style="{opts.datos.img[0].contenido}"> <h2 class="mdl-card__title-text">{opts.datos.titulo[0].contenido}</h2> </div> <div class="mdl-card__supporting-text"> {opts.datos.texto[0].contenido} </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"> {opts.datos.texto[1].contenido} </a> </div> <div class="mdl-card__menu"> <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"> <i class="material-icons">{opts.datos.svg[0].contenido}</i> </button> </div> </div>', 'saludo .demo-card-wide.mdl-card,[data-is="saludo"] .demo-card-wide.mdl-card{ width: 100%; } saludo .demo-card-wide > .mdl-card__title,[data-is="saludo"] .demo-card-wide > .mdl-card__title{ color: #fff; height: 176px; } saludo .demo-card-wide > .mdl-card__menu,[data-is="saludo"] .demo-card-wide > .mdl-card__menu{ color: red; }', '', function (opts) {});

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const riot = __webpack_require__(15);

riot.tag2('componente-uno', '<figure> <figcaption> <b> Just css waoo </b></figcaption> <pre class="prettyprint lang-css">\n\n  class Voila {public:     // Voila     static const string VOILA = ⁗Voila⁗;     // will not interfere with embedded <a href=⁗#voila2⁗>tags</a>.}\n\n</pre> </figure> <br>', 'componente-uno .algo,[data-is="componente-uno"] .algo{ background-color:red; }', '', function (opts) {});

/***/ })

});
//# sourceMappingURL=0.map