/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".test {\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! router */ "./src/router/index.tsx");
/* harmony import */ var state_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! state/store */ "./src/state/store.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/styles.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: state_store__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Content"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(router__WEBPACK_IMPORTED_MODULE_2__["Router"], null)));
};

var _default = App;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/yuriidmytriev/WebstormProjects/english-client/src/App.tsx");
  reactHotLoader.register(_default, "default", "/Users/yuriidmytriev/WebstormProjects/english-client/src/App.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/AddWord/AddWord.tsx":
/*!********************************************!*\
  !*** ./src/components/AddWord/AddWord.tsx ***!
  \********************************************/
/*! exports provided: AddWord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWord", function() { return AddWord; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks */ "./src/hooks/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/components/AddWord/utils.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.ts");
/* harmony import */ var _FileInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FileInput */ "./src/components/AddWord/FileInput/index.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./src/components/AddWord/styles.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









var inputs = [{
  name: 'word',
  type: 'input'
}, {
  name: 'translate',
  type: 'input'
}, {
  name: 'definition',
  type: 'textarea'
}, {
  name: 'context',
  type: 'textarea'
}, {
  name: 'example',
  type: 'textarea'
}, {
  name: 'synonym',
  type: 'input'
}, {
  name: 'antonym',
  type: 'input'
}];

var FormItem = function FormItem(_ref) {
  var type = _ref.type,
      props = _objectWithoutProperties(_ref, ["type"]);

  var TextArea = antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea;
  var formItemsType = {
    input: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], props),
    textarea: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, props)
  };
  return formItemsType[type] || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], props);
};

var fromConfig = function fromConfig(closeAddWordModal) {
  return {
    initialValues: {
      word: '',
      translate: '',
      definition: '',
      context: '',
      example: '',
      synonym: '',
      antonym: '',
      imageSrc: ''
    },
    onSubmit: function () {
      var _onSubmit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(values) {
        var formDataBody, _ref2, ok, statusText;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                formDataBody = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["createFormDataBody"])(values);
                _context.next = 3;
                return fetch(_constants__WEBPACK_IMPORTED_MODULE_5__["FETCH_WORDS_LIST_URL"], {
                  method: 'POST',
                  body: formDataBody
                });

              case 3:
                _ref2 = _context.sent;
                ok = _ref2.ok;
                statusText = _ref2.statusText;

                if (ok) {
                  antd__WEBPACK_IMPORTED_MODULE_2__["message"].success(statusText);
                  closeAddWordModal();
                } else {
                  antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(statusText);
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onSubmit(_x) {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  };
};

var AddWord = function AddWord() {
  var _useToggle = Object(hooks__WEBPACK_IMPORTED_MODULE_3__["useToggle"])(),
      visible = _useToggle.visible,
      openAddWordModal = _useToggle.openAddWordModal,
      closeAddWordModal = _useToggle.closeAddWordModal;

  var _useFormik = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormik"])(fromConfig(closeAddWordModal)),
      handleSubmit = _useFormik.handleSubmit,
      handleChange = _useFormik.handleChange,
      setFieldValue = _useFormik.setFieldValue;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    onClick: openAddWordModal
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["Plus"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "plus"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Add new word")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: "Add new word",
    footer: null,
    visible: visible,
    onCancel: closeAddWordModal
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: handleSubmit
  }, inputs.map(function (_ref3) {
    var name = _ref3.name,
        type = _ref3.type;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["InputWrapper"], {
      key: name
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, {
      key: name,
      name: name,
      type: type,
      placeholder: name,
      onChange: handleChange
    }));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FileInput__WEBPACK_IMPORTED_MODULE_6__["FileInput"], {
    setFieldValue: setFieldValue
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["ButtonWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit"
  }, "Add word")))));
};

__signature__(AddWord, "useToggle{{ visible, openAddWordModal, closeAddWordModal }}\nuseFormik{{ handleSubmit, handleChange, setFieldValue }}", function () {
  return [hooks__WEBPACK_IMPORTED_MODULE_3__["useToggle"], formik__WEBPACK_IMPORTED_MODULE_1__["useFormik"]];
});


;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(inputs, "inputs", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/AddWord/AddWord.tsx");
  reactHotLoader.register(FormItem, "FormItem", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/AddWord/AddWord.tsx");
  reactHotLoader.register(fromConfig, "fromConfig", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/AddWord/AddWord.tsx");
  reactHotLoader.register(AddWord, "AddWord", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/AddWord/AddWord.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/AddWord/FileInput/FileInput.tsx":
/*!********************************************************!*\
  !*** ./src/components/AddWord/FileInput/FileInput.tsx ***!
  \********************************************************/
/*! exports provided: FileInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInput", function() { return FileInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/AddWord/FileInput/styles.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var FileInput = function FileInput(_ref) {
  var setFieldValue = _ref.setFieldValue;

  var setFileNameToFormValues = function setFileNameToFormValues(inputData) {
    var _inputData$target;

    if ((_inputData$target = inputData.target) === null || _inputData$target === void 0 ? void 0 : _inputData$target.files) {
      var _inputData$target$fil = _slicedToArray(inputData.target.files, 1),
          file = _inputData$target$fil[0];

      setFieldValue('imageSrc', file);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    id: "imageSrc",
    name: "imageSrc",
    type: "file",
    onChange: setFileNameToFormValues
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "imageSrc"
  }, "Download"));
};


;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FileInput, "FileInput", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/AddWord/FileInput/FileInput.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/AddWord/FileInput/index.ts":
/*!***************************************************!*\
  !*** ./src/components/AddWord/FileInput/index.ts ***!
  \***************************************************/
/*! exports provided: FileInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileInput */ "./src/components/AddWord/FileInput/FileInput.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileInput", function() { return _FileInput__WEBPACK_IMPORTED_MODULE_0__["FileInput"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




/***/ }),

/***/ "./src/components/AddWord/FileInput/styles.js":
/*!****************************************************!*\
  !*** ./src/components/AddWord/FileInput/styles.js ***!
  \****************************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input.withConfig({
  displayName: "styles__Input",
  componentId: "sc-1kvxlhu-0"
})(["&{border:0;clip:rect(0,0,0,0);height:1px;overflow:hidden;padding:0;position:absolute !important;white-space:nowrap;width:1px;}& + label{line-height:1;position:relative;display:inline-block;font-weight:400;white-space:nowrap;text-align:center;border:1px solid #d9d9d9;box-shadow:0 2px 0 rgba(0,0,0,0.015);cursor:pointer;transition:all 0.3s cubic-bezier(0.645,0.045,0.355,1);user-select:none;touch-action:manipulation;padding:8px 15px;font-size:14px;border-radius:4px;color:rgba(0,0,0,0.65);background-color:#fff;}"]);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Input, "Input", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/AddWord/FileInput/styles.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/AddWord/index.tsx":
/*!******************************************!*\
  !*** ./src/components/AddWord/index.tsx ***!
  \******************************************/
/*! exports provided: AddWord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddWord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddWord */ "./src/components/AddWord/AddWord.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddWord", function() { return _AddWord__WEBPACK_IMPORTED_MODULE_0__["AddWord"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




/***/ }),

/***/ "./src/components/AddWord/styles.js":
/*!******************************************!*\
  !*** ./src/components/AddWord/styles.js ***!
  \******************************************/
/*! exports provided: Container, Plus, InputWrapper, ButtonWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plus", function() { return Plus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputWrapper", function() { return InputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var constants_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/colors */ "./src/constants/colors.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var grey = constants_colors__WEBPACK_IMPORTED_MODULE_1__["colors"].grey;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1530pkv-0"
})(["border:1px dashed ", ";display:flex;padding:1rem;align-items:center;flex-direction:column;border-radius:2px;cursor:pointer;margin-bottom:2rem;"], grey);
var Plus = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "styles__Plus",
  componentId: "sc-1530pkv-1"
})(["font-size:40px;font-weight:300;line-height:1;color:", ";"], grey);
var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__InputWrapper",
  componentId: "sc-1530pkv-2"
})(["margin-bottom:1rem;"]);
var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__ButtonWrapper",
  componentId: "sc-1530pkv-3"
})(["display:flex;justify-content:flex-end;"]);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(grey, "grey", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/AddWord/styles.js");
  reactHotLoader.register(Container, "Container", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/AddWord/styles.js");
  reactHotLoader.register(Plus, "Plus", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/AddWord/styles.js");
  reactHotLoader.register(InputWrapper, "InputWrapper", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/AddWord/styles.js");
  reactHotLoader.register(ButtonWrapper, "ButtonWrapper", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/AddWord/styles.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/AddWord/utils.ts":
/*!*****************************************!*\
  !*** ./src/components/AddWord/utils.ts ***!
  \*****************************************/
/*! exports provided: createFormDataBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFormDataBody", function() { return createFormDataBody; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var createFormDataBody = function createFormDataBody(values) {
  var formData = new FormData();
  Object.entries(values).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        value = _ref2[1];

    if (value) {
      formData.append(name, value);
    }
  });
  return formData;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(createFormDataBody, "createFormDataBody", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/AddWord/utils.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/HighlightedPhrase/HighlightedPhrase.tsx":
/*!****************************************************************!*\
  !*** ./src/components/HighlightedPhrase/HighlightedPhrase.tsx ***!
  \****************************************************************/
/*! exports provided: HighlightedPhrase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightedPhrase", function() { return HighlightedPhrase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/HighlightedPhrase/styles.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var HighlightedPhrase = function HighlightedPhrase(_ref) {
  var phrase = _ref.phrase,
      word = _ref.word;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["HighlightedPhrase"], {
    dangerouslySetInnerHTML: {
      __html: phrase.replace(word, "<span>".concat(word, "</span>"))
    }
  });
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HighlightedPhrase, "HighlightedPhrase", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/HighlightedPhrase/HighlightedPhrase.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/HighlightedPhrase/index.ts":
/*!***************************************************!*\
  !*** ./src/components/HighlightedPhrase/index.ts ***!
  \***************************************************/
/*! exports provided: HighlightedPhrase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HighlightedPhrase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HighlightedPhrase */ "./src/components/HighlightedPhrase/HighlightedPhrase.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighlightedPhrase", function() { return _HighlightedPhrase__WEBPACK_IMPORTED_MODULE_0__["HighlightedPhrase"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




/***/ }),

/***/ "./src/components/HighlightedPhrase/styles.js":
/*!****************************************************!*\
  !*** ./src/components/HighlightedPhrase/styles.js ***!
  \****************************************************/
/*! exports provided: HighlightedPhrase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightedPhrase", function() { return HighlightedPhrase; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var HighlightedPhrase = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "styles__HighlightedPhrase",
  componentId: "fwjpbw-0"
})(["font-size:18px;text-align:center;& span{background:#edff00;padding:2px 5px;line-height:1;border-radius:2px;}"]);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HighlightedPhrase, "HighlightedPhrase", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/HighlightedPhrase/styles.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Navigation/Navigation.tsx":
/*!**************************************************!*\
  !*** ./src/components/Navigation/Navigation.tsx ***!
  \**************************************************/
/*! exports provided: Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/Navigation/styles.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var Navigation = function Navigation() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["NavigationContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/words"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "View words")));
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Navigation, "Navigation", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/Navigation/Navigation.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Navigation/index.ts":
/*!********************************************!*\
  !*** ./src/components/Navigation/index.ts ***!
  \********************************************/
/*! exports provided: Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation */ "./src/components/Navigation/Navigation.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return _Navigation__WEBPACK_IMPORTED_MODULE_0__["Navigation"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




/***/ }),

/***/ "./src/components/Navigation/styles.js":
/*!*********************************************!*\
  !*** ./src/components/Navigation/styles.js ***!
  \*********************************************/
/*! exports provided: NavigationContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationContainer", function() { return NavigationContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var NavigationContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__NavigationContainer",
  componentId: "sc-8qemhd-0"
})(["position:fixed;bottom:0;box-shadow:0 0 11px -5px rgba(0,0,0,0.75);width:100%;padding:10px;left:0;background:#fff;"]);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NavigationContainer, "NavigationContainer", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/Navigation/styles.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Suggestion/Suggestion.tsx":
/*!**************************************************!*\
  !*** ./src/components/Suggestion/Suggestion.tsx ***!
  \**************************************************/
/*! exports provided: Suggestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suggestion", function() { return Suggestion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_wordsApiFetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/wordsApiFetch */ "./src/utils/wordsApiFetch.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./src/components/Suggestion/styles.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var CheckableTag = antd__WEBPACK_IMPORTED_MODULE_2__["Tag"].CheckableTag;

var SuggestionsList = function SuggestionsList(_ref) {
  var words = _ref.words;
  return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(words) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, words.map(function (word) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CheckableTag, {
      checked: true,
      key: word
    }, word);
  }));
};

var Suggestion = function Suggestion(_ref2) {
  var title = _ref2.title,
      word = _ref2.word,
      originalWord = _ref2.originalWord;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      synonyms = _useState2[0],
      setWord = _useState2[1];

  var handleClick =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(utils_wordsApiFetch__WEBPACK_IMPORTED_MODULE_4__["fetchWordFromRapid"])(pluralize__WEBPACK_IMPORTED_MODULE_3___default()(title), word || originalWord);

            case 2:
              data = _context.sent;
              setWord(data[pluralize__WEBPACK_IMPORTED_MODULE_3___default()(title)]);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClick() {
      return _ref3.apply(this, arguments);
    };
  }();

  return word ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["WordTitle"], null, "Word: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, word), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["MoreSynonymsButton"], {
    type: "primary",
    size: "small",
    onClick: handleClick
  }, "See more"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SuggestionsList, {
    words: synonyms
  })) : null;
};

__signature__(Suggestion, "useState{[synonyms, setWord]([])}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CheckableTag, "CheckableTag", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/Suggestion/Suggestion.tsx");
  reactHotLoader.register(SuggestionsList, "SuggestionsList", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/Suggestion/Suggestion.tsx");
  reactHotLoader.register(Suggestion, "Suggestion", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/Suggestion/Suggestion.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Suggestion/index.ts":
/*!********************************************!*\
  !*** ./src/components/Suggestion/index.ts ***!
  \********************************************/
/*! exports provided: Suggestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Suggestion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Suggestion */ "./src/components/Suggestion/Suggestion.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Suggestion", function() { return _Suggestion__WEBPACK_IMPORTED_MODULE_0__["Suggestion"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




/***/ }),

/***/ "./src/components/Suggestion/styles.js":
/*!*********************************************!*\
  !*** ./src/components/Suggestion/styles.js ***!
  \*********************************************/
/*! exports provided: MoreSynonymsButton, WordTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreSynonymsButton", function() { return MoreSynonymsButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordTitle", function() { return WordTitle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var MoreSynonymsButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "styles__MoreSynonymsButton",
  componentId: "pnvd8s-0"
})(["margin:10px 0;display:block;"]);
var WordTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "styles__WordTitle",
  componentId: "pnvd8s-1"
})(["font-weight:bold;"]);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MoreSynonymsButton, "MoreSynonymsButton", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/Suggestion/styles.js");
  reactHotLoader.register(WordTitle, "WordTitle", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/Suggestion/styles.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Video/Video.tsx":
/*!****************************************!*\
  !*** ./src/components/Video/Video.tsx ***!
  \****************************************/
/*! exports provided: Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_HighlightedPhrase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/HighlightedPhrase */ "./src/components/HighlightedPhrase/index.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/components/Video/styles.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var Video = function Video(_ref) {
  var word = _ref.word;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      videos = _useState2[0],
      setVideos = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      videoId = _useState4[0],
      setVideoId = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetch("https://www.playphrase.me/api/v1/phrases/search?q=".concat(word)).then(function (response) {
      return response.json();
    }).then(function (videoList) {
      return setVideos(videoList);
    });
  }, []);
  var phrases = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(videos, 'phrases', []);
  var isPreviousVideoExists = videoId > 0;
  var isNextVideoExists = videoId < phrases.length - 1;

  var handlePreviousVideo = function handlePreviousVideo() {
    if (isPreviousVideoExists) {
      setVideoId(videoId - 1);
    }
  };

  var handleNextVideo = function handleNextVideo() {
    if (isNextVideoExists) {
      setVideoId(videoId + 1);
    }
  };

  return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(phrases) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["VideoWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Arrow"], {
    disabled: !isPreviousVideoExists,
    type: "left",
    onClick: handlePreviousVideo
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["VideoContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Video"], {
    src: phrases[videoId]['video-url'],
    controls: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Arrow"], {
    disabled: !isNextVideoExists,
    type: "right",
    onClick: handleNextVideo
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_HighlightedPhrase__WEBPACK_IMPORTED_MODULE_3__["HighlightedPhrase"], {
    phrase: phrases[videoId].text,
    word: word
  })) : null;
};

__signature__(Video, "useState{[videos, setVideos]([])}\nuseState{[videoId, setVideoId](0)}\nuseEffect{}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Video, "Video", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/Video/Video.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Video/index.ts":
/*!***************************************!*\
  !*** ./src/components/Video/index.ts ***!
  \***************************************/
/*! exports provided: Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Video */ "./src/components/Video/Video.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _Video__WEBPACK_IMPORTED_MODULE_0__["Video"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




/***/ }),

/***/ "./src/components/Video/styles.js":
/*!****************************************!*\
  !*** ./src/components/Video/styles.js ***!
  \****************************************/
/*! exports provided: VideoContainer, VideoWrapper, Arrow, Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoContainer", function() { return VideoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoWrapper", function() { return VideoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrow", function() { return Arrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var VideoContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__VideoContainer",
  componentId: "sc-1e2r064-0"
})(["display:inline-block;"]);
var VideoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styles__VideoWrapper",
  componentId: "sc-1e2r064-1"
})(["display:flex;align-content:center;align-items:center;"]);
var Arrow = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(antd__WEBPACK_IMPORTED_MODULE_0__["Icon"]).withConfig({
  displayName: "styles__Arrow",
  componentId: "sc-1e2r064-2"
})(["font-size:35px;color:", ";"], function (props) {
  return props.disabled ? '#d6d6d6' : 'grey';
});
var Video = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].video.withConfig({
  displayName: "styles__Video",
  componentId: "sc-1e2r064-3"
})(["border-radius:5px;max-width:400px;width:100%;height:200px;display:block;margin-bottom:10px;"]);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(VideoContainer, "VideoContainer", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/Video/styles.js");
  reactHotLoader.register(VideoWrapper, "VideoWrapper", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/Video/styles.js");
  reactHotLoader.register(Arrow, "Arrow", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/Video/styles.js");
  reactHotLoader.register(Video, "Video", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/Video/styles.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Word/Word.tsx":
/*!**************************************!*\
  !*** ./src/components/Word/Word.tsx ***!
  \**************************************/
/*! exports provided: Word */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Word", function() { return Word; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var constants_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/url */ "./src/constants/url.ts");
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hooks */ "./src/hooks/index.ts");
/* harmony import */ var state_fetchWordsList_useFetchWordsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! state/fetchWordsList/useFetchWordsList */ "./src/state/fetchWordsList/useFetchWordsList.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ "./src/components/Word/styles.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};










var Meta = antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta;
var inputs = ['word', 'example', 'translate', 'explanation'];
var Word = function Word(_ref) {
  var id = _ref.id,
      word = _ref.word,
      translate = _ref.translate,
      imageSrc = _ref.imageSrc;

  var _useFetchWordsList = Object(state_fetchWordsList_useFetchWordsList__WEBPACK_IMPORTED_MODULE_6__["useFetchWordsList"])(),
      fetchWordsList = _useFetchWordsList.fetchWordsList;

  var _useToggle = Object(hooks__WEBPACK_IMPORTED_MODULE_5__["useToggle"])(),
      visible = _useToggle.visible,
      openAddWordModal = _useToggle.openAddWordModal,
      closeAddWordModal = _useToggle.closeAddWordModal;

  var deleteWordCard =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var response, wasWordDeletedSuccessfully;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["FETCH_WORDS_LIST_URL"], "/").concat(id), {
                method: 'DELETE'
              });

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              wasWordDeletedSuccessfully = _context.sent;

              if (wasWordDeletedSuccessfully) {
                fetchWordsList();
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function deleteWordCard() {
      return _ref2.apply(this, arguments);
    };
  }();

  var _useFormik = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormik"])({
    initialValues: {
      word: '',
      example: '',
      translate: '',
      explanation: '',
      imageSrc: ''
    },
    onSubmit: function () {
      var _onSubmit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(body) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_7__["FETCH_WORDS_LIST_URL"], "/").concat(id), {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(body)
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function onSubmit(_x) {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  }),
      handleSubmit = _useFormik.handleSubmit,
      handleChange = _useFormik.handleChange;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    actions: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "word/".concat(id)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: "update"
    }, "Open")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: "update",
      onClick: openAddWordModal
    }, "Update"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: "delete",
      type: "danger",
      onClick: deleteWordCard
    }, "Delete")]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Meta, {
    title: word,
    description: translate
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["CardImage"], {
    src: "".concat(constants_url__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"], "/image/").concat(imageSrc),
    alt: word
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: "Add new word",
    footer: null,
    visible: visible,
    onCancel: closeAddWordModal
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: handleSubmit
  }, inputs.map(function (input) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["InputWrapper"], {
      key: input
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      key: input,
      name: input,
      placeholder: input,
      onChange: handleChange
    }));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["ButtonWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit"
  }, "Update word")))));
};

__signature__(Word, "useFetchWordsList{{ fetchWordsList }}\nuseToggle{{ visible, openAddWordModal, closeAddWordModal }}\nuseFormik{{ handleSubmit, handleChange }}", function () {
  return [state_fetchWordsList_useFetchWordsList__WEBPACK_IMPORTED_MODULE_6__["useFetchWordsList"], hooks__WEBPACK_IMPORTED_MODULE_5__["useToggle"], formik__WEBPACK_IMPORTED_MODULE_3__["useFormik"]];
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Meta, "Meta", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/Word/Word.tsx");
  reactHotLoader.register(inputs, "inputs", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/Word/Word.tsx");
  reactHotLoader.register(Word, "Word", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/Word/Word.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Word/index.ts":
/*!**************************************!*\
  !*** ./src/components/Word/index.ts ***!
  \**************************************/
/*! exports provided: Word */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Word__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Word */ "./src/components/Word/Word.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Word", function() { return _Word__WEBPACK_IMPORTED_MODULE_0__["Word"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




/***/ }),

/***/ "./src/components/Word/styles.js":
/*!***************************************!*\
  !*** ./src/components/Word/styles.js ***!
  \***************************************/
/*! exports provided: InputWrapper, ButtonWrapper, CardBody, CardImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputWrapper", function() { return InputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBody", function() { return CardBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImage", function() { return CardImage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__InputWrapper",
  componentId: "mt1rq8-0"
})(["margin-bottom:1rem;"]);
var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__ButtonWrapper",
  componentId: "mt1rq8-1"
})(["display:flex;justify-content:flex-end;"]);
var CardBody = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__CardBody",
  componentId: "mt1rq8-2"
})(["display:flex;justify-content:space-between;"]);
var CardImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "styles__CardImage",
  componentId: "mt1rq8-3"
})(["border-radius:5px;width:150px;"]);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(InputWrapper, "InputWrapper", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/Word/styles.js");
  reactHotLoader.register(ButtonWrapper, "ButtonWrapper", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/Word/styles.js");
  reactHotLoader.register(CardBody, "CardBody", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/Word/styles.js");
  reactHotLoader.register(CardImage, "CardImage", "/Users/yuriidmytriev/WebstormProjects/english-client/src/components/Word/styles.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/constants/colors.ts":
/*!*********************************!*\
  !*** ./src/constants/colors.ts ***!
  \*********************************/
/*! exports provided: colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var colors = {
  grey: '#999'
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(colors, "colors", "/Users/yuriidmytriev/WebstormProjects/english-client/src/constants/colors.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/*! exports provided: FETCH_WORDS_LIST_URL, FETCH_WORD_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_WORDS_LIST_URL", function() { return FETCH_WORDS_LIST_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_WORD_URL", function() { return FETCH_WORD_URL; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var FETCH_WORDS_LIST_URL = "".concat("http://nest.eba-skbqafyv.us-east-2.elasticbeanstalk.com/", "/words") || false;
var FETCH_WORD_URL = "".concat("http://nest.eba-skbqafyv.us-east-2.elasticbeanstalk.com/", "/word") || false;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FETCH_WORDS_LIST_URL, "FETCH_WORDS_LIST_URL", "/Users/yuriidmytriev/WebstormProjects/english-client/src/constants/index.ts");
  reactHotLoader.register(FETCH_WORD_URL, "FETCH_WORD_URL", "/Users/yuriidmytriev/WebstormProjects/english-client/src/constants/index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/constants/spacing.ts":
/*!**********************************!*\
  !*** ./src/constants/spacing.ts ***!
  \**********************************/
/*! exports provided: spacing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spacing", function() { return spacing; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var spacing = {
  base: '1rem'
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(spacing, "spacing", "/Users/yuriidmytriev/WebstormProjects/english-client/src/constants/spacing.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/constants/url.ts":
/*!******************************!*\
  !*** ./src/constants/url.ts ***!
  \******************************/
/*! exports provided: SERVER_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_URL", function() { return SERVER_URL; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var SERVER_URL = "http://nest.eba-skbqafyv.us-east-2.elasticbeanstalk.com/" || false;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SERVER_URL, "SERVER_URL", "/Users/yuriidmytriev/WebstormProjects/english-client/src/constants/url.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/hooks/index.ts":
/*!****************************!*\
  !*** ./src/hooks/index.ts ***!
  \****************************/
/*! exports provided: useToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useToggle */ "./src/hooks/useToggle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useToggle", function() { return _useToggle__WEBPACK_IMPORTED_MODULE_0__["useToggle"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




/***/ }),

/***/ "./src/hooks/useToggle.ts":
/*!********************************!*\
  !*** ./src/hooks/useToggle.ts ***!
  \********************************/
/*! exports provided: useToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useToggle", function() { return useToggle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var useToggle = function useToggle() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      toggleVisible = _useState2[1];

  var openAddWordModal = function openAddWordModal() {
    return toggleVisible(true);
  };

  var closeAddWordModal = function closeAddWordModal() {
    return toggleVisible(false);
  };

  return {
    visible: visible,
    openAddWordModal: openAddWordModal,
    closeAddWordModal: closeAddWordModal
  };
};

__signature__(useToggle, "useState{[visible, toggleVisible](false)}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useToggle, "useToggle", "/Users/yuriidmytriev/WebstormProjects/english-client/src/hooks/useToggle.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var HotLoaderApp = Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__["hot"])(_App__WEBPACK_IMPORTED_MODULE_5__["default"]);
var EntryPoint =  false ? undefined : HotLoaderApp;
react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EntryPoint, null), document.getElementById('root'));
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HotLoaderApp, "HotLoaderApp", "/Users/yuriidmytriev/WebstormProjects/english-client/src/index.tsx");
  reactHotLoader.register(EntryPoint, "EntryPoint", "/Users/yuriidmytriev/WebstormProjects/english-client/src/index.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/Word/Word.tsx":
/*!*********************************!*\
  !*** ./src/pages/Word/Word.tsx ***!
  \*********************************/
/*! exports provided: Word */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Word", function() { return Word; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_Suggestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Suggestion */ "./src/components/Suggestion/index.ts");
/* harmony import */ var components_Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Video */ "./src/components/Video/index.ts");
/* harmony import */ var components_HighlightedPhrase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/HighlightedPhrase */ "./src/components/HighlightedPhrase/index.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./src/pages/Word/styles.js");
/* harmony import */ var _constants_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/url */ "./src/constants/url.ts");
/* harmony import */ var components_Navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Navigation */ "./src/components/Navigation/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.ts");
/* harmony import */ var _utils_wordsApiFetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/wordsApiFetch */ "./src/utils/wordsApiFetch.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};












var checkFrequency = function checkFrequency(frequency) {
  var number = Math.ceil(frequency);
  var is = {
    1: {
      color: '#880000',
      title: 'very rare'
    },
    2: {
      color: '#ff0202',
      title: 'rare'
    },
    3: {
      color: '#f97777',
      title: 'seldom'
    },
    4: {
      color: '#abc0f3',
      title: 'sometimes'
    },
    5: {
      color: '#6693ff',
      title: 'regular'
    },
    6: {
      color: '#054eff',
      title: 'often'
    },
    7: {
      color: '#002b94',
      title: 'frequently'
    }
  };
  return is[number];
};

var Word = function Word() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])(),
      id = _useParams.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      fetchedWord = _useState2[0],
      setWord = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      wordFrequency = _useState4[0],
      setWordFrequency = _useState4[1];

  var word = fetchedWord.word,
      translate = fetchedWord.translate,
      definition = fetchedWord.definition,
      context = fetchedWord.context,
      example = fetchedWord.example,
      synonym = fetchedWord.synonym,
      antonym = fetchedWord.antonym,
      imageSrc = fetchedWord.imageSrc;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var response, word, _ref2, zipf, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_8__["FETCH_WORD_URL"], "/").concat(id));

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              word = _context.sent;
              setWord(word);
              _context.next = 9;
              return Object(_utils_wordsApiFetch__WEBPACK_IMPORTED_MODULE_9__["fetchWordFromRapid"])('frequency', word.word);

            case 9:
              _ref2 = _context.sent;
              zipf = _ref2.frequency.zipf;
              data = checkFrequency(zipf);
              setWordFrequency(data);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  return word ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["WordPage"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["WordWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "".concat(_constants_url__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"], "/image/").concat(imageSrc),
    alt: word
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["WordProperty"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["WordTitle"], null, "Word: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, word)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["WordProperty"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["WordTitle"], null, "Translate: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, translate)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["WordProperty"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["WordTitle"], null, "Definition: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, definition)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["WordProperty"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["WordTitle"], null, "Context: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_HighlightedPhrase__WEBPACK_IMPORTED_MODULE_4__["HighlightedPhrase"], {
    phrase: context,
    word: word
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["WordProperty"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["WordTitle"], null, "Example: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_HighlightedPhrase__WEBPACK_IMPORTED_MODULE_4__["HighlightedPhrase"], {
    phrase: example,
    word: word
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["WordProperty"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Suggestion__WEBPACK_IMPORTED_MODULE_2__["Suggestion"], {
    title: "synonym",
    word: synonym,
    originalWord: word
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["WordProperty"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Suggestion__WEBPACK_IMPORTED_MODULE_2__["Suggestion"], {
    title: "antonym",
    word: antonym,
    originalWord: word
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["WordProperty"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["WordTitle"], null, "Frequency: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, wordFrequency.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Color"], {
    color: wordFrequency.color
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Video__WEBPACK_IMPORTED_MODULE_3__["Video"], {
    word: word
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Navigation__WEBPACK_IMPORTED_MODULE_7__["Navigation"], null)) : null;
};

__signature__(Word, "useParams{{ id }}\nuseState{[fetchedWord, setWord]({})}\nuseState{[wordFrequency, setWordFrequency]({})}\nuseEffect{}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"]];
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(checkFrequency, "checkFrequency", "/Users/yuriidmytriev/WebstormProjects/english-client/src/pages/Word/Word.tsx");
  reactHotLoader.register(Word, "Word", "/Users/yuriidmytriev/WebstormProjects/english-client/src/pages/Word/Word.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/Word/index.ts":
/*!*********************************!*\
  !*** ./src/pages/Word/index.ts ***!
  \*********************************/
/*! exports provided: Word */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Word__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Word */ "./src/pages/Word/Word.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Word", function() { return _Word__WEBPACK_IMPORTED_MODULE_0__["Word"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




/***/ }),

/***/ "./src/pages/Word/styles.js":
/*!**********************************!*\
  !*** ./src/pages/Word/styles.js ***!
  \**********************************/
/*! exports provided: WordWrapper, Image, WordProperty, WordTitle, WordPage, Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordWrapper", function() { return WordWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordProperty", function() { return WordProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordTitle", function() { return WordTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordPage", function() { return WordPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var WordWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__WordWrapper",
  componentId: "sc-41limh-0"
})(["margin:0 auto;margin-bottom:5rem;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "styles__Image",
  componentId: "sc-41limh-1"
})(["width:100%;max-width:300px;height:200px;border-radius:5px;border:2px solid #c7c7c7;margin:0 auto;display:block;margin-bottom:10px;"]);
var WordProperty = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__WordProperty",
  componentId: "sc-41limh-2"
})(["margin-bottom:10px;font-size:17px;"]);
var WordTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "styles__WordTitle",
  componentId: "sc-41limh-3"
})(["font-weight:bold;"]);
var WordPage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__WordPage",
  componentId: "sc-41limh-4"
})(["display:flex;"]);
var Color = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "styles__Color",
  componentId: "sc-41limh-5"
})(["width:30px;height:30px;background:", ";display:inline-block;border-radius:50%;"], function (props) {
  return props.color;
});
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(WordWrapper, "WordWrapper", "/Users/yuriidmytriev/WebstormProjects/english-client/src/pages/Word/styles.js");
  reactHotLoader.register(Image, "Image", "/Users/yuriidmytriev/WebstormProjects/english-client/src/pages/Word/styles.js");
  reactHotLoader.register(WordProperty, "WordProperty", "/Users/yuriidmytriev/WebstormProjects/english-client/src/pages/Word/styles.js");
  reactHotLoader.register(WordTitle, "WordTitle", "/Users/yuriidmytriev/WebstormProjects/english-client/src/pages/Word/styles.js");
  reactHotLoader.register(WordPage, "WordPage", "/Users/yuriidmytriev/WebstormProjects/english-client/src/pages/Word/styles.js");
  reactHotLoader.register(Color, "Color", "/Users/yuriidmytriev/WebstormProjects/english-client/src/pages/Word/styles.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/Words/Words.tsx":
/*!***********************************!*\
  !*** ./src/pages/Words/Words.tsx ***!
  \***********************************/
/*! exports provided: Words */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Words", function() { return Words; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Word__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Word */ "./src/components/Word/index.ts");
/* harmony import */ var components_AddWord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/AddWord */ "./src/components/AddWord/index.tsx");
/* harmony import */ var state_fetchWordsList_useFetchWordsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! state/fetchWordsList/useFetchWordsList */ "./src/state/fetchWordsList/useFetchWordsList.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./src/pages/Words/styles.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var Words = function Words() {
  var _useFetchWordsList = Object(state_fetchWordsList_useFetchWordsList__WEBPACK_IMPORTED_MODULE_5__["useFetchWordsList"])(),
      words = _useFetchWordsList.words,
      fetchWordsList = _useFetchWordsList.fetchWordsList;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchWordsList(); // eslint-disable-next-line
  }, []);

  var renderWords = function renderWords(word) {
    return word.word && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      key: word.id,
      xs: 24,
      sm: 12,
      md: 8,
      lg: 8,
      xl: 6
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["WordContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Word__WEBPACK_IMPORTED_MODULE_3__["Word"], word)));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["WordWrapper"], {
    gutter: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 12,
    md: 8,
    lg: 8,
    xl: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_AddWord__WEBPACK_IMPORTED_MODULE_4__["AddWord"], null)), !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(words) && words.map(renderWords)));
};

__signature__(Words, "useFetchWordsList{{ words, fetchWordsList }}\nuseEffect{}", function () {
  return [state_fetchWordsList_useFetchWordsList__WEBPACK_IMPORTED_MODULE_5__["useFetchWordsList"]];
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Words, "Words", "/Users/yuriidmytriev/WebstormProjects/english-client/src/pages/Words/Words.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/Words/index.ts":
/*!**********************************!*\
  !*** ./src/pages/Words/index.ts ***!
  \**********************************/
/*! exports provided: Words */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Words */ "./src/pages/Words/Words.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Words", function() { return _Words__WEBPACK_IMPORTED_MODULE_0__["Words"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




/***/ }),

/***/ "./src/pages/Words/styles.js":
/*!***********************************!*\
  !*** ./src/pages/Words/styles.js ***!
  \***********************************/
/*! exports provided: WordContainer, WordWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordContainer", function() { return WordContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordWrapper", function() { return WordWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var WordContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__WordContainer",
  componentId: "ug4obb-0"
})(["margin-bottom:2rem;"]);
var WordWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"]).withConfig({
  displayName: "styles__WordWrapper",
  componentId: "ug4obb-1"
})(["display:flex;flex-wrap:wrap;"]);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(WordContainer, "WordContainer", "/Users/yuriidmytriev/WebstormProjects/english-client/src/pages/Words/styles.js");
  reactHotLoader.register(WordWrapper, "WordWrapper", "/Users/yuriidmytriev/WebstormProjects/english-client/src/pages/Words/styles.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/router/index.tsx":
/*!******************************!*\
  !*** ./src/router/index.tsx ***!
  \******************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var pages_Word__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pages/Word */ "./src/pages/Word/index.ts");
/* harmony import */ var pages_Words__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pages/Words */ "./src/pages/Words/index.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var Router = function Router() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/words"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/words"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pages_Words__WEBPACK_IMPORTED_MODULE_3__["Words"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/word/:id"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pages_Word__WEBPACK_IMPORTED_MODULE_2__["Word"], null)));
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Router, "Router", "/Users/yuriidmytriev/WebstormProjects/english-client/src/router/index.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/state/addNewWord/actions.ts":
/*!*****************************************!*\
  !*** ./src/state/addNewWord/actions.ts ***!
  \*****************************************/
/*! exports provided: addNewWordAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewWordAction", function() { return addNewWordAction; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/state/addNewWord/types.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var addNewWordAction = function addNewWordAction() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["ADD_NEW_WORD"]
  };
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(addNewWordAction, "addNewWordAction", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/addNewWord/actions.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/state/addNewWord/index.ts":
/*!***************************************!*\
  !*** ./src/state/addNewWord/index.ts ***!
  \***************************************/
/*! exports provided: watchAddingNewWords, useAddNewWord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sagas */ "./src/state/addNewWord/sagas.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchAddingNewWords", function() { return _sagas__WEBPACK_IMPORTED_MODULE_0__["watchAddingNewWords"]; });

/* harmony import */ var _useAddNewWord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAddNewWord */ "./src/state/addNewWord/useAddNewWord.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAddNewWord", function() { return _useAddNewWord__WEBPACK_IMPORTED_MODULE_1__["useAddNewWord"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





/***/ }),

/***/ "./src/state/addNewWord/sagas.ts":
/*!***************************************!*\
  !*** ./src/state/addNewWord/sagas.ts ***!
  \***************************************/
/*! exports provided: addNewWord, watchAddingNewWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewWord", function() { return addNewWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchAddingNewWords", function() { return watchAddingNewWords; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/state/addNewWord/types.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(addNewWord),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(watchAddingNewWords);

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



function addNewWord(values) {
  return regeneratorRuntime.wrap(function addNewWord$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return console.log('addNewWord');

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
function watchAddingNewWords() {
  return regeneratorRuntime.wrap(function watchAddingNewWords$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_1__["ADD_NEW_WORD"], addNewWord);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(addNewWord, "addNewWord", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/addNewWord/sagas.ts");
  reactHotLoader.register(watchAddingNewWords, "watchAddingNewWords", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/addNewWord/sagas.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/state/addNewWord/types.ts":
/*!***************************************!*\
  !*** ./src/state/addNewWord/types.ts ***!
  \***************************************/
/*! exports provided: ADD_NEW_WORD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_NEW_WORD", function() { return ADD_NEW_WORD; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var ADD_NEW_WORD = 'ADD_NEW_WORD';
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ADD_NEW_WORD, "ADD_NEW_WORD", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/addNewWord/types.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/state/addNewWord/useAddNewWord.ts":
/*!***********************************************!*\
  !*** ./src/state/addNewWord/useAddNewWord.ts ***!
  \***********************************************/
/*! exports provided: useAddNewWord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAddNewWord", function() { return useAddNewWord; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/state/addNewWord/actions.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var useAddNewWord = function useAddNewWord() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();

  var addNewWord = function addNewWord(values) {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["addNewWordAction"])());
  };

  return {
    addNewWord: addNewWord
  };
};

__signature__(useAddNewWord, "useDispatch{dispatch}", function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"]];
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useAddNewWord, "useAddNewWord", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/addNewWord/useAddNewWord.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/state/fetchWord/actions.ts":
/*!****************************************!*\
  !*** ./src/state/fetchWord/actions.ts ***!
  \****************************************/
/*! exports provided: fetchWordAction, fetchWordByIdAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWordAction", function() { return fetchWordAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWordByIdAction", function() { return fetchWordByIdAction; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/state/fetchWord/types.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var fetchWordAction = function fetchWordAction(word) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_WORD"],
    word: word
  };
};
var fetchWordByIdAction = function fetchWordByIdAction(id) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["START_WORD_FETCHING"],
    id: id
  };
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fetchWordAction, "fetchWordAction", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/fetchWord/actions.ts");
  reactHotLoader.register(fetchWordByIdAction, "fetchWordByIdAction", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/fetchWord/actions.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/state/fetchWord/index.ts":
/*!**************************************!*\
  !*** ./src/state/fetchWord/index.ts ***!
  \**************************************/
/*! exports provided: watchWordFetching, fetchWordReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/state/fetchWord/reducers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchWordReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["fetchWordReducer"]; });

/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sagas */ "./src/state/fetchWord/sagas.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchWordFetching", function() { return _sagas__WEBPACK_IMPORTED_MODULE_1__["watchWordFetching"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





/***/ }),

/***/ "./src/state/fetchWord/reducers.ts":
/*!*****************************************!*\
  !*** ./src/state/fetchWord/reducers.ts ***!
  \*****************************************/
/*! exports provided: fetchWordReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWordReducer", function() { return fetchWordReducer; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/state/fetchWord/types.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var fetchWordReducer = function fetchWordReducer(state, _ref) {
  var type = _ref.type,
      word = _ref.word;

  switch (type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_WORD"]:
      return word;

    default:
      return state;
  }
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fetchWordReducer, "fetchWordReducer", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/fetchWord/reducers.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/state/fetchWord/sagas.ts":
/*!**************************************!*\
  !*** ./src/state/fetchWord/sagas.ts ***!
  \**************************************/
/*! exports provided: fetchWord, watchWordFetching */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWord", function() { return fetchWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchWordFetching", function() { return watchWordFetching; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/state/fetchWord/actions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/state/fetchWord/types.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(fetchWord),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(watchWordFetching);

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





function fetchWord(action) {
  var id, response, word;
  return regeneratorRuntime.wrap(function fetchWord$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = action.id;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(function () {
            return fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__["FETCH_WORD_URL"], "/").concat(id));
          });

        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();

        case 6:
          word = _context.sent;
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["fetchWordAction"])(word));

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
function watchWordFetching() {
  return regeneratorRuntime.wrap(function watchWordFetching$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_3__["START_WORD_FETCHING"], fetchWord);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fetchWord, "fetchWord", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/fetchWord/sagas.ts");
  reactHotLoader.register(watchWordFetching, "watchWordFetching", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/fetchWord/sagas.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/state/fetchWord/types.ts":
/*!**************************************!*\
  !*** ./src/state/fetchWord/types.ts ***!
  \**************************************/
/*! exports provided: FETCH_WORD, START_WORD_FETCHING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_WORD", function() { return FETCH_WORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_WORD_FETCHING", function() { return START_WORD_FETCHING; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var FETCH_WORD = 'FETCH_WORD';
var START_WORD_FETCHING = 'START_WORD_FETCHING';
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FETCH_WORD, "FETCH_WORD", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/fetchWord/types.ts");
  reactHotLoader.register(START_WORD_FETCHING, "START_WORD_FETCHING", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/fetchWord/types.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/state/fetchWordsList/actions.ts":
/*!*********************************************!*\
  !*** ./src/state/fetchWordsList/actions.ts ***!
  \*********************************************/
/*! exports provided: fetchWordsListAction, fireFetchWordsListAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWordsListAction", function() { return fetchWordsListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fireFetchWordsListAction", function() { return fireFetchWordsListAction; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/state/fetchWordsList/types.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var fetchWordsListAction = function fetchWordsListAction(words) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_WORDS_LIST"],
    words: words
  };
};
var fireFetchWordsListAction = function fireFetchWordsListAction() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FIRE_FETCH_WORDS_LIST"]
  };
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fetchWordsListAction, "fetchWordsListAction", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/fetchWordsList/actions.ts");
  reactHotLoader.register(fireFetchWordsListAction, "fireFetchWordsListAction", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/fetchWordsList/actions.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/state/fetchWordsList/index.ts":
/*!*******************************************!*\
  !*** ./src/state/fetchWordsList/index.ts ***!
  \*******************************************/
/*! exports provided: watchWordsListFetching, fetchWordsListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/state/fetchWordsList/reducers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchWordsListReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["fetchWordsListReducer"]; });

/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sagas */ "./src/state/fetchWordsList/sagas.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchWordsListFetching", function() { return _sagas__WEBPACK_IMPORTED_MODULE_1__["watchWordsListFetching"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





/***/ }),

/***/ "./src/state/fetchWordsList/reducers.ts":
/*!**********************************************!*\
  !*** ./src/state/fetchWordsList/reducers.ts ***!
  \**********************************************/
/*! exports provided: fetchWordsListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWordsListReducer", function() { return fetchWordsListReducer; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/state/fetchWordsList/types.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var INITIAL_STATE = []; // TODO: what reducer return

var fetchWordsListReducer = function fetchWordsListReducer(state, _ref) {
  var type = _ref.type,
      words = _ref.words;

  switch (type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_WORDS_LIST"]:
      return [].concat(INITIAL_STATE, _toConsumableArray(words));

    default:
      return state;
  }
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(INITIAL_STATE, "INITIAL_STATE", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/fetchWordsList/reducers.ts");
  reactHotLoader.register(fetchWordsListReducer, "fetchWordsListReducer", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/fetchWordsList/reducers.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/state/fetchWordsList/sagas.ts":
/*!*******************************************!*\
  !*** ./src/state/fetchWordsList/sagas.ts ***!
  \*******************************************/
/*! exports provided: fetchWordsList, watchWordsListFetching */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWordsList", function() { return fetchWordsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchWordsListFetching", function() { return watchWordsListFetching; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/state/fetchWordsList/actions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/state/fetchWordsList/types.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(fetchWordsList),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(watchWordsListFetching);

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





function fetchWordsList() {
  var response, words;
  return regeneratorRuntime.wrap(function fetchWordsList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(function () {
            return fetch(_constants__WEBPACK_IMPORTED_MODULE_1__["FETCH_WORDS_LIST_URL"]);
          });

        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.json();

        case 5:
          words = _context.sent;
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["fetchWordsListAction"])(words));

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
function watchWordsListFetching() {
  return regeneratorRuntime.wrap(function watchWordsListFetching$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_3__["FIRE_FETCH_WORDS_LIST"], fetchWordsList);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fetchWordsList, "fetchWordsList", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/fetchWordsList/sagas.ts");
  reactHotLoader.register(watchWordsListFetching, "watchWordsListFetching", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/fetchWordsList/sagas.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/state/fetchWordsList/types.ts":
/*!*******************************************!*\
  !*** ./src/state/fetchWordsList/types.ts ***!
  \*******************************************/
/*! exports provided: FETCH_WORDS_LIST, FIRE_FETCH_WORDS_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_WORDS_LIST", function() { return FETCH_WORDS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRE_FETCH_WORDS_LIST", function() { return FIRE_FETCH_WORDS_LIST; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var FETCH_WORDS_LIST = 'FETCH_WORDS_LIST';
var FIRE_FETCH_WORDS_LIST = 'FIRE_FETCH_WORDS_LIST';
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FETCH_WORDS_LIST, "FETCH_WORDS_LIST", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/fetchWordsList/types.ts");
  reactHotLoader.register(FIRE_FETCH_WORDS_LIST, "FIRE_FETCH_WORDS_LIST", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/fetchWordsList/types.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/state/fetchWordsList/useFetchWordsList.ts":
/*!*******************************************************!*\
  !*** ./src/state/fetchWordsList/useFetchWordsList.ts ***!
  \*******************************************************/
/*! exports provided: useFetchWordsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchWordsList", function() { return useFetchWordsList; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/state/fetchWordsList/actions.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var useFetchWordsList = function useFetchWordsList() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  var words = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (state) {
    return state.words;
  });

  var fetchWordsList = function fetchWordsList() {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["fireFetchWordsListAction"])());
  };

  return {
    fetchWordsList: fetchWordsList,
    words: words
  };
};

__signature__(useFetchWordsList, "useDispatch{dispatch}\nuseSelector{words: Array<IWord>}", function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"]];
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useFetchWordsList, "useFetchWordsList", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/fetchWordsList/useFetchWordsList.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/state/initialState.ts":
/*!***********************************!*\
  !*** ./src/state/initialState.ts ***!
  \***********************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var initialState = {
  words: [],
  word: ''
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/initialState.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/state/rootReducers.ts":
/*!***********************************!*\
  !*** ./src/state/rootReducers.ts ***!
  \***********************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var state_initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! state/initialState */ "./src/state/initialState.ts");
/* harmony import */ var _fetchWordsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchWordsList */ "./src/state/fetchWordsList/index.ts");
/* harmony import */ var _fetchWord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchWord */ "./src/state/fetchWord/index.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : state_initialState__WEBPACK_IMPORTED_MODULE_0__["initialState"];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return {
    words: Object(_fetchWordsList__WEBPACK_IMPORTED_MODULE_1__["fetchWordsListReducer"])(state.words, action),
    word: Object(_fetchWord__WEBPACK_IMPORTED_MODULE_2__["fetchWordReducer"])(state.word, action)
  };
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(rootReducer, "rootReducer", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/rootReducers.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/state/rootSaga.ts":
/*!*******************************!*\
  !*** ./src/state/rootSaga.ts ***!
  \*******************************/
/*! exports provided: rootSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootSaga", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _fetchWordsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchWordsList */ "./src/state/fetchWordsList/index.ts");
/* harmony import */ var _addNewWord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addNewWord */ "./src/state/addNewWord/index.ts");
/* harmony import */ var _fetchWord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchWord */ "./src/state/fetchWord/index.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(rootSaga);

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_fetchWordsList__WEBPACK_IMPORTED_MODULE_1__["watchWordsListFetching"])(), Object(_addNewWord__WEBPACK_IMPORTED_MODULE_2__["watchAddingNewWords"])(), Object(_fetchWord__WEBPACK_IMPORTED_MODULE_3__["watchWordFetching"])()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(rootSaga, "rootSaga", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/rootSaga.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/state/store.ts":
/*!****************************!*\
  !*** ./src/state/store.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _rootReducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rootReducers */ "./src/state/rootReducers.ts");
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initialState */ "./src/state/initialState.ts");
/* harmony import */ var _rootSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rootSaga */ "./src/state/rootSaga.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_0__["default"])();
var composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_1__["compose"];
var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_rootReducers__WEBPACK_IMPORTED_MODULE_2__["rootReducer"], _initialState__WEBPACK_IMPORTED_MODULE_3__["initialState"], composeEnhancer(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(sagaMiddleware)));
sagaMiddleware.run(_rootSaga__WEBPACK_IMPORTED_MODULE_4__["rootSaga"]);
var _default = store;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(sagaMiddleware, "sagaMiddleware", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/store.ts");
  reactHotLoader.register(composeEnhancer, "composeEnhancer", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/store.ts");
  reactHotLoader.register(store, "store", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/store.ts");
  reactHotLoader.register(_default, "default", "/Users/yuriidmytriev/WebstormProjects/english-client/src/state/store.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/styles.js":
/*!***********************!*\
  !*** ./src/styles.js ***!
  \***********************/
/*! exports provided: Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants_spacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/spacing */ "./src/constants/spacing.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var Content = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Content",
  componentId: "wqf4qh-0"
})(["padding:", ";"], _constants_spacing__WEBPACK_IMPORTED_MODULE_1__["spacing"].base);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Content, "Content", "/Users/yuriidmytriev/WebstormProjects/english-client/src/styles.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/wordsApiFetch.ts":
/*!************************************!*\
  !*** ./src/utils/wordsApiFetch.ts ***!
  \************************************/
/*! exports provided: fetchWordFromRapid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWordFromRapid", function() { return fetchWordFromRapid; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var fetchWordFromRapid =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(type, word) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://wordsapiv1.p.rapidapi.com/words/".concat(word, "/").concat(type), {
              headers: {
                'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
                'X-RapidAPI-Key': '5d28b8ff71mshd8c7cd3990fc3c8p1f6ddbjsnad4a5cb879c7'
              }
            });

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response.json());

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchWordFromRapid(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fetchWordFromRapid, "fetchWordFromRapid", "/Users/yuriidmytriev/WebstormProjects/english-client/src/utils/wordsApiFetch.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 0:
/*!*******************************************************************!*\
  !*** multi react-hot-loader/patch babel-polyfill ./src/index.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! react-hot-loader/patch */"./node_modules/react-hot-loader/patch.js");
__webpack_require__(/*! babel-polyfill */"./node_modules/babel-polyfill/lib/index.js");
module.exports = __webpack_require__(/*! /Users/yuriidmytriev/WebstormProjects/english-client/src/index.tsx */"./src/index.tsx");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWRkV29yZC9BZGRXb3JkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BZGRXb3JkL0ZpbGVJbnB1dC9GaWxlSW5wdXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FkZFdvcmQvRmlsZUlucHV0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FkZFdvcmQvRmlsZUlucHV0L3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BZGRXb3JkL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BZGRXb3JkL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BZGRXb3JkL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hpZ2hsaWdodGVkUGhyYXNlL0hpZ2hsaWdodGVkUGhyYXNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaWdobGlnaHRlZFBocmFzZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IaWdobGlnaHRlZFBocmFzZS9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N1Z2dlc3Rpb24vU3VnZ2VzdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3VnZ2VzdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdWdnZXN0aW9uL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WaWRlby9WaWRlby50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVmlkZW8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVmlkZW8vc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dvcmQvV29yZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV29yZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Xb3JkL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL2NvbG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvc3BhY2luZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL3VybC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL3VzZVRvZ2dsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Xb3JkL1dvcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Xb3JkL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Xb3JkL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvV29yZHMvV29yZHMudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Xb3Jkcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvV29yZHMvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS9hZGROZXdXb3JkL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL2FkZE5ld1dvcmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL2FkZE5ld1dvcmQvc2FnYXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL2FkZE5ld1dvcmQvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL2FkZE5ld1dvcmQvdXNlQWRkTmV3V29yZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvZmV0Y2hXb3JkL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL2ZldGNoV29yZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvZmV0Y2hXb3JkL3JlZHVjZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS9mZXRjaFdvcmQvc2FnYXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL2ZldGNoV29yZC90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvZmV0Y2hXb3Jkc0xpc3QvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvZmV0Y2hXb3Jkc0xpc3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL2ZldGNoV29yZHNMaXN0L3JlZHVjZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS9mZXRjaFdvcmRzTGlzdC9zYWdhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvZmV0Y2hXb3Jkc0xpc3QvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL2ZldGNoV29yZHNMaXN0L3VzZUZldGNoV29yZHNMaXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS9pbml0aWFsU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL3Jvb3RSZWR1Y2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvcm9vdFNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL3N0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy93b3Jkc0FwaUZldGNoLnRzIl0sIm5hbWVzIjpbIkFwcCIsInN0b3JlIiwiaW5wdXRzIiwibmFtZSIsInR5cGUiLCJGb3JtSXRlbSIsInByb3BzIiwiVGV4dEFyZWEiLCJJbnB1dCIsImZvcm1JdGVtc1R5cGUiLCJpbnB1dCIsInRleHRhcmVhIiwiZnJvbUNvbmZpZyIsImNsb3NlQWRkV29yZE1vZGFsIiwiaW5pdGlhbFZhbHVlcyIsIndvcmQiLCJ0cmFuc2xhdGUiLCJkZWZpbml0aW9uIiwiY29udGV4dCIsImV4YW1wbGUiLCJzeW5vbnltIiwiYW50b255bSIsImltYWdlU3JjIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJmb3JtRGF0YUJvZHkiLCJjcmVhdGVGb3JtRGF0YUJvZHkiLCJmZXRjaCIsIkZFVENIX1dPUkRTX0xJU1RfVVJMIiwibWV0aG9kIiwiYm9keSIsIm9rIiwic3RhdHVzVGV4dCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZXJyb3IiLCJBZGRXb3JkIiwidXNlVG9nZ2xlIiwidmlzaWJsZSIsIm9wZW5BZGRXb3JkTW9kYWwiLCJ1c2VGb3JtaWsiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJzZXRGaWVsZFZhbHVlIiwibWFwIiwiRmlsZUlucHV0Iiwic2V0RmlsZU5hbWVUb0Zvcm1WYWx1ZXMiLCJpbnB1dERhdGEiLCJ0YXJnZXQiLCJmaWxlcyIsImZpbGUiLCJzdHlsZWQiLCJncmV5IiwiY29sb3JzIiwiQ29udGFpbmVyIiwiZGl2IiwiUGx1cyIsInNwYW4iLCJJbnB1dFdyYXBwZXIiLCJCdXR0b25XcmFwcGVyIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwidmFsdWUiLCJhcHBlbmQiLCJIaWdobGlnaHRlZFBocmFzZSIsInBocmFzZSIsIl9faHRtbCIsInJlcGxhY2UiLCJOYXZpZ2F0aW9uIiwiTmF2aWdhdGlvbkNvbnRhaW5lciIsIkNoZWNrYWJsZVRhZyIsIlRhZyIsIlN1Z2dlc3Rpb25zTGlzdCIsIndvcmRzIiwiaXNFbXB0eSIsIlN1Z2dlc3Rpb24iLCJ0aXRsZSIsIm9yaWdpbmFsV29yZCIsInVzZVN0YXRlIiwic3lub255bXMiLCJzZXRXb3JkIiwiaGFuZGxlQ2xpY2siLCJmZXRjaFdvcmRGcm9tUmFwaWQiLCJwbHVyYWxpemUiLCJkYXRhIiwiTW9yZVN5bm9ueW1zQnV0dG9uIiwiQnV0dG9uIiwiV29yZFRpdGxlIiwiVmlkZW8iLCJ2aWRlb3MiLCJzZXRWaWRlb3MiLCJ2aWRlb0lkIiwic2V0VmlkZW9JZCIsInVzZUVmZmVjdCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJ2aWRlb0xpc3QiLCJwaHJhc2VzIiwiZ2V0IiwiaXNQcmV2aW91c1ZpZGVvRXhpc3RzIiwiaXNOZXh0VmlkZW9FeGlzdHMiLCJsZW5ndGgiLCJoYW5kbGVQcmV2aW91c1ZpZGVvIiwiaGFuZGxlTmV4dFZpZGVvIiwidGV4dCIsIlZpZGVvQ29udGFpbmVyIiwiVmlkZW9XcmFwcGVyIiwiQXJyb3ciLCJJY29uIiwiZGlzYWJsZWQiLCJ2aWRlbyIsIk1ldGEiLCJDYXJkIiwiV29yZCIsImlkIiwidXNlRmV0Y2hXb3Jkc0xpc3QiLCJmZXRjaFdvcmRzTGlzdCIsImRlbGV0ZVdvcmRDYXJkIiwid2FzV29yZERlbGV0ZWRTdWNjZXNzZnVsbHkiLCJleHBsYW5hdGlvbiIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiU0VSVkVSX1VSTCIsIkNhcmRCb2R5IiwiQ2FyZEltYWdlIiwiaW1nIiwiRU5WX1NFUlZFUl9VUkwiLCJGRVRDSF9XT1JEX1VSTCIsInNwYWNpbmciLCJiYXNlIiwidG9nZ2xlVmlzaWJsZSIsIkhvdExvYWRlckFwcCIsImhvdCIsIkVudHJ5UG9pbnQiLCJOT0RFX0VOViIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNoZWNrRnJlcXVlbmN5IiwiZnJlcXVlbmN5IiwibnVtYmVyIiwiTWF0aCIsImNlaWwiLCJpcyIsImNvbG9yIiwidXNlUGFyYW1zIiwiZmV0Y2hlZFdvcmQiLCJ3b3JkRnJlcXVlbmN5Iiwic2V0V29yZEZyZXF1ZW5jeSIsInppcGYiLCJXb3JkV3JhcHBlciIsIkltYWdlIiwiV29yZFByb3BlcnR5IiwiV29yZFBhZ2UiLCJDb2xvciIsIldvcmRzIiwicmVuZGVyV29yZHMiLCJXb3JkQ29udGFpbmVyIiwiUm93IiwiUm91dGVyIiwiYWRkTmV3V29yZEFjdGlvbiIsIkFERF9ORVdfV09SRCIsImFkZE5ld1dvcmQiLCJ3YXRjaEFkZGluZ05ld1dvcmRzIiwiY29uc29sZSIsImxvZyIsInRha2VFdmVyeSIsInVzZUFkZE5ld1dvcmQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiZmV0Y2hXb3JkQWN0aW9uIiwiRkVUQ0hfV09SRCIsImZldGNoV29yZEJ5SWRBY3Rpb24iLCJTVEFSVF9XT1JEX0ZFVENISU5HIiwiZmV0Y2hXb3JkUmVkdWNlciIsInN0YXRlIiwiZmV0Y2hXb3JkIiwid2F0Y2hXb3JkRmV0Y2hpbmciLCJhY3Rpb24iLCJjYWxsIiwicHV0IiwiZmV0Y2hXb3Jkc0xpc3RBY3Rpb24iLCJGRVRDSF9XT1JEU19MSVNUIiwiZmlyZUZldGNoV29yZHNMaXN0QWN0aW9uIiwiRklSRV9GRVRDSF9XT1JEU19MSVNUIiwiSU5JVElBTF9TVEFURSIsImZldGNoV29yZHNMaXN0UmVkdWNlciIsIndhdGNoV29yZHNMaXN0RmV0Y2hpbmciLCJ1c2VTZWxlY3RvciIsImluaXRpYWxTdGF0ZSIsInJvb3RSZWR1Y2VyIiwicm9vdFNhZ2EiLCJhbGwiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwiY29tcG9zZUVuaGFuY2VyIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIiwiY29tcG9zZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwicnVuIiwiQ29udGVudCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFVBQVUsR0FBRztBQUNwQztBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU07QUFBQSxTQUNWLDJEQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFQyxtREFBS0E7QUFBdEIsS0FDRSwyREFBQywrQ0FBRCxRQUNFLDJEQUFDLDZDQUFELE9BREYsQ0FERixDQURVO0FBQUEsQ0FBWjs7ZUFRZUQsRztBQUFBOzs7Ozs7Ozs7OzBCQVJUQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05OO0FBQ0E7QUFF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QWI7Ozs7Ozs7Ozs7MEJBQU0wRSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKTixJQUFNM0gsa0JBQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBRyxpQkFDaENqRixJQURnQyxFQUVoQ1csSUFGZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFJVFksS0FBSyxtREFDaUJaLElBRGpCLGNBQ3lCWCxJQUR6QixHQUUxQjtBQUNFd0gscUJBQU8sRUFBRTtBQUNQLG1DQUFtQiwyQkFEWjtBQUVQLGtDQUFrQjtBQUZYO0FBRFgsYUFGMEIsQ0FKSTs7QUFBQTtBQUkxQjFCLG9CQUowQjtBQUFBLDZDQWN6QkEsUUFBUSxDQUFDQyxJQUFULEVBZHlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWxCZCxrQkFBa0I7QUFBQTtBQUFBO0FBQUEsR0FBeEI7Ozs7Ozs7Ozs7MEJBQU1BLGtCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50ZXN0IHtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLVNHXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tU0cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdyb3V0ZXInO1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N0YXRlL3N0b3JlJztcbmltcG9ydCB7IENvbnRlbnQgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPENvbnRlbnQ+XG4gICAgICA8Um91dGVyIC8+XG4gICAgPC9Db250ZW50PlxuICA8L1Byb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCB7IElXb3JkIH0gZnJvbSAnY29tcG9uZW50cy9Xb3JkL0lXb3JkJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSWNvbiwgSW5wdXQsIE1vZGFsLCBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyB1c2VUb2dnbGUgfSBmcm9tICdob29rcyc7XG5pbXBvcnQgeyBjcmVhdGVGb3JtRGF0YUJvZHkgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IEZFVENIX1dPUkRTX0xJU1RfVVJMIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IElXb3JkSW5wdXQgfSBmcm9tICcuL0lXb3JkSW5wdXQnO1xuaW1wb3J0IHsgRmlsZUlucHV0IH0gZnJvbSAnLi9GaWxlSW5wdXQnO1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IGlucHV0czogQXJyYXk8SVdvcmRJbnB1dD4gPSBbXG4gIHsgbmFtZTogJ3dvcmQnLCB0eXBlOiAnaW5wdXQnIH0sXG4gIHsgbmFtZTogJ3RyYW5zbGF0ZScsIHR5cGU6ICdpbnB1dCcgfSxcbiAgeyBuYW1lOiAnZGVmaW5pdGlvbicsIHR5cGU6ICd0ZXh0YXJlYScgfSxcbiAgeyBuYW1lOiAnY29udGV4dCcsIHR5cGU6ICd0ZXh0YXJlYScgfSxcbiAgeyBuYW1lOiAnZXhhbXBsZScsIHR5cGU6ICd0ZXh0YXJlYScgfSxcbiAgeyBuYW1lOiAnc3lub255bScsIHR5cGU6ICdpbnB1dCcgfSxcbiAgeyBuYW1lOiAnYW50b255bScsIHR5cGU6ICdpbnB1dCcgfSxcbl07XG5cbmNvbnN0IEZvcm1JdGVtID0gKHsgdHlwZSwgLi4ucHJvcHMgfTogeyB0eXBlOiAnaW5wdXQnIHwgJ3RleHRhcmVhJyB9KSA9PiB7XG4gIGNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xuXG4gIGNvbnN0IGZvcm1JdGVtc1R5cGUgPSB7XG4gICAgaW5wdXQ6IDxJbnB1dCB7Li4ucHJvcHN9IC8+LFxuICAgIHRleHRhcmVhOiA8VGV4dEFyZWEgey4uLnByb3BzfSAvPixcbiAgfTtcblxuICByZXR1cm4gZm9ybUl0ZW1zVHlwZVt0eXBlXSB8fCA8SW5wdXQgey4uLnByb3BzfSAvPjtcbn07XG5cbmNvbnN0IGZyb21Db25maWcgPSBjbG9zZUFkZFdvcmRNb2RhbCA9PiAoe1xuICBpbml0aWFsVmFsdWVzOiB7XG4gICAgd29yZDogJycsXG4gICAgdHJhbnNsYXRlOiAnJyxcbiAgICBkZWZpbml0aW9uOiAnJyxcbiAgICBjb250ZXh0OiAnJyxcbiAgICBleGFtcGxlOiAnJyxcbiAgICBzeW5vbnltOiAnJyxcbiAgICBhbnRvbnltOiAnJyxcbiAgICBpbWFnZVNyYzogJycsXG4gIH0sXG4gIG9uU3VibWl0OiBhc3luYyAodmFsdWVzOiBJV29yZCkgPT4ge1xuICAgIGNvbnN0IGZvcm1EYXRhQm9keTogRm9ybURhdGEgPSBjcmVhdGVGb3JtRGF0YUJvZHkodmFsdWVzKTtcblxuICAgIGNvbnN0IHsgb2ssIHN0YXR1c1RleHQgfSA9IGF3YWl0IGZldGNoKEZFVENIX1dPUkRTX0xJU1RfVVJMLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IGZvcm1EYXRhQm9keSxcbiAgICB9KTtcblxuICAgIGlmIChvaykge1xuICAgICAgbWVzc2FnZS5zdWNjZXNzKHN0YXR1c1RleHQpO1xuICAgICAgY2xvc2VBZGRXb3JkTW9kYWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5lcnJvcihzdGF0dXNUZXh0KTtcbiAgICB9XG4gIH0sXG59KTtcblxuY29uc3QgQWRkV29yZDogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdmlzaWJsZSwgb3BlbkFkZFdvcmRNb2RhbCwgY2xvc2VBZGRXb3JkTW9kYWwgfSA9IHVzZVRvZ2dsZSgpO1xuXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCBoYW5kbGVDaGFuZ2UsIHNldEZpZWxkVmFsdWUgfSA9IHVzZUZvcm1payhcbiAgICBmcm9tQ29uZmlnKGNsb3NlQWRkV29yZE1vZGFsKSxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Uy5Db250YWluZXIgb25DbGljaz17b3BlbkFkZFdvcmRNb2RhbH0+XG4gICAgICAgIDxTLlBsdXM+XG4gICAgICAgICAgPEljb24gdHlwZT1cInBsdXNcIiAvPlxuICAgICAgICA8L1MuUGx1cz5cbiAgICAgICAgPHNwYW4+QWRkIG5ldyB3b3JkPC9zcGFuPlxuICAgICAgPC9TLkNvbnRhaW5lcj5cbiAgICAgIDxNb2RhbFxuICAgICAgICB0aXRsZT1cIkFkZCBuZXcgd29yZFwiXG4gICAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgb25DYW5jZWw9e2Nsb3NlQWRkV29yZE1vZGFsfVxuICAgICAgPlxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICB7aW5wdXRzLm1hcCgoeyBuYW1lLCB0eXBlIH06IElXb3JkSW5wdXQpID0+IChcbiAgICAgICAgICAgIDxTLklucHV0V3JhcHBlciBrZXk9e25hbWV9PlxuICAgICAgICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e25hbWV9XG4gICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtuYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1MuSW5wdXRXcmFwcGVyPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxGaWxlSW5wdXQgc2V0RmllbGRWYWx1ZT17c2V0RmllbGRWYWx1ZX0gLz5cbiAgICAgICAgICA8Uy5CdXR0b25XcmFwcGVyPlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgIEFkZCB3b3JkXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L1MuQnV0dG9uV3JhcHBlcj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IEFkZFdvcmQgfTtcbiIsImltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcyc7XG5cbmludGVyZmFjZSBJRmlsZUlucHV0IHtcbiAgc2V0RmllbGRWYWx1ZTogKGZpZWxkOiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEZpbGVJbnB1dDogUmVhY3QuRkM8SUZpbGVJbnB1dD4gPSAoeyBzZXRGaWVsZFZhbHVlIH0pID0+IHtcbiAgY29uc3Qgc2V0RmlsZU5hbWVUb0Zvcm1WYWx1ZXMgPSAoXG4gICAgaW5wdXREYXRhOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PixcbiAgKTogdm9pZCA9PiB7XG4gICAgaWYgKGlucHV0RGF0YS50YXJnZXQ/LmZpbGVzKSB7XG4gICAgICBjb25zdCBbZmlsZV0gPSBpbnB1dERhdGEudGFyZ2V0LmZpbGVzO1xuICAgICAgc2V0RmllbGRWYWx1ZSgnaW1hZ2VTcmMnLCBmaWxlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFMuSW5wdXRcbiAgICAgICAgaWQ9XCJpbWFnZVNyY1wiXG4gICAgICAgIG5hbWU9XCJpbWFnZVNyY1wiXG4gICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgb25DaGFuZ2U9e3NldEZpbGVOYW1lVG9Gb3JtVmFsdWVzfVxuICAgICAgLz5cbiAgICAgIHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvbGFiZWwtaGFzLWFzc29jaWF0ZWQtY29udHJvbCAqL31cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VTcmNcIj5Eb3dubG9hZDwvbGFiZWw+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgeyBGaWxlSW5wdXQgfTtcbiIsImltcG9ydCB7IEZpbGVJbnB1dCB9IGZyb20gJy4vRmlsZUlucHV0JztcblxuZXhwb3J0IHsgRmlsZUlucHV0IH07XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICAmIHtcbiAgICBib3JkZXI6IDA7XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB3aWR0aDogMXB4O1xuICB9XG5cbiAgJiArIGxhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcbiAgICBib3gtc2hhZG93OiAwIDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wMTUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG5gO1xuIiwiaW1wb3J0IHsgQWRkV29yZCB9IGZyb20gJy4vQWRkV29yZCc7XG5cbmV4cG9ydCB7IEFkZFdvcmQgfTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICdjb25zdGFudHMvY29sb3JzJztcblxuY29uc3QgeyBncmV5IH0gPSBjb2xvcnM7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDFweCBkYXNoZWQgJHtncmV5fTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgUGx1cyA9IHN0eWxlZC5zcGFuYFxuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogJHtncmV5fTtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuYDtcbiIsImltcG9ydCB7IElXb3JkIH0gZnJvbSAnY29tcG9uZW50cy9Xb3JkL0lXb3JkJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUZvcm1EYXRhQm9keSA9ICh2YWx1ZXM6IElXb3JkKTogRm9ybURhdGEgPT4ge1xuICBjb25zdCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICBPYmplY3QuZW50cmllcyh2YWx1ZXMpLmZvckVhY2goKFtuYW1lLCB2YWx1ZV0pID0+IHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZm9ybURhdGE7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZXMnO1xuXG5leHBvcnQgY29uc3QgSGlnaGxpZ2h0ZWRQaHJhc2UgPSAoeyBwaHJhc2UsIHdvcmQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTLkhpZ2hsaWdodGVkUGhyYXNlXG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICBfX2h0bWw6IHBocmFzZS5yZXBsYWNlKHdvcmQsIGA8c3Bhbj4ke3dvcmR9PC9zcGFuPmApLFxuICAgICAgfX1cbiAgICAvPlxuICApO1xufTtcbiIsImltcG9ydCB7IEhpZ2hsaWdodGVkUGhyYXNlIH0gZnJvbSAnLi9IaWdobGlnaHRlZFBocmFzZSc7XG5cbmV4cG9ydCB7IEhpZ2hsaWdodGVkUGhyYXNlIH07XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEhpZ2hsaWdodGVkUGhyYXNlID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAmIHNwYW4ge1xuICAgIGJhY2tncm91bmQ6ICNlZGZmMDA7XG4gICAgcGFkZGluZzogMnB4IDVweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJztcblxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb246IEZDID0gKCkgPT4gKFxuICA8Uy5OYXZpZ2F0aW9uQ29udGFpbmVyPlxuICAgIDxMaW5rIHRvPVwiL3dvcmRzXCI+XG4gICAgICA8c3Ryb25nPlZpZXcgd29yZHM8L3N0cm9uZz5cbiAgICA8L0xpbms+XG4gIDwvUy5OYXZpZ2F0aW9uQ29udGFpbmVyPlxuKTtcbiIsImltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICcuL05hdmlnYXRpb24nO1xuXG5leHBvcnQgeyBOYXZpZ2F0aW9uIH07XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDExcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbmA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5pbXBvcnQgeyBUYWcgfSBmcm9tICdhbnRkJztcbmltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJztcbmltcG9ydCB7IGZldGNoV29yZEZyb21SYXBpZCB9IGZyb20gJ3V0aWxzL3dvcmRzQXBpRmV0Y2gnO1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IHsgQ2hlY2thYmxlVGFnIH0gPSBUYWc7XG5cbmNvbnN0IFN1Z2dlc3Rpb25zTGlzdDogUmVhY3QuRkM8eyB3b3JkczogQXJyYXk8c3RyaW5nPiB9PiA9ICh7IHdvcmRzIH0pOiBhbnkgPT5cbiAgIWlzRW1wdHkod29yZHMpICYmIChcbiAgICA8ZGl2PlxuICAgICAge3dvcmRzLm1hcCh3b3JkID0+IChcbiAgICAgICAgPENoZWNrYWJsZVRhZyBjaGVja2VkIGtleT17d29yZH0+XG4gICAgICAgICAge3dvcmR9XG4gICAgICAgIDwvQ2hlY2thYmxlVGFnPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG5cbmV4cG9ydCBjb25zdCBTdWdnZXN0aW9uOiBSZWFjdC5GQzx7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHdvcmQ6IHN0cmluZztcbiAgb3JpZ2luYWxXb3JkOiBzdHJpbmc7XG59PiA9ICh7IHRpdGxlLCB3b3JkLCBvcmlnaW5hbFdvcmQgfSkgPT4ge1xuICBjb25zdCBbc3lub255bXMsIHNldFdvcmRdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFdvcmRGcm9tUmFwaWQoXG4gICAgICBwbHVyYWxpemUodGl0bGUpLFxuICAgICAgd29yZCB8fCBvcmlnaW5hbFdvcmQsXG4gICAgKTtcblxuICAgIHNldFdvcmQoZGF0YVtwbHVyYWxpemUodGl0bGUpXSk7XG4gIH07XG5cbiAgcmV0dXJuIHdvcmQgPyAoXG4gICAgPGRpdj5cbiAgICAgIDxTLldvcmRUaXRsZT5Xb3JkOiA8L1MuV29yZFRpdGxlPlxuICAgICAgPHNwYW4+e3dvcmR9PC9zcGFuPlxuICAgICAgPFMuTW9yZVN5bm9ueW1zQnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT1cInNtYWxsXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICBTZWUgbW9yZVxuICAgICAgPC9TLk1vcmVTeW5vbnltc0J1dHRvbj5cbiAgICAgIDxTdWdnZXN0aW9uc0xpc3Qgd29yZHM9e3N5bm9ueW1zfSAvPlxuICAgIDwvZGl2PlxuICApIDogbnVsbDtcbn07XG4iLCJpbXBvcnQgeyBTdWdnZXN0aW9uIH0gZnJvbSAnLi9TdWdnZXN0aW9uJztcblxuZXhwb3J0IHsgU3VnZ2VzdGlvbiB9O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGNvbnN0IE1vcmVTeW5vbnltc0J1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICBtYXJnaW46IDEwcHggMDtcbiAgZGlzcGxheTogYmxvY2s7XG5gO1xuXG5leHBvcnQgY29uc3QgV29yZFRpdGxlID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCc7XG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5pbXBvcnQgeyBIaWdobGlnaHRlZFBocmFzZSB9IGZyb20gJ2NvbXBvbmVudHMvSGlnaGxpZ2h0ZWRQaHJhc2UnO1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCBWaWRlbzogRkM8eyB3b3JkOiBzdHJpbmcgfT4gPSAoeyB3b3JkIH0pID0+IHtcbiAgY29uc3QgW3ZpZGVvcywgc2V0VmlkZW9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3ZpZGVvSWQsIHNldFZpZGVvSWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChgaHR0cHM6Ly93d3cucGxheXBocmFzZS5tZS9hcGkvdjEvcGhyYXNlcy9zZWFyY2g/cT0ke3dvcmR9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHZpZGVvTGlzdCA9PiBzZXRWaWRlb3ModmlkZW9MaXN0KSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBwaHJhc2VzID0gZ2V0KHZpZGVvcywgJ3BocmFzZXMnLCBbXSk7XG5cbiAgY29uc3QgaXNQcmV2aW91c1ZpZGVvRXhpc3RzID0gdmlkZW9JZCA+IDA7XG4gIGNvbnN0IGlzTmV4dFZpZGVvRXhpc3RzID0gdmlkZW9JZCA8IHBocmFzZXMubGVuZ3RoIC0gMTtcblxuICBjb25zdCBoYW5kbGVQcmV2aW91c1ZpZGVvID0gKCkgPT4ge1xuICAgIGlmIChpc1ByZXZpb3VzVmlkZW9FeGlzdHMpIHtcbiAgICAgIHNldFZpZGVvSWQodmlkZW9JZCAtIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVOZXh0VmlkZW8gPSAoKSA9PiB7XG4gICAgaWYgKGlzTmV4dFZpZGVvRXhpc3RzKSB7XG4gICAgICBzZXRWaWRlb0lkKHZpZGVvSWQgKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuICFpc0VtcHR5KHBocmFzZXMpID8gKFxuICAgIDw+XG4gICAgICA8Uy5WaWRlb1dyYXBwZXI+XG4gICAgICAgIDxTLkFycm93XG4gICAgICAgICAgZGlzYWJsZWQ9eyFpc1ByZXZpb3VzVmlkZW9FeGlzdHN9XG4gICAgICAgICAgdHlwZT1cImxlZnRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzVmlkZW99XG4gICAgICAgIC8+XG5cbiAgICAgICAgPFMuVmlkZW9Db250YWluZXI+XG4gICAgICAgICAgPFMuVmlkZW8gc3JjPXtwaHJhc2VzW3ZpZGVvSWRdWyd2aWRlby11cmwnXX0gY29udHJvbHMgLz5cbiAgICAgICAgPC9TLlZpZGVvQ29udGFpbmVyPlxuXG4gICAgICAgIDxTLkFycm93XG4gICAgICAgICAgZGlzYWJsZWQ9eyFpc05leHRWaWRlb0V4aXN0c31cbiAgICAgICAgICB0eXBlPVwicmlnaHRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHRWaWRlb31cbiAgICAgICAgLz5cbiAgICAgIDwvUy5WaWRlb1dyYXBwZXI+XG4gICAgICA8SGlnaGxpZ2h0ZWRQaHJhc2UgcGhyYXNlPXtwaHJhc2VzW3ZpZGVvSWRdLnRleHR9IHdvcmQ9e3dvcmR9IC8+XG4gICAgPC8+XG4gICkgOiBudWxsO1xufTtcbiIsImltcG9ydCB7IFZpZGVvIH0gZnJvbSAnLi9WaWRlbyc7XG5cbmV4cG9ydCB7IFZpZGVvIH07XG4iLCJpbXBvcnQgeyBJY29uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IFZpZGVvQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuYDtcblxuZXhwb3J0IGNvbnN0IFZpZGVvV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBBcnJvdyA9IHN0eWxlZChJY29uKWBcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZWQgPyAnI2Q2ZDZkNicgOiAnZ3JleScpfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBWaWRlbyA9IHN0eWxlZC52aWRlb2BcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5gO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uLCBNb2RhbCwgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgeyBTRVJWRVJfVVJMIH0gZnJvbSAnY29uc3RhbnRzL3VybCc7XG5pbXBvcnQgeyB1c2VUb2dnbGUgfSBmcm9tICdob29rcyc7XG5pbXBvcnQgeyB1c2VGZXRjaFdvcmRzTGlzdCB9IGZyb20gJ3N0YXRlL2ZldGNoV29yZHNMaXN0L3VzZUZldGNoV29yZHNMaXN0JztcbmltcG9ydCB7IEZFVENIX1dPUkRTX0xJU1RfVVJMIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHsgSVdvcmQgfSBmcm9tICcuL0lXb3JkJztcblxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xuXG5jb25zdCBpbnB1dHM6IEFycmF5PHN0cmluZz4gPSBbJ3dvcmQnLCAnZXhhbXBsZScsICd0cmFuc2xhdGUnLCAnZXhwbGFuYXRpb24nXTtcblxuZXhwb3J0IGNvbnN0IFdvcmQ6IEZDPElXb3JkPiA9ICh7IGlkLCB3b3JkLCB0cmFuc2xhdGUsIGltYWdlU3JjIH0pID0+IHtcbiAgY29uc3QgeyBmZXRjaFdvcmRzTGlzdCB9ID0gdXNlRmV0Y2hXb3Jkc0xpc3QoKTtcbiAgY29uc3QgeyB2aXNpYmxlLCBvcGVuQWRkV29yZE1vZGFsLCBjbG9zZUFkZFdvcmRNb2RhbCB9ID0gdXNlVG9nZ2xlKCk7XG5cbiAgY29uc3QgZGVsZXRlV29yZENhcmQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtGRVRDSF9XT1JEU19MSVNUX1VSTH0vJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgd2FzV29yZERlbGV0ZWRTdWNjZXNzZnVsbHkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAod2FzV29yZERlbGV0ZWRTdWNjZXNzZnVsbHkpIHtcbiAgICAgIGZldGNoV29yZHNMaXN0KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCBoYW5kbGVDaGFuZ2UgfSA9IHVzZUZvcm1payh7XG4gICAgaW5pdGlhbFZhbHVlczoge1xuICAgICAgd29yZDogJycsXG4gICAgICBleGFtcGxlOiAnJyxcbiAgICAgIHRyYW5zbGF0ZTogJycsXG4gICAgICBleHBsYW5hdGlvbjogJycsXG4gICAgICBpbWFnZVNyYzogJycsXG4gICAgfSxcbiAgICBvblN1Ym1pdDogYXN5bmMgKGJvZHk6IElXb3JkKSA9PiB7XG4gICAgICBhd2FpdCBmZXRjaChgJHtGRVRDSF9XT1JEU19MSVNUX1VSTH0vJHtpZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDYXJkXG4gICAgICAgIGFjdGlvbnM9e1tcbiAgICAgICAgICA8TGluayB0bz17YHdvcmQvJHtpZH1gfT5cbiAgICAgICAgICAgIDxCdXR0b24ga2V5PVwidXBkYXRlXCI+T3BlbjwvQnV0dG9uPlxuICAgICAgICAgIDwvTGluaz4sXG4gICAgICAgICAgPEJ1dHRvbiBrZXk9XCJ1cGRhdGVcIiBvbkNsaWNrPXtvcGVuQWRkV29yZE1vZGFsfT5cbiAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgIDwvQnV0dG9uPixcbiAgICAgICAgICA8QnV0dG9uIGtleT1cImRlbGV0ZVwiIHR5cGU9XCJkYW5nZXJcIiBvbkNsaWNrPXtkZWxldGVXb3JkQ2FyZH0+XG4gICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICA8L0J1dHRvbj4sXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxTLkNhcmRCb2R5PlxuICAgICAgICAgIDxNZXRhIHRpdGxlPXt3b3JkfSBkZXNjcmlwdGlvbj17dHJhbnNsYXRlfSAvPlxuICAgICAgICAgIDxTLkNhcmRJbWFnZSBzcmM9e2Ake1NFUlZFUl9VUkx9L2ltYWdlLyR7aW1hZ2VTcmN9YH0gYWx0PXt3b3JkfSAvPlxuICAgICAgICA8L1MuQ2FyZEJvZHk+XG4gICAgICA8L0NhcmQ+XG4gICAgICA8TW9kYWxcbiAgICAgICAgdGl0bGU9XCJBZGQgbmV3IHdvcmRcIlxuICAgICAgICBmb290ZXI9e251bGx9XG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgIG9uQ2FuY2VsPXtjbG9zZUFkZFdvcmRNb2RhbH1cbiAgICAgID5cbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAge2lucHV0cy5tYXAoKGlucHV0OiBzdHJpbmcpID0+IChcbiAgICAgICAgICAgIDxTLklucHV0V3JhcHBlciBrZXk9e2lucHV0fT5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAga2V5PXtpbnB1dH1cbiAgICAgICAgICAgICAgICBuYW1lPXtpbnB1dH1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aW5wdXR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUy5JbnB1dFdyYXBwZXI+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPFMuQnV0dG9uV3JhcHBlcj5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICBVcGRhdGUgd29yZFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9TLkJ1dHRvbldyYXBwZXI+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vV29yZCc7XG5cbmV4cG9ydCB7IFdvcmQgfTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJkQm9keSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxNTBweDtcbmA7XG4iLCJleHBvcnQgY29uc3QgY29sb3JzOiBPYmplY3QgPSB7XG5cdGdyZXk6ICcjOTk5Jyxcbn07XG4iLCJleHBvcnQgY29uc3QgRkVUQ0hfV09SRFNfTElTVF9VUkw6IHN0cmluZyA9XG4gIGAke0VOVl9TRVJWRVJfVVJMfS93b3Jkc2AgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwOC93b3Jkcyc7XG5leHBvcnQgY29uc3QgRkVUQ0hfV09SRF9VUkw6IHN0cmluZyA9XG4gIGAke0VOVl9TRVJWRVJfVVJMfS93b3JkYCB8fCAnaHR0cDovL2xvY2FsaG9zdDozMDA4L3dvcmQnO1xuIiwiZXhwb3J0IGNvbnN0IHNwYWNpbmc6IE9iamVjdCA9IHtcblx0YmFzZTogJzFyZW0nLFxufTtcbiIsImV4cG9ydCBjb25zdCBTRVJWRVJfVVJMOiBzdHJpbmcgPSBFTlZfU0VSVkVSX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDozMDA4JztcbiIsImltcG9ydCB7IHVzZVRvZ2dsZSB9IGZyb20gJy4vdXNlVG9nZ2xlJztcblxuZXhwb3J0IHsgdXNlVG9nZ2xlIH07XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IHVzZVRvZ2dsZSA9ICgpID0+IHtcbiAgY29uc3QgW3Zpc2libGUsIHRvZ2dsZVZpc2libGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IG9wZW5BZGRXb3JkTW9kYWwgPSAoKTogdm9pZCA9PiB0b2dnbGVWaXNpYmxlKHRydWUpO1xuICBjb25zdCBjbG9zZUFkZFdvcmRNb2RhbCA9ICgpOiB2b2lkID0+IHRvZ2dsZVZpc2libGUoZmFsc2UpO1xuXG4gIHJldHVybiB7IHZpc2libGUsIG9wZW5BZGRXb3JkTW9kYWwsIGNsb3NlQWRkV29yZE1vZGFsIH07XG59O1xuIiwiaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlci9yb290JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcblxuY29uc3QgSG90TG9hZGVyQXBwID0gaG90KEFwcCk7XG5cbmNvbnN0IEVudHJ5UG9pbnQgPSBOT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gQXBwIDogSG90TG9hZGVyQXBwO1xuXG5SZWFjdERPTS5yZW5kZXIoPEVudHJ5UG9pbnQgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBTdWdnZXN0aW9uIH0gZnJvbSAnY29tcG9uZW50cy9TdWdnZXN0aW9uJztcbmltcG9ydCB7IFZpZGVvIH0gZnJvbSAnY29tcG9uZW50cy9WaWRlbyc7XG5pbXBvcnQgeyBIaWdobGlnaHRlZFBocmFzZSB9IGZyb20gJ2NvbXBvbmVudHMvSGlnaGxpZ2h0ZWRQaHJhc2UnO1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgeyBTRVJWRVJfVVJMIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3VybCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnY29tcG9uZW50cy9OYXZpZ2F0aW9uJztcbmltcG9ydCB7IEZFVENIX1dPUkRfVVJMIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGZldGNoV29yZEZyb21SYXBpZCB9IGZyb20gJy4uLy4uL3V0aWxzL3dvcmRzQXBpRmV0Y2gnO1xuXG5jb25zdCBjaGVja0ZyZXF1ZW5jeSA9IGZyZXF1ZW5jeSA9PiB7XG4gIGNvbnN0IG51bWJlciA9IE1hdGguY2VpbChmcmVxdWVuY3kpO1xuICBjb25zdCBpcyA9IHtcbiAgICAxOiB7XG4gICAgICBjb2xvcjogJyM4ODAwMDAnLFxuICAgICAgdGl0bGU6ICd2ZXJ5IHJhcmUnLFxuICAgIH0sXG4gICAgMjoge1xuICAgICAgY29sb3I6ICcjZmYwMjAyJyxcbiAgICAgIHRpdGxlOiAncmFyZScsXG4gICAgfSxcbiAgICAzOiB7XG4gICAgICBjb2xvcjogJyNmOTc3NzcnLFxuICAgICAgdGl0bGU6ICdzZWxkb20nLFxuICAgIH0sXG4gICAgNDoge1xuICAgICAgY29sb3I6ICcjYWJjMGYzJyxcbiAgICAgIHRpdGxlOiAnc29tZXRpbWVzJyxcbiAgICB9LFxuICAgIDU6IHtcbiAgICAgIGNvbG9yOiAnIzY2OTNmZicsXG4gICAgICB0aXRsZTogJ3JlZ3VsYXInLFxuICAgIH0sXG4gICAgNjoge1xuICAgICAgY29sb3I6ICcjMDU0ZWZmJyxcbiAgICAgIHRpdGxlOiAnb2Z0ZW4nLFxuICAgIH0sXG4gICAgNzoge1xuICAgICAgY29sb3I6ICcjMDAyYjk0JyxcbiAgICAgIHRpdGxlOiAnZnJlcXVlbnRseScsXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gaXNbbnVtYmVyXTtcbn07XG5cbmV4cG9ydCBjb25zdCBXb3JkOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XG4gIGNvbnN0IFtmZXRjaGVkV29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFt3b3JkRnJlcXVlbmN5LCBzZXRXb3JkRnJlcXVlbmN5XSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3Qge1xuICAgIHdvcmQsXG4gICAgdHJhbnNsYXRlLFxuICAgIGRlZmluaXRpb24sXG4gICAgY29udGV4dCxcbiAgICBleGFtcGxlLFxuICAgIHN5bm9ueW0sXG4gICAgYW50b255bSxcbiAgICBpbWFnZVNyYyxcbiAgfSA9IGZldGNoZWRXb3JkO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7RkVUQ0hfV09SRF9VUkx9LyR7aWR9YCk7XG4gICAgICBjb25zdCB3b3JkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0V29yZCh3b3JkKTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZnJlcXVlbmN5OiB7IHppcGYgfSxcbiAgICAgIH0gPSBhd2FpdCBmZXRjaFdvcmRGcm9tUmFwaWQoJ2ZyZXF1ZW5jeScsIHdvcmQud29yZCk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBjaGVja0ZyZXF1ZW5jeSh6aXBmKTtcbiAgICAgIHNldFdvcmRGcmVxdWVuY3koZGF0YSk7XG4gICAgfSkoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB3b3JkID8gKFxuICAgIDxTLldvcmRQYWdlPlxuICAgICAgPFMuV29yZFdyYXBwZXI+XG4gICAgICAgIDxTLkltYWdlIHNyYz17YCR7U0VSVkVSX1VSTH0vaW1hZ2UvJHtpbWFnZVNyY31gfSBhbHQ9e3dvcmR9IC8+XG5cbiAgICAgICAgPFMuV29yZFByb3BlcnR5PlxuICAgICAgICAgIDxTLldvcmRUaXRsZT5Xb3JkOiA8L1MuV29yZFRpdGxlPlxuICAgICAgICAgIDxzcGFuPnt3b3JkfTwvc3Bhbj5cbiAgICAgICAgPC9TLldvcmRQcm9wZXJ0eT5cblxuICAgICAgICA8Uy5Xb3JkUHJvcGVydHk+XG4gICAgICAgICAgPFMuV29yZFRpdGxlPlRyYW5zbGF0ZTogPC9TLldvcmRUaXRsZT5cbiAgICAgICAgICA8c3Bhbj57dHJhbnNsYXRlfTwvc3Bhbj5cbiAgICAgICAgPC9TLldvcmRQcm9wZXJ0eT5cblxuICAgICAgICA8Uy5Xb3JkUHJvcGVydHk+XG4gICAgICAgICAgPFMuV29yZFRpdGxlPkRlZmluaXRpb246IDwvUy5Xb3JkVGl0bGU+XG4gICAgICAgICAgPHNwYW4+e2RlZmluaXRpb259PC9zcGFuPlxuICAgICAgICA8L1MuV29yZFByb3BlcnR5PlxuXG4gICAgICAgIDxTLldvcmRQcm9wZXJ0eT5cbiAgICAgICAgICA8Uy5Xb3JkVGl0bGU+Q29udGV4dDogPC9TLldvcmRUaXRsZT5cbiAgICAgICAgICA8SGlnaGxpZ2h0ZWRQaHJhc2UgcGhyYXNlPXtjb250ZXh0fSB3b3JkPXt3b3JkfSAvPlxuICAgICAgICA8L1MuV29yZFByb3BlcnR5PlxuXG4gICAgICAgIDxTLldvcmRQcm9wZXJ0eT5cbiAgICAgICAgICA8Uy5Xb3JkVGl0bGU+RXhhbXBsZTogPC9TLldvcmRUaXRsZT5cbiAgICAgICAgICA8SGlnaGxpZ2h0ZWRQaHJhc2UgcGhyYXNlPXtleGFtcGxlfSB3b3JkPXt3b3JkfSAvPlxuICAgICAgICA8L1MuV29yZFByb3BlcnR5PlxuXG4gICAgICAgIDxTLldvcmRQcm9wZXJ0eT5cbiAgICAgICAgICA8U3VnZ2VzdGlvbiB0aXRsZT1cInN5bm9ueW1cIiB3b3JkPXtzeW5vbnltfSBvcmlnaW5hbFdvcmQ9e3dvcmR9IC8+XG4gICAgICAgIDwvUy5Xb3JkUHJvcGVydHk+XG5cbiAgICAgICAgPFMuV29yZFByb3BlcnR5PlxuICAgICAgICAgIDxTdWdnZXN0aW9uIHRpdGxlPVwiYW50b255bVwiIHdvcmQ9e2FudG9ueW19IG9yaWdpbmFsV29yZD17d29yZH0gLz5cbiAgICAgICAgPC9TLldvcmRQcm9wZXJ0eT5cblxuICAgICAgICA8Uy5Xb3JkUHJvcGVydHk+XG4gICAgICAgICAgPFMuV29yZFRpdGxlPkZyZXF1ZW5jeTogPC9TLldvcmRUaXRsZT5cbiAgICAgICAgICA8c3Bhbj57d29yZEZyZXF1ZW5jeS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgPFMuQ29sb3IgY29sb3I9e3dvcmRGcmVxdWVuY3kuY29sb3J9IC8+XG4gICAgICAgIDwvUy5Xb3JkUHJvcGVydHk+XG5cbiAgICAgICAgPFZpZGVvIHdvcmQ9e3dvcmR9IC8+XG4gICAgICA8L1MuV29yZFdyYXBwZXI+XG4gICAgICA8TmF2aWdhdGlvbiAvPlxuICAgIDwvUy5Xb3JkUGFnZT5cbiAgKSA6IG51bGw7XG59O1xuIiwiaW1wb3J0IHsgV29yZCB9IGZyb20gJy4vV29yZCc7XG5cbmV4cG9ydCB7IFdvcmQgfTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgV29yZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjN2M3Yzc7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBXb3JkUHJvcGVydHkgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgV29yZFRpdGxlID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcblxuZXhwb3J0IGNvbnN0IFdvcmRQYWdlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb2xvciA9IHN0eWxlZC5zcGFuYFxuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLmNvbG9yfTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5gO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuaW1wb3J0IHsgSVdvcmQgfSBmcm9tICdjb21wb25lbnRzL1dvcmQvSVdvcmQnO1xuaW1wb3J0IHsgV29yZCB9IGZyb20gJ2NvbXBvbmVudHMvV29yZCc7XG5pbXBvcnQgeyBBZGRXb3JkIH0gZnJvbSAnY29tcG9uZW50cy9BZGRXb3JkJztcbmltcG9ydCB7IHVzZUZldGNoV29yZHNMaXN0IH0gZnJvbSAnc3RhdGUvZmV0Y2hXb3Jkc0xpc3QvdXNlRmV0Y2hXb3Jkc0xpc3QnO1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCBXb3JkczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgd29yZHMsIGZldGNoV29yZHNMaXN0IH0gPSB1c2VGZXRjaFdvcmRzTGlzdCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hXb3Jkc0xpc3QoKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICB9LCBbXSk7XG5cbiAgY29uc3QgcmVuZGVyV29yZHMgPSAod29yZDogSVdvcmQpID0+XG4gICAgd29yZC53b3JkICYmIChcbiAgICAgIDxDb2wga2V5PXt3b3JkLmlkfSB4cz17MjR9IHNtPXsxMn0gbWQ9ezh9IGxnPXs4fSB4bD17Nn0+XG4gICAgICAgIDxTLldvcmRDb250YWluZXI+XG4gICAgICAgICAgPFdvcmQgey4uLndvcmR9IC8+XG4gICAgICAgIDwvUy5Xb3JkQ29udGFpbmVyPlxuICAgICAgPC9Db2w+XG4gICAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Uy5Xb3JkV3JhcHBlciBndXR0ZXI9ezEyfT5cbiAgICAgICAgPENvbCB4cz17MjR9IHNtPXsxMn0gbWQ9ezh9IGxnPXs4fSB4bD17Nn0+XG4gICAgICAgICAgPEFkZFdvcmQgLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIHshaXNFbXB0eSh3b3JkcykgJiYgd29yZHMubWFwKHJlbmRlcldvcmRzKX1cbiAgICAgIDwvUy5Xb3JkV3JhcHBlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBXb3JkcyB9IGZyb20gJy4vV29yZHMnO1xuXG5leHBvcnQgeyBXb3JkcyB9O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IGNvbnN0IFdvcmRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFdvcmRXcmFwcGVyID0gc3R5bGVkKFJvdylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGUsIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBXb3JkIH0gZnJvbSAncGFnZXMvV29yZCc7XG5pbXBvcnQgeyBXb3JkcyB9IGZyb20gJ3BhZ2VzL1dvcmRzJztcblxuZXhwb3J0IGNvbnN0IFJvdXRlciA9ICgpID0+IChcbiAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgPFJlZGlyZWN0IHRvPVwiL3dvcmRzXCIgLz5cbiAgICA8Um91dGUgcGF0aD1cIi93b3Jkc1wiPlxuICAgICAgPFdvcmRzIC8+XG4gICAgPC9Sb3V0ZT5cbiAgICA8Um91dGUgcGF0aD1cIi93b3JkLzppZFwiPlxuICAgICAgPFdvcmQgLz5cbiAgICA8L1JvdXRlPlxuICA8L0Jyb3dzZXJSb3V0ZXI+XG4pO1xuIiwiaW1wb3J0IHsgQUREX05FV19XT1JEIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBhZGROZXdXb3JkQWN0aW9uID0gKCkgPT4gKHtcbiAgdHlwZTogQUREX05FV19XT1JELFxufSk7XG4iLCJpbXBvcnQgeyB3YXRjaEFkZGluZ05ld1dvcmRzIH0gZnJvbSAnLi9zYWdhcyc7XG5pbXBvcnQgeyB1c2VBZGROZXdXb3JkIH0gZnJvbSAnLi91c2VBZGROZXdXb3JkJztcblxuZXhwb3J0IHsgd2F0Y2hBZGRpbmdOZXdXb3JkcywgdXNlQWRkTmV3V29yZCB9O1xuIiwiaW1wb3J0IHsgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IHsgQUREX05FV19XT1JEIH0gZnJvbSAnLi90eXBlcyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uKiBhZGROZXdXb3JkKHZhbHVlczogYW55KSB7XG5cdHlpZWxkIGNvbnNvbGUubG9nKCdhZGROZXdXb3JkJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiB3YXRjaEFkZGluZ05ld1dvcmRzKCkge1xuXHR5aWVsZCB0YWtlRXZlcnkoQUREX05FV19XT1JELCBhZGROZXdXb3JkKTtcbn1cbiIsImV4cG9ydCBjb25zdCBBRERfTkVXX1dPUkQ6IHN0cmluZyA9ICdBRERfTkVXX1dPUkQnO1xuIiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBJV29yZCB9IGZyb20gJ2NvbXBvbmVudHMvV29yZC9JV29yZCc7XG5pbXBvcnQgeyBhZGROZXdXb3JkQWN0aW9uIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuZXhwb3J0IGNvbnN0IHVzZUFkZE5ld1dvcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBhZGROZXdXb3JkID0gKHZhbHVlczogSVdvcmQpOiB2b2lkID0+IHtcbiAgICBkaXNwYXRjaChhZGROZXdXb3JkQWN0aW9uKCkpO1xuICB9O1xuXG4gIHJldHVybiB7IGFkZE5ld1dvcmQgfTtcbn07XG4iLCJpbXBvcnQgeyBJV29yZCB9IGZyb20gJ2NvbXBvbmVudHMvV29yZC9JV29yZCc7XG5cbmltcG9ydCB7IEZFVENIX1dPUkQsIFNUQVJUX1dPUkRfRkVUQ0hJTkcgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBJRmV0Y2hXb3JkIHtcbiAgdHlwZTogdHlwZW9mIEZFVENIX1dPUkQ7XG4gIHdvcmQ6IElXb3JkO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hXb3JkQWN0aW9uID0gKHdvcmQ6IElXb3JkKTogSUZldGNoV29yZCA9PiAoe1xuICB0eXBlOiBGRVRDSF9XT1JELFxuICB3b3JkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFdvcmRCeUlkQWN0aW9uID0gKGlkOiBzdHJpbmcpID0+ICh7XG4gIHR5cGU6IFNUQVJUX1dPUkRfRkVUQ0hJTkcsXG4gIGlkLFxufSk7XG4iLCJpbXBvcnQgeyBmZXRjaFdvcmRSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyB3YXRjaFdvcmRGZXRjaGluZyB9IGZyb20gJy4vc2FnYXMnO1xuXG5leHBvcnQgeyB3YXRjaFdvcmRGZXRjaGluZywgZmV0Y2hXb3JkUmVkdWNlciB9O1xuIiwiaW1wb3J0IHsgSUZldGNoV29yZCB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBGRVRDSF9XT1JEIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFdvcmRSZWR1Y2VyID0gKHN0YXRlOiBhbnksIHsgdHlwZSwgd29yZCB9OiBJRmV0Y2hXb3JkKSA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgRkVUQ0hfV09SRDpcbiAgICAgIHJldHVybiB3b3JkO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBjYWxsLCBwdXQsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBJV29yZCB9IGZyb20gJ2NvbXBvbmVudHMvV29yZC9JV29yZCc7XG5cbmltcG9ydCB7IEZFVENIX1dPUkRfVVJMIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuaW1wb3J0IHsgZmV0Y2hXb3JkQWN0aW9uIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IFNUQVJUX1dPUkRfRkVUQ0hJTkcgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uKiBmZXRjaFdvcmQoYWN0aW9uOiBhbnkpIHtcbiAgY29uc3QgeyBpZCB9ID0gYWN0aW9uO1xuICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoKCkgPT4gZmV0Y2goYCR7RkVUQ0hfV09SRF9VUkx9LyR7aWR9YCkpO1xuICBjb25zdCB3b3JkOiBJV29yZCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcblxuICB5aWVsZCBwdXQoZmV0Y2hXb3JkQWN0aW9uKHdvcmQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiB3YXRjaFdvcmRGZXRjaGluZygpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KFNUQVJUX1dPUkRfRkVUQ0hJTkcsIGZldGNoV29yZCk7XG59XG4iLCJleHBvcnQgY29uc3QgRkVUQ0hfV09SRDogc3RyaW5nID0gJ0ZFVENIX1dPUkQnO1xuZXhwb3J0IGNvbnN0IFNUQVJUX1dPUkRfRkVUQ0hJTkc6IHN0cmluZyA9ICdTVEFSVF9XT1JEX0ZFVENISU5HJztcbiIsImltcG9ydCB7IElXb3JkIH0gZnJvbSAnY29tcG9uZW50cy9Xb3JkL0lXb3JkJztcblxuaW1wb3J0IHsgRkVUQ0hfV09SRFNfTElTVCwgRklSRV9GRVRDSF9XT1JEU19MSVNUIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZldGNoV29yZHNMaXN0IHtcbiAgdHlwZTogdHlwZW9mIEZFVENIX1dPUkRTX0xJU1Q7XG4gIHdvcmRzOiBBcnJheTxJV29yZD47XG59XG5cbmludGVyZmFjZSBJRmlyZUZldGNoV29yZHNMaXN0IHtcbiAgdHlwZTogdHlwZW9mIEZJUkVfRkVUQ0hfV09SRFNfTElTVDtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoV29yZHNMaXN0QWN0aW9uID0gKHdvcmRzOiBBcnJheTxJV29yZD4pOiBJRmV0Y2hXb3Jkc0xpc3QgPT4gKHtcbiAgdHlwZTogRkVUQ0hfV09SRFNfTElTVCxcbiAgd29yZHMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZpcmVGZXRjaFdvcmRzTGlzdEFjdGlvbiA9ICgpOiBJRmlyZUZldGNoV29yZHNMaXN0ID0+ICh7XG4gIHR5cGU6IEZJUkVfRkVUQ0hfV09SRFNfTElTVCxcbn0pO1xuIiwiaW1wb3J0IHsgZmV0Y2hXb3Jkc0xpc3RSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyB3YXRjaFdvcmRzTGlzdEZldGNoaW5nIH0gZnJvbSAnLi9zYWdhcyc7XG5cbmV4cG9ydCB7IHdhdGNoV29yZHNMaXN0RmV0Y2hpbmcsIGZldGNoV29yZHNMaXN0UmVkdWNlciB9O1xuIiwiaW1wb3J0IHsgSUZldGNoV29yZHNMaXN0IH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IEZFVENIX1dPUkRTX0xJU1QgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgSU5JVElBTF9TVEFURTogYW55ID0gW107XG5cbi8vIFRPRE86IHdoYXQgcmVkdWNlciByZXR1cm5cbmV4cG9ydCBjb25zdCBmZXRjaFdvcmRzTGlzdFJlZHVjZXIgPSAoXG4gIHN0YXRlOiBhbnksXG4gIHsgdHlwZSwgd29yZHMgfTogSUZldGNoV29yZHNMaXN0LFxuKSA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgRkVUQ0hfV09SRFNfTElTVDpcbiAgICAgIHJldHVybiBbLi4uSU5JVElBTF9TVEFURSwgLi4ud29yZHNdO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBjYWxsLCBwdXQsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBJV29yZCB9IGZyb20gJ2NvbXBvbmVudHMvV29yZC9JV29yZCc7XG5cbmltcG9ydCB7IEZFVENIX1dPUkRTX0xJU1RfVVJMIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuaW1wb3J0IHsgZmV0Y2hXb3Jkc0xpc3RBY3Rpb24gfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgRklSRV9GRVRDSF9XT1JEU19MSVNUIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiogZmV0Y2hXb3Jkc0xpc3QoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbCgoKSA9PiBmZXRjaChGRVRDSF9XT1JEU19MSVNUX1VSTCkpO1xuICBjb25zdCB3b3JkczogQXJyYXk8SVdvcmQ+ID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHlpZWxkIHB1dChmZXRjaFdvcmRzTGlzdEFjdGlvbih3b3JkcykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24qIHdhdGNoV29yZHNMaXN0RmV0Y2hpbmcoKSB7XG4gIHlpZWxkIHRha2VFdmVyeShGSVJFX0ZFVENIX1dPUkRTX0xJU1QsIGZldGNoV29yZHNMaXN0KTtcbn1cbiIsImV4cG9ydCBjb25zdCBGRVRDSF9XT1JEU19MSVNUOiBzdHJpbmcgPSAnRkVUQ0hfV09SRFNfTElTVCc7XG5leHBvcnQgY29uc3QgRklSRV9GRVRDSF9XT1JEU19MSVNUOiBzdHJpbmcgPSAnRklSRV9GRVRDSF9XT1JEU19MSVNUJztcbiIsImltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IElXb3JkIH0gZnJvbSAnY29tcG9uZW50cy9Xb3JkL0lXb3JkJztcblxuaW1wb3J0IHsgZmlyZUZldGNoV29yZHNMaXN0QWN0aW9uIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuaW50ZXJmYWNlIElVc2VGZXRjaFdvcmRzTGlzdCB7XG4gIGZldGNoV29yZHNMaXN0OiAoKSA9PiB2b2lkO1xuICB3b3JkczogQXJyYXk8SVdvcmQ+O1xufVxuXG5leHBvcnQgY29uc3QgdXNlRmV0Y2hXb3Jkc0xpc3QgPSAoKTogSVVzZUZldGNoV29yZHNMaXN0ID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IHdvcmRzOiBBcnJheTxJV29yZD4gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUud29yZHMpO1xuXG4gIGNvbnN0IGZldGNoV29yZHNMaXN0ID0gKCk6IHZvaWQgPT4ge1xuICAgIGRpc3BhdGNoKGZpcmVGZXRjaFdvcmRzTGlzdEFjdGlvbigpKTtcbiAgfTtcblxuICByZXR1cm4geyBmZXRjaFdvcmRzTGlzdCwgd29yZHMgfTtcbn07XG4iLCJleHBvcnQgaW50ZXJmYWNlIElJbml0aWFsU3RhdGUge1xuICB3b3JkczogYXJyYXk7XG4gIHdvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogSUluaXRpYWxTdGF0ZSA9IHtcbiAgd29yZHM6IFtdLFxuICB3b3JkOiAnJyxcbn07XG4iLCJpbXBvcnQgeyBpbml0aWFsU3RhdGUgfSBmcm9tICdzdGF0ZS9pbml0aWFsU3RhdGUnO1xuXG5pbXBvcnQgeyBmZXRjaFdvcmRzTGlzdFJlZHVjZXIgfSBmcm9tICcuL2ZldGNoV29yZHNMaXN0JztcbmltcG9ydCB7IGZldGNoV29yZFJlZHVjZXIgfSBmcm9tICcuL2ZldGNoV29yZCc7XG5cbmV4cG9ydCBjb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+ICh7XG4gIHdvcmRzOiBmZXRjaFdvcmRzTGlzdFJlZHVjZXIoc3RhdGUud29yZHMsIGFjdGlvbiksXG4gIHdvcmQ6IGZldGNoV29yZFJlZHVjZXIoc3RhdGUud29yZCwgYWN0aW9uKSxcbn0pO1xuIiwiaW1wb3J0IHsgYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IHsgd2F0Y2hXb3Jkc0xpc3RGZXRjaGluZyB9IGZyb20gJy4vZmV0Y2hXb3Jkc0xpc3QnO1xuaW1wb3J0IHsgd2F0Y2hBZGRpbmdOZXdXb3JkcyB9IGZyb20gJy4vYWRkTmV3V29yZCc7XG5pbXBvcnQgeyB3YXRjaFdvcmRGZXRjaGluZyB9IGZyb20gJy4vZmV0Y2hXb3JkJztcblxuZXhwb3J0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgeWllbGQgYWxsKFt3YXRjaFdvcmRzTGlzdEZldGNoaW5nKCksIHdhdGNoQWRkaW5nTmV3V29yZHMoKSwgd2F0Y2hXb3JkRmV0Y2hpbmcoKV0pO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgeyByb290UmVkdWNlciB9IGZyb20gJy4vcm9vdFJlZHVjZXJzJztcbmltcG9ydCB7IGluaXRpYWxTdGF0ZSB9IGZyb20gJy4vaW5pdGlhbFN0YXRlJztcbmltcG9ydCB7IHJvb3RTYWdhIH0gZnJvbSAnLi9yb290U2FnYSdcblxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG5cdGludGVyZmFjZSBXaW5kb3cge1xuXHRcdF9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXz86IHR5cGVvZiBjb21wb3NlO1xuXHR9XG59XG5cbmNvbnN0IGNvbXBvc2VFbmhhbmNlciA9IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gfHwgY29tcG9zZTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBjb21wb3NlRW5oYW5jZXIoYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKSkpO1xuXG5zYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IHNwYWNpbmcgfSBmcm9tICcuL2NvbnN0YW50cy9zcGFjaW5nJztcblxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAke3NwYWNpbmcuYmFzZX07XG5gO1xuIiwiZXhwb3J0IGNvbnN0IGZldGNoV29yZEZyb21SYXBpZCA9IGFzeW5jIChcbiAgdHlwZTogc3RyaW5nLFxuICB3b3JkOiBzdHJpbmcsXG4pOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3dvcmRzYXBpdjEucC5yYXBpZGFwaS5jb20vd29yZHMvJHt3b3JkfS8ke3R5cGV9YCxcbiAgICB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdYLVJhcGlkQVBJLUhvc3QnOiAnd29yZHNhcGl2MS5wLnJhcGlkYXBpLmNvbScsXG4gICAgICAgICdYLVJhcGlkQVBJLUtleSc6ICc1ZDI4YjhmZjcxbXNoZDhjN2NkMzk5MGZjM2M4cDFmNmRkYmpzbmFkNGE1Y2I4NzljNycsXG4gICAgICB9LFxuICAgIH0sXG4gICk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9