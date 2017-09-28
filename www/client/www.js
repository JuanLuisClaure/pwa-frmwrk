/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/client/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 131);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _customEvent = __webpack_require__(168);

var _customEvent2 = _interopRequireDefault(_customEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let transitionEvent = '';
let animationEvent = '';
/**
 * Static class for DOM helper.
 */

class DOM {
  /**
   * Creates a node with optional parameters.
   * @param {string} tag The name of the tag of the needed element.
   * @param {string} id The desired id for the element. It defaults to an
   * empty string.
   * @param {string} text The desired text to go inside of the element. It
   * defaults to an empty string.
   * @return {Element}
   */
  static createNode(tag, id = '', text = '') {
    const node = document.createElement(tag);
    node.id = id;

    if (text) {
      node.textContent = text;
    }

    return node;
  }
  /**
   * Listens for an event once.
   * @param {Element} el Element to listen to.
   * @param {string} event Event Type.
   * @param {Function} callback Function to execute once the event fires.
   */


  static once(el, event, callback) {
    const cb = e => {
      if (e.target === el) {
        el.removeEventListener(event, cb);
        callback(e);
      }
    };

    el.addEventListener(event, cb);
  }
  /**
   * Gets the prefixed transitionend event.
   * @return {string}
   */


  static getTransitionEvent() {
    if (transitionEvent) {
      return transitionEvent;
    }

    const el = document.createElement('ws');
    const transitions = {
      'transition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'MozTransition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    };
    const transitionNames = Object.keys(transitions);

    for (let i = 0, length = transitionNames.length; i < length && !transitionEvent; i++) {
      const transitionName = transitionNames[i];

      if (typeof el.style[transitionName] !== 'undefined') {
        transitionEvent = transitions[transitionName];
      }
    }

    return transitionEvent;
  }
  /**
   * Gets the prefixed animation end event.
   * @return {string}
   */


  static getAnimationEvent() {
    if (animationEvent) {
      return animationEvent;
    }

    const el = document.createElement('ws');
    const animations = {
      'animation': 'animationend',
      'OAnimation': 'oAnimationEnd',
      'MozAnimation': 'animationend',
      'WebkitAnimation': 'webkitAnimationEnd'
    };
    const animationNames = Object.keys(animations);

    for (let i = 0, length = animationNames.length; i < length && !animationEvent; i++) {
      const animationName = animationNames[i];

      if (typeof el.style[animationName] !== 'undefined') {
        animationEvent = animations[animationName];
      }
    }

    return animationEvent;
  }
  /**
   * Hides an element setting the display to none.
   * @param {Element} el Element to be hidden.
   */


  static hide(el) {
    el.style.display = 'none';
  }
  /**
   * Shows an element by removing the display property. This is only intended
   * to be used in conjunction with DOM.hide.
   * @param {Element} el Element to be shown.
   */


  static show(el) {
    el.style.display = '';
  }
  /**
   * Fires a custom event on the given target.
   * @param {Element} target The target of the event.
   * @param {string} eventType The event type.
   * @param {Object} eventInfo Optional parameter to provide additional data
   * to the event.
   */


  static fireEvent(target, eventType, eventInfo = {}) {
    const event = new _customEvent2.default(eventType, {
      detail: eventInfo
    });
    target.dispatchEvent(event);
  }
  /**
   * Converts an iterable to an array.
   * @param {*} iterable Element to convert to array
   * @return {Array} the element casted to an array.
   */


  static toArray(iterable) {
    return [].slice.call(iterable);
  }
  /**
   * Checks whether the document has focus on an input or contenteditable
   * element.
   * @return {boolean} Whether the focused element is an input or content
   * editable.
   */


  static isFocusableElement() {
    let result = false;

    if (document.activeElement) {
      const isContentEditable = document.activeElement.contentEditable !== 'inherit';
      const isInput = ['INPUT', 'SELECT', 'OPTION', 'TEXTAREA'].indexOf(document.activeElement.tagName) > -1;
      result = isInput || isContentEditable;
    }

    return result;
  }

}

exports.default = DOM;

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(158);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Events = exports.default = void 0;

var _dom = __webpack_require__(11);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CLASSES = {
  SLIDE: 'slide',
  CURRENT: 'current'
};
const Events = {
  ENTER: 'dom:enter',
  LEAVE: 'dom:leave',
  ENABLE: 'slide:enable',
  DISABLE: 'slide:disable'
};
/**
 * Wrapper for the Slide section.
 */

class Slide {
  /**
   * Bootstraps the slide by saving some data, adding a class and hiding it.
   * @param {Element} el Section element.
   * @param {number} i Zero based index of the slide.
   */
  constructor(el, i) {
    /**
     * @type {Element}
     */
    this.el = el;
    /**
     * The section's parent.
     * @type {Node}
     */

    this.parent = el.parentNode;
    /**
     * @type {number}
     */

    this.i = i;
    this.el.id = `section-${i + 1}`;
    this.el.classList.add(CLASSES.SLIDE); // Hide slides by default

    this.hide();
  }
  /**
   * Hides the node and removes the class that makes it "active".
   */


  hide() {
    _dom2.default.hide(this.el);

    this.el.classList.remove(CLASSES.CURRENT);
  }
  /**
   * Shows the node and adds the class that makes it "active".
   */


  show() {
    _dom2.default.show(this.el);

    this.el.classList.add(CLASSES.CURRENT);
  }
  /**
   * Moves the section to the bottom of the section's list.
   * @fires Slide#dom:leave
   * @fires Slide#dom:enter
   */


  moveAfterLast() {
    const last = this.parent.childNodes[this.parent.childElementCount - 1];
    this.fire_(Events.LEAVE);
    this.parent.insertBefore(this.el, last.nextSibling);
    this.fire_(Events.ENTER);
  }
  /**
   * Moves the section to the top of the section's list.
   * @fires Slide#dom:leave
   * @fires Slide#dom:enter
   */


  moveBeforeFirst() {
    const first = this.parent.childNodes[0];
    this.fire_(Events.LEAVE);
    this.parent.insertBefore(this.el, first);
    this.fire_(Events.ENTER);
  }
  /**
   * Fires an enable event.
   * @fires Slide#slide:enable
   */


  enable() {
    this.fire_(Events.ENABLE);
  }
  /**
   * Fires a disable event.
   * @fires Slide#slide:disable
   */


  disable() {
    this.fire_(Events.DISABLE);
  }
  /**
   * Fires an event passing the slide instance on the detail.
   * @param {String} name Name of the event to fire.
   * @private
   */


  fire_(name) {
    _dom2.default.fireEvent(this.el, name, {
      slide: this
    });
  }
  /**
   * Checks whether an element is a valid candidate to be a slide by ensuring
   * it's a "section" element.
   * @param {Element} el Element to be checked.
   * @return {boolean} Whether is candidate or not.
   */


  static isCandidate(el) {
    return el.nodeType === 1 && el.tagName === 'SECTION';
  }
  /**
   * Gets the section element from an inner element.
   * @param {Node} el
   * @return {{section: ?Node, i: ?number}} A map with the section and the
   * position of the section.
   */


  static getSectionFromEl(el) {
    let parent = el;
    let section = null;
    let i = null;

    while (parent.parentElement && !parent.classList.contains(CLASSES.SLIDE)) {
      parent = parent.parentElement;
    }

    if (parent.classList.contains(CLASSES.SLIDE)) {
      section = parent;
      i = parseInt(section.id.replace('section-', ''), 10);
    }

    return {
      section,
      i
    };
  }

}

exports.default = Slide;
exports.Events = Events;

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-Black.eot";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-Bold.eot";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-ExtraBold.eot";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-Light.eot";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-Regular.eot";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-SemiBold.eot";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-UltraLight.eot";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-Black.eot";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const Keys = {
  ENTER: 13,
  SPACE: 32,
  RE_PAGE: 33,
  AV_PAGE: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
exports.default = Keys;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const UA = window.navigator.userAgent;
/**
 * Mobile detector helper class. Tests the User Agent to see if we're, likely,
 * on a mobile device.
 */

class MobileDetector {
  /**
   * Whether the device is Android or not.
   * @return {Boolean}
   */
  static isAndroid() {
    return !!UA.match(/Android/i);
  }
  /**
   * Whether the device is BlackBerry or not.
   * @return {Boolean}
   */


  static isBlackBerry() {
    return !!UA.match(/BlackBerry/i);
  }
  /**
   * Whether the device is iOS or not.
   * @return {Boolean}
   */


  static isiOS() {
    return !!UA.match(/iPad|iPhone|iPod/i);
  }
  /**
   * Whether the device is Opera or not.
   * @return {Boolean}
   */


  static isOpera() {
    return !!UA.match(/Opera Mini/i);
  }
  /**
   * Whether the device is Windows or not.
   * @return {Boolean}
   */


  static isWindows() {
    return !!UA.match(/IEMobile/i);
  }
  /**
   * Whether the device is Windows Phone or not.
   * @return {Boolean}
   */


  static isWindowsPhone() {
    return !!UA.match(/Windows Phone/i);
  }
  /**
   * Whether the device is any mobile device or not.
   * @return {Boolean}
   */


  static isAny() {
    return MobileDetector.isAndroid() || MobileDetector.isBlackBerry() || MobileDetector.isiOS() || MobileDetector.isOpera() || MobileDetector.isWindows() || MobileDetector.isWindowsPhone();
  }

}

exports.default = MobileDetector;

/***/ }),
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(132);

__webpack_require__(159);

__webpack_require__(161);

__webpack_require__(163);

__webpack_require__(164);

__webpack_require__(180);

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(27)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-2!./theme.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-2!./theme.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(undefined);
// imports


// module
exports.push([module.i, "@font-face{font-family:superBold;src:url(" + __webpack_require__(66) + ");src:url(" + __webpack_require__(66) + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__(134) + ") format(\"woff\"),url(" + __webpack_require__(135) + ") format(\"truetype\"),url(" + __webpack_require__(136) + "#superBold) format(\"svg\");font-style:normal;font-weight:normal}@font-face{font-family:Bold;src:url(" + __webpack_require__(67) + ");src:url(" + __webpack_require__(67) + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__(137) + ") format(\"woff\"),url(" + __webpack_require__(138) + ") format(\"truetype\"),url(" + __webpack_require__(139) + "#Bold) format(\"svg\");font-style:normal;font-weight:normal}@font-face{font-family:extraBold;src:url(" + __webpack_require__(68) + ");src:url(" + __webpack_require__(68) + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__(140) + ") format(\"woff\"),url(" + __webpack_require__(141) + ") format(\"truetype\"),url(" + __webpack_require__(142) + "#extraBold) format(\"svg\");font-style:normal;font-weight:normal}@font-face{font-family:light;src:url(" + __webpack_require__(69) + ");src:url(" + __webpack_require__(69) + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__(143) + ") format(\"woff\"),url(" + __webpack_require__(144) + ") format(\"truetype\"),url(" + __webpack_require__(145) + "#light) format(\"svg\");font-style:normal;font-weight:normal}@font-face{font-family:regular;src:url(" + __webpack_require__(70) + ");src:url(" + __webpack_require__(70) + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__(146) + ") format(\"woff\"),url(" + __webpack_require__(147) + ") format(\"truetype\"),url(" + __webpack_require__(148) + "#regular) format(\"svg\");font-style:normal;font-weight:normal}@font-face{font-family:semiBold;src:url(" + __webpack_require__(71) + ");src:url(" + __webpack_require__(71) + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__(149) + ") format(\"woff\"),url(" + __webpack_require__(150) + ") format(\"truetype\"),url(" + __webpack_require__(151) + "#semiBold) format(\"svg\");font-style:normal;font-weight:normal}@font-face{font-family:ultraLight;src:url(" + __webpack_require__(72) + ");src:url(" + __webpack_require__(72) + "?#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__(152) + ") format(\"woff\"),url(" + __webpack_require__(153) + ") format(\"truetype\"),url(" + __webpack_require__(154) + "#ultraLight) format(\"svg\");font-style:normal;font-weight:normal}#inicio{background-color:red !important}.h1{color:#0077cb;font-family:Bold;font-size:3em}*,*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}html,button,input,select,textarea{font-family:inherit}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}body,form,fieldset,legend,input,select,textarea,button{margin:0}audio:not([controls]){display:none;height:0}audio,canvas,progress,video{display:inline-block}progress{vertical-align:baseline}[hidden],template{display:none}img{border-style:none}svg:not(:root){overflow:hidden}body{font-family:sans-serif;font-size:16px;font-size:1rem;line-height:22px;line-height:1.375rem;color:#000;font-weight:400;background:#fff}p{margin:0 0 20px 0}a{color:#000;text-decoration:underline;background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{color:#000;outline-width:0;text-decoration:none}h1,h2,h3,h4,h5,h6{font-family:sans-serif;margin:0}h1,.fs-1{font-size:32px;font-size:2rem;line-height:38px;line-height:2.375rem}h2,.fs-2{font-size:26px;font-size:1.625rem;line-height:32px;line-height:2rem}h3,.fs-3{font-size:22px;font-size:1.375rem;line-height:28px;line-height:1.75rem}h4,.fs-4{font-size:18px;font-size:1.125rem;line-height:24px;line-height:1.5rem}h5,.fs-5{font-size:16px;font-size:1rem;line-height:22px;line-height:1.375rem}h6,.fs-6{font-size:14px;font-size:.875rem;line-height:20px;line-height:1.25rem}h1{margin-bottom:.5em;color:#000;font-weight:700}h2{margin-bottom:.2em;color:#000;font-weight:700}h3{margin-bottom:.2em;color:#000;font-weight:700}h4{margin-bottom:.2em;color:#000;font-weight:700}h5{margin-bottom:.1em;color:#000;font-weight:700}h6{margin-bottom:.1em;color:#000;font-weight:700}b,strong,.strong{font-weight:700}em,.em{font-style:italic}abbr[title],.abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}dfn{font-style:italic}small,.small{font-size:13px;font-size:.8125rem;line-height:16px;line-height:1rem}mark,.mark{background-color:#ff0;color:#000}sub,.sub,sup,.sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub,.sub{bottom:-0.25em}sup,.sup{top:-0.5em}del,.del{text-decoration:line-through}figure{margin:1em 40px}hr,.hr{-moz-box-sizing:content-box;box-sizing:content-box;height:1px;background:#eee;border:0;margin-top:20px;margin-bottom:20px}ul,ol{margin:20px 0;padding:0 0 0 40px}dl:before,dl:after{content:\" \";display:table}dl:after{clear:both}dl dt{float:left;width:25%;display:block;font-weight:400}dl dd{overflow:hidden;display:block}blockquote,.blockquote{font-family:sans-serif;font-weight:400;font-style:italic;margin:20px 0}blockquote p,.blockquote p{font-size:22px;font-size:1.375rem;line-height:28px;line-height:1.75rem;margin-bottom:20px}blockquote cite,.blockquote cite{font-size:13px;font-size:.8125rem;line-height:19px;line-height:1.1875rem;font-weight:700;font-style:normal}caption{font-size:inherit;line-height:normal;font-weight:700;text-align:left;padding:10px;border-bottom:1px solid #d7d7d7}table{font-size:14px;font-size:.875rem;border-collapse:collapse;border-spacing:0;width:100%;margin:0;text-align:left}table thead td,table thead th,table tbody td,table tbody th,table tfoot td,table tfoot th{color:#585858;padding:10px;border-bottom:1px solid #e9e9e9}code,kbd,pre,samp{font-size:13px;font-size:.8125rem;line-height:18px;line-height:1.125rem;word-wrap:break-word;font-family:monospace,monospace;color:#000;background-color:transparent;font-weight:normal;padding:0;white-space:pre-wrap}pre{padding:10px;overflow:auto;border:1px solid #d7d7d7}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}label,button,input,optgroup,select,textarea{color:#000;font:inherit;margin:0}[type=\"text\"],[type=\"email\"],[type=\"password\"],[type=\"tel\"],[type=\"number\"],[type=\"date\"]{height:36px;padding:10px;background-color:#fff;border:1px solid #ccc;-webkit-appearance:none;-moz-appearance:textfield;border-radius:0}[type=\"text\"]:focus,[type=\"email\"]:focus,[type=\"password\"]:focus,[type=\"tel\"]:focus,[type=\"number\"]:focus,[type=\"date\"]:focus{background-color:#fff;border-color:#f7c723;outline:0}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"date\"]::-webkit-inner-spin-button{display:none;-webkit-appearance:none}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px}[type=\"search\"]::-webkit-search-cancel-button,[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}textarea{padding:10px;background-color:#fff;border:1px solid #ccc;overflow:auto;border-radius:0}textarea:focus{background-color:#fff;border-color:#f7c723;outline:0}select{text-transform:none;height:36px;padding:0 10px;background-color:#fff;border:1px solid #ccc}select:focus{background-color:#fff;border-color:#f7c723;outline:0}optgroup{font-weight:700}button{border-radius:0;overflow:visible;text-transform:none;cursor:pointer}button,html [type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button;border-radius:0}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}button[disabled],html input[disabled]{cursor:not-allowed}input::-webkit-input-placeholder{color:#999}input:-moz-placeholder{color:#999}input::-moz-placeholder{color:#999}input:-ms-input-placeholder{color:#999}.button{cursor:pointer;border:1px solid #d7d7d7;background-color:#f3f3f3;line-height:normal;padding:10px 20px;text-decoration:none;color:#363636;display:inline-block;transition:all 0.3s}.button:hover,.button:active{text-decoration:none}.button:hover{background:#f9f9f9}.button-link{color:#000;text-decoration:underline;border:0;background:transparent;padding:0}.button-link:hover{text-decoration:none}.button-link:active{outline:0}.clear:before,.clear:after{content:\" \";display:table}.clear:after{clear:both}.row:before,.row:after{content:\"\";display:table}.row:after{clear:both}.row{position:relative;margin-left:-15px;margin-right:-15px}@media only screen and (min-width: 740px){.row-m{position:relative;margin-left:-15px;margin-right:-15px}.row-m:before,.row-m:after{content:\"\";display:table}.row-m:after{clear:both}.clear-m:before,.clear-m:after{content:\"\";display:table}.clear-m:after{clear:both}}@media only screen and (min-width: 980px){.row-l{position:relative;margin-left:-15px;margin-right:-15px}.row-l:before,.row-l:after{content:\"\";display:table}.row-l:after{clear:both}.clear-l:before,.clear-l:after{content:\"\";display:table}.clear-l:after{clear:both}}@media only screen and (min-width: 1140px){.row-xl{position:relative;margin-left:-15px;margin-right:-15px}.row-xl:before,.row-xl:after{content:\"\";display:table}.row-xl:after{clear:both}.clear-xl:before,.clear-xl:after{content:\"\";display:table}.clear-xl:after{clear:both}}.container,.container-full{padding-left:15px;padding-right:15px;margin-left:auto;margin-right:auto}@media only screen and (min-width: 740px){.container{width:720px}.container-m,.container-full-m{padding-left:15px;padding-right:15px;margin-left:auto;margin-right:auto}.container-m{width:720px}.container-full-m{width:auto}}@media only screen and (min-width: 980px){.container{width:960px}.container-l,.container-full-l{padding-left:15px;padding-right:15px;margin-left:auto;margin-right:auto}.container-l{width:960px}.container-full-l{width:auto}}@media only screen and (min-width: 1140px){.container{width:1120px}.container-xl,.container-full-xl{padding-left:15px;padding-right:15px;margin-left:auto;margin-right:auto}.container-xl{width:1120px}.container-full-xl{width:auto}}.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-1-2,.col-1-3,.col-2-3,.col-1-4,.col-3-4,.col-1-5,.col-2-5,.col-3-5,.col-4-5{padding-left:15px;padding-right:15px;position:relative;float:left}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}.col-1-2{width:50%}.col-1-3{width:33.33333%}.col-2-3{width:66.66667%}.col-1-4{width:25%}.col-3-4{width:75%}.col-1-5{width:20%}.col-2-5{width:40%}.col-3-5{width:60%}.col-4-5{width:80%}.col-full{width:100%}.push-1{left:8.33333%}.push-2{left:16.66667%}.push-3{left:25%}.push-4{left:33.33333%}.push-5{left:41.66667%}.push-6{left:50%}.push-7{left:58.33333%}.push-8{left:66.66667%}.push-9{left:75%}.push-10{left:83.33333%}.push-11{left:91.66667%}.push-1-2{left:50%}.push-1-3{left:33.33333%}.push-2-3{left:66.66667%}.push-1-4{left:25%}.push-3-4{left:75%}.push-1-5{left:20%}.push-2-5{left:40%}.push-3-5{left:60%}.push-4-5{left:80%}.pull-1{left:-8.33333%}.pull-2{left:-16.66667%}.pull-3{left:-25%}.pull-4{left:-33.33333%}.pull-5{left:-41.66667%}.pull-6{left:-50%}.pull-7{left:-58.33333%}.pull-8{left:-66.66667%}.pull-9{left:-75%}.pull-10{left:-83.33333%}.pull-11{left:-91.66667%}.pull-1-2{left:-50%}.pull-1-3{left:-33.33333%}.pull-2-3{left:-66.66667%}.pull-1-4{left:-25%}.pull-3-4{left:-75%}.pull-1-5{left:-20%}.pull-2-5{left:-40%}.pull-3-5{left:-60%}.pull-4-5{left:-80%}@media only screen and (min-width: 740px){.col-1-m,.col-2-m,.col-3-m,.col-4-m,.col-5-m,.col-6-m,.col-7-m,.col-8-m,.col-9-m,.col-10-m,.col-11-m,.col-12-m,.col-1-2-m,.col-1-3-m,.col-2-3-m,.col-1-4-m,.col-3-4-m,.col-1-5-m,.col-2-5-m,.col-3-5-m,.col-4-5-m{padding-left:15px;padding-right:15px;position:relative;float:left}.col-1-m{width:8.33333%}.col-2-m{width:16.66667%}.col-3-m{width:25%}.col-4-m{width:33.33333%}.col-5-m{width:41.66667%}.col-6-m{width:50%}.col-7-m{width:58.33333%}.col-8-m{width:66.66667%}.col-9-m{width:75%}.col-10-m{width:83.33333%}.col-11-m{width:91.66667%}.col-12-m{width:100%}.col-1-2-m{width:50%}.col-1-3-m{width:33.33333%}.col-2-3-m{width:66.66667%}.col-1-4-m{width:25%}.col-3-4-m{width:75%}.col-1-5-m{width:20%}.col-2-5-m{width:40%}.col-3-5-m{width:60%}.col-4-5-m{width:80%}.col-full-m{width:100%}.push-1-m{left:8.33333%}.push-2-m{left:16.66667%}.push-3-m{left:25%}.push-4-m{left:33.33333%}.push-5-m{left:41.66667%}.push-6-m{left:50%}.push-7-m{left:58.33333%}.push-8-m{left:66.66667%}.push-9-m{left:75%}.push-10-m{left:83.33333%}.push-11-m{left:91.66667%}.push-1-2-m{left:50%}.push-1-3-m{left:33.33333%}.push-2-3-m{left:66.66667%}.push-1-4-m{left:25%}.push-3-4-m{left:75%}.push-1-5-m{left:20%}.push-2-5-m{left:40%}.push-3-5-m{left:60%}.push-4-5-m{left:80%}.pull-1-m{left:-8.33333%}.pull-2-m{left:-16.66667%}.pull-3-m{left:-25%}.pull-4-m{left:-33.33333%}.pull-5-m{left:-41.66667%}.pull-6-m{left:-50%}.pull-7-m{left:-58.33333%}.pull-8-m{left:-66.66667%}.pull-9-m{left:-75%}.pull-10-m{left:-83.33333%}.pull-11-m{left:-91.66667%}.pull-1-2-m{left:-50%}.pull-1-3-m{left:-33.33333%}.pull-2-3-m{left:-66.66667%}.pull-1-4-m{left:-25%}.pull-3-4-m{left:-75%}.pull-1-5-m{left:-20%}.pull-2-5-m{left:-40%}.pull-3-5-m{left:-60%}.pull-4-5-m{left:-80%}}@media only screen and (min-width: 980px){.col-1-l,.col-2-l,.col-3-l,.col-4-l,.col-5-l,.col-6-l,.col-7-l,.col-8-l,.col-9-l,.col-10-l,.col-11-l,.col-12-l,.col-1-2-l,.col-1-3-l,.col-2-3-l,.col-1-4-l,.col-3-4-l,.col-1-5-l,.col-2-5-l,.col-3-5-l,.col-4-5-l{padding-left:15px;padding-right:15px;position:relative;float:left}.col-1-l{width:8.33333%}.col-2-l{width:16.66667%}.col-3-l{width:25%}.col-4-l{width:33.33333%}.col-5-l{width:41.66667%}.col-6-l{width:50%}.col-7-l{width:58.33333%}.col-8-l{width:66.66667%}.col-9-l{width:75%}.col-10-l{width:83.33333%}.col-11-l{width:91.66667%}.col-12-l{width:100%}.col-1-2-l{width:50%}.col-1-3-l{width:33.33333%}.col-2-3-l{width:66.66667%}.col-1-4-l{width:25%}.col-3-4-l{width:75%}.col-1-5-l{width:20%}.col-2-5-l{width:40%}.col-3-5-l{width:60%}.col-4-5-l{width:80%}.col-full-l{width:100%}.push-1-l{left:8.33333%}.push-2-l{left:16.66667%}.push-3-l{left:25%}.push-4-l{left:33.33333%}.push-5-l{left:41.66667%}.push-6-l{left:50%}.push-7-l{left:58.33333%}.push-8-l{left:66.66667%}.push-9-l{left:75%}.push-10-l{left:83.33333%}.push-11-l{left:91.66667%}.push-1-2-l{left:50%}.push-1-3-l{left:33.33333%}.push-2-3-l{left:66.66667%}.push-1-4-l{left:25%}.push-3-4-l{left:75%}.push-1-5-l{left:20%}.push-2-5-l{left:40%}.push-3-5-l{left:60%}.push-4-5-l{left:80%}.pull-1-l{left:-8.33333%}.pull-2-l{left:-16.66667%}.pull-3-l{left:-25%}.pull-4-l{left:-33.33333%}.pull-5-l{left:-41.66667%}.pull-6-l{left:-50%}.pull-7-l{left:-58.33333%}.pull-8-l{left:-66.66667%}.pull-9-l{left:-75%}.pull-10-l{left:-83.33333%}.pull-11-l{left:-91.66667%}.pull-1-2-l{left:-50%}.pull-1-3-l{left:-33.33333%}.pull-2-3-l{left:-66.66667%}.pull-1-4-l{left:-25%}.pull-3-4-l{left:-75%}.pull-1-5-l{left:-20%}.pull-2-5-l{left:-40%}.pull-3-5-l{left:-60%}.pull-4-5-l{left:-80%}}@media only screen and (min-width: 1140px){.col-1-xl,.col-2-xl,.col-3-xl,.col-4-xl,.col-5-xl,.col-6-xl,.col-7-xl,.col-8-xl,.col-9-xl,.col-10-xl,.col-11-xl,.col-12-xl,.col-1-2-xl,.col-1-3-xl,.col-2-3-xl,.col-1-4-xl,.col-3-4-xl,.col-1-5-xl,.col-2-5-xl,.col-3-5-xl,.col-4-5-xl{padding-left:15px;padding-right:15px;position:relative;float:left}.col-1-xl{width:8.33333%}.col-2-xl{width:16.66667%}.col-3-xl{width:25%}.col-4-xl{width:33.33333%}.col-5-xl{width:41.66667%}.col-6-xl{width:50%}.col-7-xl{width:58.33333%}.col-8-xl{width:66.66667%}.col-9-xl{width:75%}.col-10-xl{width:83.33333%}.col-11-xl{width:91.66667%}.col-12-xl{width:100%}.col-1-2-xl{width:50%}.col-1-3-xl{width:33.33333%}.col-2-3-xl{width:66.66667%}.col-1-4-xl{width:25%}.col-3-4-xl{width:75%}.col-1-5-xl{width:20%}.col-2-5-xl{width:40%}.col-3-5-xl{width:60%}.col-4-5-xl{width:80%}.col-full-xl{width:100%}.push-1-xl{left:8.33333%}.push-2-xl{left:16.66667%}.push-3-xl{left:25%}.push-4-xl{left:33.33333%}.push-5-xl{left:41.66667%}.push-6-xl{left:50%}.push-7-xl{left:58.33333%}.push-8-xl{left:66.66667%}.push-9-xl{left:75%}.push-10-xl{left:83.33333%}.push-11-xl{left:91.66667%}.push-1-2-xl{left:50%}.push-1-3-xl{left:33.33333%}.push-2-3-xl{left:66.66667%}.push-1-4-xl{left:25%}.push-3-4-xl{left:75%}.push-1-5-xl{left:20%}.push-2-5-xl{left:40%}.push-3-5-xl{left:60%}.push-4-5-xl{left:80%}.pull-1-xl{left:-8.33333%}.pull-2-xl{left:-16.66667%}.pull-3-xl{left:-25%}.pull-4-xl{left:-33.33333%}.pull-5-xl{left:-41.66667%}.pull-6-xl{left:-50%}.pull-7-xl{left:-58.33333%}.pull-8-xl{left:-66.66667%}.pull-9-xl{left:-75%}.pull-10-xl{left:-83.33333%}.pull-11-xl{left:-91.66667%}.pull-1-2-xl{left:-50%}.pull-1-3-xl{left:-33.33333%}.pull-2-3-xl{left:-66.66667%}.pull-1-4-xl{left:-25%}.pull-3-4-xl{left:-75%}.pull-1-5-xl{left:-20%}.pull-2-5-xl{left:-40%}.pull-3-5-xl{left:-60%}.pull-4-5-xl{left:-80%}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}.fade-in{animation-name:fadeIn}@keyframes fadeInDown{0%{opacity:0;transform:translate3d(0, -30px, 0)}100%{opacity:1;transform:none}}.fade-in-down{animation-name:fadeInDown}@keyframes fadeInDownBig{0%{opacity:0;transform:translate3d(0, -100%, 0)}100%{opacity:1;transform:none}}.fade-in-down-big{animation-name:fadeInDownBig}@keyframes fadeInLeft{0%{opacity:0;transform:translate3d(-30px, 0, 0)}100%{opacity:1;transform:none}}.fade-in-left{animation-name:fadeInLeft}@keyframes fadeInLeftBig{0%{opacity:0;transform:translate3d(-100%, 0, 0)}100%{opacity:1;transform:none}}.fade-in-left-big{animation-name:fadeInLeftBig}@keyframes fadeInRight{0%{opacity:0;transform:translate3d(30px, 0, 0)}100%{opacity:1;transform:none}}.fade-in-right{animation-name:fadeInRight}@keyframes fadeInRightBig{0%{opacity:0;transform:translate3d(100%, 0, 0)}100%{opacity:1;transform:none}}.fade-in-right-big{animation-name:fadeInRightBig}@keyframes fadeInUp{0%{opacity:0;transform:translate3d(0, 30px, 0)}100%{opacity:1;transform:none}}.fade-in-up{animation-name:fadeInUp}@keyframes fadeInUpBig{0%{opacity:0;transform:translate3d(0, 100%, 0)}100%{opacity:1;transform:none}}.fade-in-up-big{animation-name:fadeInUpBig}.no-margin{margin:0}.no-padding{padding:0}.no-float{float:none}.no-background{background:transparent}.no-border{border:0}.no-select{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.font-100{font-weight:100}.font-200{font-weight:200}.font-300{font-weight:300}.font-400{font-weight:400}.font-500{font-weight:500}.font-600{font-weight:600}.font-700{font-weight:700}.font-800{font-weight:800}.font-900{font-weight:900}.font-normal{font-style:normal}.font-italic{font-style:italic}.uppercase{text-transform:uppercase}.lowercase{text-transform:lowercase}.capitalize{text-transform:capitalize}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.relative{position:relative}.absolute{position:absolute}.static{position:static}.fixed{position:fixed}.none{display:none}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.flex-row{flex-direction:row}.flex-column{flex-direction:column}.flex-space-around{justify-content:space-around}.flex-space-between{justify-content:space-between}.flex-start{justify-content:flex-start}.flex-center{justify-content:center}.flex-end{justify-content:flex-end}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.left{float:left}.right{float:right}.center{float:none;margin-left:auto;margin-right:auto}.pad-top-5{padding-top:5px}.pad-top-10{padding-top:10px}.pad-top-15{padding-top:15px}.pad-top-20{padding-top:20px}.pad-top-25{padding-top:25px}.pad-top-30{padding-top:30px}.pad-top-35{padding-top:35px}.pad-top-40{padding-top:40px}.pad-top-45{padding-top:45px}.pad-top-50{padding-top:50px}.pad-top-55{padding-top:55px}.pad-top-60{padding-top:60px}.pad-bottom-5{padding-bottom:5px}.pad-bottom-10{padding-bottom:10px}.pad-bottom-15{padding-bottom:15px}.pad-bottom-20{padding-bottom:20px}.pad-bottom-25{padding-bottom:25px}.pad-bottom-30{padding-bottom:30px}.pad-bottom-35{padding-bottom:35px}.pad-bottom-40{padding-bottom:40px}.pad-bottom-45{padding-bottom:45px}.pad-bottom-50{padding-bottom:50px}.pad-bottom-55{padding-bottom:55px}.pad-bottom-60{padding-bottom:60px}.pad-5{padding:5px}.pad-10{padding:10px}.pad-15{padding:15px}.pad-20{padding:20px}.pad-25{padding:25px}.pad-30{padding:30px}.pad-35{padding:35px}.pad-40{padding:40px}.pad-45{padding:45px}.pad-50{padding:50px}.pad-55{padding:55px}.pad-60{padding:60px}.sr{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.list-unstyled{list-style:none;margin:0;padding:0}.list-unstyled li{margin:0;padding:0}.list-inline{list-style:none;margin:0;padding:0}.list-inline li{margin:0;padding:0;display:inline-block}.img-fluid{max-width:100%}.field{width:100%}.form-group{overflow:hidden}.form-group label{display:inline-block;padding-top:8px}.disabled,[disabled]{pointer-events:none;cursor:not-allowed;opacity:.5}.checkbox,.radio{display:inline-block;position:relative}.checkbox label,.radio label{padding-left:20px;padding-top:0;display:inline-block}.checkbox input[type=\"checkbox\"],.checkbox input[type=\"radio\"],.radio input[type=\"checkbox\"],.radio input[type=\"radio\"]{position:absolute;top:4px;left:0}.select{position:relative;display:block}.select:before{content:\"\";border:6px solid transparent;border-top-color:#676767;top:50%;right:10px;margin-top:-3px;pointer-events:none;position:absolute}.select select{-webkit-appearance:none;-moz-appearance:none;height:36px;width:100%;padding:0 10px;line-height:normal;border:1px solid #ccc;background:#fff;display:block}.select select::-ms-expand{display:none}.select select:focus{border-color:#f7c723}.select select:-moz-focusring{color:transparent;text-shadow:0 0 0 #000;border-color:#f7c723}.animation{animation-duration:1s;animation-fill-mode:both}.animation-infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@media only screen and (min-width: 740px){.no-float-m{float:none}.no-padding-m{padding:0}.no-margin-m{margin:0}.relative-m{position:relative}.absolute-m{position:absolute}.static-m{position:static}.fixed-m{position:fixed}.none-m{display:none}.block-m{display:block}.inline-block-m{display:inline-block}.inline-m{display:inline}.flex-m{display:flex}.flex-row-m{flex-direction:row}.flex-column-m{flex-direction:column}.flex-space-around-m{justify-content:space-around}.flex-space-between-m{justify-content:space-between}.flex-start-m{justify-content:flex-start}.flex-center-m{justify-content:center}.flex-end-m{justify-content:flex-end}.flex-wrap-m{flex-wrap:wrap}.flex-nowrap-m{flex-wrap:nowrap}.left-m{float:left}.right-m{float:right}.center-m{float:none;margin-left:auto;margin-right:auto}.text-left-m{text-align:left}.text-right-m{text-align:right}.text-center-m{text-align:center}.text-justify-m{text-align:justify}.no-col-m{width:auto;float:none}.no-push-m,.no-pull-m{left:0}.pad-top-0-m{padding-top:0}.pad-top-5-m{padding-top:5px}.pad-top-10-m{padding-top:10px}.pad-top-15-m{padding-top:15px}.pad-top-20-m{padding-top:20px}.pad-top-25-m{padding-top:25px}.pad-top-30-m{padding-top:30px}.pad-top-35-m{padding-top:35px}.pad-top-40-m{padding-top:40px}.pad-top-45-m{padding-top:45px}.pad-top-50-m{padding-top:50px}.pad-top-55-m{padding-top:55px}.pad-top-60-m{padding-top:60px}.pad-bottom-0-m{padding-bottom:0}.pad-bottom-5-m{padding-bottom:5px}.pad-bottom-10-m{padding-bottom:10px}.pad-bottom-15-m{padding-bottom:15px}.pad-bottom-20-m{padding-bottom:20px}.pad-bottom-25-m{padding-bottom:25px}.pad-bottom-30-m{padding-bottom:30px}.pad-bottom-35-m{padding-bottom:35px}.pad-bottom-40-m{padding-bottom:40px}.pad-bottom-45-m{padding-bottom:45px}.pad-bottom-50-m{padding-bottom:50px}.pad-bottom-55-m{padding-bottom:55px}.pad-bottom-60-m{padding-bottom:60px}.pad-0-m{padding:0}.pad-5-m{padding:5px}.pad-10-m{padding:10px}.pad-15-m{padding:15px}.pad-20-m{padding:20px}.pad-25-m{padding:25px}.pad-30-m{padding:30px}.pad-35-m{padding:35px}.pad-40-m{padding:40px}.pad-45-m{padding:45px}.pad-50-m{padding:50px}.pad-55-m{padding:55px}.pad-60-m{padding:60px}}@media only screen and (min-width: 980px){.no-float-l{float:none}.no-padding-l{padding:0}.no-margin-l{margin:0}.relative-l{position:relative}.absolute-l{position:absolute}.static-l{position:static}.fixed-l{position:fixed}.none-l{display:none}.block-l{display:block}.inline-block-l{display:inline-block}.inline-l{display:inline}.flex-l{display:flex}.flex-row-l{flex-direction:row}.flex-column-l{flex-direction:column}.flex-space-around-l{justify-content:space-around}.flex-space-between-l{justify-content:space-between}.flex-start-l{justify-content:flex-start}.flex-center-l{justify-content:center}.flex-end-l{justify-content:flex-end}.flex-wrap-l{flex-wrap:wrap}.flex-nowrap-l{flex-wrap:nowrap}.left-l{float:left}.right-l{float:right}.center-l{float:none;margin-left:auto;margin-right:auto}.text-left-l{text-align:left}.text-right-l{text-align:right}.text-center-l{text-align:center}.text-justify-l{text-align:justify}.no-col-l{width:auto;float:none}.no-push-l,.no-pull-l{left:0}.pad-top-0-l{padding-top:0}.pad-top-5-l{padding-top:5px}.pad-top-10-l{padding-top:10px}.pad-top-15-l{padding-top:15px}.pad-top-20-l{padding-top:20px}.pad-top-25-l{padding-top:25px}.pad-top-30-l{padding-top:30px}.pad-top-35-l{padding-top:35px}.pad-top-40-l{padding-top:40px}.pad-top-45-l{padding-top:45px}.pad-top-50-l{padding-top:50px}.pad-top-55-l{padding-top:55px}.pad-top-60-l{padding-top:60px}.pad-bottom-0-l{padding-bottom:0}.pad-bottom-5-l{padding-bottom:5px}.pad-bottom-10-l{padding-bottom:10px}.pad-bottom-15-l{padding-bottom:15px}.pad-bottom-20-l{padding-bottom:20px}.pad-bottom-25-l{padding-bottom:25px}.pad-bottom-30-l{padding-bottom:30px}.pad-bottom-35-l{padding-bottom:35px}.pad-bottom-40-l{padding-bottom:40px}.pad-bottom-45-l{padding-bottom:45px}.pad-bottom-50-l{padding-bottom:50px}.pad-bottom-55-l{padding-bottom:55px}.pad-bottom-60-l{padding-bottom:60px}.pad-0-l{padding:0}.pad-5-l{padding:5px}.pad-10-l{padding:10px}.pad-15-l{padding:15px}.pad-20-l{padding:20px}.pad-25-l{padding:25px}.pad-30-l{padding:30px}.pad-35-l{padding:35px}.pad-40-l{padding:40px}.pad-45-l{padding:45px}.pad-50-l{padding:50px}.pad-55-l{padding:55px}.pad-60-l{padding:60px}}@media only screen and (min-width: 1140px){.no-float-xl{float:none}.no-padding-xl{padding:0}.no-margin-xl{margin:0}.relative-xl{position:relative}.absolute-xl{position:absolute}.static-xl{position:static}.fixed-xl{position:fixed}.none-xl{display:none}.block-xl{display:block}.inline-block-xl{display:inline-block}.inline-xl{display:inline}.flex-xl{display:flex}.flex-row-xl{flex-direction:row}.flex-column-xl{flex-direction:column}.flex-space-around-xl{justify-content:space-around}.flex-space-between-xl{justify-content:space-between}.flex-start-xl{justify-content:flex-start}.flex-center-xl{justify-content:center}.flex-end-xl{justify-content:flex-end}.flex-wrap-xl{flex-wrap:wrap}.flex-nowrap-xl{flex-wrap:nowrap}.left-xl{float:left}.right-xl{float:right}.center-xl{float:none;margin-left:auto;margin-right:auto}.text-left-xl{text-align:left}.text-right-xl{text-align:right}.text-center-xl{text-align:center}.text-justify-xl{text-align:justify}.no-col-xl{width:auto;float:none}.no-push-xl,.no-pull-xl{left:0}.pad-top-0-xl{padding-top:0}.pad-top-5-xl{padding-top:5px}.pad-top-10-xl{padding-top:10px}.pad-top-15-xl{padding-top:15px}.pad-top-20-xl{padding-top:20px}.pad-top-25-xl{padding-top:25px}.pad-top-30-xl{padding-top:30px}.pad-top-35-xl{padding-top:35px}.pad-top-40-xl{padding-top:40px}.pad-top-45-xl{padding-top:45px}.pad-top-50-xl{padding-top:50px}.pad-top-55-xl{padding-top:55px}.pad-top-60-xl{padding-top:60px}.pad-bottom-0-xl{padding-bottom:0}.pad-bottom-5-xl{padding-bottom:5px}.pad-bottom-10-xl{padding-bottom:10px}.pad-bottom-15-xl{padding-bottom:15px}.pad-bottom-20-xl{padding-bottom:20px}.pad-bottom-25-xl{padding-bottom:25px}.pad-bottom-30-xl{padding-bottom:30px}.pad-bottom-35-xl{padding-bottom:35px}.pad-bottom-40-xl{padding-bottom:40px}.pad-bottom-45-xl{padding-bottom:45px}.pad-bottom-50-xl{padding-bottom:50px}.pad-bottom-55-xl{padding-bottom:55px}.pad-bottom-60-xl{padding-bottom:60px}.pad-0-xl{padding:0}.pad-5-xl{padding:5px}.pad-10-xl{padding:10px}.pad-15-xl{padding:15px}.pad-20-xl{padding:20px}.pad-25-xl{padding:25px}.pad-30-xl{padding:30px}.pad-35-xl{padding:35px}.pad-40-xl{padding:40px}.pad-45-xl{padding:45px}.pad-50-xl{padding:50px}.pad-55-xl{padding:55px}.pad-60-xl{padding:60px}}@media print{.no-float-print{float:none}.no-padding-print{padding:0}.no-margin-print{margin:0}.none-print{display:none}.block-print{display:block}.inline-block-print{display:inline-block}.inline-print{display:inline}.text-left-print{text-align:left}.text-right-print{text-align:right}.text-center-print{text-align:center}.text-justify-print{text-align:justify}.no-col-print{width:auto;float:none}.no-push-print,.no-pull-print{left:0}.pad-top-0-print{padding-top:0}.pad-top-5-print{padding-top:5px}.pad-top-10-print{padding-top:10px}.pad-top-15-print{padding-top:15px}.pad-top-20-print{padding-top:20px}.pad-top-25-print{padding-top:25px}.pad-top-30-print{padding-top:30px}.pad-top-35-print{padding-top:35px}.pad-top-40-print{padding-top:40px}.pad-top-45-print{padding-top:45px}.pad-top-50-print{padding-top:50px}.pad-top-55-print{padding-top:55px}.pad-top-60-print{padding-top:60px}.pad-bottom-0-print{padding-bottom:0}.pad-bottom-5-print{padding-bottom:5px}.pad-bottom-10-print{padding-bottom:10px}.pad-bottom-15-print{padding-bottom:15px}.pad-bottom-20-print{padding-bottom:20px}.pad-bottom-25-print{padding-bottom:25px}.pad-bottom-30-print{padding-bottom:30px}.pad-bottom-35-print{padding-bottom:35px}.pad-bottom-40-print{padding-bottom:40px}.pad-bottom-45-print{padding-bottom:45px}.pad-bottom-50-print{padding-bottom:50px}.pad-bottom-55-print{padding-bottom:55px}.pad-bottom-60-print{padding-bottom:60px}.pad-0-print{padding:0}.pad-5-print{padding:5px}.pad-10-print{padding:10px}.pad-15-print{padding:15px}.pad-20-print{padding:20px}.pad-25-print{padding:25px}.pad-30-print{padding:30px}.pad-35-print{padding:35px}.pad-40-print{padding:40px}.pad-45-print{padding:45px}.pad-50-print{padding:50px}.pad-55-print{padding:55px}.pad-60-print{padding:60px}}@media print{*,*:before,*:after{background:transparent;color:#000;box-shadow:none;text-shadow:none}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}pre,blockquote{page-break-inside:avoid}thead{display:table-header-group}tr{page-break-inside:avoid}img{page-break-inside:avoid;max-width:100%}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}abbr[title]:after{content:\" (\" attr(title) \")\"}}@font-face{font-family:'icomoon';src:url(" + __webpack_require__(73) + ");src:url(" + __webpack_require__(73) + "#iefix) format(\"embedded-opentype\"),url(" + __webpack_require__(155) + ") format(\"truetype\"),url(" + __webpack_require__(156) + ") format(\"woff\"),url(" + __webpack_require__(157) + "#icomoon) format(\"svg\");font-weight:normal;font-style:normal}html,body{overflow-x:hidden}body{font-family:light;font-weight:400;font-size:16px;line-height:1.8;color:#7f7f7f;background:#fff;height:100%;position:relative}a{color:#e96262;-webkit-transition:0.5s;-o-transition:0.5s;transition:0.5s}a:hover,a:active,a:focus{color:#e96262;outline:none}p{margin-bottom:30px}h1,h2,h3,h4,h5,h6,figure{color:#222;font-family:light;font-weight:400;margin:0 0 30px 0}::-webkit-selection{color:#f4f4f4;background:#e96262}::-moz-selection{color:#f4f4f4;background:#e96262}::selection{color:#f4f4f4;background:#e96262}#fh5co-header{height:800px;padding:3em 0em}@media screen and (max-width: 768px){#fh5co-header{height:1000px}}#fh5co-header .intro{margin-top:0em}@media screen and (max-width: 768px){#fh5co-header .intro{margin-top:0em}}#fh5co-header .intro #fh5co-logo{text-transform:uppercase;color:#f4f4f4;margin-bottom:10px;line-height:1.5}#fh5co-header .intro #fh5co-logo a{border-bottom:none !important}#fh5co-header .intro h2{font-size:24px;line-height:1.5;color:rgba(255,255,255,0.95)}#fh5co-header .intro a{color:rgba(255,255,255,0.95);border-bottom:2px solid rgba(255,255,255,0.3)}#fh5co-header .intro a:hover{color:#fff;text-decoration:none;border-bottom:2px solid #fff}#fh5co-header .intro .btn{border-bottom:none !important}#fh5co-header .fh5co-intro-img{position:relative;bottom:-10em}@media screen and (max-width: 768px){#fh5co-header .fh5co-intro-img{bottom:-5em}}#fh5co-header .fh5co-intro-img img{max-width:380px;-webkit-box-shadow:0px 0px 25px 0px rgba(0,0,0,0.25);-moz-box-shadow:0px 0px 25px 0px rgba(0,0,0,0.25);box-shadow:0px 0px 25px 0px rgba(0,0,0,0.25)}@media screen and (max-width: 768px){#fh5co-header .fh5co-intro-img .img-1{max-width:380px}}@media screen and (max-width: 480px){#fh5co-header .fh5co-intro-img .img-1{max-width:100%}}#fh5co-header .fh5co-intro-img .img-2{position:absolute;top:5em;right:-1em}@media screen and (max-width: 992px){#fh5co-header .fh5co-intro-img .img-2{right:-10em}}@media screen and (max-width: 768px){#fh5co-header .fh5co-intro-img img{max-width:100%}}#main{margin-top:14em;clear:both}@media screen and (max-width: 480px){#main{margin-top:8em}}.fh5co-heading{margin-bottom:3em}.fh5co-testimonial{padding:7em 0;background:#fff}.fh5co-testimonial .review i{color:#fbfbfb}.fh5co-testimonial .review i.colored{color:#FFC12D}.fh5co-testimonial .testimony-slide{text-align:center}.fh5co-testimonial .testimony-slide span{font-size:12px;text-transform:uppercase;letter-spacing:2px;font-weight:700;display:block}.fh5co-testimonial .testimony-slide figure{margin-bottom:10px;display:-moz-inline-stack;display:inline-block;zoom:1;*display:inline}.fh5co-testimonial .testimony-slide figure img{width:90px;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;border-radius:50%}.fh5co-testimonial .testimony-slide blockquote{border:none;margin:30px auto;width:70%;position:relative;padding:0}@media screen and (max-width: 992px){.fh5co-testimonial .testimony-slide blockquote{width:100%}}.get-started .form-control{background:rgba(255,255,255,0.4);border:none !important;color:#222;font-size:16px !important;width:100%;-webkit-transition:0.5s;-o-transition:0.5s;transition:0.5s}.get-started .form-control::-webkit-input-placeholder{color:#222}.get-started .form-control:-moz-placeholder{color:#222}.get-started .form-control::-moz-placeholder{color:#222}.get-started .form-control:-ms-input-placeholder{color:#222}.get-started .form-control:focus{background:rgba(255,255,255,0.7)}.get-started .btn{height:54px;border:none !important;background:#e96262;color:#f4f4f4;font-size:16px;text-transform:uppercase;font-weight:400;padding-left:50px;padding-right:50px}.get-started .form-inline .form-group{width:100% !important;margin-bottom:10px}.get-started .form-inline .form-group .form-control{width:100%}.fh5co-feature{height:600px;overflow:hidden;border-bottom:2px solid #fff;margin-bottom:7em;padding-top:4em}.fh5co-feature.last-feature{margin-bottom:0em;border-bottom:none}@media screen and (max-width: 992px){.fh5co-feature{overflow:hidden;height:inherit !important}}.fh5co-feature .fh5co-copy{height:600px;display:table}@media screen and (max-width: 992px){.fh5co-feature .fh5co-copy{display:block;height:inherit !important;text-align:center;margin-bottom:30px}}.fh5co-feature .fh5co-copy>.fh5co-copy-inner{display:table-cell;vertical-align:middle}.fh5co-feature .fh5co-copy>.fh5co-copy-inner h2{position:relative;padding-bottom:20px;margin:0 0 20px 0}.fh5co-feature .fh5co-copy>.fh5co-copy-inner h2:before{position:absolute;bottom:0;width:30px;height:2px;background:#e96262;content:\"\"}@media screen and (max-width: 992px){.fh5co-feature .fh5co-figure{text-align:center;margin-bottom:-10em}}.fh5co-feature .fh5co-figure img{vertical-align:based;max-width:380px;-webkit-box-shadow:0px 0px 25px 0px rgba(0,0,0,0.25);-moz-box-shadow:0px 0px 25px 0px rgba(0,0,0,0.25);box-shadow:0px 0px 25px 0px rgba(0,0,0,0.25)}@media screen and (max-width: 992px){.fh5co-feature .fh5co-figure img{max-width:380px}}@media screen and (max-width: 768px){.fh5co-feature .fh5co-figure img{max-width:100%}}.fh5co-feature.fh5co-reverse .fh5co-figure{text-align:right}@media screen and (max-width: 992px){.fh5co-feature.fh5co-reverse .fh5co-figure{text-align:center}}#get-started{padding:7em 0;background:#E96262}#get-started .fh5co-heading h2{margin-bottom:20px}#get-started .fh5co-heading p{color:#c91c1c;font-size:18px;line-height:1.8}#get-started .btn{background:#e96262}#get-started .btn:hover,#get-started .btn:active,#get-started .btn:focus{background:#ed8181;color:#f4f4f4}#footer{padding:7em 0}#footer .fh5co-social{margin:0;padding:0}#footer .fh5co-social li{margin:0;padding:0;list-style:none;display:-moz-inline-stack;display:inline-block;zoom:1;*display:inline}#footer .fh5co-social li a{padding:20px}#footer .fh5co-social li a i{font-size:30px}#footer .fh5co-social li a:hover,#footer .fh5co-social li a:focus,#footer .fh5co-social li a:active{text-decoration:none}#footer .copyright em{display:block;font-style:normal}#features{padding:7em 0}#features .feature-center{text-align:center}#features .feature-center .icon{width:90px;height:90px;background:#efefef;display:table;text-align:center;margin:0 auto 40px auto;-webkit-border-radius:10px;-moz-border-radius:10px;-ms-border-radius:10px;border-radius:10px}#features .feature-center .icon i{display:table-cell;vertical-align:middle;height:90px;font-size:40px;line-height:40px;color:#e96262}#features .feature-center p,#features .feature-center h3{margin-bottom:10px}#features .feature-center h3{text-transform:uppercase;font-size:16px;color:#000}#features .feature-center p{color:#a6a6a6}.owl-carousel .owl-controls .owl-dot span{background:#fff}.owl-carousel .owl-controls .owl-dot span:hover,.owl-carousel .owl-controls .owl-dot span:focus{background:#eee}.owl-carousel .owl-controls .owl-dot:hover span,.owl-carousel .owl-controls .owl-dot:focus span{background:#eee}.owl-carousel .owl-controls .owl-dot.active span{background:transparent;border:2px solid #e96262}.btn{margin-right:4px;margin-bottom:4px;font-family:light;font-size:16px;font-weight:400;-webkit-border-radius:30px;-moz-border-radius:30px;-ms-border-radius:30px;border-radius:30px;-webkit-transition:0.5s;-o-transition:0.5s;transition:0.5s;padding:12px 20px}.btn.btn-md{padding:4px 20px !important}.btn.btn-lg{padding:18px 36px !important}.btn:hover,.btn:active,.btn:focus{box-shadow:none !important;outline:none !important}.btn-primary{background:#e96262;color:#f4f4f4;border:2px solid #e96262}.btn-primary:hover,.btn-primary:focus,.btn-primary:active{background:#ec7878 !important;border-color:#ec7878 !important}.btn-primary.btn-outline{background:transparent;color:#e96262;border:2px solid #e96262}.btn-primary.btn-outline:hover,.btn-primary.btn-outline:focus,.btn-primary.btn-outline:active{background:#e96262;color:#f4f4f4}.btn-success{background:#5cb85c;color:#f4f4f4;border:2px solid #5cb85c}.btn-success:hover,.btn-success:focus,.btn-success:active{background:#4cae4c !important;border-color:#4cae4c !important}.btn-success.btn-outline{background:transparent;color:#5cb85c;border:2px solid #5cb85c}.btn-success.btn-outline:hover,.btn-success.btn-outline:focus,.btn-success.btn-outline:active{background:#5cb85c;color:#f4f4f4}.btn-info{background:#5bc0de;color:#f4f4f4;border:2px solid #5bc0de}.btn-info:hover,.btn-info:focus,.btn-info:active{background:#46b8da !important;border-color:#46b8da !important}.btn-info.btn-outline{background:transparent;color:#5bc0de;border:2px solid #5bc0de}.btn-info.btn-outline:hover,.btn-info.btn-outline:focus,.btn-info.btn-outline:active{background:#5bc0de;color:#f4f4f4}.btn-warning{background:#f0ad4e;color:#f4f4f4;border:2px solid #f0ad4e}.btn-warning:hover,.btn-warning:focus,.btn-warning:active{background:#eea236 !important;border-color:#eea236 !important}.btn-warning.btn-outline{background:transparent;color:#f0ad4e;border:2px solid #f0ad4e}.btn-warning.btn-outline:hover,.btn-warning.btn-outline:focus,.btn-warning.btn-outline:active{background:#f0ad4e;color:#f4f4f4}.btn-danger{background:#d9534f;color:#f4f4f4;border:2px solid #d9534f}.btn-danger:hover,.btn-danger:focus,.btn-danger:active{background:#d43f3a !important;border-color:#d43f3a !important}.btn-danger.btn-outline{background:transparent;color:#d9534f;border:2px solid #d9534f}.btn-danger.btn-outline:hover,.btn-danger.btn-outline:focus,.btn-danger.btn-outline:active{background:#d9534f;color:#f4f4f4}.btn-outline{background:none;border:2px solid #a2a2a2;font-size:16px;-webkit-transition:0.3s;-o-transition:0.3s;transition:0.3s}.btn-outline:hover,.btn-outline:focus,.btn-outline:active{box-shadow:none}.btn.with-arrow{position:relative;-webkit-transition:0.3s;-o-transition:0.3s;transition:0.3s}.btn.with-arrow i{visibility:hidden;opacity:0;position:absolute;right:0px;top:50%;margin-top:-8px;-webkit-transition:0.2s;-o-transition:0.2s;transition:0.2s}.btn.with-arrow:hover{padding-right:50px}.btn.with-arrow:hover i{color:#f4f4f4;right:18px;visibility:visible;opacity:1}.form-control{box-shadow:none;background:transparent;border:2px solid rgba(0,0,0,0.1);height:54px;font-size:18px;font-weight:300}.form-control:active,.form-control:focus{outline:none;box-shadow:none;border-color:#e96262}.js .animate-box{opacity:0}.offline-ui,.offline-ui *,.offline-ui:before,.offline-ui:after,.offline-ui *:before,.offline-ui *:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.offline-ui{display:none;position:fixed;background:white;z-index:2000;margin:auto;top:0;left:0;right:0}.offline-ui .offline-ui-content:before{display:inline}.offline-ui .offline-ui-retry{-webkit-user-select:none;-moz-user-select:none;user-select:none;display:none}.offline-ui .offline-ui-retry:before{display:inline}.offline-ui.offline-ui-up.offline-ui-up-5s{display:block}.offline-ui.offline-ui-down{display:block}.offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-retry{display:block}.offline-ui.offline-ui-down.offline-ui-reconnect-failed-2s.offline-ui-waiting .offline-ui-retry{display:none}@-webkit-keyframes offline-dropin{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:0}1%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:0}2%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:1}100%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:1}}@-moz-keyframes offline-dropin{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:0}1%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:0}2%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:1}100%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:1}}@-ms-keyframes offline-dropin{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:0}1%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:0}2%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:1}100%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:1}}@-o-keyframes offline-dropin{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:0}1%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:0}2%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:1}100%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:1}}@keyframes offline-dropin{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:0}1%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:0}2%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px);opacity:1}100%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);opacity:1}}@-webkit-keyframes offline-dropout{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}100%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px)}}@-moz-keyframes offline-dropout{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}100%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px)}}@-ms-keyframes offline-dropout{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}100%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px)}}@-o-keyframes offline-dropout{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}100%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px)}}@keyframes offline-dropout{0%{transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}100%{transform:translateY(-800px);-webkit-transform:translateY(-800px);-moz-transform:translateY(-800px);-ms-transform:translateY(-800px);-o-transform:translateY(-800px)}}@-webkit-keyframes offline-rotation{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg)}100%{transform:rotate(359deg);-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-ms-transform:rotate(359deg);-o-transform:rotate(359deg)}}@-moz-keyframes offline-rotation{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg)}100%{transform:rotate(359deg);-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-ms-transform:rotate(359deg);-o-transform:rotate(359deg)}}@-ms-keyframes offline-rotation{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg)}100%{transform:rotate(359deg);-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-ms-transform:rotate(359deg);-o-transform:rotate(359deg)}}@-o-keyframes offline-rotation{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg)}100%{transform:rotate(359deg);-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-ms-transform:rotate(359deg);-o-transform:rotate(359deg)}}@keyframes offline-rotation{0%{transform:rotate(0deg);-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg)}100%{transform:rotate(359deg);-webkit-transform:rotate(359deg);-moz-transform:rotate(359deg);-ms-transform:rotate(359deg);-o-transform:rotate(359deg)}}.offline-ui{-webkit-border-radius:0 0 4px 4px;-moz-border-radius:0 0 4px 4px;-ms-border-radius:0 0 4px 4px;-o-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;font-family:\"Helvetica Neue\", sans-serif;font-weight:300;padding:1em;width:38em;max-width:100%;background:black;color:#cccccc;overflow:hidden}@media (max-width: 38em){.offline-ui{-webkit-border-radius:0;-moz-border-radius:0;-ms-border-radius:0;-o-border-radius:0;border-radius:0}}.offline-ui .offline-ui-content{padding-left:2em}.offline-ui .offline-ui-content:before{line-height:1.25em}.offline-ui .offline-ui-content:after{-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;border-radius:50%;content:\" \";display:block;position:absolute;top:0;bottom:0;left:1em;margin:auto;height:1em;width:1em}.offline-ui .offline-ui-retry{position:absolute;right:3em;top:0;bottom:0;background:rgba(255,255,255,0.2);text-decoration:none;color:inherit;line-height:3.5em;height:3.5em;margin:auto;padding:0 1em}.offline-ui.offline-ui-up{-webkit-animation:offline-dropout forwards 0.5s 2s;-moz-animation:offline-dropout forwards 0.5s 2s;-ms-animation:offline-dropout forwards 0.5s 2s;-o-animation:offline-dropout forwards 0.5s 2s;animation:offline-dropout forwards 0.5s 2s;-webkit-backface-visibility:hidden}.offline-ui.offline-ui-up .offline-ui-content:after{background:#80d580}.offline-ui.offline-ui-down{-webkit-animation:offline-dropin 0.5s;-moz-animation:offline-dropin 0.5s;-ms-animation:offline-dropin 0.5s;-o-animation:offline-dropin 0.5s;animation:offline-dropin 0.5s;-webkit-backface-visibility:hidden}.offline-ui.offline-ui-down .offline-ui-content:after{background:#e24949}.offline-ui.offline-ui-down.offline-ui-connecting,.offline-ui.offline-ui-down.offline-ui-waiting{padding-right:3em}.offline-ui.offline-ui-down.offline-ui-connecting .offline-ui-content:after,.offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content:after{background:#e24949}.offline-ui.offline-ui-down.offline-ui-connecting:after,.offline-ui.offline-ui-down.offline-ui-waiting:after{-webkit-animation:offline-rotation 0.7s linear infinite;-moz-animation:offline-rotation 0.7s linear infinite;-ms-animation:offline-rotation 0.7s linear infinite;-o-animation:offline-rotation 0.7s linear infinite;animation:offline-rotation 0.7s linear infinite;-webkit-backface-visibility:hidden;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;border-radius:50%;content:\" \";display:block;position:absolute;right:1em;top:0;bottom:0;margin:auto;height:1em;width:1em;border:2px solid transparent;border-top-color:rgba(255,255,255,0.5);border-left-color:rgba(255,255,255,0.5);opacity:0.7}.offline-ui.offline-ui-down.offline-ui-waiting{padding-right:11em}.offline-ui.offline-ui-down.offline-ui-waiting.offline-ui-reconnect-failed-2s{padding-right:0}\n", ""]);

// exports


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-Black.woff";

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-Black.ttf";

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-Black.svg";

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-Bold.woff";

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-Bold.ttf";

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-Bold.svg";

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-ExtraBold.woff";

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-ExtraBold.ttf";

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-ExtraBold.svg";

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-Light.woff";

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-Light.ttf";

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-Light.svg";

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-Regular.woff";

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-Regular.ttf";

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-Regular.svg";

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-SemiBold.woff";

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-SemiBold.ttf";

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-SemiBold.svg";

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-UltraLight.woff";

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-UltraLight.ttf";

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-UltraLight.svg";

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-Black.ttf";

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-Black.woff";

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Montserrat-Black.svg";

/***/ }),
/* 158 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(160);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(27)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-2!./material.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-2!./material.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(undefined);
// imports


// module
exports.push([module.i, "/**\n * material-design-lite - Material Design Components in CSS, JS and HTML\n * @version v1.3.0\n * @license Apache-2.0\n * @copyright 2015 Google, Inc.\n * @link https://github.com/google/material-design-lite\n */\n@charset \"UTF-8\";\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Material Design Lite */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/*\n * What follows is the result of much research on cross-browser styling.\n * Credit left inline and big thanks to Nicolas Gallagher, Jonathan Neal,\n * Kroc Camen, and the H5BP dev community and team.\n */\n/* ==========================================================================\n   Base styles: opinionated defaults\n   ========================================================================== */\nhtml {\n  color: rgba(0,0,0, 0.87);\n  font-size: 1em;\n  line-height: 1.4; }\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none; }\n::selection {\n  background: #b3d4fc;\n  text-shadow: none; }\n\n/*\n * A better looking default horizontal rule\n */\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0; }\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle; }\n\n/*\n * Remove default fieldset styles.\n */\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\n/*\n * Allow only vertical resizing of textareas.\n */\ntextarea {\n  resize: vertical; }\n\n/* ==========================================================================\n   Browser Upgrade Prompt\n   ========================================================================== */\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0; }\n\n/* ==========================================================================\n   Author's custom styles\n   ========================================================================== */\n/* ==========================================================================\n   Helper classes\n   ========================================================================== */\n/*\n * Hide visually and from screen readers:\n */\n.hidden {\n  display: none !important; }\n\n/*\n * Hide only visually, but have it available for screen readers:\n * http://snook.ca/archives/html_and_css/hiding-content-for-accessibility\n */\n.visuallyhidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n/*\n * Extends the .visuallyhidden class to allow the element\n * to be focusable when navigated to via the keyboard:\n * https://www.drupal.org/node/897638\n */\n.visuallyhidden.focusable:active,\n.visuallyhidden.focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n\n/*\n * Hide visually and from screen readers, but maintain layout\n */\n.invisible {\n  visibility: hidden; }\n\n/*\n * Clearfix: contain floats\n *\n * For modern browsers\n * 1. The space content is one way to avoid an Opera bug when the\n *    `contenteditable` attribute is included anywhere else in the document.\n *    Otherwise it causes space to appear at the top and bottom of elements\n *    that receive the `clearfix` class.\n * 2. The use of `table` rather than `block` is only necessary if using\n *    `:before` to contain the top-margins of child elements.\n */\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  /* 1 */\n  display: table;\n  /* 2 */ }\n\n.clearfix:after {\n  clear: both; }\n\n/* ==========================================================================\n   EXAMPLE Media Queries for Responsive Design.\n   These examples override the primary ('mobile first') styles.\n   Modify as content requires.\n   ========================================================================== */\n@media only screen and (min-width: 35em) {\n  /* Style adjustments for viewports that meet the condition */ }\n\n@media print, (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx), (min-resolution: 120dpi) {\n  /* Style adjustments for high resolution devices */ }\n\n/* ==========================================================================\n   Print styles.\n   Inlined to avoid the additional HTTP request:\n   http://www.phpied.com/delay-loading-your-print-css/\n   ========================================================================== */\n@media print {\n  *,\n  *:before,\n  *:after,\n  *:first-letter {\n    background: transparent !important;\n    color: #000 !important;\n    /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\"; }\n  /*\n     * Don't show links that are fragment identifiers,\n     * or use the `javascript:` pseudo protocol\n     */\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\"; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  /*\n     * Printing Tables:\n     * http://css-discuss.incutio.com/wiki/Printing_Tables\n     */\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; } }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Remove the unwanted box around FAB buttons */\n/* More info: http://goo.gl/IPwKi */\na, .mdl-accordion, .mdl-button, .mdl-card, .mdl-checkbox, .mdl-dropdown-menu,\n.mdl-icon-toggle, .mdl-item, .mdl-radio, .mdl-slider, .mdl-switch, .mdl-tabs__tab {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0); }\n\n/*\n * Make html take up the entire screen\n * Then set touch-action to avoid touch delay on mobile IE\n */\nhtml {\n  width: 100%;\n  height: 100%;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation; }\n\n/*\n* Make body take up the entire screen\n* Remove body margin so layout containers don't cause extra overflow.\n*/\nbody {\n  width: 100%;\n  min-height: 100%;\n  margin: 0; }\n\n/*\n * Main display reset for IE support.\n * Source: http://weblog.west-wind.com/posts/2015/Jan/12/main-HTML5-Tag-not-working-in-Internet-Explorer-91011\n */\nmain {\n  display: block; }\n\n/*\n* Apply no display to elements with the hidden attribute.\n* IE 9 and 10 support.\n*/\n*[hidden] {\n  display: none !important; }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\nhtml, body {\n  font-family: \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px; }\n\nh1, h2, h3, h4, h5, h6, p {\n  margin: 0;\n  padding: 0; }\n\n/**\n  * Styles for HTML elements\n  */\nh1 small, h2 small, h3 small, h4 small, h5 small, h6 small {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 56px;\n  font-weight: 400;\n  line-height: 1.35;\n  letter-spacing: -0.02em;\n  opacity: 0.54;\n  font-size: 0.6em; }\n\nh1 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 56px;\n  font-weight: 400;\n  line-height: 1.35;\n  letter-spacing: -0.02em;\n  margin-top: 24px;\n  margin-bottom: 24px; }\n\nh2 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 45px;\n  font-weight: 400;\n  line-height: 48px;\n  margin-top: 24px;\n  margin-bottom: 24px; }\n\nh3 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 34px;\n  font-weight: 400;\n  line-height: 40px;\n  margin-top: 24px;\n  margin-bottom: 24px; }\n\nh4 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 32px;\n  -moz-osx-font-smoothing: grayscale;\n  margin-top: 24px;\n  margin-bottom: 16px; }\n\nh5 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: 0.02em;\n  margin-top: 24px;\n  margin-bottom: 16px; }\n\nh6 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0.04em;\n  margin-top: 24px;\n  margin-bottom: 16px; }\n\np {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0;\n  margin-bottom: 16px; }\n\na {\n  color: rgb(255,64,129);\n  font-weight: 500; }\n\nblockquote {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  position: relative;\n  font-size: 24px;\n  font-weight: 300;\n  font-style: italic;\n  line-height: 1.35;\n  letter-spacing: 0.08em; }\n  blockquote:before {\n    position: absolute;\n    left: -0.5em;\n    content: '\\201C'; }\n  blockquote:after {\n    content: '\\201D';\n    margin-left: -0.05em; }\n\nmark {\n  background-color: #f4ff81; }\n\ndt {\n  font-weight: 700; }\n\naddress {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1;\n  letter-spacing: 0;\n  font-style: normal; }\n\nul, ol {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0; }\n\n/**\n * Class Name Styles\n */\n.mdl-typography--display-4 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 112px;\n  font-weight: 300;\n  line-height: 1;\n  letter-spacing: -0.04em; }\n\n.mdl-typography--display-4-color-contrast {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 112px;\n  font-weight: 300;\n  line-height: 1;\n  letter-spacing: -0.04em;\n  opacity: 0.54; }\n\n.mdl-typography--display-3 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 56px;\n  font-weight: 400;\n  line-height: 1.35;\n  letter-spacing: -0.02em; }\n\n.mdl-typography--display-3-color-contrast {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 56px;\n  font-weight: 400;\n  line-height: 1.35;\n  letter-spacing: -0.02em;\n  opacity: 0.54; }\n\n.mdl-typography--display-2 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 45px;\n  font-weight: 400;\n  line-height: 48px; }\n\n.mdl-typography--display-2-color-contrast {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 45px;\n  font-weight: 400;\n  line-height: 48px;\n  opacity: 0.54; }\n\n.mdl-typography--display-1 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 34px;\n  font-weight: 400;\n  line-height: 40px; }\n\n.mdl-typography--display-1-color-contrast {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 34px;\n  font-weight: 400;\n  line-height: 40px;\n  opacity: 0.54; }\n\n.mdl-typography--headline {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 32px;\n  -moz-osx-font-smoothing: grayscale; }\n\n.mdl-typography--headline-color-contrast {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 32px;\n  -moz-osx-font-smoothing: grayscale;\n  opacity: 0.87; }\n\n.mdl-typography--title {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: 0.02em; }\n\n.mdl-typography--title-color-contrast {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: 0.02em;\n  opacity: 0.87; }\n\n.mdl-typography--subhead {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0.04em; }\n\n.mdl-typography--subhead-color-contrast {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0.04em;\n  opacity: 0.87; }\n\n.mdl-typography--body-2 {\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 24px;\n  letter-spacing: 0; }\n\n.mdl-typography--body-2-color-contrast {\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 24px;\n  letter-spacing: 0;\n  opacity: 0.87; }\n\n.mdl-typography--body-1 {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0; }\n\n.mdl-typography--body-1-color-contrast {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0;\n  opacity: 0.87; }\n\n.mdl-typography--body-2-force-preferred-font {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0; }\n\n.mdl-typography--body-2-force-preferred-font-color-contrast {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0;\n  opacity: 0.87; }\n\n.mdl-typography--body-1-force-preferred-font {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0; }\n\n.mdl-typography--body-1-force-preferred-font-color-contrast {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0;\n  opacity: 0.87; }\n\n.mdl-typography--caption {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1;\n  letter-spacing: 0; }\n\n.mdl-typography--caption-force-preferred-font {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1;\n  letter-spacing: 0; }\n\n.mdl-typography--caption-color-contrast {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1;\n  letter-spacing: 0;\n  opacity: 0.54; }\n\n.mdl-typography--caption-force-preferred-font-color-contrast {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1;\n  letter-spacing: 0;\n  opacity: 0.54; }\n\n.mdl-typography--menu {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: 0; }\n\n.mdl-typography--menu-color-contrast {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: 0;\n  opacity: 0.87; }\n\n.mdl-typography--button {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  line-height: 1;\n  letter-spacing: 0; }\n\n.mdl-typography--button-color-contrast {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  line-height: 1;\n  letter-spacing: 0;\n  opacity: 0.87; }\n\n.mdl-typography--text-left {\n  text-align: left; }\n\n.mdl-typography--text-right {\n  text-align: right; }\n\n.mdl-typography--text-center {\n  text-align: center; }\n\n.mdl-typography--text-justify {\n  text-align: justify; }\n\n.mdl-typography--text-nowrap {\n  white-space: nowrap; }\n\n.mdl-typography--text-lowercase {\n  text-transform: lowercase; }\n\n.mdl-typography--text-uppercase {\n  text-transform: uppercase; }\n\n.mdl-typography--text-capitalize {\n  text-transform: capitalize; }\n\n.mdl-typography--font-thin {\n  font-weight: 200 !important; }\n\n.mdl-typography--font-light {\n  font-weight: 300 !important; }\n\n.mdl-typography--font-regular {\n  font-weight: 400 !important; }\n\n.mdl-typography--font-medium {\n  font-weight: 500 !important; }\n\n.mdl-typography--font-bold {\n  font-weight: 700 !important; }\n\n.mdl-typography--font-black {\n  font-weight: 900 !important; }\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  word-wrap: normal;\n  -moz-font-feature-settings: 'liga';\n       font-feature-settings: 'liga';\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased; }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n.mdl-color-text--red {\n  color: rgb(244,67,54) !important; }\n\n.mdl-color--red {\n  background-color: rgb(244,67,54) !important; }\n\n.mdl-color-text--red-50 {\n  color: rgb(255,235,238) !important; }\n\n.mdl-color--red-50 {\n  background-color: rgb(255,235,238) !important; }\n\n.mdl-color-text--red-100 {\n  color: rgb(255,205,210) !important; }\n\n.mdl-color--red-100 {\n  background-color: rgb(255,205,210) !important; }\n\n.mdl-color-text--red-200 {\n  color: rgb(239,154,154) !important; }\n\n.mdl-color--red-200 {\n  background-color: rgb(239,154,154) !important; }\n\n.mdl-color-text--red-300 {\n  color: rgb(229,115,115) !important; }\n\n.mdl-color--red-300 {\n  background-color: rgb(229,115,115) !important; }\n\n.mdl-color-text--red-400 {\n  color: rgb(239,83,80) !important; }\n\n.mdl-color--red-400 {\n  background-color: rgb(239,83,80) !important; }\n\n.mdl-color-text--red-500 {\n  color: rgb(244,67,54) !important; }\n\n.mdl-color--red-500 {\n  background-color: rgb(244,67,54) !important; }\n\n.mdl-color-text--red-600 {\n  color: rgb(229,57,53) !important; }\n\n.mdl-color--red-600 {\n  background-color: rgb(229,57,53) !important; }\n\n.mdl-color-text--red-700 {\n  color: rgb(211,47,47) !important; }\n\n.mdl-color--red-700 {\n  background-color: rgb(211,47,47) !important; }\n\n.mdl-color-text--red-800 {\n  color: rgb(198,40,40) !important; }\n\n.mdl-color--red-800 {\n  background-color: rgb(198,40,40) !important; }\n\n.mdl-color-text--red-900 {\n  color: rgb(183,28,28) !important; }\n\n.mdl-color--red-900 {\n  background-color: rgb(183,28,28) !important; }\n\n.mdl-color-text--red-A100 {\n  color: rgb(255,138,128) !important; }\n\n.mdl-color--red-A100 {\n  background-color: rgb(255,138,128) !important; }\n\n.mdl-color-text--red-A200 {\n  color: rgb(255,82,82) !important; }\n\n.mdl-color--red-A200 {\n  background-color: rgb(255,82,82) !important; }\n\n.mdl-color-text--red-A400 {\n  color: rgb(255,23,68) !important; }\n\n.mdl-color--red-A400 {\n  background-color: rgb(255,23,68) !important; }\n\n.mdl-color-text--red-A700 {\n  color: rgb(213,0,0) !important; }\n\n.mdl-color--red-A700 {\n  background-color: rgb(213,0,0) !important; }\n\n.mdl-color-text--pink {\n  color: rgb(233,30,99) !important; }\n\n.mdl-color--pink {\n  background-color: rgb(233,30,99) !important; }\n\n.mdl-color-text--pink-50 {\n  color: rgb(252,228,236) !important; }\n\n.mdl-color--pink-50 {\n  background-color: rgb(252,228,236) !important; }\n\n.mdl-color-text--pink-100 {\n  color: rgb(248,187,208) !important; }\n\n.mdl-color--pink-100 {\n  background-color: rgb(248,187,208) !important; }\n\n.mdl-color-text--pink-200 {\n  color: rgb(244,143,177) !important; }\n\n.mdl-color--pink-200 {\n  background-color: rgb(244,143,177) !important; }\n\n.mdl-color-text--pink-300 {\n  color: rgb(240,98,146) !important; }\n\n.mdl-color--pink-300 {\n  background-color: rgb(240,98,146) !important; }\n\n.mdl-color-text--pink-400 {\n  color: rgb(236,64,122) !important; }\n\n.mdl-color--pink-400 {\n  background-color: rgb(236,64,122) !important; }\n\n.mdl-color-text--pink-500 {\n  color: rgb(233,30,99) !important; }\n\n.mdl-color--pink-500 {\n  background-color: rgb(233,30,99) !important; }\n\n.mdl-color-text--pink-600 {\n  color: rgb(216,27,96) !important; }\n\n.mdl-color--pink-600 {\n  background-color: rgb(216,27,96) !important; }\n\n.mdl-color-text--pink-700 {\n  color: rgb(194,24,91) !important; }\n\n.mdl-color--pink-700 {\n  background-color: rgb(194,24,91) !important; }\n\n.mdl-color-text--pink-800 {\n  color: rgb(173,20,87) !important; }\n\n.mdl-color--pink-800 {\n  background-color: rgb(173,20,87) !important; }\n\n.mdl-color-text--pink-900 {\n  color: rgb(136,14,79) !important; }\n\n.mdl-color--pink-900 {\n  background-color: rgb(136,14,79) !important; }\n\n.mdl-color-text--pink-A100 {\n  color: rgb(255,128,171) !important; }\n\n.mdl-color--pink-A100 {\n  background-color: rgb(255,128,171) !important; }\n\n.mdl-color-text--pink-A200 {\n  color: rgb(255,64,129) !important; }\n\n.mdl-color--pink-A200 {\n  background-color: rgb(255,64,129) !important; }\n\n.mdl-color-text--pink-A400 {\n  color: rgb(245,0,87) !important; }\n\n.mdl-color--pink-A400 {\n  background-color: rgb(245,0,87) !important; }\n\n.mdl-color-text--pink-A700 {\n  color: rgb(197,17,98) !important; }\n\n.mdl-color--pink-A700 {\n  background-color: rgb(197,17,98) !important; }\n\n.mdl-color-text--purple {\n  color: rgb(156,39,176) !important; }\n\n.mdl-color--purple {\n  background-color: rgb(156,39,176) !important; }\n\n.mdl-color-text--purple-50 {\n  color: rgb(243,229,245) !important; }\n\n.mdl-color--purple-50 {\n  background-color: rgb(243,229,245) !important; }\n\n.mdl-color-text--purple-100 {\n  color: rgb(225,190,231) !important; }\n\n.mdl-color--purple-100 {\n  background-color: rgb(225,190,231) !important; }\n\n.mdl-color-text--purple-200 {\n  color: rgb(206,147,216) !important; }\n\n.mdl-color--purple-200 {\n  background-color: rgb(206,147,216) !important; }\n\n.mdl-color-text--purple-300 {\n  color: rgb(186,104,200) !important; }\n\n.mdl-color--purple-300 {\n  background-color: rgb(186,104,200) !important; }\n\n.mdl-color-text--purple-400 {\n  color: rgb(171,71,188) !important; }\n\n.mdl-color--purple-400 {\n  background-color: rgb(171,71,188) !important; }\n\n.mdl-color-text--purple-500 {\n  color: rgb(156,39,176) !important; }\n\n.mdl-color--purple-500 {\n  background-color: rgb(156,39,176) !important; }\n\n.mdl-color-text--purple-600 {\n  color: rgb(142,36,170) !important; }\n\n.mdl-color--purple-600 {\n  background-color: rgb(142,36,170) !important; }\n\n.mdl-color-text--purple-700 {\n  color: rgb(123,31,162) !important; }\n\n.mdl-color--purple-700 {\n  background-color: rgb(123,31,162) !important; }\n\n.mdl-color-text--purple-800 {\n  color: rgb(106,27,154) !important; }\n\n.mdl-color--purple-800 {\n  background-color: rgb(106,27,154) !important; }\n\n.mdl-color-text--purple-900 {\n  color: rgb(74,20,140) !important; }\n\n.mdl-color--purple-900 {\n  background-color: rgb(74,20,140) !important; }\n\n.mdl-color-text--purple-A100 {\n  color: rgb(234,128,252) !important; }\n\n.mdl-color--purple-A100 {\n  background-color: rgb(234,128,252) !important; }\n\n.mdl-color-text--purple-A200 {\n  color: rgb(224,64,251) !important; }\n\n.mdl-color--purple-A200 {\n  background-color: rgb(224,64,251) !important; }\n\n.mdl-color-text--purple-A400 {\n  color: rgb(213,0,249) !important; }\n\n.mdl-color--purple-A400 {\n  background-color: rgb(213,0,249) !important; }\n\n.mdl-color-text--purple-A700 {\n  color: rgb(170,0,255) !important; }\n\n.mdl-color--purple-A700 {\n  background-color: rgb(170,0,255) !important; }\n\n.mdl-color-text--deep-purple {\n  color: rgb(103,58,183) !important; }\n\n.mdl-color--deep-purple {\n  background-color: rgb(103,58,183) !important; }\n\n.mdl-color-text--deep-purple-50 {\n  color: rgb(237,231,246) !important; }\n\n.mdl-color--deep-purple-50 {\n  background-color: rgb(237,231,246) !important; }\n\n.mdl-color-text--deep-purple-100 {\n  color: rgb(209,196,233) !important; }\n\n.mdl-color--deep-purple-100 {\n  background-color: rgb(209,196,233) !important; }\n\n.mdl-color-text--deep-purple-200 {\n  color: rgb(179,157,219) !important; }\n\n.mdl-color--deep-purple-200 {\n  background-color: rgb(179,157,219) !important; }\n\n.mdl-color-text--deep-purple-300 {\n  color: rgb(149,117,205) !important; }\n\n.mdl-color--deep-purple-300 {\n  background-color: rgb(149,117,205) !important; }\n\n.mdl-color-text--deep-purple-400 {\n  color: rgb(126,87,194) !important; }\n\n.mdl-color--deep-purple-400 {\n  background-color: rgb(126,87,194) !important; }\n\n.mdl-color-text--deep-purple-500 {\n  color: rgb(103,58,183) !important; }\n\n.mdl-color--deep-purple-500 {\n  background-color: rgb(103,58,183) !important; }\n\n.mdl-color-text--deep-purple-600 {\n  color: rgb(94,53,177) !important; }\n\n.mdl-color--deep-purple-600 {\n  background-color: rgb(94,53,177) !important; }\n\n.mdl-color-text--deep-purple-700 {\n  color: rgb(81,45,168) !important; }\n\n.mdl-color--deep-purple-700 {\n  background-color: rgb(81,45,168) !important; }\n\n.mdl-color-text--deep-purple-800 {\n  color: rgb(69,39,160) !important; }\n\n.mdl-color--deep-purple-800 {\n  background-color: rgb(69,39,160) !important; }\n\n.mdl-color-text--deep-purple-900 {\n  color: rgb(49,27,146) !important; }\n\n.mdl-color--deep-purple-900 {\n  background-color: rgb(49,27,146) !important; }\n\n.mdl-color-text--deep-purple-A100 {\n  color: rgb(179,136,255) !important; }\n\n.mdl-color--deep-purple-A100 {\n  background-color: rgb(179,136,255) !important; }\n\n.mdl-color-text--deep-purple-A200 {\n  color: rgb(124,77,255) !important; }\n\n.mdl-color--deep-purple-A200 {\n  background-color: rgb(124,77,255) !important; }\n\n.mdl-color-text--deep-purple-A400 {\n  color: rgb(101,31,255) !important; }\n\n.mdl-color--deep-purple-A400 {\n  background-color: rgb(101,31,255) !important; }\n\n.mdl-color-text--deep-purple-A700 {\n  color: rgb(98,0,234) !important; }\n\n.mdl-color--deep-purple-A700 {\n  background-color: rgb(98,0,234) !important; }\n\n.mdl-color-text--indigo {\n  color: rgb(63,81,181) !important; }\n\n.mdl-color--indigo {\n  background-color: rgb(63,81,181) !important; }\n\n.mdl-color-text--indigo-50 {\n  color: rgb(232,234,246) !important; }\n\n.mdl-color--indigo-50 {\n  background-color: rgb(232,234,246) !important; }\n\n.mdl-color-text--indigo-100 {\n  color: rgb(197,202,233) !important; }\n\n.mdl-color--indigo-100 {\n  background-color: rgb(197,202,233) !important; }\n\n.mdl-color-text--indigo-200 {\n  color: rgb(159,168,218) !important; }\n\n.mdl-color--indigo-200 {\n  background-color: rgb(159,168,218) !important; }\n\n.mdl-color-text--indigo-300 {\n  color: rgb(121,134,203) !important; }\n\n.mdl-color--indigo-300 {\n  background-color: rgb(121,134,203) !important; }\n\n.mdl-color-text--indigo-400 {\n  color: rgb(92,107,192) !important; }\n\n.mdl-color--indigo-400 {\n  background-color: rgb(92,107,192) !important; }\n\n.mdl-color-text--indigo-500 {\n  color: rgb(63,81,181) !important; }\n\n.mdl-color--indigo-500 {\n  background-color: rgb(63,81,181) !important; }\n\n.mdl-color-text--indigo-600 {\n  color: rgb(57,73,171) !important; }\n\n.mdl-color--indigo-600 {\n  background-color: rgb(57,73,171) !important; }\n\n.mdl-color-text--indigo-700 {\n  color: rgb(48,63,159) !important; }\n\n.mdl-color--indigo-700 {\n  background-color: rgb(48,63,159) !important; }\n\n.mdl-color-text--indigo-800 {\n  color: rgb(40,53,147) !important; }\n\n.mdl-color--indigo-800 {\n  background-color: rgb(40,53,147) !important; }\n\n.mdl-color-text--indigo-900 {\n  color: rgb(26,35,126) !important; }\n\n.mdl-color--indigo-900 {\n  background-color: rgb(26,35,126) !important; }\n\n.mdl-color-text--indigo-A100 {\n  color: rgb(140,158,255) !important; }\n\n.mdl-color--indigo-A100 {\n  background-color: rgb(140,158,255) !important; }\n\n.mdl-color-text--indigo-A200 {\n  color: rgb(83,109,254) !important; }\n\n.mdl-color--indigo-A200 {\n  background-color: rgb(83,109,254) !important; }\n\n.mdl-color-text--indigo-A400 {\n  color: rgb(61,90,254) !important; }\n\n.mdl-color--indigo-A400 {\n  background-color: rgb(61,90,254) !important; }\n\n.mdl-color-text--indigo-A700 {\n  color: rgb(48,79,254) !important; }\n\n.mdl-color--indigo-A700 {\n  background-color: rgb(48,79,254) !important; }\n\n.mdl-color-text--blue {\n  color: rgb(33,150,243) !important; }\n\n.mdl-color--blue {\n  background-color: rgb(33,150,243) !important; }\n\n.mdl-color-text--blue-50 {\n  color: rgb(227,242,253) !important; }\n\n.mdl-color--blue-50 {\n  background-color: rgb(227,242,253) !important; }\n\n.mdl-color-text--blue-100 {\n  color: rgb(187,222,251) !important; }\n\n.mdl-color--blue-100 {\n  background-color: rgb(187,222,251) !important; }\n\n.mdl-color-text--blue-200 {\n  color: rgb(144,202,249) !important; }\n\n.mdl-color--blue-200 {\n  background-color: rgb(144,202,249) !important; }\n\n.mdl-color-text--blue-300 {\n  color: rgb(100,181,246) !important; }\n\n.mdl-color--blue-300 {\n  background-color: rgb(100,181,246) !important; }\n\n.mdl-color-text--blue-400 {\n  color: rgb(66,165,245) !important; }\n\n.mdl-color--blue-400 {\n  background-color: rgb(66,165,245) !important; }\n\n.mdl-color-text--blue-500 {\n  color: rgb(33,150,243) !important; }\n\n.mdl-color--blue-500 {\n  background-color: rgb(33,150,243) !important; }\n\n.mdl-color-text--blue-600 {\n  color: rgb(30,136,229) !important; }\n\n.mdl-color--blue-600 {\n  background-color: rgb(30,136,229) !important; }\n\n.mdl-color-text--blue-700 {\n  color: rgb(25,118,210) !important; }\n\n.mdl-color--blue-700 {\n  background-color: rgb(25,118,210) !important; }\n\n.mdl-color-text--blue-800 {\n  color: rgb(21,101,192) !important; }\n\n.mdl-color--blue-800 {\n  background-color: rgb(21,101,192) !important; }\n\n.mdl-color-text--blue-900 {\n  color: rgb(13,71,161) !important; }\n\n.mdl-color--blue-900 {\n  background-color: rgb(13,71,161) !important; }\n\n.mdl-color-text--blue-A100 {\n  color: rgb(130,177,255) !important; }\n\n.mdl-color--blue-A100 {\n  background-color: rgb(130,177,255) !important; }\n\n.mdl-color-text--blue-A200 {\n  color: rgb(68,138,255) !important; }\n\n.mdl-color--blue-A200 {\n  background-color: rgb(68,138,255) !important; }\n\n.mdl-color-text--blue-A400 {\n  color: rgb(41,121,255) !important; }\n\n.mdl-color--blue-A400 {\n  background-color: rgb(41,121,255) !important; }\n\n.mdl-color-text--blue-A700 {\n  color: rgb(41,98,255) !important; }\n\n.mdl-color--blue-A700 {\n  background-color: rgb(41,98,255) !important; }\n\n.mdl-color-text--light-blue {\n  color: rgb(3,169,244) !important; }\n\n.mdl-color--light-blue {\n  background-color: rgb(3,169,244) !important; }\n\n.mdl-color-text--light-blue-50 {\n  color: rgb(225,245,254) !important; }\n\n.mdl-color--light-blue-50 {\n  background-color: rgb(225,245,254) !important; }\n\n.mdl-color-text--light-blue-100 {\n  color: rgb(179,229,252) !important; }\n\n.mdl-color--light-blue-100 {\n  background-color: rgb(179,229,252) !important; }\n\n.mdl-color-text--light-blue-200 {\n  color: rgb(129,212,250) !important; }\n\n.mdl-color--light-blue-200 {\n  background-color: rgb(129,212,250) !important; }\n\n.mdl-color-text--light-blue-300 {\n  color: rgb(79,195,247) !important; }\n\n.mdl-color--light-blue-300 {\n  background-color: rgb(79,195,247) !important; }\n\n.mdl-color-text--light-blue-400 {\n  color: rgb(41,182,246) !important; }\n\n.mdl-color--light-blue-400 {\n  background-color: rgb(41,182,246) !important; }\n\n.mdl-color-text--light-blue-500 {\n  color: rgb(3,169,244) !important; }\n\n.mdl-color--light-blue-500 {\n  background-color: rgb(3,169,244) !important; }\n\n.mdl-color-text--light-blue-600 {\n  color: rgb(3,155,229) !important; }\n\n.mdl-color--light-blue-600 {\n  background-color: rgb(3,155,229) !important; }\n\n.mdl-color-text--light-blue-700 {\n  color: rgb(2,136,209) !important; }\n\n.mdl-color--light-blue-700 {\n  background-color: rgb(2,136,209) !important; }\n\n.mdl-color-text--light-blue-800 {\n  color: rgb(2,119,189) !important; }\n\n.mdl-color--light-blue-800 {\n  background-color: rgb(2,119,189) !important; }\n\n.mdl-color-text--light-blue-900 {\n  color: rgb(1,87,155) !important; }\n\n.mdl-color--light-blue-900 {\n  background-color: rgb(1,87,155) !important; }\n\n.mdl-color-text--light-blue-A100 {\n  color: rgb(128,216,255) !important; }\n\n.mdl-color--light-blue-A100 {\n  background-color: rgb(128,216,255) !important; }\n\n.mdl-color-text--light-blue-A200 {\n  color: rgb(64,196,255) !important; }\n\n.mdl-color--light-blue-A200 {\n  background-color: rgb(64,196,255) !important; }\n\n.mdl-color-text--light-blue-A400 {\n  color: rgb(0,176,255) !important; }\n\n.mdl-color--light-blue-A400 {\n  background-color: rgb(0,176,255) !important; }\n\n.mdl-color-text--light-blue-A700 {\n  color: rgb(0,145,234) !important; }\n\n.mdl-color--light-blue-A700 {\n  background-color: rgb(0,145,234) !important; }\n\n.mdl-color-text--cyan {\n  color: rgb(0,188,212) !important; }\n\n.mdl-color--cyan {\n  background-color: rgb(0,188,212) !important; }\n\n.mdl-color-text--cyan-50 {\n  color: rgb(224,247,250) !important; }\n\n.mdl-color--cyan-50 {\n  background-color: rgb(224,247,250) !important; }\n\n.mdl-color-text--cyan-100 {\n  color: rgb(178,235,242) !important; }\n\n.mdl-color--cyan-100 {\n  background-color: rgb(178,235,242) !important; }\n\n.mdl-color-text--cyan-200 {\n  color: rgb(128,222,234) !important; }\n\n.mdl-color--cyan-200 {\n  background-color: rgb(128,222,234) !important; }\n\n.mdl-color-text--cyan-300 {\n  color: rgb(77,208,225) !important; }\n\n.mdl-color--cyan-300 {\n  background-color: rgb(77,208,225) !important; }\n\n.mdl-color-text--cyan-400 {\n  color: rgb(38,198,218) !important; }\n\n.mdl-color--cyan-400 {\n  background-color: rgb(38,198,218) !important; }\n\n.mdl-color-text--cyan-500 {\n  color: rgb(0,188,212) !important; }\n\n.mdl-color--cyan-500 {\n  background-color: rgb(0,188,212) !important; }\n\n.mdl-color-text--cyan-600 {\n  color: rgb(0,172,193) !important; }\n\n.mdl-color--cyan-600 {\n  background-color: rgb(0,172,193) !important; }\n\n.mdl-color-text--cyan-700 {\n  color: rgb(0,151,167) !important; }\n\n.mdl-color--cyan-700 {\n  background-color: rgb(0,151,167) !important; }\n\n.mdl-color-text--cyan-800 {\n  color: rgb(0,131,143) !important; }\n\n.mdl-color--cyan-800 {\n  background-color: rgb(0,131,143) !important; }\n\n.mdl-color-text--cyan-900 {\n  color: rgb(0,96,100) !important; }\n\n.mdl-color--cyan-900 {\n  background-color: rgb(0,96,100) !important; }\n\n.mdl-color-text--cyan-A100 {\n  color: rgb(132,255,255) !important; }\n\n.mdl-color--cyan-A100 {\n  background-color: rgb(132,255,255) !important; }\n\n.mdl-color-text--cyan-A200 {\n  color: rgb(24,255,255) !important; }\n\n.mdl-color--cyan-A200 {\n  background-color: rgb(24,255,255) !important; }\n\n.mdl-color-text--cyan-A400 {\n  color: rgb(0,229,255) !important; }\n\n.mdl-color--cyan-A400 {\n  background-color: rgb(0,229,255) !important; }\n\n.mdl-color-text--cyan-A700 {\n  color: rgb(0,184,212) !important; }\n\n.mdl-color--cyan-A700 {\n  background-color: rgb(0,184,212) !important; }\n\n.mdl-color-text--teal {\n  color: rgb(0,150,136) !important; }\n\n.mdl-color--teal {\n  background-color: rgb(0,150,136) !important; }\n\n.mdl-color-text--teal-50 {\n  color: rgb(224,242,241) !important; }\n\n.mdl-color--teal-50 {\n  background-color: rgb(224,242,241) !important; }\n\n.mdl-color-text--teal-100 {\n  color: rgb(178,223,219) !important; }\n\n.mdl-color--teal-100 {\n  background-color: rgb(178,223,219) !important; }\n\n.mdl-color-text--teal-200 {\n  color: rgb(128,203,196) !important; }\n\n.mdl-color--teal-200 {\n  background-color: rgb(128,203,196) !important; }\n\n.mdl-color-text--teal-300 {\n  color: rgb(77,182,172) !important; }\n\n.mdl-color--teal-300 {\n  background-color: rgb(77,182,172) !important; }\n\n.mdl-color-text--teal-400 {\n  color: rgb(38,166,154) !important; }\n\n.mdl-color--teal-400 {\n  background-color: rgb(38,166,154) !important; }\n\n.mdl-color-text--teal-500 {\n  color: rgb(0,150,136) !important; }\n\n.mdl-color--teal-500 {\n  background-color: rgb(0,150,136) !important; }\n\n.mdl-color-text--teal-600 {\n  color: rgb(0,137,123) !important; }\n\n.mdl-color--teal-600 {\n  background-color: rgb(0,137,123) !important; }\n\n.mdl-color-text--teal-700 {\n  color: rgb(0,121,107) !important; }\n\n.mdl-color--teal-700 {\n  background-color: rgb(0,121,107) !important; }\n\n.mdl-color-text--teal-800 {\n  color: rgb(0,105,92) !important; }\n\n.mdl-color--teal-800 {\n  background-color: rgb(0,105,92) !important; }\n\n.mdl-color-text--teal-900 {\n  color: rgb(0,77,64) !important; }\n\n.mdl-color--teal-900 {\n  background-color: rgb(0,77,64) !important; }\n\n.mdl-color-text--teal-A100 {\n  color: rgb(167,255,235) !important; }\n\n.mdl-color--teal-A100 {\n  background-color: rgb(167,255,235) !important; }\n\n.mdl-color-text--teal-A200 {\n  color: rgb(100,255,218) !important; }\n\n.mdl-color--teal-A200 {\n  background-color: rgb(100,255,218) !important; }\n\n.mdl-color-text--teal-A400 {\n  color: rgb(29,233,182) !important; }\n\n.mdl-color--teal-A400 {\n  background-color: rgb(29,233,182) !important; }\n\n.mdl-color-text--teal-A700 {\n  color: rgb(0,191,165) !important; }\n\n.mdl-color--teal-A700 {\n  background-color: rgb(0,191,165) !important; }\n\n.mdl-color-text--green {\n  color: rgb(76,175,80) !important; }\n\n.mdl-color--green {\n  background-color: rgb(76,175,80) !important; }\n\n.mdl-color-text--green-50 {\n  color: rgb(232,245,233) !important; }\n\n.mdl-color--green-50 {\n  background-color: rgb(232,245,233) !important; }\n\n.mdl-color-text--green-100 {\n  color: rgb(200,230,201) !important; }\n\n.mdl-color--green-100 {\n  background-color: rgb(200,230,201) !important; }\n\n.mdl-color-text--green-200 {\n  color: rgb(165,214,167) !important; }\n\n.mdl-color--green-200 {\n  background-color: rgb(165,214,167) !important; }\n\n.mdl-color-text--green-300 {\n  color: rgb(129,199,132) !important; }\n\n.mdl-color--green-300 {\n  background-color: rgb(129,199,132) !important; }\n\n.mdl-color-text--green-400 {\n  color: rgb(102,187,106) !important; }\n\n.mdl-color--green-400 {\n  background-color: rgb(102,187,106) !important; }\n\n.mdl-color-text--green-500 {\n  color: rgb(76,175,80) !important; }\n\n.mdl-color--green-500 {\n  background-color: rgb(76,175,80) !important; }\n\n.mdl-color-text--green-600 {\n  color: rgb(67,160,71) !important; }\n\n.mdl-color--green-600 {\n  background-color: rgb(67,160,71) !important; }\n\n.mdl-color-text--green-700 {\n  color: rgb(56,142,60) !important; }\n\n.mdl-color--green-700 {\n  background-color: rgb(56,142,60) !important; }\n\n.mdl-color-text--green-800 {\n  color: rgb(46,125,50) !important; }\n\n.mdl-color--green-800 {\n  background-color: rgb(46,125,50) !important; }\n\n.mdl-color-text--green-900 {\n  color: rgb(27,94,32) !important; }\n\n.mdl-color--green-900 {\n  background-color: rgb(27,94,32) !important; }\n\n.mdl-color-text--green-A100 {\n  color: rgb(185,246,202) !important; }\n\n.mdl-color--green-A100 {\n  background-color: rgb(185,246,202) !important; }\n\n.mdl-color-text--green-A200 {\n  color: rgb(105,240,174) !important; }\n\n.mdl-color--green-A200 {\n  background-color: rgb(105,240,174) !important; }\n\n.mdl-color-text--green-A400 {\n  color: rgb(0,230,118) !important; }\n\n.mdl-color--green-A400 {\n  background-color: rgb(0,230,118) !important; }\n\n.mdl-color-text--green-A700 {\n  color: rgb(0,200,83) !important; }\n\n.mdl-color--green-A700 {\n  background-color: rgb(0,200,83) !important; }\n\n.mdl-color-text--light-green {\n  color: rgb(139,195,74) !important; }\n\n.mdl-color--light-green {\n  background-color: rgb(139,195,74) !important; }\n\n.mdl-color-text--light-green-50 {\n  color: rgb(241,248,233) !important; }\n\n.mdl-color--light-green-50 {\n  background-color: rgb(241,248,233) !important; }\n\n.mdl-color-text--light-green-100 {\n  color: rgb(220,237,200) !important; }\n\n.mdl-color--light-green-100 {\n  background-color: rgb(220,237,200) !important; }\n\n.mdl-color-text--light-green-200 {\n  color: rgb(197,225,165) !important; }\n\n.mdl-color--light-green-200 {\n  background-color: rgb(197,225,165) !important; }\n\n.mdl-color-text--light-green-300 {\n  color: rgb(174,213,129) !important; }\n\n.mdl-color--light-green-300 {\n  background-color: rgb(174,213,129) !important; }\n\n.mdl-color-text--light-green-400 {\n  color: rgb(156,204,101) !important; }\n\n.mdl-color--light-green-400 {\n  background-color: rgb(156,204,101) !important; }\n\n.mdl-color-text--light-green-500 {\n  color: rgb(139,195,74) !important; }\n\n.mdl-color--light-green-500 {\n  background-color: rgb(139,195,74) !important; }\n\n.mdl-color-text--light-green-600 {\n  color: rgb(124,179,66) !important; }\n\n.mdl-color--light-green-600 {\n  background-color: rgb(124,179,66) !important; }\n\n.mdl-color-text--light-green-700 {\n  color: rgb(104,159,56) !important; }\n\n.mdl-color--light-green-700 {\n  background-color: rgb(104,159,56) !important; }\n\n.mdl-color-text--light-green-800 {\n  color: rgb(85,139,47) !important; }\n\n.mdl-color--light-green-800 {\n  background-color: rgb(85,139,47) !important; }\n\n.mdl-color-text--light-green-900 {\n  color: rgb(51,105,30) !important; }\n\n.mdl-color--light-green-900 {\n  background-color: rgb(51,105,30) !important; }\n\n.mdl-color-text--light-green-A100 {\n  color: rgb(204,255,144) !important; }\n\n.mdl-color--light-green-A100 {\n  background-color: rgb(204,255,144) !important; }\n\n.mdl-color-text--light-green-A200 {\n  color: rgb(178,255,89) !important; }\n\n.mdl-color--light-green-A200 {\n  background-color: rgb(178,255,89) !important; }\n\n.mdl-color-text--light-green-A400 {\n  color: rgb(118,255,3) !important; }\n\n.mdl-color--light-green-A400 {\n  background-color: rgb(118,255,3) !important; }\n\n.mdl-color-text--light-green-A700 {\n  color: rgb(100,221,23) !important; }\n\n.mdl-color--light-green-A700 {\n  background-color: rgb(100,221,23) !important; }\n\n.mdl-color-text--lime {\n  color: rgb(205,220,57) !important; }\n\n.mdl-color--lime {\n  background-color: rgb(205,220,57) !important; }\n\n.mdl-color-text--lime-50 {\n  color: rgb(249,251,231) !important; }\n\n.mdl-color--lime-50 {\n  background-color: rgb(249,251,231) !important; }\n\n.mdl-color-text--lime-100 {\n  color: rgb(240,244,195) !important; }\n\n.mdl-color--lime-100 {\n  background-color: rgb(240,244,195) !important; }\n\n.mdl-color-text--lime-200 {\n  color: rgb(230,238,156) !important; }\n\n.mdl-color--lime-200 {\n  background-color: rgb(230,238,156) !important; }\n\n.mdl-color-text--lime-300 {\n  color: rgb(220,231,117) !important; }\n\n.mdl-color--lime-300 {\n  background-color: rgb(220,231,117) !important; }\n\n.mdl-color-text--lime-400 {\n  color: rgb(212,225,87) !important; }\n\n.mdl-color--lime-400 {\n  background-color: rgb(212,225,87) !important; }\n\n.mdl-color-text--lime-500 {\n  color: rgb(205,220,57) !important; }\n\n.mdl-color--lime-500 {\n  background-color: rgb(205,220,57) !important; }\n\n.mdl-color-text--lime-600 {\n  color: rgb(192,202,51) !important; }\n\n.mdl-color--lime-600 {\n  background-color: rgb(192,202,51) !important; }\n\n.mdl-color-text--lime-700 {\n  color: rgb(175,180,43) !important; }\n\n.mdl-color--lime-700 {\n  background-color: rgb(175,180,43) !important; }\n\n.mdl-color-text--lime-800 {\n  color: rgb(158,157,36) !important; }\n\n.mdl-color--lime-800 {\n  background-color: rgb(158,157,36) !important; }\n\n.mdl-color-text--lime-900 {\n  color: rgb(130,119,23) !important; }\n\n.mdl-color--lime-900 {\n  background-color: rgb(130,119,23) !important; }\n\n.mdl-color-text--lime-A100 {\n  color: rgb(244,255,129) !important; }\n\n.mdl-color--lime-A100 {\n  background-color: rgb(244,255,129) !important; }\n\n.mdl-color-text--lime-A200 {\n  color: rgb(238,255,65) !important; }\n\n.mdl-color--lime-A200 {\n  background-color: rgb(238,255,65) !important; }\n\n.mdl-color-text--lime-A400 {\n  color: rgb(198,255,0) !important; }\n\n.mdl-color--lime-A400 {\n  background-color: rgb(198,255,0) !important; }\n\n.mdl-color-text--lime-A700 {\n  color: rgb(174,234,0) !important; }\n\n.mdl-color--lime-A700 {\n  background-color: rgb(174,234,0) !important; }\n\n.mdl-color-text--yellow {\n  color: rgb(255,235,59) !important; }\n\n.mdl-color--yellow {\n  background-color: rgb(255,235,59) !important; }\n\n.mdl-color-text--yellow-50 {\n  color: rgb(255,253,231) !important; }\n\n.mdl-color--yellow-50 {\n  background-color: rgb(255,253,231) !important; }\n\n.mdl-color-text--yellow-100 {\n  color: rgb(255,249,196) !important; }\n\n.mdl-color--yellow-100 {\n  background-color: rgb(255,249,196) !important; }\n\n.mdl-color-text--yellow-200 {\n  color: rgb(255,245,157) !important; }\n\n.mdl-color--yellow-200 {\n  background-color: rgb(255,245,157) !important; }\n\n.mdl-color-text--yellow-300 {\n  color: rgb(255,241,118) !important; }\n\n.mdl-color--yellow-300 {\n  background-color: rgb(255,241,118) !important; }\n\n.mdl-color-text--yellow-400 {\n  color: rgb(255,238,88) !important; }\n\n.mdl-color--yellow-400 {\n  background-color: rgb(255,238,88) !important; }\n\n.mdl-color-text--yellow-500 {\n  color: rgb(255,235,59) !important; }\n\n.mdl-color--yellow-500 {\n  background-color: rgb(255,235,59) !important; }\n\n.mdl-color-text--yellow-600 {\n  color: rgb(253,216,53) !important; }\n\n.mdl-color--yellow-600 {\n  background-color: rgb(253,216,53) !important; }\n\n.mdl-color-text--yellow-700 {\n  color: rgb(251,192,45) !important; }\n\n.mdl-color--yellow-700 {\n  background-color: rgb(251,192,45) !important; }\n\n.mdl-color-text--yellow-800 {\n  color: rgb(249,168,37) !important; }\n\n.mdl-color--yellow-800 {\n  background-color: rgb(249,168,37) !important; }\n\n.mdl-color-text--yellow-900 {\n  color: rgb(245,127,23) !important; }\n\n.mdl-color--yellow-900 {\n  background-color: rgb(245,127,23) !important; }\n\n.mdl-color-text--yellow-A100 {\n  color: rgb(255,255,141) !important; }\n\n.mdl-color--yellow-A100 {\n  background-color: rgb(255,255,141) !important; }\n\n.mdl-color-text--yellow-A200 {\n  color: rgb(255,255,0) !important; }\n\n.mdl-color--yellow-A200 {\n  background-color: rgb(255,255,0) !important; }\n\n.mdl-color-text--yellow-A400 {\n  color: rgb(255,234,0) !important; }\n\n.mdl-color--yellow-A400 {\n  background-color: rgb(255,234,0) !important; }\n\n.mdl-color-text--yellow-A700 {\n  color: rgb(255,214,0) !important; }\n\n.mdl-color--yellow-A700 {\n  background-color: rgb(255,214,0) !important; }\n\n.mdl-color-text--amber {\n  color: rgb(255,193,7) !important; }\n\n.mdl-color--amber {\n  background-color: rgb(255,193,7) !important; }\n\n.mdl-color-text--amber-50 {\n  color: rgb(255,248,225) !important; }\n\n.mdl-color--amber-50 {\n  background-color: rgb(255,248,225) !important; }\n\n.mdl-color-text--amber-100 {\n  color: rgb(255,236,179) !important; }\n\n.mdl-color--amber-100 {\n  background-color: rgb(255,236,179) !important; }\n\n.mdl-color-text--amber-200 {\n  color: rgb(255,224,130) !important; }\n\n.mdl-color--amber-200 {\n  background-color: rgb(255,224,130) !important; }\n\n.mdl-color-text--amber-300 {\n  color: rgb(255,213,79) !important; }\n\n.mdl-color--amber-300 {\n  background-color: rgb(255,213,79) !important; }\n\n.mdl-color-text--amber-400 {\n  color: rgb(255,202,40) !important; }\n\n.mdl-color--amber-400 {\n  background-color: rgb(255,202,40) !important; }\n\n.mdl-color-text--amber-500 {\n  color: rgb(255,193,7) !important; }\n\n.mdl-color--amber-500 {\n  background-color: rgb(255,193,7) !important; }\n\n.mdl-color-text--amber-600 {\n  color: rgb(255,179,0) !important; }\n\n.mdl-color--amber-600 {\n  background-color: rgb(255,179,0) !important; }\n\n.mdl-color-text--amber-700 {\n  color: rgb(255,160,0) !important; }\n\n.mdl-color--amber-700 {\n  background-color: rgb(255,160,0) !important; }\n\n.mdl-color-text--amber-800 {\n  color: rgb(255,143,0) !important; }\n\n.mdl-color--amber-800 {\n  background-color: rgb(255,143,0) !important; }\n\n.mdl-color-text--amber-900 {\n  color: rgb(255,111,0) !important; }\n\n.mdl-color--amber-900 {\n  background-color: rgb(255,111,0) !important; }\n\n.mdl-color-text--amber-A100 {\n  color: rgb(255,229,127) !important; }\n\n.mdl-color--amber-A100 {\n  background-color: rgb(255,229,127) !important; }\n\n.mdl-color-text--amber-A200 {\n  color: rgb(255,215,64) !important; }\n\n.mdl-color--amber-A200 {\n  background-color: rgb(255,215,64) !important; }\n\n.mdl-color-text--amber-A400 {\n  color: rgb(255,196,0) !important; }\n\n.mdl-color--amber-A400 {\n  background-color: rgb(255,196,0) !important; }\n\n.mdl-color-text--amber-A700 {\n  color: rgb(255,171,0) !important; }\n\n.mdl-color--amber-A700 {\n  background-color: rgb(255,171,0) !important; }\n\n.mdl-color-text--orange {\n  color: rgb(255,152,0) !important; }\n\n.mdl-color--orange {\n  background-color: rgb(255,152,0) !important; }\n\n.mdl-color-text--orange-50 {\n  color: rgb(255,243,224) !important; }\n\n.mdl-color--orange-50 {\n  background-color: rgb(255,243,224) !important; }\n\n.mdl-color-text--orange-100 {\n  color: rgb(255,224,178) !important; }\n\n.mdl-color--orange-100 {\n  background-color: rgb(255,224,178) !important; }\n\n.mdl-color-text--orange-200 {\n  color: rgb(255,204,128) !important; }\n\n.mdl-color--orange-200 {\n  background-color: rgb(255,204,128) !important; }\n\n.mdl-color-text--orange-300 {\n  color: rgb(255,183,77) !important; }\n\n.mdl-color--orange-300 {\n  background-color: rgb(255,183,77) !important; }\n\n.mdl-color-text--orange-400 {\n  color: rgb(255,167,38) !important; }\n\n.mdl-color--orange-400 {\n  background-color: rgb(255,167,38) !important; }\n\n.mdl-color-text--orange-500 {\n  color: rgb(255,152,0) !important; }\n\n.mdl-color--orange-500 {\n  background-color: rgb(255,152,0) !important; }\n\n.mdl-color-text--orange-600 {\n  color: rgb(251,140,0) !important; }\n\n.mdl-color--orange-600 {\n  background-color: rgb(251,140,0) !important; }\n\n.mdl-color-text--orange-700 {\n  color: rgb(245,124,0) !important; }\n\n.mdl-color--orange-700 {\n  background-color: rgb(245,124,0) !important; }\n\n.mdl-color-text--orange-800 {\n  color: rgb(239,108,0) !important; }\n\n.mdl-color--orange-800 {\n  background-color: rgb(239,108,0) !important; }\n\n.mdl-color-text--orange-900 {\n  color: rgb(230,81,0) !important; }\n\n.mdl-color--orange-900 {\n  background-color: rgb(230,81,0) !important; }\n\n.mdl-color-text--orange-A100 {\n  color: rgb(255,209,128) !important; }\n\n.mdl-color--orange-A100 {\n  background-color: rgb(255,209,128) !important; }\n\n.mdl-color-text--orange-A200 {\n  color: rgb(255,171,64) !important; }\n\n.mdl-color--orange-A200 {\n  background-color: rgb(255,171,64) !important; }\n\n.mdl-color-text--orange-A400 {\n  color: rgb(255,145,0) !important; }\n\n.mdl-color--orange-A400 {\n  background-color: rgb(255,145,0) !important; }\n\n.mdl-color-text--orange-A700 {\n  color: rgb(255,109,0) !important; }\n\n.mdl-color--orange-A700 {\n  background-color: rgb(255,109,0) !important; }\n\n.mdl-color-text--deep-orange {\n  color: rgb(255,87,34) !important; }\n\n.mdl-color--deep-orange {\n  background-color: rgb(255,87,34) !important; }\n\n.mdl-color-text--deep-orange-50 {\n  color: rgb(251,233,231) !important; }\n\n.mdl-color--deep-orange-50 {\n  background-color: rgb(251,233,231) !important; }\n\n.mdl-color-text--deep-orange-100 {\n  color: rgb(255,204,188) !important; }\n\n.mdl-color--deep-orange-100 {\n  background-color: rgb(255,204,188) !important; }\n\n.mdl-color-text--deep-orange-200 {\n  color: rgb(255,171,145) !important; }\n\n.mdl-color--deep-orange-200 {\n  background-color: rgb(255,171,145) !important; }\n\n.mdl-color-text--deep-orange-300 {\n  color: rgb(255,138,101) !important; }\n\n.mdl-color--deep-orange-300 {\n  background-color: rgb(255,138,101) !important; }\n\n.mdl-color-text--deep-orange-400 {\n  color: rgb(255,112,67) !important; }\n\n.mdl-color--deep-orange-400 {\n  background-color: rgb(255,112,67) !important; }\n\n.mdl-color-text--deep-orange-500 {\n  color: rgb(255,87,34) !important; }\n\n.mdl-color--deep-orange-500 {\n  background-color: rgb(255,87,34) !important; }\n\n.mdl-color-text--deep-orange-600 {\n  color: rgb(244,81,30) !important; }\n\n.mdl-color--deep-orange-600 {\n  background-color: rgb(244,81,30) !important; }\n\n.mdl-color-text--deep-orange-700 {\n  color: rgb(230,74,25) !important; }\n\n.mdl-color--deep-orange-700 {\n  background-color: rgb(230,74,25) !important; }\n\n.mdl-color-text--deep-orange-800 {\n  color: rgb(216,67,21) !important; }\n\n.mdl-color--deep-orange-800 {\n  background-color: rgb(216,67,21) !important; }\n\n.mdl-color-text--deep-orange-900 {\n  color: rgb(191,54,12) !important; }\n\n.mdl-color--deep-orange-900 {\n  background-color: rgb(191,54,12) !important; }\n\n.mdl-color-text--deep-orange-A100 {\n  color: rgb(255,158,128) !important; }\n\n.mdl-color--deep-orange-A100 {\n  background-color: rgb(255,158,128) !important; }\n\n.mdl-color-text--deep-orange-A200 {\n  color: rgb(255,110,64) !important; }\n\n.mdl-color--deep-orange-A200 {\n  background-color: rgb(255,110,64) !important; }\n\n.mdl-color-text--deep-orange-A400 {\n  color: rgb(255,61,0) !important; }\n\n.mdl-color--deep-orange-A400 {\n  background-color: rgb(255,61,0) !important; }\n\n.mdl-color-text--deep-orange-A700 {\n  color: rgb(221,44,0) !important; }\n\n.mdl-color--deep-orange-A700 {\n  background-color: rgb(221,44,0) !important; }\n\n.mdl-color-text--brown {\n  color: rgb(121,85,72) !important; }\n\n.mdl-color--brown {\n  background-color: rgb(121,85,72) !important; }\n\n.mdl-color-text--brown-50 {\n  color: rgb(239,235,233) !important; }\n\n.mdl-color--brown-50 {\n  background-color: rgb(239,235,233) !important; }\n\n.mdl-color-text--brown-100 {\n  color: rgb(215,204,200) !important; }\n\n.mdl-color--brown-100 {\n  background-color: rgb(215,204,200) !important; }\n\n.mdl-color-text--brown-200 {\n  color: rgb(188,170,164) !important; }\n\n.mdl-color--brown-200 {\n  background-color: rgb(188,170,164) !important; }\n\n.mdl-color-text--brown-300 {\n  color: rgb(161,136,127) !important; }\n\n.mdl-color--brown-300 {\n  background-color: rgb(161,136,127) !important; }\n\n.mdl-color-text--brown-400 {\n  color: rgb(141,110,99) !important; }\n\n.mdl-color--brown-400 {\n  background-color: rgb(141,110,99) !important; }\n\n.mdl-color-text--brown-500 {\n  color: rgb(121,85,72) !important; }\n\n.mdl-color--brown-500 {\n  background-color: rgb(121,85,72) !important; }\n\n.mdl-color-text--brown-600 {\n  color: rgb(109,76,65) !important; }\n\n.mdl-color--brown-600 {\n  background-color: rgb(109,76,65) !important; }\n\n.mdl-color-text--brown-700 {\n  color: rgb(93,64,55) !important; }\n\n.mdl-color--brown-700 {\n  background-color: rgb(93,64,55) !important; }\n\n.mdl-color-text--brown-800 {\n  color: rgb(78,52,46) !important; }\n\n.mdl-color--brown-800 {\n  background-color: rgb(78,52,46) !important; }\n\n.mdl-color-text--brown-900 {\n  color: rgb(62,39,35) !important; }\n\n.mdl-color--brown-900 {\n  background-color: rgb(62,39,35) !important; }\n\n.mdl-color-text--grey {\n  color: rgb(158,158,158) !important; }\n\n.mdl-color--grey {\n  background-color: rgb(158,158,158) !important; }\n\n.mdl-color-text--grey-50 {\n  color: rgb(250,250,250) !important; }\n\n.mdl-color--grey-50 {\n  background-color: rgb(250,250,250) !important; }\n\n.mdl-color-text--grey-100 {\n  color: rgb(245,245,245) !important; }\n\n.mdl-color--grey-100 {\n  background-color: rgb(245,245,245) !important; }\n\n.mdl-color-text--grey-200 {\n  color: rgb(238,238,238) !important; }\n\n.mdl-color--grey-200 {\n  background-color: rgb(238,238,238) !important; }\n\n.mdl-color-text--grey-300 {\n  color: rgb(224,224,224) !important; }\n\n.mdl-color--grey-300 {\n  background-color: rgb(224,224,224) !important; }\n\n.mdl-color-text--grey-400 {\n  color: rgb(189,189,189) !important; }\n\n.mdl-color--grey-400 {\n  background-color: rgb(189,189,189) !important; }\n\n.mdl-color-text--grey-500 {\n  color: rgb(158,158,158) !important; }\n\n.mdl-color--grey-500 {\n  background-color: rgb(158,158,158) !important; }\n\n.mdl-color-text--grey-600 {\n  color: rgb(117,117,117) !important; }\n\n.mdl-color--grey-600 {\n  background-color: rgb(117,117,117) !important; }\n\n.mdl-color-text--grey-700 {\n  color: rgb(97,97,97) !important; }\n\n.mdl-color--grey-700 {\n  background-color: rgb(97,97,97) !important; }\n\n.mdl-color-text--grey-800 {\n  color: rgb(66,66,66) !important; }\n\n.mdl-color--grey-800 {\n  background-color: rgb(66,66,66) !important; }\n\n.mdl-color-text--grey-900 {\n  color: rgb(33,33,33) !important; }\n\n.mdl-color--grey-900 {\n  background-color: rgb(33,33,33) !important; }\n\n.mdl-color-text--blue-grey {\n  color: rgb(96,125,139) !important; }\n\n.mdl-color--blue-grey {\n  background-color: rgb(96,125,139) !important; }\n\n.mdl-color-text--blue-grey-50 {\n  color: rgb(236,239,241) !important; }\n\n.mdl-color--blue-grey-50 {\n  background-color: rgb(236,239,241) !important; }\n\n.mdl-color-text--blue-grey-100 {\n  color: rgb(207,216,220) !important; }\n\n.mdl-color--blue-grey-100 {\n  background-color: rgb(207,216,220) !important; }\n\n.mdl-color-text--blue-grey-200 {\n  color: rgb(176,190,197) !important; }\n\n.mdl-color--blue-grey-200 {\n  background-color: rgb(176,190,197) !important; }\n\n.mdl-color-text--blue-grey-300 {\n  color: rgb(144,164,174) !important; }\n\n.mdl-color--blue-grey-300 {\n  background-color: rgb(144,164,174) !important; }\n\n.mdl-color-text--blue-grey-400 {\n  color: rgb(120,144,156) !important; }\n\n.mdl-color--blue-grey-400 {\n  background-color: rgb(120,144,156) !important; }\n\n.mdl-color-text--blue-grey-500 {\n  color: rgb(96,125,139) !important; }\n\n.mdl-color--blue-grey-500 {\n  background-color: rgb(96,125,139) !important; }\n\n.mdl-color-text--blue-grey-600 {\n  color: rgb(84,110,122) !important; }\n\n.mdl-color--blue-grey-600 {\n  background-color: rgb(84,110,122) !important; }\n\n.mdl-color-text--blue-grey-700 {\n  color: rgb(69,90,100) !important; }\n\n.mdl-color--blue-grey-700 {\n  background-color: rgb(69,90,100) !important; }\n\n.mdl-color-text--blue-grey-800 {\n  color: rgb(55,71,79) !important; }\n\n.mdl-color--blue-grey-800 {\n  background-color: rgb(55,71,79) !important; }\n\n.mdl-color-text--blue-grey-900 {\n  color: rgb(38,50,56) !important; }\n\n.mdl-color--blue-grey-900 {\n  background-color: rgb(38,50,56) !important; }\n\n.mdl-color--black {\n  background-color: rgb(0,0,0) !important; }\n\n.mdl-color-text--black {\n  color: rgb(0,0,0) !important; }\n\n.mdl-color--white {\n  background-color: rgb(255,255,255) !important; }\n\n.mdl-color-text--white {\n  color: rgb(255,255,255) !important; }\n\n.mdl-color--primary {\n  background-color: rgb(63,81,181) !important; }\n\n.mdl-color--primary-contrast {\n  background-color: rgb(255,255,255) !important; }\n\n.mdl-color--primary-dark {\n  background-color: rgb(48,63,159) !important; }\n\n.mdl-color--accent {\n  background-color: rgb(255,64,129) !important; }\n\n.mdl-color--accent-contrast {\n  background-color: rgb(255,255,255) !important; }\n\n.mdl-color-text--primary {\n  color: rgb(63,81,181) !important; }\n\n.mdl-color-text--primary-contrast {\n  color: rgb(255,255,255) !important; }\n\n.mdl-color-text--primary-dark {\n  color: rgb(48,63,159) !important; }\n\n.mdl-color-text--accent {\n  color: rgb(255,64,129) !important; }\n\n.mdl-color-text--accent-contrast {\n  color: rgb(255,255,255) !important; }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n.mdl-ripple {\n  background: rgb(0,0,0);\n  border-radius: 50%;\n  height: 50px;\n  left: 0;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 50px;\n  overflow: hidden; }\n  .mdl-ripple.is-animating {\n    transition: width 0.3s cubic-bezier(0, 0, 0.2, 1), height 0.3s cubic-bezier(0, 0, 0.2, 1), opacity 0.6s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.3s cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1), width 0.3s cubic-bezier(0, 0, 0.2, 1), height 0.3s cubic-bezier(0, 0, 0.2, 1), opacity 0.6s cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1), width 0.3s cubic-bezier(0, 0, 0.2, 1), height 0.3s cubic-bezier(0, 0, 0.2, 1), opacity 0.6s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.3s cubic-bezier(0, 0, 0.2, 1); }\n  .mdl-ripple.is-visible {\n    opacity: 0.3; }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n.mdl-animation--default {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n\n.mdl-animation--fast-out-slow-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n\n.mdl-animation--linear-out-slow-in {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1); }\n\n.mdl-animation--fast-out-linear-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1); }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n.mdl-badge {\n  position: relative;\n  white-space: nowrap;\n  margin-right: 24px; }\n  .mdl-badge:not([data-badge]) {\n    margin-right: auto; }\n  .mdl-badge[data-badge]:after {\n    content: attr(data-badge);\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-align-content: center;\n        -ms-flex-line-pack: center;\n            align-content: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    position: absolute;\n    top: -11px;\n    right: -24px;\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-weight: 600;\n    font-size: 12px;\n    width: 22px;\n    height: 22px;\n    border-radius: 50%;\n    background: rgb(255,64,129);\n    color: rgb(255,255,255); }\n    .mdl-button .mdl-badge[data-badge]:after {\n      top: -10px;\n      right: -5px; }\n  .mdl-badge.mdl-badge--no-background[data-badge]:after {\n    color: rgb(255,64,129);\n    background: rgba(255,255,255,0.2);\n    box-shadow: 0 0 1px gray; }\n  .mdl-badge.mdl-badge--overlap {\n    margin-right: 10px; }\n    .mdl-badge.mdl-badge--overlap:after {\n      right: -10px; }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-button {\n  background: transparent;\n  border: none;\n  border-radius: 2px;\n  color: rgb(0,0,0);\n  position: relative;\n  height: 36px;\n  margin: 0;\n  min-width: 64px;\n  padding: 0 16px;\n  display: inline-block;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  line-height: 1;\n  letter-spacing: 0;\n  overflow: hidden;\n  will-change: box-shadow;\n  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  line-height: 36px;\n  vertical-align: middle; }\n  .mdl-button::-moz-focus-inner {\n    border: 0; }\n  .mdl-button:hover {\n    background-color: rgba(158,158,158, 0.20); }\n  .mdl-button:focus:not(:active) {\n    background-color: rgba(0,0,0, 0.12); }\n  .mdl-button:active {\n    background-color: rgba(158,158,158, 0.40); }\n  .mdl-button.mdl-button--colored {\n    color: rgb(63,81,181); }\n    .mdl-button.mdl-button--colored:focus:not(:active) {\n      background-color: rgba(0,0,0, 0.12); }\n\ninput.mdl-button[type=\"submit\"] {\n  -webkit-appearance: none; }\n\n.mdl-button--raised {\n  background: rgba(158,158,158, 0.20);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n  .mdl-button--raised:active {\n    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n    background-color: rgba(158,158,158, 0.40); }\n  .mdl-button--raised:focus:not(:active) {\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.18), 0 8px 16px rgba(0, 0, 0, 0.36);\n    background-color: rgba(158,158,158, 0.40); }\n  .mdl-button--raised.mdl-button--colored {\n    background: rgb(63,81,181);\n    color: rgb(255,255,255); }\n    .mdl-button--raised.mdl-button--colored:hover {\n      background-color: rgb(63,81,181); }\n    .mdl-button--raised.mdl-button--colored:active {\n      background-color: rgb(63,81,181); }\n    .mdl-button--raised.mdl-button--colored:focus:not(:active) {\n      background-color: rgb(63,81,181); }\n    .mdl-button--raised.mdl-button--colored .mdl-ripple {\n      background: rgb(255,255,255); }\n\n.mdl-button--fab {\n  border-radius: 50%;\n  font-size: 24px;\n  height: 56px;\n  margin: auto;\n  min-width: 56px;\n  width: 56px;\n  padding: 0;\n  overflow: hidden;\n  background: rgba(158,158,158, 0.20);\n  box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);\n  position: relative;\n  line-height: normal; }\n  .mdl-button--fab .material-icons {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-12px, -12px);\n            transform: translate(-12px, -12px);\n    line-height: 24px;\n    width: 24px; }\n  .mdl-button--fab.mdl-button--mini-fab {\n    height: 40px;\n    min-width: 40px;\n    width: 40px; }\n  .mdl-button--fab .mdl-button__ripple-container {\n    border-radius: 50%;\n    -webkit-mask-image: -webkit-radial-gradient(circle, white, black); }\n  .mdl-button--fab:active {\n    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n    background-color: rgba(158,158,158, 0.40); }\n  .mdl-button--fab:focus:not(:active) {\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.18), 0 8px 16px rgba(0, 0, 0, 0.36);\n    background-color: rgba(158,158,158, 0.40); }\n  .mdl-button--fab.mdl-button--colored {\n    background: rgb(255,64,129);\n    color: rgb(255,255,255); }\n    .mdl-button--fab.mdl-button--colored:hover {\n      background-color: rgb(255,64,129); }\n    .mdl-button--fab.mdl-button--colored:focus:not(:active) {\n      background-color: rgb(255,64,129); }\n    .mdl-button--fab.mdl-button--colored:active {\n      background-color: rgb(255,64,129); }\n    .mdl-button--fab.mdl-button--colored .mdl-ripple {\n      background: rgb(255,255,255); }\n\n.mdl-button--icon {\n  border-radius: 50%;\n  font-size: 24px;\n  height: 32px;\n  margin-left: 0;\n  margin-right: 0;\n  min-width: 32px;\n  width: 32px;\n  padding: 0;\n  overflow: hidden;\n  color: inherit;\n  line-height: normal; }\n  .mdl-button--icon .material-icons {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-12px, -12px);\n            transform: translate(-12px, -12px);\n    line-height: 24px;\n    width: 24px; }\n  .mdl-button--icon.mdl-button--mini-icon {\n    height: 24px;\n    min-width: 24px;\n    width: 24px; }\n    .mdl-button--icon.mdl-button--mini-icon .material-icons {\n      top: 0px;\n      left: 0px; }\n  .mdl-button--icon .mdl-button__ripple-container {\n    border-radius: 50%;\n    -webkit-mask-image: -webkit-radial-gradient(circle, white, black); }\n\n.mdl-button__ripple-container {\n  display: block;\n  height: 100%;\n  left: 0px;\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  z-index: 0;\n  overflow: hidden; }\n  .mdl-button[disabled] .mdl-button__ripple-container .mdl-ripple,\n  .mdl-button.mdl-button--disabled .mdl-button__ripple-container .mdl-ripple {\n    background-color: transparent; }\n\n.mdl-button--primary.mdl-button--primary {\n  color: rgb(63,81,181); }\n  .mdl-button--primary.mdl-button--primary .mdl-ripple {\n    background: rgb(255,255,255); }\n  .mdl-button--primary.mdl-button--primary.mdl-button--raised, .mdl-button--primary.mdl-button--primary.mdl-button--fab {\n    color: rgb(255,255,255);\n    background-color: rgb(63,81,181); }\n\n.mdl-button--accent.mdl-button--accent {\n  color: rgb(255,64,129); }\n  .mdl-button--accent.mdl-button--accent .mdl-ripple {\n    background: rgb(255,255,255); }\n  .mdl-button--accent.mdl-button--accent.mdl-button--raised, .mdl-button--accent.mdl-button--accent.mdl-button--fab {\n    color: rgb(255,255,255);\n    background-color: rgb(255,64,129); }\n\n.mdl-button[disabled][disabled], .mdl-button.mdl-button--disabled.mdl-button--disabled {\n  color: rgba(0,0,0, 0.26);\n  cursor: default;\n  background-color: transparent; }\n\n.mdl-button--fab[disabled][disabled], .mdl-button--fab.mdl-button--disabled.mdl-button--disabled {\n  background-color: rgba(0,0,0, 0.12);\n  color: rgba(0,0,0, 0.26); }\n\n.mdl-button--raised[disabled][disabled], .mdl-button--raised.mdl-button--disabled.mdl-button--disabled {\n  background-color: rgba(0,0,0, 0.12);\n  color: rgba(0,0,0, 0.26);\n  box-shadow: none; }\n\n.mdl-button--colored[disabled][disabled], .mdl-button--colored.mdl-button--disabled.mdl-button--disabled {\n  color: rgba(0,0,0, 0.26); }\n\n.mdl-button .material-icons {\n  vertical-align: middle; }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n.mdl-card {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  font-size: 16px;\n  font-weight: 400;\n  min-height: 200px;\n  overflow: hidden;\n  width: 330px;\n  z-index: 1;\n  position: relative;\n  background: rgb(255,255,255);\n  border-radius: 2px;\n  box-sizing: border-box; }\n\n.mdl-card__media {\n  background-color: rgb(255,64,129);\n  background-repeat: repeat;\n  background-position: 50% 50%;\n  background-size: cover;\n  background-origin: padding-box;\n  background-attachment: scroll;\n  box-sizing: border-box; }\n\n.mdl-card__title {\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: rgb(0,0,0);\n  display: block;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: stretch;\n      -ms-flex-pack: stretch;\n          justify-content: stretch;\n  line-height: normal;\n  padding: 16px 16px;\n  -webkit-perspective-origin: 165px 56px;\n          perspective-origin: 165px 56px;\n  -webkit-transform-origin: 165px 56px;\n          transform-origin: 165px 56px;\n  box-sizing: border-box; }\n  .mdl-card__title.mdl-card--border {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n.mdl-card__title-text {\n  -webkit-align-self: flex-end;\n      -ms-flex-item-align: end;\n          align-self: flex-end;\n  color: inherit;\n  display: block;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 24px;\n  font-weight: 300;\n  line-height: normal;\n  overflow: hidden;\n  -webkit-transform-origin: 149px 48px;\n          transform-origin: 149px 48px;\n  margin: 0; }\n\n.mdl-card__subtitle-text {\n  font-size: 14px;\n  color: rgba(0,0,0, 0.54);\n  margin: 0; }\n\n.mdl-card__supporting-text {\n  color: rgba(0,0,0, 0.54);\n  font-size: 1rem;\n  line-height: 18px;\n  overflow: hidden;\n  padding: 16px 16px;\n  width: 90%; }\n  .mdl-card__supporting-text.mdl-card--border {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n.mdl-card__actions {\n  font-size: 16px;\n  line-height: normal;\n  width: 100%;\n  background-color: transparent;\n  padding: 8px;\n  box-sizing: border-box; }\n  .mdl-card__actions.mdl-card--border {\n    border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\n.mdl-card--expand {\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n.mdl-card__menu {\n  position: absolute;\n  right: 16px;\n  top: 16px; }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-checkbox {\n  position: relative;\n  z-index: 1;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 24px;\n  margin: 0;\n  padding: 0; }\n  .mdl-checkbox.is-upgraded {\n    padding-left: 24px; }\n\n.mdl-checkbox__input {\n  line-height: 24px; }\n  .mdl-checkbox.is-upgraded .mdl-checkbox__input {\n    position: absolute;\n    width: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n    -ms-appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    border: none; }\n\n.mdl-checkbox__box-outline {\n  position: absolute;\n  top: 3px;\n  left: 0;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 16px;\n  height: 16px;\n  margin: 0;\n  cursor: pointer;\n  overflow: hidden;\n  border: 2px solid rgba(0,0,0, 0.54);\n  border-radius: 2px;\n  z-index: 2; }\n  .mdl-checkbox.is-checked .mdl-checkbox__box-outline {\n    border: 2px solid rgb(63,81,181); }\n  fieldset[disabled] .mdl-checkbox .mdl-checkbox__box-outline,\n  .mdl-checkbox.is-disabled .mdl-checkbox__box-outline {\n    border: 2px solid rgba(0,0,0, 0.26);\n    cursor: auto; }\n\n.mdl-checkbox__focus-helper {\n  position: absolute;\n  top: 3px;\n  left: 0;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: transparent; }\n  .mdl-checkbox.is-focused .mdl-checkbox__focus-helper {\n    box-shadow: 0 0 0px 8px rgba(0, 0, 0, 0.1);\n    background-color: rgba(0, 0, 0, 0.1); }\n  .mdl-checkbox.is-focused.is-checked .mdl-checkbox__focus-helper {\n    box-shadow: 0 0 0px 8px rgba(63,81,181, 0.26);\n    background-color: rgba(63,81,181, 0.26); }\n\n.mdl-checkbox__tick-outline {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  -webkit-mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg==\");\n          mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg==\");\n  background: transparent;\n  transition-duration: 0.28s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-property: background; }\n  .mdl-checkbox.is-checked .mdl-checkbox__tick-outline {\n    background: rgb(63,81,181) url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K\"); }\n  fieldset[disabled] .mdl-checkbox.is-checked .mdl-checkbox__tick-outline,\n  .mdl-checkbox.is-checked.is-disabled .mdl-checkbox__tick-outline {\n    background: rgba(0,0,0, 0.26) url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K\"); }\n\n.mdl-checkbox__label {\n  position: relative;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 24px;\n  margin: 0; }\n  fieldset[disabled] .mdl-checkbox .mdl-checkbox__label,\n  .mdl-checkbox.is-disabled .mdl-checkbox__label {\n    color: rgba(0,0,0, 0.26);\n    cursor: auto; }\n\n.mdl-checkbox__ripple-container {\n  position: absolute;\n  z-index: 2;\n  top: -6px;\n  left: -10px;\n  box-sizing: border-box;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  cursor: pointer;\n  overflow: hidden;\n  -webkit-mask-image: -webkit-radial-gradient(circle, white, black); }\n  .mdl-checkbox__ripple-container .mdl-ripple {\n    background: rgb(63,81,181); }\n  fieldset[disabled] .mdl-checkbox .mdl-checkbox__ripple-container,\n  .mdl-checkbox.is-disabled .mdl-checkbox__ripple-container {\n    cursor: auto; }\n  fieldset[disabled] .mdl-checkbox .mdl-checkbox__ripple-container .mdl-ripple,\n  .mdl-checkbox.is-disabled .mdl-checkbox__ripple-container .mdl-ripple {\n    background: transparent; }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-chip {\n  height: 32px;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  line-height: 32px;\n  padding: 0 12px;\n  border: 0;\n  border-radius: 16px;\n  background-color: #dedede;\n  display: inline-block;\n  color: rgba(0,0,0, 0.87);\n  margin: 2px 0;\n  font-size: 0;\n  white-space: nowrap; }\n  .mdl-chip__text {\n    font-size: 13px;\n    vertical-align: middle;\n    display: inline-block; }\n  .mdl-chip__action {\n    height: 24px;\n    width: 24px;\n    background: transparent;\n    opacity: 0.54;\n    display: inline-block;\n    cursor: pointer;\n    text-align: center;\n    vertical-align: middle;\n    padding: 0;\n    margin: 0 0 0 4px;\n    font-size: 13px;\n    text-decoration: none;\n    color: rgba(0,0,0, 0.87);\n    border: none;\n    outline: none;\n    overflow: hidden; }\n  .mdl-chip__contact {\n    height: 32px;\n    width: 32px;\n    border-radius: 16px;\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 8px;\n    overflow: hidden;\n    text-align: center;\n    font-size: 18px;\n    line-height: 32px; }\n  .mdl-chip:focus {\n    outline: 0;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n  .mdl-chip:active {\n    background-color: #d6d6d6; }\n  .mdl-chip--deletable {\n    padding-right: 4px; }\n  .mdl-chip--contact {\n    padding-left: 0; }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-data-table {\n  position: relative;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-collapse: collapse;\n  white-space: nowrap;\n  font-size: 13px;\n  background-color: rgb(255,255,255); }\n  .mdl-data-table thead {\n    padding-bottom: 3px; }\n    .mdl-data-table thead .mdl-data-table__select {\n      margin-top: 0; }\n  .mdl-data-table tbody tr {\n    position: relative;\n    height: 48px;\n    transition-duration: 0.28s;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-property: background-color; }\n    .mdl-data-table tbody tr.is-selected {\n      background-color: #e0e0e0; }\n    .mdl-data-table tbody tr:hover {\n      background-color: #eeeeee; }\n  .mdl-data-table td, .mdl-data-table th {\n    padding: 0 18px 12px 18px;\n    text-align: right; }\n    .mdl-data-table td:first-of-type, .mdl-data-table th:first-of-type {\n      padding-left: 24px; }\n    .mdl-data-table td:last-of-type, .mdl-data-table th:last-of-type {\n      padding-right: 24px; }\n  .mdl-data-table td {\n    position: relative;\n    vertical-align: middle;\n    height: 48px;\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    padding-top: 12px;\n    box-sizing: border-box; }\n    .mdl-data-table td .mdl-data-table__select {\n      vertical-align: middle; }\n  .mdl-data-table th {\n    position: relative;\n    vertical-align: bottom;\n    text-overflow: ellipsis;\n    font-size: 14px;\n    font-weight: bold;\n    line-height: 24px;\n    letter-spacing: 0;\n    height: 48px;\n    font-size: 12px;\n    color: rgba(0, 0, 0, 0.54);\n    padding-bottom: 8px;\n    box-sizing: border-box; }\n    .mdl-data-table th.mdl-data-table__header--sorted-ascending, .mdl-data-table th.mdl-data-table__header--sorted-descending {\n      color: rgba(0, 0, 0, 0.87); }\n      .mdl-data-table th.mdl-data-table__header--sorted-ascending:before, .mdl-data-table th.mdl-data-table__header--sorted-descending:before {\n        font-family: 'Material Icons';\n        font-weight: normal;\n        font-style: normal;\n        font-size: 24px;\n        line-height: 1;\n        letter-spacing: normal;\n        text-transform: none;\n        display: inline-block;\n        word-wrap: normal;\n        -moz-font-feature-settings: 'liga';\n             font-feature-settings: 'liga';\n        -webkit-font-feature-settings: 'liga';\n        -webkit-font-smoothing: antialiased;\n        font-size: 16px;\n        content: \"\\E5D8\";\n        margin-right: 5px;\n        vertical-align: sub; }\n      .mdl-data-table th.mdl-data-table__header--sorted-ascending:hover, .mdl-data-table th.mdl-data-table__header--sorted-descending:hover {\n        cursor: pointer; }\n        .mdl-data-table th.mdl-data-table__header--sorted-ascending:hover:before, .mdl-data-table th.mdl-data-table__header--sorted-descending:hover:before {\n          color: rgba(0, 0, 0, 0.26); }\n    .mdl-data-table th.mdl-data-table__header--sorted-descending:before {\n      content: \"\\E5DB\"; }\n\n.mdl-data-table__select {\n  width: 16px; }\n\n.mdl-data-table__cell--non-numeric.mdl-data-table__cell--non-numeric {\n  text-align: left; }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-dialog {\n  border: none;\n  box-shadow: 0 9px 46px 8px rgba(0, 0, 0, 0.14), 0 11px 15px -7px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.2);\n  width: 280px; }\n  .mdl-dialog__title {\n    padding: 24px 24px 0;\n    margin: 0;\n    font-size: 2.5rem; }\n  .mdl-dialog__actions {\n    padding: 8px 8px 8px 24px;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: row-reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap; }\n    .mdl-dialog__actions > * {\n      margin-right: 8px;\n      height: 36px; }\n      .mdl-dialog__actions > *:first-child {\n        margin-right: 0; }\n    .mdl-dialog__actions--full-width {\n      padding: 0 0 8px 0; }\n      .mdl-dialog__actions--full-width > * {\n        height: 48px;\n        -webkit-flex: 0 0 100%;\n            -ms-flex: 0 0 100%;\n                flex: 0 0 100%;\n        padding-right: 16px;\n        margin-right: 0;\n        text-align: right; }\n  .mdl-dialog__content {\n    padding: 20px 24px 24px 24px;\n    color: rgba(0,0,0, 0.54); }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-mega-footer {\n  padding: 16px 40px;\n  color: rgb(158,158,158);\n  background-color: rgb(66,66,66); }\n\n.mdl-mega-footer--top-section:after,\n.mdl-mega-footer--middle-section:after,\n.mdl-mega-footer--bottom-section:after,\n.mdl-mega-footer__top-section:after,\n.mdl-mega-footer__middle-section:after,\n.mdl-mega-footer__bottom-section:after {\n  content: '';\n  display: block;\n  clear: both; }\n\n.mdl-mega-footer--left-section,\n.mdl-mega-footer__left-section {\n  margin-bottom: 16px; }\n\n.mdl-mega-footer--right-section,\n.mdl-mega-footer__right-section {\n  margin-bottom: 16px; }\n\n.mdl-mega-footer--right-section a,\n.mdl-mega-footer__right-section a {\n  display: block;\n  margin-bottom: 16px;\n  color: inherit;\n  text-decoration: none; }\n\n@media screen and (min-width: 760px) {\n  .mdl-mega-footer--left-section,\n  .mdl-mega-footer__left-section {\n    float: left; }\n  .mdl-mega-footer--right-section,\n  .mdl-mega-footer__right-section {\n    float: right; }\n  .mdl-mega-footer--right-section a,\n  .mdl-mega-footer__right-section a {\n    display: inline-block;\n    margin-left: 16px;\n    line-height: 36px;\n    vertical-align: middle; } }\n\n.mdl-mega-footer--social-btn,\n.mdl-mega-footer__social-btn {\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  margin: 0;\n  background-color: rgb(158,158,158);\n  border: none; }\n\n.mdl-mega-footer--drop-down-section,\n.mdl-mega-footer__drop-down-section {\n  display: block;\n  position: relative; }\n\n@media screen and (min-width: 760px) {\n  .mdl-mega-footer--drop-down-section,\n  .mdl-mega-footer__drop-down-section {\n    width: 33%; }\n  .mdl-mega-footer--drop-down-section:nth-child(1),\n  .mdl-mega-footer--drop-down-section:nth-child(2),\n  .mdl-mega-footer__drop-down-section:nth-child(1),\n  .mdl-mega-footer__drop-down-section:nth-child(2) {\n    float: left; }\n  .mdl-mega-footer--drop-down-section:nth-child(3),\n  .mdl-mega-footer__drop-down-section:nth-child(3) {\n    float: right; }\n    .mdl-mega-footer--drop-down-section:nth-child(3):after,\n    .mdl-mega-footer__drop-down-section:nth-child(3):after {\n      clear: right; }\n  .mdl-mega-footer--drop-down-section:nth-child(4),\n  .mdl-mega-footer__drop-down-section:nth-child(4) {\n    clear: right;\n    float: right; }\n  .mdl-mega-footer--middle-section:after,\n  .mdl-mega-footer__middle-section:after {\n    content: '';\n    display: block;\n    clear: both; }\n  .mdl-mega-footer--bottom-section,\n  .mdl-mega-footer__bottom-section {\n    padding-top: 0; } }\n\n@media screen and (min-width: 1024px) {\n  .mdl-mega-footer--drop-down-section,\n  .mdl-mega-footer--drop-down-section:nth-child(3),\n  .mdl-mega-footer--drop-down-section:nth-child(4),\n  .mdl-mega-footer__drop-down-section,\n  .mdl-mega-footer__drop-down-section:nth-child(3),\n  .mdl-mega-footer__drop-down-section:nth-child(4) {\n    width: 24%;\n    float: left; } }\n\n.mdl-mega-footer--heading-checkbox,\n.mdl-mega-footer__heading-checkbox {\n  position: absolute;\n  width: 100%;\n  height: 55.8px;\n  padding: 32px;\n  margin: 0;\n  margin-top: -16px;\n  cursor: pointer;\n  z-index: 1;\n  opacity: 0; }\n  .mdl-mega-footer--heading-checkbox + .mdl-mega-footer--heading:after,\n  .mdl-mega-footer--heading-checkbox + .mdl-mega-footer__heading:after,\n  .mdl-mega-footer__heading-checkbox + .mdl-mega-footer--heading:after,\n  .mdl-mega-footer__heading-checkbox + .mdl-mega-footer__heading:after {\n    font-family: 'Material Icons';\n    content: '\\E5CE'; }\n\n.mdl-mega-footer--heading-checkbox:checked ~ .mdl-mega-footer--link-list,\n.mdl-mega-footer--heading-checkbox:checked ~ .mdl-mega-footer__link-list,\n.mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer--heading + .mdl-mega-footer--link-list,\n.mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer__heading + .mdl-mega-footer__link-list,\n.mdl-mega-footer__heading-checkbox:checked ~ .mdl-mega-footer--link-list,\n.mdl-mega-footer__heading-checkbox:checked ~ .mdl-mega-footer__link-list,\n.mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer--heading + .mdl-mega-footer--link-list,\n.mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer__heading + .mdl-mega-footer__link-list {\n  display: none; }\n\n.mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer--heading:after,\n.mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer__heading:after,\n.mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer--heading:after,\n.mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer__heading:after {\n  font-family: 'Material Icons';\n  content: '\\E5CF'; }\n\n.mdl-mega-footer--heading,\n.mdl-mega-footer__heading {\n  position: relative;\n  width: 100%;\n  padding-right: 39.8px;\n  margin-bottom: 16px;\n  box-sizing: border-box;\n  font-size: 14px;\n  line-height: 23.8px;\n  font-weight: 500;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  color: rgb(224,224,224); }\n\n.mdl-mega-footer--heading:after,\n.mdl-mega-footer__heading:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: block;\n  width: 23.8px;\n  height: 23.8px;\n  background-size: cover; }\n\n.mdl-mega-footer--link-list,\n.mdl-mega-footer__link-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin-bottom: 32px; }\n  .mdl-mega-footer--link-list:after,\n  .mdl-mega-footer__link-list:after {\n    clear: both;\n    display: block;\n    content: ''; }\n\n.mdl-mega-footer--link-list li,\n.mdl-mega-footer__link-list li {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0;\n  line-height: 20px; }\n\n.mdl-mega-footer--link-list a,\n.mdl-mega-footer__link-list a {\n  color: inherit;\n  text-decoration: none;\n  white-space: nowrap; }\n\n@media screen and (min-width: 760px) {\n  .mdl-mega-footer--heading-checkbox,\n  .mdl-mega-footer__heading-checkbox {\n    display: none; }\n    .mdl-mega-footer--heading-checkbox + .mdl-mega-footer--heading:after,\n    .mdl-mega-footer--heading-checkbox + .mdl-mega-footer__heading:after,\n    .mdl-mega-footer__heading-checkbox + .mdl-mega-footer--heading:after,\n    .mdl-mega-footer__heading-checkbox + .mdl-mega-footer__heading:after {\n      content: ''; }\n  .mdl-mega-footer--heading-checkbox:checked ~ .mdl-mega-footer--link-list,\n  .mdl-mega-footer--heading-checkbox:checked ~ .mdl-mega-footer__link-list,\n  .mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer__heading + .mdl-mega-footer__link-list,\n  .mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer--heading + .mdl-mega-footer--link-list,\n  .mdl-mega-footer__heading-checkbox:checked ~ .mdl-mega-footer--link-list,\n  .mdl-mega-footer__heading-checkbox:checked ~ .mdl-mega-footer__link-list,\n  .mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer__heading + .mdl-mega-footer__link-list,\n  .mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer--heading + .mdl-mega-footer--link-list {\n    display: block; }\n  .mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer--heading:after,\n  .mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer__heading:after,\n  .mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer--heading:after,\n  .mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer__heading:after {\n    content: ''; } }\n\n.mdl-mega-footer--bottom-section,\n.mdl-mega-footer__bottom-section {\n  padding-top: 16px;\n  margin-bottom: 16px; }\n\n.mdl-logo {\n  margin-bottom: 16px;\n  color: white; }\n\n.mdl-mega-footer--bottom-section .mdl-mega-footer--link-list li,\n.mdl-mega-footer__bottom-section .mdl-mega-footer__link-list li {\n  float: left;\n  margin-bottom: 0;\n  margin-right: 16px; }\n\n@media screen and (min-width: 760px) {\n  .mdl-logo {\n    float: left;\n    margin-bottom: 0;\n    margin-right: 16px; } }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n.mdl-mini-footer {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 32px 16px;\n  color: rgb(158,158,158);\n  background-color: rgb(66,66,66); }\n  .mdl-mini-footer:after {\n    content: '';\n    display: block; }\n  .mdl-mini-footer .mdl-logo {\n    line-height: 36px; }\n\n.mdl-mini-footer--link-list,\n.mdl-mini-footer__link-list {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row nowrap;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n  .mdl-mini-footer--link-list li,\n  .mdl-mini-footer__link-list li {\n    margin-bottom: 0;\n    margin-right: 16px; }\n    @media screen and (min-width: 760px) {\n      .mdl-mini-footer--link-list li,\n      .mdl-mini-footer__link-list li {\n        line-height: 36px; } }\n  .mdl-mini-footer--link-list a,\n  .mdl-mini-footer__link-list a {\n    color: inherit;\n    text-decoration: none;\n    white-space: nowrap; }\n\n.mdl-mini-footer--left-section,\n.mdl-mini-footer__left-section {\n  display: inline-block;\n  -webkit-order: 0;\n      -ms-flex-order: 0;\n          order: 0; }\n\n.mdl-mini-footer--right-section,\n.mdl-mini-footer__right-section {\n  display: inline-block;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1; }\n\n.mdl-mini-footer--social-btn,\n.mdl-mini-footer__social-btn {\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  margin: 0;\n  background-color: rgb(158,158,158);\n  border: none; }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n.mdl-icon-toggle {\n  position: relative;\n  z-index: 1;\n  vertical-align: middle;\n  display: inline-block;\n  height: 32px;\n  margin: 0;\n  padding: 0; }\n\n.mdl-icon-toggle__input {\n  line-height: 32px; }\n  .mdl-icon-toggle.is-upgraded .mdl-icon-toggle__input {\n    position: absolute;\n    width: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n    -ms-appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    border: none; }\n\n.mdl-icon-toggle__label {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  height: 32px;\n  width: 32px;\n  min-width: 32px;\n  color: rgb(97,97,97);\n  border-radius: 50%;\n  padding: 0;\n  margin-left: 0;\n  margin-right: 0;\n  text-align: center;\n  background-color: transparent;\n  will-change: background-color;\n  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1); }\n  .mdl-icon-toggle__label.material-icons {\n    line-height: 32px;\n    font-size: 24px; }\n  .mdl-icon-toggle.is-checked .mdl-icon-toggle__label {\n    color: rgb(63,81,181); }\n  .mdl-icon-toggle.is-disabled .mdl-icon-toggle__label {\n    color: rgba(0,0,0, 0.26);\n    cursor: auto;\n    transition: none; }\n  .mdl-icon-toggle.is-focused .mdl-icon-toggle__label {\n    background-color: rgba(0,0,0, 0.12); }\n  .mdl-icon-toggle.is-focused.is-checked .mdl-icon-toggle__label {\n    background-color: rgba(63,81,181, 0.26); }\n\n.mdl-icon-toggle__ripple-container {\n  position: absolute;\n  z-index: 2;\n  top: -2px;\n  left: -2px;\n  box-sizing: border-box;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  cursor: pointer;\n  overflow: hidden;\n  -webkit-mask-image: -webkit-radial-gradient(circle, white, black); }\n  .mdl-icon-toggle__ripple-container .mdl-ripple {\n    background: rgb(97,97,97); }\n  .mdl-icon-toggle.is-disabled .mdl-icon-toggle__ripple-container {\n    cursor: auto; }\n  .mdl-icon-toggle.is-disabled .mdl-icon-toggle__ripple-container .mdl-ripple {\n    background: transparent; }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-list {\n  display: block;\n  padding: 8px 0;\n  list-style: none; }\n\n.mdl-list__item {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0.04em;\n  line-height: 1;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 48px;\n  box-sizing: border-box;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 16px;\n  cursor: default;\n  color: rgba(0,0,0, 0.87);\n  overflow: hidden; }\n  .mdl-list__item .mdl-list__item-primary-content {\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-flex-grow: 2;\n        -ms-flex-positive: 2;\n            flex-grow: 2;\n    text-decoration: none;\n    box-sizing: border-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .mdl-list__item .mdl-list__item-primary-content .mdl-list__item-icon {\n      margin-right: 32px; }\n    .mdl-list__item .mdl-list__item-primary-content .mdl-list__item-avatar {\n      margin-right: 16px; }\n  .mdl-list__item .mdl-list__item-secondary-content {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: column;\n        -ms-flex-flow: column;\n            flex-flow: column;\n    -webkit-align-items: flex-end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    margin-left: 16px; }\n    .mdl-list__item .mdl-list__item-secondary-content .mdl-list__item-secondary-action label {\n      display: inline; }\n    .mdl-list__item .mdl-list__item-secondary-content .mdl-list__item-secondary-info {\n      font-size: 12px;\n      font-weight: 400;\n      line-height: 1;\n      letter-spacing: 0;\n      color: rgba(0,0,0, 0.54); }\n    .mdl-list__item .mdl-list__item-secondary-content .mdl-list__item-sub-header {\n      padding: 0 0 0 16px; }\n\n.mdl-list__item-icon,\n.mdl-list__item-icon.material-icons {\n  height: 24px;\n  width: 24px;\n  font-size: 24px;\n  box-sizing: border-box;\n  color: rgb(117,117,117); }\n\n.mdl-list__item-avatar,\n.mdl-list__item-avatar.material-icons {\n  height: 40px;\n  width: 40px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  background-color: rgb(117,117,117);\n  font-size: 40px;\n  color: white; }\n\n.mdl-list__item--two-line {\n  height: 72px; }\n  .mdl-list__item--two-line .mdl-list__item-primary-content {\n    height: 36px;\n    line-height: 20px;\n    display: block; }\n    .mdl-list__item--two-line .mdl-list__item-primary-content .mdl-list__item-avatar {\n      float: left; }\n    .mdl-list__item--two-line .mdl-list__item-primary-content .mdl-list__item-icon {\n      float: left;\n      margin-top: 6px; }\n    .mdl-list__item--two-line .mdl-list__item-primary-content .mdl-list__item-secondary-content {\n      height: 36px; }\n    .mdl-list__item--two-line .mdl-list__item-primary-content .mdl-list__item-sub-title {\n      font-size: 14px;\n      font-weight: 400;\n      line-height: 24px;\n      letter-spacing: 0;\n      line-height: 18px;\n      color: rgba(0,0,0, 0.54);\n      display: block;\n      padding: 0; }\n\n.mdl-list__item--three-line {\n  height: 88px; }\n  .mdl-list__item--three-line .mdl-list__item-primary-content {\n    height: 52px;\n    line-height: 20px;\n    display: block; }\n    .mdl-list__item--three-line .mdl-list__item-primary-content .mdl-list__item-avatar,\n    .mdl-list__item--three-line .mdl-list__item-primary-content .mdl-list__item-icon {\n      float: left; }\n  .mdl-list__item--three-line .mdl-list__item-secondary-content {\n    height: 52px; }\n  .mdl-list__item--three-line .mdl-list__item-text-body {\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 24px;\n    letter-spacing: 0;\n    line-height: 18px;\n    height: 52px;\n    color: rgba(0,0,0, 0.54);\n    display: block;\n    padding: 0; }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-menu__container {\n  display: block;\n  margin: 0;\n  padding: 0;\n  border: none;\n  position: absolute;\n  overflow: visible;\n  height: 0;\n  width: 0;\n  visibility: hidden;\n  z-index: -1; }\n  .mdl-menu__container.is-visible, .mdl-menu__container.is-animating {\n    z-index: 999;\n    visibility: visible; }\n\n.mdl-menu__outline {\n  display: block;\n  background: rgb(255,255,255);\n  margin: 0;\n  padding: 0;\n  border: none;\n  border-radius: 2px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  opacity: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  will-change: transform;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: -1; }\n  .mdl-menu__container.is-visible .mdl-menu__outline {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    z-index: 999; }\n  .mdl-menu__outline.mdl-menu--bottom-right {\n    -webkit-transform-origin: 100% 0;\n            transform-origin: 100% 0; }\n  .mdl-menu__outline.mdl-menu--top-left {\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%; }\n  .mdl-menu__outline.mdl-menu--top-right {\n    -webkit-transform-origin: 100% 100%;\n            transform-origin: 100% 100%; }\n\n.mdl-menu {\n  position: absolute;\n  list-style: none;\n  top: 0;\n  left: 0;\n  height: auto;\n  width: auto;\n  min-width: 124px;\n  padding: 8px 0;\n  margin: 0;\n  opacity: 0;\n  clip: rect(0 0 0 0);\n  z-index: -1; }\n  .mdl-menu__container.is-visible .mdl-menu {\n    opacity: 1;\n    z-index: 999; }\n  .mdl-menu.is-animating {\n    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), clip 0.3s cubic-bezier(0.4, 0, 0.2, 1); }\n  .mdl-menu.mdl-menu--bottom-right {\n    left: auto;\n    right: 0; }\n  .mdl-menu.mdl-menu--top-left {\n    top: auto;\n    bottom: 0; }\n  .mdl-menu.mdl-menu--top-right {\n    top: auto;\n    left: auto;\n    bottom: 0;\n    right: 0; }\n  .mdl-menu.mdl-menu--unaligned {\n    top: auto;\n    left: auto; }\n\n.mdl-menu__item {\n  display: block;\n  border: none;\n  color: rgba(0,0,0, 0.87);\n  background-color: transparent;\n  text-align: left;\n  margin: 0;\n  padding: 0 16px;\n  outline-color: rgb(189,189,189);\n  position: relative;\n  overflow: hidden;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0;\n  text-decoration: none;\n  cursor: pointer;\n  height: 48px;\n  line-height: 48px;\n  white-space: nowrap;\n  opacity: 0;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .mdl-menu__container.is-visible .mdl-menu__item {\n    opacity: 1; }\n  .mdl-menu__item::-moz-focus-inner {\n    border: 0; }\n  .mdl-menu__item--full-bleed-divider {\n    border-bottom: 1px solid rgba(0,0,0, 0.12); }\n  .mdl-menu__item[disabled], .mdl-menu__item[data-mdl-disabled] {\n    color: rgb(189,189,189);\n    background-color: transparent;\n    cursor: auto; }\n    .mdl-menu__item[disabled]:hover, .mdl-menu__item[data-mdl-disabled]:hover {\n      background-color: transparent; }\n    .mdl-menu__item[disabled]:focus, .mdl-menu__item[data-mdl-disabled]:focus {\n      background-color: transparent; }\n    .mdl-menu__item[disabled] .mdl-ripple, .mdl-menu__item[data-mdl-disabled] .mdl-ripple {\n      background: transparent; }\n  .mdl-menu__item:hover {\n    background-color: rgb(238,238,238); }\n  .mdl-menu__item:focus {\n    outline: none;\n    background-color: rgb(238,238,238); }\n  .mdl-menu__item:active {\n    background-color: rgb(224,224,224); }\n\n.mdl-menu__item--ripple-container {\n  display: block;\n  height: 100%;\n  left: 0px;\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  z-index: 0;\n  overflow: hidden; }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n.mdl-progress {\n  display: block;\n  position: relative;\n  height: 4px;\n  width: 500px;\n  max-width: 100%; }\n\n.mdl-progress > .bar {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 0%;\n  transition: width 0.2s cubic-bezier(0.4, 0, 0.2, 1); }\n\n.mdl-progress > .progressbar {\n  background-color: rgb(63,81,181);\n  z-index: 1;\n  left: 0; }\n\n.mdl-progress > .bufferbar {\n  background-image: linear-gradient(to right, rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), linear-gradient(to right, rgb(63,81,181), rgb(63,81,181));\n  z-index: 0;\n  left: 0; }\n\n.mdl-progress > .auxbar {\n  right: 0; }\n\n@supports (-webkit-appearance: none) {\n  .mdl-progress:not(.mdl-progress--indeterminate):not(.mdl-progress--indeterminate) > .auxbar,\n  .mdl-progress:not(.mdl-progress__indeterminate):not(.mdl-progress__indeterminate) > .auxbar {\n    background-image: linear-gradient(to right, rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), linear-gradient(to right, rgb(63,81,181), rgb(63,81,181));\n    -webkit-mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\");\n            mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\"); } }\n\n.mdl-progress:not(.mdl-progress--indeterminate) > .auxbar,\n.mdl-progress:not(.mdl-progress__indeterminate) > .auxbar {\n  background-image: linear-gradient(to right, rgba(255,255,255, 0.9), rgba(255,255,255, 0.9)), linear-gradient(to right, rgb(63,81,181), rgb(63,81,181)); }\n\n.mdl-progress.mdl-progress--indeterminate > .bar1,\n.mdl-progress.mdl-progress__indeterminate > .bar1 {\n  background-color: rgb(63,81,181);\n  -webkit-animation-name: indeterminate1;\n          animation-name: indeterminate1;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear; }\n\n.mdl-progress.mdl-progress--indeterminate > .bar3,\n.mdl-progress.mdl-progress__indeterminate > .bar3 {\n  background-image: none;\n  background-color: rgb(63,81,181);\n  -webkit-animation-name: indeterminate2;\n          animation-name: indeterminate2;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear; }\n\n@-webkit-keyframes indeterminate1 {\n  0% {\n    left: 0%;\n    width: 0%; }\n  50% {\n    left: 25%;\n    width: 75%; }\n  75% {\n    left: 100%;\n    width: 0%; } }\n\n@keyframes indeterminate1 {\n  0% {\n    left: 0%;\n    width: 0%; }\n  50% {\n    left: 25%;\n    width: 75%; }\n  75% {\n    left: 100%;\n    width: 0%; } }\n\n@-webkit-keyframes indeterminate2 {\n  0% {\n    left: 0%;\n    width: 0%; }\n  50% {\n    left: 0%;\n    width: 0%; }\n  75% {\n    left: 0%;\n    width: 25%; }\n  100% {\n    left: 100%;\n    width: 0%; } }\n\n@keyframes indeterminate2 {\n  0% {\n    left: 0%;\n    width: 0%; }\n  50% {\n    left: 0%;\n    width: 0%; }\n  75% {\n    left: 0%;\n    width: 25%; }\n  100% {\n    left: 100%;\n    width: 0%; } }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-navigation {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n  box-sizing: border-box; }\n\n.mdl-navigation__link {\n  color: rgb(66,66,66);\n  text-decoration: none;\n  margin: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0;\n  opacity: 0.87; }\n  .mdl-navigation__link .material-icons {\n    vertical-align: middle; }\n\n.mdl-layout {\n  width: 100%;\n  height: 100%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative;\n  -webkit-overflow-scrolling: touch; }\n\n.mdl-layout.is-small-screen .mdl-layout--large-screen-only {\n  display: none; }\n\n.mdl-layout:not(.is-small-screen) .mdl-layout--small-screen-only {\n  display: none; }\n\n.mdl-layout__container {\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n\n.mdl-layout__title,\n.mdl-layout-title {\n  display: block;\n  position: relative;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: 0.02em;\n  font-weight: 400;\n  box-sizing: border-box; }\n\n.mdl-layout-spacer {\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n.mdl-layout__drawer {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n  width: 240px;\n  height: 100%;\n  max-height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  border-right: 1px solid rgb(224,224,224);\n  background: rgb(250,250,250);\n  -webkit-transform: translateX(-250px);\n          transform: translateX(-250px);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  will-change: transform;\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  color: rgb(66,66,66);\n  overflow: visible;\n  overflow-y: auto;\n  z-index: 5; }\n  .mdl-layout__drawer.is-visible {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n    .mdl-layout__drawer.is-visible ~ .mdl-layout__content.mdl-layout__content {\n      overflow: hidden; }\n  .mdl-layout__drawer > * {\n    -webkit-flex-shrink: 0;\n        -ms-flex-negative: 0;\n            flex-shrink: 0; }\n  .mdl-layout__drawer > .mdl-layout__title,\n  .mdl-layout__drawer > .mdl-layout-title {\n    line-height: 64px;\n    padding-left: 40px; }\n    @media screen and (max-width: 1024px) {\n      .mdl-layout__drawer > .mdl-layout__title,\n      .mdl-layout__drawer > .mdl-layout-title {\n        line-height: 56px;\n        padding-left: 16px; } }\n  .mdl-layout__drawer .mdl-navigation {\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-align-items: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    padding-top: 16px; }\n    .mdl-layout__drawer .mdl-navigation .mdl-navigation__link {\n      display: block;\n      -webkit-flex-shrink: 0;\n          -ms-flex-negative: 0;\n              flex-shrink: 0;\n      padding: 16px 40px;\n      margin: 0;\n      color: #757575; }\n      @media screen and (max-width: 1024px) {\n        .mdl-layout__drawer .mdl-navigation .mdl-navigation__link {\n          padding: 16px 16px; } }\n      .mdl-layout__drawer .mdl-navigation .mdl-navigation__link:hover {\n        background-color: rgb(224,224,224); }\n      .mdl-layout__drawer .mdl-navigation .mdl-navigation__link--current {\n        background-color: rgb(224,224,224);\n        color: rgb(0,0,0); }\n  @media screen and (min-width: 1025px) {\n    .mdl-layout--fixed-drawer > .mdl-layout__drawer {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); } }\n\n.mdl-layout__drawer-button {\n  display: block;\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  border: 0;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  overflow: hidden;\n  text-align: center;\n  cursor: pointer;\n  font-size: 26px;\n  line-height: 56px;\n  font-family: Helvetica, Arial, sans-serif;\n  margin: 8px 12px;\n  top: 0;\n  left: 0;\n  color: rgb(255,255,255);\n  z-index: 4; }\n  .mdl-layout__header .mdl-layout__drawer-button {\n    position: absolute;\n    color: rgb(255,255,255);\n    background-color: inherit; }\n    @media screen and (max-width: 1024px) {\n      .mdl-layout__header .mdl-layout__drawer-button {\n        margin: 4px; } }\n  @media screen and (max-width: 1024px) {\n    .mdl-layout__drawer-button {\n      margin: 4px;\n      color: rgba(0, 0, 0, 0.5); } }\n  @media screen and (min-width: 1025px) {\n    .mdl-layout__drawer-button {\n      line-height: 54px; }\n      .mdl-layout--no-desktop-drawer-button .mdl-layout__drawer-button,\n      .mdl-layout--fixed-drawer > .mdl-layout__drawer-button,\n      .mdl-layout--no-drawer-button .mdl-layout__drawer-button {\n        display: none; } }\n\n.mdl-layout__header {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  box-sizing: border-box;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  border: none;\n  min-height: 64px;\n  max-height: 1000px;\n  z-index: 3;\n  background-color: rgb(63,81,181);\n  color: rgb(255,255,255);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-property: max-height, box-shadow; }\n  @media screen and (max-width: 1024px) {\n    .mdl-layout__header {\n      min-height: 56px; } }\n  .mdl-layout--fixed-drawer.is-upgraded:not(.is-small-screen) > .mdl-layout__header {\n    margin-left: 240px;\n    width: calc(100% - 240px); }\n  @media screen and (min-width: 1025px) {\n    .mdl-layout--fixed-drawer > .mdl-layout__header .mdl-layout__header-row {\n      padding-left: 40px; } }\n  .mdl-layout__header > .mdl-layout-icon {\n    position: absolute;\n    left: 40px;\n    top: 16px;\n    height: 32px;\n    width: 32px;\n    overflow: hidden;\n    z-index: 3;\n    display: block; }\n    @media screen and (max-width: 1024px) {\n      .mdl-layout__header > .mdl-layout-icon {\n        left: 16px;\n        top: 12px; } }\n  .mdl-layout.has-drawer .mdl-layout__header > .mdl-layout-icon {\n    display: none; }\n  .mdl-layout__header.is-compact {\n    max-height: 64px; }\n    @media screen and (max-width: 1024px) {\n      .mdl-layout__header.is-compact {\n        max-height: 56px; } }\n  .mdl-layout__header.is-compact.has-tabs {\n    height: 112px; }\n    @media screen and (max-width: 1024px) {\n      .mdl-layout__header.is-compact.has-tabs {\n        min-height: 104px; } }\n  @media screen and (max-width: 1024px) {\n    .mdl-layout__header {\n      display: none; }\n    .mdl-layout--fixed-header > .mdl-layout__header {\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex; } }\n\n.mdl-layout__header--transparent.mdl-layout__header--transparent {\n  background-color: transparent;\n  box-shadow: none; }\n\n.mdl-layout__header--seamed {\n  box-shadow: none; }\n\n.mdl-layout__header--scroll {\n  box-shadow: none; }\n\n.mdl-layout__header--waterfall {\n  box-shadow: none;\n  overflow: hidden; }\n  .mdl-layout__header--waterfall.is-casting-shadow {\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n  .mdl-layout__header--waterfall.mdl-layout__header--waterfall-hide-top {\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n\n.mdl-layout__header-row {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  box-sizing: border-box;\n  -webkit-align-self: stretch;\n      -ms-flex-item-align: stretch;\n          align-self: stretch;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 64px;\n  margin: 0;\n  padding: 0 40px 0 80px; }\n  .mdl-layout--no-drawer-button .mdl-layout__header-row {\n    padding-left: 40px; }\n  @media screen and (min-width: 1025px) {\n    .mdl-layout--no-desktop-drawer-button .mdl-layout__header-row {\n      padding-left: 40px; } }\n  @media screen and (max-width: 1024px) {\n    .mdl-layout__header-row {\n      height: 56px;\n      padding: 0 16px 0 72px; }\n      .mdl-layout--no-drawer-button .mdl-layout__header-row {\n        padding-left: 16px; } }\n  .mdl-layout__header-row > * {\n    -webkit-flex-shrink: 0;\n        -ms-flex-negative: 0;\n            flex-shrink: 0; }\n  .mdl-layout__header--scroll .mdl-layout__header-row {\n    width: 100%; }\n  .mdl-layout__header-row .mdl-navigation {\n    margin: 0;\n    padding: 0;\n    height: 64px;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    @media screen and (max-width: 1024px) {\n      .mdl-layout__header-row .mdl-navigation {\n        height: 56px; } }\n  .mdl-layout__header-row .mdl-navigation__link {\n    display: block;\n    color: rgb(255,255,255);\n    line-height: 64px;\n    padding: 0 24px; }\n    @media screen and (max-width: 1024px) {\n      .mdl-layout__header-row .mdl-navigation__link {\n        line-height: 56px;\n        padding: 0 16px; } }\n\n.mdl-layout__obfuscator {\n  background-color: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 4;\n  visibility: hidden;\n  transition-property: background-color;\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  .mdl-layout__obfuscator.is-visible {\n    background-color: rgba(0, 0, 0, 0.5);\n    visibility: visible; }\n  @supports (pointer-events: auto) {\n    .mdl-layout__obfuscator {\n      background-color: rgba(0, 0, 0, 0.5);\n      opacity: 0;\n      transition-property: opacity;\n      visibility: visible;\n      pointer-events: none; }\n      .mdl-layout__obfuscator.is-visible {\n        pointer-events: auto;\n        opacity: 1; } }\n\n.mdl-layout__content {\n  -ms-flex: 0 1 auto;\n  position: relative;\n  display: inline-block;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  z-index: 1;\n  -webkit-overflow-scrolling: touch; }\n  .mdl-layout--fixed-drawer > .mdl-layout__content {\n    margin-left: 240px; }\n  .mdl-layout__container.has-scrolling-header .mdl-layout__content {\n    overflow: visible; }\n  @media screen and (max-width: 1024px) {\n    .mdl-layout--fixed-drawer > .mdl-layout__content {\n      margin-left: 0; }\n    .mdl-layout__container.has-scrolling-header .mdl-layout__content {\n      overflow-y: auto;\n      overflow-x: hidden; } }\n\n.mdl-layout__tab-bar {\n  height: 96px;\n  margin: 0;\n  width: calc(100% - 112px);\n  padding: 0 0 0 56px;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: rgb(63,81,181);\n  overflow-y: hidden;\n  overflow-x: scroll; }\n  .mdl-layout__tab-bar::-webkit-scrollbar {\n    display: none; }\n  .mdl-layout--no-drawer-button .mdl-layout__tab-bar {\n    padding-left: 16px;\n    width: calc(100% - 32px); }\n  @media screen and (min-width: 1025px) {\n    .mdl-layout--no-desktop-drawer-button .mdl-layout__tab-bar {\n      padding-left: 16px;\n      width: calc(100% - 32px); } }\n  @media screen and (max-width: 1024px) {\n    .mdl-layout__tab-bar {\n      width: calc(100% - 60px);\n      padding: 0 0 0 60px; }\n      .mdl-layout--no-drawer-button .mdl-layout__tab-bar {\n        width: calc(100% - 8px);\n        padding-left: 4px; } }\n  .mdl-layout--fixed-tabs .mdl-layout__tab-bar {\n    padding: 0;\n    overflow: hidden;\n    width: 100%; }\n\n.mdl-layout__tab-bar-container {\n  position: relative;\n  height: 48px;\n  width: 100%;\n  border: none;\n  margin: 0;\n  z-index: 2;\n  -webkit-flex-grow: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  overflow: hidden; }\n  .mdl-layout__container > .mdl-layout__tab-bar-container {\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.mdl-layout__tab-bar-button {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  height: 48px;\n  width: 56px;\n  z-index: 4;\n  text-align: center;\n  background-color: rgb(63,81,181);\n  color: transparent;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .mdl-layout--no-desktop-drawer-button .mdl-layout__tab-bar-button,\n  .mdl-layout--no-drawer-button .mdl-layout__tab-bar-button {\n    width: 16px; }\n    .mdl-layout--no-desktop-drawer-button .mdl-layout__tab-bar-button .material-icons,\n    .mdl-layout--no-drawer-button .mdl-layout__tab-bar-button .material-icons {\n      position: relative;\n      left: -4px; }\n  @media screen and (max-width: 1024px) {\n    .mdl-layout__tab-bar-button {\n      width: 60px; } }\n  .mdl-layout--fixed-tabs .mdl-layout__tab-bar-button {\n    display: none; }\n  .mdl-layout__tab-bar-button .material-icons {\n    line-height: 48px; }\n  .mdl-layout__tab-bar-button.is-active {\n    color: rgb(255,255,255); }\n\n.mdl-layout__tab-bar-left-button {\n  left: 0; }\n\n.mdl-layout__tab-bar-right-button {\n  right: 0; }\n\n.mdl-layout__tab {\n  margin: 0;\n  border: none;\n  padding: 0 24px 0 24px;\n  float: left;\n  position: relative;\n  display: block;\n  -webkit-flex-grow: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  text-decoration: none;\n  height: 48px;\n  line-height: 48px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: rgba(255,255,255, 0.6);\n  overflow: hidden; }\n  @media screen and (max-width: 1024px) {\n    .mdl-layout__tab {\n      padding: 0 12px 0 12px; } }\n  .mdl-layout--fixed-tabs .mdl-layout__tab {\n    float: none;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    padding: 0; }\n  .mdl-layout.is-upgraded .mdl-layout__tab.is-active {\n    color: rgb(255,255,255); }\n  .mdl-layout.is-upgraded .mdl-layout__tab.is-active::after {\n    height: 2px;\n    width: 100%;\n    display: block;\n    content: \" \";\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    background: rgb(255,64,129);\n    -webkit-animation: border-expand 0.2s cubic-bezier(0.4, 0, 0.4, 1) 0.01s alternate forwards;\n            animation: border-expand 0.2s cubic-bezier(0.4, 0, 0.4, 1) 0.01s alternate forwards;\n    transition: all 1s cubic-bezier(0.4, 0, 1, 1); }\n  .mdl-layout__tab .mdl-layout__tab-ripple-container {\n    display: block;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    overflow: hidden; }\n    .mdl-layout__tab .mdl-layout__tab-ripple-container .mdl-ripple {\n      background-color: rgb(255,255,255); }\n\n.mdl-layout__tab-panel {\n  display: block; }\n  .mdl-layout.is-upgraded .mdl-layout__tab-panel {\n    display: none; }\n  .mdl-layout.is-upgraded .mdl-layout__tab-panel.is-active {\n    display: block; }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-radio {\n  position: relative;\n  font-size: 16px;\n  line-height: 24px;\n  display: inline-block;\n  vertical-align: middle;\n  box-sizing: border-box;\n  height: 24px;\n  margin: 0;\n  padding-left: 0; }\n  .mdl-radio.is-upgraded {\n    padding-left: 24px; }\n\n.mdl-radio__button {\n  line-height: 24px; }\n  .mdl-radio.is-upgraded .mdl-radio__button {\n    position: absolute;\n    width: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n    -ms-appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    border: none; }\n\n.mdl-radio__outer-circle {\n  position: absolute;\n  top: 4px;\n  left: 0;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 16px;\n  height: 16px;\n  margin: 0;\n  cursor: pointer;\n  border: 2px solid rgba(0,0,0, 0.54);\n  border-radius: 50%;\n  z-index: 2; }\n  .mdl-radio.is-checked .mdl-radio__outer-circle {\n    border: 2px solid rgb(63,81,181); }\n  .mdl-radio__outer-circle fieldset[disabled] .mdl-radio,\n  .mdl-radio.is-disabled .mdl-radio__outer-circle {\n    border: 2px solid rgba(0,0,0, 0.26);\n    cursor: auto; }\n\n.mdl-radio__inner-circle {\n  position: absolute;\n  z-index: 1;\n  margin: 0;\n  top: 8px;\n  left: 4px;\n  box-sizing: border-box;\n  width: 8px;\n  height: 8px;\n  cursor: pointer;\n  transition-duration: 0.28s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transform: scale(0, 0);\n          transform: scale(0, 0);\n  border-radius: 50%;\n  background: rgb(63,81,181); }\n  .mdl-radio.is-checked .mdl-radio__inner-circle {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); }\n  fieldset[disabled] .mdl-radio .mdl-radio__inner-circle,\n  .mdl-radio.is-disabled .mdl-radio__inner-circle {\n    background: rgba(0,0,0, 0.26);\n    cursor: auto; }\n  .mdl-radio.is-focused .mdl-radio__inner-circle {\n    box-shadow: 0 0 0px 10px rgba(0, 0, 0, 0.1); }\n\n.mdl-radio__label {\n  cursor: pointer; }\n  fieldset[disabled] .mdl-radio .mdl-radio__label,\n  .mdl-radio.is-disabled .mdl-radio__label {\n    color: rgba(0,0,0, 0.26);\n    cursor: auto; }\n\n.mdl-radio__ripple-container {\n  position: absolute;\n  z-index: 2;\n  top: -9px;\n  left: -13px;\n  box-sizing: border-box;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  cursor: pointer;\n  overflow: hidden;\n  -webkit-mask-image: -webkit-radial-gradient(circle, white, black); }\n  .mdl-radio__ripple-container .mdl-ripple {\n    background: rgb(63,81,181); }\n  fieldset[disabled] .mdl-radio .mdl-radio__ripple-container,\n  .mdl-radio.is-disabled .mdl-radio__ripple-container {\n    cursor: auto; }\n  fieldset[disabled] .mdl-radio .mdl-radio__ripple-container .mdl-ripple,\n  .mdl-radio.is-disabled .mdl-radio__ripple-container .mdl-ripple {\n    background: transparent; }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n_:-ms-input-placeholder, :root .mdl-slider.mdl-slider.is-upgraded {\n  -ms-appearance: none;\n  height: 32px;\n  margin: 0; }\n\n.mdl-slider {\n  width: calc(100% - 40px);\n  margin: 0 20px; }\n  .mdl-slider.is-upgraded {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    height: 2px;\n    background: transparent;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n    outline: 0;\n    padding: 0;\n    color: rgb(63,81,181);\n    -webkit-align-self: center;\n        -ms-flex-item-align: center;\n                -ms-grid-row-align: center;\n            align-self: center;\n    z-index: 1;\n    cursor: pointer;\n    /**************************** Tracks ****************************/\n    /**************************** Thumbs ****************************/\n    /**************************** 0-value ****************************/\n    /**************************** Disabled ****************************/ }\n    .mdl-slider.is-upgraded::-moz-focus-outer {\n      border: 0; }\n    .mdl-slider.is-upgraded::-ms-tooltip {\n      display: none; }\n    .mdl-slider.is-upgraded::-webkit-slider-runnable-track {\n      background: transparent; }\n    .mdl-slider.is-upgraded::-moz-range-track {\n      background: transparent;\n      border: none; }\n    .mdl-slider.is-upgraded::-ms-track {\n      background: none;\n      color: transparent;\n      height: 2px;\n      width: 100%;\n      border: none; }\n    .mdl-slider.is-upgraded::-ms-fill-lower {\n      padding: 0;\n      background: linear-gradient(to right, transparent, transparent 16px, rgb(63,81,181) 16px, rgb(63,81,181) 0); }\n    .mdl-slider.is-upgraded::-ms-fill-upper {\n      padding: 0;\n      background: linear-gradient(to left, transparent, transparent 16px, rgba(0,0,0, 0.26) 16px, rgba(0,0,0, 0.26) 0); }\n    .mdl-slider.is-upgraded::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      width: 12px;\n      height: 12px;\n      box-sizing: border-box;\n      border-radius: 50%;\n      background: rgb(63,81,181);\n      border: none;\n      transition: border 0.18s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.18s cubic-bezier(0.4, 0, 0.2, 1), background 0.28s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);\n      transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), border 0.18s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.18s cubic-bezier(0.4, 0, 0.2, 1), background 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n      transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), border 0.18s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.18s cubic-bezier(0.4, 0, 0.2, 1), background 0.28s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.18s cubic-bezier(0.4, 0, 0.2, 1); }\n    .mdl-slider.is-upgraded::-moz-range-thumb {\n      -moz-appearance: none;\n      width: 12px;\n      height: 12px;\n      box-sizing: border-box;\n      border-radius: 50%;\n      background-image: none;\n      background: rgb(63,81,181);\n      border: none; }\n    .mdl-slider.is-upgraded:focus:not(:active)::-webkit-slider-thumb {\n      box-shadow: 0 0 0 10px rgba(63,81,181, 0.26); }\n    .mdl-slider.is-upgraded:focus:not(:active)::-moz-range-thumb {\n      box-shadow: 0 0 0 10px rgba(63,81,181, 0.26); }\n    .mdl-slider.is-upgraded:active::-webkit-slider-thumb {\n      background-image: none;\n      background: rgb(63,81,181);\n      -webkit-transform: scale(1.5);\n              transform: scale(1.5); }\n    .mdl-slider.is-upgraded:active::-moz-range-thumb {\n      background-image: none;\n      background: rgb(63,81,181);\n      transform: scale(1.5); }\n    .mdl-slider.is-upgraded::-ms-thumb {\n      width: 32px;\n      height: 32px;\n      border: none;\n      border-radius: 50%;\n      background: rgb(63,81,181);\n      transform: scale(0.375);\n      transition: background 0.28s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);\n      transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), background 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n      transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), background 0.28s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.18s cubic-bezier(0.4, 0, 0.2, 1); }\n    .mdl-slider.is-upgraded:focus:not(:active)::-ms-thumb {\n      background: radial-gradient(circle closest-side, rgb(63,81,181) 0%, rgb(63,81,181) 37.5%, rgba(63,81,181, 0.26) 37.5%, rgba(63,81,181, 0.26) 100%);\n      transform: scale(1); }\n    .mdl-slider.is-upgraded:active::-ms-thumb {\n      background: rgb(63,81,181);\n      transform: scale(0.5625); }\n    .mdl-slider.is-upgraded.is-lowest-value::-webkit-slider-thumb {\n      border: 2px solid rgba(0,0,0, 0.26);\n      background: transparent; }\n    .mdl-slider.is-upgraded.is-lowest-value::-moz-range-thumb {\n      border: 2px solid rgba(0,0,0, 0.26);\n      background: transparent; }\n    .mdl-slider.is-upgraded.is-lowest-value +\n.mdl-slider__background-flex > .mdl-slider__background-upper {\n      left: 6px; }\n    .mdl-slider.is-upgraded.is-lowest-value:focus:not(:active)::-webkit-slider-thumb {\n      box-shadow: 0 0 0 10px rgba(0,0,0, 0.12);\n      background: rgba(0,0,0, 0.12); }\n    .mdl-slider.is-upgraded.is-lowest-value:focus:not(:active)::-moz-range-thumb {\n      box-shadow: 0 0 0 10px rgba(0,0,0, 0.12);\n      background: rgba(0,0,0, 0.12); }\n    .mdl-slider.is-upgraded.is-lowest-value:active::-webkit-slider-thumb {\n      border: 1.6px solid rgba(0,0,0, 0.26);\n      -webkit-transform: scale(1.5);\n              transform: scale(1.5); }\n    .mdl-slider.is-upgraded.is-lowest-value:active +\n.mdl-slider__background-flex > .mdl-slider__background-upper {\n      left: 9px; }\n    .mdl-slider.is-upgraded.is-lowest-value:active::-moz-range-thumb {\n      border: 1.5px solid rgba(0,0,0, 0.26);\n      transform: scale(1.5); }\n    .mdl-slider.is-upgraded.is-lowest-value::-ms-thumb {\n      background: radial-gradient(circle closest-side, transparent 0%, transparent 66.67%, rgba(0,0,0, 0.26) 66.67%, rgba(0,0,0, 0.26) 100%); }\n    .mdl-slider.is-upgraded.is-lowest-value:focus:not(:active)::-ms-thumb {\n      background: radial-gradient(circle closest-side, rgba(0,0,0, 0.12) 0%, rgba(0,0,0, 0.12) 25%, rgba(0,0,0, 0.26) 25%, rgba(0,0,0, 0.26) 37.5%, rgba(0,0,0, 0.12) 37.5%, rgba(0,0,0, 0.12) 100%);\n      transform: scale(1); }\n    .mdl-slider.is-upgraded.is-lowest-value:active::-ms-thumb {\n      transform: scale(0.5625);\n      background: radial-gradient(circle closest-side, transparent 0%, transparent 77.78%, rgba(0,0,0, 0.26) 77.78%, rgba(0,0,0, 0.26) 100%); }\n    .mdl-slider.is-upgraded.is-lowest-value::-ms-fill-lower {\n      background: transparent; }\n    .mdl-slider.is-upgraded.is-lowest-value::-ms-fill-upper {\n      margin-left: 6px; }\n    .mdl-slider.is-upgraded.is-lowest-value:active::-ms-fill-upper {\n      margin-left: 9px; }\n    .mdl-slider.is-upgraded:disabled:focus::-webkit-slider-thumb, .mdl-slider.is-upgraded:disabled:active::-webkit-slider-thumb, .mdl-slider.is-upgraded:disabled::-webkit-slider-thumb {\n      -webkit-transform: scale(0.667);\n              transform: scale(0.667);\n      background: rgba(0,0,0, 0.26); }\n    .mdl-slider.is-upgraded:disabled:focus::-moz-range-thumb, .mdl-slider.is-upgraded:disabled:active::-moz-range-thumb, .mdl-slider.is-upgraded:disabled::-moz-range-thumb {\n      transform: scale(0.667);\n      background: rgba(0,0,0, 0.26); }\n    .mdl-slider.is-upgraded:disabled +\n.mdl-slider__background-flex > .mdl-slider__background-lower {\n      background-color: rgba(0,0,0, 0.26);\n      left: -6px; }\n    .mdl-slider.is-upgraded:disabled +\n.mdl-slider__background-flex > .mdl-slider__background-upper {\n      left: 6px; }\n    .mdl-slider.is-upgraded.is-lowest-value:disabled:focus::-webkit-slider-thumb, .mdl-slider.is-upgraded.is-lowest-value:disabled:active::-webkit-slider-thumb, .mdl-slider.is-upgraded.is-lowest-value:disabled::-webkit-slider-thumb {\n      border: 3px solid rgba(0,0,0, 0.26);\n      background: transparent;\n      -webkit-transform: scale(0.667);\n              transform: scale(0.667); }\n    .mdl-slider.is-upgraded.is-lowest-value:disabled:focus::-moz-range-thumb, .mdl-slider.is-upgraded.is-lowest-value:disabled:active::-moz-range-thumb, .mdl-slider.is-upgraded.is-lowest-value:disabled::-moz-range-thumb {\n      border: 3px solid rgba(0,0,0, 0.26);\n      background: transparent;\n      transform: scale(0.667); }\n    .mdl-slider.is-upgraded.is-lowest-value:disabled:active +\n.mdl-slider__background-flex > .mdl-slider__background-upper {\n      left: 6px; }\n    .mdl-slider.is-upgraded:disabled:focus::-ms-thumb, .mdl-slider.is-upgraded:disabled:active::-ms-thumb, .mdl-slider.is-upgraded:disabled::-ms-thumb {\n      transform: scale(0.25);\n      background: rgba(0,0,0, 0.26); }\n    .mdl-slider.is-upgraded.is-lowest-value:disabled:focus::-ms-thumb, .mdl-slider.is-upgraded.is-lowest-value:disabled:active::-ms-thumb, .mdl-slider.is-upgraded.is-lowest-value:disabled::-ms-thumb {\n      transform: scale(0.25);\n      background: radial-gradient(circle closest-side, transparent 0%, transparent 50%, rgba(0,0,0, 0.26) 50%, rgba(0,0,0, 0.26) 100%); }\n    .mdl-slider.is-upgraded:disabled::-ms-fill-lower {\n      margin-right: 6px;\n      background: linear-gradient(to right, transparent, transparent 25px, rgba(0,0,0, 0.26) 25px, rgba(0,0,0, 0.26) 0); }\n    .mdl-slider.is-upgraded:disabled::-ms-fill-upper {\n      margin-left: 6px; }\n    .mdl-slider.is-upgraded.is-lowest-value:disabled:active::-ms-fill-upper {\n      margin-left: 6px; }\n\n.mdl-slider__ie-container {\n  height: 18px;\n  overflow: visible;\n  border: none;\n  margin: none;\n  padding: none; }\n\n.mdl-slider__container {\n  height: 18px;\n  position: relative;\n  background: none;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.mdl-slider__background-flex {\n  background: transparent;\n  position: absolute;\n  height: 2px;\n  width: calc(100% - 52px);\n  top: 50%;\n  left: 0;\n  margin: 0 26px;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  border: 0;\n  padding: 0;\n  -webkit-transform: translate(0, -1px);\n          transform: translate(0, -1px); }\n\n.mdl-slider__background-lower {\n  background: rgb(63,81,181);\n  -webkit-flex: 0;\n      -ms-flex: 0;\n          flex: 0;\n  position: relative;\n  border: 0;\n  padding: 0; }\n\n.mdl-slider__background-upper {\n  background: rgba(0,0,0, 0.26);\n  -webkit-flex: 0;\n      -ms-flex: 0;\n          flex: 0;\n  position: relative;\n  border: 0;\n  padding: 0;\n  transition: left 0.18s cubic-bezier(0.4, 0, 0.2, 1); }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-snackbar {\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  cursor: default;\n  background-color: #323232;\n  z-index: 3;\n  display: block;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  will-change: transform;\n  -webkit-transform: translate(0, 80px);\n          transform: translate(0, 80px);\n  transition: -webkit-transform 0.25s cubic-bezier(0.4, 0, 1, 1);\n  transition: transform 0.25s cubic-bezier(0.4, 0, 1, 1);\n  transition: transform 0.25s cubic-bezier(0.4, 0, 1, 1), -webkit-transform 0.25s cubic-bezier(0.4, 0, 1, 1);\n  pointer-events: none; }\n  @media (max-width: 479px) {\n    .mdl-snackbar {\n      width: 100%;\n      left: 0;\n      min-height: 48px;\n      max-height: 80px; } }\n  @media (min-width: 480px) {\n    .mdl-snackbar {\n      min-width: 288px;\n      max-width: 568px;\n      border-radius: 2px;\n      -webkit-transform: translate(-50%, 80px);\n              transform: translate(-50%, 80px); } }\n  .mdl-snackbar--active {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n    pointer-events: auto;\n    transition: -webkit-transform 0.25s cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 0.25s cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 0.25s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.25s cubic-bezier(0, 0, 0.2, 1); }\n    @media (min-width: 480px) {\n      .mdl-snackbar--active {\n        -webkit-transform: translate(-50%, 0);\n                transform: translate(-50%, 0); } }\n  .mdl-snackbar__text {\n    padding: 14px 12px 14px 24px;\n    vertical-align: middle;\n    color: white;\n    float: left; }\n  .mdl-snackbar__action {\n    background: transparent;\n    border: none;\n    color: rgb(255,64,129);\n    float: right;\n    text-transform: uppercase;\n    padding: 14px 24px 14px 12px;\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 14px;\n    font-weight: 500;\n    text-transform: uppercase;\n    line-height: 1;\n    letter-spacing: 0;\n    overflow: hidden;\n    outline: none;\n    opacity: 0;\n    pointer-events: none;\n    cursor: pointer;\n    text-decoration: none;\n    text-align: center;\n    -webkit-align-self: center;\n        -ms-flex-item-align: center;\n                -ms-grid-row-align: center;\n            align-self: center; }\n    .mdl-snackbar__action::-moz-focus-inner {\n      border: 0; }\n    .mdl-snackbar__action:not([aria-hidden]) {\n      opacity: 1;\n      pointer-events: auto; }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n.mdl-spinner {\n  display: inline-block;\n  position: relative;\n  width: 28px;\n  height: 28px; }\n  .mdl-spinner:not(.is-upgraded).is-active:after {\n    content: \"Loading...\"; }\n  .mdl-spinner.is-upgraded.is-active {\n    -webkit-animation: mdl-spinner__container-rotate 1568.23529412ms linear infinite;\n            animation: mdl-spinner__container-rotate 1568.23529412ms linear infinite; }\n\n@-webkit-keyframes mdl-spinner__container-rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes mdl-spinner__container-rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.mdl-spinner__layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0; }\n\n.mdl-spinner__layer-1 {\n  border-color: rgb(66,165,245); }\n  .mdl-spinner--single-color .mdl-spinner__layer-1 {\n    border-color: rgb(63,81,181); }\n  .mdl-spinner.is-active .mdl-spinner__layer-1 {\n    -webkit-animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n            animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.mdl-spinner__layer-2 {\n  border-color: rgb(244,67,54); }\n  .mdl-spinner--single-color .mdl-spinner__layer-2 {\n    border-color: rgb(63,81,181); }\n  .mdl-spinner.is-active .mdl-spinner__layer-2 {\n    -webkit-animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n            animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.mdl-spinner__layer-3 {\n  border-color: rgb(253,216,53); }\n  .mdl-spinner--single-color .mdl-spinner__layer-3 {\n    border-color: rgb(63,81,181); }\n  .mdl-spinner.is-active .mdl-spinner__layer-3 {\n    -webkit-animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n            animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.mdl-spinner__layer-4 {\n  border-color: rgb(76,175,80); }\n  .mdl-spinner--single-color .mdl-spinner__layer-4 {\n    border-color: rgb(63,81,181); }\n  .mdl-spinner.is-active .mdl-spinner__layer-4 {\n    -webkit-animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n            animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n@-webkit-keyframes mdl-spinner__fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg); }\n  25% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg); }\n  37.5% {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg); }\n  50% {\n    -webkit-transform: rotate(540deg);\n            transform: rotate(540deg); }\n  62.5% {\n    -webkit-transform: rotate(675deg);\n            transform: rotate(675deg); }\n  75% {\n    -webkit-transform: rotate(810deg);\n            transform: rotate(810deg); }\n  87.5% {\n    -webkit-transform: rotate(945deg);\n            transform: rotate(945deg); }\n  to {\n    -webkit-transform: rotate(1080deg);\n            transform: rotate(1080deg); } }\n\n@keyframes mdl-spinner__fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg); }\n  25% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg); }\n  37.5% {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg); }\n  50% {\n    -webkit-transform: rotate(540deg);\n            transform: rotate(540deg); }\n  62.5% {\n    -webkit-transform: rotate(675deg);\n            transform: rotate(675deg); }\n  75% {\n    -webkit-transform: rotate(810deg);\n            transform: rotate(810deg); }\n  87.5% {\n    -webkit-transform: rotate(945deg);\n            transform: rotate(945deg); }\n  to {\n    -webkit-transform: rotate(1080deg);\n            transform: rotate(1080deg); } }\n\n/**\n* HACK: Even though the intention is to have the current .mdl-spinner__layer-N\n* at `opacity: 1`, we set it to `opacity: 0.99` instead since this forces Chrome\n* to do proper subpixel rendering for the elements being animated. This is\n* especially visible in Chrome 39 on Ubuntu 14.04. See:\n*\n* - https://github.com/Polymer/paper-spinner/issues/9\n* - https://code.google.com/p/chromium/issues/detail?id=436255\n*/\n@-webkit-keyframes mdl-spinner__layer-1-fade-in-out {\n  from {\n    opacity: 0.99; }\n  25% {\n    opacity: 0.99; }\n  26% {\n    opacity: 0; }\n  89% {\n    opacity: 0; }\n  90% {\n    opacity: 0.99; }\n  100% {\n    opacity: 0.99; } }\n@keyframes mdl-spinner__layer-1-fade-in-out {\n  from {\n    opacity: 0.99; }\n  25% {\n    opacity: 0.99; }\n  26% {\n    opacity: 0; }\n  89% {\n    opacity: 0; }\n  90% {\n    opacity: 0.99; }\n  100% {\n    opacity: 0.99; } }\n\n@-webkit-keyframes mdl-spinner__layer-2-fade-in-out {\n  from {\n    opacity: 0; }\n  15% {\n    opacity: 0; }\n  25% {\n    opacity: 0.99; }\n  50% {\n    opacity: 0.99; }\n  51% {\n    opacity: 0; } }\n\n@keyframes mdl-spinner__layer-2-fade-in-out {\n  from {\n    opacity: 0; }\n  15% {\n    opacity: 0; }\n  25% {\n    opacity: 0.99; }\n  50% {\n    opacity: 0.99; }\n  51% {\n    opacity: 0; } }\n\n@-webkit-keyframes mdl-spinner__layer-3-fade-in-out {\n  from {\n    opacity: 0; }\n  40% {\n    opacity: 0; }\n  50% {\n    opacity: 0.99; }\n  75% {\n    opacity: 0.99; }\n  76% {\n    opacity: 0; } }\n\n@keyframes mdl-spinner__layer-3-fade-in-out {\n  from {\n    opacity: 0; }\n  40% {\n    opacity: 0; }\n  50% {\n    opacity: 0.99; }\n  75% {\n    opacity: 0.99; }\n  76% {\n    opacity: 0; } }\n\n@-webkit-keyframes mdl-spinner__layer-4-fade-in-out {\n  from {\n    opacity: 0; }\n  65% {\n    opacity: 0; }\n  75% {\n    opacity: 0.99; }\n  90% {\n    opacity: 0.99; }\n  100% {\n    opacity: 0; } }\n\n@keyframes mdl-spinner__layer-4-fade-in-out {\n  from {\n    opacity: 0; }\n  65% {\n    opacity: 0; }\n  75% {\n    opacity: 0.99; }\n  90% {\n    opacity: 0.99; }\n  100% {\n    opacity: 0; } }\n\n/**\n* Patch the gap that appear between the two adjacent\n* div.mdl-spinner__circle-clipper while the spinner is rotating\n* (appears on Chrome 38, Safari 7.1, and IE 11).\n*\n* Update: the gap no longer appears on Chrome when .mdl-spinner__layer-N's\n* opacity is 0.99, but still does on Safari and IE.\n*/\n.mdl-spinner__gap-patch {\n  position: absolute;\n  box-sizing: border-box;\n  top: 0;\n  left: 45%;\n  width: 10%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit; }\n  .mdl-spinner__gap-patch .mdl-spinner__circle {\n    width: 1000%;\n    left: -450%; }\n\n.mdl-spinner__circle-clipper {\n  display: inline-block;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit; }\n  .mdl-spinner__circle-clipper.mdl-spinner__left {\n    float: left; }\n  .mdl-spinner__circle-clipper.mdl-spinner__right {\n    float: right; }\n  .mdl-spinner__circle-clipper .mdl-spinner__circle {\n    width: 200%; }\n\n.mdl-spinner__circle {\n  box-sizing: border-box;\n  height: 100%;\n  border-width: 3px;\n  border-style: solid;\n  border-color: inherit;\n  border-bottom-color: transparent !important;\n  border-radius: 50%;\n  -webkit-animation: none;\n          animation: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n  .mdl-spinner__left .mdl-spinner__circle {\n    border-right-color: transparent !important;\n    -webkit-transform: rotate(129deg);\n            transform: rotate(129deg); }\n    .mdl-spinner.is-active .mdl-spinner__left .mdl-spinner__circle {\n      -webkit-animation: mdl-spinner__left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n              animation: mdl-spinner__left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n  .mdl-spinner__right .mdl-spinner__circle {\n    left: -100%;\n    border-left-color: transparent !important;\n    -webkit-transform: rotate(-129deg);\n            transform: rotate(-129deg); }\n    .mdl-spinner.is-active .mdl-spinner__right .mdl-spinner__circle {\n      -webkit-animation: mdl-spinner__right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n              animation: mdl-spinner__right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n@-webkit-keyframes mdl-spinner__left-spin {\n  from {\n    -webkit-transform: rotate(130deg);\n            transform: rotate(130deg); }\n  50% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg); }\n  to {\n    -webkit-transform: rotate(130deg);\n            transform: rotate(130deg); } }\n\n@keyframes mdl-spinner__left-spin {\n  from {\n    -webkit-transform: rotate(130deg);\n            transform: rotate(130deg); }\n  50% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg); }\n  to {\n    -webkit-transform: rotate(130deg);\n            transform: rotate(130deg); } }\n\n@-webkit-keyframes mdl-spinner__right-spin {\n  from {\n    -webkit-transform: rotate(-130deg);\n            transform: rotate(-130deg); }\n  50% {\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg); }\n  to {\n    -webkit-transform: rotate(-130deg);\n            transform: rotate(-130deg); } }\n\n@keyframes mdl-spinner__right-spin {\n  from {\n    -webkit-transform: rotate(-130deg);\n            transform: rotate(-130deg); }\n  50% {\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg); }\n  to {\n    -webkit-transform: rotate(-130deg);\n            transform: rotate(-130deg); } }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-switch {\n  position: relative;\n  z-index: 1;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 24px;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .mdl-switch.is-upgraded {\n    padding-left: 28px; }\n\n.mdl-switch__input {\n  line-height: 24px; }\n  .mdl-switch.is-upgraded .mdl-switch__input {\n    position: absolute;\n    width: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n    -ms-appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    border: none; }\n\n.mdl-switch__track {\n  background: rgba(0,0,0, 0.26);\n  position: absolute;\n  left: 0;\n  top: 5px;\n  height: 14px;\n  width: 36px;\n  border-radius: 14px;\n  cursor: pointer; }\n  .mdl-switch.is-checked .mdl-switch__track {\n    background: rgba(63,81,181, 0.5); }\n  .mdl-switch__track fieldset[disabled] .mdl-switch,\n  .mdl-switch.is-disabled .mdl-switch__track {\n    background: rgba(0,0,0, 0.12);\n    cursor: auto; }\n\n.mdl-switch__thumb {\n  background: rgb(250,250,250);\n  position: absolute;\n  left: 0;\n  top: 2px;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  transition-duration: 0.28s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-property: left; }\n  .mdl-switch.is-checked .mdl-switch__thumb {\n    background: rgb(63,81,181);\n    left: 16px;\n    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.12); }\n  .mdl-switch__thumb fieldset[disabled] .mdl-switch,\n  .mdl-switch.is-disabled .mdl-switch__thumb {\n    background: rgb(189,189,189);\n    cursor: auto; }\n\n.mdl-switch__focus-helper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-4px, -4px);\n          transform: translate(-4px, -4px);\n  display: inline-block;\n  box-sizing: border-box;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: transparent; }\n  .mdl-switch.is-focused .mdl-switch__focus-helper {\n    box-shadow: 0 0 0px 20px rgba(0, 0, 0, 0.1);\n    background-color: rgba(0, 0, 0, 0.1); }\n  .mdl-switch.is-focused.is-checked .mdl-switch__focus-helper {\n    box-shadow: 0 0 0px 20px rgba(63,81,181, 0.26);\n    background-color: rgba(63,81,181, 0.26); }\n\n.mdl-switch__label {\n  position: relative;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 24px;\n  margin: 0;\n  left: 24px; }\n  .mdl-switch__label fieldset[disabled] .mdl-switch,\n  .mdl-switch.is-disabled .mdl-switch__label {\n    color: rgb(189,189,189);\n    cursor: auto; }\n\n.mdl-switch__ripple-container {\n  position: absolute;\n  z-index: 2;\n  top: -12px;\n  left: -14px;\n  box-sizing: border-box;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  cursor: pointer;\n  overflow: hidden;\n  -webkit-mask-image: -webkit-radial-gradient(circle, white, black);\n  transition-duration: 0.40s;\n  transition-timing-function: step-end;\n  transition-property: left; }\n  .mdl-switch__ripple-container .mdl-ripple {\n    background: rgb(63,81,181); }\n  .mdl-switch__ripple-container fieldset[disabled] .mdl-switch,\n  .mdl-switch.is-disabled .mdl-switch__ripple-container {\n    cursor: auto; }\n  fieldset[disabled] .mdl-switch .mdl-switch__ripple-container .mdl-ripple,\n  .mdl-switch.is-disabled .mdl-switch__ripple-container .mdl-ripple {\n    background: transparent; }\n  .mdl-switch.is-checked .mdl-switch__ripple-container {\n    left: 2px; }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n.mdl-tabs {\n  display: block;\n  width: 100%; }\n\n.mdl-tabs__tab-bar {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-content: space-between;\n      -ms-flex-line-pack: justify;\n          align-content: space-between;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  height: 48px;\n  padding: 0 0 0 0;\n  margin: 0;\n  border-bottom: 1px solid rgb(224,224,224); }\n\n.mdl-tabs__tab {\n  margin: 0;\n  border: none;\n  padding: 0 24px 0 24px;\n  float: left;\n  position: relative;\n  display: block;\n  text-decoration: none;\n  height: 48px;\n  line-height: 48px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: rgba(0,0,0, 0.54);\n  overflow: hidden; }\n  .mdl-tabs.is-upgraded .mdl-tabs__tab.is-active {\n    color: rgba(0,0,0, 0.87); }\n  .mdl-tabs.is-upgraded .mdl-tabs__tab.is-active:after {\n    height: 2px;\n    width: 100%;\n    display: block;\n    content: \" \";\n    bottom: 0px;\n    left: 0px;\n    position: absolute;\n    background: rgb(63,81,181);\n    -webkit-animation: border-expand 0.2s cubic-bezier(0.4, 0, 0.4, 1) 0.01s alternate forwards;\n            animation: border-expand 0.2s cubic-bezier(0.4, 0, 0.4, 1) 0.01s alternate forwards;\n    transition: all 1s cubic-bezier(0.4, 0, 1, 1); }\n  .mdl-tabs__tab .mdl-tabs__ripple-container {\n    display: block;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    left: 0px;\n    top: 0px;\n    z-index: 1;\n    overflow: hidden; }\n    .mdl-tabs__tab .mdl-tabs__ripple-container .mdl-ripple {\n      background: rgb(63,81,181); }\n\n.mdl-tabs__panel {\n  display: block; }\n  .mdl-tabs.is-upgraded .mdl-tabs__panel {\n    display: none; }\n  .mdl-tabs.is-upgraded .mdl-tabs__panel.is-active {\n    display: block; }\n\n@-webkit-keyframes border-expand {\n  0% {\n    opacity: 0;\n    width: 0; }\n  100% {\n    opacity: 1;\n    width: 100%; } }\n\n@keyframes border-expand {\n  0% {\n    opacity: 0;\n    width: 0; }\n  100% {\n    opacity: 1;\n    width: 100%; } }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-textfield {\n  position: relative;\n  font-size: 16px;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 300px;\n  max-width: 100%;\n  margin: 0;\n  padding: 20px 0; }\n  .mdl-textfield .mdl-button {\n    position: absolute;\n    bottom: 20px; }\n\n.mdl-textfield--align-right {\n  text-align: right; }\n\n.mdl-textfield--full-width {\n  width: 100%; }\n\n.mdl-textfield--expandable {\n  min-width: 32px;\n  width: auto;\n  min-height: 32px; }\n  .mdl-textfield--expandable .mdl-button--icon {\n    top: 16px; }\n\n.mdl-textfield__input {\n  border: none;\n  border-bottom: 1px solid rgba(0,0,0, 0.12);\n  display: block;\n  font-size: 16px;\n  font-family: \"Helvetica\", \"Arial\", sans-serif;\n  margin: 0;\n  padding: 4px 0;\n  width: 100%;\n  background: none;\n  text-align: left;\n  color: inherit; }\n  .mdl-textfield__input[type=\"number\"] {\n    -moz-appearance: textfield; }\n  .mdl-textfield__input[type=\"number\"]::-webkit-inner-spin-button, .mdl-textfield__input[type=\"number\"]::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0; }\n  .mdl-textfield.is-focused .mdl-textfield__input {\n    outline: none; }\n  .mdl-textfield.is-invalid .mdl-textfield__input {\n    border-color: rgb(213,0,0);\n    box-shadow: none; }\n  fieldset[disabled] .mdl-textfield .mdl-textfield__input,\n  .mdl-textfield.is-disabled .mdl-textfield__input {\n    background-color: transparent;\n    border-bottom: 1px dotted rgba(0,0,0, 0.12);\n    color: rgba(0,0,0, 0.26); }\n\n.mdl-textfield textarea.mdl-textfield__input {\n  display: block; }\n\n.mdl-textfield__label {\n  bottom: 0;\n  color: rgba(0,0,0, 0.26);\n  font-size: 16px;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  position: absolute;\n  display: block;\n  top: 24px;\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: left; }\n  .mdl-textfield.is-dirty .mdl-textfield__label,\n  .mdl-textfield.has-placeholder .mdl-textfield__label {\n    visibility: hidden; }\n  .mdl-textfield--floating-label .mdl-textfield__label {\n    transition-duration: 0.2s;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  .mdl-textfield--floating-label.has-placeholder .mdl-textfield__label {\n    transition: none; }\n  fieldset[disabled] .mdl-textfield .mdl-textfield__label,\n  .mdl-textfield.is-disabled.is-disabled .mdl-textfield__label {\n    color: rgba(0,0,0, 0.26); }\n  .mdl-textfield--floating-label.is-focused .mdl-textfield__label,\n  .mdl-textfield--floating-label.is-dirty .mdl-textfield__label,\n  .mdl-textfield--floating-label.has-placeholder .mdl-textfield__label {\n    color: rgb(63,81,181);\n    font-size: 12px;\n    top: 4px;\n    visibility: visible; }\n  .mdl-textfield--floating-label.is-focused .mdl-textfield__expandable-holder .mdl-textfield__label,\n  .mdl-textfield--floating-label.is-dirty .mdl-textfield__expandable-holder .mdl-textfield__label,\n  .mdl-textfield--floating-label.has-placeholder .mdl-textfield__expandable-holder .mdl-textfield__label {\n    top: -16px; }\n  .mdl-textfield--floating-label.is-invalid .mdl-textfield__label {\n    color: rgb(213,0,0);\n    font-size: 12px; }\n  .mdl-textfield__label:after {\n    background-color: rgb(63,81,181);\n    bottom: 20px;\n    content: '';\n    height: 2px;\n    left: 45%;\n    position: absolute;\n    transition-duration: 0.2s;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    visibility: hidden;\n    width: 10px; }\n  .mdl-textfield.is-focused .mdl-textfield__label:after {\n    left: 0;\n    visibility: visible;\n    width: 100%; }\n  .mdl-textfield.is-invalid .mdl-textfield__label:after {\n    background-color: rgb(213,0,0); }\n\n.mdl-textfield__error {\n  color: rgb(213,0,0);\n  position: absolute;\n  font-size: 12px;\n  margin-top: 3px;\n  visibility: hidden;\n  display: block; }\n  .mdl-textfield.is-invalid .mdl-textfield__error {\n    visibility: visible; }\n\n.mdl-textfield__expandable-holder {\n  display: inline-block;\n  position: relative;\n  margin-left: 32px;\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-block;\n  max-width: 0.1px; }\n  .mdl-textfield.is-focused .mdl-textfield__expandable-holder, .mdl-textfield.is-dirty .mdl-textfield__expandable-holder {\n    max-width: 600px; }\n  .mdl-textfield__expandable-holder .mdl-textfield__label:after {\n    bottom: 0; }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n.mdl-tooltip {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transform-origin: top center;\n          transform-origin: top center;\n  z-index: 999;\n  background: rgba(97,97,97, 0.9);\n  border-radius: 2px;\n  color: rgb(255,255,255);\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 14px;\n  max-width: 170px;\n  position: fixed;\n  top: -500px;\n  left: -500px;\n  padding: 8px;\n  text-align: center; }\n\n.mdl-tooltip.is-active {\n  -webkit-animation: pulse 200ms cubic-bezier(0, 0, 0.2, 1) forwards;\n          animation: pulse 200ms cubic-bezier(0, 0, 0.2, 1) forwards; }\n\n.mdl-tooltip--large {\n  line-height: 14px;\n  font-size: 14px;\n  padding: 16px; }\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0; }\n  50% {\n    -webkit-transform: scale(0.99);\n            transform: scale(0.99); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n    visibility: visible; } }\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0; }\n  50% {\n    -webkit-transform: scale(0.99);\n            transform: scale(0.99); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n    visibility: visible; } }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n.mdl-shadow--2dp {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.mdl-shadow--3dp {\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.12); }\n\n.mdl-shadow--4dp {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2); }\n\n.mdl-shadow--6dp {\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2); }\n\n.mdl-shadow--8dp {\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2); }\n\n.mdl-shadow--16dp {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); }\n\n.mdl-shadow--24dp {\n  box-shadow: 0 9px 46px 8px rgba(0, 0, 0, 0.14), 0 11px 15px -7px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.2); }\n\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*\n* NOTE: Some rules here are applied using duplicate selectors.\n* This is on purpose to increase their specificity when applied.\n* For example: `.mdl-cell--1-col-phone.mdl-cell--1-col-phone`\n*/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n.mdl-grid {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  margin: 0 auto 0 auto;\n  -webkit-align-items: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n  .mdl-grid.mdl-grid--no-spacing {\n    padding: 0; }\n\n.mdl-cell {\n  box-sizing: border-box; }\n\n.mdl-cell--top {\n  -webkit-align-self: flex-start;\n      -ms-flex-item-align: start;\n          align-self: flex-start; }\n\n.mdl-cell--middle {\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n              -ms-grid-row-align: center;\n          align-self: center; }\n\n.mdl-cell--bottom {\n  -webkit-align-self: flex-end;\n      -ms-flex-item-align: end;\n          align-self: flex-end; }\n\n.mdl-cell--stretch {\n  -webkit-align-self: stretch;\n      -ms-flex-item-align: stretch;\n              -ms-grid-row-align: stretch;\n          align-self: stretch; }\n\n.mdl-grid.mdl-grid--no-spacing > .mdl-cell {\n  margin: 0; }\n\n.mdl-cell--order-1 {\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1; }\n\n.mdl-cell--order-2 {\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2; }\n\n.mdl-cell--order-3 {\n  -webkit-order: 3;\n      -ms-flex-order: 3;\n          order: 3; }\n\n.mdl-cell--order-4 {\n  -webkit-order: 4;\n      -ms-flex-order: 4;\n          order: 4; }\n\n.mdl-cell--order-5 {\n  -webkit-order: 5;\n      -ms-flex-order: 5;\n          order: 5; }\n\n.mdl-cell--order-6 {\n  -webkit-order: 6;\n      -ms-flex-order: 6;\n          order: 6; }\n\n.mdl-cell--order-7 {\n  -webkit-order: 7;\n      -ms-flex-order: 7;\n          order: 7; }\n\n.mdl-cell--order-8 {\n  -webkit-order: 8;\n      -ms-flex-order: 8;\n          order: 8; }\n\n.mdl-cell--order-9 {\n  -webkit-order: 9;\n      -ms-flex-order: 9;\n          order: 9; }\n\n.mdl-cell--order-10 {\n  -webkit-order: 10;\n      -ms-flex-order: 10;\n          order: 10; }\n\n.mdl-cell--order-11 {\n  -webkit-order: 11;\n      -ms-flex-order: 11;\n          order: 11; }\n\n.mdl-cell--order-12 {\n  -webkit-order: 12;\n      -ms-flex-order: 12;\n          order: 12; }\n\n@media (max-width: 479px) {\n  .mdl-grid {\n    padding: 8px; }\n  .mdl-cell {\n    margin: 8px;\n    width: calc(100% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell {\n      width: 100%; }\n  .mdl-cell--hide-phone {\n    display: none !important; }\n  .mdl-cell--order-1-phone.mdl-cell--order-1-phone {\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .mdl-cell--order-2-phone.mdl-cell--order-2-phone {\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .mdl-cell--order-3-phone.mdl-cell--order-3-phone {\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .mdl-cell--order-4-phone.mdl-cell--order-4-phone {\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .mdl-cell--order-5-phone.mdl-cell--order-5-phone {\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .mdl-cell--order-6-phone.mdl-cell--order-6-phone {\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .mdl-cell--order-7-phone.mdl-cell--order-7-phone {\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .mdl-cell--order-8-phone.mdl-cell--order-8-phone {\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .mdl-cell--order-9-phone.mdl-cell--order-9-phone {\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .mdl-cell--order-10-phone.mdl-cell--order-10-phone {\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .mdl-cell--order-11-phone.mdl-cell--order-11-phone {\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .mdl-cell--order-12-phone.mdl-cell--order-12-phone {\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .mdl-cell--1-col,\n  .mdl-cell--1-col-phone.mdl-cell--1-col-phone {\n    width: calc(25% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--1-col, .mdl-grid--no-spacing >\n    .mdl-cell--1-col-phone.mdl-cell--1-col-phone {\n      width: 25%; }\n  .mdl-cell--2-col,\n  .mdl-cell--2-col-phone.mdl-cell--2-col-phone {\n    width: calc(50% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--2-col, .mdl-grid--no-spacing >\n    .mdl-cell--2-col-phone.mdl-cell--2-col-phone {\n      width: 50%; }\n  .mdl-cell--3-col,\n  .mdl-cell--3-col-phone.mdl-cell--3-col-phone {\n    width: calc(75% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--3-col, .mdl-grid--no-spacing >\n    .mdl-cell--3-col-phone.mdl-cell--3-col-phone {\n      width: 75%; }\n  .mdl-cell--4-col,\n  .mdl-cell--4-col-phone.mdl-cell--4-col-phone {\n    width: calc(100% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--4-col, .mdl-grid--no-spacing >\n    .mdl-cell--4-col-phone.mdl-cell--4-col-phone {\n      width: 100%; }\n  .mdl-cell--5-col,\n  .mdl-cell--5-col-phone.mdl-cell--5-col-phone {\n    width: calc(100% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--5-col, .mdl-grid--no-spacing >\n    .mdl-cell--5-col-phone.mdl-cell--5-col-phone {\n      width: 100%; }\n  .mdl-cell--6-col,\n  .mdl-cell--6-col-phone.mdl-cell--6-col-phone {\n    width: calc(100% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--6-col, .mdl-grid--no-spacing >\n    .mdl-cell--6-col-phone.mdl-cell--6-col-phone {\n      width: 100%; }\n  .mdl-cell--7-col,\n  .mdl-cell--7-col-phone.mdl-cell--7-col-phone {\n    width: calc(100% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--7-col, .mdl-grid--no-spacing >\n    .mdl-cell--7-col-phone.mdl-cell--7-col-phone {\n      width: 100%; }\n  .mdl-cell--8-col,\n  .mdl-cell--8-col-phone.mdl-cell--8-col-phone {\n    width: calc(100% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--8-col, .mdl-grid--no-spacing >\n    .mdl-cell--8-col-phone.mdl-cell--8-col-phone {\n      width: 100%; }\n  .mdl-cell--9-col,\n  .mdl-cell--9-col-phone.mdl-cell--9-col-phone {\n    width: calc(100% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--9-col, .mdl-grid--no-spacing >\n    .mdl-cell--9-col-phone.mdl-cell--9-col-phone {\n      width: 100%; }\n  .mdl-cell--10-col,\n  .mdl-cell--10-col-phone.mdl-cell--10-col-phone {\n    width: calc(100% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--10-col, .mdl-grid--no-spacing >\n    .mdl-cell--10-col-phone.mdl-cell--10-col-phone {\n      width: 100%; }\n  .mdl-cell--11-col,\n  .mdl-cell--11-col-phone.mdl-cell--11-col-phone {\n    width: calc(100% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--11-col, .mdl-grid--no-spacing >\n    .mdl-cell--11-col-phone.mdl-cell--11-col-phone {\n      width: 100%; }\n  .mdl-cell--12-col,\n  .mdl-cell--12-col-phone.mdl-cell--12-col-phone {\n    width: calc(100% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--12-col, .mdl-grid--no-spacing >\n    .mdl-cell--12-col-phone.mdl-cell--12-col-phone {\n      width: 100%; }\n  .mdl-cell--1-offset,\n  .mdl-cell--1-offset-phone.mdl-cell--1-offset-phone {\n    margin-left: calc(25% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--1-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--1-offset-phone.mdl-cell--1-offset-phone {\n      margin-left: 25%; }\n  .mdl-cell--2-offset,\n  .mdl-cell--2-offset-phone.mdl-cell--2-offset-phone {\n    margin-left: calc(50% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--2-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--2-offset-phone.mdl-cell--2-offset-phone {\n      margin-left: 50%; }\n  .mdl-cell--3-offset,\n  .mdl-cell--3-offset-phone.mdl-cell--3-offset-phone {\n    margin-left: calc(75% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--3-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--3-offset-phone.mdl-cell--3-offset-phone {\n      margin-left: 75%; } }\n\n@media (min-width: 480px) and (max-width: 839px) {\n  .mdl-grid {\n    padding: 8px; }\n  .mdl-cell {\n    margin: 8px;\n    width: calc(50% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell {\n      width: 50%; }\n  .mdl-cell--hide-tablet {\n    display: none !important; }\n  .mdl-cell--order-1-tablet.mdl-cell--order-1-tablet {\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .mdl-cell--order-2-tablet.mdl-cell--order-2-tablet {\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .mdl-cell--order-3-tablet.mdl-cell--order-3-tablet {\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .mdl-cell--order-4-tablet.mdl-cell--order-4-tablet {\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .mdl-cell--order-5-tablet.mdl-cell--order-5-tablet {\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .mdl-cell--order-6-tablet.mdl-cell--order-6-tablet {\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .mdl-cell--order-7-tablet.mdl-cell--order-7-tablet {\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .mdl-cell--order-8-tablet.mdl-cell--order-8-tablet {\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .mdl-cell--order-9-tablet.mdl-cell--order-9-tablet {\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .mdl-cell--order-10-tablet.mdl-cell--order-10-tablet {\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .mdl-cell--order-11-tablet.mdl-cell--order-11-tablet {\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .mdl-cell--order-12-tablet.mdl-cell--order-12-tablet {\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .mdl-cell--1-col,\n  .mdl-cell--1-col-tablet.mdl-cell--1-col-tablet {\n    width: calc(12.5% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--1-col, .mdl-grid--no-spacing >\n    .mdl-cell--1-col-tablet.mdl-cell--1-col-tablet {\n      width: 12.5%; }\n  .mdl-cell--2-col,\n  .mdl-cell--2-col-tablet.mdl-cell--2-col-tablet {\n    width: calc(25% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--2-col, .mdl-grid--no-spacing >\n    .mdl-cell--2-col-tablet.mdl-cell--2-col-tablet {\n      width: 25%; }\n  .mdl-cell--3-col,\n  .mdl-cell--3-col-tablet.mdl-cell--3-col-tablet {\n    width: calc(37.5% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--3-col, .mdl-grid--no-spacing >\n    .mdl-cell--3-col-tablet.mdl-cell--3-col-tablet {\n      width: 37.5%; }\n  .mdl-cell--4-col,\n  .mdl-cell--4-col-tablet.mdl-cell--4-col-tablet {\n    width: calc(50% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--4-col, .mdl-grid--no-spacing >\n    .mdl-cell--4-col-tablet.mdl-cell--4-col-tablet {\n      width: 50%; }\n  .mdl-cell--5-col,\n  .mdl-cell--5-col-tablet.mdl-cell--5-col-tablet {\n    width: calc(62.5% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--5-col, .mdl-grid--no-spacing >\n    .mdl-cell--5-col-tablet.mdl-cell--5-col-tablet {\n      width: 62.5%; }\n  .mdl-cell--6-col,\n  .mdl-cell--6-col-tablet.mdl-cell--6-col-tablet {\n    width: calc(75% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--6-col, .mdl-grid--no-spacing >\n    .mdl-cell--6-col-tablet.mdl-cell--6-col-tablet {\n      width: 75%; }\n  .mdl-cell--7-col,\n  .mdl-cell--7-col-tablet.mdl-cell--7-col-tablet {\n    width: calc(87.5% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--7-col, .mdl-grid--no-spacing >\n    .mdl-cell--7-col-tablet.mdl-cell--7-col-tablet {\n      width: 87.5%; }\n  .mdl-cell--8-col,\n  .mdl-cell--8-col-tablet.mdl-cell--8-col-tablet {\n    width: calc(100% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--8-col, .mdl-grid--no-spacing >\n    .mdl-cell--8-col-tablet.mdl-cell--8-col-tablet {\n      width: 100%; }\n  .mdl-cell--9-col,\n  .mdl-cell--9-col-tablet.mdl-cell--9-col-tablet {\n    width: calc(100% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--9-col, .mdl-grid--no-spacing >\n    .mdl-cell--9-col-tablet.mdl-cell--9-col-tablet {\n      width: 100%; }\n  .mdl-cell--10-col,\n  .mdl-cell--10-col-tablet.mdl-cell--10-col-tablet {\n    width: calc(100% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--10-col, .mdl-grid--no-spacing >\n    .mdl-cell--10-col-tablet.mdl-cell--10-col-tablet {\n      width: 100%; }\n  .mdl-cell--11-col,\n  .mdl-cell--11-col-tablet.mdl-cell--11-col-tablet {\n    width: calc(100% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--11-col, .mdl-grid--no-spacing >\n    .mdl-cell--11-col-tablet.mdl-cell--11-col-tablet {\n      width: 100%; }\n  .mdl-cell--12-col,\n  .mdl-cell--12-col-tablet.mdl-cell--12-col-tablet {\n    width: calc(100% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--12-col, .mdl-grid--no-spacing >\n    .mdl-cell--12-col-tablet.mdl-cell--12-col-tablet {\n      width: 100%; }\n  .mdl-cell--1-offset,\n  .mdl-cell--1-offset-tablet.mdl-cell--1-offset-tablet {\n    margin-left: calc(12.5% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--1-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--1-offset-tablet.mdl-cell--1-offset-tablet {\n      margin-left: 12.5%; }\n  .mdl-cell--2-offset,\n  .mdl-cell--2-offset-tablet.mdl-cell--2-offset-tablet {\n    margin-left: calc(25% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--2-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--2-offset-tablet.mdl-cell--2-offset-tablet {\n      margin-left: 25%; }\n  .mdl-cell--3-offset,\n  .mdl-cell--3-offset-tablet.mdl-cell--3-offset-tablet {\n    margin-left: calc(37.5% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--3-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--3-offset-tablet.mdl-cell--3-offset-tablet {\n      margin-left: 37.5%; }\n  .mdl-cell--4-offset,\n  .mdl-cell--4-offset-tablet.mdl-cell--4-offset-tablet {\n    margin-left: calc(50% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--4-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--4-offset-tablet.mdl-cell--4-offset-tablet {\n      margin-left: 50%; }\n  .mdl-cell--5-offset,\n  .mdl-cell--5-offset-tablet.mdl-cell--5-offset-tablet {\n    margin-left: calc(62.5% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--5-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--5-offset-tablet.mdl-cell--5-offset-tablet {\n      margin-left: 62.5%; }\n  .mdl-cell--6-offset,\n  .mdl-cell--6-offset-tablet.mdl-cell--6-offset-tablet {\n    margin-left: calc(75% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--6-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--6-offset-tablet.mdl-cell--6-offset-tablet {\n      margin-left: 75%; }\n  .mdl-cell--7-offset,\n  .mdl-cell--7-offset-tablet.mdl-cell--7-offset-tablet {\n    margin-left: calc(87.5% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--7-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--7-offset-tablet.mdl-cell--7-offset-tablet {\n      margin-left: 87.5%; } }\n\n@media (min-width: 840px) {\n  .mdl-grid {\n    padding: 8px; }\n  .mdl-cell {\n    margin: 8px;\n    width: calc(33.3333333333% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell {\n      width: 33.3333333333%; }\n  .mdl-cell--hide-desktop {\n    display: none !important; }\n  .mdl-cell--order-1-desktop.mdl-cell--order-1-desktop {\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1; }\n  .mdl-cell--order-2-desktop.mdl-cell--order-2-desktop {\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2; }\n  .mdl-cell--order-3-desktop.mdl-cell--order-3-desktop {\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3; }\n  .mdl-cell--order-4-desktop.mdl-cell--order-4-desktop {\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4; }\n  .mdl-cell--order-5-desktop.mdl-cell--order-5-desktop {\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5; }\n  .mdl-cell--order-6-desktop.mdl-cell--order-6-desktop {\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6; }\n  .mdl-cell--order-7-desktop.mdl-cell--order-7-desktop {\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7; }\n  .mdl-cell--order-8-desktop.mdl-cell--order-8-desktop {\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8; }\n  .mdl-cell--order-9-desktop.mdl-cell--order-9-desktop {\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9; }\n  .mdl-cell--order-10-desktop.mdl-cell--order-10-desktop {\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10; }\n  .mdl-cell--order-11-desktop.mdl-cell--order-11-desktop {\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11; }\n  .mdl-cell--order-12-desktop.mdl-cell--order-12-desktop {\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12; }\n  .mdl-cell--1-col,\n  .mdl-cell--1-col-desktop.mdl-cell--1-col-desktop {\n    width: calc(8.3333333333% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--1-col, .mdl-grid--no-spacing >\n    .mdl-cell--1-col-desktop.mdl-cell--1-col-desktop {\n      width: 8.3333333333%; }\n  .mdl-cell--2-col,\n  .mdl-cell--2-col-desktop.mdl-cell--2-col-desktop {\n    width: calc(16.6666666667% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--2-col, .mdl-grid--no-spacing >\n    .mdl-cell--2-col-desktop.mdl-cell--2-col-desktop {\n      width: 16.6666666667%; }\n  .mdl-cell--3-col,\n  .mdl-cell--3-col-desktop.mdl-cell--3-col-desktop {\n    width: calc(25% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--3-col, .mdl-grid--no-spacing >\n    .mdl-cell--3-col-desktop.mdl-cell--3-col-desktop {\n      width: 25%; }\n  .mdl-cell--4-col,\n  .mdl-cell--4-col-desktop.mdl-cell--4-col-desktop {\n    width: calc(33.3333333333% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--4-col, .mdl-grid--no-spacing >\n    .mdl-cell--4-col-desktop.mdl-cell--4-col-desktop {\n      width: 33.3333333333%; }\n  .mdl-cell--5-col,\n  .mdl-cell--5-col-desktop.mdl-cell--5-col-desktop {\n    width: calc(41.6666666667% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--5-col, .mdl-grid--no-spacing >\n    .mdl-cell--5-col-desktop.mdl-cell--5-col-desktop {\n      width: 41.6666666667%; }\n  .mdl-cell--6-col,\n  .mdl-cell--6-col-desktop.mdl-cell--6-col-desktop {\n    width: calc(50% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--6-col, .mdl-grid--no-spacing >\n    .mdl-cell--6-col-desktop.mdl-cell--6-col-desktop {\n      width: 50%; }\n  .mdl-cell--7-col,\n  .mdl-cell--7-col-desktop.mdl-cell--7-col-desktop {\n    width: calc(58.3333333333% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--7-col, .mdl-grid--no-spacing >\n    .mdl-cell--7-col-desktop.mdl-cell--7-col-desktop {\n      width: 58.3333333333%; }\n  .mdl-cell--8-col,\n  .mdl-cell--8-col-desktop.mdl-cell--8-col-desktop {\n    width: calc(66.6666666667% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--8-col, .mdl-grid--no-spacing >\n    .mdl-cell--8-col-desktop.mdl-cell--8-col-desktop {\n      width: 66.6666666667%; }\n  .mdl-cell--9-col,\n  .mdl-cell--9-col-desktop.mdl-cell--9-col-desktop {\n    width: calc(75% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--9-col, .mdl-grid--no-spacing >\n    .mdl-cell--9-col-desktop.mdl-cell--9-col-desktop {\n      width: 75%; }\n  .mdl-cell--10-col,\n  .mdl-cell--10-col-desktop.mdl-cell--10-col-desktop {\n    width: calc(83.3333333333% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--10-col, .mdl-grid--no-spacing >\n    .mdl-cell--10-col-desktop.mdl-cell--10-col-desktop {\n      width: 83.3333333333%; }\n  .mdl-cell--11-col,\n  .mdl-cell--11-col-desktop.mdl-cell--11-col-desktop {\n    width: calc(91.6666666667% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--11-col, .mdl-grid--no-spacing >\n    .mdl-cell--11-col-desktop.mdl-cell--11-col-desktop {\n      width: 91.6666666667%; }\n  .mdl-cell--12-col,\n  .mdl-cell--12-col-desktop.mdl-cell--12-col-desktop {\n    width: calc(100% - 16px); }\n    .mdl-grid--no-spacing > .mdl-cell--12-col, .mdl-grid--no-spacing >\n    .mdl-cell--12-col-desktop.mdl-cell--12-col-desktop {\n      width: 100%; }\n  .mdl-cell--1-offset,\n  .mdl-cell--1-offset-desktop.mdl-cell--1-offset-desktop {\n    margin-left: calc(8.3333333333% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--1-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--1-offset-desktop.mdl-cell--1-offset-desktop {\n      margin-left: 8.3333333333%; }\n  .mdl-cell--2-offset,\n  .mdl-cell--2-offset-desktop.mdl-cell--2-offset-desktop {\n    margin-left: calc(16.6666666667% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--2-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--2-offset-desktop.mdl-cell--2-offset-desktop {\n      margin-left: 16.6666666667%; }\n  .mdl-cell--3-offset,\n  .mdl-cell--3-offset-desktop.mdl-cell--3-offset-desktop {\n    margin-left: calc(25% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--3-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--3-offset-desktop.mdl-cell--3-offset-desktop {\n      margin-left: 25%; }\n  .mdl-cell--4-offset,\n  .mdl-cell--4-offset-desktop.mdl-cell--4-offset-desktop {\n    margin-left: calc(33.3333333333% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--4-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--4-offset-desktop.mdl-cell--4-offset-desktop {\n      margin-left: 33.3333333333%; }\n  .mdl-cell--5-offset,\n  .mdl-cell--5-offset-desktop.mdl-cell--5-offset-desktop {\n    margin-left: calc(41.6666666667% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--5-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--5-offset-desktop.mdl-cell--5-offset-desktop {\n      margin-left: 41.6666666667%; }\n  .mdl-cell--6-offset,\n  .mdl-cell--6-offset-desktop.mdl-cell--6-offset-desktop {\n    margin-left: calc(50% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--6-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--6-offset-desktop.mdl-cell--6-offset-desktop {\n      margin-left: 50%; }\n  .mdl-cell--7-offset,\n  .mdl-cell--7-offset-desktop.mdl-cell--7-offset-desktop {\n    margin-left: calc(58.3333333333% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--7-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--7-offset-desktop.mdl-cell--7-offset-desktop {\n      margin-left: 58.3333333333%; }\n  .mdl-cell--8-offset,\n  .mdl-cell--8-offset-desktop.mdl-cell--8-offset-desktop {\n    margin-left: calc(66.6666666667% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--8-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--8-offset-desktop.mdl-cell--8-offset-desktop {\n      margin-left: 66.6666666667%; }\n  .mdl-cell--9-offset,\n  .mdl-cell--9-offset-desktop.mdl-cell--9-offset-desktop {\n    margin-left: calc(75% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--9-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--9-offset-desktop.mdl-cell--9-offset-desktop {\n      margin-left: 75%; }\n  .mdl-cell--10-offset,\n  .mdl-cell--10-offset-desktop.mdl-cell--10-offset-desktop {\n    margin-left: calc(83.3333333333% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--10-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--10-offset-desktop.mdl-cell--10-offset-desktop {\n      margin-left: 83.3333333333%; }\n  .mdl-cell--11-offset,\n  .mdl-cell--11-offset-desktop.mdl-cell--11-offset-desktop {\n    margin-left: calc(91.6666666667% + 8px); }\n    .mdl-grid.mdl-grid--no-spacing > .mdl-cell--11-offset, .mdl-grid.mdl-grid--no-spacing >\n    .mdl-cell--11-offset-desktop.mdl-cell--11-offset-desktop {\n      margin-left: 91.6666666667%; } }\n", ""]);

// exports


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(162);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(27)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-2!./offline.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-2!./offline.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\r\n/* line 6, ../sass/_content.sass */\r\n.offline-ui .offline-ui-retry:before {\r\n  content: \"Reconectar\";\r\n}\r\n/* line 11, ../sass/_content.sass */\r\n.offline-ui.offline-ui-up .offline-ui-content:before {\r\n  content: \"Tu computador est\\E1   conectado a internet.\";\r\n}\r\n@media (max-width: 1024px) {\r\n  /* line 11, ../sass/_content.sass */\r\n  .offline-ui.offline-ui-up .offline-ui-content:before {\r\n    content: \"Tu dispositivo est\\E1   conectado a internet.\";\r\n  }\r\n}\r\n@media (max-width: 568px) {\r\n  /* line 11, ../sass/_content.sass */\r\n  .offline-ui.offline-ui-up .offline-ui-content:before {\r\n    content: \"Tu dispositivo est\\E1   conectado.\";\r\n  }\r\n}\r\n/* line 22, ../sass/_content.sass */\r\n.offline-ui.offline-ui-down .offline-ui-content:before {\r\n  content: \"Tu computador perdi\\F3   su conexi\\F3n a internet.\";\r\n}\r\n@media (max-width: 1024px) {\r\n  /* line 22, ../sass/_content.sass */\r\n  .offline-ui.offline-ui-down .offline-ui-content:before {\r\n    content: \"Tu dispositivo perdi\\F3   su conexi\\F3n a internet.\";\r\n  }\r\n}\r\n@media (max-width: 568px) {\r\n  /* line 22, ../sass/_content.sass */\r\n  .offline-ui.offline-ui-down .offline-ui-content:before {\r\n    content: \"Tu dispositivo no est\\E1   conectado.\";\r\n  }\r\n}\r\n/* line 33, ../sass/_content.sass */\r\n.offline-ui.offline-ui-down.offline-ui-connecting .offline-ui-content:before, .offline-ui.offline-ui-down.offline-ui-connecting-2s .offline-ui-content:before {\r\n  content: \"Intentando reconectar...\";\r\n}\r\n/* line 42, ../sass/_content.sass */\r\n.offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit=\"second\"]:before {\r\n  content: \"Conexi\\F3n perdida. Reconectando en \" attr(data-retry-in-value) \" segundos...\";\r\n}\r\n@media (max-width: 568px) {\r\n  /* line 42, ../sass/_content.sass */\r\n  .offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit=\"second\"]:before {\r\n    content: \"Reconectando en \" attr(data-retry-in-value) \"s...\";\r\n  }\r\n}\r\n/* line 50, ../sass/_content.sass */\r\n.offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit=\"second\"][data-retry-in-value=\"1\"]:before {\r\n  content: \"Conexi\\F3n perdida. Reconectando en \" attr(data-retry-in-value) \" segundo...\";\r\n}\r\n@media (max-width: 568px) {\r\n  /* line 50, ../sass/_content.sass */\r\n  .offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit=\"second\"][data-retry-in-value=\"1\"]:before {\r\n    content: \"Reconectando en \" attr(data-retry-in-value) \"s...\";\r\n  }\r\n}\r\n/* line 58, ../sass/_content.sass */\r\n.offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit=\"minute\"]:before {\r\n  content: \"Conexi\\F3n perdida. Reconectando en \" attr(data-retry-in-value) \" minutos...\";\r\n}\r\n@media (max-width: 568px) {\r\n  /* line 58, ../sass/_content.sass */\r\n  .offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit=\"minute\"]:before {\r\n    content: \"Reconectando en \" attr(data-retry-in-value) \"m...\";\r\n  }\r\n}\r\n/* line 66, ../sass/_content.sass */\r\n.offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit=\"minute\"][data-retry-in-value=\"1\"]:before {\r\n  content: \"Conexi\\F3n perdida. Reconectando en \" attr(data-retry-in-value) \" minuto...\";\r\n}\r\n@media (max-width: 568px) {\r\n  /* line 66, ../sass/_content.sass */\r\n  .offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit=\"minute\"][data-retry-in-value=\"1\"]:before {\r\n    content: \"Reconectando en \" attr(data-retry-in-value) \"m...\";\r\n  }\r\n}\r\n/* line 74, ../sass/_content.sass */\r\n.offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit=\"hour\"]:before {\r\n  content: \"Conexi\\F3n perdida. Reconectando en \" attr(data-retry-in-value) \" horas...\";\r\n}\r\n@media (max-width: 568px) {\r\n  /* line 74, ../sass/_content.sass */\r\n  .offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit=\"hour\"]:before {\r\n    content: \"Reconectando en \" attr(data-retry-in-value) \"h...\";\r\n  }\r\n}\r\n/* line 82, ../sass/_content.sass */\r\n.offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit=\"hour\"][data-retry-in-value=\"1\"]:before {\r\n  content: \"Conexi\\F3n perdida. Reconectando en \" attr(data-retry-in-value) \" hora...\";\r\n}\r\n@media (max-width: 568px) {\r\n  /* line 82, ../sass/_content.sass */\r\n  .offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-content[data-retry-in-unit=\"hour\"][data-retry-in-value=\"1\"]:before {\r\n    content: \"Reconectando en \" attr(data-retry-in-value) \"h...\";\r\n  }\r\n}\r\n/* line 90, ../sass/_content.sass */\r\n.offline-ui.offline-ui-down.offline-ui-reconnect-failed-2s.offline-ui-waiting .offline-ui-retry {\r\n  display: none;\r\n}\r\n/* line 93, ../sass/_content.sass */\r\n.offline-ui.offline-ui-down.offline-ui-reconnect-failed-2s .offline-ui-content:before {\r\n  content: \"Intento fallido.\";\r\n}\r\n", ""]);

// exports


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


;

(function () {
  "use strict";
  /**
   * @license
   * Copyright 2015 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * A component handler interface using the revealing module design pattern.
   * More details on this design pattern here:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @author Jason Mayes.
   */

  /* exported componentHandler */
  // Pre-defining the componentHandler interface, for closure documentation and
  // static verification.

  var componentHandler = {
    /**
     * Searches existing DOM for elements of our component type and upgrades them
     * if they have not already been upgraded.
     *
     * @param {string=} optJsClass the programatic name of the element class we
     * need to create a new instance of.
     * @param {string=} optCssClass the name of the CSS class elements of this
     * type will have.
     */
    upgradeDom: function (optJsClass, optCssClass) {},

    /**
     * Upgrades a specific element rather than all in the DOM.
     *
     * @param {!Element} element The element we wish to upgrade.
     * @param {string=} optJsClass Optional name of the class we want to upgrade
     * the element to.
     */
    upgradeElement: function (element, optJsClass) {},

    /**
     * Upgrades a specific list of elements rather than all in the DOM.
     *
     * @param {!Element|!Array<!Element>|!NodeList|!HTMLCollection} elements
     * The elements we wish to upgrade.
     */
    upgradeElements: function (elements) {},

    /**
     * Upgrades all registered components found in the current DOM. This is
     * automatically called on window load.
     */
    upgradeAllRegistered: function () {},

    /**
     * Allows user to be alerted to any upgrades that are performed for a given
     * component type
     *
     * @param {string} jsClass The class name of the MDL component we wish
     * to hook into for any upgrades performed.
     * @param {function(!HTMLElement)} callback The function to call upon an
     * upgrade. This function should expect 1 parameter - the HTMLElement which
     * got upgraded.
     */
    registerUpgradedCallback: function (jsClass, callback) {},

    /**
     * Registers a class for future use and attempts to upgrade existing DOM.
     *
     * @param {componentHandler.ComponentConfigPublic} config the registration configuration
     */
    register: function (config) {},

    /**
     * Downgrade either a given node, an array of nodes, or a NodeList.
     *
     * @param {!Node|!Array<!Node>|!NodeList} nodes
     */
    downgradeElements: function (nodes) {}
  };

  componentHandler = function () {
    'use strict';
    /** @type {!Array<componentHandler.ComponentConfig>} */

    var registeredComponents_ = [];
    /** @type {!Array<componentHandler.Component>} */

    var createdComponents_ = [];
    var componentConfigProperty_ = 'mdlComponentConfigInternal_';
    /**
     * Searches registered components for a class we are interested in using.
     * Optionally replaces a match with passed object if specified.
     *
     * @param {string} name The name of a class we want to use.
     * @param {componentHandler.ComponentConfig=} optReplace Optional object to replace match with.
     * @return {!Object|boolean}
     * @private
     */

    function findRegisteredClass_(name, optReplace) {
      for (var i = 0; i < registeredComponents_.length; i++) {
        if (registeredComponents_[i].className === name) {
          if (typeof optReplace !== 'undefined') {
            registeredComponents_[i] = optReplace;
          }

          return registeredComponents_[i];
        }
      }

      return false;
    }
    /**
     * Returns an array of the classNames of the upgraded classes on the element.
     *
     * @param {!Element} element The element to fetch data from.
     * @return {!Array<string>}
     * @private
     */


    function getUpgradedListOfElement_(element) {
      var dataUpgraded = element.getAttribute('data-upgraded'); // Use `['']` as default value to conform the `,name,name...` style.

      return dataUpgraded === null ? [''] : dataUpgraded.split(',');
    }
    /**
     * Returns true if the given element has already been upgraded for the given
     * class.
     *
     * @param {!Element} element The element we want to check.
     * @param {string} jsClass The class to check for.
     * @returns {boolean}
     * @private
     */


    function isElementUpgraded_(element, jsClass) {
      var upgradedList = getUpgradedListOfElement_(element);
      return upgradedList.indexOf(jsClass) !== -1;
    }
    /**
     * Create an event object.
     *
     * @param {string} eventType The type name of the event.
     * @param {boolean} bubbles Whether the event should bubble up the DOM.
     * @param {boolean} cancelable Whether the event can be canceled.
     * @returns {!Event}
     */


    function createEvent_(eventType, bubbles, cancelable) {
      if ('CustomEvent' in window && typeof window.CustomEvent === 'function') {
        return new CustomEvent(eventType, {
          bubbles: bubbles,
          cancelable: cancelable
        });
      } else {
        var ev = document.createEvent('Events');
        ev.initEvent(eventType, bubbles, cancelable);
        return ev;
      }
    }
    /**
     * Searches existing DOM for elements of our component type and upgrades them
     * if they have not already been upgraded.
     *
     * @param {string=} optJsClass the programatic name of the element class we
     * need to create a new instance of.
     * @param {string=} optCssClass the name of the CSS class elements of this
     * type will have.
     */


    function upgradeDomInternal(optJsClass, optCssClass) {
      if (typeof optJsClass === 'undefined' && typeof optCssClass === 'undefined') {
        for (var i = 0; i < registeredComponents_.length; i++) {
          upgradeDomInternal(registeredComponents_[i].className, registeredComponents_[i].cssClass);
        }
      } else {
        var jsClass =
        /** @type {string} */
        optJsClass;

        if (typeof optCssClass === 'undefined') {
          var registeredClass = findRegisteredClass_(jsClass);

          if (registeredClass) {
            optCssClass = registeredClass.cssClass;
          }
        }

        var elements = document.querySelectorAll('.' + optCssClass);

        for (var n = 0; n < elements.length; n++) {
          upgradeElementInternal(elements[n], jsClass);
        }
      }
    }
    /**
     * Upgrades a specific element rather than all in the DOM.
     *
     * @param {!Element} element The element we wish to upgrade.
     * @param {string=} optJsClass Optional name of the class we want to upgrade
     * the element to.
     */


    function upgradeElementInternal(element, optJsClass) {
      // Verify argument type.
      if (!(typeof element === 'object' && element instanceof Element)) {
        throw new Error('Invalid argument provided to upgrade MDL element.');
      } // Allow upgrade to be canceled by canceling emitted event.


      var upgradingEv = createEvent_('mdl-componentupgrading', true, true);
      element.dispatchEvent(upgradingEv);

      if (upgradingEv.defaultPrevented) {
        return;
      }

      var upgradedList = getUpgradedListOfElement_(element);
      var classesToUpgrade = []; // If jsClass is not provided scan the registered components to find the
      // ones matching the element's CSS classList.

      if (!optJsClass) {
        var classList = element.classList;
        registeredComponents_.forEach(function (component) {
          // Match CSS & Not to be upgraded & Not upgraded.
          if (classList.contains(component.cssClass) && classesToUpgrade.indexOf(component) === -1 && !isElementUpgraded_(element, component.className)) {
            classesToUpgrade.push(component);
          }
        });
      } else if (!isElementUpgraded_(element, optJsClass)) {
        classesToUpgrade.push(findRegisteredClass_(optJsClass));
      } // Upgrade the element for each classes.


      for (var i = 0, n = classesToUpgrade.length, registeredClass; i < n; i++) {
        registeredClass = classesToUpgrade[i];

        if (registeredClass) {
          // Mark element as upgraded.
          upgradedList.push(registeredClass.className);
          element.setAttribute('data-upgraded', upgradedList.join(','));
          var instance = new registeredClass.classConstructor(element);
          instance[componentConfigProperty_] = registeredClass;
          createdComponents_.push(instance); // Call any callbacks the user has registered with this component type.

          for (var j = 0, m = registeredClass.callbacks.length; j < m; j++) {
            registeredClass.callbacks[j](element);
          }

          if (registeredClass.widget) {
            // Assign per element instance for control over API
            element[registeredClass.className] = instance;
          }
        } else {
          throw new Error('Unable to find a registered component for the given class.');
        }

        var upgradedEv = createEvent_('mdl-componentupgraded', true, false);
        element.dispatchEvent(upgradedEv);
      }
    }
    /**
     * Upgrades a specific list of elements rather than all in the DOM.
     *
     * @param {!Element|!Array<!Element>|!NodeList|!HTMLCollection} elements
     * The elements we wish to upgrade.
     */


    function upgradeElementsInternal(elements) {
      if (!Array.isArray(elements)) {
        if (elements instanceof Element) {
          elements = [elements];
        } else {
          elements = Array.prototype.slice.call(elements);
        }
      }

      for (var i = 0, n = elements.length, element; i < n; i++) {
        element = elements[i];

        if (element instanceof HTMLElement) {
          upgradeElementInternal(element);

          if (element.children.length > 0) {
            upgradeElementsInternal(element.children);
          }
        }
      }
    }
    /**
     * Registers a class for future use and attempts to upgrade existing DOM.
     *
     * @param {componentHandler.ComponentConfigPublic} config
     */


    function registerInternal(config) {
      // In order to support both Closure-compiled and uncompiled code accessing
      // this method, we need to allow for both the dot and array syntax for
      // property access. You'll therefore see the `foo.bar || foo['bar']`
      // pattern repeated across this method.
      var widgetMissing = typeof config.widget === 'undefined' && typeof config['widget'] === 'undefined';
      var widget = true;

      if (!widgetMissing) {
        widget = config.widget || config['widget'];
      }

      var newConfig =
      /** @type {componentHandler.ComponentConfig} */
      {
        classConstructor: config.constructor || config['constructor'],
        className: config.classAsString || config['classAsString'],
        cssClass: config.cssClass || config['cssClass'],
        widget: widget,
        callbacks: []
      };
      registeredComponents_.forEach(function (item) {
        if (item.cssClass === newConfig.cssClass) {
          throw new Error('The provided cssClass has already been registered: ' + item.cssClass);
        }

        if (item.className === newConfig.className) {
          throw new Error('The provided className has already been registered');
        }
      });

      if (config.constructor.prototype.hasOwnProperty(componentConfigProperty_)) {
        throw new Error('MDL component classes must not have ' + componentConfigProperty_ + ' defined as a property.');
      }

      var found = findRegisteredClass_(config.classAsString, newConfig);

      if (!found) {
        registeredComponents_.push(newConfig);
      }
    }
    /**
     * Allows user to be alerted to any upgrades that are performed for a given
     * component type
     *
     * @param {string} jsClass The class name of the MDL component we wish
     * to hook into for any upgrades performed.
     * @param {function(!HTMLElement)} callback The function to call upon an
     * upgrade. This function should expect 1 parameter - the HTMLElement which
     * got upgraded.
     */


    function registerUpgradedCallbackInternal(jsClass, callback) {
      var regClass = findRegisteredClass_(jsClass);

      if (regClass) {
        regClass.callbacks.push(callback);
      }
    }
    /**
     * Upgrades all registered components found in the current DOM. This is
     * automatically called on window load.
     */


    function upgradeAllRegisteredInternal() {
      for (var n = 0; n < registeredComponents_.length; n++) {
        upgradeDomInternal(registeredComponents_[n].className);
      }
    }
    /**
     * Check the component for the downgrade method.
     * Execute if found.
     * Remove component from createdComponents list.
     *
     * @param {?componentHandler.Component} component
     */


    function deconstructComponentInternal(component) {
      if (component) {
        var componentIndex = createdComponents_.indexOf(component);
        createdComponents_.splice(componentIndex, 1);
        var upgrades = component.element_.getAttribute('data-upgraded').split(',');
        var componentPlace = upgrades.indexOf(component[componentConfigProperty_].classAsString);
        upgrades.splice(componentPlace, 1);
        component.element_.setAttribute('data-upgraded', upgrades.join(','));
        var ev = createEvent_('mdl-componentdowngraded', true, false);
        component.element_.dispatchEvent(ev);
      }
    }
    /**
     * Downgrade either a given node, an array of nodes, or a NodeList.
     *
     * @param {!Node|!Array<!Node>|!NodeList} nodes
     */


    function downgradeNodesInternal(nodes) {
      /**
       * Auxiliary function to downgrade a single node.
       * @param  {!Node} node the node to be downgraded
       */
      var downgradeNode = function (node) {
        createdComponents_.filter(function (item) {
          return item.element_ === node;
        }).forEach(deconstructComponentInternal);
      };

      if (nodes instanceof Array || nodes instanceof NodeList) {
        for (var n = 0; n < nodes.length; n++) {
          downgradeNode(nodes[n]);
        }
      } else if (nodes instanceof Node) {
        downgradeNode(nodes);
      } else {
        throw new Error('Invalid argument provided to downgrade MDL nodes.');
      }
    } // Now return the functions that should be made public with their publicly
    // facing names...


    return {
      upgradeDom: upgradeDomInternal,
      upgradeElement: upgradeElementInternal,
      upgradeElements: upgradeElementsInternal,
      upgradeAllRegistered: upgradeAllRegisteredInternal,
      registerUpgradedCallback: registerUpgradedCallbackInternal,
      register: registerInternal,
      downgradeElements: downgradeNodesInternal
    };
  }();
  /**
   * Describes the type of a registered component type managed by
   * componentHandler. Provided for benefit of the Closure compiler.
   *
   * @typedef {{
   *   constructor: Function,
   *   classAsString: string,
   *   cssClass: string,
   *   widget: (string|boolean|undefined)
   * }}
   */


  componentHandler.ComponentConfigPublic; // jshint ignore:line

  /**
   * Describes the type of a registered component type managed by
   * componentHandler. Provided for benefit of the Closure compiler.
   *
   * @typedef {{
   *   constructor: !Function,
   *   className: string,
   *   cssClass: string,
   *   widget: (string|boolean),
   *   callbacks: !Array<function(!HTMLElement)>
   * }}
   */

  componentHandler.ComponentConfig; // jshint ignore:line

  /**
   * Created component (i.e., upgraded element) type as managed by
   * componentHandler. Provided for benefit of the Closure compiler.
   *
   * @typedef {{
   *   element_: !HTMLElement,
   *   className: string,
   *   classAsString: string,
   *   cssClass: string,
   *   widget: string
   * }}
   */

  componentHandler.Component; // jshint ignore:line
  // Export all symbols, for the benefit of Closure compiler.
  // No effect on uncompiled code.

  componentHandler['upgradeDom'] = componentHandler.upgradeDom;
  componentHandler['upgradeElement'] = componentHandler.upgradeElement;
  componentHandler['upgradeElements'] = componentHandler.upgradeElements;
  componentHandler['upgradeAllRegistered'] = componentHandler.upgradeAllRegistered;
  componentHandler['registerUpgradedCallback'] = componentHandler.registerUpgradedCallback;
  componentHandler['register'] = componentHandler.register;
  componentHandler['downgradeElements'] = componentHandler.downgradeElements;
  window.componentHandler = componentHandler;
  window['componentHandler'] = componentHandler;
  window.addEventListener('load', function () {
    'use strict';
    /**
     * Performs a "Cutting the mustard" test. If the browser supports the features
     * tested, adds a mdl-js class to the <html> element. It then upgrades all MDL
     * components requiring JavaScript.
     */

    if ('classList' in document.createElement('div') && 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach) {
      document.documentElement.classList.add('mdl-js');
      componentHandler.upgradeAllRegistered();
    } else {
      /**
       * Dummy function to avoid JS errors.
       */
      componentHandler.upgradeElement = function () {};
      /**
       * Dummy function to avoid JS errors.
       */


      componentHandler.register = function () {};
    }
  }); // Source: https://github.com/darius/requestAnimationFrame/blob/master/requestAnimationFrame.js
  // Adapted from https://gist.github.com/paulirish/1579671 which derived from
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
  // requestAnimationFrame polyfill by Erik Möller.
  // Fixes from Paul Irish, Tino Zijdel, Andrew Mao, Klemen Slavič, Darius Bacon
  // MIT license

  if (!Date.now) {
    /**
     * Date.now polyfill.
     * @return {number} the current Date
     */
    Date.now = function () {
      return new Date().getTime();
    };

    Date['now'] = Date.now;
  }

  var vendors = ['webkit', 'moz'];

  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
    var vp = vendors[i];
    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
    window['requestAnimationFrame'] = window.requestAnimationFrame;
    window['cancelAnimationFrame'] = window.cancelAnimationFrame;
  }

  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;
    /**
     * requestAnimationFrame polyfill.
     * @param  {!Function} callback the callback function.
     */

    window.requestAnimationFrame = function (callback) {
      var now = Date.now();
      var nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function () {
        callback(lastTime = nextTime);
      }, nextTime - now);
    };

    window.cancelAnimationFrame = clearTimeout;
    window['requestAnimationFrame'] = window.requestAnimationFrame;
    window['cancelAnimationFrame'] = window.cancelAnimationFrame;
  }
  /**
   * @license
   * Copyright 2015 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
     * Class constructor for Button MDL component.
     * Implements MDL component design pattern defined at:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @param {HTMLElement} element The element that will be upgraded.
     */


  var MaterialButton = function MaterialButton(element) {
    this.element_ = element; // Initialize instance.

    this.init();
  };

  window['MaterialButton'] = MaterialButton;
  /**
     * Store constants in one place so they can be updated easily.
     *
     * @enum {string | number}
     * @private
     */

  MaterialButton.prototype.Constant_ = {};
  /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */

  MaterialButton.prototype.CssClasses_ = {
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    RIPPLE_CONTAINER: 'mdl-button__ripple-container',
    RIPPLE: 'mdl-ripple'
  };
  /**
     * Handle blur of element.
     *
     * @param {Event} event The event that fired.
     * @private
     */

  MaterialButton.prototype.blurHandler_ = function (event) {
    if (event) {
      this.element_.blur();
    }
  }; // Public methods.

  /**
     * Disable button.
     *
     * @public
     */


  MaterialButton.prototype.disable = function () {
    this.element_.disabled = true;
  };

  MaterialButton.prototype['disable'] = MaterialButton.prototype.disable;
  /**
     * Enable button.
     *
     * @public
     */

  MaterialButton.prototype.enable = function () {
    this.element_.disabled = false;
  };

  MaterialButton.prototype['enable'] = MaterialButton.prototype.enable;
  /**
     * Initialize element.
     */

  MaterialButton.prototype.init = function () {
    if (this.element_) {
      if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
        var rippleContainer = document.createElement('span');
        rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
        this.rippleElement_ = document.createElement('span');
        this.rippleElement_.classList.add(this.CssClasses_.RIPPLE);
        rippleContainer.appendChild(this.rippleElement_);
        this.boundRippleBlurHandler = this.blurHandler_.bind(this);
        this.rippleElement_.addEventListener('mouseup', this.boundRippleBlurHandler);
        this.element_.appendChild(rippleContainer);
      }

      this.boundButtonBlurHandler = this.blurHandler_.bind(this);
      this.element_.addEventListener('mouseup', this.boundButtonBlurHandler);
      this.element_.addEventListener('mouseleave', this.boundButtonBlurHandler);
    }
  }; // The component registers itself. It can assume componentHandler is available
  // in the global scope.


  componentHandler.register({
    constructor: MaterialButton,
    classAsString: 'MaterialButton',
    cssClass: 'mdl-js-button',
    widget: true
  });
  /**
   * @license
   * Copyright 2015 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
     * Class constructor for Checkbox MDL component.
     * Implements MDL component design pattern defined at:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @constructor
     * @param {HTMLElement} element The element that will be upgraded.
     */

  var MaterialCheckbox = function MaterialCheckbox(element) {
    this.element_ = element; // Initialize instance.

    this.init();
  };

  window['MaterialCheckbox'] = MaterialCheckbox;
  /**
     * Store constants in one place so they can be updated easily.
     *
     * @enum {string | number}
     * @private
     */

  MaterialCheckbox.prototype.Constant_ = {
    TINY_TIMEOUT: 0.001
  };
  /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */

  MaterialCheckbox.prototype.CssClasses_ = {
    INPUT: 'mdl-checkbox__input',
    BOX_OUTLINE: 'mdl-checkbox__box-outline',
    FOCUS_HELPER: 'mdl-checkbox__focus-helper',
    TICK_OUTLINE: 'mdl-checkbox__tick-outline',
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
    RIPPLE_CONTAINER: 'mdl-checkbox__ripple-container',
    RIPPLE_CENTER: 'mdl-ripple--center',
    RIPPLE: 'mdl-ripple',
    IS_FOCUSED: 'is-focused',
    IS_DISABLED: 'is-disabled',
    IS_CHECKED: 'is-checked',
    IS_UPGRADED: 'is-upgraded'
  };
  /**
     * Handle change of state.
     *
     * @param {Event} event The event that fired.
     * @private
     */

  MaterialCheckbox.prototype.onChange_ = function (event) {
    this.updateClasses_();
  };
  /**
     * Handle focus of element.
     *
     * @param {Event} event The event that fired.
     * @private
     */


  MaterialCheckbox.prototype.onFocus_ = function (event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
  };
  /**
     * Handle lost focus of element.
     *
     * @param {Event} event The event that fired.
     * @private
     */


  MaterialCheckbox.prototype.onBlur_ = function (event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
  };
  /**
     * Handle mouseup.
     *
     * @param {Event} event The event that fired.
     * @private
     */


  MaterialCheckbox.prototype.onMouseUp_ = function (event) {
    this.blur_();
  };
  /**
     * Handle class updates.
     *
     * @private
     */


  MaterialCheckbox.prototype.updateClasses_ = function () {
    this.checkDisabled();
    this.checkToggleState();
  };
  /**
     * Add blur.
     *
     * @private
     */


  MaterialCheckbox.prototype.blur_ = function () {
    // TODO: figure out why there's a focus event being fired after our blur,
    // so that we can avoid this hack.
    window.setTimeout(function () {
      this.inputElement_.blur();
    }.bind(this), this.Constant_.TINY_TIMEOUT);
  }; // Public methods.

  /**
     * Check the inputs toggle state and update display.
     *
     * @public
     */


  MaterialCheckbox.prototype.checkToggleState = function () {
    if (this.inputElement_.checked) {
      this.element_.classList.add(this.CssClasses_.IS_CHECKED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
    }
  };

  MaterialCheckbox.prototype['checkToggleState'] = MaterialCheckbox.prototype.checkToggleState;
  /**
     * Check the inputs disabled state and update display.
     *
     * @public
     */

  MaterialCheckbox.prototype.checkDisabled = function () {
    if (this.inputElement_.disabled) {
      this.element_.classList.add(this.CssClasses_.IS_DISABLED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
    }
  };

  MaterialCheckbox.prototype['checkDisabled'] = MaterialCheckbox.prototype.checkDisabled;
  /**
     * Disable checkbox.
     *
     * @public
     */

  MaterialCheckbox.prototype.disable = function () {
    this.inputElement_.disabled = true;
    this.updateClasses_();
  };

  MaterialCheckbox.prototype['disable'] = MaterialCheckbox.prototype.disable;
  /**
     * Enable checkbox.
     *
     * @public
     */

  MaterialCheckbox.prototype.enable = function () {
    this.inputElement_.disabled = false;
    this.updateClasses_();
  };

  MaterialCheckbox.prototype['enable'] = MaterialCheckbox.prototype.enable;
  /**
     * Check checkbox.
     *
     * @public
     */

  MaterialCheckbox.prototype.check = function () {
    this.inputElement_.checked = true;
    this.updateClasses_();
  };

  MaterialCheckbox.prototype['check'] = MaterialCheckbox.prototype.check;
  /**
     * Uncheck checkbox.
     *
     * @public
     */

  MaterialCheckbox.prototype.uncheck = function () {
    this.inputElement_.checked = false;
    this.updateClasses_();
  };

  MaterialCheckbox.prototype['uncheck'] = MaterialCheckbox.prototype.uncheck;
  /**
     * Initialize element.
     */

  MaterialCheckbox.prototype.init = function () {
    if (this.element_) {
      this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
      var boxOutline = document.createElement('span');
      boxOutline.classList.add(this.CssClasses_.BOX_OUTLINE);
      var tickContainer = document.createElement('span');
      tickContainer.classList.add(this.CssClasses_.FOCUS_HELPER);
      var tickOutline = document.createElement('span');
      tickOutline.classList.add(this.CssClasses_.TICK_OUTLINE);
      boxOutline.appendChild(tickOutline);
      this.element_.appendChild(tickContainer);
      this.element_.appendChild(boxOutline);

      if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
        this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
        this.rippleContainerElement_ = document.createElement('span');
        this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
        this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT);
        this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);
        this.boundRippleMouseUp = this.onMouseUp_.bind(this);
        this.rippleContainerElement_.addEventListener('mouseup', this.boundRippleMouseUp);
        var ripple = document.createElement('span');
        ripple.classList.add(this.CssClasses_.RIPPLE);
        this.rippleContainerElement_.appendChild(ripple);
        this.element_.appendChild(this.rippleContainerElement_);
      }

      this.boundInputOnChange = this.onChange_.bind(this);
      this.boundInputOnFocus = this.onFocus_.bind(this);
      this.boundInputOnBlur = this.onBlur_.bind(this);
      this.boundElementMouseUp = this.onMouseUp_.bind(this);
      this.inputElement_.addEventListener('change', this.boundInputOnChange);
      this.inputElement_.addEventListener('focus', this.boundInputOnFocus);
      this.inputElement_.addEventListener('blur', this.boundInputOnBlur);
      this.element_.addEventListener('mouseup', this.boundElementMouseUp);
      this.updateClasses_();
      this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
    }
  }; // The component registers itself. It can assume componentHandler is available
  // in the global scope.


  componentHandler.register({
    constructor: MaterialCheckbox,
    classAsString: 'MaterialCheckbox',
    cssClass: 'mdl-js-checkbox',
    widget: true
  });
  /**
   * @license
   * Copyright 2015 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
     * Class constructor for icon toggle MDL component.
     * Implements MDL component design pattern defined at:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @constructor
     * @param {HTMLElement} element The element that will be upgraded.
     */

  var MaterialIconToggle = function MaterialIconToggle(element) {
    this.element_ = element; // Initialize instance.

    this.init();
  };

  window['MaterialIconToggle'] = MaterialIconToggle;
  /**
     * Store constants in one place so they can be updated easily.
     *
     * @enum {string | number}
     * @private
     */

  MaterialIconToggle.prototype.Constant_ = {
    TINY_TIMEOUT: 0.001
  };
  /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */

  MaterialIconToggle.prototype.CssClasses_ = {
    INPUT: 'mdl-icon-toggle__input',
    JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
    RIPPLE_CONTAINER: 'mdl-icon-toggle__ripple-container',
    RIPPLE_CENTER: 'mdl-ripple--center',
    RIPPLE: 'mdl-ripple',
    IS_FOCUSED: 'is-focused',
    IS_DISABLED: 'is-disabled',
    IS_CHECKED: 'is-checked'
  };
  /**
     * Handle change of state.
     *
     * @param {Event} event The event that fired.
     * @private
     */

  MaterialIconToggle.prototype.onChange_ = function (event) {
    this.updateClasses_();
  };
  /**
     * Handle focus of element.
     *
     * @param {Event} event The event that fired.
     * @private
     */


  MaterialIconToggle.prototype.onFocus_ = function (event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
  };
  /**
     * Handle lost focus of element.
     *
     * @param {Event} event The event that fired.
     * @private
     */


  MaterialIconToggle.prototype.onBlur_ = function (event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
  };
  /**
     * Handle mouseup.
     *
     * @param {Event} event The event that fired.
     * @private
     */


  MaterialIconToggle.prototype.onMouseUp_ = function (event) {
    this.blur_();
  };
  /**
     * Handle class updates.
     *
     * @private
     */


  MaterialIconToggle.prototype.updateClasses_ = function () {
    this.checkDisabled();
    this.checkToggleState();
  };
  /**
     * Add blur.
     *
     * @private
     */


  MaterialIconToggle.prototype.blur_ = function () {
    // TODO: figure out why there's a focus event being fired after our blur,
    // so that we can avoid this hack.
    window.setTimeout(function () {
      this.inputElement_.blur();
    }.bind(this), this.Constant_.TINY_TIMEOUT);
  }; // Public methods.

  /**
     * Check the inputs toggle state and update display.
     *
     * @public
     */


  MaterialIconToggle.prototype.checkToggleState = function () {
    if (this.inputElement_.checked) {
      this.element_.classList.add(this.CssClasses_.IS_CHECKED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
    }
  };

  MaterialIconToggle.prototype['checkToggleState'] = MaterialIconToggle.prototype.checkToggleState;
  /**
     * Check the inputs disabled state and update display.
     *
     * @public
     */

  MaterialIconToggle.prototype.checkDisabled = function () {
    if (this.inputElement_.disabled) {
      this.element_.classList.add(this.CssClasses_.IS_DISABLED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
    }
  };

  MaterialIconToggle.prototype['checkDisabled'] = MaterialIconToggle.prototype.checkDisabled;
  /**
     * Disable icon toggle.
     *
     * @public
     */

  MaterialIconToggle.prototype.disable = function () {
    this.inputElement_.disabled = true;
    this.updateClasses_();
  };

  MaterialIconToggle.prototype['disable'] = MaterialIconToggle.prototype.disable;
  /**
     * Enable icon toggle.
     *
     * @public
     */

  MaterialIconToggle.prototype.enable = function () {
    this.inputElement_.disabled = false;
    this.updateClasses_();
  };

  MaterialIconToggle.prototype['enable'] = MaterialIconToggle.prototype.enable;
  /**
     * Check icon toggle.
     *
     * @public
     */

  MaterialIconToggle.prototype.check = function () {
    this.inputElement_.checked = true;
    this.updateClasses_();
  };

  MaterialIconToggle.prototype['check'] = MaterialIconToggle.prototype.check;
  /**
     * Uncheck icon toggle.
     *
     * @public
     */

  MaterialIconToggle.prototype.uncheck = function () {
    this.inputElement_.checked = false;
    this.updateClasses_();
  };

  MaterialIconToggle.prototype['uncheck'] = MaterialIconToggle.prototype.uncheck;
  /**
     * Initialize element.
     */

  MaterialIconToggle.prototype.init = function () {
    if (this.element_) {
      this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);

      if (this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {
        this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
        this.rippleContainerElement_ = document.createElement('span');
        this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
        this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT);
        this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);
        this.boundRippleMouseUp = this.onMouseUp_.bind(this);
        this.rippleContainerElement_.addEventListener('mouseup', this.boundRippleMouseUp);
        var ripple = document.createElement('span');
        ripple.classList.add(this.CssClasses_.RIPPLE);
        this.rippleContainerElement_.appendChild(ripple);
        this.element_.appendChild(this.rippleContainerElement_);
      }

      this.boundInputOnChange = this.onChange_.bind(this);
      this.boundInputOnFocus = this.onFocus_.bind(this);
      this.boundInputOnBlur = this.onBlur_.bind(this);
      this.boundElementOnMouseUp = this.onMouseUp_.bind(this);
      this.inputElement_.addEventListener('change', this.boundInputOnChange);
      this.inputElement_.addEventListener('focus', this.boundInputOnFocus);
      this.inputElement_.addEventListener('blur', this.boundInputOnBlur);
      this.element_.addEventListener('mouseup', this.boundElementOnMouseUp);
      this.updateClasses_();
      this.element_.classList.add('is-upgraded');
    }
  }; // The component registers itself. It can assume componentHandler is available
  // in the global scope.


  componentHandler.register({
    constructor: MaterialIconToggle,
    classAsString: 'MaterialIconToggle',
    cssClass: 'mdl-js-icon-toggle',
    widget: true
  });
  /**
   * @license
   * Copyright 2015 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
     * Class constructor for dropdown MDL component.
     * Implements MDL component design pattern defined at:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @constructor
     * @param {HTMLElement} element The element that will be upgraded.
     */

  var MaterialMenu = function MaterialMenu(element) {
    this.element_ = element; // Initialize instance.

    this.init();
  };

  window['MaterialMenu'] = MaterialMenu;
  /**
     * Store constants in one place so they can be updated easily.
     *
     * @enum {string | number}
     * @private
     */

  MaterialMenu.prototype.Constant_ = {
    // Total duration of the menu animation.
    TRANSITION_DURATION_SECONDS: 0.3,
    // The fraction of the total duration we want to use for menu item animations.
    TRANSITION_DURATION_FRACTION: 0.8,
    // How long the menu stays open after choosing an option (so the user can see
    // the ripple).
    CLOSE_TIMEOUT: 150
  };
  /**
     * Keycodes, for code readability.
     *
     * @enum {number}
     * @private
     */

  MaterialMenu.prototype.Keycodes_ = {
    ENTER: 13,
    ESCAPE: 27,
    SPACE: 32,
    UP_ARROW: 38,
    DOWN_ARROW: 40
  };
  /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */

  MaterialMenu.prototype.CssClasses_ = {
    CONTAINER: 'mdl-menu__container',
    OUTLINE: 'mdl-menu__outline',
    ITEM: 'mdl-menu__item',
    ITEM_RIPPLE_CONTAINER: 'mdl-menu__item-ripple-container',
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
    RIPPLE: 'mdl-ripple',
    // Statuses
    IS_UPGRADED: 'is-upgraded',
    IS_VISIBLE: 'is-visible',
    IS_ANIMATING: 'is-animating',
    // Alignment options
    BOTTOM_LEFT: 'mdl-menu--bottom-left',
    // This is the default.
    BOTTOM_RIGHT: 'mdl-menu--bottom-right',
    TOP_LEFT: 'mdl-menu--top-left',
    TOP_RIGHT: 'mdl-menu--top-right',
    UNALIGNED: 'mdl-menu--unaligned'
  };
  /**
     * Initialize element.
     */

  MaterialMenu.prototype.init = function () {
    if (this.element_) {
      // Create container for the menu.
      var container = document.createElement('div');
      container.classList.add(this.CssClasses_.CONTAINER);
      this.element_.parentElement.insertBefore(container, this.element_);
      this.element_.parentElement.removeChild(this.element_);
      container.appendChild(this.element_);
      this.container_ = container; // Create outline for the menu (shadow and background).

      var outline = document.createElement('div');
      outline.classList.add(this.CssClasses_.OUTLINE);
      this.outline_ = outline;
      container.insertBefore(outline, this.element_); // Find the "for" element and bind events to it.

      var forElId = this.element_.getAttribute('for') || this.element_.getAttribute('data-mdl-for');
      var forEl = null;

      if (forElId) {
        forEl = document.getElementById(forElId);

        if (forEl) {
          this.forElement_ = forEl;
          forEl.addEventListener('click', this.handleForClick_.bind(this));
          forEl.addEventListener('keydown', this.handleForKeyboardEvent_.bind(this));
        }
      }

      var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);
      this.boundItemKeydown_ = this.handleItemKeyboardEvent_.bind(this);
      this.boundItemClick_ = this.handleItemClick_.bind(this);

      for (var i = 0; i < items.length; i++) {
        // Add a listener to each menu item.
        items[i].addEventListener('click', this.boundItemClick_); // Add a tab index to each menu item.

        items[i].tabIndex = '-1'; // Add a keyboard listener to each menu item.

        items[i].addEventListener('keydown', this.boundItemKeydown_);
      } // Add ripple classes to each item, if the user has enabled ripples.


      if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
        this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);

        for (i = 0; i < items.length; i++) {
          var item = items[i];
          var rippleContainer = document.createElement('span');
          rippleContainer.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);
          var ripple = document.createElement('span');
          ripple.classList.add(this.CssClasses_.RIPPLE);
          rippleContainer.appendChild(ripple);
          item.appendChild(rippleContainer);
          item.classList.add(this.CssClasses_.RIPPLE_EFFECT);
        }
      } // Copy alignment classes to the container, so the outline can use them.


      if (this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)) {
        this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT);
      }

      if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {
        this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT);
      }

      if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {
        this.outline_.classList.add(this.CssClasses_.TOP_LEFT);
      }

      if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
        this.outline_.classList.add(this.CssClasses_.TOP_RIGHT);
      }

      if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {
        this.outline_.classList.add(this.CssClasses_.UNALIGNED);
      }

      container.classList.add(this.CssClasses_.IS_UPGRADED);
    }
  };
  /**
     * Handles a click on the "for" element, by positioning the menu and then
     * toggling it.
     *
     * @param {Event} evt The event that fired.
     * @private
     */


  MaterialMenu.prototype.handleForClick_ = function (evt) {
    if (this.element_ && this.forElement_) {
      var rect = this.forElement_.getBoundingClientRect();
      var forRect = this.forElement_.parentElement.getBoundingClientRect();

      if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {} else if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {
        // Position below the "for" element, aligned to its right.
        this.container_.style.right = forRect.right - rect.right + 'px';
        this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + 'px';
      } else if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {
        // Position above the "for" element, aligned to its left.
        this.container_.style.left = this.forElement_.offsetLeft + 'px';
        this.container_.style.bottom = forRect.bottom - rect.top + 'px';
      } else if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
        // Position above the "for" element, aligned to its right.
        this.container_.style.right = forRect.right - rect.right + 'px';
        this.container_.style.bottom = forRect.bottom - rect.top + 'px';
      } else {
        // Default: position below the "for" element, aligned to its left.
        this.container_.style.left = this.forElement_.offsetLeft + 'px';
        this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + 'px';
      }
    }

    this.toggle(evt);
  };
  /**
     * Handles a keyboard event on the "for" element.
     *
     * @param {Event} evt The event that fired.
     * @private
     */


  MaterialMenu.prototype.handleForKeyboardEvent_ = function (evt) {
    if (this.element_ && this.container_ && this.forElement_) {
      var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM + ':not([disabled])');

      if (items && items.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
        if (evt.keyCode === this.Keycodes_.UP_ARROW) {
          evt.preventDefault();
          items[items.length - 1].focus();
        } else if (evt.keyCode === this.Keycodes_.DOWN_ARROW) {
          evt.preventDefault();
          items[0].focus();
        }
      }
    }
  };
  /**
     * Handles a keyboard event on an item.
     *
     * @param {Event} evt The event that fired.
     * @private
     */


  MaterialMenu.prototype.handleItemKeyboardEvent_ = function (evt) {
    if (this.element_ && this.container_) {
      var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM + ':not([disabled])');

      if (items && items.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
        var currentIndex = Array.prototype.slice.call(items).indexOf(evt.target);

        if (evt.keyCode === this.Keycodes_.UP_ARROW) {
          evt.preventDefault();

          if (currentIndex > 0) {
            items[currentIndex - 1].focus();
          } else {
            items[items.length - 1].focus();
          }
        } else if (evt.keyCode === this.Keycodes_.DOWN_ARROW) {
          evt.preventDefault();

          if (items.length > currentIndex + 1) {
            items[currentIndex + 1].focus();
          } else {
            items[0].focus();
          }
        } else if (evt.keyCode === this.Keycodes_.SPACE || evt.keyCode === this.Keycodes_.ENTER) {
          evt.preventDefault(); // Send mousedown and mouseup to trigger ripple.

          var e = new MouseEvent('mousedown');
          evt.target.dispatchEvent(e);
          e = new MouseEvent('mouseup');
          evt.target.dispatchEvent(e); // Send click.

          evt.target.click();
        } else if (evt.keyCode === this.Keycodes_.ESCAPE) {
          evt.preventDefault();
          this.hide();
        }
      }
    }
  };
  /**
     * Handles a click event on an item.
     *
     * @param {Event} evt The event that fired.
     * @private
     */


  MaterialMenu.prototype.handleItemClick_ = function (evt) {
    if (evt.target.hasAttribute('disabled')) {
      evt.stopPropagation();
    } else {
      // Wait some time before closing menu, so the user can see the ripple.
      this.closing_ = true;
      window.setTimeout(function (evt) {
        this.hide();
        this.closing_ = false;
      }.bind(this), this.Constant_.CLOSE_TIMEOUT);
    }
  };
  /**
     * Calculates the initial clip (for opening the menu) or final clip (for closing
     * it), and applies it. This allows us to animate from or to the correct point,
     * that is, the point it's aligned to in the "for" element.
     *
     * @param {number} height Height of the clip rectangle
     * @param {number} width Width of the clip rectangle
     * @private
     */


  MaterialMenu.prototype.applyClip_ = function (height, width) {
    if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {
      // Do not clip.
      this.element_.style.clip = '';
    } else if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {
      // Clip to the top right corner of the menu.
      this.element_.style.clip = 'rect(0 ' + width + 'px ' + '0 ' + width + 'px)';
    } else if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {
      // Clip to the bottom left corner of the menu.
      this.element_.style.clip = 'rect(' + height + 'px 0 ' + height + 'px 0)';
    } else if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
      // Clip to the bottom right corner of the menu.
      this.element_.style.clip = 'rect(' + height + 'px ' + width + 'px ' + height + 'px ' + width + 'px)';
    } else {
      // Default: do not clip (same as clipping to the top left corner).
      this.element_.style.clip = '';
    }
  };
  /**
     * Cleanup function to remove animation listeners.
     *
     * @param {Event} evt
     * @private
     */


  MaterialMenu.prototype.removeAnimationEndListener_ = function (evt) {
    evt.target.classList.remove(MaterialMenu.prototype.CssClasses_.IS_ANIMATING);
  };
  /**
     * Adds an event listener to clean up after the animation ends.
     *
     * @private
     */


  MaterialMenu.prototype.addAnimationEndListener_ = function () {
    this.element_.addEventListener('transitionend', this.removeAnimationEndListener_);
    this.element_.addEventListener('webkitTransitionEnd', this.removeAnimationEndListener_);
  };
  /**
     * Displays the menu.
     *
     * @public
     */


  MaterialMenu.prototype.show = function (evt) {
    if (this.element_ && this.container_ && this.outline_) {
      // Measure the inner element.
      var height = this.element_.getBoundingClientRect().height;
      var width = this.element_.getBoundingClientRect().width; // Apply the inner element's size to the container and outline.

      this.container_.style.width = width + 'px';
      this.container_.style.height = height + 'px';
      this.outline_.style.width = width + 'px';
      this.outline_.style.height = height + 'px';
      var transitionDuration = this.Constant_.TRANSITION_DURATION_SECONDS * this.Constant_.TRANSITION_DURATION_FRACTION; // Calculate transition delays for individual menu items, so that they fade
      // in one at a time.

      var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);

      for (var i = 0; i < items.length; i++) {
        var itemDelay = null;

        if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT) || this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
          itemDelay = (height - items[i].offsetTop - items[i].offsetHeight) / height * transitionDuration + 's';
        } else {
          itemDelay = items[i].offsetTop / height * transitionDuration + 's';
        }

        items[i].style.transitionDelay = itemDelay;
      } // Apply the initial clip to the text before we start animating.


      this.applyClip_(height, width); // Wait for the next frame, turn on animation, and apply the final clip.
      // Also make it visible. This triggers the transitions.

      window.requestAnimationFrame(function () {
        this.element_.classList.add(this.CssClasses_.IS_ANIMATING);
        this.element_.style.clip = 'rect(0 ' + width + 'px ' + height + 'px 0)';
        this.container_.classList.add(this.CssClasses_.IS_VISIBLE);
      }.bind(this)); // Clean up after the animation is complete.

      this.addAnimationEndListener_(); // Add a click listener to the document, to close the menu.

      var callback = function (e) {
        // Check to see if the document is processing the same event that
        // displayed the menu in the first place. If so, do nothing.
        // Also check to see if the menu is in the process of closing itself, and
        // do nothing in that case.
        // Also check if the clicked element is a menu item
        // if so, do nothing.
        if (e !== evt && !this.closing_ && e.target.parentNode !== this.element_) {
          document.removeEventListener('click', callback);
          this.hide();
        }
      }.bind(this);

      document.addEventListener('click', callback);
    }
  };

  MaterialMenu.prototype['show'] = MaterialMenu.prototype.show;
  /**
     * Hides the menu.
     *
     * @public
     */

  MaterialMenu.prototype.hide = function () {
    if (this.element_ && this.container_ && this.outline_) {
      var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM); // Remove all transition delays; menu items fade out concurrently.

      for (var i = 0; i < items.length; i++) {
        items[i].style.removeProperty('transition-delay');
      } // Measure the inner element.


      var rect = this.element_.getBoundingClientRect();
      var height = rect.height;
      var width = rect.width; // Turn on animation, and apply the final clip. Also make invisible.
      // This triggers the transitions.

      this.element_.classList.add(this.CssClasses_.IS_ANIMATING);
      this.applyClip_(height, width);
      this.container_.classList.remove(this.CssClasses_.IS_VISIBLE); // Clean up after the animation is complete.

      this.addAnimationEndListener_();
    }
  };

  MaterialMenu.prototype['hide'] = MaterialMenu.prototype.hide;
  /**
     * Displays or hides the menu, depending on current state.
     *
     * @public
     */

  MaterialMenu.prototype.toggle = function (evt) {
    if (this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
      this.hide();
    } else {
      this.show(evt);
    }
  };

  MaterialMenu.prototype['toggle'] = MaterialMenu.prototype.toggle; // The component registers itself. It can assume componentHandler is available
  // in the global scope.

  componentHandler.register({
    constructor: MaterialMenu,
    classAsString: 'MaterialMenu',
    cssClass: 'mdl-js-menu',
    widget: true
  });
  /**
   * @license
   * Copyright 2015 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
     * Class constructor for Progress MDL component.
     * Implements MDL component design pattern defined at:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @constructor
     * @param {HTMLElement} element The element that will be upgraded.
     */

  var MaterialProgress = function MaterialProgress(element) {
    this.element_ = element; // Initialize instance.

    this.init();
  };

  window['MaterialProgress'] = MaterialProgress;
  /**
     * Store constants in one place so they can be updated easily.
     *
     * @enum {string | number}
     * @private
     */

  MaterialProgress.prototype.Constant_ = {};
  /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */

  MaterialProgress.prototype.CssClasses_ = {
    INDETERMINATE_CLASS: 'mdl-progress__indeterminate'
  };
  /**
     * Set the current progress of the progressbar.
     *
     * @param {number} p Percentage of the progress (0-100)
     * @public
     */

  MaterialProgress.prototype.setProgress = function (p) {
    if (this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)) {
      return;
    }

    this.progressbar_.style.width = p + '%';
  };

  MaterialProgress.prototype['setProgress'] = MaterialProgress.prototype.setProgress;
  /**
     * Set the current progress of the buffer.
     *
     * @param {number} p Percentage of the buffer (0-100)
     * @public
     */

  MaterialProgress.prototype.setBuffer = function (p) {
    this.bufferbar_.style.width = p + '%';
    this.auxbar_.style.width = 100 - p + '%';
  };

  MaterialProgress.prototype['setBuffer'] = MaterialProgress.prototype.setBuffer;
  /**
     * Initialize element.
     */

  MaterialProgress.prototype.init = function () {
    if (this.element_) {
      var el = document.createElement('div');
      el.className = 'progressbar bar bar1';
      this.element_.appendChild(el);
      this.progressbar_ = el;
      el = document.createElement('div');
      el.className = 'bufferbar bar bar2';
      this.element_.appendChild(el);
      this.bufferbar_ = el;
      el = document.createElement('div');
      el.className = 'auxbar bar bar3';
      this.element_.appendChild(el);
      this.auxbar_ = el;
      this.progressbar_.style.width = '0%';
      this.bufferbar_.style.width = '100%';
      this.auxbar_.style.width = '0%';
      this.element_.classList.add('is-upgraded');
    }
  }; // The component registers itself. It can assume componentHandler is available
  // in the global scope.


  componentHandler.register({
    constructor: MaterialProgress,
    classAsString: 'MaterialProgress',
    cssClass: 'mdl-js-progress',
    widget: true
  });
  /**
   * @license
   * Copyright 2015 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
     * Class constructor for Radio MDL component.
     * Implements MDL component design pattern defined at:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @constructor
     * @param {HTMLElement} element The element that will be upgraded.
     */

  var MaterialRadio = function MaterialRadio(element) {
    this.element_ = element; // Initialize instance.

    this.init();
  };

  window['MaterialRadio'] = MaterialRadio;
  /**
     * Store constants in one place so they can be updated easily.
     *
     * @enum {string | number}
     * @private
     */

  MaterialRadio.prototype.Constant_ = {
    TINY_TIMEOUT: 0.001
  };
  /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */

  MaterialRadio.prototype.CssClasses_ = {
    IS_FOCUSED: 'is-focused',
    IS_DISABLED: 'is-disabled',
    IS_CHECKED: 'is-checked',
    IS_UPGRADED: 'is-upgraded',
    JS_RADIO: 'mdl-js-radio',
    RADIO_BTN: 'mdl-radio__button',
    RADIO_OUTER_CIRCLE: 'mdl-radio__outer-circle',
    RADIO_INNER_CIRCLE: 'mdl-radio__inner-circle',
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
    RIPPLE_CONTAINER: 'mdl-radio__ripple-container',
    RIPPLE_CENTER: 'mdl-ripple--center',
    RIPPLE: 'mdl-ripple'
  };
  /**
     * Handle change of state.
     *
     * @param {Event} event The event that fired.
     * @private
     */

  MaterialRadio.prototype.onChange_ = function (event) {
    // Since other radio buttons don't get change events, we need to look for
    // them to update their classes.
    var radios = document.getElementsByClassName(this.CssClasses_.JS_RADIO);

    for (var i = 0; i < radios.length; i++) {
      var button = radios[i].querySelector('.' + this.CssClasses_.RADIO_BTN); // Different name == different group, so no point updating those.

      if (button.getAttribute('name') === this.btnElement_.getAttribute('name')) {
        if (typeof radios[i]['MaterialRadio'] !== 'undefined') {
          radios[i]['MaterialRadio'].updateClasses_();
        }
      }
    }
  };
  /**
     * Handle focus.
     *
     * @param {Event} event The event that fired.
     * @private
     */


  MaterialRadio.prototype.onFocus_ = function (event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
  };
  /**
     * Handle lost focus.
     *
     * @param {Event} event The event that fired.
     * @private
     */


  MaterialRadio.prototype.onBlur_ = function (event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
  };
  /**
     * Handle mouseup.
     *
     * @param {Event} event The event that fired.
     * @private
     */


  MaterialRadio.prototype.onMouseup_ = function (event) {
    this.blur_();
  };
  /**
     * Update classes.
     *
     * @private
     */


  MaterialRadio.prototype.updateClasses_ = function () {
    this.checkDisabled();
    this.checkToggleState();
  };
  /**
     * Add blur.
     *
     * @private
     */


  MaterialRadio.prototype.blur_ = function () {
    // TODO: figure out why there's a focus event being fired after our blur,
    // so that we can avoid this hack.
    window.setTimeout(function () {
      this.btnElement_.blur();
    }.bind(this), this.Constant_.TINY_TIMEOUT);
  }; // Public methods.

  /**
     * Check the components disabled state.
     *
     * @public
     */


  MaterialRadio.prototype.checkDisabled = function () {
    if (this.btnElement_.disabled) {
      this.element_.classList.add(this.CssClasses_.IS_DISABLED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
    }
  };

  MaterialRadio.prototype['checkDisabled'] = MaterialRadio.prototype.checkDisabled;
  /**
     * Check the components toggled state.
     *
     * @public
     */

  MaterialRadio.prototype.checkToggleState = function () {
    if (this.btnElement_.checked) {
      this.element_.classList.add(this.CssClasses_.IS_CHECKED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
    }
  };

  MaterialRadio.prototype['checkToggleState'] = MaterialRadio.prototype.checkToggleState;
  /**
     * Disable radio.
     *
     * @public
     */

  MaterialRadio.prototype.disable = function () {
    this.btnElement_.disabled = true;
    this.updateClasses_();
  };

  MaterialRadio.prototype['disable'] = MaterialRadio.prototype.disable;
  /**
     * Enable radio.
     *
     * @public
     */

  MaterialRadio.prototype.enable = function () {
    this.btnElement_.disabled = false;
    this.updateClasses_();
  };

  MaterialRadio.prototype['enable'] = MaterialRadio.prototype.enable;
  /**
     * Check radio.
     *
     * @public
     */

  MaterialRadio.prototype.check = function () {
    this.btnElement_.checked = true;
    this.onChange_(null);
  };

  MaterialRadio.prototype['check'] = MaterialRadio.prototype.check;
  /**
     * Uncheck radio.
     *
     * @public
     */

  MaterialRadio.prototype.uncheck = function () {
    this.btnElement_.checked = false;
    this.onChange_(null);
  };

  MaterialRadio.prototype['uncheck'] = MaterialRadio.prototype.uncheck;
  /**
     * Initialize element.
     */

  MaterialRadio.prototype.init = function () {
    if (this.element_) {
      this.btnElement_ = this.element_.querySelector('.' + this.CssClasses_.RADIO_BTN);
      this.boundChangeHandler_ = this.onChange_.bind(this);
      this.boundFocusHandler_ = this.onChange_.bind(this);
      this.boundBlurHandler_ = this.onBlur_.bind(this);
      this.boundMouseUpHandler_ = this.onMouseup_.bind(this);
      var outerCircle = document.createElement('span');
      outerCircle.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);
      var innerCircle = document.createElement('span');
      innerCircle.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE);
      this.element_.appendChild(outerCircle);
      this.element_.appendChild(innerCircle);
      var rippleContainer;

      if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
        this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
        rippleContainer = document.createElement('span');
        rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
        rippleContainer.classList.add(this.CssClasses_.RIPPLE_EFFECT);
        rippleContainer.classList.add(this.CssClasses_.RIPPLE_CENTER);
        rippleContainer.addEventListener('mouseup', this.boundMouseUpHandler_);
        var ripple = document.createElement('span');
        ripple.classList.add(this.CssClasses_.RIPPLE);
        rippleContainer.appendChild(ripple);
        this.element_.appendChild(rippleContainer);
      }

      this.btnElement_.addEventListener('change', this.boundChangeHandler_);
      this.btnElement_.addEventListener('focus', this.boundFocusHandler_);
      this.btnElement_.addEventListener('blur', this.boundBlurHandler_);
      this.element_.addEventListener('mouseup', this.boundMouseUpHandler_);
      this.updateClasses_();
      this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
    }
  }; // The component registers itself. It can assume componentHandler is available
  // in the global scope.


  componentHandler.register({
    constructor: MaterialRadio,
    classAsString: 'MaterialRadio',
    cssClass: 'mdl-js-radio',
    widget: true
  });
  /**
   * @license
   * Copyright 2015 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
     * Class constructor for Slider MDL component.
     * Implements MDL component design pattern defined at:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @constructor
     * @param {HTMLElement} element The element that will be upgraded.
     */

  var MaterialSlider = function MaterialSlider(element) {
    this.element_ = element; // Browser feature detection.

    this.isIE_ = window.navigator.msPointerEnabled; // Initialize instance.

    this.init();
  };

  window['MaterialSlider'] = MaterialSlider;
  /**
     * Store constants in one place so they can be updated easily.
     *
     * @enum {string | number}
     * @private
     */

  MaterialSlider.prototype.Constant_ = {};
  /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */

  MaterialSlider.prototype.CssClasses_ = {
    IE_CONTAINER: 'mdl-slider__ie-container',
    SLIDER_CONTAINER: 'mdl-slider__container',
    BACKGROUND_FLEX: 'mdl-slider__background-flex',
    BACKGROUND_LOWER: 'mdl-slider__background-lower',
    BACKGROUND_UPPER: 'mdl-slider__background-upper',
    IS_LOWEST_VALUE: 'is-lowest-value',
    IS_UPGRADED: 'is-upgraded'
  };
  /**
     * Handle input on element.
     *
     * @param {Event} event The event that fired.
     * @private
     */

  MaterialSlider.prototype.onInput_ = function (event) {
    this.updateValueStyles_();
  };
  /**
     * Handle change on element.
     *
     * @param {Event} event The event that fired.
     * @private
     */


  MaterialSlider.prototype.onChange_ = function (event) {
    this.updateValueStyles_();
  };
  /**
     * Handle mouseup on element.
     *
     * @param {Event} event The event that fired.
     * @private
     */


  MaterialSlider.prototype.onMouseUp_ = function (event) {
    event.target.blur();
  };
  /**
     * Handle mousedown on container element.
     * This handler is purpose is to not require the use to click
     * exactly on the 2px slider element, as FireFox seems to be very
     * strict about this.
     *
     * @param {Event} event The event that fired.
     * @private
     * @suppress {missingProperties}
     */


  MaterialSlider.prototype.onContainerMouseDown_ = function (event) {
    // If this click is not on the parent element (but rather some child)
    // ignore. It may still bubble up.
    if (event.target !== this.element_.parentElement) {
      return;
    } // Discard the original event and create a new event that
    // is on the slider element.


    event.preventDefault();
    var newEvent = new MouseEvent('mousedown', {
      target: event.target,
      buttons: event.buttons,
      clientX: event.clientX,
      clientY: this.element_.getBoundingClientRect().y
    });
    this.element_.dispatchEvent(newEvent);
  };
  /**
     * Handle updating of values.
     *
     * @private
     */


  MaterialSlider.prototype.updateValueStyles_ = function () {
    // Calculate and apply percentages to div structure behind slider.
    var fraction = (this.element_.value - this.element_.min) / (this.element_.max - this.element_.min);

    if (fraction === 0) {
      this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE);
    }

    if (!this.isIE_) {
      this.backgroundLower_.style.flex = fraction;
      this.backgroundLower_.style.webkitFlex = fraction;
      this.backgroundUpper_.style.flex = 1 - fraction;
      this.backgroundUpper_.style.webkitFlex = 1 - fraction;
    }
  }; // Public methods.

  /**
     * Disable slider.
     *
     * @public
     */


  MaterialSlider.prototype.disable = function () {
    this.element_.disabled = true;
  };

  MaterialSlider.prototype['disable'] = MaterialSlider.prototype.disable;
  /**
     * Enable slider.
     *
     * @public
     */

  MaterialSlider.prototype.enable = function () {
    this.element_.disabled = false;
  };

  MaterialSlider.prototype['enable'] = MaterialSlider.prototype.enable;
  /**
     * Update slider value.
     *
     * @param {number} value The value to which to set the control (optional).
     * @public
     */

  MaterialSlider.prototype.change = function (value) {
    if (typeof value !== 'undefined') {
      this.element_.value = value;
    }

    this.updateValueStyles_();
  };

  MaterialSlider.prototype['change'] = MaterialSlider.prototype.change;
  /**
     * Initialize element.
     */

  MaterialSlider.prototype.init = function () {
    if (this.element_) {
      if (this.isIE_) {
        // Since we need to specify a very large height in IE due to
        // implementation limitations, we add a parent here that trims it down to
        // a reasonable size.
        var containerIE = document.createElement('div');
        containerIE.classList.add(this.CssClasses_.IE_CONTAINER);
        this.element_.parentElement.insertBefore(containerIE, this.element_);
        this.element_.parentElement.removeChild(this.element_);
        containerIE.appendChild(this.element_);
      } else {
        // For non-IE browsers, we need a div structure that sits behind the
        // slider and allows us to style the left and right sides of it with
        // different colors.
        var container = document.createElement('div');
        container.classList.add(this.CssClasses_.SLIDER_CONTAINER);
        this.element_.parentElement.insertBefore(container, this.element_);
        this.element_.parentElement.removeChild(this.element_);
        container.appendChild(this.element_);
        var backgroundFlex = document.createElement('div');
        backgroundFlex.classList.add(this.CssClasses_.BACKGROUND_FLEX);
        container.appendChild(backgroundFlex);
        this.backgroundLower_ = document.createElement('div');
        this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER);
        backgroundFlex.appendChild(this.backgroundLower_);
        this.backgroundUpper_ = document.createElement('div');
        this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER);
        backgroundFlex.appendChild(this.backgroundUpper_);
      }

      this.boundInputHandler = this.onInput_.bind(this);
      this.boundChangeHandler = this.onChange_.bind(this);
      this.boundMouseUpHandler = this.onMouseUp_.bind(this);
      this.boundContainerMouseDownHandler = this.onContainerMouseDown_.bind(this);
      this.element_.addEventListener('input', this.boundInputHandler);
      this.element_.addEventListener('change', this.boundChangeHandler);
      this.element_.addEventListener('mouseup', this.boundMouseUpHandler);
      this.element_.parentElement.addEventListener('mousedown', this.boundContainerMouseDownHandler);
      this.updateValueStyles_();
      this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
    }
  }; // The component registers itself. It can assume componentHandler is available
  // in the global scope.


  componentHandler.register({
    constructor: MaterialSlider,
    classAsString: 'MaterialSlider',
    cssClass: 'mdl-js-slider',
    widget: true
  });
  /**
   * Copyright 2015 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
     * Class constructor for Snackbar MDL component.
     * Implements MDL component design pattern defined at:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @constructor
     * @param {HTMLElement} element The element that will be upgraded.
     */

  var MaterialSnackbar = function MaterialSnackbar(element) {
    this.element_ = element;
    this.textElement_ = this.element_.querySelector('.' + this.cssClasses_.MESSAGE);
    this.actionElement_ = this.element_.querySelector('.' + this.cssClasses_.ACTION);

    if (!this.textElement_) {
      throw new Error('There must be a message element for a snackbar.');
    }

    if (!this.actionElement_) {
      throw new Error('There must be an action element for a snackbar.');
    }

    this.active = false;
    this.actionHandler_ = undefined;
    this.message_ = undefined;
    this.actionText_ = undefined;
    this.queuedNotifications_ = [];
    this.setActionHidden_(true);
  };

  window['MaterialSnackbar'] = MaterialSnackbar;
  /**
     * Store constants in one place so they can be updated easily.
     *
     * @enum {string | number}
     * @private
     */

  MaterialSnackbar.prototype.Constant_ = {
    // The duration of the snackbar show/hide animation, in ms.
    ANIMATION_LENGTH: 250
  };
  /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */

  MaterialSnackbar.prototype.cssClasses_ = {
    SNACKBAR: 'mdl-snackbar',
    MESSAGE: 'mdl-snackbar__text',
    ACTION: 'mdl-snackbar__action',
    ACTIVE: 'mdl-snackbar--active'
  };
  /**
     * Display the snackbar.
     *
     * @private
     */

  MaterialSnackbar.prototype.displaySnackbar_ = function () {
    this.element_.setAttribute('aria-hidden', 'true');

    if (this.actionHandler_) {
      this.actionElement_.textContent = this.actionText_;
      this.actionElement_.addEventListener('click', this.actionHandler_);
      this.setActionHidden_(false);
    }

    this.textElement_.textContent = this.message_;
    this.element_.classList.add(this.cssClasses_.ACTIVE);
    this.element_.setAttribute('aria-hidden', 'false');
    setTimeout(this.cleanup_.bind(this), this.timeout_);
  };
  /**
     * Show the snackbar.
     *
     * @param {Object} data The data for the notification.
     * @public
     */


  MaterialSnackbar.prototype.showSnackbar = function (data) {
    if (data === undefined) {
      throw new Error('Please provide a data object with at least a message to display.');
    }

    if (data['message'] === undefined) {
      throw new Error('Please provide a message to be displayed.');
    }

    if (data['actionHandler'] && !data['actionText']) {
      throw new Error('Please provide action text with the handler.');
    }

    if (this.active) {
      this.queuedNotifications_.push(data);
    } else {
      this.active = true;
      this.message_ = data['message'];

      if (data['timeout']) {
        this.timeout_ = data['timeout'];
      } else {
        this.timeout_ = 2750;
      }

      if (data['actionHandler']) {
        this.actionHandler_ = data['actionHandler'];
      }

      if (data['actionText']) {
        this.actionText_ = data['actionText'];
      }

      this.displaySnackbar_();
    }
  };

  MaterialSnackbar.prototype['showSnackbar'] = MaterialSnackbar.prototype.showSnackbar;
  /**
     * Check if the queue has items within it.
     * If it does, display the next entry.
     *
     * @private
     */

  MaterialSnackbar.prototype.checkQueue_ = function () {
    if (this.queuedNotifications_.length > 0) {
      this.showSnackbar(this.queuedNotifications_.shift());
    }
  };
  /**
     * Cleanup the snackbar event listeners and accessiblity attributes.
     *
     * @private
     */


  MaterialSnackbar.prototype.cleanup_ = function () {
    this.element_.classList.remove(this.cssClasses_.ACTIVE);
    setTimeout(function () {
      this.element_.setAttribute('aria-hidden', 'true');
      this.textElement_.textContent = '';

      if (!Boolean(this.actionElement_.getAttribute('aria-hidden'))) {
        this.setActionHidden_(true);
        this.actionElement_.textContent = '';
        this.actionElement_.removeEventListener('click', this.actionHandler_);
      }

      this.actionHandler_ = undefined;
      this.message_ = undefined;
      this.actionText_ = undefined;
      this.active = false;
      this.checkQueue_();
    }.bind(this), this.Constant_.ANIMATION_LENGTH);
  };
  /**
     * Set the action handler hidden state.
     *
     * @param {boolean} value
     * @private
     */


  MaterialSnackbar.prototype.setActionHidden_ = function (value) {
    if (value) {
      this.actionElement_.setAttribute('aria-hidden', 'true');
    } else {
      this.actionElement_.removeAttribute('aria-hidden');
    }
  }; // The component registers itself. It can assume componentHandler is available
  // in the global scope.


  componentHandler.register({
    constructor: MaterialSnackbar,
    classAsString: 'MaterialSnackbar',
    cssClass: 'mdl-js-snackbar',
    widget: true
  });
  /**
   * @license
   * Copyright 2015 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
     * Class constructor for Spinner MDL component.
     * Implements MDL component design pattern defined at:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @param {HTMLElement} element The element that will be upgraded.
     * @constructor
     */

  var MaterialSpinner = function MaterialSpinner(element) {
    this.element_ = element; // Initialize instance.

    this.init();
  };

  window['MaterialSpinner'] = MaterialSpinner;
  /**
     * Store constants in one place so they can be updated easily.
     *
     * @enum {string | number}
     * @private
     */

  MaterialSpinner.prototype.Constant_ = {
    MDL_SPINNER_LAYER_COUNT: 4
  };
  /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */

  MaterialSpinner.prototype.CssClasses_ = {
    MDL_SPINNER_LAYER: 'mdl-spinner__layer',
    MDL_SPINNER_CIRCLE_CLIPPER: 'mdl-spinner__circle-clipper',
    MDL_SPINNER_CIRCLE: 'mdl-spinner__circle',
    MDL_SPINNER_GAP_PATCH: 'mdl-spinner__gap-patch',
    MDL_SPINNER_LEFT: 'mdl-spinner__left',
    MDL_SPINNER_RIGHT: 'mdl-spinner__right'
  };
  /**
     * Auxiliary method to create a spinner layer.
     *
     * @param {number} index Index of the layer to be created.
     * @public
     */

  MaterialSpinner.prototype.createLayer = function (index) {
    var layer = document.createElement('div');
    layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER);
    layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER + '-' + index);
    var leftClipper = document.createElement('div');
    leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);
    leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);
    var gapPatch = document.createElement('div');
    gapPatch.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);
    var rightClipper = document.createElement('div');
    rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);
    rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);
    var circleOwners = [leftClipper, gapPatch, rightClipper];

    for (var i = 0; i < circleOwners.length; i++) {
      var circle = document.createElement('div');
      circle.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE);
      circleOwners[i].appendChild(circle);
    }

    layer.appendChild(leftClipper);
    layer.appendChild(gapPatch);
    layer.appendChild(rightClipper);
    this.element_.appendChild(layer);
  };

  MaterialSpinner.prototype['createLayer'] = MaterialSpinner.prototype.createLayer;
  /**
     * Stops the spinner animation.
     * Public method for users who need to stop the spinner for any reason.
     *
     * @public
     */

  MaterialSpinner.prototype.stop = function () {
    this.element_.classList.remove('is-active');
  };

  MaterialSpinner.prototype['stop'] = MaterialSpinner.prototype.stop;
  /**
     * Starts the spinner animation.
     * Public method for users who need to manually start the spinner for any reason
     * (instead of just adding the 'is-active' class to their markup).
     *
     * @public
     */

  MaterialSpinner.prototype.start = function () {
    this.element_.classList.add('is-active');
  };

  MaterialSpinner.prototype['start'] = MaterialSpinner.prototype.start;
  /**
     * Initialize element.
     */

  MaterialSpinner.prototype.init = function () {
    if (this.element_) {
      for (var i = 1; i <= this.Constant_.MDL_SPINNER_LAYER_COUNT; i++) {
        this.createLayer(i);
      }

      this.element_.classList.add('is-upgraded');
    }
  }; // The component registers itself. It can assume componentHandler is available
  // in the global scope.


  componentHandler.register({
    constructor: MaterialSpinner,
    classAsString: 'MaterialSpinner',
    cssClass: 'mdl-js-spinner',
    widget: true
  });
  /**
   * @license
   * Copyright 2015 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
     * Class constructor for Checkbox MDL component.
     * Implements MDL component design pattern defined at:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @constructor
     * @param {HTMLElement} element The element that will be upgraded.
     */

  var MaterialSwitch = function MaterialSwitch(element) {
    this.element_ = element; // Initialize instance.

    this.init();
  };

  window['MaterialSwitch'] = MaterialSwitch;
  /**
     * Store constants in one place so they can be updated easily.
     *
     * @enum {string | number}
     * @private
     */

  MaterialSwitch.prototype.Constant_ = {
    TINY_TIMEOUT: 0.001
  };
  /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */

  MaterialSwitch.prototype.CssClasses_ = {
    INPUT: 'mdl-switch__input',
    TRACK: 'mdl-switch__track',
    THUMB: 'mdl-switch__thumb',
    FOCUS_HELPER: 'mdl-switch__focus-helper',
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
    RIPPLE_CONTAINER: 'mdl-switch__ripple-container',
    RIPPLE_CENTER: 'mdl-ripple--center',
    RIPPLE: 'mdl-ripple',
    IS_FOCUSED: 'is-focused',
    IS_DISABLED: 'is-disabled',
    IS_CHECKED: 'is-checked'
  };
  /**
     * Handle change of state.
     *
     * @param {Event} event The event that fired.
     * @private
     */

  MaterialSwitch.prototype.onChange_ = function (event) {
    this.updateClasses_();
  };
  /**
     * Handle focus of element.
     *
     * @param {Event} event The event that fired.
     * @private
     */


  MaterialSwitch.prototype.onFocus_ = function (event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
  };
  /**
     * Handle lost focus of element.
     *
     * @param {Event} event The event that fired.
     * @private
     */


  MaterialSwitch.prototype.onBlur_ = function (event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
  };
  /**
     * Handle mouseup.
     *
     * @param {Event} event The event that fired.
     * @private
     */


  MaterialSwitch.prototype.onMouseUp_ = function (event) {
    this.blur_();
  };
  /**
     * Handle class updates.
     *
     * @private
     */


  MaterialSwitch.prototype.updateClasses_ = function () {
    this.checkDisabled();
    this.checkToggleState();
  };
  /**
     * Add blur.
     *
     * @private
     */


  MaterialSwitch.prototype.blur_ = function () {
    // TODO: figure out why there's a focus event being fired after our blur,
    // so that we can avoid this hack.
    window.setTimeout(function () {
      this.inputElement_.blur();
    }.bind(this), this.Constant_.TINY_TIMEOUT);
  }; // Public methods.

  /**
     * Check the components disabled state.
     *
     * @public
     */


  MaterialSwitch.prototype.checkDisabled = function () {
    if (this.inputElement_.disabled) {
      this.element_.classList.add(this.CssClasses_.IS_DISABLED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
    }
  };

  MaterialSwitch.prototype['checkDisabled'] = MaterialSwitch.prototype.checkDisabled;
  /**
     * Check the components toggled state.
     *
     * @public
     */

  MaterialSwitch.prototype.checkToggleState = function () {
    if (this.inputElement_.checked) {
      this.element_.classList.add(this.CssClasses_.IS_CHECKED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
    }
  };

  MaterialSwitch.prototype['checkToggleState'] = MaterialSwitch.prototype.checkToggleState;
  /**
     * Disable switch.
     *
     * @public
     */

  MaterialSwitch.prototype.disable = function () {
    this.inputElement_.disabled = true;
    this.updateClasses_();
  };

  MaterialSwitch.prototype['disable'] = MaterialSwitch.prototype.disable;
  /**
     * Enable switch.
     *
     * @public
     */

  MaterialSwitch.prototype.enable = function () {
    this.inputElement_.disabled = false;
    this.updateClasses_();
  };

  MaterialSwitch.prototype['enable'] = MaterialSwitch.prototype.enable;
  /**
     * Activate switch.
     *
     * @public
     */

  MaterialSwitch.prototype.on = function () {
    this.inputElement_.checked = true;
    this.updateClasses_();
  };

  MaterialSwitch.prototype['on'] = MaterialSwitch.prototype.on;
  /**
     * Deactivate switch.
     *
     * @public
     */

  MaterialSwitch.prototype.off = function () {
    this.inputElement_.checked = false;
    this.updateClasses_();
  };

  MaterialSwitch.prototype['off'] = MaterialSwitch.prototype.off;
  /**
     * Initialize element.
     */

  MaterialSwitch.prototype.init = function () {
    if (this.element_) {
      this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
      var track = document.createElement('div');
      track.classList.add(this.CssClasses_.TRACK);
      var thumb = document.createElement('div');
      thumb.classList.add(this.CssClasses_.THUMB);
      var focusHelper = document.createElement('span');
      focusHelper.classList.add(this.CssClasses_.FOCUS_HELPER);
      thumb.appendChild(focusHelper);
      this.element_.appendChild(track);
      this.element_.appendChild(thumb);
      this.boundMouseUpHandler = this.onMouseUp_.bind(this);

      if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
        this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
        this.rippleContainerElement_ = document.createElement('span');
        this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
        this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT);
        this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);
        this.rippleContainerElement_.addEventListener('mouseup', this.boundMouseUpHandler);
        var ripple = document.createElement('span');
        ripple.classList.add(this.CssClasses_.RIPPLE);
        this.rippleContainerElement_.appendChild(ripple);
        this.element_.appendChild(this.rippleContainerElement_);
      }

      this.boundChangeHandler = this.onChange_.bind(this);
      this.boundFocusHandler = this.onFocus_.bind(this);
      this.boundBlurHandler = this.onBlur_.bind(this);
      this.inputElement_.addEventListener('change', this.boundChangeHandler);
      this.inputElement_.addEventListener('focus', this.boundFocusHandler);
      this.inputElement_.addEventListener('blur', this.boundBlurHandler);
      this.element_.addEventListener('mouseup', this.boundMouseUpHandler);
      this.updateClasses_();
      this.element_.classList.add('is-upgraded');
    }
  }; // The component registers itself. It can assume componentHandler is available
  // in the global scope.


  componentHandler.register({
    constructor: MaterialSwitch,
    classAsString: 'MaterialSwitch',
    cssClass: 'mdl-js-switch',
    widget: true
  });
  /**
   * @license
   * Copyright 2015 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
     * Class constructor for Tabs MDL component.
     * Implements MDL component design pattern defined at:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @constructor
     * @param {Element} element The element that will be upgraded.
     */

  var MaterialTabs = function MaterialTabs(element) {
    // Stores the HTML element.
    this.element_ = element; // Initialize instance.

    this.init();
  };

  window['MaterialTabs'] = MaterialTabs;
  /**
     * Store constants in one place so they can be updated easily.
     *
     * @enum {string}
     * @private
     */

  MaterialTabs.prototype.Constant_ = {};
  /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */

  MaterialTabs.prototype.CssClasses_ = {
    TAB_CLASS: 'mdl-tabs__tab',
    PANEL_CLASS: 'mdl-tabs__panel',
    ACTIVE_CLASS: 'is-active',
    UPGRADED_CLASS: 'is-upgraded',
    MDL_JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    MDL_RIPPLE_CONTAINER: 'mdl-tabs__ripple-container',
    MDL_RIPPLE: 'mdl-ripple',
    MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events'
  };
  /**
     * Handle clicks to a tabs component
     *
     * @private
     */

  MaterialTabs.prototype.initTabs_ = function () {
    if (this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT)) {
      this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS);
    } // Select element tabs, document panels


    this.tabs_ = this.element_.querySelectorAll('.' + this.CssClasses_.TAB_CLASS);
    this.panels_ = this.element_.querySelectorAll('.' + this.CssClasses_.PANEL_CLASS); // Create new tabs for each tab element

    for (var i = 0; i < this.tabs_.length; i++) {
      new MaterialTab(this.tabs_[i], this);
    }

    this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS);
  };
  /**
     * Reset tab state, dropping active classes
     *
     * @private
     */


  MaterialTabs.prototype.resetTabState_ = function () {
    for (var k = 0; k < this.tabs_.length; k++) {
      this.tabs_[k].classList.remove(this.CssClasses_.ACTIVE_CLASS);
    }
  };
  /**
     * Reset panel state, droping active classes
     *
     * @private
     */


  MaterialTabs.prototype.resetPanelState_ = function () {
    for (var j = 0; j < this.panels_.length; j++) {
      this.panels_[j].classList.remove(this.CssClasses_.ACTIVE_CLASS);
    }
  };
  /**
     * Initialize element.
     */


  MaterialTabs.prototype.init = function () {
    if (this.element_) {
      this.initTabs_();
    }
  };
  /**
     * Constructor for an individual tab.
     *
     * @constructor
     * @param {Element} tab The HTML element for the tab.
     * @param {MaterialTabs} ctx The MaterialTabs object that owns the tab.
     */


  function MaterialTab(tab, ctx) {
    if (tab) {
      if (ctx.element_.classList.contains(ctx.CssClasses_.MDL_JS_RIPPLE_EFFECT)) {
        var rippleContainer = document.createElement('span');
        rippleContainer.classList.add(ctx.CssClasses_.MDL_RIPPLE_CONTAINER);
        rippleContainer.classList.add(ctx.CssClasses_.MDL_JS_RIPPLE_EFFECT);
        var ripple = document.createElement('span');
        ripple.classList.add(ctx.CssClasses_.MDL_RIPPLE);
        rippleContainer.appendChild(ripple);
        tab.appendChild(rippleContainer);
      }

      tab.addEventListener('click', function (e) {
        if (tab.getAttribute('href').charAt(0) === '#') {
          e.preventDefault();
          var href = tab.href.split('#')[1];
          var panel = ctx.element_.querySelector('#' + href);
          ctx.resetTabState_();
          ctx.resetPanelState_();
          tab.classList.add(ctx.CssClasses_.ACTIVE_CLASS);
          panel.classList.add(ctx.CssClasses_.ACTIVE_CLASS);
        }
      });
    }
  } // The component registers itself. It can assume componentHandler is available
  // in the global scope.


  componentHandler.register({
    constructor: MaterialTabs,
    classAsString: 'MaterialTabs',
    cssClass: 'mdl-js-tabs'
  });
  /**
   * @license
   * Copyright 2015 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
     * Class constructor for Textfield MDL component.
     * Implements MDL component design pattern defined at:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @constructor
     * @param {HTMLElement} element The element that will be upgraded.
     */

  var MaterialTextfield = function MaterialTextfield(element) {
    this.element_ = element;
    this.maxRows = this.Constant_.NO_MAX_ROWS; // Initialize instance.

    this.init();
  };

  window['MaterialTextfield'] = MaterialTextfield;
  /**
     * Store constants in one place so they can be updated easily.
     *
     * @enum {string | number}
     * @private
     */

  MaterialTextfield.prototype.Constant_ = {
    NO_MAX_ROWS: -1,
    MAX_ROWS_ATTRIBUTE: 'maxrows'
  };
  /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */

  MaterialTextfield.prototype.CssClasses_ = {
    LABEL: 'mdl-textfield__label',
    INPUT: 'mdl-textfield__input',
    IS_DIRTY: 'is-dirty',
    IS_FOCUSED: 'is-focused',
    IS_DISABLED: 'is-disabled',
    IS_INVALID: 'is-invalid',
    IS_UPGRADED: 'is-upgraded',
    HAS_PLACEHOLDER: 'has-placeholder'
  };
  /**
     * Handle input being entered.
     *
     * @param {Event} event The event that fired.
     * @private
     */

  MaterialTextfield.prototype.onKeyDown_ = function (event) {
    var currentRowCount = event.target.value.split('\n').length;

    if (event.keyCode === 13) {
      if (currentRowCount >= this.maxRows) {
        event.preventDefault();
      }
    }
  };
  /**
     * Handle focus.
     *
     * @param {Event} event The event that fired.
     * @private
     */


  MaterialTextfield.prototype.onFocus_ = function (event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
  };
  /**
     * Handle lost focus.
     *
     * @param {Event} event The event that fired.
     * @private
     */


  MaterialTextfield.prototype.onBlur_ = function (event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
  };
  /**
     * Handle reset event from out side.
     *
     * @param {Event} event The event that fired.
     * @private
     */


  MaterialTextfield.prototype.onReset_ = function (event) {
    this.updateClasses_();
  };
  /**
     * Handle class updates.
     *
     * @private
     */


  MaterialTextfield.prototype.updateClasses_ = function () {
    this.checkDisabled();
    this.checkValidity();
    this.checkDirty();
    this.checkFocus();
  }; // Public methods.

  /**
     * Check the disabled state and update field accordingly.
     *
     * @public
     */


  MaterialTextfield.prototype.checkDisabled = function () {
    if (this.input_.disabled) {
      this.element_.classList.add(this.CssClasses_.IS_DISABLED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
    }
  };

  MaterialTextfield.prototype['checkDisabled'] = MaterialTextfield.prototype.checkDisabled;
  /**
    * Check the focus state and update field accordingly.
    *
    * @public
    */

  MaterialTextfield.prototype.checkFocus = function () {
    if (Boolean(this.element_.querySelector(':focus'))) {
      this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
    }
  };

  MaterialTextfield.prototype['checkFocus'] = MaterialTextfield.prototype.checkFocus;
  /**
     * Check the validity state and update field accordingly.
     *
     * @public
     */

  MaterialTextfield.prototype.checkValidity = function () {
    if (this.input_.validity) {
      if (this.input_.validity.valid) {
        this.element_.classList.remove(this.CssClasses_.IS_INVALID);
      } else {
        this.element_.classList.add(this.CssClasses_.IS_INVALID);
      }
    }
  };

  MaterialTextfield.prototype['checkValidity'] = MaterialTextfield.prototype.checkValidity;
  /**
     * Check the dirty state and update field accordingly.
     *
     * @public
     */

  MaterialTextfield.prototype.checkDirty = function () {
    if (this.input_.value && this.input_.value.length > 0) {
      this.element_.classList.add(this.CssClasses_.IS_DIRTY);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_DIRTY);
    }
  };

  MaterialTextfield.prototype['checkDirty'] = MaterialTextfield.prototype.checkDirty;
  /**
     * Disable text field.
     *
     * @public
     */

  MaterialTextfield.prototype.disable = function () {
    this.input_.disabled = true;
    this.updateClasses_();
  };

  MaterialTextfield.prototype['disable'] = MaterialTextfield.prototype.disable;
  /**
     * Enable text field.
     *
     * @public
     */

  MaterialTextfield.prototype.enable = function () {
    this.input_.disabled = false;
    this.updateClasses_();
  };

  MaterialTextfield.prototype['enable'] = MaterialTextfield.prototype.enable;
  /**
     * Update text field value.
     *
     * @param {string} value The value to which to set the control (optional).
     * @public
     */

  MaterialTextfield.prototype.change = function (value) {
    this.input_.value = value || '';
    this.updateClasses_();
  };

  MaterialTextfield.prototype['change'] = MaterialTextfield.prototype.change;
  /**
     * Initialize element.
     */

  MaterialTextfield.prototype.init = function () {
    if (this.element_) {
      this.label_ = this.element_.querySelector('.' + this.CssClasses_.LABEL);
      this.input_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);

      if (this.input_) {
        if (this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)) {
          this.maxRows = parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE), 10);

          if (isNaN(this.maxRows)) {
            this.maxRows = this.Constant_.NO_MAX_ROWS;
          }
        }

        if (this.input_.hasAttribute('placeholder')) {
          this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER);
        }

        this.boundUpdateClassesHandler = this.updateClasses_.bind(this);
        this.boundFocusHandler = this.onFocus_.bind(this);
        this.boundBlurHandler = this.onBlur_.bind(this);
        this.boundResetHandler = this.onReset_.bind(this);
        this.input_.addEventListener('input', this.boundUpdateClassesHandler);
        this.input_.addEventListener('focus', this.boundFocusHandler);
        this.input_.addEventListener('blur', this.boundBlurHandler);
        this.input_.addEventListener('reset', this.boundResetHandler);

        if (this.maxRows !== this.Constant_.NO_MAX_ROWS) {
          // TODO: This should handle pasting multi line text.
          // Currently doesn't.
          this.boundKeyDownHandler = this.onKeyDown_.bind(this);
          this.input_.addEventListener('keydown', this.boundKeyDownHandler);
        }

        var invalid = this.element_.classList.contains(this.CssClasses_.IS_INVALID);
        this.updateClasses_();
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);

        if (invalid) {
          this.element_.classList.add(this.CssClasses_.IS_INVALID);
        }

        if (this.input_.hasAttribute('autofocus')) {
          this.element_.focus();
          this.checkFocus();
        }
      }
    }
  }; // The component registers itself. It can assume componentHandler is available
  // in the global scope.


  componentHandler.register({
    constructor: MaterialTextfield,
    classAsString: 'MaterialTextfield',
    cssClass: 'mdl-js-textfield',
    widget: true
  });
  /**
   * @license
   * Copyright 2015 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
     * Class constructor for Tooltip MDL component.
     * Implements MDL component design pattern defined at:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @constructor
     * @param {HTMLElement} element The element that will be upgraded.
     */

  var MaterialTooltip = function MaterialTooltip(element) {
    this.element_ = element; // Initialize instance.

    this.init();
  };

  window['MaterialTooltip'] = MaterialTooltip;
  /**
     * Store constants in one place so they can be updated easily.
     *
     * @enum {string | number}
     * @private
     */

  MaterialTooltip.prototype.Constant_ = {};
  /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */

  MaterialTooltip.prototype.CssClasses_ = {
    IS_ACTIVE: 'is-active',
    BOTTOM: 'mdl-tooltip--bottom',
    LEFT: 'mdl-tooltip--left',
    RIGHT: 'mdl-tooltip--right',
    TOP: 'mdl-tooltip--top'
  };
  /**
     * Handle mouseenter for tooltip.
     *
     * @param {Event} event The event that fired.
     * @private
     */

  MaterialTooltip.prototype.handleMouseEnter_ = function (event) {
    var props = event.target.getBoundingClientRect();
    var left = props.left + props.width / 2;
    var top = props.top + props.height / 2;
    var marginLeft = -1 * (this.element_.offsetWidth / 2);
    var marginTop = -1 * (this.element_.offsetHeight / 2);

    if (this.element_.classList.contains(this.CssClasses_.LEFT) || this.element_.classList.contains(this.CssClasses_.RIGHT)) {
      left = props.width / 2;

      if (top + marginTop < 0) {
        this.element_.style.top = '0';
        this.element_.style.marginTop = '0';
      } else {
        this.element_.style.top = top + 'px';
        this.element_.style.marginTop = marginTop + 'px';
      }
    } else {
      if (left + marginLeft < 0) {
        this.element_.style.left = '0';
        this.element_.style.marginLeft = '0';
      } else {
        this.element_.style.left = left + 'px';
        this.element_.style.marginLeft = marginLeft + 'px';
      }
    }

    if (this.element_.classList.contains(this.CssClasses_.TOP)) {
      this.element_.style.top = props.top - this.element_.offsetHeight - 10 + 'px';
    } else if (this.element_.classList.contains(this.CssClasses_.RIGHT)) {
      this.element_.style.left = props.left + props.width + 10 + 'px';
    } else if (this.element_.classList.contains(this.CssClasses_.LEFT)) {
      this.element_.style.left = props.left - this.element_.offsetWidth - 10 + 'px';
    } else {
      this.element_.style.top = props.top + props.height + 10 + 'px';
    }

    this.element_.classList.add(this.CssClasses_.IS_ACTIVE);
  };
  /**
     * Hide tooltip on mouseleave or scroll
     *
     * @private
     */


  MaterialTooltip.prototype.hideTooltip_ = function () {
    this.element_.classList.remove(this.CssClasses_.IS_ACTIVE);
  };
  /**
     * Initialize element.
     */


  MaterialTooltip.prototype.init = function () {
    if (this.element_) {
      var forElId = this.element_.getAttribute('for') || this.element_.getAttribute('data-mdl-for');

      if (forElId) {
        this.forElement_ = document.getElementById(forElId);
      }

      if (this.forElement_) {
        // It's left here because it prevents accidental text selection on Android
        if (!this.forElement_.hasAttribute('tabindex')) {
          this.forElement_.setAttribute('tabindex', '0');
        }

        this.boundMouseEnterHandler = this.handleMouseEnter_.bind(this);
        this.boundMouseLeaveAndScrollHandler = this.hideTooltip_.bind(this);
        this.forElement_.addEventListener('mouseenter', this.boundMouseEnterHandler, false);
        this.forElement_.addEventListener('touchend', this.boundMouseEnterHandler, false);
        this.forElement_.addEventListener('mouseleave', this.boundMouseLeaveAndScrollHandler, false);
        window.addEventListener('scroll', this.boundMouseLeaveAndScrollHandler, true);
        window.addEventListener('touchstart', this.boundMouseLeaveAndScrollHandler);
      }
    }
  }; // The component registers itself. It can assume componentHandler is available
  // in the global scope.


  componentHandler.register({
    constructor: MaterialTooltip,
    classAsString: 'MaterialTooltip',
    cssClass: 'mdl-tooltip'
  });
  /**
   * @license
   * Copyright 2015 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
     * Class constructor for Layout MDL component.
     * Implements MDL component design pattern defined at:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @constructor
     * @param {HTMLElement} element The element that will be upgraded.
     */

  var MaterialLayout = function MaterialLayout(element) {
    this.element_ = element; // Initialize instance.

    this.init();
  };

  window['MaterialLayout'] = MaterialLayout;
  /**
     * Store constants in one place so they can be updated easily.
     *
     * @enum {string | number}
     * @private
     */

  MaterialLayout.prototype.Constant_ = {
    MAX_WIDTH: '(max-width: 1024px)',
    TAB_SCROLL_PIXELS: 100,
    RESIZE_TIMEOUT: 100,
    MENU_ICON: '&#xE5D2;',
    CHEVRON_LEFT: 'chevron_left',
    CHEVRON_RIGHT: 'chevron_right'
  };
  /**
     * Keycodes, for code readability.
     *
     * @enum {number}
     * @private
     */

  MaterialLayout.prototype.Keycodes_ = {
    ENTER: 13,
    ESCAPE: 27,
    SPACE: 32
  };
  /**
     * Modes.
     *
     * @enum {number}
     * @private
     */

  MaterialLayout.prototype.Mode_ = {
    STANDARD: 0,
    SEAMED: 1,
    WATERFALL: 2,
    SCROLL: 3
  };
  /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */

  MaterialLayout.prototype.CssClasses_ = {
    CONTAINER: 'mdl-layout__container',
    HEADER: 'mdl-layout__header',
    DRAWER: 'mdl-layout__drawer',
    CONTENT: 'mdl-layout__content',
    DRAWER_BTN: 'mdl-layout__drawer-button',
    ICON: 'material-icons',
    JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    RIPPLE_CONTAINER: 'mdl-layout__tab-ripple-container',
    RIPPLE: 'mdl-ripple',
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
    HEADER_SEAMED: 'mdl-layout__header--seamed',
    HEADER_WATERFALL: 'mdl-layout__header--waterfall',
    HEADER_SCROLL: 'mdl-layout__header--scroll',
    FIXED_HEADER: 'mdl-layout--fixed-header',
    OBFUSCATOR: 'mdl-layout__obfuscator',
    TAB_BAR: 'mdl-layout__tab-bar',
    TAB_CONTAINER: 'mdl-layout__tab-bar-container',
    TAB: 'mdl-layout__tab',
    TAB_BAR_BUTTON: 'mdl-layout__tab-bar-button',
    TAB_BAR_LEFT_BUTTON: 'mdl-layout__tab-bar-left-button',
    TAB_BAR_RIGHT_BUTTON: 'mdl-layout__tab-bar-right-button',
    TAB_MANUAL_SWITCH: 'mdl-layout__tab-manual-switch',
    PANEL: 'mdl-layout__tab-panel',
    HAS_DRAWER: 'has-drawer',
    HAS_TABS: 'has-tabs',
    HAS_SCROLLING_HEADER: 'has-scrolling-header',
    CASTING_SHADOW: 'is-casting-shadow',
    IS_COMPACT: 'is-compact',
    IS_SMALL_SCREEN: 'is-small-screen',
    IS_DRAWER_OPEN: 'is-visible',
    IS_ACTIVE: 'is-active',
    IS_UPGRADED: 'is-upgraded',
    IS_ANIMATING: 'is-animating',
    ON_LARGE_SCREEN: 'mdl-layout--large-screen-only',
    ON_SMALL_SCREEN: 'mdl-layout--small-screen-only'
  };
  /**
     * Handles scrolling on the content.
     *
     * @private
     */

  MaterialLayout.prototype.contentScrollHandler_ = function () {
    if (this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)) {
      return;
    }

    var headerVisible = !this.element_.classList.contains(this.CssClasses_.IS_SMALL_SCREEN) || this.element_.classList.contains(this.CssClasses_.FIXED_HEADER);

    if (this.content_.scrollTop > 0 && !this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
      this.header_.classList.add(this.CssClasses_.CASTING_SHADOW);
      this.header_.classList.add(this.CssClasses_.IS_COMPACT);

      if (headerVisible) {
        this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
      }
    } else if (this.content_.scrollTop <= 0 && this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
      this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW);
      this.header_.classList.remove(this.CssClasses_.IS_COMPACT);

      if (headerVisible) {
        this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
      }
    }
  };
  /**
     * Handles a keyboard event on the drawer.
     *
     * @param {Event} evt The event that fired.
     * @private
     */


  MaterialLayout.prototype.keyboardEventHandler_ = function (evt) {
    // Only react when the drawer is open.
    if (evt.keyCode === this.Keycodes_.ESCAPE && this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)) {
      this.toggleDrawer();
    }
  };
  /**
     * Handles changes in screen size.
     *
     * @private
     */


  MaterialLayout.prototype.screenSizeHandler_ = function () {
    if (this.screenSizeMediaQuery_.matches) {
      this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN); // Collapse drawer (if any) when moving to a large screen size.

      if (this.drawer_) {
        this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN);
        this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN);
      }
    }
  };
  /**
     * Handles events of drawer button.
     *
     * @param {Event} evt The event that fired.
     * @private
     */


  MaterialLayout.prototype.drawerToggleHandler_ = function (evt) {
    if (evt && evt.type === 'keydown') {
      if (evt.keyCode === this.Keycodes_.SPACE || evt.keyCode === this.Keycodes_.ENTER) {
        // prevent scrolling in drawer nav
        evt.preventDefault();
      } else {
        // prevent other keys
        return;
      }
    }

    this.toggleDrawer();
  };
  /**
     * Handles (un)setting the `is-animating` class
     *
     * @private
     */


  MaterialLayout.prototype.headerTransitionEndHandler_ = function () {
    this.header_.classList.remove(this.CssClasses_.IS_ANIMATING);
  };
  /**
     * Handles expanding the header on click
     *
     * @private
     */


  MaterialLayout.prototype.headerClickHandler_ = function () {
    if (this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
      this.header_.classList.remove(this.CssClasses_.IS_COMPACT);
      this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
    }
  };
  /**
     * Reset tab state, dropping active classes
     *
     * @private
     */


  MaterialLayout.prototype.resetTabState_ = function (tabBar) {
    for (var k = 0; k < tabBar.length; k++) {
      tabBar[k].classList.remove(this.CssClasses_.IS_ACTIVE);
    }
  };
  /**
     * Reset panel state, droping active classes
     *
     * @private
     */


  MaterialLayout.prototype.resetPanelState_ = function (panels) {
    for (var j = 0; j < panels.length; j++) {
      panels[j].classList.remove(this.CssClasses_.IS_ACTIVE);
    }
  };
  /**
    * Toggle drawer state
    *
    * @public
    */


  MaterialLayout.prototype.toggleDrawer = function () {
    var drawerButton = this.element_.querySelector('.' + this.CssClasses_.DRAWER_BTN);
    this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN);
    this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN); // Set accessibility properties.

    if (this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)) {
      this.drawer_.setAttribute('aria-hidden', 'false');
      drawerButton.setAttribute('aria-expanded', 'true');
    } else {
      this.drawer_.setAttribute('aria-hidden', 'true');
      drawerButton.setAttribute('aria-expanded', 'false');
    }
  };

  MaterialLayout.prototype['toggleDrawer'] = MaterialLayout.prototype.toggleDrawer;
  /**
     * Initialize element.
     */

  MaterialLayout.prototype.init = function () {
    if (this.element_) {
      var container = document.createElement('div');
      container.classList.add(this.CssClasses_.CONTAINER);
      var focusedElement = this.element_.querySelector(':focus');
      this.element_.parentElement.insertBefore(container, this.element_);
      this.element_.parentElement.removeChild(this.element_);
      container.appendChild(this.element_);

      if (focusedElement) {
        focusedElement.focus();
      }

      var directChildren = this.element_.childNodes;
      var numChildren = directChildren.length;

      for (var c = 0; c < numChildren; c++) {
        var child = directChildren[c];

        if (child.classList && child.classList.contains(this.CssClasses_.HEADER)) {
          this.header_ = child;
        }

        if (child.classList && child.classList.contains(this.CssClasses_.DRAWER)) {
          this.drawer_ = child;
        }

        if (child.classList && child.classList.contains(this.CssClasses_.CONTENT)) {
          this.content_ = child;
        }
      }

      window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
          // when page is loaded from back/forward cache
          // trigger repaint to let layout scroll in safari
          this.element_.style.overflowY = 'hidden';
          requestAnimationFrame(function () {
            this.element_.style.overflowY = '';
          }.bind(this));
        }
      }.bind(this), false);

      if (this.header_) {
        this.tabBar_ = this.header_.querySelector('.' + this.CssClasses_.TAB_BAR);
      }

      var mode = this.Mode_.STANDARD;

      if (this.header_) {
        if (this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED)) {
          mode = this.Mode_.SEAMED;
        } else if (this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL)) {
          mode = this.Mode_.WATERFALL;
          this.header_.addEventListener('transitionend', this.headerTransitionEndHandler_.bind(this));
          this.header_.addEventListener('click', this.headerClickHandler_.bind(this));
        } else if (this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL)) {
          mode = this.Mode_.SCROLL;
          container.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER);
        }

        if (mode === this.Mode_.STANDARD) {
          this.header_.classList.add(this.CssClasses_.CASTING_SHADOW);

          if (this.tabBar_) {
            this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW);
          }
        } else if (mode === this.Mode_.SEAMED || mode === this.Mode_.SCROLL) {
          this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW);

          if (this.tabBar_) {
            this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW);
          }
        } else if (mode === this.Mode_.WATERFALL) {
          // Add and remove shadows depending on scroll position.
          // Also add/remove auxiliary class for styling of the compact version of
          // the header.
          this.content_.addEventListener('scroll', this.contentScrollHandler_.bind(this));
          this.contentScrollHandler_();
        }
      } // Add drawer toggling button to our layout, if we have an openable drawer.


      if (this.drawer_) {
        var drawerButton = this.element_.querySelector('.' + this.CssClasses_.DRAWER_BTN);

        if (!drawerButton) {
          drawerButton = document.createElement('div');
          drawerButton.setAttribute('aria-expanded', 'false');
          drawerButton.setAttribute('role', 'button');
          drawerButton.setAttribute('tabindex', '0');
          drawerButton.classList.add(this.CssClasses_.DRAWER_BTN);
          var drawerButtonIcon = document.createElement('i');
          drawerButtonIcon.classList.add(this.CssClasses_.ICON);
          drawerButtonIcon.innerHTML = this.Constant_.MENU_ICON;
          drawerButton.appendChild(drawerButtonIcon);
        }

        if (this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN)) {
          //If drawer has ON_LARGE_SCREEN class then add it to the drawer toggle button as well.
          drawerButton.classList.add(this.CssClasses_.ON_LARGE_SCREEN);
        } else if (this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN)) {
          //If drawer has ON_SMALL_SCREEN class then add it to the drawer toggle button as well.
          drawerButton.classList.add(this.CssClasses_.ON_SMALL_SCREEN);
        }

        drawerButton.addEventListener('click', this.drawerToggleHandler_.bind(this));
        drawerButton.addEventListener('keydown', this.drawerToggleHandler_.bind(this)); // Add a class if the layout has a drawer, for altering the left padding.
        // Adds the HAS_DRAWER to the elements since this.header_ may or may
        // not be present.

        this.element_.classList.add(this.CssClasses_.HAS_DRAWER); // If we have a fixed header, add the button to the header rather than
        // the layout.

        if (this.element_.classList.contains(this.CssClasses_.FIXED_HEADER)) {
          this.header_.insertBefore(drawerButton, this.header_.firstChild);
        } else {
          this.element_.insertBefore(drawerButton, this.content_);
        }

        var obfuscator = document.createElement('div');
        obfuscator.classList.add(this.CssClasses_.OBFUSCATOR);
        this.element_.appendChild(obfuscator);
        obfuscator.addEventListener('click', this.drawerToggleHandler_.bind(this));
        this.obfuscator_ = obfuscator;
        this.drawer_.addEventListener('keydown', this.keyboardEventHandler_.bind(this));
        this.drawer_.setAttribute('aria-hidden', 'true');
      } // Keep an eye on screen size, and add/remove auxiliary class for styling
      // of small screens.


      this.screenSizeMediaQuery_ = window.matchMedia(this.Constant_.MAX_WIDTH);
      this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this));
      this.screenSizeHandler_(); // Initialize tabs, if any.

      if (this.header_ && this.tabBar_) {
        this.element_.classList.add(this.CssClasses_.HAS_TABS);
        var tabContainer = document.createElement('div');
        tabContainer.classList.add(this.CssClasses_.TAB_CONTAINER);
        this.header_.insertBefore(tabContainer, this.tabBar_);
        this.header_.removeChild(this.tabBar_);
        var leftButton = document.createElement('div');
        leftButton.classList.add(this.CssClasses_.TAB_BAR_BUTTON);
        leftButton.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);
        var leftButtonIcon = document.createElement('i');
        leftButtonIcon.classList.add(this.CssClasses_.ICON);
        leftButtonIcon.textContent = this.Constant_.CHEVRON_LEFT;
        leftButton.appendChild(leftButtonIcon);
        leftButton.addEventListener('click', function () {
          this.tabBar_.scrollLeft -= this.Constant_.TAB_SCROLL_PIXELS;
        }.bind(this));
        var rightButton = document.createElement('div');
        rightButton.classList.add(this.CssClasses_.TAB_BAR_BUTTON);
        rightButton.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);
        var rightButtonIcon = document.createElement('i');
        rightButtonIcon.classList.add(this.CssClasses_.ICON);
        rightButtonIcon.textContent = this.Constant_.CHEVRON_RIGHT;
        rightButton.appendChild(rightButtonIcon);
        rightButton.addEventListener('click', function () {
          this.tabBar_.scrollLeft += this.Constant_.TAB_SCROLL_PIXELS;
        }.bind(this));
        tabContainer.appendChild(leftButton);
        tabContainer.appendChild(this.tabBar_);
        tabContainer.appendChild(rightButton); // Add and remove tab buttons depending on scroll position and total
        // window size.

        var tabUpdateHandler = function () {
          if (this.tabBar_.scrollLeft > 0) {
            leftButton.classList.add(this.CssClasses_.IS_ACTIVE);
          } else {
            leftButton.classList.remove(this.CssClasses_.IS_ACTIVE);
          }

          if (this.tabBar_.scrollLeft < this.tabBar_.scrollWidth - this.tabBar_.offsetWidth) {
            rightButton.classList.add(this.CssClasses_.IS_ACTIVE);
          } else {
            rightButton.classList.remove(this.CssClasses_.IS_ACTIVE);
          }
        }.bind(this);

        this.tabBar_.addEventListener('scroll', tabUpdateHandler);
        tabUpdateHandler(); // Update tabs when the window resizes.

        var windowResizeHandler = function () {
          // Use timeouts to make sure it doesn't happen too often.
          if (this.resizeTimeoutId_) {
            clearTimeout(this.resizeTimeoutId_);
          }

          this.resizeTimeoutId_ = setTimeout(function () {
            tabUpdateHandler();
            this.resizeTimeoutId_ = null;
          }.bind(this), this.Constant_.RESIZE_TIMEOUT);
        }.bind(this);

        window.addEventListener('resize', windowResizeHandler);

        if (this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {
          this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
        } // Select element tabs, document panels


        var tabs = this.tabBar_.querySelectorAll('.' + this.CssClasses_.TAB);
        var panels = this.content_.querySelectorAll('.' + this.CssClasses_.PANEL); // Create new tabs for each tab element

        for (var i = 0; i < tabs.length; i++) {
          new MaterialLayoutTab(tabs[i], tabs, panels, this);
        }
      }

      this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
    }
  };
  /**
     * Constructor for an individual tab.
     *
     * @constructor
     * @param {HTMLElement} tab The HTML element for the tab.
     * @param {!Array<HTMLElement>} tabs Array with HTML elements for all tabs.
     * @param {!Array<HTMLElement>} panels Array with HTML elements for all panels.
     * @param {MaterialLayout} layout The MaterialLayout object that owns the tab.
     */


  function MaterialLayoutTab(tab, tabs, panels, layout) {
    /**
     * Auxiliary method to programmatically select a tab in the UI.
     */
    function selectTab() {
      var href = tab.href.split('#')[1];
      var panel = layout.content_.querySelector('#' + href);
      layout.resetTabState_(tabs);
      layout.resetPanelState_(panels);
      tab.classList.add(layout.CssClasses_.IS_ACTIVE);
      panel.classList.add(layout.CssClasses_.IS_ACTIVE);
    }

    if (layout.tabBar_.classList.contains(layout.CssClasses_.JS_RIPPLE_EFFECT)) {
      var rippleContainer = document.createElement('span');
      rippleContainer.classList.add(layout.CssClasses_.RIPPLE_CONTAINER);
      rippleContainer.classList.add(layout.CssClasses_.JS_RIPPLE_EFFECT);
      var ripple = document.createElement('span');
      ripple.classList.add(layout.CssClasses_.RIPPLE);
      rippleContainer.appendChild(ripple);
      tab.appendChild(rippleContainer);
    }

    if (!layout.tabBar_.classList.contains(layout.CssClasses_.TAB_MANUAL_SWITCH)) {
      tab.addEventListener('click', function (e) {
        if (tab.getAttribute('href').charAt(0) === '#') {
          e.preventDefault();
          selectTab();
        }
      });
    }

    tab.show = selectTab;
  }

  window['MaterialLayoutTab'] = MaterialLayoutTab; // The component registers itself. It can assume componentHandler is available
  // in the global scope.

  componentHandler.register({
    constructor: MaterialLayout,
    classAsString: 'MaterialLayout',
    cssClass: 'mdl-js-layout'
  });
  /**
   * @license
   * Copyright 2015 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
     * Class constructor for Data Table Card MDL component.
     * Implements MDL component design pattern defined at:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @constructor
     * @param {Element} element The element that will be upgraded.
     */

  var MaterialDataTable = function MaterialDataTable(element) {
    this.element_ = element; // Initialize instance.

    this.init();
  };

  window['MaterialDataTable'] = MaterialDataTable;
  /**
     * Store constants in one place so they can be updated easily.
     *
     * @enum {string | number}
     * @private
     */

  MaterialDataTable.prototype.Constant_ = {};
  /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */

  MaterialDataTable.prototype.CssClasses_ = {
    DATA_TABLE: 'mdl-data-table',
    SELECTABLE: 'mdl-data-table--selectable',
    SELECT_ELEMENT: 'mdl-data-table__select',
    IS_SELECTED: 'is-selected',
    IS_UPGRADED: 'is-upgraded'
  };
  /**
     * Generates and returns a function that toggles the selection state of a
     * single row (or multiple rows).
     *
     * @param {Element} checkbox Checkbox that toggles the selection state.
     * @param {Element} row Row to toggle when checkbox changes.
     * @param {(Array<Object>|NodeList)=} opt_rows Rows to toggle when checkbox changes.
     * @private
     */

  MaterialDataTable.prototype.selectRow_ = function (checkbox, row, opt_rows) {
    if (row) {
      return function () {
        if (checkbox.checked) {
          row.classList.add(this.CssClasses_.IS_SELECTED);
        } else {
          row.classList.remove(this.CssClasses_.IS_SELECTED);
        }
      }.bind(this);
    }

    if (opt_rows) {
      return function () {
        var i;
        var el;

        if (checkbox.checked) {
          for (i = 0; i < opt_rows.length; i++) {
            el = opt_rows[i].querySelector('td').querySelector('.mdl-checkbox');
            el['MaterialCheckbox'].check();
            opt_rows[i].classList.add(this.CssClasses_.IS_SELECTED);
          }
        } else {
          for (i = 0; i < opt_rows.length; i++) {
            el = opt_rows[i].querySelector('td').querySelector('.mdl-checkbox');
            el['MaterialCheckbox'].uncheck();
            opt_rows[i].classList.remove(this.CssClasses_.IS_SELECTED);
          }
        }
      }.bind(this);
    }
  };
  /**
     * Creates a checkbox for a single or or multiple rows and hooks up the
     * event handling.
     *
     * @param {Element} row Row to toggle when checkbox changes.
     * @param {(Array<Object>|NodeList)=} opt_rows Rows to toggle when checkbox changes.
     * @private
     */


  MaterialDataTable.prototype.createCheckbox_ = function (row, opt_rows) {
    var label = document.createElement('label');
    var labelClasses = ['mdl-checkbox', 'mdl-js-checkbox', 'mdl-js-ripple-effect', this.CssClasses_.SELECT_ELEMENT];
    label.className = labelClasses.join(' ');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('mdl-checkbox__input');

    if (row) {
      checkbox.checked = row.classList.contains(this.CssClasses_.IS_SELECTED);
      checkbox.addEventListener('change', this.selectRow_(checkbox, row));
    } else if (opt_rows) {
      checkbox.addEventListener('change', this.selectRow_(checkbox, null, opt_rows));
    }

    label.appendChild(checkbox);
    componentHandler.upgradeElement(label, 'MaterialCheckbox');
    return label;
  };
  /**
     * Initialize element.
     */


  MaterialDataTable.prototype.init = function () {
    if (this.element_) {
      var firstHeader = this.element_.querySelector('th');
      var bodyRows = Array.prototype.slice.call(this.element_.querySelectorAll('tbody tr'));
      var footRows = Array.prototype.slice.call(this.element_.querySelectorAll('tfoot tr'));
      var rows = bodyRows.concat(footRows);

      if (this.element_.classList.contains(this.CssClasses_.SELECTABLE)) {
        var th = document.createElement('th');
        var headerCheckbox = this.createCheckbox_(null, rows);
        th.appendChild(headerCheckbox);
        firstHeader.parentElement.insertBefore(th, firstHeader);

        for (var i = 0; i < rows.length; i++) {
          var firstCell = rows[i].querySelector('td');

          if (firstCell) {
            var td = document.createElement('td');

            if (rows[i].parentNode.nodeName.toUpperCase() === 'TBODY') {
              var rowCheckbox = this.createCheckbox_(rows[i]);
              td.appendChild(rowCheckbox);
            }

            rows[i].insertBefore(td, firstCell);
          }
        }

        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
      }
    }
  }; // The component registers itself. It can assume componentHandler is available
  // in the global scope.


  componentHandler.register({
    constructor: MaterialDataTable,
    classAsString: 'MaterialDataTable',
    cssClass: 'mdl-js-data-table'
  });
  /**
   * @license
   * Copyright 2015 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
     * Class constructor for Ripple MDL component.
     * Implements MDL component design pattern defined at:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @constructor
     * @param {HTMLElement} element The element that will be upgraded.
     */

  var MaterialRipple = function MaterialRipple(element) {
    this.element_ = element; // Initialize instance.

    this.init();
  };

  window['MaterialRipple'] = MaterialRipple;
  /**
     * Store constants in one place so they can be updated easily.
     *
     * @enum {string | number}
     * @private
     */

  MaterialRipple.prototype.Constant_ = {
    INITIAL_SCALE: 'scale(0.0001, 0.0001)',
    INITIAL_SIZE: '1px',
    INITIAL_OPACITY: '0.4',
    FINAL_OPACITY: '0',
    FINAL_SCALE: ''
  };
  /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */

  MaterialRipple.prototype.CssClasses_ = {
    RIPPLE_CENTER: 'mdl-ripple--center',
    RIPPLE_EFFECT_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
    RIPPLE: 'mdl-ripple',
    IS_ANIMATING: 'is-animating',
    IS_VISIBLE: 'is-visible'
  };
  /**
     * Handle mouse / finger down on element.
     *
     * @param {Event} event The event that fired.
     * @private
     */

  MaterialRipple.prototype.downHandler_ = function (event) {
    if (!this.rippleElement_.style.width && !this.rippleElement_.style.height) {
      var rect = this.element_.getBoundingClientRect();
      this.boundHeight = rect.height;
      this.boundWidth = rect.width;
      this.rippleSize_ = Math.sqrt(rect.width * rect.width + rect.height * rect.height) * 2 + 2;
      this.rippleElement_.style.width = this.rippleSize_ + 'px';
      this.rippleElement_.style.height = this.rippleSize_ + 'px';
    }

    this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE);

    if (event.type === 'mousedown' && this.ignoringMouseDown_) {
      this.ignoringMouseDown_ = false;
    } else {
      if (event.type === 'touchstart') {
        this.ignoringMouseDown_ = true;
      }

      var frameCount = this.getFrameCount();

      if (frameCount > 0) {
        return;
      }

      this.setFrameCount(1);
      var bound = event.currentTarget.getBoundingClientRect();
      var x;
      var y; // Check if we are handling a keyboard click.

      if (event.clientX === 0 && event.clientY === 0) {
        x = Math.round(bound.width / 2);
        y = Math.round(bound.height / 2);
      } else {
        var clientX = event.clientX !== undefined ? event.clientX : event.touches[0].clientX;
        var clientY = event.clientY !== undefined ? event.clientY : event.touches[0].clientY;
        x = Math.round(clientX - bound.left);
        y = Math.round(clientY - bound.top);
      }

      this.setRippleXY(x, y);
      this.setRippleStyles(true);
      window.requestAnimationFrame(this.animFrameHandler.bind(this));
    }
  };
  /**
     * Handle mouse / finger up on element.
     *
     * @param {Event} event The event that fired.
     * @private
     */


  MaterialRipple.prototype.upHandler_ = function (event) {
    // Don't fire for the artificial "mouseup" generated by a double-click.
    if (event && event.detail !== 2) {
      // Allow a repaint to occur before removing this class, so the animation
      // shows for tap events, which seem to trigger a mouseup too soon after
      // mousedown.
      window.setTimeout(function () {
        this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE);
      }.bind(this), 0);
    }
  };
  /**
     * Initialize element.
     */


  MaterialRipple.prototype.init = function () {
    if (this.element_) {
      var recentering = this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);

      if (!this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)) {
        this.rippleElement_ = this.element_.querySelector('.' + this.CssClasses_.RIPPLE);
        this.frameCount_ = 0;
        this.rippleSize_ = 0;
        this.x_ = 0;
        this.y_ = 0; // Touch start produces a compat mouse down event, which would cause a
        // second ripples. To avoid that, we use this property to ignore the first
        // mouse down after a touch start.

        this.ignoringMouseDown_ = false;
        this.boundDownHandler = this.downHandler_.bind(this);
        this.element_.addEventListener('mousedown', this.boundDownHandler);
        this.element_.addEventListener('touchstart', this.boundDownHandler);
        this.boundUpHandler = this.upHandler_.bind(this);
        this.element_.addEventListener('mouseup', this.boundUpHandler);
        this.element_.addEventListener('mouseleave', this.boundUpHandler);
        this.element_.addEventListener('touchend', this.boundUpHandler);
        this.element_.addEventListener('blur', this.boundUpHandler);
        /**
        * Getter for frameCount_.
        * @return {number} the frame count.
        */

        this.getFrameCount = function () {
          return this.frameCount_;
        };
        /**
        * Setter for frameCount_.
        * @param {number} fC the frame count.
        */


        this.setFrameCount = function (fC) {
          this.frameCount_ = fC;
        };
        /**
        * Getter for rippleElement_.
        * @return {Element} the ripple element.
        */


        this.getRippleElement = function () {
          return this.rippleElement_;
        };
        /**
        * Sets the ripple X and Y coordinates.
        * @param  {number} newX the new X coordinate
        * @param  {number} newY the new Y coordinate
        */


        this.setRippleXY = function (newX, newY) {
          this.x_ = newX;
          this.y_ = newY;
        };
        /**
        * Sets the ripple styles.
        * @param  {boolean} start whether or not this is the start frame.
        */


        this.setRippleStyles = function (start) {
          if (this.rippleElement_ !== null) {
            var transformString;
            var scale;
            var size;
            var offset = 'translate(' + this.x_ + 'px, ' + this.y_ + 'px)';

            if (start) {
              scale = this.Constant_.INITIAL_SCALE;
              size = this.Constant_.INITIAL_SIZE;
            } else {
              scale = this.Constant_.FINAL_SCALE;
              size = this.rippleSize_ + 'px';

              if (recentering) {
                offset = 'translate(' + this.boundWidth / 2 + 'px, ' + this.boundHeight / 2 + 'px)';
              }
            }

            transformString = 'translate(-50%, -50%) ' + offset + scale;
            this.rippleElement_.style.webkitTransform = transformString;
            this.rippleElement_.style.msTransform = transformString;
            this.rippleElement_.style.transform = transformString;

            if (start) {
              this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING);
            } else {
              this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING);
            }
          }
        };
        /**
        * Handles an animation frame.
        */


        this.animFrameHandler = function () {
          if (this.frameCount_-- > 0) {
            window.requestAnimationFrame(this.animFrameHandler.bind(this));
          } else {
            this.setRippleStyles(false);
          }
        };
      }
    }
  }; // The component registers itself. It can assume componentHandler is available
  // in the global scope.


  componentHandler.register({
    constructor: MaterialRipple,
    classAsString: 'MaterialRipple',
    cssClass: 'mdl-js-ripple-effect',
    widget: false
  });
})();

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _webslides = __webpack_require__(165);

var _webslides2 = _interopRequireDefault(_webslides);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.WebSlides = _webslides2.default;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _plugins = __webpack_require__(166);

var _plugins2 = _interopRequireDefault(_plugins);

var _slide = __webpack_require__(36);

var _slide2 = _interopRequireDefault(_slide);

var _dom = __webpack_require__(11);

var _dom2 = _interopRequireDefault(_dom);

var _scrollTo = __webpack_require__(178);

var _scrollTo2 = _interopRequireDefault(_scrollTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CLASSES = {
  VERTICAL: 'vertical',
  READY: 'ws-ready'
}; // Default plugins

const PLUGINS = {
  'autoslide': _plugins2.default.AutoSlide,
  'clickNav': _plugins2.default.ClickNav,
  'grid': _plugins2.default.Grid,
  'hash': _plugins2.default.Hash,
  'keyboard': _plugins2.default.Keyboard,
  'nav': _plugins2.default.Navigation,
  'scroll': _plugins2.default.Scroll,
  'touch': _plugins2.default.Touch,
  'video': _plugins2.default.Video,
  'youtube': _plugins2.default.YouTube
};
/**
 * WebSlides module.
 */

class WebSlides {
  /**
   * Options for WebSlides
   * @param {number|boolean} autoslide If a number is provided, it will allow
   * autosliding by said amount of milliseconds.
   * @param {boolean} changeOnClick If true, it will allow
   * clicking on any place to change the slide.
   * @param {boolean} loop Whether to go to first slide from last one or not.
   * @param {number} minWheelDelta Controls the amount of needed scroll to
   * trigger navigation.
   * @param {number} scrollWait Controls the amount of time to wait till
   * navigation can occur again with scroll.
   * @param {number} slideOffset Controls the amount of needed touch delta to
   * trigger navigation.
   */
  constructor({
    autoslide = false,
    changeOnClick = false,
    loop = true,
    minWheelDelta = 40,
    scrollWait = 450,
    slideOffset = 50
  } = {}) {
    /**
     * WebSlide element.
     * @type {Element}
     */
    this.el = document.getElementById('webslides');

    if (!this.el) {
      throw new Error('Couldn\'t find the webslides container!');
    }
    /**
     * Moving flag.
     * @type {boolean}
     */


    this.isMoving = false;
    /**
     * Slide's array.
     * @type {?Array<Slide>}
     */

    this.slides = null;
    /**
     * Current slide's index.
     * @type {number}
     * @private
     */

    this.currentSlideI_ = -1;
    /**
     * Current slide reference.
     * @type {?Slide}
     * @private
     */

    this.currentSlide_ = null;
    /**
     * Max slide index.
     * @type {number}
     * @private
     */

    this.maxSlide_ = 0;
    /**
     * Whether the layout is going to be vertical or horizontal.
     * @type {boolean}
     */

    this.isVertical = this.el.classList.contains(CLASSES.VERTICAL);
    /**
     * Plugin's dictionary.
     * @type {Object}
     */

    this.plugins = {};
    /**
     * Options dictionary.
     * @type {Object}
     */

    this.options = {
      autoslide,
      changeOnClick,
      loop,
      minWheelDelta,
      scrollWait,
      slideOffset
    };
    /**
     * Initialisation flag.
     * @type {boolean}
     */

    this.initialised = false; // Bootstrapping

    this.removeChildren_();
    this.grabSlides_();
    this.createPlugins_();
    this.initSlides_(); // Finished

    this.onInit_();
  }
  /**
   * Removes all children elements inside of the main container that are not
   * eligible to be a Slide Element.
   * @private
   */


  removeChildren_() {
    const nodes = this.el.childNodes;
    let i = nodes.length;

    while (i--) {
      const node = nodes[i];

      if (!_slide2.default.isCandidate(node)) {
        this.el.removeChild(node);
      }
    }
  }
  /**
   * Creates all the registered plugins and store the instances inside of the
   * the webslide instance.
   * @private
   */


  createPlugins_() {
    Object.keys(PLUGINS).forEach(pluginName => {
      const PluginCto = PLUGINS[pluginName];
      this.plugins[pluginName] = new PluginCto(this);
    });
  }
  /**
   * Called once the WebSlide instance has finished initialising.
   * @private
   * @fires WebSlide#ws:init
   */


  onInit_() {
    this.initialised = true;

    _dom2.default.fireEvent(this.el, 'ws:init');

    document.documentElement.classList.add(CLASSES.READY);
  }
  /**
   * Grabs the slides from the DOM and creates all the Slides modules.
   * @private
   */


  grabSlides_() {
    this.slides = _dom2.default.toArray(this.el.childNodes).map((slide, i) => new _slide2.default(slide, i));
    this.maxSlide_ = this.slides.length;
  }
  /**
   * Goes to a given slide.
   * @param {!number} slideI The slide index.
   * @param {?boolean=} forward Whether we're forcing moving forward/backwards.
   * This parameter is used only from the goNext, goPrev functions to adjust the
   * scroll animations.
   */


  goToSlide(slideI, forward = null) {
    if (this.isValidIndexSlide_(slideI) && !this.isMoving && this.currentSlideI_ !== slideI) {
      this.isMoving = true;
      let isMovingForward = false;

      if (forward !== null) {
        isMovingForward = forward;
      } else {
        if (this.currentSlideI_ >= 0) {
          isMovingForward = slideI > this.currentSlideI_;
        }
      }

      const nextSlide = this.slides[slideI];

      if (this.currentSlide_ !== null && this.isVertical && (!this.plugins.touch || !this.plugins.touch.isEnabled)) {
        this.scrollTransitionToSlide_(isMovingForward, nextSlide, this.onSlideChange_);
      } else {
        this.transitionToSlide_(isMovingForward, nextSlide, this.onSlideChange_);
      }
    }
  }
  /**
   * Transitions to a slide, doing the scroll animation.
   * @param {boolean} isMovingForward Whether we're going forward or backwards.
   * @param {Slide} nextSlide Next slide.
   * @param {Function} callback Callback to be called upon finishing. This is an
   * async function so it'll happen once the scroll animation finishes.
   * @private
   * @see scrollTo
   */


  scrollTransitionToSlide_(isMovingForward, nextSlide, callback) {
    this.el.style.overflow = 'hidden';

    if (!isMovingForward) {
      nextSlide.moveBeforeFirst();
      nextSlide.show();

      _scrollTo2.default.scrollTo(this.currentSlide_.el.offsetTop, 0);
    } else {
      nextSlide.show();
    }

    _scrollTo2.default.scrollTo(nextSlide.el.offsetTop, 500, () => {
      this.currentSlide_.hide();

      if (isMovingForward) {
        this.currentSlide_.moveAfterLast();
      }

      this.el.style.overflow = 'auto';
      setTimeout(() => {
        callback.call(this, nextSlide);
      }, 150);
    });
  }
  /**
   * Transitions to a slide, without doing the scroll animation. If the page is
   * already initialised and on mobile device, it will do a slide animation.
   * @param {boolean} isMovingForward Whether we're going forward or backwards.
   * @param {Slide} nextSlide Next slide.
   * @param {Function} callback Callback to be called upon finishing. This is a
   * sync function so it'll happen on run time.
   * @private
   */


  transitionToSlide_(isMovingForward, nextSlide, callback) {
    _scrollTo2.default.scrollTo(0, 0);

    let className = 'slideInRight';

    if (!isMovingForward) {
      nextSlide.moveBeforeFirst();
      className = 'slideInLeft';
    }

    if (this.currentSlide_) {
      if (isMovingForward) {
        this.currentSlide_.moveAfterLast();
      }

      this.currentSlide_.hide();
    }

    nextSlide.show();

    if (this.initialised && this.plugins.touch && this.plugins.touch.isEnabled) {
      _dom2.default.once(nextSlide.el, _dom2.default.getAnimationEvent(), () => {
        nextSlide.el.classList.remove(className);
        callback.call(this, nextSlide);
      });

      nextSlide.el.classList.add(className);
    } else {
      callback.call(this, nextSlide);
    }
  }
  /**
   * Whenever a slide is changed, this function gets called. It updates the
   * references to the current slide, disables the moving flag and fires
   * a custom event.
   * @param {Slide} slide The slide we're transitioning to.
   * @fires WebSlide#ws:slide-change
   * @private
   */


  onSlideChange_(slide) {
    if (this.currentSlide_) {
      this.currentSlide_.disable();
    }

    this.currentSlide_ = slide;
    this.currentSlideI_ = slide.i;
    this.currentSlide_.enable();
    this.isMoving = false;

    _dom2.default.fireEvent(this.el, 'ws:slide-change', {
      slides: this.maxSlide_,
      currentSlide0: this.currentSlideI_,
      currentSlide: this.currentSlideI_ + 1
    });
  }
  /**
   * Goes to the next slide.
   */


  goNext() {
    let nextIndex = this.currentSlideI_ + 1;

    if (nextIndex >= this.maxSlide_) {
      if (!this.options.loop) {
        return;
      }

      nextIndex = 0;
    }

    this.goToSlide(nextIndex, true);
  }
  /**
   * Goes to the previous slide.
   */


  goPrev() {
    let prevIndex = this.currentSlideI_ - 1;

    if (prevIndex < 0) {
      if (!this.options.loop) {
        return;
      }

      prevIndex = this.maxSlide_ - 1;
    }

    this.goToSlide(prevIndex, false);
  }
  /**
   * Check if the given number is a valid index to go to.
   * @param {number} i The index to check.
   * @return {boolean} Whether you can move to that slide or not.
   * @private
   */


  isValidIndexSlide_(i) {
    return i >= 0 && i < this.maxSlide_;
  }
  /**
   * Init the shown slide on load. It'll fetch it from the Hash if present
   * and, otherwise, it'll default to the first one.
   * @private
   * @see Hash.getSlideNumber
   */


  initSlides_() {
    let slideNumber = this.plugins.hash.constructor.getSlideNumber(); // Not valid

    if (slideNumber === null || slideNumber >= this.maxSlide_) {
      slideNumber = 0;
    } // Keeping the order


    if (slideNumber !== 0) {
      let i = 0;

      while (i < slideNumber) {
        this.slides[i].moveAfterLast();
        i++;
      }
    }

    this.goToSlide(slideNumber);
  }
  /**
   * Registers a plugin to be loaded when the instance is created. It allows
   * (on purpose) to replace default plugins.
   * @param {!string} key They key under which it'll be stored inside of the
   * instance, inside the plugins dict.
   * @param {!Function} cto Plugin constructor.
   */


  static registerPlugin(key, cto) {
    PLUGINS[key] = cto;
  }

}

exports.default = WebSlides;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoslide = __webpack_require__(167);

var _autoslide2 = _interopRequireDefault(_autoslide);

var _clickNav = __webpack_require__(169);

var _clickNav2 = _interopRequireDefault(_clickNav);

var _grid = __webpack_require__(170);

var _grid2 = _interopRequireDefault(_grid);

var _hash = __webpack_require__(171);

var _hash2 = _interopRequireDefault(_hash);

var _keyboard = __webpack_require__(172);

var _keyboard2 = _interopRequireDefault(_keyboard);

var _navigation = __webpack_require__(173);

var _navigation2 = _interopRequireDefault(_navigation);

var _scroll = __webpack_require__(174);

var _scroll2 = _interopRequireDefault(_scroll);

var _touch = __webpack_require__(175);

var _touch2 = _interopRequireDefault(_touch);

var _video = __webpack_require__(176);

var _video2 = _interopRequireDefault(_video);

var _youtube = __webpack_require__(177);

var _youtube2 = _interopRequireDefault(_youtube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  AutoSlide: _autoslide2.default,
  ClickNav: _clickNav2.default,
  Grid: _grid2.default,
  Hash: _hash2.default,
  Keyboard: _keyboard2.default,
  Navigation: _navigation2.default,
  Scroll: _scroll2.default,
  Touch: _touch2.default,
  Video: _video2.default,
  YouTube: _youtube2.default
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(11);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Autoslide plugin.
 */
class AutoSlide {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance
   * @constructor
   */
  constructor(wsInstance) {
    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;
    /**
     * Interval ID reference for the autoslide.
     * @type {?number}
     * @private
     */

    this.interval_ = null;
    /**
     * Internal stored time.
     * @type {?number}
     */

    this.time = this.ws_.options.autoslide;

    if (this.time) {
      _dom2.default.once(wsInstance.el, 'ws:init', this.play.bind(this));

      document.body.addEventListener('focus', this.onFocus.bind(this));
    }
  }
  /**
   * On focus handler. Will decide if stops/play depending on the focused
   * element if autoslide is active.
   */


  onFocus() {
    if (_dom2.default.isFocusableElement()) {
      this.stop();
    } else if (this.interval_ === null) {
      this.play();
    }
  }
  /**
   * Starts autosliding all the slides if it's not currently doing it and the
   * autoslide option was a number greater than 0.
   * @param {?number=} time Amount of milliseconds to wait to go to next slide
   * automatically.
   */


  play(time) {
    if (typeof time !== 'number') {
      time = this.time;
    }

    this.time = time;

    if (!this.interval_ && typeof time === 'number' && time > 0) {
      this.interval_ = setInterval(this.ws_.goNext.bind(this.ws_), time);
    }
  }
  /**
   * Stops autosliding all the slides.
   */


  stop() {
    if (this.interval_) {
      clearInterval(this.interval_);
      this.interval_ = null;
    }
  }

}

exports.default = AutoSlide;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const NativeCustomEvent = window.CustomEvent;
/**
 * Check for the usage of native support for CustomEvents which is lacking
 * completely on IE.
 * @return {boolean} Whether it can be used or not.
 */

function canIuseNativeCustom() {
  try {
    const p = new NativeCustomEvent('t', {
      detail: {
        a: 'b'
      }
    });
    return 't' === p.type && 'b' === p.detail.a;
  } catch (e) {}

  return false;
}
/**
 * Lousy polyfill for the Custom Event constructor for IE.
 * @param {!string} type The type of the event.
 * @param {?Object} params Additional information for the event.
 * @return {Event}
 * @constructor
 */


const IECustomEvent = function CustomEvent(type, params) {
  const e = document.createEvent('CustomEvent');

  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, undefined);
  }

  return e;
};

const WSCustomEvent = canIuseNativeCustom() ? NativeCustomEvent : IECustomEvent;
exports.default = WSCustomEvent;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const CLICKABLE_ELS = ['INPUT', 'SELECT', 'OPTION', 'BUTTON', 'A', 'TEXTAREA'];
/**
 * ClickNav plugin that allows to click on the page to get to the next slide.
 */

class ClickNav {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance
   * @constructor
   */
  constructor(wsInstance) {
    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;

    if (wsInstance.options.changeOnClick) {
      this.ws_.el.addEventListener('click', this.onClick_.bind(this));
    }
  }
  /**
   * Reacts to the click event. It will go to the next slide unless the element
   * has a data-prevent-nav attribute or is on the list of CLICKABLE_ELS.
   * @param {MouseEvent} event The click event.
   * @private
   */


  onClick_(event) {
    if (CLICKABLE_ELS.indexOf(event.target.tagName) < 0 && typeof event.target.dataset.preventNav === 'undefined') {
      this.ws_.goNext();
    }
  }

}

exports.default = ClickNav;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(74);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GRID_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAg' + 'MAAACdGdVrAAAACVBMVEUAAAAtXsUtXcPDDPUWAAAAA3RSTlMAZmHzZFkxAAAAFklEQVQI12M' + 'AA9bBR3ExhAJB1iooBQBGwgVEs/QtuAAAAABJRU5ErkJggg==';
/**
 * Grid plugin that shows a grid on top of the WebSlides for easy prototyping.
 */

class Grid {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance
   * @constructor
   */
  constructor(wsInstance) {
    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;
    const CSS = `body.baseline {
                  background: url(${GRID_IMAGE}) left top .8rem/.8rem;
                }`;
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = CSS;
    } else {
      style.appendChild(document.createTextNode(CSS));
    }

    head.appendChild(style);
    document.addEventListener('keydown', this.onKeyPress_.bind(this));
  }
  /**
   * Reacts to the keydown event. It reacts to ENTER key to toggle the class.
   * @param {KeyboardEvent} event The key event.
   * @private
   */


  onKeyPress_(event) {
    if (event.which === _keys2.default.ENTER) {
      document.body.classList.toggle('baseline');
    }
  }

}

exports.default = Grid;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const HASH = '#slide';
const slideRegex = /#slide=(\d+)/;
/**
 * Static class with methods to manipulate and extract info from the hash of
 * the URL.
 */

class Hash {
  /**
   * @param {WebSlides} wsInstance
   * @constructor
   */
  constructor(wsInstance) {
    this.ws_ = wsInstance;
    wsInstance.el.addEventListener('ws:slide-change', Hash.onSlideChange_);
    window.addEventListener('hashchange', this.onHashChange_.bind(this));
  }
  /**
   * hashchange event handler, makes the WebSlide instance navigate to the
   * needed slide.
   */


  onHashChange_() {
    const newSlideIndex = Hash.getSlideNumber();

    if (newSlideIndex !== null) {
      this.ws_.goToSlide(newSlideIndex);
    }
  }
  /**
   * Handler for the slide change event which updates the slide on the hash.
   * @param {Event} event
   * @private
   */


  static onSlideChange_(event) {
    Hash.setSlideNumber(event.detail.currentSlide);
  }
  /**
   * Gets the slide number from the hash by a regex matching `#slide=` and gets
   * the number after it. If the number is invalid or less than 0, it will
   * return null as an invalid value.
   * @return {?number}
   */


  static getSlideNumber() {
    const results = document.location.hash.match(slideRegex);
    let slide = 0;

    if (Array.isArray(results)) {
      slide = parseInt(results[1], 10);
    }

    if (typeof slide !== 'number' || slide < 0 || !Array.isArray(results)) {
      slide = null;
    } else {
      slide--; // Convert to 0 index
    }

    return slide;
  }
  /**
   * It will update the hash (if it's different) so it reflects the slide
   * number being visible.
   * @param {number} number The number of the slide we're transitioning to.
   */


  static setSlideNumber(number) {
    if (Hash.getSlideNumber() !== number - 1) {
      history.pushState({
        slideI: number - 1
      }, `Slide ${number}`, `${HASH}=${number}`);
    }
  }

}

exports.default = Hash;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(74);

var _keys2 = _interopRequireDefault(_keys);

var _dom = __webpack_require__(11);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Keyboard interaction plugin.
 */
class Keyboard {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance
   * @constructor
   */
  constructor(wsInstance) {
    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;
    document.addEventListener('keydown', this.onKeyPress_.bind(this));
  }
  /**
   * Reacts to the keydown event. It reacts to the arrows and space key
   * depending on the layout of the page.
   * @param {KeyboardEvent} event The key event.
   * @private
   */


  onKeyPress_(event) {
    let method;
    let argument;

    if (_dom2.default.isFocusableElement()) {
      return;
    }

    switch (event.which) {
      case _keys2.default.AV_PAGE:
      case _keys2.default.SPACE:
        method = this.ws_.goNext;
        break;

      case _keys2.default.RE_PAGE:
        method = this.ws_.goPrev;
        break;

      case _keys2.default.HOME:
        method = this.ws_.goToSlide;
        argument = 0;
        break;

      case _keys2.default.END:
        method = this.ws_.goToSlide;
        argument = this.ws_.maxSlide_ - 1;
        break;

      case _keys2.default.DOWN:
        method = this.ws_.isVertical ? this.ws_.goNext : null;
        break;

      case _keys2.default.UP:
        method = this.ws_.isVertical ? this.ws_.goPrev : null;
        break;

      case _keys2.default.LEFT:
        method = !this.ws_.isVertical ? this.ws_.goPrev : null;
        break;

      case _keys2.default.RIGHT:
        method = !this.ws_.isVertical ? this.ws_.goNext : null;
        break;
    }

    if (method) {
      method.call(this.ws_, argument);
    }
  }

}

exports.default = Keyboard;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(11);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ELEMENT_ID = {
  NAV: 'navigation',
  NEXT: 'next',
  PREV: 'previous',
  COUNTER: 'counter'
};
const LABELS = {
  VERTICAL: {
    NEXT: '↓',
    PREV: '↑'
  },
  HORIZONTAL: {
    NEXT: '→',
    PREV: '←'
  }
};
/**
 * Navigation plugin.
 */

class Navigation {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance
   * @constructor
   */
  constructor(wsInstance) {
    const arrowLabels = wsInstance.isVertical ? LABELS.VERTICAL : LABELS.HORIZONTAL;
    /**
     * Navigation element.
     * @type {Element}
     */

    this.el = _dom2.default.createNode('div', 'navigation');
    /**
     * Next button.
     * @type {Element}
     */

    this.next = Navigation.createArrow(ELEMENT_ID.NEXT, arrowLabels.NEXT);
    /**
     * Prev button.
     * @type {Element}
     */

    this.prev = Navigation.createArrow(ELEMENT_ID.PREV, arrowLabels.PREV);
    /**
     * Counter Element.
     * @type {Element}
     */

    this.counter = _dom2.default.createNode('span', ELEMENT_ID.COUNTER);
    /**
     * @type {WebSlides}
     * @private
     */

    this.ws_ = wsInstance;
    this.el.appendChild(this.next);
    this.el.appendChild(this.prev);
    this.el.appendChild(this.counter);
    this.ws_.el.appendChild(this.el);
    this.bindEvents_();
  }
  /**
   * Bind all events for the navigation.
   * @private
   */


  bindEvents_() {
    this.ws_.el.addEventListener('ws:slide-change', this.onSlideChanged_.bind(this));
    this.next.addEventListener('click', this.onButtonClicked_.bind(this));
    this.prev.addEventListener('click', this.onButtonClicked_.bind(this));
  }
  /**
   * Updates the counter inside the navigation.
   * @param {string|number} current Current slide number.
   * @param {string|number} max Max slide number.
   */


  updateCounter(current, max) {
    this.counter.textContent = `${current} / ${max}`;
  }
  /**
   * Creates an arrow to navigate.
   * @param {!String} id Desired ID for the arrow.
   * @param {!String} text Desired text for the arrow.
   * @return {Element} The arrow element.
   */


  static createArrow(id, text) {
    const arrow = _dom2.default.createNode('a', id, text);

    arrow.href = '#';
    arrow.title = 'Arrow Keys';
    return arrow;
  }
  /**
   * Slide Change event handler. Will update the text on the navigation.
   * @param {CustomEvent} event
   * @private
   */


  onSlideChanged_(event) {
    this.updateCounter(event.detail.currentSlide, event.detail.slides);
  }
  /**
   * Handles clicks on the next/prev buttons.
   * @param {MouseEvent} event
   * @private
   */


  onButtonClicked_(event) {
    event.preventDefault();

    if (event.target === this.next) {
      this.ws_.goNext();
    } else {
      this.ws_.goPrev();
    }
  }

}

exports.default = Navigation;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mobileDetector = __webpack_require__(75);

var _mobileDetector2 = _interopRequireDefault(_mobileDetector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Scroll plugin.
 */
class Scroll {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance
   * @constructor
   */
  constructor(wsInstance) {
    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;
    /**
     * Where the scroll is going to happen. The WebSlides element.
     * @type {Element}
     * @private
     */

    this.scrollContainer_ = wsInstance.el;
    /**
     * Whether movement is happening up or down.
     * @type {boolean}
     * @private
     */

    this.isGoingUp_ = false;
    /**
     * Whether movement is happening left or right.
     * @type {boolean}
     * @private
     */

    this.isGoingLeft_ = false;
    /**
     * Timeout id holder.
     * @type {?number}
     * @private
     */

    this.timeout_ = null;

    if (!_mobileDetector2.default.isAny()) {
      this.scrollContainer_.addEventListener('wheel', this.onMouseWheel_.bind(this));

      if (!wsInstance.isVertical) {
        wsInstance.el.addEventListener('ws:slide-change', this.onSlideChange_.bind(this));
      }
    }
  }
  /**
   * When the slides change, set an inner timeout to avoid prematurely
   * changing to the next slide again.
   * @private
   */


  onSlideChange_() {
    this.timeout_ = setTimeout(() => {
      this.timeout_ = null;
    }, this.ws_.options.scrollWait);
  }
  /**
   * Reacts to the wheel event. Detects whether is going up or down and decides
   * if it needs to move the slide based on the amount of delta.
   * @param {WheelEvent} event The Wheel Event.
   * @private
   */


  onMouseWheel_(event) {
    if (this.ws_.isMoving || this.timeout_) {
      event.preventDefault();
      return;
    }

    const {
      deltaY: wheelDeltaY,
      deltaX: wheelDeltaX
    } = event;
    const isVertical = this.ws_.isVertical;
    const isHorizontalMovement = Math.abs(wheelDeltaX) > Math.abs(wheelDeltaY);
    this.isGoingUp_ = wheelDeltaY < 0;
    this.isGoingLeft_ = wheelDeltaX < 0; // If we're mainly moving horizontally, prevent default

    if (isHorizontalMovement) {
      if (!isVertical) {
        event.preventDefault();
      } else {
        // If we're moving horizontally but this is vertical, return to avoid
        // unwanted navigation.
        return;
      }
    }

    if (Math.abs(wheelDeltaY) >= this.ws_.options.minWheelDelta || Math.abs(wheelDeltaX) >= this.ws_.options.minWheelDelta) {
      if (isHorizontalMovement && this.isGoingLeft_ || !isHorizontalMovement && this.isGoingUp_) {
        this.ws_.goPrev();
      } else {
        this.ws_.goNext();
      }

      event.preventDefault();
    }
  }

}

exports.default = Scroll;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mobileDetector = __webpack_require__(75);

var _mobileDetector2 = _interopRequireDefault(_mobileDetector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EVENTS = {
  touch: {
    START: 'touchstart',
    MOVE: 'touchmove',
    END: 'touchend'
  },
  pointer: {
    START: 'pointerdown',
    MOVE: 'pointermove',
    END: 'pointerup'
  }
};
/**
 * Touch plugin.
 */

class Touch {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance
   * @constructor
   */
  constructor(wsInstance) {
    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;
    /**
     * Start position for the X coordinate.
     * @type {number}
     * @private
     */

    this.startX_ = 0;
    /**
     * Start position for the Y coordinate.
     * @type {number}
     * @private
     */

    this.startY_ = 0;
    /**
     * Start position for the X coord.
     * @type {number}
     * @private
     */

    this.endX_ = 0;
    /**
     * Start position for the Y coord.
     * @type {number}
     * @private
     */

    this.endY_ = 0;
    /**
     * Whether is enabled or not. Only enabled for touch devices.
     * @type {boolean}
     * @private
     */

    this.isEnabled = false;
    let events;

    if (_mobileDetector2.default.isAny()) {
      // Likely IE
      if (window.PointerEvent && (_mobileDetector2.default.isWindows() || _mobileDetector2.default.isWindowsPhone())) {
        events = EVENTS.pointer;
      } else {
        events = EVENTS.touch;
      }

      this.isEnabled = true;
      document.addEventListener(events.START, this.onStart_.bind(this));
      document.addEventListener(events.MOVE, this.onMove_.bind(this));
      document.addEventListener(events.END, this.onStop_.bind(this));
    }
  }
  /**
   * Start touch handler. Saves starting points.
   * @param {Event} event The Touch event.
   * @private
   */


  onStart_(event) {
    const info = Touch.normalizeEventInfo(event);
    this.startX_ = info.x;
    this.startY_ = info.y;
    this.endX_ = info.x;
    this.endY_ = info.y;
  }
  /**
   * Move touch handler. Saves end points.
   * @param {Event} event The Touch event.
   * @private
   */


  onMove_(event) {
    const info = Touch.normalizeEventInfo(event);
    this.endX_ = info.x;
    this.endY_ = info.y;
  }
  /**
   * Stop touch handler. Checks if it needs to make any actions.
   * @private
   */


  onStop_() {
    const diffX = this.startX_ - this.endX_;
    const diffY = this.startY_ - this.endY_; // It's an horizontal drag

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < -this.ws_.options.slideOffset) {
        this.ws_.goPrev();
      } else if (diffX > this.ws_.options.slideOffset) {
        this.ws_.goNext();
      }
    }
  }
  /**
   * Normalizes an event to deal with differences between PointerEvent and
   * TouchEvent.
   * @param {Event} event
   * @return {Object} Normalised touch points.
   */


  static normalizeEventInfo(event) {
    let touchEvent = {
      pageX: 0,
      pageY: 0
    };

    if (typeof event.changedTouches !== 'undefined') {
      touchEvent = event.changedTouches[0];
    } else if (typeof event.originalEvent !== 'undefined' && typeof event.originalEvent.changedTouches !== 'undefined') {
      touchEvent = event.originalEvent.changedTouches[0];
    }

    const x = event.offsetX || event.layerX || touchEvent.pageX;
    const y = event.offsetY || event.layerY || touchEvent.pageY;
    return {
      x,
      y
    };
  }

}

exports.default = Touch;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(11);

var _dom2 = _interopRequireDefault(_dom);

var _slide = __webpack_require__(36);

var _slide2 = _interopRequireDefault(_slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Video plugin. Video plugin that allows to autoplay videos once the slide gets
 * active.
 */
class Video {
  /**
   * @param {WebSlides} wsInstance The WebSlides instance.
   * @constructor
   */
  constructor(wsInstance) {
    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;

    const videos = _dom2.default.toArray(this.ws_.el.querySelectorAll('video'));

    if (videos.length) {
      videos.forEach(video => {
        if (!video.hasAttribute('autoplay')) {
          return;
        }

        video.removeAttribute('autoplay');
        video.pause();
        video.currentTime = 0;

        const {
          i
        } = _slide2.default.getSectionFromEl(video);

        const slide = wsInstance.slides[i - 1];
        slide.video = video;
        slide.el.addEventListener(_slide.Events.ENABLE, Video.onSectionEnabled);
        slide.el.addEventListener(_slide.Events.DISABLE, Video.onSectionDisabled);
      });
    }
  }
  /**
   * On Section enable hook. Will play the video.
   * @param {CustomEvent} event
   */


  static onSectionEnabled(event) {
    event.detail.slide.video.play();
  }
  /**
   * On Section enable hook. Will pause the video.
   * @param {CustomEvent} event
   */


  static onSectionDisabled(event) {
    event.detail.slide.video.pause();
  }

}

exports.default = Video;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(11);

var _dom2 = _interopRequireDefault(_dom);

var _slide = __webpack_require__(36);

var _slide2 = _interopRequireDefault(_slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global YT */

/**
 * Player wrapper around the YT player. This is mostly to get around the event
 * in which we need to play a video which player isn't ready yet.
 */
class Player {
  /**
   * @param {Element} el
   */
  constructor(el) {
    /**
     * Whether the Player is ready or not.
     * @type {boolean}
     */
    this.ready = false;
    /**
     * Ready callback.
     * @type {?function}
     */

    this.onReadyCb = null;
    /**
     * Slide element in which the video is located.
     * @type {Node}
     */

    this.slide = _slide2.default.getSectionFromEl(el).section;
    /**
     * Whether it should autoplay on load or not.
     * @type {boolean}
     */

    this.autoplay = typeof el.dataset.autoplay !== 'undefined';
    /**
     * Whether the video should be muted or not.
     * @type {boolean}
     */

    this.isMuted = typeof el.dataset.mute !== 'undefined';
    /**
     * Options with which the player is created.
     * @type {Object}
     */

    this.options = {
      videoId: el.dataset.youtubeId,
      playerVars: this.getPlayerVars(el),
      events: {
        onReady: this.onPlayerReady.bind(this)
      }
    };
    /**
     * The iframe in which the video is loaded.
     * @type {Element}
     */

    this.el = el;
    /**
     * Timeout id.
     * @type {?number}
     */

    this.timeout = null;
    this.create();
  }
  /**
   * Destroys the iframe. Saves the current time in case it gets restored.
   */


  destroy() {
    this.currentTime = this.player.getCurrentTime();
    this.player.destroy();
    this.player = null;
    this.el = this.slide.querySelector('[data-youtube]');
    this.ready = false;
  }
  /**
   * Creates the player.
   */


  create() {
    this.player = new YT.Player(this.el, this.options);
    this.el = this.player.getIframe();
  }
  /**
   * Player ready callback. Will play the video if it was intended to be played
   * and will also call any pending callbacks.
   */


  onPlayerReady() {
    this.ready = true; // Restoring the current time if saved

    if (this.currentTime) {
      this.player.seekTo(this.currentTime, true);
      this.player.pauseVideo();
      this.currentTime = null;
    }

    if (this.timeout && this.player.getPlayerState() !== 1) {
      this.play();
    }

    if (this.onReadyCb) {
      this.onReadyCb();
      this.onReadyCb = null;
    }
  }
  /**
   * Plays the video.
   */


  play() {
    if (this.ready) {
      this.timeout = setTimeout(() => {
        this.timeout = null;
      }, 1000);

      if (this.isMuted) {
        this.player.mute();
      } else {
        this.player.unMute();
      }

      this.player.playVideo();
    } else {
      this.onReadyCb = this.play;
    }
  }
  /**
   * Pause playing the video if it's already playing.
   */


  pause() {
    if (this.player && this.player.pauseVideo && this.player.getPlayerState() === 1) {
      this.player.pauseVideo();
    }
  }
  /**
   * Parses the element to have the proper variables.
   * @param {Element} element
   * @return {Object} Player variables.
   */


  getPlayerVars(element) {
    const vars = {
      modestbranding: 1,
      rel: 0,
      origin: window.location.origin
    };

    if (this.slide.classList.contains('fullscreen')) {
      // Disabling keyboard interaction for fullscreenvideos
      vars.disablekb = 1;
    }

    if (typeof element.dataset.noControls !== 'undefined') {
      vars.controls = 0;
      vars.showinfo = 0;
    }

    if (typeof element.dataset.loop !== 'undefined') {
      vars.loop = 1;
      vars.playlist = element.dataset.youtubeId;
    }

    return vars;
  }

}
/**
 * Video plugin.
 */


class YouTube {
  /**
   * Grid plugin that shows a grid on top of the WebSlides for easy prototyping.
   * @param {WebSlides} wsInstance The WebSlides instance
   */
  constructor(wsInstance) {
    /**
     * @type {WebSlides}
     * @private
     */
    this.ws_ = wsInstance;
    this.videos = _dom2.default.toArray(this.ws_.el.querySelectorAll('[data-youtube]'));

    if (this.videos.length) {
      this.inject();
    }
  }
  /**
   * Once the YouTube API is ready this gets called so we can start the videos.
   */


  onYTReady() {
    this.videos.forEach(video => {
      const player = new Player(video);

      if (typeof video.dataset.autoplay !== 'undefined') {
        const {
          i
        } = _slide2.default.getSectionFromEl(player.el);

        const slide = this.ws_.slides[i - 1];
        slide.player = player;
        slide.el.addEventListener(_slide.Events.ENABLE, YouTube.onSlideEvent);
        slide.el.addEventListener(_slide.Events.DISABLE, YouTube.onSlideEvent);
        slide.el.addEventListener(_slide.Events.ENTER, YouTube.onSlideEvent);
        slide.el.addEventListener(_slide.Events.LEAVE, YouTube.onSlideEvent);

        if (this.ws_.currentSlide_ === slide) {
          YouTube.onSectionEnabled(slide);
        }
      }
    });
  }
  /**
   * Injects the YouTube iFrame API into the page.
   */


  inject() {
    window.onYouTubeIframeAPIReady = this.onYTReady.bind(this);
    const tag = document.createElement('script');
    tag.src = `https://www.youtube.com/iframe_api`;
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
  /**
   * Reacts to any event on the slide.
   * @param {CustomEvent} event
   */


  static onSlideEvent(event) {
    const slide = event.detail.slide;

    switch (event.type) {
      case _slide.Events.ENABLE:
        YouTube.onSectionEnabled(slide);
        break;

      case _slide.Events.DISABLE:
        YouTube.onSectionDisabled(slide);
        break;

      case _slide.Events.LEAVE:
        slide.player.destroy();
        break;

      case _slide.Events.ENTER:
        slide.player.create();
        break;
    }
  }
  /**
   * On Section enable hook. Will play the video.
   * @param {Slide} slide
   */


  static onSectionEnabled(slide) {
    if (slide.player.autoplay) {
      slide.player.play();
    }
  }
  /**
   * On Section enable hook. Will pause the video.
   * @param {Slide} slide
   */


  static onSectionDisabled(slide) {
    slide.player.pause();
  }

}

exports.default = YouTube;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _easing = __webpack_require__(179);

var _easing2 = _interopRequireDefault(_easing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SCROLL {
  /**
   * Smoothly scrolls to a given Y position using Easing.Swing. It'll run a
   * callback upon finishing.
   * @param {number} y Offset of the page to scroll to.
   * @param {number} duration Duration of the animation. 500ms by default.
   * @param {function} cb Callback function to call upon completion.
   */
  static scrollTo(y, duration = 500, cb = () => {}) {
    const scrollable_container = document.querySelector('#webslides');
    const delta = y - scrollable_container.scrollTop;
    const startLocation = scrollable_container.scrollTop;
    const increment = 16;

    if (!duration) {
      scrollable_container.scrollTop = y;
      cb();
      return;
    }

    const animateScroll = elapsedTime => {
      elapsedTime += increment;
      const percent = Math.min(1, elapsedTime / duration);

      const easingP = _easing2.default.swing(percent, elapsedTime * percent, y, delta, duration);

      scrollable_container.scrollTop = Math.floor(startLocation + easingP * delta);

      if (elapsedTime < duration) {
        setTimeout(() => animateScroll(elapsedTime), increment);
      } else {
        cb();
      }
    };

    animateScroll(0);
  }

}

exports.default = SCROLL;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Swing easing function.
 * @param {number} p The percentage of time that has passed.
 * @return {number}
 */
function swing(p) {
  return 0.5 - Math.cos(p * Math.PI) / 2;
}
/**
 * Linear easing function.
 * @param {number} p The percentage of time that has passed.
 * @return {number}
 */


function linear(p) {
  return p;
}

exports.default = {
  swing,
  linear
};

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(181);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(27)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-2!./slidecss.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-2!./slidecss.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(undefined);
// imports


// module
exports.push([module.i, "/*---------------------------------------------------------------------------------\n\n\tApp: WebSlides\n\tVersion: 1.3.1\n\tDate: 2017-04-26\n\tDescription: A simple and versatile framework for building HTML presentations, landings, and portfolios.\n\tAuthors: @jlantunez, @belelros, and @luissacristan\n\tAuthor URI: http://twitter.com/webslides\n\tLicense: The MIT License (MIT)\n\tLicense URI: https://opensource.org/licenses/MIT\n\n-----------------------------------------------------------------------------------\n\n\t0. CSS Reset & Normalize\n\t1. Base\n\t\t1.1 Wrap/Container\n\t\t1.2 Animations\n\t\t1.3 Responsive Media (videos, iframe, screenshots...)\n\t\t1.4 Basic Grid (2,3,4 columns)\n\t2. Typography & Lists\n\t\t2.1 Headings with background\n\t\t2.2 Classes: .text-\n\t\t2.3 San Francisco Font (Apple)\n\t3. Header & Footer\n\t\t3.1 Logo\n\t4. Navigation\n\t\t4.1 Navbars\n\t5. SLIDES (vertically and horizontally centered)\n\t\t5.1 Mini container & Alignment\n\t\t5.2 Counter / Navigation Slides\n\t\t5.3 Background Images/Video\n\t6. Magic blocks = .flexblock (Flexible blocks with auto-fill and equal height).\n\t\t6.1 .flexblock.features\n\t\t6.2 .flexblock.clients\n\t\t6.3 .flexblock.steps\n\t\t6.4 .flexblock.metrics\n\t\t6.5 .flexblock.specs\n\t\t6.6 .flexblock.reasons\n\t\t6.7 .flexblock.gallery\n\t\t6.8 .flexblock.plans\n\t\t6.9. flexblock.activity\n\t7. Promos/Offers (pricing, tagline, CTA...)\n\t8. Work / Resume / CV\n\t9. Table of contents\n\t10. Cards\n\t11. Quotes\n\t12. Avatars\n\t13. Tables\n\t14. Forms\n  15. Longform Elements\n\t16. Safari Bug (flex-wrap)\n\t17. Print\n\n----------------------------------------------------------------------------------- */\n\n/*=========================================\n0. CSS Reset & Normalize\n===========================================\r\n\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video { border: 0; font-size: 100%; font: inherit; vertical-align: baseline; margin: 0; padding: 0 }\n\narticle, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\n\nblockquote,\nq {\n  quotes: none\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: none\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhtml {\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\n\nembed,\niframe,\nobject {\n  max-width: 100%;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden],\ntemplate {\n  display: none;\n}\n\nul {\n  list-style: square;\n  text-indent: inherit;\n}\n\nol {\n  list-style: decimal;\n}\n\nb,\nstrong {\n  font-weight: 600;\n}\n\na {\n  background-color: transparent;\n}\n\na:active,\na:hover {\n  outline: 0;\n}\n\nsup,\nsub {\n  font-size: 0.75em;\n  line-height: 2.2em;\n  height: 0;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  bottom: 1ex;\n}\n\nsub {\n  top: 0.5ex;\n}\n\nsmall {\n  font-size: 0.75em;\n  line-height: 1.72;\n}\n\nbig {\n  font-size: 1.25em;\n}\n\nhr {\n  border: none;\n  clear: both;\n  display: block;\n  height: 1px;\n  width: 100%;\n  text-align: center;\n  margin: 3.2rem auto;\n}\n\nh2 + hr,\nh3 + hr {\n  margin-bottom: 4.8rem;\n}\n\np + hr {\n  margin-bottom: 4rem;\n}\n\n/*\nhr::after {\n    position: relative;\n    top: -2.4rem;\n    font-size: 2.4rem;\n    content: \"\\00A7\";\n    display: inline-block;\n    border-radius: 50%;\n    width: 4.8rem;\n    height: 4.8rem;\n    line-height: 4.8rem;\n}\r\ndfn,\ncite,\nem,\ni {\n  font-style: italic;\n}\n\nabbr,\nacronym {\n  cursor: help;\n}\n\nmark,\nins {\n  text-decoration: none;\n  padding: 0 4px;\n  text-shadow: none;\n\n}\n\n::-moz-selection {\n  text-shadow: none;\n}\n\n::-webkit-selection {\n  text-shadow: none;\n}\n\n::selection {\n  text-shadow: none;\n}\n\nimg {\n  /* Make sure images are scaled correctly.\r\n  border: 0;\n  height: auto;\n  max-width: 100%;\n}\n\nimg:hover {\n  opacity: 0.90;\n  filter: alpha(opacity=90);\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  position: relative;\n  margin: 0;\n  line-height: 0;\n}\n\noptgroup {\n  font-weight: bold;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin-bottom: 24px;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n}\n\nblockquote,\nq {\n  quotes: \"\" \"\";\n}\n\ndt {\n  font-weight: bold;\n}\n\ndd {\n  margin: 0;\n}\n\r\n\r\n/*=== Clearing === */\n/*.clear:before, .clear:after, header:before, header:after, main:before, main:after, .wrap:before, .wrap:after, group:before, group:after, section:before, section:after, aside:before, aside:after,footer:before, footer:after{ content: \"\"; display: table; }\n.clear:after, header:after, main:after, .wrap:after, group:after, section:after, aside:after, footer:after { clear: both; }*/\r\n\n/*=========================================\n1. Base --> Baseline: 8px = .8rem\n=========================================== */\n\n/* -- Disable elastic scrolling/bounce:\nwebslides.js will add .ws-ready automatically. Don't worry :) -- */\n\nhtml.ws-ready,\nhtml.ws-ready body {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n\n}\n\n#webslides {\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n/* -- Hide scrollbar, but still being able to scroll -- */\n\n#webslides {\n    -ms-overflow-style: none;  /* IE 10+ */\n}\n#webslides::-webkit-scrollbar {\n    display: none;  /* Safari and Chrome */\n}\n\n/* -- Prototype faster - Vertical rhythm  -- */\n\n\n/*\n#webslides.vertical {cursor: s-resize; }\n*/\n\nli li {\n  margin-left: 1.6rem;\n}\n\na,\na:active,\na:focus,\na:visited,\ninput:focus,\ntextarea:focus,\nbutton{\n  text-decoration: none;\n  -webkit-transition: all .3s ease-out;\n  transition: all .3s ease-out;\n}\n\np a:active {\n  position: relative;\n  top: 2px;\n}\n\nnav a[rel=\"external\"] em,\n.hidden {\n  clip: rect(1px, 1px, 1px, 1px);\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n}\n\n/*Layer/Box Shadow*/\n.shadow {\n  position: relative;\n}\n.shadow:before,.shadow:after {\n  z-index: -1;\n  position: absolute;\n  content: \"\";\n  bottom: 1.6rem;\n  left: 2.4rem;\n  width: 50%;\n  top: 80%;\n  max-width:300px;\n  transform: rotate(-3deg);\n}\n.shadow:after\n{\n  -webkit-transform: rotate(3deg);\n  -moz-transform: rotate(3deg);\n  transform: rotate(3deg);\n  right: 2.4rem;\n  left: auto;\n}\n\n/*=== 1.1 WRAP/CONTAINER === */\n\n.wrap,header nav, footer nav {\n  position: relative;\n  width: 100%;\n  max-width: 100%;\n  margin-right:auto;\n  margin-left: auto;\n  z-index: 2;\n}\n@media (min-width: 1024px) {\n.wrap,header nav, footer nav {\nwidth: 90%;\n }\n}\n\n.frame,.shadow {\n  padding: 2.4rem;\n}\n\n.radius {border-radius: .4rem;}\n\n.alignright {\n  float: right;\n}\n\n.alignleft {\n  float: left;\n}\n\n.aligncenter {\n  margin-right: auto;\n  margin-left: auto;\n  text-align: center;\n}\n\nimg.aligncenter,figure.aligncenter {\n  display: block;\n}\n\nimg.alignleft,figure.alignleft,\nimg.alignright,figure.alignright,\nimg.aligncenter,figure.aligncenter {\n  margin-top: 3.2rem;\n  margin-bottom: 3.2rem;\n}\n\nimg.aligncenter,figure.aligncenter {\n  margin-top: .8rem;\n  margin-bottom: .8rem;\n}\nimg.alignright,svg.alignright,figure.alignright {\n  margin: .8rem 0 .8rem 2.4rem\n}\nimg.alignleft,svg.alignleft,figure.alignleft {\n  margin: .8rem 2.4rem .8rem 0;\n}\n\n@media (min-width: 1024px) {\n\n  /*=== div.size-60, img.size-50, h1.size-40, p.size-30... === */\n  .size-80 {\n    width: 80%;\n  }\n  .size-70 {\n    width: 70%;\n  }\n  .size-60 {\n    width: 60%;\n  }\n  .size-50 {\n    width: 50%;\n  }\n  .size-40 {\n    width: 40%;\n  }\n  .size-30 {\n    width: 30%;\n  }\n  .size-20 {\n    width: 20%;\n  }\n}\n\npre,\ncode {\n  font-family: 'Cousine', monospace;\n}\n\npre {\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  text-align: left;\n  padding: 2.4rem;\n  overflow: auto;\n  width: 100%;\n}\n\npre + p {\n  margin-top: 3.2rem;\n}\n\ncode {\n  padding: .4rem;\n}\n\npre code {\n  padding: 0;\n}\n\n\n/*=== 1.2 Animations ================\nJust 5 basic animations:\n.fadeIn, .fadeInUp, .zoomIn, .slideInLeft, slideInRight\nhttps://github.com/daneden/animate.css*/\n\n/*-- fadeIn -- */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  -webkit-animation: fadeIn 1s;\n  animation: fadeIn 1s;\n}\n\n/*-- fadeInUp -- */\n@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInUp {\n  -webkit-animation: fadeInUp 1s;\n  animation: fadeInUp 1s;\n}\n\n/*-- zoomIn -- */\n@-webkit-keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(.3, .3, .3);\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n.zoomIn {\n  -webkit-animation: zoomIn 1s;\n  animation: zoomIn 1s;\n}\n\n/*-- slideInLeft -- */\n\n@keyframes slideInLeft {\n  from {\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInLeft {\n  -webkit-animation: slideInLeft 1s;\n  animation: slideInLeft 1s;\n  animation-fill-mode: both;\n}\n\n/*-- slideInRight -- */\n\n@keyframes slideInRight {\n  from {\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInRight {\n  -webkit-animation: slideInRight 1s;\n  animation: slideInRight 1s;\n  animation-fill-mode: both;\n}\n\n/* Animated Background (Matrix) */\n@-webkit-keyframes anim {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(-1200px);\n    transform: translateY(-1200px);\n  }\n}\n\n@keyframes anim {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(-1200px);\n    transform: translateY(-1200px);\n  }\n}\n/* Duration */\n.slow {\n  -webkit-animation-duration: 4s;\n  animation-duration: 4s;\n}\n.slow + .slow {\n  -webkit-animation-duration: 5s;\n  animation-duration: 5s;\n}\n\n/* Transitions */\n\nheader,\nfooter,\n#navigation {\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n/*=== 1.3 Responsive Media (videos, iframe...) === */\n\n.embed {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  /*aspect ratio:16:9*/\n  padding-bottom: 56.6%;\n  /*aspect ratio: 4:3*/\n  /*padding-bottom: 75%;*/\n}\n\n.embed iframe,\n.embed object,\n.embed embed,.embed video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n/* -- Responsive background video\nhttps://fvsch.com/code/video-background/ -- */\n\n.fullscreen > .embed {\n  position: fixed;\n  height: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding-bottom: 0;\n}\n\n/* 1. No object-fit support: */\n@media (min-aspect-ratio: 16/9) {\n  .fullscreen > .embed > iframe,\n  .fullscreen > .embed > object,\n  .fullscreen > .embed > embed,\n  .fullscreen > .embed > video {\n    height: 300%;\n    top: -100%;\n  }\n}\n@media (max-aspect-ratio: 16/9) {\n  .fullscreen > .embed > iframe,\n  .fullscreen > .embed > object,\n  .fullscreen > .embed > embed,\n  .fullscreen > .embed > video {\n    width: 300%;\n    left: -100%;\n  }\n}\n/* 2. If supporting object-fit, overriding (1): */\n@supports (object-fit: cover) {\n  .fullscreen > .embed > iframe,\n  .fullscreen > .embed > object,\n  .fullscreen > .embed > embed,\n  .fullscreen > .embed > video {\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n}\n\n/*=== Browser (Screenshots) ================ */\n\nh1 + .browser,\nh2 + .browser,\np + .browser {\n  margin-top: 4.8rem;\n}\n\n\n/* <figure class=\"browser\"> img </figure> */\n\n.browser {\n  overflow: hidden;\n  border-radius: .3rem;\n  max-width: 1024px;\n  margin: 0 auto 3.2rem;\n}\n.browser figcaption {padding: 2.4rem;\n}\nli .browser {margin-bottom: 0;\n}\n\n/*=== Topbar === */\n\n.browser:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  text-align: left;\n  font-size: .8rem;\n  padding: 1.6rem;\n  width: 100%;\n  line-height: 0;\n  /*copypastecharacter.com/graphic-shapes */\n  content: \"\\25CF   \\25CF   \\25CF\";\n}\n@media (min-width:768px) {\n  .browser:before {\n    font-size: 1.6rem;\n  }\n}\n.browser img {\n  width: 100%;\n  margin-top: 3.2rem;\n}\n\n/*=== 1.4. Basic Grid (Flexible blocks)\nAuto-fill & Equal height === */\n\n.grid {\n  margin-right: auto;\n  margin-left: auto;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  clear: both;\n}\n\n.grid:before {\n  content: \"\";\n  display: table;\n}\n\n.grid:after {\n  clear: both;\n}\n\n.grid > .column {\n  position: relative;\n  width: 100%;\n  display: -webkit-flex;\n  display: flex;\n  flex: auto;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  -webkit-transition: .3s;\n  transition: .3s;\n  padding: 2.4rem;\n}\n\n.grid.vertical-align .column {\n  justify-content: center;\n}\n\n@media (min-width:768px) {\n  .grid > .column {\n    width: 25%;\n  }\n  /* Grid (Sidebar + Main) .grid.sm */\n  .grid.sm .column:nth-child(1) {\n    width: 30%\n  }\n  .grid.sm .column:nth-child(2) {\n    width: 70%;\n  }\n  /* Grid (Main + Sidebar) .grid.ms */\n  .grid.ms .column:nth-child(1) {\n    width: 70%\n  }\n  .grid.ms .column:nth-child(2) {\n    width: 30%;\n  }\n  /* Grid (Sidebar + Main + Sidebar) .grid.sms */\n  .grid.sms .column:nth-child(2) {\n    width: 50%;\n  }\n}\n\n\n/*============================\n2. TYPOGRAPHY & LISTS\n============================== */\nhtml {\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n}\n\nhtml,\nbody {\n  line-height: 1;\n  /*Sometimes fonts don't display optimally on all devices*/\n  /*-moz-osx-font-smoothing: grayscale;*/\n  /*-webkit-font-smoothing: antialiased;*/\n  text-rendering: optimizeLegibility;\n  font-weight: 300;\n\n}\n\nhtml,\nbody,\ninput,\nselect,\ntextarea {\n  font-family: \"Roboto\", \"San Francisco\", helvetica, arial, sans-serif;\n  font-size: 62.5%;\n\n}\n\nbody,\ntextarea {\n  font-size: 1.8rem;\n}\n\np,\nli,\ndt,\ndd,\ntable,\nbig,\n {\n  line-height: 3.2rem;\n  margin-bottom: 3.2rem;\n}\n\nli,p:last-child {\n  margin-bottom: 0;\n}\n\n\nul>li,ol>li {margin-left: 3.2rem;}\nli li {\n  font-size: 100%;\n}\n\n/*== List .description (Product/Specs) === */\n\nul.description {\n  padding: 0;\n}\n\n.description + p{\n  margin-top: 3.2rem;\n}\n\n.description li {\n  position: relative;\n  padding-top:.8rem;\n  padding-bottom: .8rem;\n  -webkit-transition: .3s;\n  transition: .3s;\n}\n.description li:hover{\n  padding-left: .4rem;\n}\nul.description li,.column ul li {list-style: none;margin-left: 0;}\n\n.column ol>li {margin-left: 1.6rem;\n}\n\nh1 svg,\nh2 svg, h3 svg, h4 svg {\n  margin-top: -.8rem;\n}\n.text-intro svg,.text-quote p svg,.wall p svg,.try svg {\n  margin-top: -.4rem;\n}\n.flexblock li h2 svg,.flexblock li h3 svg {margin-top: 0;\n}\n\nh1 {\n  font-size: 4rem;\n  line-height: 5.6rem;\n}\n\nh1 span {\n  font-style: italic;\n}\n\nh2 {\n  font-size: 3.2rem;\n  line-height: 4.8rem;\n}\n\nh3 {\n  font-size: 2.4rem;\n  line-height: 4rem;\n}\n\nh4 {\n  font-size: 2.2rem;\n  line-height: 4rem;\n}\n\nh5 {\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 3.2rem;\n}\n\nh6 {\n  font-size: 1.8rem;\n  line-height: 3.2rem;\n  font-weight: 600;\n}\nh2.alignleft + p.alignright {margin-top: 1.2rem;margin-bottom: 0;}\nh3.alignleft + p.alignright {margin-top: .4rem;margin-bottom: 0;}\n\n@media (min-width: 768px) {\n  h1 {\n    font-size: 5.6rem;\n    line-height: 7.2rem;\n  }\n  h2 {\n    font-size: 4.8rem;\n    line-height: 6.4rem;\n  }\n  h3 {\n    font-size: 4rem;\n    line-height: 5.6rem;\n  }\n  h4 {\n    font-size: 3.2rem;\n    line-height: 4.8rem;\n  }\n}\n\nh1+h1,h1+h2,h1+h3,h1+h4,h1+h5,h1+h6,\nh2+h1,h2+h2,h2+h3,h2+h4,h2+h5,h2+h6,\nh3+h1,h3+h2,h3+h3,h3+h4,h3+h5,h3+h6,\nh4+h1,h4+h2,h4+h3,h4+h4,h4+h5,h4+h6,\nh5+h1,h5+h2,h5+h3,h5+h4,h5+h5,h5+h6,\nh6+h1,h6+h2,h6+h3,h6+h4,h6+h5,h6+h6 {\n  margin-top: .8rem;\n}\n\nh1+img,h2+img,h3+img {\n  margin-top: 4.8rem;\n  margin-bottom: 4.8rem;\n}\n[class*=\"content-\"] > [class*=\"content-\"] h2,\n[class*=\"content-\"] > [class*=\"content-\"] h3,\n[class*=\"content-\"] > [class*=\"content-\"] h4 {\n  font-size: 2.4rem;\n  line-height: 4rem;\n}\n/*=========================================\n2.1. Headings with background\n=========================================== */\n\nh1[class*=\"bg-\"],h2[class*=\"bg-\"],h3[class*=\"bg-\"],h4[class*=\"bg-\"],\nh5[class*=\"bg-\"],h6[class*=\"bg-\"],ul[class*=\"bg-\"],ol[class*=\"bg-\"],\nli[class*=\"bg-\"],p[class*=\"bg-\"] {\n  padding: 2.4rem;\n}\n\nh1 [class*=\"bg-\"],h2 [class*=\"bg-\"],h3 [class*=\"bg-\"] {\n  padding: .4rem .8rem;\n}\n\n/*=========================================\n2.2. Typography Classes = .text-\n=========================================== */\n\n.text-intro,[class*=\"content-\"] p {\n  font-size: 2.4rem;\n  line-height: 4rem;\n}\n/* -- Serif -- */\n.text-serif, h1 span {\n  font-family: \"Maitree\", times, serif;\n\n}\n\n/* -- h1,h2... Promo/Landings -- */\n.text-landing {\n  /*font-weight: 600;*/\n  letter-spacing: .4rem;\n  text-transform: uppercase;\n}\n@media (min-width: 768px) {\n  .text-landing {\n    letter-spacing: 1.6rem;\n  }\n}\n/* -- Subtitle (Before h1, h2) --\np.subtitle + h1/h2 */\n\np.text-subtitle {\n  font-size: 1.6rem;\n}\np.text-subtitle svg {vertical-align: text-top;}\n\n.text-subtitle {\n  text-transform: uppercase;\n  letter-spacing: .2rem;\n  margin-bottom: 0;\n}\n.text-subtitle + p  {\n  margin-top: 3.2rem;\n}\n\n.text-uppercase {text-transform: uppercase;}\n.text-lowercase {text-transform: lowercase;}\n\n/* -- Emoji (you'll love this) -- */\n\n.text-emoji {\nfont-size: 6.8rem;\nline-height: 8.8rem;\n}\n\n@media (min-width: 768px) {\n.text-emoji {\nfont-size: 12.8rem;\nline-height: 16rem;\n }\n}\n\n/* -- Numbers (results, sales... 23,478,289 iphones) -- */\n\n.text-data {\n  font-size: 6.4rem;\n  line-height: 8rem;\n  margin-bottom: .8rem;\n}\n\n@media (min-width: 768px) {\n  .text-data {\n    font-size: 15.2rem;\n    line-height: 16.8rem;\n  }\n}\n\n.text-label {\n  font-weight: 600;\n  display: inline-block;\n  width: 12.8rem;\n  text-transform: uppercase;\n}\n\n/* -- Magazine Two Columns -- */\n\n@media (min-width: 768px) {\n  .text-cols {\n    -webkit-column-count: 2;\n    -moz-column-count: 2;\n    column-count: 2;\n    -webkit-column-gap: 4.8rem;\n    -moz-column-gap: 4.8rem;\n    column-gap: 4.8rem;\n    text-align: left;\n  }\n  .text-landing + .text-cols{\n    margin-top: 3.2rem;\n  }\n}\n.text-cols p:first-child:first-letter {\n  font-size: 11rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  float: left;\n  padding: 0;\n  margin: -.4rem 1.6rem 0 0;\n  line-height: 1;\n}\n\n/* -- Heading with border -- */\n\n.text-context {\n  position: relative;\n  /*letter-spacing: .1rem;*/\n}\n.text-context.text-uppercase {\n  letter-spacing: .1rem\n}\n\n.text-context:before {\n  content: \"\";\n  display: block;\n  width: 12rem;\n  height: .2rem;\n  margin-bottom: .6rem;\n}\n.column .text-context:before {\n  width:100%;\n}\n\n/* -- Separator/Symbols (stars ***...) -- */\n\n.text-symbols {font-weight: 600; letter-spacing: .8rem;text-align: center;\n}\n\n/* -- Separator -- */\n.text-separator {\n  margin-top:2.4rem;\n}\n.text-separator:before {\n  position: absolute;\n  width: 16%;\n  height: .4rem;\n  content: \"\";\n  margin-top:-1.6rem;\n  left: 0;\n}\n@media (min-width: 568px) {\n  .text-separator {\n    width: 80%;\n    margin-top: 0;\n    margin-left: 20%;\n  }\n  .text-separator:before {\n    margin-top: 1.2rem;\n  }\n}\n\n/* -- Pull Quote (Right/Left)  -- */\n\n[class*=\"text-pull\"] {\n  position: relative;\n  font-size: 2.4rem;\n  line-height: 4rem;\n  font-weight: 400;\n  margin-right: 2.4rem;\n  margin-bottom: 3.2rem;\n  margin-left: 2.4rem;\n}\n\n[class*=\"text-pull-\"] {\n  padding-top: 1.4rem;\n  margin-top: .8rem;\n}\n\n@media (min-width: 1024px) {\n  [class*=\"text-pull\"] {\n    margin-right: -4.8rem;\n    margin-left: -4.8rem;\n  }\n}\n@media (min-width: 568px) {\n  [class*=\"text-pull-\"] {\n    max-width: 40%;\n  }\n  .text-pull-right {\n    float: right;\n    margin-right: -2.4rem;\n    margin-left: 2.4rem;\n  }\n  .text-pull-left {\n    float: left;\n    margin-left: -2.4rem;\n    margin-right: 2.4rem;\n  }\n}\nimg[class*=\"text-pull-\"],figure[class*=\"text-pull-\"] {\n  padding-top:0;\n  margin-top: .8rem;\n}\n\n/* -- Interviews (Questions & Answers)  --- */\n/* -- <dl class=\"text-interview\">\n<dt>name</dt>\n<dd><p>question or answer</p>\n</dd>\n--- */\n\n.text-interview dt {\n    font-weight: 600;\n    text-transform: uppercase;\n    margin-bottom: 0;\n}\n\n@media (min-width: 1024px) {\n.text-interview dt {\n    margin-left: -34%;\n    position: absolute;\n    text-align: right;\n    white-space: nowrap;\n    width: 30%;\n  }\n}\n\n/* -- Info Messages (error, warning, success... -- */\n\n.text-info {font-size: 1.6rem;line-height: 2.4rem;\n}\n/*=========================================\n2.1. San Francisco Font (Apple's new font)\n=========================================== */\n\n.text-apple,.bg-apple {\n  font-family: \"San Francisco\", helvetica, arial, sans-serif;\n}\n\n/* Ultra Light */\n\n@font-face {\n  font-family: \"San Francisco\";\n  font-weight: 100;\n  src: url(\"https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-ultralight-webfont.woff2\");\n}\n\n/* Thin */\n\n@font-face {\n  font-family: \"San Francisco\";\n  font-weight: 200;\n  src: url(\"https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-thin-webfont.woff2\");\n}\n\n\n/* Regular */\n\n@font-face {\n  font-family: \"San Francisco\";\n  font-weight: 400;\n  src: url(\"https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff2\");\n}\n\n/* Bold */\n\n@font-face {\n  font-family: \"San Francisco\";\n  font-weight: bold;\n  src: url(\"https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.woff2\");\n}\n\n/*=========================================\n3. Header & Footer\n=========================================== */\n\n/* -- If you want an unique, global header/footer,read this:\nhttps://github.com/webslides/webslides/issues/57 -- */\n\nheader,\nfooter,\n#navigation {\n  width: 100%;\n  padding: 2.4rem;\n}\n\nheader p,\nfooter p {\n  line-height: 4.8rem;\n  margin-bottom: 0;\n}\n\nheader[role=banner] img,\nfooter img {\n  height: 4rem;\n  vertical-align: middle;\n}\nfooter {\n  position: relative;\n}\nheader, footer {\n  /* hover/visibility */\n  z-index: 3;\n}\n\nheader,.ws-ready footer {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.ws-ready footer {\n  top: auto;\n  bottom: 0;\n}\n/*=== Hide header[role=banner] === */\n\n/*Remove \"opacity=0\" if you want an unique, visible header on each slide*/\nheader[role=banner] {\n  opacity: 0;\n}\n/*=== Show Header[role=banner] === */\nheader[role=banner]:hover {\n  opacity: 1;\n}\n\n@media (max-width: 767px) {\n  footer .alignleft, footer .alignright {\n    float: none;\n    display: block;\n  }\n}\n\n/*=== 3.1. Logo === */\n\n.logo {\n  text-transform: lowercase;\n  /*float: left;\n  font-size: 4.8rem;*/\n}\n\n.logo a {\n  background-size: 4.8rem;\n  width: 4.8rem;\n  height: 4.8rem;\n  vertical-align: middle;\n  float: left;\n  text-indent: -4000px;\n  /*If you remove text-indent */\n  /*padding-left: 6rem;*/\n}\n\n\n/*@media (max-width: 600px){\n.logo a {text-indent: -4000px;\n }\n}*/\n\n/*=========================================\n4. Navigation\n=========================================== */\n\n/*=== 4.1. Navbars === */\n\nnav ul {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  /*====align left====*/\n  justify-content: flex-start;\n  /* ==== align center ====*/\n  /*justify-content: center; */\n  /*====align right====*/\n  /* justify-content: flex-end; */\n  /*====separated columns li a====*/\n  /* justify-content: space-between; */\n  /*====separated columns centered li a====*/\n  /*justify-content: space-around;*/\n}\n\nnav ul li {\n  position: relative;\n  float: left;\n  list-style: none;\n}\n\nnav ul li:first-child,\nnav[role=navigation] ul li {\n  margin-left: 0;\n}\n\nnav[role=navigation] li a {\n  position: relative;\n  padding: 0 1.6rem;\n  line-height: 4.8rem;\n  text-decoration: none;\n  display: -webkit-flex;\n  display: flex;\n  justify-content: center;\n  max-width: 100%;\n  /*full li>a when you decide*/\n}\nnav[role=navigation] li a svg {margin: 1.5rem .4rem 1.5rem 0;}\n\nheader nav ul {\n  margin: 0;\n  justify-content: flex-end;\n}\n\nnav.aligncenter ul, .aligncenter nav ul {\n  /* ==== align center ====*/\n  justify-content: center;\n}\n\nnav.navbar ul li {\n  /*====full float li a ====*/\n  -webkit-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n\n@media (max-width: 568px) {\n  nav.navbar ul {\n    -webkit-flex-flow: column wrap;\n    flex-flow: column wrap;\n    padding: 0;\n  }\n  nav.navbar li a {\n    justify-content:flex-start;\n  }\n}\n\n/*============================================\n5. SLIDES (Full Screen)\nVertically and horizontally centered\n============================================== */\n\n/* Fade transition to all slides.\n* = All HTML elements will have those styles.*/\n\nsection * {\n  -webkit-animation: fadeIn 0.6s ease-in-out;\n  animation: fadeIn 0.6s ease-in-out;\n}\nsection .background,section .light,section .dark {\n  -webkit-animation-duration:0s;\n  animation-duration:0s;\n}\n\n/*=== Section = Slide === */\n\nsection,.slide\n{\n  position: relative;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  justify-content: center;\n  /*Fixed/Visible header? padding-top: 12rem; */\n  padding: 2.4rem;\n  word-wrap: break-word;\n  page-break-after: always;\n  min-height: 100vh; /*Fullscreen*/\n  /* Prototyping? min-height: 720px (Baseline: 8px = .8rem)*/\n}\n\n@media (min-width: 1024px) {\n  section, .slide {\n    padding-top: 12rem;\n    padding-bottom: 12rem;\n  }\n}\n/*slide no padding (full card, .embed> youtube video...) */\n.fullscreen {\n  padding: 0;\n  /* Fixed/Visible header?\n  padding:8.2rem 0 0 0;\n  */\n}\n\n/* slide alignment - top */\n.slide-top {\n  justify-content: flex-start;\n}\n\n\n/* slide alignment - bottom */\n.slide-bottom {\n  justify-content: flex-end;\n}\n\n\n/*== 5.1. Mini container width:50%\nAligned items [class*=\"content-\"]=== */\n\n[class*=\"content-\"] {\n  position: relative;\n  /*display: table;*/\n  text-align: left;\n}\n.wrap[class*=\"bg-\"],.wrap.frame,\n[class*=\"content-\"][class*=\"bg-\"],\n[class*=\"content-\"].frame, [class*=\"align\"][class*=\"bg-\"]{\n  padding: 4.8rem;\n}\nform[class*=\"bg-\"] {\npadding: 2.4rem;\n}\n[class*=\"content-\"] > [class*=\"content-\"] p {\n  font-size: 1.8rem;\n  line-height: 3.2rem;\n}\n\n.content-center {\n  margin: 0 auto;\n  text-align: center;\n}\n\n@media (min-width: 768px) {\n  [class*=\"content-\"] {\n    width: 50%;\n  }\n  .content-left {\n    float: left;\n  }\n  .content-right {\n    float: right;\n  }\n  [class*=\"content-\"] + [class*=\"content-\"] {\n    padding-left:2.4rem;\n    margin-bottom: 4.8rem;\n  }\n  [class*=\"content-\"] + [class*=\"size-\"] {\n    margin-top: 6.4rem;\n    clear:both;\n  }\n\n  [class*=\"content-\"]:before,\n  [class*=\"content-\"]:after {\n    content: \"\";\n    display: table;\n  }\n\n  [class*=\"content-\"]:after {\n    clear: both;\n  }\n}\n\n/* === 5.2 Counter / Navigation Slides  === */\n\n#navigation {\n  position: fixed;\n  width: 24.4rem;\n  margin-right: auto;\n  margin-left: auto;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* hover/visibility */\n  z-index: 4;\n}\n#navigation  {\n  -webkit-animation: fadeIn 8s;\n  animation: fadeIn 8s;\n  opacity:0;\n}\n#navigation:hover {\n  opacity: 1;\n}\n/* -- navigation arrow always visible? -- */\n\n/*\n#webslides:hover #navigation {\nopacity: 1;\n}\n*/\n\n#counter {\n  position: relative;\n  display: block;\n  width: 10rem;\n  margin-right: auto;\n  margin-left: auto;\n  text-align: center;\n  line-height: 4.8rem;\n}\n#counter a:hover {\npadding: .8rem;\n}\n#navigation p {\n  margin-bottom: 0;\n}\n\na#next,a#previous {\n  position: absolute;\n  width: 4rem;\n  height: 4rem;\n  text-align: center;\n  border-radius: .4rem;\n  text-align: center;\n  font-size: 2.4rem;\n  padding: .8rem;\n  cursor: pointer;\n}\na#next {\n  right: 3.2rem;\n}\n\na#previous {\n  left: 3.2rem;\n}\n@media (max-width:1024px) {\n  #navigation {\n    background: url(" + __webpack_require__(182) + ") no-repeat center top;\n    background-size: 4.8rem;\n    -webkit-animation: fadeIn 6s;\n    animation: fadeIn 6s;\n  }\n  #navigation a, #counter {display: none;\n  }\n}\n\n/*=== 5.3 Slides - Background Images/Videos === */\n\n.background,\n[class*=\"background-\"] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.background,\n[class*=\"background-\"]{\n  background-repeat: no-repeat;\n}\n.background {\n  background-position: center;\n  background-size: cover\n}\n.background-top {\n  background-position: top;\n  background-size: cover;\n}\n.background-bottom {\n  background-position: bottom;\n  background-size: cover;\n}\n\n\n/*fullscreen video\n  <video class=\"background-video\">\n*/\n\n.background-video {\n  width: 100%;\n  height: 100%;\n  object-fit: fill;\n}\n\n/*=== BG Positions === */\n\n.background-center {\n  background-position: center;\n}\n\n.background-center-top {\n  background-position: center top;\n}\n.background-right-top {\n  background-position: right top;\n}\n.background-left-top {\n  background-position: left top;\n}\n.background-center-bottom,\n.background-left-bottom,\n.background-right-bottom,\n.background-left,.background-right {\n  background-position: center bottom;\n}\n\n@media (min-width:1024px) {\n  .background-left-bottom {\n    background-position: left bottom;\n  }\n  .background-right-bottom {\n    background-position: right bottom;\n  }\n  .background-right {\n    background-position: right;\n  }\n  .background-left {\n    background-position: left;\n  }\n}\n\n/*=== bg image/video overlay === */\n/*-- [class*=\"bg-\"] .background.dark, [class*=\"bg-\"] .embed.dark...  -- */\n\n[class*=\"bg-\"] .light,\n[class*=\"bg-\"] .light {\n  filter: alpha(opacity=8000);\n  opacity: 0.80;\n  filter: alpha(opacity=8);\n}\n\n[class*=\"bg-\"] .dark,\n[class*=\"bg-\"] .dark {\n  filter: alpha(opacity=2000);\n  opacity: 0.20;\n  filter: alpha(opacity=2);\n}\n[class*=\"bg-\"] .background-video.dark {\n  filter: alpha(opacity=5000);\n  opacity: 0.50;\n  filter: alpha(opacity=5);\n}\n@media (max-width:1023px) {\n  [class*=\"background-\"] {\n    opacity: 0.20;\n    -webkit-animation: fadeIn ease-in 0.20;\n    animation: fadeIn ease-in 0.20;\n  }\n  .background-video {\n    opacity: 0.80;\n  }\n}\n/*=== Animated Background Image === */\n\n.background.anim {\n  height: 200%;\n  background-size: 100%;\n  background-repeat: repeat;\n  background-position: center top;\n  -webkit-animation: anim 80s linear infinite;\n  animation: anim 80s linear infinite;\n\n}\n/*=== Background with a frame === */\n/*<span class=\"background\" style=\"background-image:url('image.jpg')\"></span>\n<span class=\"background frame\"></span>*/\n\n[class*=\"background\"].frame {\nmargin: 2.4rem;\n}\n\n/*===============================================================\n6. Magic blocks with flexbox (Auto-fill & Equal Height)\nBlocks Links li>a = .flexblock.blink (.blink required)\n================================================================= */\n\n.flexblock {\n  margin-right: auto;\n  margin-left: auto;\n  padding: 0;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  clear: both;\n}\n\n.flexblock:before {\n  content: \"\";\n  display: table;\n}\n\n.flexblock:after {\n  clear: both;\n}\n\n.flexblock li,\n.flexblock.blink li>a {\n  position: relative;\n  display: -webkit-flex;\n  display: flex;\n  /*making paragraphs and linked block*/\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  margin: 0;\n  padding: 2.4rem;\n\n}\n\n.flexblock li {\n  flex: auto;\n  text-align: left;\n  /*float: left;*/\n  width: 100%;/* more control */\n  -webkit-transition: .3s;\n  transition: .3s;\n}\n.flexblock li:hover{\n  -webkit-transform: translateY(-.2rem);\n  transform: translateY(-.2rem);\n}\n.flexblock.aligncenter li {text-align: center;}\n\n.flexblock.vertical-align li {\n  justify-content: center;\n}\n\n.flexblock.blink li {\n  padding: 0;\n}\n\n@media (min-width:600px) {\n  .flexblock li {\n    width: 50%;\n  }\n}\n\n@media (min-width:1024px) {\n  .flexblock li {\n    width: 25%;\n  }\n}\n\nh1 + .flexblock,\nh2 + .flexblock,\nh3 + .flexblock,\ndiv + ul, div + ol{\n  margin-top: 3.2rem;\n}\n\n.flexblock li h2,\n.flexblock li h3,footer .column h2,footer .column h3 {\n  margin-bottom: 0;\n  font-size: 1.8rem;\n  font-weight: 600;\n  line-height: 3.2rem;\n}\n\n/*====================================================================\n6.1 Features <ul class=\"flexblock features\">\n====================================================================== */\n\n.flexblock.features>li {\n  width: 100%;\n  border-radius: .4rem;\n  margin-bottom: 4.8rem;\n}\n\n\n@media (min-width:768px) {\n  .flexblock.features {\n    margin-right: -2%;\n    margin-left: -2%;\n  }\n  .flexblock.features>li {\n    margin-right: 2%;\n    margin-left: 2%;\n    width: 29%;\n  }\n  .size-50 .flexblock.features>li{\n    width: 46%;\n  }\n  .column .flexblock.features>li{width: 100%;}\n\n  footer .flexblock.features>li {margin-bottom: 0;\n  }\n}\n\n.features li h2 {\n  text-transform: uppercase;\n}\n\n.features li span {\n  font-weight: 300;\n}\n\n.features li p {\n  margin: 0;\n}\n\n.features li p em {\n  display: block;\n}\n.features li span,.features li svg {\n  font-size: 6.4rem;\n  line-height: 1;\n  display: block;\n  margin: 0;\n}\n.features li img {width: 6.4rem;}\n\n.features li span sup {\n  font-size: 3rem;\n}\n\n@media (min-width:1200px) {\n  .features li span,\n  .features li svg,.features li img {\n    float: left;\n    margin-right: .8rem;\n  }\n}\n\n/*=====================================================================\n6.2 Clients Logos <ul class=\"flexblock clients\">\n======================================================================= */\n\n.flexblock.clients.blink li>a,.flexblock.clients li {\n  padding: 0;\n}\n\n.flexblock.clients li figcaption {\n  padding: 0 2.4rem 2.4rem;\n}\n.flexblock.clients.border li figcaption {\n  padding-top: 2.4rem;\n}\n\n.clients.blink li>a,\n.clients li {\n  justify-content: inherit;\n}\n\n.clients li img,.clients li svg {\n  display: block;\n  padding: 2.4rem;\n}\n\n.clients.border li img,.clients.border li svg {\n  margin-right: auto;\n  margin-left: auto;\n  display: block;\n}\n\n.clients li:hover  {\n  z-index: 1;\n}\n/*==================================================\n6.3 flexblock.steps <ul class=\"flexblock steps\">\nAbout, Philosophy...\n=================================================== */\n\n.steps li {\n  width: 100%;\n}\n\n.steps li img,\n.steps li span {\n  margin: 0 auto .8rem;\n  display: block;\n}\n\n.steps li span {\n  font-size: 6.4rem;\n}\n\n@media (min-width: 768px) {\n  .steps li {\n    width: 50%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .steps li {\n    width: 25%;\n    /*width: 33.3333%;*/\n  }\n  .process {\n    position: absolute;\n    top: 60px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-left-style: solid;\n    border-left-width: 15px;\n  }\n}\n\n\n/*=================================================\n6.4 Block Numbers - <ul class=\"flexblock metrics\">\n=================================================== */\n\n.metrics li {\n  text-align: center;\n  width: 100%;\n}\n\n.metrics li strong {\n  display: block;\n}\n\n.metrics li span,.metrics li svg {\n  font-size: 6.4rem;\n  line-height: 7.2rem;\n  display: block;\n  margin: 0 auto;\n}\n\n@media (min-width: 568px) {\n  .metrics li {\n    width: 50%;\n  }\n}\n\n@media (min-width: 1024px) {\n  .metrics li {\n    width: 25%;\n  }\n}\n.card-50 .metrics li {\n  width: 50%;\n}\n\n/*=====================================================\n6.5 Specs/Items: <ul class=\"flexblock specs\">\n======================================================= */\n\n.specs li {\n  width: 100%;\n  text-align: left;\n}\n\n.specs li:after {\n  content: \"\";\n  height: 1px;\n  display: block;\n  position: relative;\n  bottom: -2.4rem;\n}\n\n.specs li:hover {\n  -webkit-transform: translateX(.2rem);\n  transform: translateX(.2rem);\n}\n\n.specs li span,.specs li svg {\n  font-size: 6.4rem;\n  line-height: 1;\n  display: block;\n  margin: 0;\n}\n.specs li img {width: 6.4rem;}\n\n.specs li span  {\n  font-weight: 300;\n\n}\n.specs li span sup {\n  font-size: 3rem;\n\n}\n\n@media (min-width:1024px) {\n  .specs li span,\n  .specs li svg,.specs li img {\n    float: left;\n    margin-right: 2.4rem;\n  }\n}\n/*=================================================\n6.6 Reasons/Why/Numbers (counter-increment)\n<ul class=\"flexblock reasons\">\n=================================================== */\n\n.flexblock.reasons li {\n  text-align: left;\n  width: 100%;\n  counter-increment: list;\n}\n.reasons li:hover{\n  -webkit-transform: translateY(-.2rem);\n  transform: translateY(-.2rem);\n}\n.reasons li:before {\n  content: counter(list)'.';\n  font-size: 6.4rem;\n  line-height: 1;\n}\n.reasons li:after {\n  position: relative;\n  bottom: -2.4rem;\n  content: \"\";\n  height: 1px;\n  display: block;\n}\n@media (min-width: 768px) {\n  .reasons li {\n    padding-left: 8.8rem;\n    /* You need two digits? (1-10)*/\n    /*padding-left: 12rem; */\n  }\n  .reasons li:before {\n    position: absolute;\n    left: 2.4rem;\n  }\n}\n\n/*=================================================\n6.7 Gallery - <ul class=\"flexblock gallery\">\nBlock Thumbnails li+.overlay+image\nimg size recommended:800x600px\n=================================================== */\n\n.flexblock.gallery li {\n  margin-bottom: 4.8rem;\n}\n.flexblock.gallery li:nth-child(n+4) {\n  -webkit-flex:inherit;\n  flex:inherit;\n}\n.flexblock.gallery li,\n.flexblock.gallery.blink li>a {\n  padding: 0;\n}\n.gallery h2 {text-transform: uppercase;}\n\n.gallery h2 + p,.gallery h3 + p {\n  margin-top: .8rem;\n}\n.gallery p {\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  margin-bottom: 0;\n}\n\n.flexblock.gallery li figcaption {\n  position: relative;\n  padding: 1.6rem;\n}\n/*Arrow */\n\n.gallery li figcaption:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  margin-left: -0.5em;\n  top: .4rem;\n  left: 20%;\n  transform-origin: 0 0;\n  transform: rotate(135deg);\n  -webkit-transition: .1s;\n  transition: .1s;\n}\n.gallery li:hover figcaption:before {\n  top:.3rem;\n}\n.aligncenter .gallery li figcaption:before {\n  margin-left: 0;\n  left: 55%;\n}\n\n.gallery li footer {\n  position: relative;\n  padding:1.2rem 0 0;\n  margin-top: .8rem;\n}\n@media (min-width:600px) {\n  .flexblock.gallery {\n    margin-right: -2%;\n    margin-left: -2%;\n  }\n  .flexblock.gallery li {\n    margin-right: 2%;\n    margin-left: 2%;\n    width: 46%;\n  }\n}\n\n@media (min-width:1024px) {\n  .flexblock.gallery li {\n    width: 21%;\n  }\n  .grid.sm .flexblock.gallery li,.grid.ms .flexblock.gallery li {\n    width: 29%;\n  }\n  .grid.sms .flexblock.gallery li {\n    width: 46%;\n  }\n}\n\n.gallery li img {\n  margin-right: auto;\n  margin-left: auto;\n  display: block;\n}\n/* Overlay */\n\n.overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 1;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  justify-content: center;\n  transition: all 0.3s linear;\n}\nli .overlay {\n  align-items: center;\n}\nli .overlay h2 {\n  text-transform: uppercase;\n  margin: 0;\n  padding: 0 2.4rem;\n  letter-spacing: .2rem;\n  width: 100%;\n  text-align: center;\n}\n\n.overlay p,\n.overlay time {\n  margin-bottom: 0;\n}\n\nli:hover .overlay {\n  cursor: pointer;\n}\n\n/*===============================================\n6.8 Plans / Pricing <ul class=\"flexblock plans\">\n================================================= */\n\n.flexblock.plans>li {\n  text-align: center;\n  border-radius: 3px;\n  z-index: 1;\n  margin-bottom: 4.8rem;\n}\n\n.plans li,\n.plans.blink li>a {\n  padding: 0;\n}\n\n.plans.blink li>a div,\n.plans li div {\n  padding-bottom: 3.2rem;\n}\n\n.plans li p,\n.plans li h2 {\n  padding: .8rem 3.2rem;\n}\n\n.plans li h2 {\n  float: left;\n  width: 100%;\n  text-transform: uppercase;\n  letter-spacing: .1rem;\n  font-weight: 400;\n}\n\n.plans .price {\n  font-size: 4.8rem;\n  line-height: 6.2rem;\n  padding: 2.4rem;\n  font-weight: 400;\n  display: block;\n  clear: both;\n}\n\n.price sup {\n  font-size: 1.8rem;\n  margin-right: .4rem;\n}\n\n.plans li ul {\n  margin-bottom: 2.4rem;\n}\n\n\n/* Specs  ----------- */\n\n.flexblock.plans li ul li {\n  width: 100%;\n  padding: .8rem 3.2rem;\n  text-align: left;\n  display: block;\n}\n\n@media (min-width:1024px) {\n  .flexblock.plans {\n    margin-right: -2%;\n    margin-left: -2%;\n  }\n  .flexblock.plans>li {\n    margin-right: 2%;\n    margin-left: 2%;\n    width: 29%;\n  }\n  .plans>li:hover,\n  .plans>li:nth-child(2) {\n    position: relative;\n    z-index: 2;\n    transform: scale(1.08);\n  }\n  .plans:hover li:nth-child(2):not(:hover) {\n    position: relative;\n    z-index: 1;\n    transform: scale(1);\n  }\n}\n\n\n/*===========================================\n6.9 Block Activity <ul class=\"activity\">\nCV / News\n============================================= */\n\n.flexblock.activity {\n  -webkit-flex-direction: column;\n  flex-direction: column;\n}\n\n.activity li {\n  position: relative;\n  -webkit-flex: 1;\n  flex: 1;\n  width: auto;\n}\n\n.activity p {\n  vertical-align: top;\n  margin-bottom: 0;\n}\n\n.activity img {\n  display: block;\n}\n\n.activity .year,\n.activity .title {\n  display: inline;\n  font-weight: 600;\n}\n\n.activity .summary {\n  width: 100%;\n}\n\n.activity .title {\n  margin-left: 1rem;\n}\n\n@media (min-width: 768px) {\n  .activity p {\n    float: left;\n  }\n  .activity .year {\n    width: 15%;\n  }\n  .activity .title {\n    width: 27%;\n    margin-right: 4%;\n    margin-left: 4%;\n  }\n  .activity .summary {\n    width: 50%;\n  }\n}\n\n/*=========================================\n.flexblock sublist\n=========================================== */\n\n.flexblock li li,\n.flexblock.blink li li {\n  padding: 0;\n  width: 100%;\n}\n\n/*.flexblock li li:before {\n  position: absolute;\n  top: 3px;\n  left: 0;\n  content: \"*\";\n  font-weight: 400;\n}\n*/\n\n/*=== Mini container .flexblock li === */\n\n[class*=\"content-\"] .flexblock li p {\n  font-size: 1.8rem;\n  line-height: 3.2rem;\n}\n.content-right .flexblock.features li,\n.content-left .flexblock.features li {\n  width: 46%;\n}\n\n/*=============================================\n7. Promos/Offers (pricing, tagline, CTA...)\n=============================================== */\n\n.cta {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.number,\n.cta .benefit {\n  padding: .8rem;\n  max-width: 100%;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.number {\n  text-align: center;\n}\n\n.cta .benefit {\n  max-width: 100%;\n  text-align: center;\n}\n\n.number span {\n  font-size: 8rem;\n  line-height: 8rem;\n  display: block\n}\n\n.number span sup {\n  font-size: 4rem;\n}\n\n.cta p {\n  margin-bottom: 0;\n}\n\n@media (min-width: 768px) {\n  .number,\n  .cta .benefit {\n    padding: 4.8rem;\n    max-width: 50%;\n  }\n  .cta .benefit {\n    text-align: left;\n  }\n  .number span {\n    font-size: 16rem;\n    line-height: 16rem;\n  }\n  .number span sup {\n    font-size: 6rem;\n    vertical-align: middle;\n  }\n}\n\n\n/* --- Header CTA --- */\n\n.cta-cover {\n  display: table;\n  width: 100%;\n}\n\n.cta-cover h1 strong {\n  font-weight: 400;\n}\n\n@media (min-width: 1024px) {\n  .cta-cover h1 {\n    max-width: 80%;\n    float: left;\n  }\n  .cta-cover h1 strong {\n    display: block;\n  }\n  .cta-cover .button {\n    margin-top: 1.2rem;\n  }\n  .cta-cover .try {\n    text-align: center;\n  }\n}\n\n@media (max-width: 1023px) {\n  .cta-cover .alignright {\n    float: none;\n  }\n}\n\n\n/*=========================================\n8. Work/Resumé/CV <ul class=\"work\">\n=========================================== */\n\nh1 + .work,\nh2 + .work,\nh3 + .work,\np + .work {\n  margin-top: 4.8rem;\n}\n\n.work {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  clear: both;\n  text-align: left;\n}\n\n.work li {\n  position: relative;\n  -webkit-flex: 1;\n  flex: 1;\n  list-style: none;\n  margin: 0;\n\n}\n\n.work-label {\n  float: left;\n  width: 100%;\n  padding: 0 0 2.4rem;\n  font-weight: 600;\n}\n\n.work p {\n  margin-bottom: 0;\n}\n\n.work li a {\n  display: block;\n  float: left;\n  width: 100%;\n  height: 100%;\n  padding: 2.4rem 0;\n}\n\n.work-title {\n  display: block;\n  width: 75%;\n  padding-right: 1.2rem;\n}\n\n.work li a p,\n.work li:first-child a:hover p:first-child {\n  -webkit-transition: .3s;\n  transition: .3s;\n}\n\n.work li p {\n  padding-left: 1.2rem;\n}\n\n.work li.work-label p {\n  padding-left: 0;\n}\n\n.work li a:hover p:first-child {\n  padding-left: 1.6rem;\n}\n\n.work li p:last-child {\n  position: absolute;\n  top: 2.4rem;\n  right: 1.2rem;\n}\n\n.work li.work-label p:last-child {\n  top: 0;\n  right: 0;\n}\n\n@media (min-width: 768px) {\n  .work-label p,\n  .work li p {\n    width: 25%;\n    margin-right: 2%;\n    float: left;\n  }\n  .work li.work-label p:last-child,\n  .work li p:last-child {\n    position: relative;\n    float: right;\n    top: auto;\n    right: auto;\n    margin-right: 0;\n    text-align: right;\n    padding-right: 1.2rem;\n  }\n  .work li p.work-date {\n    width: 120px;\n  }\n}\n\n@media (max-width: 768px) {\n  .work-client,\n  .work-label .work-services {\n    clip: rect(1px, 1px, 1px, 1px);\n    position: absolute !important;\n    height: 1px;\n    width: 1px;\n    overflow: hidden;\n  }\n}\n\n\n/*===========================================\n9. Table of contents\n============================================= */\n\n.toc,\n.toc ol>li:before,\n.chapter {\n  position: relative;\n  z-index: 2;\n}\n\n/*.toc {\n  padding: 2.4rem;\n}\n*/\n\n.toc ol {\n  position: relative;\n  counter-reset: item;\n}\n\n.toc ol>li:before {\n  content: counters(item, \".\") \". \";\n  display: table-cell;\n  width: 2.4rem;\n  padding-right: .8rem;\n}\n\n.toc ol li li:before {\n  content: counters(item, \".\") \" \";\n}\n\n.toc li {\n  width: 100%;\n  display: table;\n  counter-increment: item;\n  font-weight: 400;\n  margin-bottom: .8rem;\n  margin-left: 0;\n  -webkit-transition: .3s;\n  transition: .3s;\n}\n\n.toc li li {\n  font-weight: 300;\n  margin-left: 0;\n  margin-bottom: 0;\n}\n\n.chapter {\n  display: inline-block;\n  font-size: 1.8rem;\n  line-height: 3.2rem;\n  padding-right: .8rem;\n}\n\n.toc-page {\n  float: right;\n}\n\n.toc li .toc-page:before {\n  position: absolute;\n  /* width: 100%; */\n  right: 4rem;\n  left: 0;\n  margin-top: 1.8rem;\n  content: \"\";\n  display: block;\n}\n\n.toc li>a {\n  display: inline-block;\n  width: 100%;\n}\n\n.toc li a:hover span {\n  font-weight: 600;\n}\n\n.toc li a:hover .toc-page:before {\n  border-bottom-width: 2px;\n}\n\n\n/*===========================================\n10. Cards\n============================================= */\n\n[class*=\"card-\"],\n[class*=\"card-\"]>a {\n  position: relative;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  clear: both;\n  /*width: 100%;*/\n}\n\n.fullscreen [class*=\"card-\"],\n.fullscreen [class*=\"card-\"]>a {\n  min-height: 100vh;\n}\n\n[class*=\"card-\"] figure img,[class*=\"card-\"] figure iframe {\n  margin: 0 auto;\n  display: block;\n}\n\n\n/*==  Images inside container:\nobject-fit to re-frame images rather than just stretch and resize them  === */\n\n@media (min-width: 768px) {\n  [class*=\"card\"][class*=\"bg-\"] figure,\n  .fullscreen [class*=\"card\"] figure {\n    vertical-align: middle;\n    text-align: center;\n    min-width: 380px;\n    max-height: 100%;\n  }\n  /* -- imgs/frames size recommended:800x600 -- */\n  [class*=\"card-\"][class*=\"bg-\"] figure img,\n  [class*=\"card-\"][class*=\"bg-\"] figure iframe,\n  /* -- Make small images/iframes larger -- */\n  .fullscreen [class*=\"card-\"] figure img,\n  .fullscreen [class*=\"card-\"] figure iframe {\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n}\n\n.flex-content,\n[class*=\"card\"] blockquote {\n  position: relative;\n  padding: 2.4rem;\n}\n[class*=\"card-\"] .flex-content,\n[class*=\"card-\"] blockquote {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.flex-content p {\n  position: relative;\n}\n\n@media (min-width: 768px) {\n  /*== Cards (Sizes) - Reference: figure img:-70,60,50,40,30... === */\n  .card-50 figure,\n  .card-50 blockquote,\n  .card-50 .flex-content {\n    width: 50%;\n  }\n  .card-30 figure,\n  .card-70 .flex-content,\n  .card-70 blockquote {\n    width: 30%;\n  }\n  .card-40 figure,\n  .card-60 .flex-content,\n  .card-60 blockquote {\n    width: 40%;\n  }\n  .card-60 figure,\n  .card-40 .flex-content,\n  .card-40 blockquote {\n    width: 60%;\n  }\n  .card-70 figure,\n  .card-30 .flex-content,\n  .card-30 blockquote {\n    width: 70%;\n  }\n  [class*=\"card\"]:nth-child(odd) figure {\n    order: 0\n  }\n  [class*=\"card\"]:nth-child(even) figure {\n    order: 1;\n  }\n  .flex-content,\n  [class*=\"card\"] blockquote {\n    padding: 4.8rem;\n  }\n  .fullscreen [class*=\"card\"] .flex-content,\n  .fullscreen [class*=\"card\"] blockquote {\n    padding: 6.4rem;\n  }\n}\n\n\n/*== Card - Headings === */\n\n@media (max-width: 767px) {\n  [class*=\"card-\"],\n  [class*=\"card-\"]>a {\n    flex-flow: column;\n  }\n  .card figure,\n  .card header {\n    width: 100%\n  }\n}\n\n/*== Ficaption Cards === */\n\n[class*=\"card\"] figure figcaption {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: .8rem 2.4rem;\n  font-size: 1.4rem;\n  line-height: 2.4rem;\n  /* Visibility */\n  z-index: 2;\n}\n\n[class*=\"card\"] figure figcaption svg {\n  font-size: 1rem;\n}\n\n\n/*=========================================\n11. Quotes\n=========================================== */\n\nblockquote {\n  position: relative;\n  display: inline-block;\n}\n\nblockquote p {\n  font-size: 2.4rem;\n  line-height: 4rem;\n}\nblockquote p:last-child {\nmargin-bottom: 3.2rem;\n}\n/* -- Interviews dl.text-interview -- */\ndd blockquote p:last-child {\nmargin-bottom: 0;\n}\n.bg-apple blockquote p {\n  font-family: \"San Francisco\", \"Roboto\", helvetica, arial, sans-serif;\n  font-weight: 300;\n}\n\ncite {\n  display: block;\n  text-align: center;\n}\n\ncite span {\n  display: block;\n}\n\ncite:before {\n  content: \"\\2014   \\2009\";\n  margin-right: 6px;\n}\n/* -- Big Blockquote -- */\n/* Info: .wall will be deprecated soon. Use .text-quote ;) */\n\n.text-quote,.wall {\nposition: relative; /* Versatility: blockquote, p, h2... */\n}\n.text-quote:before,.wall:before {\n  position: absolute;\n  top: -4rem;\n  left: -.8rem;\n  content: \"\\201C\";\n  font-family: arial, sans-serif;\n  width: 5.6rem;\n  height: 5.6rem;\n  font-size: 12rem;\n  line-height: 1;\n  text-align: center;\n}\n\n@media (min-width:768px) {\n  .text-quote,.wall {\n    padding-left: 6.4rem;\n  }\n  .text-quote p,.wall p {\n    font-size: 3.2rem;\n    line-height: 4.8rem;\n  }\n  .text-quote:before,.wall:before {\n    top: -1.6rem;\n    left: .8rem;\n  }\n}\n\n/*=========================================\n12. Avatars - uifaces.com\n=========================================== */\n\ncite img,\nimg[class*=\"avatar-\"] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n}\n\nimg[class*=\"avatar-\"] {\n  border-radius: 50%\n}\n\nimg.avatar-80 {\n  width: 80px;\n  height: 80px;\n}\nimg.avatar-72 {\n  width: 72px;\n  height: 72px;\n}\nimg.avatar-64 {\n  width: 64px;\n  height: 64px;\n}\n\nimg.avatar-56 {\n  width: 56px;\n  height: 56px;\n}\n\nimg.avatar-48 {\n  width: 48px;\n  height: 48px;\n}\n\nimg.avatar-40 {\n  width: 40px;\n  height: 40px;\n}\n\n/*=========================================\n13. Tables\n=========================================== */\n\ntable {\n  margin-top: 3.2rem;\n  margin-bottom: 3.2rem;\n}\n\ntable td,\nth,\nthead {\n  border-spacing: 0;\n  padding: .7rem 2.4rem;\n}\n\nthead th,\nth {\n  text-align: left;\n  cursor: default;\n  white-space: nowrap;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\nthead,\ntd.goals {\n  font-weight: 600;\n  text-shadow: none;\n}\n\ntr>td {\n  font-weight: 400;\n}\n\n\n/*.slide tr>td {\n  width: 25%;\n}*/\n\n\n/*=========================================\n14. Forms\n=========================================== */\n\nform {text-align: left;}\n\nform + p,input + p,textarea + p {margin-top: .8rem;\n}\n\ninput[type=text],\ninput[type=email],\ninput[type=tel],\ninput[type=url],\ninput[type=search],\ninput[type=password] {\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border-radius: 0;\n  -moz-border-radius: 0;\n  -webkit-border-radius: 0;\n}\ninput,\nbutton,\nselect {\n  position: relative;\n  display: inline-block;\n  margin: 0;\n  width: 100%;\n  height: 4.8rem;\n  padding: .7rem;\n  font-weight: 400;\n  font-size: 1.6rem;\n\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  width: auto;\n  height: auto;\n  padding: 4px;\n}\nbutton[type=\"submit\"],textarea {\n  width: 100%;\n}\ntextarea {\n  padding: .7rem;\n}\n\nbutton {\n  width: auto;\n  text-align: center;\n  cursor: pointer;\n}\n\n.button {\n  display: inline-block;\n  line-height: 4.8rem;\n  /*border-radius:4.8rem;\n  text-transform: uppercase;\n  letter-spacing: .1rem;*/\n  font-size: 1.8rem;\n  font-weight: 400;\n  text-align: center;\n  min-width: 16rem;\n  padding: 0 1.6rem;\n  cursor: pointer;\n}\n\n.button.radius, button.radius,input.radius {border-radius: 2.4rem;}\n\nbutton,\ninput[type=\"submit\"] {\n  text-transform: uppercase;\n  font-weight: 400;\n  letter-spacing: .1rem;\n}\n\n.button svg {\n  font-size: 2.4rem;\n}\n\n.plans .button {\n  width: 50%;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.try {\n  display: block;\n  font-size: 1.6rem;\n  margin-top: 1.6rem;\n}\n\nfieldset {\n  padding: 2.4rem;\n}\n\nlegend {\n  padding: 1.6rem 2.4rem;\n  border: none;\n  width: 100%;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing:.1rem;\n  font-weight: 400;\n}\n/*=== Focus === */\ninput:focus,\ntextarea:focus,\nselect:focus {\n  border-width: 1px;\n}\n\n/*=== App Store Badges === */\n/* Change width and height: 216x64px, 162x48px, 135x40... */\n\n[class*=\"badge-\"] {\n  width: 135px;\n  height: 40px;\n  line-height: 4rem;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: inline-block;\n  text-indent: -4000px;\n  border-radius: .6rem;\n}\n\n@media (min-width:1024px) {\n  [class*=\"badge-\"] {\n    width: 162px;\n    height: 48px;\n    line-height: 4.8rem;\n  }\n}\n\n\n/* Buttons/Badges - Hover */\n\na.button:hover,\nbutton[type=\"submit\"]:hover,\ninput[type=\"submit\"]:hover {\n  -webkit-transform:scale(1.01);\n  transform: scale(1.01);\n}\n[class*=\"badge-\"]:hover {\n  opacity: 0.7;\n}\n\n/*=== Sign Up/Login Form - Landings === */\n\n.user input {\n  margin-bottom: 0;\n}\n\n.user input[type=\"email\"],\n.user input[type=\"search\"],.user input[type=\"text\"] {\n  width: 100%;\n}\n\n.user button,\n.user input[type=\"submit\"] {\n  left: 0;\n  width: 100%;\n}\n\n@media (min-width:500px) {\n  .user input[type=\"email\"],\n  .user input[type=\"search\"],\n  .user input[type=\"text\"] {\n    width: 70%;\n    float: left;\n  }\n  .user button,\n  .user input[type=\"submit\"] {\n    width: 30%;\n    cursor: pointer;\n  }\n  [class*=\"button\"] + [class*=\"button\"],[class*=\"badge\"] + [class*=\"badge\"] {\n    margin-left: 1.8rem;\n  }\n}\n@media (max-width:499px) {\n\n  [class*=\"button\"] + [class*=\"button\"],[class*=\"badge\"] + [class*=\"badge\"] {\n    margin-top: .8rem;\n\n  }\n}\n\n:disabled,\nbutton:disabled:hover {\n  cursor: not-allowed;\n}\n\n/*=========================================\n15. Longform\n=========================================== */\n\n/* -- Posts = .wrap.longform -- */\n\n.longform {\nwidth: 72rem;\n/* Why 72rem=720px?\n90-95 characters per line = better reading speed */\n}\n.longform .alignleft, .longform .alignright {\n    max-width: 40%;\n}\n.longform img.aligncenter,.longform figure.aligncenter {\n  margin-top: 3.2rem;\n  margin-bottom: 3.2rem;\n}\n.longform ul,.longform ol {\nmargin-bottom: 3.2rem;\n}\n.longform ul ol,.longform ol ul,.longform ul ul,.longform ol ol {\nmargin-bottom: 0;\n}\n.longform figcaption p,.longform [class*=\"text-pull-\"] p{\nline-height: 2.4rem;\nfont-size: 1.6rem;\n}\n/* Mobile: video full width */\n.text-pull.embed {\npadding-bottom: 60.6%; /*without black borders; */\nmargin-right: -2.4rem;\nmargin-left: -2.4rem;\n}\n@media (min-width:1280px) {\n.longform [class*=\"text-pull-\"] {\nmax-width: 32%;\n}\n.longform .text-pull-right {\nmargin-right:-256px;\n}\n.longform .text-pull-left {\nmargin-left:-256px;\n }\n}\n@media (min-width:1024px) {\n.longform .text-quote {\nmargin-right: -4.8rem;\nmargin-left: -4.8rem;\n }\n}\n\n\n/*=========================================\n16. SAFARI BUGS (flex-wrap)\nSolution: stackoverflow.com/questions/34250282/flexbox-safari-bug-flex-wrap\n=========================================== */\n\n.flexblock:before, .flexblock:after,\n.grid:before,.grid:after, .cta:before,.cta:after{\n  width: 0;\n}\n\n/*=========================================\n17. PRINT\n=========================================== */\n\n@media print {\n  @page {\n    size: A4 landscape;\n    margin: 0.5cm;\n  }\n  /* Black prints faster */\n  * {\n    background: transparent !important;\n    color: black !important;\n    text-shadow: none !important;\n    filter: none !important;\n  }\n  html, body, #webslides {\n    width: auto !important;\n    height: auto !important;\n    overflow: auto !important;\n  }\n  #webslides {\n    overflow-x: auto !important;\n    overflow-y: auto !important;\n  }\n  section, .slide {\n    display: flex !important;\n    height: auto !important;\n  }\n  section * {\n    -webkit-animation: none;\n    animation: none;\n  }\n  table, figure {\n    page-break-inside: avoid;\n  }\n  #counter, #navigation {\n    display: none;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/swipe.svg";

/***/ })
/******/ ]);
//# sourceMappingURL=www.map