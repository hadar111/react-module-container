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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	__webpack_require__.p = typeof window !== 'undefined' && window.__STATICS_BASE_URL__ || __webpack_require__.p;
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 182);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/*!*****************************************!*\
  !*** ../node_modules/lodash/isArray.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 10 */
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ../node_modules/@sentry/browser/dist/index.js (referenced with cjs require), ../node_modules/@sentry/core/dist/basebackend.js (referenced with cjs require), ../node_modules/@sentry/core/dist/baseclient.js (referenced with cjs require), ../node_modules/@sentry/core/dist/dsn.js (referenced with cjs require), ../node_modules/@sentry/core/dist/error.js (referenced with cjs require), ../node_modules/@sentry/core/dist/integration.js (referenced with cjs require), ../node_modules/@sentry/core/dist/integrations/dedupe.js (referenced with cjs require), ../node_modules/@sentry/core/dist/integrations/extraerrordata.js (referenced with cjs require), ../node_modules/@sentry/core/dist/integrations/inboundfilters.js (referenced with cjs require), ../node_modules/@sentry/core/dist/integrations/pluggable/debug.js (referenced with cjs require), ../node_modules/@sentry/core/dist/integrations/pluggable/rewriteframes.js (referenced with cjs require), ../node_modules/@sentry/core/dist/promisebuffer.js (referenced with cjs require), ../node_modules/@sentry/core/dist/transports/noop.js (referenced with cjs require), ../node_modules/@sentry/hub/dist/hub.js (referenced with cjs require), ../node_modules/@sentry/hub/dist/scope.js (referenced with cjs require), ../node_modules/@sentry/minimal/dist/index.js (referenced with cjs require), ../node_modules/@sentry/utils/async.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/* harmony export (immutable) */ __webpack_exports__["__makeTemplateObject"] = __makeTemplateObject;
/* harmony export (immutable) */ __webpack_exports__["__importStar"] = __importStar;
/* harmony export (immutable) */ __webpack_exports__["__importDefault"] = __importDefault;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 11 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseGetTag.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 23),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ 76),
    objectToString = __webpack_require__(/*! ./_objectToString */ 77);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 12 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/isObjectLike.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 13 */
/*!***************************************!*\
  !*** ../node_modules/lodash/_root.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 44);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 14 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_nativeCreate.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 22);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 15 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_assocIndexOf.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ 38);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 16 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_getMapData.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ 102);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/*!******************************************!*\
  !*** ../node_modules/lodash/isObject.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 22 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_getNative.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ 75),
    getValue = __webpack_require__(/*! ./_getValue */ 81);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 23 */
/*!*****************************************!*\
  !*** ../node_modules/lodash/_Symbol.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 13);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 24 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_castPath.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ 9),
    isKey = __webpack_require__(/*! ./_isKey */ 82),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ 83),
    toString = __webpack_require__(/*! ./toString */ 45);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 25 */
/*!******************************************!*\
  !*** ../node_modules/lodash/isSymbol.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 11),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 12);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 26 */
/*!****************************************!*\
  !*** ../node_modules/lodash/_toKey.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ 25);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 27 */
/*!*****************************************!*\
  !*** ../node_modules/react-is/index.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {
  module.exports = require('./cjs/react-is.production.min.js');
} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ 63);
}


/***/ }),
/* 28 */
/*!**************************************************************!*\
  !*** ../node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 36 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/isArrayLike.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ 43),
    isLength = __webpack_require__(/*! ./isLength */ 46);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 37 */
/*!****************************!*\
  !*** ./module-registry.js ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = __webpack_require__(/*! lodash/set */ 73);

var _set2 = _interopRequireDefault(_set);

var _unset = __webpack_require__(/*! lodash/unset */ 108);

var _unset2 = _interopRequireDefault(_unset);

var _forEach = __webpack_require__(/*! lodash/forEach */ 114);

var _forEach2 = _interopRequireDefault(_forEach);

var _uniqueId = __webpack_require__(/*! lodash/uniqueId */ 134);

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModuleRegistry = function () {
  function ModuleRegistry() {
    _classCallCheck(this, ModuleRegistry);

    this.registeredComponents = {};
    this.registeredMethods = {};
    this.eventListeners = {};
    this.modules = {};
  }

  _createClass(ModuleRegistry, [{
    key: 'cleanAll',
    value: function cleanAll() {
      this.registeredComponents = {};
      this.registeredMethods = {};
      this.eventListeners = {};
      this.modules = {};
    }
  }, {
    key: 'registerModule',
    value: function registerModule(globalID, ModuleFactory) {
      var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      if (this.modules[globalID]) {
        throw new Error('A module with id "' + globalID + '" is already registered');
      }

      this.modules[globalID] = new (Function.prototype.bind.apply(ModuleFactory, [null].concat(_toConsumableArray(args))))();
    }
  }, {
    key: 'getModule',
    value: function getModule(globalID) {
      return this.modules[globalID];
    }
  }, {
    key: 'getAllModules',
    value: function getAllModules() {
      var _this = this;

      return Object.keys(this.modules).map(function (moduleId) {
        return _this.modules[moduleId];
      });
    }
  }, {
    key: 'registerComponent',
    value: function registerComponent(globalID, generator) {
      this.registeredComponents[globalID] = generator;
    }
  }, {
    key: 'component',
    value: function component(globalID) {
      var generator = this.registeredComponents[globalID];
      if (!generator) {
        console.error('ModuleRegistry.component ' + globalID + ' used but not yet registered');
        return undefined;
      }
      return generator();
    }
  }, {
    key: 'addListener',
    value: function addListener(globalID, callback) {
      var _this2 = this;

      var callbackKey = (0, _uniqueId2.default)('eventListener');
      (0, _set2.default)(this.eventListeners, [globalID, callbackKey], callback);
      return {
        remove: function remove() {
          return (0, _unset2.default)(_this2.eventListeners[globalID], callbackKey);
        }
      };
    }
  }, {
    key: 'notifyListeners',
    value: function notifyListeners(globalID) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var listenerCallbacks = this.eventListeners[globalID];
      if (!listenerCallbacks) {
        return;
      }
      (0, _forEach2.default)(listenerCallbacks, function (callback) {
        return invokeSafely(callback, args);
      });
    }
  }, {
    key: 'registerMethod',
    value: function registerMethod(globalID, generator) {
      this.registeredMethods[globalID] = generator;
    }
  }, {
    key: 'invoke',
    value: function invoke(globalID) {
      var generator = this.registeredMethods[globalID];
      if (!generator) {
        console.error('ModuleRegistry.invoke ' + globalID + ' used but not yet registered');
        return undefined;
      }
      var method = generator();

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return method.apply(undefined, args);
    }
  }]);

  return ModuleRegistry;
}();

var singleton = void 0;
if (typeof window !== 'undefined') {
  singleton = window.ModuleRegistry || new ModuleRegistry();
  window.ModuleRegistry = singleton;
} else {
  singleton = new ModuleRegistry();
}
exports.default = singleton;


function invokeSafely(callback, args) {
  try {
    callback.apply(undefined, _toConsumableArray(args));
  } catch (err) {
    console.error(err);
  }
}

/***/ }),
/* 38 */
/*!************************************!*\
  !*** ../node_modules/lodash/eq.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 39 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_isIndex.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 40 */
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 41 */
/*!***********************************************!*\
  !*** ../node_modules/@sentry/utils/logger.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var misc_1 = __webpack_require__(/*! ./misc */ 72);
// TODO: Implement different loggers for different environments
var global = misc_1.getGlobalObject();
/** JSDoc */
var Logger = /** @class */ (function () {
    /** JSDoc */
    function Logger() {
        this.enabled = false;
    }
    /** JSDoc */
    Logger.prototype.disable = function () {
        this.enabled = false;
    };
    /** JSDoc */
    Logger.prototype.enable = function () {
        this.enabled = true;
    };
    /** JSDoc */
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.enabled) {
            return;
        }
        misc_1.consoleSandbox(function () {
            global.console.log("Sentry Logger [Log]: " + args.join(' ')); // tslint:disable-line:no-console
        });
    };
    /** JSDoc */
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.enabled) {
            return;
        }
        misc_1.consoleSandbox(function () {
            global.console.warn("Sentry Logger [Warn]: " + args.join(' ')); // tslint:disable-line:no-console
        });
    };
    /** JSDoc */
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.enabled) {
            return;
        }
        misc_1.consoleSandbox(function () {
            global.console.error("Sentry Logger [Error]: " + args.join(' ')); // tslint:disable-line:no-console
        });
    };
    return Logger;
}());
var logger = new Logger();
exports.logger = logger;
//# sourceMappingURL=logger.js.map

/***/ }),
/* 42 */
/*!*******************************************!*\
  !*** ../node_modules/prop-types/index.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ 27);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ 64)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),
/* 43 */
/*!********************************************!*\
  !*** ../node_modules/lodash/isFunction.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 11),
    isObject = __webpack_require__(/*! ./isObject */ 21);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 44 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_freeGlobal.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ 35)))

/***/ }),
/* 45 */
/*!******************************************!*\
  !*** ../node_modules/lodash/toString.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ 106);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 46 */
/*!******************************************!*\
  !*** ../node_modules/lodash/isLength.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 47 */
/*!*************************************************!*\
  !*** ../node_modules/@sentry/hub/dist/index.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var scope_1 = __webpack_require__(/*! ./scope */ 175);
exports.addGlobalEventProcessor = scope_1.addGlobalEventProcessor;
exports.Scope = scope_1.Scope;
var hub_1 = __webpack_require__(/*! ./hub */ 200);
exports.getCurrentHub = hub_1.getCurrentHub;
exports.getHubFromCarrier = hub_1.getHubFromCarrier;
exports.getMainCarrier = hub_1.getMainCarrier;
exports.Hub = hub_1.Hub;
exports.setHubOnCarrier = hub_1.setHubOnCarrier;
//# sourceMappingURL=index.js.map

/***/ }),
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
/* 60 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_assignValue.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 67),
    eq = __webpack_require__(/*! ./eq */ 38);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 61 */
/*!******************************************!*\
  !*** ../node_modules/lodash/identity.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 62 */
/*!*******************************************!*\
  !*** ../node_modules/@sentry/utils/is.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isError(wat) {
    switch (Object.prototype.toString.call(wat)) {
        case '[object Error]':
            return true;
        case '[object Exception]':
            return true;
        case '[object DOMException]':
            return true;
        default:
            return wat instanceof Error;
    }
}
exports.isError = isError;
/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isErrorEvent(wat) {
    return Object.prototype.toString.call(wat) === '[object ErrorEvent]';
}
exports.isErrorEvent = isErrorEvent;
/**
 * Checks whether given value's type is DOMError
 * {@link isDOMError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMError(wat) {
    return Object.prototype.toString.call(wat) === '[object DOMError]';
}
exports.isDOMError = isDOMError;
/**
 * Checks whether given value's type is DOMException
 * {@link isDOMException}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMException(wat) {
    return Object.prototype.toString.call(wat) === '[object DOMException]';
}
exports.isDOMException = isDOMException;
/**
 * Checks whether given value's type is an undefined
 * {@link isUndefined}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isUndefined(wat) {
    return wat === void 0;
}
exports.isUndefined = isUndefined;
/**
 * Checks whether given value's type is a function
 * {@link isFunction}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isFunction(wat) {
    return typeof wat === 'function';
}
exports.isFunction = isFunction;
/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isString(wat) {
    return Object.prototype.toString.call(wat) === '[object String]';
}
exports.isString = isString;
/**
 * Checks whether given value's is a primitive (undefined, null, number, boolean, string)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPrimitive(wat) {
    return wat === null || (typeof wat !== 'object' && typeof wat !== 'function');
}
exports.isPrimitive = isPrimitive;
/**
 * Checks whether given value's type is an array
 * {@link isArray}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isArray(wat) {
    return Object.prototype.toString.call(wat) === '[object Array]';
}
exports.isArray = isArray;
/**
 * Checks whether given value's type is an object literal
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPlainObject(wat) {
    return Object.prototype.toString.call(wat) === '[object Object]';
}
exports.isPlainObject = isPlainObject;
/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isRegExp(wat) {
    return Object.prototype.toString.call(wat) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
/**
 * Checks whether given value's type is a NaN
 * {@link isNaN}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isNaN(wat) {
    return wat !== wat;
}
exports.isNaN = isNaN;
/**
 * Checks whether given value's type is a SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isSyntheticEvent(wat) {
    // tslint:disable-next-line:no-unsafe-any
    return isPlainObject(wat) && 'nativeEvent' in wat && 'preventDefault' in wat && 'stopPropagation' in wat;
}
exports.isSyntheticEvent = isSyntheticEvent;
//# sourceMappingURL=is.js.map

/***/ }),
/* 63 */
/*!************************************************************!*\
  !*** ../node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.4
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),
/* 64 */
/*!*************************************************************!*\
  !*** ../node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ 27);
var assign = __webpack_require__(/*! object-assign */ 65);

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 28);
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ 66);

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 65 */
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 66 */
/*!****************************************************!*\
  !*** ../node_modules/prop-types/checkPropTypes.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 28);
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 67 */
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseAssignValue.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ 68);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 68 */
/*!*************************************************!*\
  !*** ../node_modules/lodash/_defineProperty.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 22);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 69 */
/*!**************************************!*\
  !*** ../node_modules/lodash/keys.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ 120),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ 130),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 36);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 70 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_isPrototype.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 71 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_overArg.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 72 */
/*!*********************************************!*\
  !*** ../node_modules/@sentry/utils/misc.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = __webpack_require__(/*! ./is */ 62);
/**
 * Requires a module which is protected against bundler minification.
 *
 * @param request The module path to resolve
 */
function dynamicRequire(mod, request) {
    return mod.require(request);
}
exports.dynamicRequire = dynamicRequire;
/**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */
function isNodeEnv() {
    // tslint:disable:strict-type-predicates
    return Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
}
exports.isNodeEnv = isNodeEnv;
var fallbackGlobalObject = {};
/**
 * Safely get global scope object
 *
 * @returns Global scope object
 */
// tslint:disable:strict-type-predicates
function getGlobalObject() {
    return isNodeEnv()
        ? global
        : typeof window !== 'undefined'
            ? window
            : typeof self !== 'undefined'
                ? self
                : fallbackGlobalObject;
}
exports.getGlobalObject = getGlobalObject;
/**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */
function uuid4() {
    var global = getGlobalObject();
    var crypto = global.crypto || global.msCrypto;
    if (!(crypto === void 0) && crypto.getRandomValues) {
        // Use window.crypto API if available
        var arr = new Uint16Array(8);
        crypto.getRandomValues(arr);
        // set 4 in byte 7
        // tslint:disable-next-line:no-bitwise
        arr[3] = (arr[3] & 0xfff) | 0x4000;
        // set 2 most significant bits of byte 9 to '10'
        // tslint:disable-next-line:no-bitwise
        arr[4] = (arr[4] & 0x3fff) | 0x8000;
        var pad = function (num) {
            var v = num.toString(16);
            while (v.length < 4) {
                v = "0" + v;
            }
            return v;
        };
        return (pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]));
    }
    else {
        // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            // tslint:disable-next-line:no-bitwise
            var r = (Math.random() * 16) | 0;
            // tslint:disable-next-line:no-bitwise
            var v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}
exports.uuid4 = uuid4;
/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function htmlTreeAsString(elem) {
    var currentElem = elem;
    var MAX_TRAVERSE_HEIGHT = 5;
    var MAX_OUTPUT_LEN = 80;
    var out = [];
    var height = 0;
    var len = 0;
    var separator = ' > ';
    var sepLength = separator.length;
    var nextStr;
    while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
        nextStr = htmlElementAsString(currentElem);
        // bail out if
        // - nextStr is the 'html' element
        // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
        //   (ignore this limit if we are on the first iteration)
        if (nextStr === 'html' || (height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN)) {
            break;
        }
        out.push(nextStr);
        len += nextStr.length;
        currentElem = currentElem.parentNode;
    }
    return out.reverse().join(separator);
}
exports.htmlTreeAsString = htmlTreeAsString;
/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function htmlElementAsString(elem) {
    var out = [];
    var className;
    var classes;
    var key;
    var attr;
    var i;
    if (!elem || !elem.tagName) {
        return '';
    }
    out.push(elem.tagName.toLowerCase());
    if (elem.id) {
        out.push("#" + elem.id);
    }
    className = elem.className;
    if (className && is_1.isString(className)) {
        classes = className.split(/\s+/);
        for (i = 0; i < classes.length; i++) {
            out.push("." + classes[i]);
        }
    }
    var attrWhitelist = ['type', 'name', 'title', 'alt'];
    for (i = 0; i < attrWhitelist.length; i++) {
        key = attrWhitelist[i];
        attr = elem.getAttribute(key);
        if (attr) {
            out.push("[" + key + "=\"" + attr + "\"]");
        }
    }
    return out.join('');
}
exports.htmlElementAsString = htmlElementAsString;
/**
 * Parses string form of URL into an object
 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
 * // intentionally using regex and not <a/> href parsing trick because React Native and other
 * // environments where DOM might not be available
 * @returns parsed URL object
 */
function parseUrl(url) {
    if (!url) {
        return {};
    }
    var match = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!match) {
        return {};
    }
    // coerce to undefined values to empty string so we don't get 'undefined'
    var query = match[6] || '';
    var fragment = match[8] || '';
    return {
        host: match[4],
        path: match[5],
        protocol: match[2],
        relative: match[5] + query + fragment,
    };
}
exports.parseUrl = parseUrl;
/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */
function getEventDescription(event) {
    if (event.message) {
        return event.message;
    }
    else if (event.exception && event.exception.values && event.exception.values[0]) {
        var exception = event.exception.values[0];
        if (exception.type && exception.value) {
            return exception.type + ": " + exception.value;
        }
        else {
            return exception.type || exception.value || event.event_id || '<unknown>';
        }
    }
    else {
        return event.event_id || '<unknown>';
    }
}
exports.getEventDescription = getEventDescription;
/** JSDoc */
function consoleSandbox(callback) {
    var global = getGlobalObject();
    var levels = ['debug', 'info', 'warn', 'error', 'log'];
    if (!('console' in global)) {
        return callback();
    }
    var originalConsole = global.console;
    var wrappedLevels = {};
    // Restore all wrapped console methods
    levels.forEach(function (level) {
        if (level in global.console && originalConsole[level].__sentry__) {
            wrappedLevels[level] = originalConsole[level].__sentry_wrapped__;
            originalConsole[level] = originalConsole[level].__sentry_original__;
        }
    });
    // Perform callback manipulations
    var result = callback();
    // Revert restoration to wrapped state
    Object.keys(wrappedLevels).forEach(function (level) {
        originalConsole[level] = wrappedLevels[level];
    });
    return result;
}
exports.consoleSandbox = consoleSandbox;
//# sourceMappingURL=misc.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 174), __webpack_require__(/*! ./../../webpack/buildin/global.js */ 35)))

/***/ }),
/* 73 */
/*!*************************************!*\
  !*** ../node_modules/lodash/set.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(/*! ./_baseSet */ 74);

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ }),
/* 74 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_baseSet.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ 60),
    castPath = __webpack_require__(/*! ./_castPath */ 24),
    isIndex = __webpack_require__(/*! ./_isIndex */ 39),
    isObject = __webpack_require__(/*! ./isObject */ 21),
    toKey = __webpack_require__(/*! ./_toKey */ 26);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),
/* 75 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_baseIsNative.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ 43),
    isMasked = __webpack_require__(/*! ./_isMasked */ 78),
    isObject = __webpack_require__(/*! ./isObject */ 21),
    toSource = __webpack_require__(/*! ./_toSource */ 80);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 76 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_getRawTag.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 23);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 77 */
/*!*************************************************!*\
  !*** ../node_modules/lodash/_objectToString.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 78 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_isMasked.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ 79);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 79 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_coreJsData.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 13);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 80 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_toSource.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 81 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_getValue.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 82 */
/*!****************************************!*\
  !*** ../node_modules/lodash/_isKey.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ 9),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 25);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 83 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_stringToPath.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ 84);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 84 */
/*!************************************************!*\
  !*** ../node_modules/lodash/_memoizeCapped.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ 85);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 85 */
/*!*****************************************!*\
  !*** ../node_modules/lodash/memoize.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ 86);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 86 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_MapCache.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ 87),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ 101),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ 103),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ 104),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ 105);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 87 */
/*!************************************************!*\
  !*** ../node_modules/lodash/_mapCacheClear.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ 88),
    ListCache = __webpack_require__(/*! ./_ListCache */ 94),
    Map = __webpack_require__(/*! ./_Map */ 100);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 88 */
/*!***************************************!*\
  !*** ../node_modules/lodash/_Hash.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ 89),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ 90),
    hashGet = __webpack_require__(/*! ./_hashGet */ 91),
    hashHas = __webpack_require__(/*! ./_hashHas */ 92),
    hashSet = __webpack_require__(/*! ./_hashSet */ 93);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 89 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_hashClear.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 14);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 90 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_hashDelete.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 91 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_hashGet.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 14);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 92 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_hashHas.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 14);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 93 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_hashSet.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 14);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 94 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_ListCache.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ 95),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ 96),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ 97),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ 98),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ 99);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 95 */
/*!*************************************************!*\
  !*** ../node_modules/lodash/_listCacheClear.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 96 */
/*!**************************************************!*\
  !*** ../node_modules/lodash/_listCacheDelete.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 15);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 97 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_listCacheGet.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 15);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 98 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_listCacheHas.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 15);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 99 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_listCacheSet.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 15);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 100 */
/*!**************************************!*\
  !*** ../node_modules/lodash/_Map.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 22),
    root = __webpack_require__(/*! ./_root */ 13);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 101 */
/*!*************************************************!*\
  !*** ../node_modules/lodash/_mapCacheDelete.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 16);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 102 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_isKeyable.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 103 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_mapCacheGet.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 16);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 104 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_mapCacheHas.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 16);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 105 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_mapCacheSet.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 16);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 106 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_baseToString.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 23),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ 107),
    isArray = __webpack_require__(/*! ./isArray */ 9),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 25);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 107 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_arrayMap.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 108 */
/*!***************************************!*\
  !*** ../node_modules/lodash/unset.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseUnset = __webpack_require__(/*! ./_baseUnset */ 109);

/**
 * Removes the property at `path` of `object`.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 7 } }] };
 * _.unset(object, 'a[0].b.c');
 * // => true
 *
 * console.log(object);
 * // => { 'a': [{ 'b': {} }] };
 *
 * _.unset(object, ['a', '0', 'b', 'c']);
 * // => true
 *
 * console.log(object);
 * // => { 'a': [{ 'b': {} }] };
 */
function unset(object, path) {
  return object == null ? true : baseUnset(object, path);
}

module.exports = unset;


/***/ }),
/* 109 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseUnset.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ 24),
    last = __webpack_require__(/*! ./last */ 110),
    parent = __webpack_require__(/*! ./_parent */ 111),
    toKey = __webpack_require__(/*! ./_toKey */ 26);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),
/* 110 */
/*!**************************************!*\
  !*** ../node_modules/lodash/last.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),
/* 111 */
/*!*****************************************!*\
  !*** ../node_modules/lodash/_parent.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ 112),
    baseSlice = __webpack_require__(/*! ./_baseSlice */ 113);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),
/* 112 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_baseGet.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ 24),
    toKey = __webpack_require__(/*! ./_toKey */ 26);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 113 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseSlice.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 114 */
/*!*****************************************!*\
  !*** ../node_modules/lodash/forEach.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ 115),
    baseEach = __webpack_require__(/*! ./_baseEach */ 116),
    castFunction = __webpack_require__(/*! ./_castFunction */ 133),
    isArray = __webpack_require__(/*! ./isArray */ 9);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 115 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_arrayEach.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 116 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_baseEach.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ 117),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ 132);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 117 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseForOwn.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ 118),
    keys = __webpack_require__(/*! ./keys */ 69);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 118 */
/*!******************************************!*\
  !*** ../node_modules/lodash/_baseFor.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ 119);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 119 */
/*!************************************************!*\
  !*** ../node_modules/lodash/_createBaseFor.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 120 */
/*!************************************************!*\
  !*** ../node_modules/lodash/_arrayLikeKeys.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ 121),
    isArguments = __webpack_require__(/*! ./isArguments */ 122),
    isArray = __webpack_require__(/*! ./isArray */ 9),
    isBuffer = __webpack_require__(/*! ./isBuffer */ 124),
    isIndex = __webpack_require__(/*! ./_isIndex */ 39),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ 126);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 121 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseTimes.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 122 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/isArguments.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ 123),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 12);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 123 */
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseIsArguments.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 11),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 12);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 124 */
/*!******************************************!*\
  !*** ../node_modules/lodash/isBuffer.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ 13),
    stubFalse = __webpack_require__(/*! ./stubFalse */ 125);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/module.js */ 40)(module)))

/***/ }),
/* 125 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/stubFalse.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 126 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/isTypedArray.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ 127),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ 128),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ 129);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 127 */
/*!***************************************************!*\
  !*** ../node_modules/lodash/_baseIsTypedArray.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 11),
    isLength = __webpack_require__(/*! ./isLength */ 46),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 12);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 128 */
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseUnary.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 129 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_nodeUtil.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 44);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/module.js */ 40)(module)))

/***/ }),
/* 130 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_baseKeys.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ 70),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ 131);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 131 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_nativeKeys.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ 71);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 132 */
/*!*************************************************!*\
  !*** ../node_modules/lodash/_createBaseEach.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ 36);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 133 */
/*!***********************************************!*\
  !*** ../node_modules/lodash/_castFunction.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ 61);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 134 */
/*!******************************************!*\
  !*** ../node_modules/lodash/uniqueId.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(/*! ./toString */ 45);

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}

module.exports = uniqueId;


/***/ }),
/* 135 */
/*!***********************************************!*\
  !*** ../node_modules/@sentry/utils/object.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = __webpack_require__(/*! ./is */ 62);
var memo_1 = __webpack_require__(/*! ./memo */ 199);
var string_1 = __webpack_require__(/*! ./string */ 170);
/**
 * Serializes the given object into a string.
 * Like JSON.stringify, but doesn't throw on circular references.
 *
 * @param object A JSON-serializable object.
 * @returns A string containing the serialized object.
 */
function serialize(object) {
    return JSON.stringify(object, serializer({ normalize: false }));
}
exports.serialize = serialize;
/**
 * Deserializes an object from a string previously serialized with
 * {@link serialize}.
 *
 * @param str A serialized object.
 * @returns The deserialized object.
 */
function deserialize(str) {
    return JSON.parse(str);
}
exports.deserialize = deserialize;
/**
 * Creates a deep copy of the given object.
 *
 * The object must be serializable, i.e.:
 *  - It must not contain any cycles
 *  - Only primitive types are allowed (object, array, number, string, boolean)
 *  - Its depth should be considerably low for performance reasons
 *
 * @param object A JSON-serializable object.
 * @returns The object clone.
 */
function clone(object) {
    return deserialize(serialize(object));
}
exports.clone = clone;
/**
 * Wrap a given object method with a higher-order function
 *
 * @param source An object that contains a method to be wrapped.
 * @param name A name of method to be wrapped.
 * @param replacement A function that should be used to wrap a given method.
 * @returns void
 */
function fill(source, name, replacement) {
    if (!(name in source) || source[name].__sentry__) {
        return;
    }
    var original = source[name];
    var wrapped = replacement(original);
    // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
    // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
    // tslint:disable-next-line:strict-type-predicates
    if (typeof wrapped === 'function') {
        wrapped.prototype = wrapped.prototype || {};
        Object.defineProperties(wrapped, {
            __sentry__: {
                enumerable: false,
                value: true,
            },
            __sentry_original__: {
                enumerable: false,
                value: original,
            },
            __sentry_wrapped__: {
                enumerable: false,
                value: wrapped,
            },
        });
    }
    source[name] = wrapped;
}
exports.fill = fill;
/**
 * Encodes given object into url-friendly format
 *
 * @param object An object that contains serializable values
 * @returns string Encoded
 */
function urlEncode(object) {
    return Object.keys(object)
        .map(
    // tslint:disable-next-line:no-unsafe-any
    function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(object[key]); })
        .join('&');
}
exports.urlEncode = urlEncode;
// Default Node.js REPL depth
var MAX_SERIALIZE_EXCEPTION_DEPTH = 3;
// 100kB, as 200kB is max payload size, so half sounds reasonable
var MAX_SERIALIZE_EXCEPTION_SIZE = 100 * 1024;
var MAX_SERIALIZE_KEYS_LENGTH = 40;
/** JSDoc */
function utf8Length(value) {
    // tslint:disable-next-line:no-bitwise
    return ~-encodeURI(value).split(/%..|./).length;
}
/** JSDoc */
function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
}
/** JSDoc */
function serializeValue(value) {
    var type = Object.prototype.toString.call(value);
    // Node.js REPL notation
    if (typeof value === 'string') {
        return string_1.truncate(value, 40);
    }
    else if (type === '[object Object]') {
        return '[Object]';
    }
    else if (type === '[object Array]') {
        return '[Array]';
    }
    else {
        var normalized = normalizeValue(value);
        return is_1.isPrimitive(normalized) ? "" + normalized : type;
    }
}
/** JSDoc */
function serializeObject(value, depth) {
    if (depth === 0) {
        return serializeValue(value);
    }
    if (is_1.isPlainObject(value)) {
        var serialized_1 = {};
        var val_1 = value;
        Object.keys(val_1).forEach(function (key) {
            serialized_1[key] = serializeObject(val_1[key], depth - 1);
        });
        return serialized_1;
    }
    else if (is_1.isArray(value)) {
        var val = value;
        return val.map(function (v) { return serializeObject(v, depth - 1); });
    }
    return serializeValue(value);
}
exports.serializeObject = serializeObject;
/** JSDoc */
function limitObjectDepthToSize(object, depth, maxSize) {
    if (depth === void 0) { depth = MAX_SERIALIZE_EXCEPTION_DEPTH; }
    if (maxSize === void 0) { maxSize = MAX_SERIALIZE_EXCEPTION_SIZE; }
    var serialized = serializeObject(object, depth);
    if (jsonSize(serialize(serialized)) > maxSize) {
        return limitObjectDepthToSize(object, depth - 1);
    }
    return serialized;
}
exports.limitObjectDepthToSize = limitObjectDepthToSize;
/** JSDoc */
function serializeKeysToEventMessage(keys, maxLength) {
    if (maxLength === void 0) { maxLength = MAX_SERIALIZE_KEYS_LENGTH; }
    if (!keys.length) {
        return '[object has no keys]';
    }
    if (keys[0].length >= maxLength) {
        return string_1.truncate(keys[0], maxLength);
    }
    for (var includedKeys = keys.length; includedKeys > 0; includedKeys--) {
        var serialized = keys.slice(0, includedKeys).join(', ');
        if (serialized.length > maxLength) {
            continue;
        }
        if (includedKeys === keys.length) {
            return serialized;
        }
        return string_1.truncate(serialized, maxLength);
    }
    return '';
}
exports.serializeKeysToEventMessage = serializeKeysToEventMessage;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
/** JSDoc */
function assign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    var to = Object(target);
    // tslint:disable-next-line:prefer-for-of
    for (var i = 0; i < args.length; i++) {
        var source = args[i];
        if (source !== null) {
            for (var nextKey in source) {
                if (Object.prototype.hasOwnProperty.call(source, nextKey)) {
                    to[nextKey] = source[nextKey];
                }
            }
        }
    }
    return to;
}
exports.assign = assign;
/**
 * Transforms Error object into an object literal with all it's attributes
 * attached to it.
 *
 * Based on: https://github.com/ftlabs/js-abbreviate/blob/fa709e5f139e7770a71827b1893f22418097fbda/index.js#L95-L106
 *
 * @param error An Error containing all relevant information
 * @returns An object with all error properties
 */
function objectifyError(error) {
    // These properties are implemented as magical getters and don't show up in `for-in` loop
    var err = {
        message: error.message,
        name: error.name,
        stack: error.stack,
    };
    for (var i in error) {
        if (Object.prototype.hasOwnProperty.call(error, i)) {
            err[i] = error[i];
        }
    }
    return err;
}
/**
 * normalizeValue()
 *
 * Takes unserializable input and make it serializable friendly
 *
 * - translates undefined/NaN values to "[undefined]"/"[NaN]" respectively,
 * - serializes Error objects
 * - filter global objects
 */
function normalizeValue(value, key) {
    if (key === 'domain' && typeof value === 'object' && value._events) {
        return '[Domain]';
    }
    if (key === 'domainEmitter') {
        return '[DomainEmitter]';
    }
    if (typeof global !== 'undefined' && value === global) {
        return '[Global]';
    }
    if (typeof window !== 'undefined' && value === window) {
        return '[Window]';
    }
    if (typeof document !== 'undefined' && value === document) {
        return '[Document]';
    }
    // tslint:disable-next-line:strict-type-predicates
    if (typeof Event !== 'undefined' && value instanceof Event) {
        return Object.getPrototypeOf(value) ? value.constructor.name : 'Event';
    }
    // React's SyntheticEvent thingy
    if (is_1.isSyntheticEvent(value)) {
        return '[SyntheticEvent]';
    }
    if (is_1.isNaN(value)) {
        return '[NaN]';
    }
    if (is_1.isUndefined(value)) {
        return '[undefined]';
    }
    if (typeof value === 'function') {
        return "[Function: " + (value.name || '<unknown-function-name>') + "]";
    }
    return value;
}
/**
 * Decycles an object to make it safe for json serialization.
 *
 * @param obj Object to be decycled
 * @param memo Optional Memo class handling decycling
 */
function decycle(obj, depth, memo) {
    if (depth === void 0) { depth = +Infinity; }
    if (memo === void 0) { memo = new memo_1.Memo(); }
    if (depth === 0) {
        return serializeValue(obj);
    }
    // If an object was normalized to its string form, we should just bail out as theres no point in going down that branch
    var normalized = normalizeValue(obj);
    if (is_1.isPrimitive(normalized)) {
        return normalized;
    }
    // tslint:disable-next-line:no-unsafe-any
    var source = (is_1.isError(obj) ? objectifyError(obj) : obj);
    var copy = is_1.isArray(obj) ? [] : {};
    if (memo.memoize(obj)) {
        return '[Circular ~]';
    }
    for (var key in source) {
        // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
        if (!Object.prototype.hasOwnProperty.call(source, key)) {
            continue;
        }
        copy[key] = decycle(source[key], depth - 1, memo);
    }
    memo.unmemoize(obj);
    return copy;
}
exports.decycle = decycle;
/**
 * serializer()
 *
 * Remove circular references,
 * translates undefined/NaN values to "[undefined]"/"[NaN]" respectively,
 * and takes care of Error objects serialization
 */
function serializer(options) {
    if (options === void 0) { options = { normalize: true }; }
    return function (key, value) {
        // tslint:disable-next-line
        return options.normalize ? normalizeValue(decycle(value, options.depth), key) : decycle(value, options.depth);
    };
}
/**
 * safeNormalize()
 *
 * Creates a copy of the input by applying serializer function on it and parsing it back to unify the data
 */
function safeNormalize(input, depth) {
    try {
        return JSON.parse(JSON.stringify(input, serializer({ normalize: true, depth: depth })));
    }
    catch (_oO) {
        return '**non-serializable**';
    }
}
exports.safeNormalize = safeNormalize;
//# sourceMappingURL=object.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 35)))

/***/ }),
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */
/*!**************************************************!*\
  !*** ../node_modules/@sentry/core/dist/error.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 10);
/** An error emitted by Sentry SDKs and related utilities. */
var SentryError = /** @class */ (function (_super) {
    tslib_1.__extends(SentryError, _super);
    function SentryError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.message = message;
        // tslint:disable:no-unsafe-any
        _this.name = _newTarget.prototype.constructor.name;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return SentryError;
}(Error));
exports.SentryError = SentryError;
//# sourceMappingURL=error.js.map

/***/ }),
/* 170 */
/*!***********************************************!*\
  !*** ../node_modules/@sentry/utils/string.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = __webpack_require__(/*! ./is */ 62);
/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
function truncate(str, max) {
    if (max === void 0) { max = 0; }
    if (max === 0 || !is_1.isString(str)) {
        return str;
    }
    return str.length <= max ? str : str.substr(0, max) + "...";
}
exports.truncate = truncate;
/**
 * This is basically just `trim_line` from
 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
function snipLine(line, colno) {
    var newLine = line;
    var ll = newLine.length;
    if (ll <= 150) {
        return newLine;
    }
    if (colno > ll) {
        colno = ll; // tslint:disable-line:no-parameter-reassignment
    }
    var start = Math.max(colno - 60, 0);
    if (start < 5) {
        start = 0;
    }
    var end = Math.min(start + 140, ll);
    if (end > ll - 5) {
        end = ll;
    }
    if (end === ll) {
        start = Math.max(end - 140, 0);
    }
    newLine = newLine.slice(start, end);
    if (start > 0) {
        newLine = "'{snip} " + newLine;
    }
    if (end < ll) {
        newLine += ' {snip}';
    }
    return newLine;
}
exports.snipLine = snipLine;
/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */
function safeJoin(input, delimiter) {
    if (!Array.isArray(input)) {
        return '';
    }
    var output = [];
    // tslint:disable-next-line:prefer-for-of
    for (var i = 0; i < input.length; i++) {
        var value = input[i];
        try {
            output.push(String(value));
        }
        catch (e) {
            output.push('[value cannot be serialized]');
        }
    }
    return output.join(delimiter);
}
exports.safeJoin = safeJoin;
/**
 * Checks if given value is included in the target
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#Polyfill
 * @param target source string
 * @param search string to be looked for
 * @returns An answer
 */
function includes(target, search) {
    if (search.length > target.length) {
        return false;
    }
    else {
        return target.indexOf(search) !== -1;
    }
}
exports.includes = includes;
//# sourceMappingURL=string.js.map

/***/ }),
/* 171 */
/*!************************************************!*\
  !*** ../node_modules/@sentry/core/dist/dsn.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 10);
var is_1 = __webpack_require__(/*! @sentry/utils/is */ 62);
var object_1 = __webpack_require__(/*! @sentry/utils/object */ 135);
var error_1 = __webpack_require__(/*! ./error */ 169);
/** Regular expression used to parse a Dsn. */
var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/;
/** The Sentry Dsn, identifying a Sentry instance and project. */
var Dsn = /** @class */ (function () {
    /** Creates a new Dsn component */
    function Dsn(from) {
        if (typeof from === 'string') {
            this.fromString(from);
        }
        else {
            this.fromComponents(from);
        }
        this.validate();
    }
    /**
     * Renders the string representation of this Dsn.
     *
     * By default, this will render the public representation without the password
     * component. To get the deprecated private representation, set `withPassword`
     * to true.
     *
     * @param withPassword When set to true, the password will be included.
     */
    Dsn.prototype.toString = function (withPassword) {
        if (withPassword === void 0) { withPassword = false; }
        // tslint:disable-next-line:no-this-assignment
        var _a = this, host = _a.host, path = _a.path, pass = _a.pass, port = _a.port, projectId = _a.projectId, protocol = _a.protocol, user = _a.user;
        return (protocol + "://" + user + (withPassword && pass ? ":" + pass : '') +
            ("@" + host + (port ? ":" + port : '') + "/" + (path ? path + "/" : path) + projectId));
    };
    /** Parses a string into this Dsn. */
    Dsn.prototype.fromString = function (str) {
        var match = DSN_REGEX.exec(str);
        if (!match) {
            throw new error_1.SentryError('Invalid Dsn');
        }
        var _a = tslib_1.__read(match.slice(1), 6), protocol = _a[0], user = _a[1], _b = _a[2], pass = _b === void 0 ? '' : _b, host = _a[3], _c = _a[4], port = _c === void 0 ? '' : _c, lastPath = _a[5];
        var path = '';
        var projectId = lastPath;
        var split = projectId.split('/');
        if (split.length > 1) {
            path = split.slice(0, -1).join('/');
            projectId = split.pop();
        }
        object_1.assign(this, { host: host, pass: pass, path: path, projectId: projectId, port: port, protocol: protocol, user: user });
    };
    /** Maps Dsn components into this instance. */
    Dsn.prototype.fromComponents = function (components) {
        this.protocol = components.protocol;
        this.user = components.user;
        this.pass = components.pass || '';
        this.host = components.host;
        this.port = components.port || '';
        this.path = components.path || '';
        this.projectId = components.projectId;
    };
    /** Validates this Dsn and throws on error. */
    Dsn.prototype.validate = function () {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(['protocol', 'user', 'host', 'projectId']), _c = _b.next(); !_c.done; _c = _b.next()) {
                var component = _c.value;
                if (!this[component]) {
                    throw new error_1.SentryError("Invalid Dsn: Missing " + component);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (this.protocol !== 'http' && this.protocol !== 'https') {
            throw new error_1.SentryError("Invalid Dsn: Unsupported protocol \"" + this.protocol + "\"");
        }
        if (this.port && is_1.isNaN(parseInt(this.port, 10))) {
            throw new error_1.SentryError("Invalid Dsn: Invalid port number \"" + this.port + "\"");
        }
    };
    return Dsn;
}());
exports.Dsn = Dsn;
//# sourceMappingURL=dsn.js.map

/***/ }),
/* 172 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 173 */
/*!********************************!*\
  !*** ./base-lazy-component.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _moduleRegistry = __webpack_require__(/*! ./module-registry */ 37);

var _moduleRegistry2 = _interopRequireDefault(_moduleRegistry);

var _tagAppender = __webpack_require__(/*! ./tag-appender */ 184);

var _assign = __webpack_require__(/*! lodash/assign */ 185);

var _assign2 = _interopRequireDefault(_assign);

var _browser = __webpack_require__(/*! @sentry/browser */ 196);

var Sentry = _interopRequireWildcard(_browser);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseLazyComponent = function (_React$Component) {
  _inherits(BaseLazyComponent, _React$Component);

  function BaseLazyComponent(props, manifest) {
    _classCallCheck(this, BaseLazyComponent);

    var _this = _possibleConstructorReturn(this, (BaseLazyComponent.__proto__ || Object.getPrototypeOf(BaseLazyComponent)).call(this, props));

    _this.manifest = manifest;
    return _this;
  }

  _createClass(BaseLazyComponent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      _moduleRegistry2.default.notifyListeners('reactModuleContainer.componentStartLoading', this.manifest.component);
      var prepare = this.manifest.prepare ? function () {
        return _this2.manifest.prepare();
      } : function () {
        return undefined;
      };
      var filesAppenderPromise = (0, _tagAppender.filesAppender)(this.manifest.files, this.manifest.crossorigin).then(prepare, function (err) {
        console.error("filesAppender failed = " + err);
        Sentry.captureMessage("filesAppender failed = " + err);
      });
      var resolvePromise = this.manifest.resolve ? this.manifest.resolve() : Promise.resolve({});
      this.resourceLoader = Promise.all([resolvePromise, filesAppenderPromise]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            resolvedData = _ref2[0];

        _this2.resolvedData = resolvedData;
        _moduleRegistry2.default.notifyListeners('reactModuleContainer.componentReady', _this2.manifest.component);
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.manifest.unloadStylesOnDestroy !== false) {
        (0, _tagAppender.unloadStyles)(document, this.manifest.files);
      }
      _moduleRegistry2.default.notifyListeners('reactModuleContainer.componentWillUnmount', this.manifest.component);
    }
  }, {
    key: 'mergedProps',
    get: function get() {
      return (0, _assign2.default)({}, this.props, this.resolvedData);
    }
  }]);

  return BaseLazyComponent;
}(_react2.default.Component);

exports.default = BaseLazyComponent;

/***/ }),
/* 174 */
/*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 175 */
/*!*************************************************!*\
  !*** ../node_modules/@sentry/hub/dist/scope.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 10);
var misc_1 = __webpack_require__(/*! @sentry/utils/misc */ 72);
var object_1 = __webpack_require__(/*! @sentry/utils/object */ 135);
/**
 * Holds additional event information. {@link Scope.applyToEvent} will be
 * called by the client before an event will be sent.
 */
var Scope = /** @class */ (function () {
    function Scope() {
        /** Flag if notifiying is happening. */
        this.notifyingListeners = false;
        /** Callback for client to receive scope changes. */
        this.scopeListeners = [];
        /** Callback list that will be called after {@link applyToEvent}. */
        this.eventProcessors = [];
        /** Array of breadcrumbs. */
        this.breadcrumbs = [];
        /** User */
        this.user = {};
        /** Tags */
        this.tags = {};
        /** Extra */
        this.extra = {};
    }
    /** Add internal on change listener. */
    Scope.prototype.addScopeListener = function (callback) {
        this.scopeListeners.push(callback);
    };
    /** Add new event processor that will be called after {@link applyToEvent}. */
    Scope.prototype.addEventProcessor = function (callback) {
        this.eventProcessors.push(callback);
        return this;
    };
    /**
     * This will be called on every set call.
     */
    Scope.prototype.notifyScopeListeners = function () {
        var _this = this;
        if (!this.notifyingListeners) {
            this.notifyingListeners = true;
            setTimeout(function () {
                _this.scopeListeners.forEach(function (callback) {
                    callback(_this);
                });
                _this.notifyingListeners = false;
            });
        }
    };
    /**
     * This will be called after {@link applyToEvent} is finished.
     */
    Scope.prototype.notifyEventProcessors = function (event, hint) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1, _a, processedEvent, _b, _c, processor, e_2, e_1_1;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        processedEvent = event;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 8, 9, 10]);
                        _b = tslib_1.__values(tslib_1.__spread(getGlobalEventProcessors(), this.eventProcessors)), _c = _b.next();
                        _d.label = 2;
                    case 2:
                        if (!!_c.done) return [3 /*break*/, 7];
                        processor = _c.value;
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, processor(tslib_1.__assign({}, processedEvent), hint)];
                    case 4:
                        processedEvent = _d.sent();
                        if (processedEvent === null) {
                            return [2 /*return*/, null];
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        e_2 = _d.sent();
                        return [3 /*break*/, 6];
                    case 6:
                        _c = _b.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/, processedEvent];
                }
            });
        });
    };
    /**
     * Updates user context information for future events.
     * @param user User context object to be set in the current context.
     */
    Scope.prototype.setUser = function (user) {
        this.user = object_1.safeNormalize(user);
        this.notifyScopeListeners();
        return this;
    };
    /**
     * Updates tags context information for future events.
     * @param tags Tags context object to merge into current context.
     */
    Scope.prototype.setTag = function (key, value) {
        var _a;
        this.tags = tslib_1.__assign({}, this.tags, (_a = {}, _a[key] = object_1.safeNormalize(value), _a));
        this.notifyScopeListeners();
        return this;
    };
    /**
     * Updates extra context information for future events.
     * @param extra context object to merge into current context.
     */
    Scope.prototype.setExtra = function (key, extra) {
        var _a;
        this.extra = tslib_1.__assign({}, this.extra, (_a = {}, _a[key] = object_1.safeNormalize(extra), _a));
        this.notifyScopeListeners();
        return this;
    };
    /**
     * Sets the fingerprint on the scope to send with the events.
     * @param fingerprint string[] to group events in Sentry.
     */
    Scope.prototype.setFingerprint = function (fingerprint) {
        this.fingerprint = object_1.safeNormalize(fingerprint);
        this.notifyScopeListeners();
        return this;
    };
    /**
     * Sets the level on the scope for future events.
     * @param level string {@link Severity}
     */
    Scope.prototype.setLevel = function (level) {
        this.level = object_1.safeNormalize(level);
        this.notifyScopeListeners();
        return this;
    };
    /**
     * Inherit values from the parent scope.
     * @param scope to clone.
     */
    Scope.clone = function (scope) {
        var newScope = new Scope();
        object_1.assign(newScope, scope, {
            scopeListeners: [],
        });
        if (scope) {
            newScope.extra = object_1.assign(scope.extra);
            newScope.tags = object_1.assign(scope.tags);
            newScope.breadcrumbs = tslib_1.__spread(scope.breadcrumbs);
            newScope.eventProcessors = tslib_1.__spread(scope.eventProcessors);
        }
        return newScope;
    };
    /** Clears the current scope and resets its properties. */
    Scope.prototype.clear = function () {
        this.breadcrumbs = [];
        this.tags = {};
        this.extra = {};
        this.user = {};
        this.level = undefined;
        this.fingerprint = undefined;
        this.notifyScopeListeners();
    };
    /**
     * Sets the breadcrumbs in the scope
     * @param breadcrumbs Breadcrumb
     * @param maxBreadcrumbs number of max breadcrumbs to merged into event.
     */
    Scope.prototype.addBreadcrumb = function (breadcrumb, maxBreadcrumbs) {
        this.breadcrumbs =
            maxBreadcrumbs !== undefined && maxBreadcrumbs >= 0
                ? tslib_1.__spread(this.breadcrumbs, [object_1.safeNormalize(breadcrumb)]).slice(-maxBreadcrumbs)
                : tslib_1.__spread(this.breadcrumbs, [object_1.safeNormalize(breadcrumb)]);
        this.notifyScopeListeners();
    };
    /**
     * Applies fingerprint from the scope to the event if there's one,
     * uses message if there's one instead or get rid of empty fingerprint
     */
    Scope.prototype.applyFingerprint = function (event) {
        // Make sure it's an array first and we actually have something in place
        event.fingerprint = event.fingerprint
            ? Array.isArray(event.fingerprint)
                ? event.fingerprint
                : [event.fingerprint]
            : [];
        // If we have something on the scope, then merge it with event
        if (this.fingerprint) {
            event.fingerprint = event.fingerprint.concat(this.fingerprint);
        }
        else if (event.message) {
            // If not, but we have message, use it instead
            event.fingerprint = event.fingerprint.concat(event.message);
        }
        // If we have no data at all, remove empty array default
        if (event.fingerprint && !event.fingerprint.length) {
            delete event.fingerprint;
        }
    };
    /**
     * Applies the current context and fingerprint to the event.
     * Note that breadcrumbs will be added by the client.
     * Also if the event has already breadcrumbs on it, we do not merge them.
     * @param event SentryEvent
     * @param hint May contain additional informartion about the original exception.
     * @param maxBreadcrumbs number of max breadcrumbs to merged into event.
     */
    Scope.prototype.applyToEvent = function (event, hint, maxBreadcrumbs) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var hasNoBreadcrumbs;
            return tslib_1.__generator(this, function (_a) {
                if (this.extra && Object.keys(this.extra).length) {
                    event.extra = tslib_1.__assign({}, this.extra, event.extra);
                }
                if (this.tags && Object.keys(this.tags).length) {
                    event.tags = tslib_1.__assign({}, this.tags, event.tags);
                }
                if (this.user && Object.keys(this.user).length) {
                    event.user = tslib_1.__assign({}, this.user, event.user);
                }
                if (this.level) {
                    event.level = this.level;
                }
                this.applyFingerprint(event);
                hasNoBreadcrumbs = !event.breadcrumbs || event.breadcrumbs.length === 0;
                if (hasNoBreadcrumbs && this.breadcrumbs.length > 0) {
                    event.breadcrumbs =
                        maxBreadcrumbs !== undefined && maxBreadcrumbs >= 0
                            ? this.breadcrumbs.slice(-maxBreadcrumbs)
                            : this.breadcrumbs;
                }
                return [2 /*return*/, this.notifyEventProcessors(event, hint)];
            });
        });
    };
    return Scope;
}());
exports.Scope = Scope;
/**
 * Retruns the global event processors.
 */
function getGlobalEventProcessors() {
    var global = misc_1.getGlobalObject();
    global.__SENTRY__ = global.__SENTRY__ || {};
    global.__SENTRY__.globalEventProcessors = global.__SENTRY__.globalEventProcessors || [];
    return global.__SENTRY__.globalEventProcessors;
}
/**
 * Add a EventProcessor to be kept globally.
 * @param callback EventProcessor to add
 */
function addGlobalEventProcessor(callback) {
    getGlobalEventProcessors().push(callback);
}
exports.addGlobalEventProcessor = addGlobalEventProcessor;
//# sourceMappingURL=scope.js.map

/***/ }),
/* 176 */
/*!***************************************************!*\
  !*** ../node_modules/@sentry/types/dist/index.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** JSDoc */
var Severity;
(function (Severity) {
    /** JSDoc */
    Severity["Fatal"] = "fatal";
    /** JSDoc */
    Severity["Error"] = "error";
    /** JSDoc */
    Severity["Warning"] = "warning";
    /** JSDoc */
    Severity["Log"] = "log";
    /** JSDoc */
    Severity["Info"] = "info";
    /** JSDoc */
    Severity["Debug"] = "debug";
    /** JSDoc */
    Severity["Critical"] = "critical";
})(Severity = exports.Severity || (exports.Severity = {}));
// tslint:disable:no-unnecessary-qualifier no-namespace
(function (Severity) {
    /**
     * Converts a string-based level into a {@link Severity}.
     *
     * @param level string representation of Severity
     * @returns Severity
     */
    function fromString(level) {
        switch (level) {
            case 'debug':
                return Severity.Debug;
            case 'info':
                return Severity.Info;
            case 'warn':
            case 'warning':
                return Severity.Warning;
            case 'error':
                return Severity.Error;
            case 'fatal':
                return Severity.Fatal;
            case 'critical':
                return Severity.Critical;
            case 'log':
            default:
                return Severity.Log;
        }
    }
    Severity.fromString = fromString;
})(Severity = exports.Severity || (exports.Severity = {}));
/** The status of an event. */
var Status;
(function (Status) {
    /** The status could not be determined. */
    Status["Unknown"] = "unknown";
    /** The event was skipped due to configuration or callbacks. */
    Status["Skipped"] = "skipped";
    /** The event was sent to Sentry successfully. */
    Status["Success"] = "success";
    /** The client is currently rate limited and will try again later. */
    Status["RateLimit"] = "rate_limit";
    /** The event could not be processed. */
    Status["Invalid"] = "invalid";
    /** A server-side error ocurred during submission. */
    Status["Failed"] = "failed";
})(Status = exports.Status || (exports.Status = {}));
// tslint:disable:no-unnecessary-qualifier no-namespace
(function (Status) {
    /**
     * Converts a HTTP status code into a {@link Status}.
     *
     * @param code The HTTP response status code.
     * @returns The send status or {@link Status.Unknown}.
     */
    function fromHttpCode(code) {
        if (code >= 200 && code < 300) {
            return Status.Success;
        }
        if (code === 429) {
            return Status.RateLimit;
        }
        if (code >= 400 && code < 500) {
            return Status.Invalid;
        }
        if (code >= 500) {
            return Status.Failed;
        }
        return Status.Unknown;
    }
    Status.fromHttpCode = fromHttpCode;
})(Status = exports.Status || (exports.Status = {}));
//# sourceMappingURL=index.js.map

/***/ }),
/* 177 */
/*!**********************************************************!*\
  !*** ../node_modules/@sentry/core/dist/promisebuffer.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 10);
var error_1 = __webpack_require__(/*! ./error */ 169);
/** A simple queue that holds promises. */
var PromiseBuffer = /** @class */ (function () {
    function PromiseBuffer(limit) {
        this.limit = limit;
        /** Internal set of queued Promises */
        this.buffer = [];
    }
    /**
     * Says if the buffer is ready to take more requests
     */
    PromiseBuffer.prototype.isReady = function () {
        return this.limit === undefined || this.length() < this.limit;
    };
    /**
     * Add a promise to the queue.
     *
     * @param task Can be any Promise<T>
     * @returns The original promise.
     */
    PromiseBuffer.prototype.add = function (task) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                if (!this.isReady()) {
                    return [2 /*return*/, Promise.reject(new error_1.SentryError('Not adding Promise due to buffer limit reached.'))];
                }
                if (this.buffer.indexOf(task) === -1) {
                    this.buffer.push(task);
                }
                task
                    .then(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    return [2 /*return*/, this.remove(task)];
                }); }); })
                    .catch(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    return tslib_1.__generator(this, function (_a) {
                        return [2 /*return*/, this.remove(task).catch(function () {
                                // We have to add this catch here otherwise we have an unhandledPromiseRejection
                                // because it's a new Promise chain.
                            })];
                    });
                }); });
                return [2 /*return*/, task];
            });
        });
    };
    /**
     * Remove a promise to the queue.
     *
     * @param task Can be any Promise<T>
     * @returns Removed promise.
     */
    PromiseBuffer.prototype.remove = function (task) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var removedTask;
            return tslib_1.__generator(this, function (_a) {
                removedTask = this.buffer.splice(this.buffer.indexOf(task), 1)[0];
                return [2 /*return*/, removedTask];
            });
        });
    };
    /**
     * This function returns the number of unresolved promises in the queue.
     */
    PromiseBuffer.prototype.length = function () {
        return this.buffer.length;
    };
    /**
     * This will drain the whole queue, returns true if queue is empty or drained.
     * If timeout is provided and the queue takes longer to drain, the promise still resolves but with false.
     *
     * @param timeout Number in ms to wait until it resolves with false.
     */
    PromiseBuffer.prototype.drain = function (timeout) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var capturedSetTimeout = setTimeout(function () {
                            if (timeout && timeout > 0) {
                                resolve(false);
                            }
                        }, timeout);
                        Promise.all(_this.buffer)
                            .then(function () {
                            clearTimeout(capturedSetTimeout);
                            resolve(true);
                        })
                            .catch(function () {
                            resolve(true);
                        });
                    })];
            });
        });
    };
    return PromiseBuffer;
}());
exports.PromiseBuffer = PromiseBuffer;
//# sourceMappingURL=promisebuffer.js.map

/***/ }),
/* 178 */
/*!************************************************************!*\
  !*** ../node_modules/@sentry/core/dist/transports/noop.js ***!
  \************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 10);
var types_1 = __webpack_require__(/*! @sentry/types */ 176);
/** Noop transport */
var NoopTransport = /** @class */ (function () {
    function NoopTransport() {
    }
    /**
     * @inheritDoc
     */
    NoopTransport.prototype.sendEvent = function (_) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve({
                        reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                        status: types_1.Status.Skipped,
                    })];
            });
        });
    };
    /**
     * @inheritDoc
     */
    NoopTransport.prototype.close = function (_) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(true)];
            });
        });
    };
    return NoopTransport;
}());
exports.NoopTransport = NoopTransport;
//# sourceMappingURL=noop.js.map

/***/ }),
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */
/*!***********************************!*\
  !*** ./react-module-container.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _moduleRegistry = __webpack_require__(/*! ./module-registry */ 37);

var _moduleRegistry2 = _interopRequireDefault(_moduleRegistry);

var _reactLazyComponent = __webpack_require__(/*! ./react-lazy-component */ 183);

var _reactLazyComponent2 = _interopRequireDefault(_reactLazyComponent);

var _angularLazyComponent = __webpack_require__(/*! ./angular-lazy-component */ 217);

var _angularLazyComponent2 = _interopRequireDefault(_angularLazyComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.ModuleRegistry = _moduleRegistry2.default;
window.ReactLazyComponent = _reactLazyComponent2.default;
window.AngularLazyComponent = _angularLazyComponent2.default;

/***/ }),
/* 183 */
/*!*********************************!*\
  !*** ./react-lazy-component.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _moduleRegistry = __webpack_require__(/*! ./module-registry */ 37);

var _moduleRegistry2 = _interopRequireDefault(_moduleRegistry);

var _baseLazyComponent = __webpack_require__(/*! ./base-lazy-component */ 173);

var _baseLazyComponent2 = _interopRequireDefault(_baseLazyComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactLazyComponent = function (_BaseLazyComponent) {
  _inherits(ReactLazyComponent, _BaseLazyComponent);

  function ReactLazyComponent(props, manifest) {
    _classCallCheck(this, ReactLazyComponent);

    var _this = _possibleConstructorReturn(this, (ReactLazyComponent.__proto__ || Object.getPrototypeOf(ReactLazyComponent)).call(this, props, manifest));

    _this.state = { component: null };
    return _this;
  }

  _createClass(ReactLazyComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.resourceLoader.then(function () {
        var component = _moduleRegistry2.default.component(_this2.manifest.component);
        _this2.setState({ component: component });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.state.component ? _react2.default.createElement(this.state.component, this.mergedProps) : null;
    }
  }]);

  return ReactLazyComponent;
}(_baseLazyComponent2.default);

exports.default = ReactLazyComponent;

/***/ }),
/* 184 */
/*!*************************!*\
  !*** ./tag-appender.js ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createLinkElement = createLinkElement;
exports.createScriptElement = createScriptElement;
exports.tagAppender = tagAppender;
exports.filesAppender = filesAppender;
exports.unloadStyles = unloadStyles;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var requireCache = {};

function noprotocol(url) {
  return url.replace(/^.*:\/\//, '//');
}

function createLinkElement(url) {
  var fileref = document.createElement('LINK');
  fileref.setAttribute('rel', 'stylesheet');
  fileref.setAttribute('type', 'text/css');
  fileref.setAttribute('href', url);
  return fileref;
}

function createScriptElement(url, crossorigin) {
  var fileref = document.createElement('SCRIPT');
  fileref.setAttribute('type', 'text/javascript');
  fileref.setAttribute('src', url);
  if (crossorigin) {
    fileref.setAttribute('crossorigin', 'anonymous');
  }
  return fileref;
}

function tagAppender(url, filetype, crossorigin) {
  var styleSheets = document.styleSheets;
  return requireCache[url] = new Promise(function (resolve, reject) {
    if (window.requirejs && filetype === 'js') {
      window.requirejs([url], resolve, reject);
      return;
    } else if (url in requireCache) {
      // requireCache[url].then(resolve, reject);
      // return;
    }

    var fileref = filetype === 'css' ? createLinkElement(url) : createScriptElement(url, crossorigin);

    var done = false;
    document.getElementsByTagName('head')[0].appendChild(fileref);
    fileref.onerror = function () {
      fileref.onerror = fileref.onload = fileref.onreadystatechange = null;
      delete requireCache[url];
      console.error('onerror called for ' + url);
      reject(url);
    };
    fileref.onload = fileref.onreadystatechange = function () {
      if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
        done = true;
        fileref.onerror = fileref.onload = fileref.onreadystatechange = null;
        resolve();
      }
    };
    if (filetype === 'css' && navigator.userAgent.match(' Safari/') && !navigator.userAgent.match(' Chrom') && navigator.userAgent.match(' Version/5.')) {
      var attempts = 20;
      var interval = setInterval(function () {
        for (var i = 0; i < styleSheets.length; i++) {
          if (noprotocol('' + styleSheets[i].href) === noprotocol(url)) {
            clearInterval(interval);
            fileref.onload();
            return;
          }
        }
        if (--attempts === 0) {
          clearInterval(interval);
          fileref.onerror();
        }
      }, 50);
    }
  });
}

function append(file, crossorigin) {
  return tagAppender(file, file.split('.').pop(), crossorigin);
}

function filesAppender(files, crossorigin) {
  return Promise.all(files.map(function (file) {
    if (Array.isArray(file)) {
      return file.reduce(function (promise, next) {
        return promise.then(function () {
          return append(next, crossorigin);
        });
      }, Promise.resolve());
    } else {
      return append(file, crossorigin);
    }
  }));
}

var getStyleSheetLinks = function getStyleSheetLinks(document) {
  return [].concat(_toConsumableArray(document.querySelectorAll('link'))).filter(function (link) {
    return link.rel === 'stylesheet' && link.href;
  }).reduceRight(function (acc, curr) {
    return _extends({}, acc, _defineProperty({}, noprotocol(curr.href), curr));
  }, {});
};

var getStyleSheetUrls = function getStyleSheetUrls(files) {
  var _ref;

  return (_ref = []).concat.apply(_ref, _toConsumableArray(files)).filter(function (file) {
    return file.endsWith('.css');
  }).map(function (file) {
    return noprotocol(file);
  });
};

function unloadStyles(document, files) {
  var links = getStyleSheetLinks(document);
  getStyleSheetUrls(files).forEach(function (file) {
    var link = links[file];
    if (link) {
      link.parentNode.removeChild(link);
    }
  });
}

/***/ }),
/* 185 */
/*!****************************************!*\
  !*** ../node_modules/lodash/assign.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ 60),
    copyObject = __webpack_require__(/*! ./_copyObject */ 186),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ 187),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 36),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ 70),
    keys = __webpack_require__(/*! ./keys */ 69);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),
/* 186 */
/*!*********************************************!*\
  !*** ../node_modules/lodash/_copyObject.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ 60),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 67);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 187 */
/*!*************************************************!*\
  !*** ../node_modules/lodash/_createAssigner.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ 188),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ 195);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 188 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_baseRest.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ 61),
    overRest = __webpack_require__(/*! ./_overRest */ 189),
    setToString = __webpack_require__(/*! ./_setToString */ 191);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 189 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_overRest.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ 190);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 190 */
/*!****************************************!*\
  !*** ../node_modules/lodash/_apply.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 191 */
/*!**********************************************!*\
  !*** ../node_modules/lodash/_setToString.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ 192),
    shortOut = __webpack_require__(/*! ./_shortOut */ 194);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 192 */
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseSetToString.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ 193),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ 68),
    identity = __webpack_require__(/*! ./identity */ 61);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 193 */
/*!******************************************!*\
  !*** ../node_modules/lodash/constant.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 194 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/_shortOut.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 195 */
/*!*************************************************!*\
  !*** ../node_modules/lodash/_isIterateeCall.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ 38),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 36),
    isIndex = __webpack_require__(/*! ./_isIndex */ 39),
    isObject = __webpack_require__(/*! ./isObject */ 21);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 196 */
/*!*****************************************************!*\
  !*** ../node_modules/@sentry/browser/dist/index.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_1 = __webpack_require__(/*! tslib */ 10);
var core = __webpack_require__(/*! @sentry/core */ 197);

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
/** JSDoc */
var Severity;
(function (Severity) {
    /** JSDoc */
    Severity["Fatal"] = "fatal";
    /** JSDoc */
    Severity["Error"] = "error";
    /** JSDoc */
    Severity["Warning"] = "warning";
    /** JSDoc */
    Severity["Log"] = "log";
    /** JSDoc */
    Severity["Info"] = "info";
    /** JSDoc */
    Severity["Debug"] = "debug";
    /** JSDoc */
    Severity["Critical"] = "critical";
})(Severity = exports.Severity || (exports.Severity = {}));
// tslint:disable:no-unnecessary-qualifier no-namespace
(function (Severity) {
    /**
     * Converts a string-based level into a {@link Severity}.
     *
     * @param level string representation of Severity
     * @returns Severity
     */
    function fromString(level) {
        switch (level) {
            case 'debug':
                return Severity.Debug;
            case 'info':
                return Severity.Info;
            case 'warn':
            case 'warning':
                return Severity.Warning;
            case 'error':
                return Severity.Error;
            case 'fatal':
                return Severity.Fatal;
            case 'critical':
                return Severity.Critical;
            case 'log':
            default:
                return Severity.Log;
        }
    }
    Severity.fromString = fromString;
})(Severity = exports.Severity || (exports.Severity = {}));
/** The status of an event. */
var Status;
(function (Status) {
    /** The status could not be determined. */
    Status["Unknown"] = "unknown";
    /** The event was skipped due to configuration or callbacks. */
    Status["Skipped"] = "skipped";
    /** The event was sent to Sentry successfully. */
    Status["Success"] = "success";
    /** The client is currently rate limited and will try again later. */
    Status["RateLimit"] = "rate_limit";
    /** The event could not be processed. */
    Status["Invalid"] = "invalid";
    /** A server-side error ocurred during submission. */
    Status["Failed"] = "failed";
})(Status = exports.Status || (exports.Status = {}));
// tslint:disable:no-unnecessary-qualifier no-namespace
(function (Status) {
    /**
     * Converts a HTTP status code into a {@link Status}.
     *
     * @param code The HTTP response status code.
     * @returns The send status or {@link Status.Unknown}.
     */
    function fromHttpCode(code) {
        if (code >= 200 && code < 300) {
            return Status.Success;
        }
        if (code === 429) {
            return Status.RateLimit;
        }
        if (code >= 400 && code < 500) {
            return Status.Invalid;
        }
        if (code >= 500) {
            return Status.Failed;
        }
        return Status.Unknown;
    }
    Status.fromHttpCode = fromHttpCode;
})(Status = exports.Status || (exports.Status = {}));

});

unwrapExports(dist);
var dist_1 = dist.Severity;
var dist_2 = dist.Status;

var is = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isError(wat) {
    switch (Object.prototype.toString.call(wat)) {
        case '[object Error]':
            return true;
        case '[object Exception]':
            return true;
        case '[object DOMException]':
            return true;
        default:
            return wat instanceof Error;
    }
}
exports.isError = isError;
/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isErrorEvent(wat) {
    return Object.prototype.toString.call(wat) === '[object ErrorEvent]';
}
exports.isErrorEvent = isErrorEvent;
/**
 * Checks whether given value's type is DOMError
 * {@link isDOMError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMError(wat) {
    return Object.prototype.toString.call(wat) === '[object DOMError]';
}
exports.isDOMError = isDOMError;
/**
 * Checks whether given value's type is DOMException
 * {@link isDOMException}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMException(wat) {
    return Object.prototype.toString.call(wat) === '[object DOMException]';
}
exports.isDOMException = isDOMException;
/**
 * Checks whether given value's type is an undefined
 * {@link isUndefined}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isUndefined(wat) {
    return wat === void 0;
}
exports.isUndefined = isUndefined;
/**
 * Checks whether given value's type is a function
 * {@link isFunction}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isFunction(wat) {
    return typeof wat === 'function';
}
exports.isFunction = isFunction;
/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isString(wat) {
    return Object.prototype.toString.call(wat) === '[object String]';
}
exports.isString = isString;
/**
 * Checks whether given value's is a primitive (undefined, null, number, boolean, string)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPrimitive(wat) {
    return wat === null || (typeof wat !== 'object' && typeof wat !== 'function');
}
exports.isPrimitive = isPrimitive;
/**
 * Checks whether given value's type is an array
 * {@link isArray}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isArray(wat) {
    return Object.prototype.toString.call(wat) === '[object Array]';
}
exports.isArray = isArray;
/**
 * Checks whether given value's type is an object literal
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPlainObject(wat) {
    return Object.prototype.toString.call(wat) === '[object Object]';
}
exports.isPlainObject = isPlainObject;
/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isRegExp(wat) {
    return Object.prototype.toString.call(wat) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
/**
 * Checks whether given value's type is a NaN
 * {@link isNaN}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isNaN(wat) {
    return wat !== wat;
}
exports.isNaN = isNaN;
/**
 * Checks whether given value's type is a SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isSyntheticEvent(wat) {
    // tslint:disable-next-line:no-unsafe-any
    return isPlainObject(wat) && 'nativeEvent' in wat && 'preventDefault' in wat && 'stopPropagation' in wat;
}
exports.isSyntheticEvent = isSyntheticEvent;

});

unwrapExports(is);
var is_1 = is.isError;
var is_2 = is.isErrorEvent;
var is_3 = is.isDOMError;
var is_4 = is.isDOMException;
var is_5 = is.isUndefined;
var is_6 = is.isFunction;
var is_7 = is.isString;
var is_8 = is.isPrimitive;
var is_9 = is.isArray;
var is_10 = is.isPlainObject;
var is_11 = is.isRegExp;
var is_12 = is.isNaN;
var is_13 = is.isSyntheticEvent;

var misc = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

/**
 * Requires a module which is protected against bundler minification.
 *
 * @param request The module path to resolve
 */
function dynamicRequire(mod, request) {
    return mod.require(request);
}
exports.dynamicRequire = dynamicRequire;
/**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */
function isNodeEnv() {
    // tslint:disable:strict-type-predicates
    return Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
}
exports.isNodeEnv = isNodeEnv;
var fallbackGlobalObject = {};
/**
 * Safely get global scope object
 *
 * @returns Global scope object
 */
// tslint:disable:strict-type-predicates
function getGlobalObject() {
    return isNodeEnv()
        ? commonjsGlobal
        : typeof window !== 'undefined'
            ? window
            : typeof self !== 'undefined'
                ? self
                : fallbackGlobalObject;
}
exports.getGlobalObject = getGlobalObject;
/**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */
function uuid4() {
    var global = getGlobalObject();
    var crypto = global.crypto || global.msCrypto;
    if (!(crypto === void 0) && crypto.getRandomValues) {
        // Use window.crypto API if available
        var arr = new Uint16Array(8);
        crypto.getRandomValues(arr);
        // set 4 in byte 7
        // tslint:disable-next-line:no-bitwise
        arr[3] = (arr[3] & 0xfff) | 0x4000;
        // set 2 most significant bits of byte 9 to '10'
        // tslint:disable-next-line:no-bitwise
        arr[4] = (arr[4] & 0x3fff) | 0x8000;
        var pad = function (num) {
            var v = num.toString(16);
            while (v.length < 4) {
                v = "0" + v;
            }
            return v;
        };
        return (pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]));
    }
    else {
        // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            // tslint:disable-next-line:no-bitwise
            var r = (Math.random() * 16) | 0;
            // tslint:disable-next-line:no-bitwise
            var v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}
exports.uuid4 = uuid4;
/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function htmlTreeAsString(elem) {
    var currentElem = elem;
    var MAX_TRAVERSE_HEIGHT = 5;
    var MAX_OUTPUT_LEN = 80;
    var out = [];
    var height = 0;
    var len = 0;
    var separator = ' > ';
    var sepLength = separator.length;
    var nextStr;
    while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
        nextStr = htmlElementAsString(currentElem);
        // bail out if
        // - nextStr is the 'html' element
        // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
        //   (ignore this limit if we are on the first iteration)
        if (nextStr === 'html' || (height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN)) {
            break;
        }
        out.push(nextStr);
        len += nextStr.length;
        currentElem = currentElem.parentNode;
    }
    return out.reverse().join(separator);
}
exports.htmlTreeAsString = htmlTreeAsString;
/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function htmlElementAsString(elem) {
    var out = [];
    var className;
    var classes;
    var key;
    var attr;
    var i;
    if (!elem || !elem.tagName) {
        return '';
    }
    out.push(elem.tagName.toLowerCase());
    if (elem.id) {
        out.push("#" + elem.id);
    }
    className = elem.className;
    if (className && is.isString(className)) {
        classes = className.split(/\s+/);
        for (i = 0; i < classes.length; i++) {
            out.push("." + classes[i]);
        }
    }
    var attrWhitelist = ['type', 'name', 'title', 'alt'];
    for (i = 0; i < attrWhitelist.length; i++) {
        key = attrWhitelist[i];
        attr = elem.getAttribute(key);
        if (attr) {
            out.push("[" + key + "=\"" + attr + "\"]");
        }
    }
    return out.join('');
}
exports.htmlElementAsString = htmlElementAsString;
/**
 * Parses string form of URL into an object
 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
 * // intentionally using regex and not <a/> href parsing trick because React Native and other
 * // environments where DOM might not be available
 * @returns parsed URL object
 */
function parseUrl(url) {
    if (!url) {
        return {};
    }
    var match = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!match) {
        return {};
    }
    // coerce to undefined values to empty string so we don't get 'undefined'
    var query = match[6] || '';
    var fragment = match[8] || '';
    return {
        host: match[4],
        path: match[5],
        protocol: match[2],
        relative: match[5] + query + fragment,
    };
}
exports.parseUrl = parseUrl;
/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */
function getEventDescription(event) {
    if (event.message) {
        return event.message;
    }
    else if (event.exception && event.exception.values && event.exception.values[0]) {
        var exception = event.exception.values[0];
        if (exception.type && exception.value) {
            return exception.type + ": " + exception.value;
        }
        else {
            return exception.type || exception.value || event.event_id || '<unknown>';
        }
    }
    else {
        return event.event_id || '<unknown>';
    }
}
exports.getEventDescription = getEventDescription;
/** JSDoc */
function consoleSandbox(callback) {
    var global = getGlobalObject();
    var levels = ['debug', 'info', 'warn', 'error', 'log'];
    if (!('console' in global)) {
        return callback();
    }
    var originalConsole = global.console;
    var wrappedLevels = {};
    // Restore all wrapped console methods
    levels.forEach(function (level) {
        if (level in global.console && originalConsole[level].__sentry__) {
            wrappedLevels[level] = originalConsole[level].__sentry_wrapped__;
            originalConsole[level] = originalConsole[level].__sentry_original__;
        }
    });
    // Perform callback manipulations
    var result = callback();
    // Revert restoration to wrapped state
    Object.keys(wrappedLevels).forEach(function (level) {
        originalConsole[level] = wrappedLevels[level];
    });
    return result;
}
exports.consoleSandbox = consoleSandbox;

});

unwrapExports(misc);
var misc_1 = misc.dynamicRequire;
var misc_2 = misc.isNodeEnv;
var misc_3 = misc.getGlobalObject;
var misc_4 = misc.uuid4;
var misc_5 = misc.htmlTreeAsString;
var misc_6 = misc.htmlElementAsString;
var misc_7 = misc.parseUrl;
var misc_8 = misc.getEventDescription;
var misc_9 = misc.consoleSandbox;

var supports = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

/**
 * Tells whether current environment supports ErrorEvent objects
 * {@link supportsErrorEvent}.
 *
 * @returns Answer to the given question.
 */
function supportsErrorEvent() {
    try {
        // tslint:disable:no-unused-expression
        new ErrorEvent('');
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.supportsErrorEvent = supportsErrorEvent;
/**
 * Tells whether current environment supports DOMError objects
 * {@link supportsDOMError}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMError() {
    try {
        // It really needs 1 argument, not 0.
        // Chrome: VM89:1 Uncaught TypeError: Failed to construct 'DOMError':
        // 1 argument required, but only 0 present.
        // @ts-ignore
        // tslint:disable:no-unused-expression
        new DOMError('');
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.supportsDOMError = supportsDOMError;
/**
 * Tells whether current environment supports DOMException objects
 * {@link supportsDOMException}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMException() {
    try {
        // tslint:disable:no-unused-expression
        new DOMException('');
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.supportsDOMException = supportsDOMException;
/**
 * Tells whether current environment supports Fetch API
 * {@link supportsFetch}.
 *
 * @returns Answer to the given question.
 */
function supportsFetch() {
    if (!('fetch' in misc.getGlobalObject())) {
        return false;
    }
    try {
        // tslint:disable-next-line:no-unused-expression
        new Headers();
        // tslint:disable-next-line:no-unused-expression
        new Request('');
        // tslint:disable-next-line:no-unused-expression
        new Response();
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.supportsFetch = supportsFetch;
/**
 * Tells whether current environment supports Fetch API natively
 * {@link supportsNativeFetch}.
 *
 * @returns Answer to the given question.
 */
function supportsNativeFetch() {
    if (!supportsFetch()) {
        return false;
    }
    var global = misc.getGlobalObject();
    var fetch = global.fetch;
    // tslint:disable-next-line:no-unsafe-any
    return fetch.toString().indexOf('native') !== -1;
}
exports.supportsNativeFetch = supportsNativeFetch;
/**
 * Tells whether current environment supports sendBeacon API
 * {@link supportsBeacon}.
 *
 * @returns Answer to the given question.
 */
function supportsBeacon() {
    var global = misc.getGlobalObject();
    return 'navigator' in global && 'sendBeacon' in global.navigator;
}
exports.supportsBeacon = supportsBeacon;
/**
 * Tells whether current environment supports ReportingObserver API
 * {@link supportsReportingObserver}.
 *
 * @returns Answer to the given question.
 */
function supportsReportingObserver() {
    return 'ReportingObserver' in misc.getGlobalObject();
}
exports.supportsReportingObserver = supportsReportingObserver;
/**
 * Tells whether current environment supports Referrer Policy API
 * {@link supportsReferrerPolicy}.
 *
 * @returns Answer to the given question.
 */
function supportsReferrerPolicy() {
    // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
    // https://caniuse.com/#feat=referrer-policy
    // It doesn't. And it throw exception instead of ignoring this parameter...
    // REF: https://github.com/getsentry/raven-js/issues/1233
    if (!supportsFetch()) {
        return false;
    }
    try {
        // tslint:disable:no-unused-expression
        new Request('pickleRick', {
            referrerPolicy: 'origin',
        });
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.supportsReferrerPolicy = supportsReferrerPolicy;
/**
 * Tells whether current environment supports History API
 * {@link supportsHistory}.
 *
 * @returns Answer to the given question.
 */
function supportsHistory() {
    // NOTE: in Chrome App environment, touching history.pushState, *even inside
    //       a try/catch block*, will cause Chrome to output an error to console.error
    // borrowed from: https://github.com/angular/angular.js/pull/13945/files
    var global = misc.getGlobalObject();
    var chrome = global.chrome;
    // tslint:disable-next-line:no-unsafe-any
    var isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
    var hasHistoryApi = 'history' in global && !!global.history.pushState && !!global.history.replaceState;
    return !isChromePackagedApp && hasHistoryApi;
}
exports.supportsHistory = supportsHistory;

});

unwrapExports(supports);
var supports_1 = supports.supportsErrorEvent;
var supports_2 = supports.supportsDOMError;
var supports_3 = supports.supportsDOMException;
var supports_4 = supports.supportsFetch;
var supports_5 = supports.supportsNativeFetch;
var supports_6 = supports.supportsBeacon;
var supports_7 = supports.supportsReportingObserver;
var supports_8 = supports.supportsReferrerPolicy;
var supports_9 = supports.supportsHistory;

var memo = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-unsafe-any
/**
 * Memo class used for decycle json objects. Uses WeakSet if available otherwise array.
 */
var Memo = /** @class */ (function () {
    function Memo() {
        // tslint:disable-next-line
        this.hasWeakSet = typeof WeakSet === 'function';
        this.inner = this.hasWeakSet ? new WeakSet() : [];
    }
    /**
     * Sets obj to remember.
     * @param obj Object to remember
     */
    Memo.prototype.memoize = function (obj) {
        if (this.hasWeakSet) {
            if (this.inner.has(obj)) {
                return true;
            }
            this.inner.add(obj);
            return false;
        }
        else {
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < this.inner.length; i++) {
                var value = this.inner[i];
                if (value === obj) {
                    return true;
                }
            }
            this.inner.push(obj);
            return false;
        }
    };
    /**
     * Removes object from internal storage.
     * @param obj Object to forget
     */
    Memo.prototype.unmemoize = function (obj) {
        if (this.hasWeakSet) {
            this.inner.delete(obj);
        }
        else {
            for (var i = 0; i < this.inner.length; i++) {
                if (this.inner[i] === obj) {
                    this.inner.splice(i, 1);
                    break;
                }
            }
        }
    };
    return Memo;
}());
exports.Memo = Memo;

});

unwrapExports(memo);
var memo_1 = memo.Memo;

var string = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
function truncate(str, max) {
    if (max === void 0) { max = 0; }
    if (max === 0 || !is.isString(str)) {
        return str;
    }
    return str.length <= max ? str : str.substr(0, max) + "...";
}
exports.truncate = truncate;
/**
 * This is basically just `trim_line` from
 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
function snipLine(line, colno) {
    var newLine = line;
    var ll = newLine.length;
    if (ll <= 150) {
        return newLine;
    }
    if (colno > ll) {
        colno = ll; // tslint:disable-line:no-parameter-reassignment
    }
    var start = Math.max(colno - 60, 0);
    if (start < 5) {
        start = 0;
    }
    var end = Math.min(start + 140, ll);
    if (end > ll - 5) {
        end = ll;
    }
    if (end === ll) {
        start = Math.max(end - 140, 0);
    }
    newLine = newLine.slice(start, end);
    if (start > 0) {
        newLine = "'{snip} " + newLine;
    }
    if (end < ll) {
        newLine += ' {snip}';
    }
    return newLine;
}
exports.snipLine = snipLine;
/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */
function safeJoin(input, delimiter) {
    if (!Array.isArray(input)) {
        return '';
    }
    var output = [];
    // tslint:disable-next-line:prefer-for-of
    for (var i = 0; i < input.length; i++) {
        var value = input[i];
        try {
            output.push(String(value));
        }
        catch (e) {
            output.push('[value cannot be serialized]');
        }
    }
    return output.join(delimiter);
}
exports.safeJoin = safeJoin;
/**
 * Checks if given value is included in the target
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#Polyfill
 * @param target source string
 * @param search string to be looked for
 * @returns An answer
 */
function includes(target, search) {
    if (search.length > target.length) {
        return false;
    }
    else {
        return target.indexOf(search) !== -1;
    }
}
exports.includes = includes;

});

unwrapExports(string);
var string_1 = string.truncate;
var string_2 = string.snipLine;
var string_3 = string.safeJoin;
var string_4 = string.includes;

var object = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });



/**
 * Serializes the given object into a string.
 * Like JSON.stringify, but doesn't throw on circular references.
 *
 * @param object A JSON-serializable object.
 * @returns A string containing the serialized object.
 */
function serialize(object) {
    return JSON.stringify(object, serializer({ normalize: false }));
}
exports.serialize = serialize;
/**
 * Deserializes an object from a string previously serialized with
 * {@link serialize}.
 *
 * @param str A serialized object.
 * @returns The deserialized object.
 */
function deserialize(str) {
    return JSON.parse(str);
}
exports.deserialize = deserialize;
/**
 * Creates a deep copy of the given object.
 *
 * The object must be serializable, i.e.:
 *  - It must not contain any cycles
 *  - Only primitive types are allowed (object, array, number, string, boolean)
 *  - Its depth should be considerably low for performance reasons
 *
 * @param object A JSON-serializable object.
 * @returns The object clone.
 */
function clone(object) {
    return deserialize(serialize(object));
}
exports.clone = clone;
/**
 * Wrap a given object method with a higher-order function
 *
 * @param source An object that contains a method to be wrapped.
 * @param name A name of method to be wrapped.
 * @param replacement A function that should be used to wrap a given method.
 * @returns void
 */
function fill(source, name, replacement) {
    if (!(name in source) || source[name].__sentry__) {
        return;
    }
    var original = source[name];
    var wrapped = replacement(original);
    // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
    // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
    // tslint:disable-next-line:strict-type-predicates
    if (typeof wrapped === 'function') {
        wrapped.prototype = wrapped.prototype || {};
        Object.defineProperties(wrapped, {
            __sentry__: {
                enumerable: false,
                value: true,
            },
            __sentry_original__: {
                enumerable: false,
                value: original,
            },
            __sentry_wrapped__: {
                enumerable: false,
                value: wrapped,
            },
        });
    }
    source[name] = wrapped;
}
exports.fill = fill;
/**
 * Encodes given object into url-friendly format
 *
 * @param object An object that contains serializable values
 * @returns string Encoded
 */
function urlEncode(object) {
    return Object.keys(object)
        .map(
    // tslint:disable-next-line:no-unsafe-any
    function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(object[key]); })
        .join('&');
}
exports.urlEncode = urlEncode;
// Default Node.js REPL depth
var MAX_SERIALIZE_EXCEPTION_DEPTH = 3;
// 100kB, as 200kB is max payload size, so half sounds reasonable
var MAX_SERIALIZE_EXCEPTION_SIZE = 100 * 1024;
var MAX_SERIALIZE_KEYS_LENGTH = 40;
/** JSDoc */
function utf8Length(value) {
    // tslint:disable-next-line:no-bitwise
    return ~-encodeURI(value).split(/%..|./).length;
}
/** JSDoc */
function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
}
/** JSDoc */
function serializeValue(value) {
    var type = Object.prototype.toString.call(value);
    // Node.js REPL notation
    if (typeof value === 'string') {
        return string.truncate(value, 40);
    }
    else if (type === '[object Object]') {
        return '[Object]';
    }
    else if (type === '[object Array]') {
        return '[Array]';
    }
    else {
        var normalized = normalizeValue(value);
        return is.isPrimitive(normalized) ? "" + normalized : type;
    }
}
/** JSDoc */
function serializeObject(value, depth) {
    if (depth === 0) {
        return serializeValue(value);
    }
    if (is.isPlainObject(value)) {
        var serialized_1 = {};
        var val_1 = value;
        Object.keys(val_1).forEach(function (key) {
            serialized_1[key] = serializeObject(val_1[key], depth - 1);
        });
        return serialized_1;
    }
    else if (is.isArray(value)) {
        var val = value;
        return val.map(function (v) { return serializeObject(v, depth - 1); });
    }
    return serializeValue(value);
}
exports.serializeObject = serializeObject;
/** JSDoc */
function limitObjectDepthToSize(object, depth, maxSize) {
    if (depth === void 0) { depth = MAX_SERIALIZE_EXCEPTION_DEPTH; }
    if (maxSize === void 0) { maxSize = MAX_SERIALIZE_EXCEPTION_SIZE; }
    var serialized = serializeObject(object, depth);
    if (jsonSize(serialize(serialized)) > maxSize) {
        return limitObjectDepthToSize(object, depth - 1);
    }
    return serialized;
}
exports.limitObjectDepthToSize = limitObjectDepthToSize;
/** JSDoc */
function serializeKeysToEventMessage(keys, maxLength) {
    if (maxLength === void 0) { maxLength = MAX_SERIALIZE_KEYS_LENGTH; }
    if (!keys.length) {
        return '[object has no keys]';
    }
    if (keys[0].length >= maxLength) {
        return string.truncate(keys[0], maxLength);
    }
    for (var includedKeys = keys.length; includedKeys > 0; includedKeys--) {
        var serialized = keys.slice(0, includedKeys).join(', ');
        if (serialized.length > maxLength) {
            continue;
        }
        if (includedKeys === keys.length) {
            return serialized;
        }
        return string.truncate(serialized, maxLength);
    }
    return '';
}
exports.serializeKeysToEventMessage = serializeKeysToEventMessage;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
/** JSDoc */
function assign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    var to = Object(target);
    // tslint:disable-next-line:prefer-for-of
    for (var i = 0; i < args.length; i++) {
        var source = args[i];
        if (source !== null) {
            for (var nextKey in source) {
                if (Object.prototype.hasOwnProperty.call(source, nextKey)) {
                    to[nextKey] = source[nextKey];
                }
            }
        }
    }
    return to;
}
exports.assign = assign;
/**
 * Transforms Error object into an object literal with all it's attributes
 * attached to it.
 *
 * Based on: https://github.com/ftlabs/js-abbreviate/blob/fa709e5f139e7770a71827b1893f22418097fbda/index.js#L95-L106
 *
 * @param error An Error containing all relevant information
 * @returns An object with all error properties
 */
function objectifyError(error) {
    // These properties are implemented as magical getters and don't show up in `for-in` loop
    var err = {
        message: error.message,
        name: error.name,
        stack: error.stack,
    };
    for (var i in error) {
        if (Object.prototype.hasOwnProperty.call(error, i)) {
            err[i] = error[i];
        }
    }
    return err;
}
/**
 * normalizeValue()
 *
 * Takes unserializable input and make it serializable friendly
 *
 * - translates undefined/NaN values to "[undefined]"/"[NaN]" respectively,
 * - serializes Error objects
 * - filter global objects
 */
function normalizeValue(value, key) {
    if (key === 'domain' && typeof value === 'object' && value._events) {
        return '[Domain]';
    }
    if (key === 'domainEmitter') {
        return '[DomainEmitter]';
    }
    if (typeof commonjsGlobal !== 'undefined' && value === commonjsGlobal) {
        return '[Global]';
    }
    if (typeof window !== 'undefined' && value === window) {
        return '[Window]';
    }
    if (typeof document !== 'undefined' && value === document) {
        return '[Document]';
    }
    // tslint:disable-next-line:strict-type-predicates
    if (typeof Event !== 'undefined' && value instanceof Event) {
        return Object.getPrototypeOf(value) ? value.constructor.name : 'Event';
    }
    // React's SyntheticEvent thingy
    if (is.isSyntheticEvent(value)) {
        return '[SyntheticEvent]';
    }
    if (is.isNaN(value)) {
        return '[NaN]';
    }
    if (is.isUndefined(value)) {
        return '[undefined]';
    }
    if (typeof value === 'function') {
        return "[Function: " + (value.name || '<unknown-function-name>') + "]";
    }
    return value;
}
/**
 * Decycles an object to make it safe for json serialization.
 *
 * @param obj Object to be decycled
 * @param memo Optional Memo class handling decycling
 */
function decycle(obj, depth, memo$$1) {
    if (depth === void 0) { depth = +Infinity; }
    if (memo$$1 === void 0) { memo$$1 = new memo.Memo(); }
    if (depth === 0) {
        return serializeValue(obj);
    }
    // If an object was normalized to its string form, we should just bail out as theres no point in going down that branch
    var normalized = normalizeValue(obj);
    if (is.isPrimitive(normalized)) {
        return normalized;
    }
    // tslint:disable-next-line:no-unsafe-any
    var source = (is.isError(obj) ? objectifyError(obj) : obj);
    var copy = is.isArray(obj) ? [] : {};
    if (memo$$1.memoize(obj)) {
        return '[Circular ~]';
    }
    for (var key in source) {
        // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
        if (!Object.prototype.hasOwnProperty.call(source, key)) {
            continue;
        }
        copy[key] = decycle(source[key], depth - 1, memo$$1);
    }
    memo$$1.unmemoize(obj);
    return copy;
}
exports.decycle = decycle;
/**
 * serializer()
 *
 * Remove circular references,
 * translates undefined/NaN values to "[undefined]"/"[NaN]" respectively,
 * and takes care of Error objects serialization
 */
function serializer(options) {
    if (options === void 0) { options = { normalize: true }; }
    return function (key, value) {
        // tslint:disable-next-line
        return options.normalize ? normalizeValue(decycle(value, options.depth), key) : decycle(value, options.depth);
    };
}
/**
 * safeNormalize()
 *
 * Creates a copy of the input by applying serializer function on it and parsing it back to unify the data
 */
function safeNormalize(input, depth) {
    try {
        return JSON.parse(JSON.stringify(input, serializer({ normalize: true, depth: depth })));
    }
    catch (_oO) {
        return '**non-serializable**';
    }
}
exports.safeNormalize = safeNormalize;

});

unwrapExports(object);
var object_1 = object.serialize;
var object_2 = object.deserialize;
var object_3 = object.clone;
var object_4 = object.fill;
var object_5 = object.urlEncode;
var object_6 = object.serializeObject;
var object_7 = object.limitObjectDepthToSize;
var object_8 = object.serializeKeysToEventMessage;
var object_9 = object.assign;
var object_10 = object.decycle;
var object_11 = object.safeNormalize;

// tslint:disable
/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
/**
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xffff);
}
/**
 * Bitwise rotate a 32-bit number to the left.
 */
function bitRotateLeft(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
}
/**
 * These functions implement the four basic operations the algorithm uses.
 */
function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
    return md5cmn((b & c) | (~b & d), a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
    return md5cmn((b & d) | (c & ~d), a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
/**
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */
function binlMD5(x, len) {
    /** append padding */
    x[len >> 5] |= 0x80 << len % 32;
    x[(((len + 64) >>> 9) << 4) + 14] = len;
    var i;
    var olda;
    var oldb;
    var oldc;
    var oldd;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (i = 0; i < x.length; i += 16) {
        olda = a;
        oldb = b;
        oldc = c;
        oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
    }
    return [a, b, c, d];
}
/**
 * Convert an array of little-endian words to a string
 */
function binl2rstr(input) {
    var i;
    var output = '';
    var length32 = input.length * 32;
    for (i = 0; i < length32; i += 8) {
        output += String.fromCharCode((input[i >> 5] >>> i % 32) & 0xff);
    }
    return output;
}
/**
 * Convert a raw string to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */
function rstr2binl(input) {
    var i;
    var output = [];
    output[(input.length >> 2) - 1] = undefined;
    for (i = 0; i < output.length; i += 1) {
        output[i] = 0;
    }
    var length8 = input.length * 8;
    for (i = 0; i < length8; i += 8) {
        output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
    }
    return output;
}
/**
 * Calculate the MD5 of a raw string
 */
function rstrMD5(s) {
    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
}
/**
 * Calculate the HMAC-MD5, of a key and some data (raw strings)
 */
function rstrHMACMD5(key, data) {
    var i;
    var bkey = rstr2binl(key);
    var ipad = [];
    var opad = [];
    var hash;
    ipad[15] = opad[15] = undefined;
    if (bkey.length > 16) {
        bkey = binlMD5(bkey, key.length * 8);
    }
    for (i = 0; i < 16; i += 1) {
        ipad[i] = bkey[i] ^ 0x36363636;
        opad[i] = bkey[i] ^ 0x5c5c5c5c;
    }
    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
}
/**
 * Convert a raw string to a hex string
 */
function rstr2hex(input) {
    var hexTab = '0123456789abcdef';
    var output = '';
    var x;
    var i;
    for (i = 0; i < input.length; i += 1) {
        x = input.charCodeAt(i);
        output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f);
    }
    return output;
}
/**
 * Encode a string as utf-8
 */
function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input));
}
/*
 * Take string arguments and return either raw or hex encoded strings
 */
function rawMD5(s) {
    return rstrMD5(str2rstrUTF8(s));
}
function hexMD5(s) {
    return rstr2hex(rawMD5(s));
}
function rawHMACMD5(k, d) {
    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
}
function hexHMACMD5(k, d) {
    return rstr2hex(rawHMACMD5(k, d));
}
function md5(string, key, raw) {
    if (!key) {
        if (!raw) {
            return hexMD5(string);
        }
        return rawMD5(string);
    }
    if (!raw) {
        return hexHMACMD5(key, string);
    }
    return rawHMACMD5(key, string);
}

// tslint:disable
/**
 * TraceKit - Cross brower stack traces
 *
 * This was originally forked from github.com/occ/TraceKit, but has since been
 * largely modified and is now maintained as part of Sentry JS SDK.
 *
 * NOTE: Last merge with upstream repository
 * Jul 11,2018 - #f03357c
 *
 * https://github.com/csnover/TraceKit
 * @license MIT
 * @namespace TraceKit
 */
var window$1 = misc_3();
var TraceKit = {
    wrap: function () { return function () { }; },
    report: false,
    collectWindowErrors: false,
    computeStackTrace: false,
    remoteFetching: false,
    linesOfContext: false,
    extendToAsynchronousCallbacks: false,
};
// var TraceKit: TraceKitInterface = {};
// var TraceKit = {};
// global reference to slice
var _slice = [].slice;
var UNKNOWN_FUNCTION = '?';
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types
var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
/**
 * A better form of hasOwnProperty<br/>
 * Example: `_has(MainHostObject, property) === true/false`
 *
 * @param {Object} object to check property
 * @param {string} key to check
 * @return {Boolean} true if the object has the key and it is not inherited
 */
function _has(object, key) {
    return Object.prototype.hasOwnProperty.call(object, key);
}
/**
 * A safe form of location.href<br/>
 *
 * @return {string} location.href
 */
function getLocationHref() {
    if (typeof document === 'undefined' || document.location == null)
        return '';
    return document.location.href;
}
/**
 * A safe form of location.origin<br/>
 *
 * @return {string} location.origin
 */
function getLocationOrigin() {
    if (typeof document === 'undefined' || document.location == null)
        return '';
    // Oh dear IE10...
    if (!document.location.origin) {
        return (document.location.protocol +
            '//' +
            document.location.hostname +
            (document.location.port ? ':' + document.location.port : ''));
    }
    return document.location.origin;
}
/**
 * Wrap any function in a TraceKit reporter<br/>
 * Example: `func = TraceKit.wrap(func);`
 *
 * @param {Function} func Function to be wrapped
 * @return {Function} The wrapped func
 * @memberof TraceKit
 */
TraceKit.wrap = function traceKitWrapper(func) {
    function wrapped() {
        try {
            // @ts-ignore
            return func.apply(this, arguments);
        }
        catch (e) {
            TraceKit.report(e);
            throw e;
        }
    }
    return wrapped;
};
/**
 * Cross-browser processing of unhandled exceptions
 *
 * Syntax:
 * ```js
 *   TraceKit.report.subscribe(function(stackInfo) { ... })
 *   TraceKit.report.unsubscribe(function(stackInfo) { ... })
 *   TraceKit.report(exception)
 *   try { ...code... } catch(ex) { TraceKit.report(ex); }
 * ```
 *
 * Supports:
 *   - Firefox: full stack trace with line numbers, plus column number
 *     on top frame; column number is not guaranteed
 *   - Opera: full stack trace with line and column numbers
 *   - Chrome: full stack trace with line and column numbers
 *   - Safari: line and column number for the top frame only; some frames
 *     may be missing, and column number is not guaranteed
 *   - IE: line and column number for the top frame only; some frames
 *     may be missing, and column number is not guaranteed
 *
 * In theory, TraceKit should work on all of the following versions:
 *   - IE5.5+ (only 8.0 tested)
 *   - Firefox 0.9+ (only 3.5+ tested)
 *   - Opera 7+ (only 10.50 tested; versions 9 and earlier may require
 *     Exceptions Have Stacktrace to be enabled in opera:config)
 *   - Safari 3+ (only 4+ tested)
 *   - Chrome 1+ (only 5+ tested)
 *   - Konqueror 3.5+ (untested)
 *
 * Requires TraceKit.computeStackTrace.
 *
 * Tries to catch all unhandled exceptions and report them to the
 * subscribed handlers. Please note that TraceKit.report will rethrow the
 * exception. This is REQUIRED in order to get a useful stack trace in IE.
 * If the exception does not reach the top of the browser, you will only
 * get a stack trace from the point where TraceKit.report was called.
 *
 * Handlers receive a TraceKit.StackTrace object as described in the
 * TraceKit.computeStackTrace docs.
 *
 * @memberof TraceKit
 * @namespace
 */
TraceKit.report = (function reportModuleWrapper() {
    var handlers = [], lastException = null, lastExceptionStack = null;
    /**
     * Add a crash handler.
     * @param {Function} handler
     * @memberof TraceKit.report
     */
    function subscribe(handler) {
        // NOTE: We call both handlers manually in browser/integrations/globalhandler.ts
        // So user can choose which one he wants to attach
        // installGlobalHandler();
        // installGlobalUnhandledRejectionHandler();
        handlers.push(handler);
    }
    /**
     * Remove a crash handler.
     * @param {Function} handler
     * @memberof TraceKit.report
     */
    function unsubscribe(handler) {
        for (var i = handlers.length - 1; i >= 0; --i) {
            if (handlers[i] === handler) {
                handlers.splice(i, 1);
            }
        }
        if (handlers.length === 0) {
            uninstallGlobalHandler();
            uninstallGlobalUnhandledRejectionHandler();
        }
    }
    /**
     * Dispatch stack information to all handlers.
     * @param {TraceKit.StackTrace} stack
     * @param {boolean} isWindowError Is this a top-level window error?
     * @param {Error=} error The error that's being handled (if available, null otherwise)
     * @memberof TraceKit.report
     * @throws An exception if an error occurs while calling an handler.
     */
    function notifyHandlers(stack, isWindowError, error) {
        var exception = null;
        if (isWindowError && !TraceKit.collectWindowErrors) {
            return;
        }
        for (var i in handlers) {
            if (_has(handlers, i)) {
                try {
                    handlers[i](stack, isWindowError, error);
                }
                catch (inner) {
                    exception = inner;
                }
            }
        }
        if (exception) {
            throw exception;
        }
    }
    var _oldOnerrorHandler, _onErrorHandlerInstalled;
    var _oldOnunhandledrejectionHandler, _onUnhandledRejectionHandlerInstalled;
    /**
     * Ensures all global unhandled exceptions are recorded.
     * Supported by Gecko and IE.
     * @param {string} message Error message.
     * @param {string} url URL of script that generated the exception.
     * @param {(number|string)} lineNo The line number at which the error occurred.
     * @param {(number|string)=} columnNo The column number at which the error occurred.
     * @param {Error=} errorObj The actual Error object.
     * @memberof TraceKit.report
     */
    function traceKitWindowOnError(message, url, lineNo, columnNo, errorObj) {
        var stack = null;
        // If 'errorObj' is ErrorEvent, get real Error from inside
        errorObj = is_2(errorObj) ? errorObj.error : errorObj;
        // If 'message' is ErrorEvent, get real message from inside
        message = is_2(message) ? message.message : message;
        if (lastExceptionStack) {
            TraceKit.computeStackTrace.augmentStackTraceWithInitialElement(lastExceptionStack, url, lineNo, message);
            processLastException();
        }
        else if (errorObj && is_1(errorObj)) {
            stack = TraceKit.computeStackTrace(errorObj);
            stack.mechanism = 'onerror';
            notifyHandlers(stack, true, errorObj);
        }
        else {
            var location = {
                url: url,
                line: lineNo,
                column: columnNo,
            };
            var name;
            var msg = message; // must be new var or will modify original `arguments`
            if ({}.toString.call(message) === '[object String]') {
                var groups = message.match(ERROR_TYPES_RE);
                if (groups) {
                    name = groups[1];
                    msg = groups[2];
                }
            }
            location.func = TraceKit.computeStackTrace.guessFunctionName(location.url, location.line);
            location.context = TraceKit.computeStackTrace.gatherContext(location.url, location.line);
            stack = {
                name: name,
                message: msg,
                mode: 'onerror',
                mechanism: 'onerror',
                stack: [
                    tslib_1.__assign({}, location, { 
                        // Firefox sometimes doesn't return url correctly and this is an old behavior
                        // that I prefer to port here as well.
                        // It can be altered only here, as previously it's using `location.url` for other things — Kamil
                        url: location.url || getLocationHref() }),
                ],
            };
            notifyHandlers(stack, true, null);
        }
        if (_oldOnerrorHandler) {
            // @ts-ignore
            return _oldOnerrorHandler.apply(this, arguments);
        }
        return false;
    }
    /**
     * Ensures all unhandled rejections are recorded.
     * @param {PromiseRejectionEvent} e event.
     * @memberof TraceKit.report
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onunhandledrejection
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
     */
    function traceKitWindowOnUnhandledRejection(e) {
        var err = (e && (e.detail ? e.detail.reason : e.reason)) || e;
        var stack = TraceKit.computeStackTrace(err);
        stack.mechanism = 'onunhandledrejection';
        notifyHandlers(stack, true, err);
    }
    /**
     * Install a global onerror handler
     * @memberof TraceKit.report
     */
    function installGlobalHandler() {
        if (_onErrorHandlerInstalled === true) {
            return;
        }
        _oldOnerrorHandler = window$1.onerror;
        window$1.onerror = traceKitWindowOnError;
        _onErrorHandlerInstalled = true;
    }
    /**
     * Uninstall the global onerror handler
     * @memberof TraceKit.report
     */
    function uninstallGlobalHandler() {
        if (_onErrorHandlerInstalled) {
            window$1.onerror = _oldOnerrorHandler;
            _onErrorHandlerInstalled = false;
        }
    }
    /**
     * Install a global onunhandledrejection handler
     * @memberof TraceKit.report
     */
    function installGlobalUnhandledRejectionHandler() {
        if (_onUnhandledRejectionHandlerInstalled === true) {
            return;
        }
        _oldOnunhandledrejectionHandler = window$1.onunhandledrejection;
        window$1.onunhandledrejection = traceKitWindowOnUnhandledRejection;
        _onUnhandledRejectionHandlerInstalled = true;
    }
    /**
     * Uninstall the global onunhandledrejection handler
     * @memberof TraceKit.report
     */
    function uninstallGlobalUnhandledRejectionHandler() {
        if (_onUnhandledRejectionHandlerInstalled) {
            window$1.onunhandledrejection = _oldOnunhandledrejectionHandler;
            _onUnhandledRejectionHandlerInstalled = false;
        }
    }
    /**
     * Process the most recent exception
     * @memberof TraceKit.report
     */
    function processLastException() {
        var _lastExceptionStack = lastExceptionStack, _lastException = lastException;
        lastExceptionStack = null;
        lastException = null;
        notifyHandlers(_lastExceptionStack, false, _lastException);
    }
    /**
     * Reports an unhandled Error to TraceKit.
     * @param {Error} ex
     * @memberof TraceKit.report
     * @throws An exception if an incomplete stack trace is detected (old IE browsers).
     */
    function report(ex) {
        if (lastExceptionStack) {
            if (lastException === ex) {
                return; // already caught by an inner catch block, ignore
            }
            else {
                processLastException();
            }
        }
        var stack = TraceKit.computeStackTrace(ex);
        lastExceptionStack = stack;
        lastException = ex;
        // If the stack trace is incomplete, wait for 2 seconds for
        // slow slow IE to see if onerror occurs or not before reporting
        // this exception; otherwise, we will end up with an incomplete
        // stack trace
        setTimeout(function () {
            if (lastException === ex) {
                processLastException();
            }
        }, stack.incomplete ? 2000 : 0);
        throw ex; // re-throw to propagate to the top level (and cause window.onerror)
    }
    report.subscribe = subscribe;
    report.unsubscribe = unsubscribe;
    report.installGlobalHandler = installGlobalHandler;
    report.installGlobalUnhandledRejectionHandler = installGlobalUnhandledRejectionHandler;
    return report;
})();
/**
 * An object representing a single stack frame.
 * @typedef {Object} StackFrame
 * @property {string} url The JavaScript or HTML file URL.
 * @property {string} func The function name, or empty for anonymous functions (if guessing did not work).
 * @property {string[]?} args The arguments passed to the function, if known.
 * @property {number=} line The line number, if known.
 * @property {number=} column The column number, if known.
 * @property {string[]} context An array of source code lines; the middle element corresponds to the correct line#.
 * @memberof TraceKit
 */
/**
 * An object representing a JavaScript stack trace.
 * @typedef {Object} StackTrace
 * @property {string} name The name of the thrown exception.
 * @property {string} message The exception error message.
 * @property {TraceKit.StackFrame[]} stack An array of stack frames.
 * @property {string} mode 'stack', 'stacktrace', 'multiline', 'callers', 'onerror', or 'failed' -- method used to collect the stack trace.
 * @memberof TraceKit
 */
/**
 * TraceKit.computeStackTrace: cross-browser stack traces in JavaScript
 *
 * Syntax:
 *   ```js
 *   s = TraceKit.computeStackTrace.ofCaller([depth])
 *   s = TraceKit.computeStackTrace(exception) // consider using TraceKit.report instead (see below)
 *   ```
 *
 * Supports:
 *   - Firefox:  full stack trace with line numbers and unreliable column
 *               number on top frame
 *   - Opera 10: full stack trace with line and column numbers
 *   - Opera 9-: full stack trace with line numbers
 *   - Chrome:   full stack trace with line and column numbers
 *   - Safari:   line and column number for the topmost stacktrace element
 *               only
 *   - IE:       no line numbers whatsoever
 *
 * Tries to guess names of anonymous functions by looking for assignments
 * in the source code. In IE and Safari, we have to guess source file names
 * by searching for function bodies inside all page scripts. This will not
 * work for scripts that are loaded cross-domain.
 * Here be dragons: some function names may be guessed incorrectly, and
 * duplicate functions may be mismatched.
 *
 * TraceKit.computeStackTrace should only be used for tracing purposes.
 * Logging of unhandled exceptions should be done with TraceKit.report,
 * which builds on top of TraceKit.computeStackTrace and provides better
 * IE support by utilizing the window.onerror event to retrieve information
 * about the top of the stack.
 *
 * Note: In IE and Safari, no stack trace is recorded on the Error object,
 * so computeStackTrace instead walks its *own* chain of callers.
 * This means that:
 *  * in Safari, some methods may be missing from the stack trace;
 *  * in IE, the topmost function in the stack trace will always be the
 *    caller of computeStackTrace.
 *
 * This is okay for tracing (because you are likely to be calling
 * computeStackTrace from the function you want to be the topmost element
 * of the stack trace anyway), but not okay for logging unhandled
 * exceptions (because your catch block will likely be far away from the
 * inner function that actually caused the exception).
 *
 * Tracing example:
 *  ```js
 *     function trace(message) {
 *         var stackInfo = TraceKit.computeStackTrace.ofCaller();
 *         var data = message + "\n";
 *         for(var i in stackInfo.stack) {
 *             var item = stackInfo.stack[i];
 *             data += (item.func || '[anonymous]') + "() in " + item.url + ":" + (item.line || '0') + "\n";
 *         }
 *         if (window.console)
 *             console.info(data);
 *         else
 *             alert(data);
 *     }
 * ```
 * @memberof TraceKit
 * @namespace
 */
TraceKit.computeStackTrace = (function computeStackTraceWrapper() {
    var debug = false, sourceCache = {};
    /**
     * Attempts to retrieve source code via XMLHttpRequest, which is used
     * to look up anonymous function names.
     * @param {string} url URL of source code.
     * @return {string} Source contents.
     * @memberof TraceKit.computeStackTrace
     */
    function loadSource(url) {
        if (!TraceKit.remoteFetching) {
            //Only attempt request if remoteFetching is on.
            return '';
        }
        try {
            var getXHR = function () {
                try {
                    return new window$1.XMLHttpRequest();
                }
                catch (e) {
                    // explicitly bubble up the exception if not found
                    return new window$1.ActiveXObject('Microsoft.XMLHTTP');
                }
            };
            var request = getXHR();
            request.open('GET', url, false);
            request.send('');
            return request.responseText;
        }
        catch (e) {
            return '';
        }
    }
    /**
     * Retrieves source code from the source code cache.
     * @param {string} url URL of source code.
     * @return {Array.<string>} Source contents.
     * @memberof TraceKit.computeStackTrace
     */
    function getSource(url) {
        if (typeof url !== 'string') {
            return [];
        }
        if (!_has(sourceCache, url)) {
            // URL needs to be able to fetched within the acceptable domain.  Otherwise,
            // cross-domain errors will be triggered.
            /*
                        Regex matches:
                        0 - Full Url
                        1 - Protocol
                        2 - Domain
                        3 - Port (Useful for internal applications)
                        4 - Path
                    */
            var source = '';
            var domain = '';
            try {
                domain = window$1.document.domain;
            }
            catch (e) { }
            var match = /(.*)\:\/\/([^:\/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(url);
            if (match && match[2] === domain) {
                source = loadSource(url);
            }
            sourceCache[url] = source ? source.split('\n') : [];
        }
        return sourceCache[url];
    }
    /**
     * Tries to use an externally loaded copy of source code to determine
     * the name of a function by looking at the name of the variable it was
     * assigned to, if any.
     * @param {string} url URL of source code.
     * @param {(string|number)} lineNo Line number in source code.
     * @return {string} The function name, if discoverable.
     * @memberof TraceKit.computeStackTrace
     */
    function guessFunctionName(url, lineNo) {
        var reFunctionArgNames = /function ([^(]*)\(([^)]*)\)/, reGuessFunction = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/, line = '', maxLines = 10, source = getSource(url), m;
        if (!source.length) {
            return UNKNOWN_FUNCTION;
        }
        // Walk backwards from the first line in the function until we find the line which
        // matches the pattern above, which is the function definition
        for (var i = 0; i < maxLines; ++i) {
            line = source[lineNo - i] + line;
            if (!is_5(line)) {
                if ((m = reGuessFunction.exec(line))) {
                    return m[1];
                }
                else if ((m = reFunctionArgNames.exec(line))) {
                    return m[1];
                }
            }
        }
        return UNKNOWN_FUNCTION;
    }
    /**
     * Retrieves the surrounding lines from where an exception occurred.
     * @param {string} url URL of source code.
     * @param {(string|number)} line Line number in source code to center around for context.
     * @return {?Array.<string>} Lines of source code.
     * @memberof TraceKit.computeStackTrace
     */
    function gatherContext(url, line) {
        var source = getSource(url);
        if (!source.length) {
            return null;
        }
        var context = [], 
        // linesBefore & linesAfter are inclusive with the offending line.
        // if linesOfContext is even, there will be one extra line
        //   *before* the offending line.
        linesBefore = Math.floor(TraceKit.linesOfContext / 2), 
        // Add one extra line if linesOfContext is odd
        linesAfter = linesBefore + (TraceKit.linesOfContext % 2), start = Math.max(0, line - linesBefore - 1), end = Math.min(source.length, line + linesAfter - 1);
        line -= 1; // convert to 0-based index
        for (var i = start; i < end; ++i) {
            if (!is_5(source[i])) {
                context.push(source[i]);
            }
        }
        return context.length > 0 ? context : null;
    }
    /**
     * Escapes special characters, except for whitespace, in a string to be
     * used inside a regular expression as a string literal.
     * @param {string} text The string.
     * @return {string} The escaped string literal.
     * @memberof TraceKit.computeStackTrace
     */
    function escapeRegExp(text) {
        return text.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, '\\$&');
    }
    /**
     * Escapes special characters in a string to be used inside a regular
     * expression as a string literal. Also ensures that HTML entities will
     * be matched the same as their literal friends.
     * @param {string} body The string.
     * @return {string} The escaped string.
     * @memberof TraceKit.computeStackTrace
     */
    function escapeCodeAsRegExpForMatchingInsideHTML(body) {
        return escapeRegExp(body)
            .replace('<', '(?:<|&lt;)')
            .replace('>', '(?:>|&gt;)')
            .replace('&', '(?:&|&amp;)')
            .replace('"', '(?:"|&quot;)')
            .replace(/\s+/g, '\\s+');
    }
    /**
     * Determines where a code fragment occurs in the source code.
     * @param {RegExp} re The function definition.
     * @param {Array.<string>} urls A list of URLs to search.
     * @return {?Object.<string, (string|number)>} An object containing
     * the url, line, and column number of the defined function.
     * @memberof TraceKit.computeStackTrace
     */
    function findSourceInUrls(re, urls) {
        var source, m;
        for (var i = 0, j = urls.length; i < j; ++i) {
            if ((source = getSource(urls[i])).length) {
                source = source.join('\n');
                if ((m = re.exec(source))) {
                    return {
                        url: urls[i],
                        line: source.substring(0, m.index).split('\n').length,
                        column: m.index - source.lastIndexOf('\n', m.index) - 1,
                    };
                }
            }
        }
        return null;
    }
    /**
     * Determines at which column a code fragment occurs on a line of the
     * source code.
     * @param {string} fragment The code fragment.
     * @param {string} url The URL to search.
     * @param {(string|number)} line The line number to examine.
     * @return {?number} The column number.
     * @memberof TraceKit.computeStackTrace
     */
    function findSourceInLine(fragment, url, line) {
        var source = getSource(url), re = new RegExp('\\b' + escapeRegExp(fragment) + '\\b'), m;
        line -= 1;
        if (source && source.length > line && (m = re.exec(source[line]))) {
            return m.index;
        }
        return null;
    }
    /**
     * Determines where a function was defined within the source code.
     * @param {(Function|string)} func A function reference or serialized
     * function definition.
     * @return {?Object.<string, (string|number)>} An object containing
     * the url, line, and column number of the defined function.
     * @memberof TraceKit.computeStackTrace
     */
    function findSourceByFunctionBody(func) {
        if (is_5(window$1 && window$1.document)) {
            return;
        }
        var urls = [getLocationHref()], scripts = window$1.document.getElementsByTagName('script'), body, code = '' + func, codeRE = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/, eventRE = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/, re, parts, result;
        for (var i = 0; i < scripts.length; ++i) {
            var script = scripts[i];
            if (script.src) {
                urls.push(script.src);
            }
        }
        if (!(parts = codeRE.exec(code))) {
            re = new RegExp(escapeRegExp(code).replace(/\s+/g, '\\s+'));
        }
        // not sure if this is really necessary, but I don’t have a test
        // corpus large enough to confirm that and it was in the original.
        else {
            var name = parts[1] ? '\\s+' + parts[1] : '', args = parts[2].split(',').join('\\s*,\\s*');
            body = escapeRegExp(parts[3]).replace(/;$/, ';?'); // semicolon is inserted if the function ends with a comment.replace(/\s+/g, '\\s+');
            re = new RegExp('function' + name + '\\s*\\(\\s*' + args + '\\s*\\)\\s*{\\s*' + body + '\\s*}');
        }
        // look for a normal function definition
        if ((result = findSourceInUrls(re, urls))) {
            return result;
        }
        // look for an old-school event handler function
        if ((parts = eventRE.exec(code))) {
            var event = parts[1];
            body = escapeCodeAsRegExpForMatchingInsideHTML(parts[2]);
            // look for a function defined in HTML as an onXXX handler
            re = new RegExp('on' + event + '=[\\\'"]\\s*' + body + '\\s*[\\\'"]', 'i');
            if ((result = findSourceInUrls(re, urls[0]))) {
                return result;
            }
            // look for ???
            re = new RegExp(body);
            if ((result = findSourceInUrls(re, urls))) {
                return result;
            }
        }
        return null;
    }
    // Contents of Exception in various browsers.
    //
    // SAFARI:
    // ex.message = Can't find variable: qq
    // ex.line = 59
    // ex.sourceId = 580238192
    // ex.sourceURL = http://...
    // ex.expressionBeginOffset = 96
    // ex.expressionCaretOffset = 98
    // ex.expressionEndOffset = 98
    // ex.name = ReferenceError
    //
    // FIREFOX:
    // ex.message = qq is not defined
    // ex.fileName = http://...
    // ex.lineNumber = 59
    // ex.columnNumber = 69
    // ex.stack = ...stack trace... (see the example below)
    // ex.name = ReferenceError
    //
    // CHROME:
    // ex.message = qq is not defined
    // ex.name = ReferenceError
    // ex.type = not_defined
    // ex.arguments = ['aa']
    // ex.stack = ...stack trace...
    //
    // INTERNET EXPLORER:
    // ex.message = ...
    // ex.name = ReferenceError
    //
    // OPERA:
    // ex.message = ...message... (see the example below)
    // ex.name = ReferenceError
    // ex.opera#sourceloc = 11  (pretty much useless, duplicates the info in ex.message)
    // ex.stacktrace = n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'
    /**
     * Computes stack trace information from the stack property.
     * Chrome and Gecko use this property.
     * @param {Error} ex
     * @return {?TraceKit.StackTrace} Stack trace information.
     * @memberof TraceKit.computeStackTrace
     */
    function computeStackTraceFromStackProp(ex) {
        if (!ex.stack) {
            return null;
        }
        var chrome = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, 
        // Used to additionally parse URL/line/column from eval frames
        isEval, geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/, lines = ex.stack.split('\n'), stack = [], submatch, parts, element, reference = /^(.*) is undefined$/.exec(ex.message);
        for (var i = 0, j = lines.length; i < j; ++i) {
            if ((parts = chrome.exec(lines[i]))) {
                var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
                isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
                if (isEval && (submatch = chromeEval.exec(parts[2]))) {
                    // throw out eval line/column and use top-most line/column number
                    parts[2] = submatch[1]; // url
                    // NOTE: It's messing out our integration tests in Karma, let's see if we can live with it – Kamil
                    // parts[3] = submatch[2]; // line
                    // parts[4] = submatch[3]; // column
                }
                element = {
                    url: !isNative ? parts[2] : null,
                    func: parts[1] || UNKNOWN_FUNCTION,
                    args: isNative ? [parts[2]] : [],
                    line: parts[3] ? +parts[3] : null,
                    column: parts[4] ? +parts[4] : null,
                };
            }
            else if ((parts = winjs.exec(lines[i]))) {
                element = {
                    url: parts[2],
                    func: parts[1] || UNKNOWN_FUNCTION,
                    args: [],
                    line: +parts[3],
                    column: parts[4] ? +parts[4] : null,
                };
            }
            else if ((parts = gecko.exec(lines[i]))) {
                isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
                if (isEval && (submatch = geckoEval.exec(parts[3]))) {
                    // throw out eval line/column and use top-most line number
                    parts[3] = submatch[1];
                    // NOTE: It's messing out our integration tests in Karma, let's see if we can live with it – Kamil
                    // parts[4] = submatch[2];
                    // parts[5] = null; // no column when eval
                }
                else if (i === 0 && !parts[5] && !is_5(ex.columnNumber)) {
                    // FireFox uses this awesome columnNumber property for its top frame
                    // Also note, Firefox's column number is 0-based and everything else expects 1-based,
                    // so adding 1
                    // NOTE: this hack doesn't work if top-most frame is eval
                    stack[0].column = ex.columnNumber + 1;
                }
                element = {
                    url: parts[3],
                    func: parts[1] || UNKNOWN_FUNCTION,
                    args: parts[2] ? parts[2].split(',') : [],
                    line: parts[4] ? +parts[4] : null,
                    column: parts[5] ? +parts[5] : null,
                };
            }
            else {
                continue;
            }
            if (!element.func && element.line) {
                element.func = guessFunctionName(element.url, element.line);
            }
            if (TraceKit.remoteFetching && element.url && element.url.substr(0, 5) === 'blob:') {
                // Special case for handling JavaScript loaded into a blob.
                // We use a synchronous AJAX request here as a blob is already in
                // memory - it's not making a network request.  This will generate a warning
                // in the browser console, but there has already been an error so that's not
                // that much of an issue.
                var xhr = new XMLHttpRequest();
                xhr.open('GET', element.url, false);
                xhr.send('');
                // If we failed to download the source, skip this patch
                if (xhr.status === 200) {
                    var source = xhr.responseText || '';
                    // We trim the source down to the last 300 characters as sourceMappingURL is always at the end of the file.
                    // Why 300? To be in line with: https://github.com/getsentry/sentry/blob/4af29e8f2350e20c28a6933354e4f42437b4ba42/src/sentry/lang/javascript/processor.py#L164-L175
                    source = source.slice(-300);
                    // Now we dig out the source map URL
                    var sourceMaps = source.match(/\/\/# sourceMappingURL=(.*)$/);
                    // If we don't find a source map comment or we find more than one, continue on to the next element.
                    if (sourceMaps) {
                        var sourceMapAddress = sourceMaps[1];
                        // Now we check to see if it's a relative URL.
                        // If it is, convert it to an absolute one.
                        if (sourceMapAddress.charAt(0) === '~') {
                            sourceMapAddress = getLocationOrigin() + sourceMapAddress.slice(1);
                        }
                        // Now we strip the '.map' off of the end of the URL and update the
                        // element so that Sentry can match the map to the blob.
                        element.url = sourceMapAddress.slice(0, -4);
                    }
                }
            }
            element.context = element.line ? gatherContext(element.url, element.line) : null;
            stack.push(element);
        }
        if (!stack.length) {
            return null;
        }
        if (stack[0] && stack[0].line && !stack[0].column && reference) {
            stack[0].column = findSourceInLine(reference[1], stack[0].url, stack[0].line);
        }
        return {
            mode: 'stack',
            name: ex.name,
            message: ex.message,
            stack: stack,
        };
    }
    /**
     * Computes stack trace information from the stacktrace property.
     * Opera 10+ uses this property.
     * @param {Error} ex
     * @return {?TraceKit.StackTrace} Stack trace information.
     * @memberof TraceKit.computeStackTrace
     */
    function computeStackTraceFromStacktraceProp(ex) {
        // Access and store the stacktrace property before doing ANYTHING
        // else to it because Opera is not very good at providing it
        // reliably in other circumstances.
        var stacktrace = ex.stacktrace;
        if (!stacktrace) {
            return;
        }
        var opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, lines = stacktrace.split('\n'), stack = [], parts;
        for (var line = 0; line < lines.length; line += 2) {
            var element = null;
            if ((parts = opera10Regex.exec(lines[line]))) {
                element = {
                    url: parts[2],
                    line: +parts[1],
                    column: null,
                    func: parts[3],
                    args: [],
                };
            }
            else if ((parts = opera11Regex.exec(lines[line]))) {
                element = {
                    url: parts[6],
                    line: +parts[1],
                    column: +parts[2],
                    func: parts[3] || parts[4],
                    args: parts[5] ? parts[5].split(',') : [],
                };
            }
            if (element) {
                if (!element.func && element.line) {
                    element.func = guessFunctionName(element.url, element.line);
                }
                if (element.line) {
                    try {
                        element.context = gatherContext(element.url, element.line);
                    }
                    catch (exc) { }
                }
                if (!element.context) {
                    element.context = [lines[line + 1]];
                }
                stack.push(element);
            }
        }
        if (!stack.length) {
            return null;
        }
        return {
            mode: 'stacktrace',
            name: ex.name,
            message: ex.message,
            stack: stack,
        };
    }
    /**
     * NOT TESTED.
     * Computes stack trace information from an error message that includes
     * the stack trace.
     * Opera 9 and earlier use this method if the option to show stack
     * traces is turned on in opera:config.
     * @param {Error} ex
     * @return {?TraceKit.StackTrace} Stack information.
     * @memberof TraceKit.computeStackTrace
     */
    function computeStackTraceFromOperaMultiLineMessage(ex) {
        // TODO: Clean this function up
        // Opera includes a stack trace into the exception message. An example is:
        //
        // Statement on line 3: Undefined variable: undefinedFunc
        // Backtrace:
        //   Line 3 of linked script file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.js: In function zzz
        //         undefinedFunc(a);
        //   Line 7 of inline#1 script in file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.html: In function yyy
        //           zzz(x, y, z);
        //   Line 3 of inline#1 script in file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.html: In function xxx
        //           yyy(a, a, a);
        //   Line 1 of function script
        //     try { xxx('hi'); return false; } catch(ex) { TraceKit.report(ex); }
        //   ...
        var lines = ex.message.split('\n');
        if (lines.length < 4) {
            return null;
        }
        var lineRE1 = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i, lineRE2 = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i, lineRE3 = /^\s*Line (\d+) of function script\s*$/i, stack = [], scripts = window$1 && window$1.document && window$1.document.getElementsByTagName('script'), inlineScriptBlocks = [], parts;
        for (var s in scripts) {
            if (_has(scripts, s) && !scripts[s].src) {
                inlineScriptBlocks.push(scripts[s]);
            }
        }
        for (var line = 2; line < lines.length; line += 2) {
            var item = null;
            if ((parts = lineRE1.exec(lines[line]))) {
                item = {
                    url: parts[2],
                    func: parts[3],
                    args: [],
                    line: +parts[1],
                    column: null,
                };
            }
            else if ((parts = lineRE2.exec(lines[line]))) {
                item = {
                    url: parts[3],
                    func: parts[4],
                    args: [],
                    line: +parts[1],
                    column: null,
                };
                var relativeLine = +parts[1]; // relative to the start of the <SCRIPT> block
                var script = inlineScriptBlocks[parts[2] - 1];
                if (script) {
                    var source = getSource(item.url);
                    if (source) {
                        source = source.join('\n');
                        var pos = source.indexOf(script.innerText);
                        if (pos >= 0) {
                            item.line = relativeLine + source.substring(0, pos).split('\n').length;
                        }
                    }
                }
            }
            else if ((parts = lineRE3.exec(lines[line]))) {
                var url = getLocationHref().replace(/#.*$/, '');
                var re = new RegExp(escapeCodeAsRegExpForMatchingInsideHTML(lines[line + 1]));
                var src = findSourceInUrls(re, [url]);
                item = {
                    url: url,
                    func: '',
                    args: [],
                    line: src ? src.line : parts[1],
                    column: null,
                };
            }
            if (item) {
                if (!item.func) {
                    item.func = guessFunctionName(item.url, item.line);
                }
                var context = gatherContext(item.url, item.line);
                var midline = context ? context[Math.floor(context.length / 2)] : null;
                if (context && midline.replace(/^\s*/, '') === lines[line + 1].replace(/^\s*/, '')) {
                    item.context = context;
                }
                else {
                    // if (context) alert("Context mismatch. Correct midline:\n" + lines[i+1] + "\n\nMidline:\n" + midline + "\n\nContext:\n" + context.join("\n") + "\n\nURL:\n" + item.url);
                    item.context = [lines[line + 1]];
                }
                stack.push(item);
            }
        }
        if (!stack.length) {
            return null; // could not parse multiline exception message as Opera stack trace
        }
        return {
            mode: 'multiline',
            name: ex.name,
            message: lines[0],
            stack: stack,
        };
    }
    /**
     * Adds information about the first frame to incomplete stack traces.
     * Safari and IE require this to get complete data on the first frame.
     * @param {TraceKit.StackTrace} stackInfo Stack trace information from
     * one of the compute* methods.
     * @param {string} url The URL of the script that caused an error.
     * @param {(number|string)} lineNo The line number of the script that
     * caused an error.
     * @param {string=} message The error generated by the browser, which
     * hopefully contains the name of the object that caused the error.
     * @return {boolean} Whether or not the stack information was
     * augmented.
     * @memberof TraceKit.computeStackTrace
     */
    function augmentStackTraceWithInitialElement(stackInfo, url, lineNo, message) {
        var initial = {
            url: url,
            line: lineNo,
        };
        if (initial.url && initial.line) {
            stackInfo.incomplete = false;
            if (!initial.func) {
                initial.func = guessFunctionName(initial.url, initial.line);
            }
            if (!initial.context) {
                initial.context = gatherContext(initial.url, initial.line);
            }
            var reference = / '([^']+)' /.exec(message);
            if (reference) {
                initial.column = findSourceInLine(reference[1], initial.url, initial.line);
            }
            if (stackInfo.stack.length > 0) {
                if (stackInfo.stack[0].url === initial.url) {
                    if (stackInfo.stack[0].line === initial.line) {
                        return false; // already in stack trace
                    }
                    else if (!stackInfo.stack[0].line && stackInfo.stack[0].func === initial.func) {
                        stackInfo.stack[0].line = initial.line;
                        stackInfo.stack[0].context = initial.context;
                        return false;
                    }
                }
            }
            stackInfo.stack.unshift(initial);
            stackInfo.partial = true;
            return true;
        }
        else {
            stackInfo.incomplete = true;
        }
        return false;
    }
    /**
     * Computes stack trace information by walking the arguments.caller
     * chain at the time the exception occurred. This will cause earlier
     * frames to be missed but is the only way to get any stack trace in
     * Safari and IE. The top frame is restored by
     * {@link augmentStackTraceWithInitialElement}.
     * @param {Error} ex
     * @return {TraceKit.StackTrace=} Stack trace information.
     * @memberof TraceKit.computeStackTrace
     */
    function computeStackTraceByWalkingCallerChain(ex, depth) {
        var functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, stack = [], funcs = {}, recursion = false, parts, item, source;
        for (var curr = computeStackTraceByWalkingCallerChain.caller; curr && !recursion; curr = curr.caller) {
            if (curr === computeStackTrace || curr === TraceKit.report) {
                continue;
            }
            item = {
                url: null,
                func: UNKNOWN_FUNCTION,
                args: [],
                line: null,
                column: null,
            };
            if (curr.name) {
                item.func = curr.name;
            }
            else if ((parts = functionName.exec(curr.toString()))) {
                item.func = parts[1];
            }
            if (typeof item.func === 'undefined') {
                try {
                    item.func = parts.input.substring(0, parts.input.indexOf('{'));
                }
                catch (e) { }
            }
            if ((source = findSourceByFunctionBody(curr))) {
                item.url = source.url;
                item.line = source.line;
                if (item.func === UNKNOWN_FUNCTION) {
                    item.func = guessFunctionName(item.url, item.line);
                }
                var reference = / '([^']+)' /.exec(ex.message || ex.description);
                if (reference) {
                    item.column = findSourceInLine(reference[1], source.url, source.line);
                }
            }
            if (funcs['' + curr]) {
                recursion = true;
            }
            else {
                funcs['' + curr] = true;
            }
            stack.push(item);
        }
        if (depth) {
            stack.splice(0, depth);
        }
        var result = {
            mode: 'callers',
            name: ex.name,
            message: ex.message,
            stack: stack,
        };
        augmentStackTraceWithInitialElement(result, ex.sourceURL || ex.fileName, ex.line || ex.lineNumber, ex.message || ex.description);
        return result;
    }
    /**
     * Computes a stack trace for an exception.
     * @param {Error} ex
     * @param {(string|number)=} depth
     * @memberof TraceKit.computeStackTrace
     */
    function computeStackTrace(ex, depth) {
        var stack = null;
        depth = depth == null ? 0 : +depth;
        try {
            // This must be tried first because Opera 10 *destroys*
            // its stacktrace property if you try to access the stack
            // property first!!
            stack = computeStackTraceFromStacktraceProp(ex);
            if (stack) {
                return stack;
            }
        }
        catch (e) {
            if (debug) {
                throw e;
            }
        }
        try {
            stack = computeStackTraceFromStackProp(ex);
            if (stack) {
                return stack;
            }
        }
        catch (e) {
            if (debug) {
                throw e;
            }
        }
        try {
            stack = computeStackTraceFromOperaMultiLineMessage(ex);
            if (stack) {
                return stack;
            }
        }
        catch (e) {
            if (debug) {
                throw e;
            }
        }
        try {
            stack = computeStackTraceByWalkingCallerChain(ex, depth + 1);
            if (stack) {
                return stack;
            }
        }
        catch (e) {
            if (debug) {
                throw e;
            }
        }
        return {
            original: ex,
            name: ex.name,
            message: ex.message,
            mode: 'failed',
        };
    }
    /**
     * Logs a stacktrace starting from the previous call and working down.
     * @param {(number|string)=} depth How many frames deep to trace.
     * @return {TraceKit.StackTrace} Stack trace information.
     * @memberof TraceKit.computeStackTrace
     */
    function computeStackTraceOfCaller(depth) {
        depth = (depth == null ? 0 : +depth) + 1; // "+ 1" because "ofCaller" should drop one frame
        try {
            throw new Error();
        }
        catch (ex) {
            return computeStackTrace(ex, depth + 1);
        }
    }
    computeStackTrace.augmentStackTraceWithInitialElement = augmentStackTraceWithInitialElement;
    computeStackTrace.computeStackTraceFromStackProp = computeStackTraceFromStackProp;
    computeStackTrace.guessFunctionName = guessFunctionName;
    computeStackTrace.gatherContext = gatherContext;
    computeStackTrace.ofCaller = computeStackTraceOfCaller;
    computeStackTrace.getSource = getSource;
    return computeStackTrace;
})();
/**
 * Extends support for global error handling for asynchronous browser
 * functions. Adopted from Closure Library's errorhandler.js
 * @memberof TraceKit
 */
TraceKit.extendToAsynchronousCallbacks = function () {
    var _helper = function _helper(fnName) {
        var originalFn = window$1[fnName];
        window$1[fnName] = function traceKitAsyncExtension() {
            // Make a copy of the arguments
            var args = _slice.call(arguments);
            var originalCallback = args[0];
            if (typeof originalCallback === 'function') {
                args[0] = TraceKit.wrap(originalCallback);
            }
            // IE < 9 doesn't support .call/.apply on setInterval/setTimeout, but it
            // also only supports 2 argument and doesn't care what "this" is, so we
            // can just call the original function directly.
            if (originalFn.apply) {
                return originalFn.apply(this, args);
            }
            else {
                return originalFn(args[0], args[1]);
            }
        };
    };
    _helper('setTimeout');
    _helper('setInterval');
};
TraceKit.remoteFetching = false;
TraceKit.collectWindowErrors = true;
TraceKit.linesOfContext = 11;
var subscribe = TraceKit.report.subscribe;
var installGlobalHandler = TraceKit.report.installGlobalHandler;
var installGlobalUnhandledRejectionHandler = TraceKit.report.installGlobalUnhandledRejectionHandler;
var computeStackTrace = TraceKit.computeStackTrace;

var STACKTRACE_LIMIT = 50;
/**
 * This function creates an exception from an TraceKitStackTrace
 * @param stacktrace TraceKitStackTrace that will be converted to an exception
 */
function exceptionFromStacktrace(stacktrace) {
    var frames = prepareFramesForEvent(stacktrace.stack);
    var exception = {
        type: stacktrace.name,
        value: stacktrace.message,
    };
    if (frames && frames.length) {
        exception.stacktrace = { frames: frames };
    }
    // tslint:disable-next-line:strict-type-predicates
    if (exception.type === undefined && exception.value === '') {
        exception.value = 'Unrecoverable error caught';
    }
    return exception;
}
/** JSDoc */
function eventFromPlainObject(exception, syntheticException) {
    var exceptionKeys = Object.keys(exception).sort();
    var event = {
        extra: {
            __serialized__: object_7(exception),
        },
        fingerprint: [md5(exceptionKeys.join(''))],
        message: "Non-Error exception captured with keys: " + object_8(exceptionKeys),
    };
    if (syntheticException) {
        var stacktrace = computeStackTrace(syntheticException);
        var frames_1 = prepareFramesForEvent(stacktrace.stack);
        event.stacktrace = {
            frames: frames_1,
        };
    }
    return event;
}
/** JSDoc */
function eventFromStacktrace(stacktrace) {
    var exception = exceptionFromStacktrace(stacktrace);
    return {
        exception: {
            values: [exception],
        },
    };
}
/** JSDoc */
function prepareFramesForEvent(stack) {
    if (!stack || !stack.length) {
        return [];
    }
    var localStack = stack;
    var firstFrameFunction = localStack[0].func || '';
    var lastFrameFunction = localStack[localStack.length - 1].func || '';
    // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
    if (string_4(firstFrameFunction, 'captureMessage') || string_4(firstFrameFunction, 'captureException')) {
        localStack = localStack.slice(1);
    }
    // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
    if (string_4(lastFrameFunction, 'sentryWrapped')) {
        localStack = localStack.slice(0, -1);
    }
    // The frame where the crash happened, should be the last entry in the array
    return localStack
        .map(function (frame) { return ({
        colno: frame.column,
        filename: frame.url || localStack[0].url,
        function: frame.func || '?',
        in_app: true,
        lineno: frame.line,
    }); })
        .slice(0, STACKTRACE_LIMIT)
        .reverse();
}
/**
 * Adds exception values, type and value to an synthetic Exception.
 * @param event The event to modify.
 * @param value Value of the exception.
 * @param type Type of the exception.
 */
function addExceptionTypeValue(event, value, type) {
    event.exception = event.exception || {};
    event.exception.values = event.exception.values || [];
    event.exception.values[0] = event.exception.values[0] || {};
    event.exception.values[0].value = event.exception.values[0].value || value || '';
    event.exception.values[0].type = event.exception.values[0].type || type || 'Error';
}

/** Base Transport class implementation */
var BaseTransport = /** @class */ (function () {
    function BaseTransport(options) {
        this.options = options;
        /** A simple buffer holding all requests. */
        this.buffer = new core.PromiseBuffer(30);
        this.url = new core.API(this.options.dsn).getStoreEndpointWithUrlEncodedAuth();
    }
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.sendEvent = function (_) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                throw new core.SentryError('Transport Class has to implement `sendEvent` method');
            });
        });
    };
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.close = function (timeout) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.buffer.drain(timeout)];
            });
        });
    };
    return BaseTransport;
}());

var global$1 = misc_3();
/** `fetch` based transport */
var FetchTransport = /** @class */ (function (_super) {
    tslib_1.__extends(FetchTransport, _super);
    function FetchTransport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    FetchTransport.prototype.sendEvent = function (body) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var defaultOptions;
            return tslib_1.__generator(this, function (_a) {
                defaultOptions = {
                    body: body,
                    method: 'POST',
                    // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default
                    // https://caniuse.com/#feat=referrer-policy
                    // It doesn't. And it throw exception instead of ignoring this parameter...
                    // REF: https://github.com/getsentry/raven-js/issues/1233
                    referrerPolicy: (supports_8() ? 'origin' : ''),
                };
                return [2 /*return*/, this.buffer.add(global$1.fetch(this.url, defaultOptions).then(function (response) { return ({
                        status: dist_2.fromHttpCode(response.status),
                    }); }))];
            });
        });
    };
    return FetchTransport;
}(BaseTransport));

/** `XHR` based transport */
var XHRTransport = /** @class */ (function (_super) {
    tslib_1.__extends(XHRTransport, _super);
    function XHRTransport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    XHRTransport.prototype.sendEvent = function (body) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.buffer.add(new Promise(function (resolve, reject) {
                        var request = new XMLHttpRequest();
                        request.onreadystatechange = function () {
                            if (request.readyState !== 4) {
                                return;
                            }
                            if (request.status === 200) {
                                resolve({
                                    status: dist_2.fromHttpCode(request.status),
                                });
                            }
                            reject(request);
                        };
                        request.open('POST', _this.url);
                        request.send(body);
                    }))];
            });
        });
    };
    return XHRTransport;
}(BaseTransport));

var global$2 = misc_3();
/** `sendBeacon` based transport */
var BeaconTransport = /** @class */ (function (_super) {
    tslib_1.__extends(BeaconTransport, _super);
    function BeaconTransport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    BeaconTransport.prototype.sendEvent = function (body) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                result = global$2.navigator.sendBeacon(this.url, body);
                return [2 /*return*/, this.buffer.add(Promise.resolve({
                        status: result ? dist_2.Success : dist_2.Failed,
                    }))];
            });
        });
    };
    return BeaconTransport;
}(BaseTransport));



var index$1 = /*#__PURE__*/Object.freeze({
	BaseTransport: BaseTransport,
	FetchTransport: FetchTransport,
	XHRTransport: XHRTransport,
	BeaconTransport: BeaconTransport
});

/** The Sentry Browser SDK Backend. */
var BrowserBackend = /** @class */ (function (_super) {
    tslib_1.__extends(BrowserBackend, _super);
    function BrowserBackend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype.install = function () {
        // We are only called by the client if the SDK is enabled and a valid Dsn
        // has been configured. If no Dsn is present, this indicates a programming
        // error.
        var dsn = this.options.dsn;
        if (!dsn) {
            throw new core.SentryError('Invariant exception: install() must not be called when disabled');
        }
        Error.stackTraceLimit = 50;
        return true;
    };
    /**
     * @inheritdoc
     */
    BrowserBackend.prototype.setupTransport = function () {
        if (!this.options.dsn) {
            // We return the noop transport here in case there is no Dsn.
            return _super.prototype.setupTransport.call(this);
        }
        var transportOptions = this.options.transportOptions ? this.options.transportOptions : { dsn: this.options.dsn };
        if (this.options.transport) {
            return new this.options.transport(transportOptions);
        }
        else if (supports_6()) {
            return new BeaconTransport(transportOptions);
        }
        else if (supports_4()) {
            return new FetchTransport(transportOptions);
        }
        return new XHRTransport(transportOptions);
    };
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype.eventFromException = function (exception, hint) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var event, ex, ex, name_1, message, ex, ex;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(is_2(exception) && exception.error)) return [3 /*break*/, 1];
                        ex = exception;
                        exception = ex.error; // tslint:disable-line:no-parameter-reassignment
                        event = eventFromStacktrace(computeStackTrace(exception));
                        return [3 /*break*/, 7];
                    case 1:
                        if (!(is_3(exception) || is_4(exception))) return [3 /*break*/, 3];
                        ex = exception;
                        name_1 = ex.name || (is_3(ex) ? 'DOMError' : 'DOMException');
                        message = ex.message ? name_1 + ": " + ex.message : name_1;
                        return [4 /*yield*/, this.eventFromMessage(message, dist_1.Error, hint)];
                    case 2:
                        event = _a.sent();
                        addExceptionTypeValue(event, message);
                        return [3 /*break*/, 7];
                    case 3:
                        if (!is_1(exception)) return [3 /*break*/, 4];
                        // we have a real Error object, do nothing
                        event = eventFromStacktrace(computeStackTrace(exception));
                        return [3 /*break*/, 7];
                    case 4:
                        if (!(is_10(exception) && hint && hint.syntheticException)) return [3 /*break*/, 5];
                        ex = exception;
                        event = eventFromPlainObject(ex, hint.syntheticException);
                        addExceptionTypeValue(event, 'Custom Object');
                        return [3 /*break*/, 7];
                    case 5:
                        ex = exception;
                        return [4 /*yield*/, this.eventFromMessage(ex, undefined, hint)];
                    case 6:
                        event = _a.sent();
                        addExceptionTypeValue(event, "" + ex);
                        _a.label = 7;
                    case 7:
                        event = tslib_1.__assign({}, event, { event_id: hint && hint.event_id, exception: tslib_1.__assign({}, event.exception, { mechanism: {
                                    handled: true,
                                    type: 'generic',
                                } }) });
                        return [2 /*return*/, event];
                }
            });
        });
    };
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype.eventFromMessage = function (message, level, hint) {
        if (level === void 0) { level = dist_1.Info; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var event, stacktrace, frames_1;
            return tslib_1.__generator(this, function (_a) {
                event = {
                    event_id: hint && hint.event_id,
                    level: level,
                    message: message,
                };
                if (this.options.attachStacktrace && hint && hint.syntheticException) {
                    stacktrace = computeStackTrace(hint.syntheticException);
                    frames_1 = prepareFramesForEvent(stacktrace.stack);
                    event.stacktrace = {
                        frames: frames_1,
                    };
                }
                return [2 /*return*/, event];
            });
        });
    };
    return BrowserBackend;
}(core.BaseBackend));

var logger_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

// TODO: Implement different loggers for different environments
var global = misc.getGlobalObject();
/** JSDoc */
var Logger = /** @class */ (function () {
    /** JSDoc */
    function Logger() {
        this.enabled = false;
    }
    /** JSDoc */
    Logger.prototype.disable = function () {
        this.enabled = false;
    };
    /** JSDoc */
    Logger.prototype.enable = function () {
        this.enabled = true;
    };
    /** JSDoc */
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.enabled) {
            return;
        }
        misc.consoleSandbox(function () {
            global.console.log("Sentry Logger [Log]: " + args.join(' ')); // tslint:disable-line:no-console
        });
    };
    /** JSDoc */
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.enabled) {
            return;
        }
        misc.consoleSandbox(function () {
            global.console.warn("Sentry Logger [Warn]: " + args.join(' ')); // tslint:disable-line:no-console
        });
    };
    /** JSDoc */
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.enabled) {
            return;
        }
        misc.consoleSandbox(function () {
            global.console.error("Sentry Logger [Error]: " + args.join(' ')); // tslint:disable-line:no-console
        });
    };
    return Logger;
}());
var logger = new Logger();
exports.logger = logger;

});

unwrapExports(logger_1);
var logger_2 = logger_1.logger;

var SDK_NAME = 'sentry.javascript.browser';
var SDK_VERSION = '4.6.4';

/**
 * The Sentry Browser SDK Client.
 *
 * @see BrowserOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */
var BrowserClient = /** @class */ (function (_super) {
    tslib_1.__extends(BrowserClient, _super);
    /**
     * Creates a new Browser SDK instance.
     *
     * @param options Configuration options for this SDK.
     */
    function BrowserClient(options) {
        return _super.call(this, BrowserBackend, options) || this;
    }
    /**
     * @inheritDoc
     */
    BrowserClient.prototype.prepareEvent = function (event, scope, hint) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                event.platform = event.platform || 'javascript';
                event.sdk = tslib_1.__assign({}, event.sdk, { name: SDK_NAME, packages: tslib_1.__spread(((event.sdk && event.sdk.packages) || []), [
                        {
                            name: 'npm:@sentry/browser',
                            version: SDK_VERSION,
                        },
                    ]), version: SDK_VERSION });
                return [2 /*return*/, _super.prototype.prepareEvent.call(this, event, scope, hint)];
            });
        });
    };
    /**
     * Show a report dialog to the user to send feedback to a specific event.
     *
     * @param options Set individual options for the dialog
     */
    BrowserClient.prototype.showReportDialog = function (options) {
        if (options === void 0) { options = {}; }
        // doesn't work without a document (React Native)
        var document = misc_3().document;
        if (!document) {
            return;
        }
        if (!this.isEnabled()) {
            logger_2.error('Trying to call showReportDialog with Sentry Client is disabled');
            return;
        }
        var dsn = options.dsn || this.getDsn();
        if (!options.eventId) {
            logger_2.error('Missing `eventId` option in showReportDialog call');
            return;
        }
        if (!dsn) {
            logger_2.error('Missing `Dsn` option in showReportDialog call');
            return;
        }
        var script = document.createElement('script');
        script.async = true;
        script.src = new core.API(dsn).getReportDialogEndpoint(options);
        (document.head || document.body).appendChild(script);
    };
    return BrowserClient;
}(core.BaseClient));

var debounceDuration = 1000;
var keypressTimeout;
var lastCapturedEvent;
var ignoreOnError = 0;
/** JSDoc */
function shouldIgnoreOnError() {
    return ignoreOnError > 0;
}
/** JSDoc */
function ignoreNextOnError() {
    // onerror should trigger before setTimeout
    ignoreOnError += 1;
    setTimeout(function () {
        ignoreOnError -= 1;
    });
}
/**
 * Instruments the given function and sends an event to Sentry every time the
 * function throws an exception.
 *
 * @param fn A function to wrap.
 * @returns The wrapped function.
 */
function wrap(fn, options, before) {
    if (options === void 0) { options = {}; }
    if (!is_6(fn)) {
        return fn;
    }
    try {
        // We don't wanna wrap it twice
        if (fn.__sentry__) {
            return fn;
        }
        // If this has already been wrapped in the past, return that wrapped function
        if (fn.__sentry_wrapped__) {
            return fn.__sentry_wrapped__;
        }
    }
    catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        // Bail on wrapping and return the function as-is (defers to window.onerror).
        return fn;
    }
    var sentryWrapped = function () {
        var _this = this;
        if (before && is_6(before)) {
            before.apply(this, arguments);
        }
        var args = Array.prototype.slice.call(arguments);
        try {
            // Attempt to invoke user-land function
            // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
            //       means Raven caught an error invoking your application code. This is
            //       expected behavior and NOT indicative of a bug with Raven.js.
            var wrappedArguments = args.map(function (arg) { return wrap(arg, options); });
            if (fn.handleEvent) {
                return fn.handleEvent.apply(this, wrappedArguments);
            }
            else {
                return fn.apply(this, wrappedArguments);
            }
        }
        catch (ex) {
            ignoreNextOnError();
            core.withScope(function (scope) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    scope.addEventProcessor(function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var processedEvent;
                        return tslib_1.__generator(this, function (_a) {
                            processedEvent = tslib_1.__assign({}, event);
                            if (options.mechanism) {
                                processedEvent.exception = processedEvent.exception || {};
                                processedEvent.exception.mechanism = options.mechanism;
                            }
                            processedEvent.extra = tslib_1.__assign({}, processedEvent.extra, { arguments: object_11(args, 3) });
                            return [2 /*return*/, processedEvent];
                        });
                    }); });
                    core.captureException(ex);
                    return [2 /*return*/];
                });
            }); });
            throw ex;
        }
    };
    // Accessing some objects may throw
    // ref: https://github.com/getsentry/sentry-javascript/issues/1168
    try {
        for (var property in fn) {
            if (Object.prototype.hasOwnProperty.call(fn, property)) {
                sentryWrapped[property] = fn[property];
            }
        }
    }
    catch (_oO) { } // tslint:disable-line:no-empty
    fn.prototype = fn.prototype || {};
    sentryWrapped.prototype = fn.prototype;
    Object.defineProperty(fn, '__sentry_wrapped__', {
        enumerable: false,
        value: sentryWrapped,
    });
    // Signal that this function has been wrapped/filled already
    // for both debugging and to prevent it to being wrapped/filled twice
    Object.defineProperties(sentryWrapped, {
        __sentry__: {
            enumerable: false,
            value: true,
        },
        __sentry_original__: {
            enumerable: false,
            value: fn,
        },
    });
    // Restore original function name (not all browsers allow that)
    try {
        Object.defineProperty(sentryWrapped, 'name', {
            get: function () {
                return fn.name;
            },
        });
    }
    catch (_oO) {
        /*no-empty*/
    }
    return sentryWrapped;
}
/**
 * Wraps addEventListener to capture UI breadcrumbs
 * @param eventName the event name (e.g. "click")
 * @returns wrapped breadcrumb events handler
 */
function breadcrumbEventHandler(eventName) {
    return function (event) {
        // reset keypress timeout; e.g. triggering a 'click' after
        // a 'keypress' will reset the keypress debounce so that a new
        // set of keypresses can be recorded
        keypressTimeout = undefined;
        // It's possible this handler might trigger multiple times for the same
        // event (e.g. event propagation through node ancestors). Ignore if we've
        // already captured the event.
        if (lastCapturedEvent === event) {
            return;
        }
        lastCapturedEvent = event;
        // try/catch both:
        // - accessing event.target (see getsentry/raven-js#838, #768)
        // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
        //   can throw an exception in some circumstances.
        var target;
        try {
            target = misc_5(event.target);
        }
        catch (e) {
            target = '<unknown>';
        }
        core.getCurrentHub().addBreadcrumb({
            category: "ui." + eventName,
            message: target,
        }, {
            event: event,
            name: eventName,
        });
    };
}
/**
 * Wraps addEventListener to capture keypress UI events
 * @returns wrapped keypress events handler
 */
function keypressEventHandler() {
    // TODO: if somehow user switches keypress target before
    //       debounce timeout is triggered, we will only capture
    //       a single breadcrumb from the FIRST target (acceptable?)
    return function (event) {
        var target;
        try {
            target = event.target;
        }
        catch (e) {
            // just accessing event properties can throw an exception in some rare circumstances
            // see: https://github.com/getsentry/raven-js/issues/838
            return;
        }
        var tagName = target && target.tagName;
        // only consider keypress events on actual input elements
        // this will disregard keypresses targeting body (e.g. tabbing
        // through elements, hotkeys, etc)
        if (!tagName || (tagName !== 'INPUT' && tagName !== 'TEXTAREA' && !target.isContentEditable)) {
            return;
        }
        // record first keypress in a series, but ignore subsequent
        // keypresses until debounce clears
        if (!keypressTimeout) {
            breadcrumbEventHandler('input')(event);
        }
        clearTimeout(keypressTimeout);
        keypressTimeout = setTimeout(function () {
            keypressTimeout = undefined;
        }, debounceDuration);
    };
}

/** Global handlers */
var GlobalHandlers = /** @class */ (function () {
    /** JSDoc */
    function GlobalHandlers(options) {
        /**
         * @inheritDoc
         */
        this.name = GlobalHandlers.id;
        this.options = tslib_1.__assign({ onerror: true, onunhandledrejection: true }, options);
    }
    /**
     * @inheritDoc
     */
    GlobalHandlers.prototype.setupOnce = function () {
        subscribe(function (stack, _, error) {
            // TODO: use stack.context to get a valuable information from TraceKit, eg.
            // [
            //   0: "  })"
            //   1: ""
            //   2: "  function foo () {"
            //   3: "    Sentry.captureException('some error')"
            //   4: "    Sentry.captureMessage('some message')"
            //   5: "    throw 'foo'"
            //   6: "  }"
            //   7: ""
            //   8: "  function bar () {"
            //   9: "    foo();"
            //   10: "  }"
            // ]
            if (shouldIgnoreOnError()) {
                return;
            }
            var self = core.getCurrentHub().getIntegration(GlobalHandlers);
            if (self) {
                core.getCurrentHub().captureEvent(self.eventFromGlobalHandler(stack), { originalException: error, data: { stack: stack } });
            }
        });
        if (this.options.onerror) {
            logger_2.log('Global Handler attached: onerror');
            installGlobalHandler();
        }
        if (this.options.onunhandledrejection) {
            logger_2.log('Global Handler attached: onunhandledrejection');
            installGlobalUnhandledRejectionHandler();
        }
    };
    /**
     * This function creates an SentryEvent from an TraceKitStackTrace.
     *
     * @param stacktrace TraceKitStackTrace to be converted to an SentryEvent.
     */
    GlobalHandlers.prototype.eventFromGlobalHandler = function (stacktrace) {
        var event = eventFromStacktrace(stacktrace);
        var data = {
            mode: stacktrace.mode,
        };
        if (stacktrace.message) {
            data.message = stacktrace.message;
        }
        if (stacktrace.name) {
            data.name = stacktrace.name;
        }
        var newEvent = tslib_1.__assign({}, event, { exception: tslib_1.__assign({}, event.exception, { mechanism: {
                    data: data,
                    handled: false,
                    type: stacktrace.mechanism,
                } }) });
        var fallbackValue = typeof stacktrace.original !== 'undefined'
            ? "" + string_1(object_1(object_11(stacktrace.original)), 300)
            : '';
        var fallbackType = stacktrace.mechanism === 'onunhandledrejection' ? 'UnhandledRejection' : 'Error';
        // This makes sure we have type/value in every exception
        addExceptionTypeValue(newEvent, fallbackValue, fallbackType);
        return newEvent;
    };
    /**
     * @inheritDoc
     */
    GlobalHandlers.id = 'GlobalHandlers';
    return GlobalHandlers;
}());

/** Wrap timer functions and event targets to catch errors and provide better meta data */
var TryCatch = /** @class */ (function () {
    function TryCatch() {
        /** JSDoc */
        this.ignoreOnError = 0;
        /**
         * @inheritDoc
         */
        this.name = TryCatch.id;
    }
    /** JSDoc */
    TryCatch.prototype.wrapTimeFunction = function (original) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var originalCallback = args[0];
            args[0] = wrap(originalCallback, {
                mechanism: {
                    data: { function: getFunctionName(original) },
                    handled: true,
                    type: 'instrument',
                },
            });
            return original.apply(this, args);
        };
    };
    /** JSDoc */
    TryCatch.prototype.wrapRAF = function (original) {
        return function (callback) {
            return original(wrap(callback, {
                mechanism: {
                    data: {
                        function: 'requestAnimationFrame',
                        handler: getFunctionName(original),
                    },
                    handled: true,
                    type: 'instrument',
                },
            }));
        };
    };
    /** JSDoc */
    TryCatch.prototype.wrapEventTarget = function (target) {
        var global = misc_3();
        var proto = global[target] && global[target].prototype;
        if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
            return;
        }
        object_4(proto, 'addEventListener', function (original) {
            return function (eventName, fn, options) {
                try {
                    fn.handleEvent = wrap(fn.handleEvent.bind(fn), {
                        mechanism: {
                            data: {
                                function: 'handleEvent',
                                handler: getFunctionName(fn),
                                target: target,
                            },
                            handled: true,
                            type: 'instrument',
                        },
                    });
                }
                catch (err) {
                    // can sometimes get 'Permission denied to access property "handle Event'
                }
                // More breadcrumb DOM capture ... done here and not in `_instrumentBreadcrumbs`
                // so that we don't have more than one wrapper function
                var before;
                var clickHandler;
                var keypressHandler;
                if (target === 'EventTarget' || target === 'Node') {
                    // NOTE: generating multiple handlers per addEventListener invocation, should
                    //       revisit and verify we can just use one (almost certainly)
                    clickHandler = breadcrumbEventHandler('click');
                    keypressHandler = keypressEventHandler();
                    before = function (event) {
                        // need to intercept every DOM event in `before` argument, in case that
                        // same wrapped method is re-used for different events (e.g. mousemove THEN click)
                        // see #724
                        if (!event) {
                            return;
                        }
                        var eventType;
                        try {
                            eventType = event.type;
                        }
                        catch (e) {
                            // just accessing event properties can throw an exception in some rare circumstances
                            // see: https://github.com/getsentry/raven-js/issues/838
                            return;
                        }
                        if (eventType === 'click') {
                            return clickHandler(event);
                        }
                        else if (eventType === 'keypress') {
                            return keypressHandler(event);
                        }
                    };
                }
                return original.call(this, eventName, wrap(fn, {
                    mechanism: {
                        data: {
                            function: 'addEventListener',
                            handler: getFunctionName(fn),
                            target: target,
                        },
                        handled: true,
                        type: 'instrument',
                    },
                }, before), options);
            };
        });
        object_4(proto, 'removeEventListener', function (original) {
            return function (eventName, fn, options) {
                var callback = fn;
                try {
                    callback = callback && (callback.__sentry_wrapped__ || callback);
                }
                catch (e) {
                    // ignore, accessing __sentry_wrapped__ will throw in some Selenium environments
                }
                return original.call(this, eventName, callback, options);
            };
        });
    };
    /**
     * Wrap timer functions and event targets to catch errors
     * and provide better metadata.
     */
    TryCatch.prototype.setupOnce = function () {
        this.ignoreOnError = this.ignoreOnError;
        var global = misc_3();
        object_4(global, 'setTimeout', this.wrapTimeFunction.bind(this));
        object_4(global, 'setInterval', this.wrapTimeFunction.bind(this));
        object_4(global, 'requestAnimationFrame', this.wrapRAF.bind(this));
        [
            'EventTarget',
            'Window',
            'Node',
            'ApplicationCache',
            'AudioTrackList',
            'ChannelMergerNode',
            'CryptoOperation',
            'EventSource',
            'FileReader',
            'HTMLUnknownElement',
            'IDBDatabase',
            'IDBRequest',
            'IDBTransaction',
            'KeyOperation',
            'MediaController',
            'MessagePort',
            'ModalWindow',
            'Notification',
            'SVGElementInstance',
            'Screen',
            'TextTrack',
            'TextTrackCue',
            'TextTrackList',
            'WebSocket',
            'WebSocketWorker',
            'Worker',
            'XMLHttpRequest',
            'XMLHttpRequestEventTarget',
            'XMLHttpRequestUpload',
        ].forEach(this.wrapEventTarget.bind(this));
    };
    /**
     * @inheritDoc
     */
    TryCatch.id = 'TryCatch';
    return TryCatch;
}());
/**
 * Safely extract function name from itself
 */
function getFunctionName(fn) {
    try {
        return (fn && fn.name) || '<anonymous>';
    }
    catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        return '<anonymous>';
    }
}

var global$3 = misc_3();
var lastHref;
/** Default Breadcrumbs instrumentations */
var Breadcrumbs = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Breadcrumbs(options) {
        /**
         * @inheritDoc
         */
        this.name = Breadcrumbs.id;
        this.options = tslib_1.__assign({ beacon: true, console: true, dom: true, fetch: true, history: true, sentry: true, xhr: true }, options);
    }
    /** JSDoc */
    Breadcrumbs.prototype.instrumentBeacon = function () {
        if (!supports_6()) {
            return;
        }
        /** JSDoc */
        function beaconReplacementFunction(originalBeaconFunction) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var url = args[0];
                var data = args[1];
                // If the browser successfully queues the request for delivery, the method returns "true" and returns "false" otherwise.
                // https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API/Using_the_Beacon_API
                var result = originalBeaconFunction.apply(this, args);
                var client = core.getCurrentHub().getClient();
                var dsn = client && client.getDsn();
                if (dsn) {
                    var filterUrl = new core.API(dsn).getStoreEndpoint();
                    // if Sentry key appears in URL, don't capture it as a request
                    // but rather as our own 'sentry' type breadcrumb
                    if (filterUrl && string_4(url, filterUrl)) {
                        addSentryBreadcrumb(data);
                        return result;
                    }
                }
                // What is wrong with you TypeScript...
                var breadcrumbData = {
                    category: 'beacon',
                    data: data,
                    type: 'http',
                };
                if (!result) {
                    breadcrumbData.level = dist_1.Error;
                }
                Breadcrumbs.addBreadcrumb(breadcrumbData, {
                    input: args,
                    result: result,
                });
                return result;
            };
        }
        object_4(global$3.navigator, 'sendBeacon', beaconReplacementFunction);
    };
    /** JSDoc */
    Breadcrumbs.prototype.instrumentConsole = function () {
        if (!('console' in global$3)) {
            return;
        }
        ['debug', 'info', 'warn', 'error', 'log'].forEach(function (level) {
            if (!(level in global$3.console)) {
                return;
            }
            object_4(global$3.console, level, function (originalConsoleLevel) {
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var breadcrumbData = {
                        category: 'console',
                        data: {
                            extra: {
                                arguments: object_11(args, 3),
                            },
                            logger: 'console',
                        },
                        level: dist_1.fromString(level),
                        message: string_3(args, ' '),
                    };
                    if (level === 'assert') {
                        if (args[0] === false) {
                            breadcrumbData.message = "Assertion failed: " + (string_3(args.slice(1), ' ') || 'console.assert');
                            breadcrumbData.data.extra.arguments = object_11(args.slice(1), 3);
                        }
                    }
                    Breadcrumbs.addBreadcrumb(breadcrumbData, {
                        input: args,
                        level: level,
                    });
                    // this fails for some browsers. :(
                    if (originalConsoleLevel) {
                        Function.prototype.apply.call(originalConsoleLevel, global$3.console, args);
                    }
                };
            });
        });
    };
    /** JSDoc */
    Breadcrumbs.prototype.instrumentDOM = function () {
        if (!('document' in global$3)) {
            return;
        }
        // Capture breadcrumbs from any click that is unhandled / bubbled up all the way
        // to the document. Do this before we instrument addEventListener.
        global$3.document.addEventListener('click', breadcrumbEventHandler('click'), false);
        global$3.document.addEventListener('keypress', keypressEventHandler(), false);
    };
    /** JSDoc */
    Breadcrumbs.prototype.instrumentFetch = function () {
        if (!supports_5()) {
            return;
        }
        object_4(global$3, 'fetch', function (originalFetch) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var fetchInput = args[0];
                var method = 'GET';
                var url;
                if (typeof fetchInput === 'string') {
                    url = fetchInput;
                }
                else if ('Request' in global$3 && fetchInput instanceof Request) {
                    url = fetchInput.url;
                    if (fetchInput.method) {
                        method = fetchInput.method;
                    }
                }
                else {
                    url = String(fetchInput);
                }
                if (args[1] && args[1].method) {
                    method = args[1].method;
                }
                var client = core.getCurrentHub().getClient();
                var dsn = client && client.getDsn();
                if (dsn) {
                    var filterUrl = new core.API(dsn).getStoreEndpoint();
                    // if Sentry key appears in URL, don't capture it as a request
                    // but rather as our own 'sentry' type breadcrumb
                    if (filterUrl && string_4(url, filterUrl)) {
                        if (method === 'POST' && args[1] && args[1].body) {
                            addSentryBreadcrumb(args[1].body);
                        }
                        return originalFetch.apply(global$3, args);
                    }
                }
                var fetchData = {
                    method: method,
                    url: url,
                };
                return originalFetch
                    .apply(global$3, args)
                    .then(function (response) {
                    fetchData.status_code = response.status;
                    Breadcrumbs.addBreadcrumb({
                        category: 'fetch',
                        data: fetchData,
                        type: 'http',
                    }, {
                        input: args,
                        response: response,
                    });
                    return response;
                })
                    .catch(function (error) {
                    Breadcrumbs.addBreadcrumb({
                        category: 'fetch',
                        data: fetchData,
                        level: dist_1.Error,
                        type: 'http',
                    }, {
                        error: error,
                        input: args,
                    });
                    throw error;
                });
            };
        });
    };
    /** JSDoc */
    Breadcrumbs.prototype.instrumentHistory = function () {
        var _this = this;
        if (!supports_9()) {
            return;
        }
        var captureUrlChange = function (from, to) {
            var parsedLoc = misc_7(global$3.location.href);
            var parsedTo = misc_7(to);
            var parsedFrom = misc_7(from);
            // Initial pushState doesn't provide `from` information
            if (!parsedFrom.path) {
                parsedFrom = parsedLoc;
            }
            // because onpopstate only tells you the "new" (to) value of location.href, and
            // not the previous (from) value, we need to track the value of the current URL
            // state ourselves
            lastHref = to;
            // Use only the path component of the URL if the URL matches the current
            // document (almost all the time when using pushState)
            if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
                // tslint:disable-next-line:no-parameter-reassignment
                to = parsedTo.relative;
            }
            if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
                // tslint:disable-next-line:no-parameter-reassignment
                from = parsedFrom.relative;
            }
            Breadcrumbs.addBreadcrumb({
                category: 'navigation',
                data: {
                    from: from,
                    to: to,
                },
            });
        };
        // record navigation (URL) changes
        var oldOnPopState = global$3.onpopstate;
        global$3.onpopstate = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var currentHref = global$3.location.href;
            captureUrlChange(lastHref, currentHref);
            if (oldOnPopState) {
                return oldOnPopState.apply(_this, args);
            }
        };
        /** JSDoc */
        function historyReplacementFunction(originalHistoryFunction) {
            // note history.pushState.length is 0; intentionally not declaring
            // params to preserve 0 arity
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var url = args.length > 2 ? args[2] : undefined;
                // url argument is optional
                if (url) {
                    // coerce to string (this is what pushState does)
                    captureUrlChange(lastHref, String(url));
                }
                return originalHistoryFunction.apply(this, args);
            };
        }
        object_4(global$3.history, 'pushState', historyReplacementFunction);
        object_4(global$3.history, 'replaceState', historyReplacementFunction);
    };
    /** JSDoc */
    Breadcrumbs.prototype.instrumentXHR = function () {
        if (!('XMLHttpRequest' in global$3)) {
            return;
        }
        /** JSDoc */
        function wrapProp(prop, xhr) {
            // TODO: Fix XHR types
            if (prop in xhr && is_6(xhr[prop])) {
                object_4(xhr, prop, function (original) {
                    return wrap(original, {
                        mechanism: {
                            data: {
                                function: prop,
                                handler: (original && original.name) || '<anonymous>',
                            },
                            handled: true,
                            type: 'instrument',
                        },
                    });
                });
            }
        }
        var xhrproto = XMLHttpRequest.prototype;
        object_4(xhrproto, 'open', function (originalOpen) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var url = args[1];
                this.__sentry_xhr__ = {
                    method: args[0],
                    url: args[1],
                };
                var client = core.getCurrentHub().getClient();
                var dsn = client && client.getDsn();
                if (dsn) {
                    var filterUrl = new core.API(dsn).getStoreEndpoint();
                    // if Sentry key appears in URL, don't capture it as a request
                    // but rather as our own 'sentry' type breadcrumb
                    if (is_7(url) && (filterUrl && string_4(url, filterUrl))) {
                        this.__sentry_own_request__ = true;
                    }
                }
                return originalOpen.apply(this, args);
            };
        });
        object_4(xhrproto, 'send', function (originalSend) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var xhr = this; // tslint:disable-line:no-this-assignment
                if (xhr.__sentry_own_request__) {
                    addSentryBreadcrumb(args[0]);
                }
                /** JSDoc */
                function onreadystatechangeHandler() {
                    if (xhr.readyState === 4) {
                        if (xhr.__sentry_own_request__) {
                            return;
                        }
                        try {
                            // touching statusCode in some platforms throws
                            // an exception
                            if (xhr.__sentry_xhr__) {
                                xhr.__sentry_xhr__.status_code = xhr.status;
                            }
                        }
                        catch (e) {
                            /* do nothing */
                        }
                        Breadcrumbs.addBreadcrumb({
                            category: 'xhr',
                            data: xhr.__sentry_xhr__,
                            type: 'http',
                        }, {
                            xhr: xhr,
                        });
                    }
                }
                ['onload', 'onerror', 'onprogress'].forEach(function (prop) {
                    wrapProp(prop, xhr);
                });
                if ('onreadystatechange' in xhr && is_6(xhr.onreadystatechange)) {
                    object_4(xhr, 'onreadystatechange', function (original) {
                        return wrap(original, {
                            mechanism: {
                                data: {
                                    function: 'onreadystatechange',
                                    handler: (original && original.name) || '<anonymous>',
                                },
                                handled: true,
                                type: 'instrument',
                            },
                        }, onreadystatechangeHandler);
                    });
                }
                else {
                    // if onreadystatechange wasn't actually set by the page on this xhr, we
                    // are free to set our own and capture the breadcrumb
                    xhr.onreadystatechange = onreadystatechangeHandler;
                }
                return originalSend.apply(this, args);
            };
        });
    };
    /**
     * Helper that checks if integration is enabled on the client.
     * @param breadcrumb Breadcrumb
     * @param hint SentryBreadcrumbHint
     */
    Breadcrumbs.addBreadcrumb = function (breadcrumb, hint) {
        if (core.getCurrentHub().getIntegration(Breadcrumbs)) {
            core.getCurrentHub().addBreadcrumb(breadcrumb, hint);
        }
    };
    /**
     * Instrument browser built-ins w/ breadcrumb capturing
     *  - Console API
     *  - DOM API (click/typing)
     *  - XMLHttpRequest API
     *  - Fetch API
     *  - History API
     */
    Breadcrumbs.prototype.setupOnce = function () {
        if (this.options.console) {
            this.instrumentConsole();
        }
        if (this.options.dom) {
            this.instrumentDOM();
        }
        if (this.options.xhr) {
            this.instrumentXHR();
        }
        if (this.options.fetch) {
            this.instrumentFetch();
        }
        if (this.options.beacon) {
            this.instrumentBeacon();
        }
        if (this.options.history) {
            this.instrumentHistory();
        }
    };
    /**
     * @inheritDoc
     */
    Breadcrumbs.id = 'Breadcrumbs';
    return Breadcrumbs;
}());
/** JSDoc */
function addSentryBreadcrumb(serializedData) {
    // There's always something that can go wrong with deserialization...
    try {
        var event_1 = object_2(serializedData);
        Breadcrumbs.addBreadcrumb({
            category: 'sentry',
            event_id: event_1.event_id,
            level: event_1.level || dist_1.fromString('error'),
            message: misc_8(event_1),
        }, {
            event: event_1,
        });
    }
    catch (_oO) {
        logger_2.error('Error while adding sentry type breadcrumb');
    }
}

var DEFAULT_KEY = 'cause';
var DEFAULT_LIMIT = 5;
/** Adds SDK info to an event. */
var LinkedErrors = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function LinkedErrors(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = LinkedErrors.id;
        this.key = options.key || DEFAULT_KEY;
        this.limit = options.limit || DEFAULT_LIMIT;
    }
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype.setupOnce = function () {
        var _this = this;
        core.addGlobalEventProcessor(function (event, hint) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var self;
            return tslib_1.__generator(this, function (_a) {
                self = core.getCurrentHub().getIntegration(LinkedErrors);
                if (self) {
                    return [2 /*return*/, self.handler(event, hint)];
                }
                return [2 /*return*/, event];
            });
        }); });
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype.handler = function (event, hint) {
        if (!event.exception || !event.exception.values || !hint || !(hint.originalException instanceof Error)) {
            return event;
        }
        var linkedErrors = this.walkErrorTree(hint.originalException, this.key);
        event.exception.values = tslib_1.__spread(linkedErrors, event.exception.values);
        return event;
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype.walkErrorTree = function (error, key, stack) {
        if (stack === void 0) { stack = []; }
        if (!(error[key] instanceof Error) || stack.length + 1 >= this.limit) {
            return stack;
        }
        var stacktrace = computeStackTrace(error[key]);
        var exception = exceptionFromStacktrace(stacktrace);
        return this.walkErrorTree(error[key], key, tslib_1.__spread([exception], stack));
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.id = 'LinkedErrors';
    return LinkedErrors;
}());

var global$4 = misc_3();
/** UserAgent */
var UserAgent = /** @class */ (function () {
    function UserAgent() {
        /**
         * @inheritDoc
         */
        this.name = UserAgent.id;
    }
    /**
     * @inheritDoc
     */
    UserAgent.prototype.setupOnce = function () {
        var _this = this;
        core.addGlobalEventProcessor(function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var request;
            return tslib_1.__generator(this, function (_a) {
                if (core.getCurrentHub().getIntegration(UserAgent)) {
                    if (!global$4.navigator || !global$4.location) {
                        return [2 /*return*/, event];
                    }
                    request = event.request || {};
                    request.url = request.url || global$4.location.href;
                    request.headers = request.headers || {};
                    request.headers['User-Agent'] = global$4.navigator.userAgent;
                    return [2 /*return*/, tslib_1.__assign({}, event, { request: request })];
                }
                return [2 /*return*/, event];
            });
        }); });
    };
    /**
     * @inheritDoc
     */
    UserAgent.id = 'UserAgent';
    return UserAgent;
}());

/** JSDoc */
var Ember = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Ember(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = Ember.id;
        this.Ember =
            options.Ember ||
                misc_3().Ember;
    }
    /**
     * @inheritDoc
     */
    Ember.prototype.setupOnce = function () {
        var _this = this;
        if (!this.Ember) {
            logger_2.error('EmberIntegration is missing an Ember instance');
            return;
        }
        var oldOnError = this.Ember.onerror;
        this.Ember.onerror = function (error) {
            if (core.getCurrentHub().getIntegration(Ember)) {
                core.withScope(function (scope) {
                    _this.addIntegrationToSdkInfo(scope);
                    core.captureException(error);
                });
            }
            if (typeof oldOnError === 'function') {
                oldOnError.call(_this.Ember, error);
            }
            else if (_this.Ember.testing) {
                throw error;
            }
        };
        this.Ember.RSVP.on('error', function (reason) {
            if (core.getCurrentHub().getIntegration(Ember)) {
                core.withScope(function (scope) {
                    if (reason instanceof Error) {
                        scope.setExtra('context', 'Unhandled Promise error detected');
                        _this.addIntegrationToSdkInfo(scope);
                        core.captureException(reason);
                    }
                    else {
                        scope.setExtra('reason', reason);
                        _this.addIntegrationToSdkInfo(scope);
                        core.captureMessage('Unhandled Promise error detected');
                    }
                });
            }
        });
    };
    /**
     * Appends SDK integrations
     * @param scope The scope currently used.
     */
    Ember.prototype.addIntegrationToSdkInfo = function (scope) {
        var _this = this;
        scope.addEventProcessor(function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var integrations;
            return tslib_1.__generator(this, function (_a) {
                if (event.sdk) {
                    integrations = event.sdk.integrations || [];
                    event.sdk = tslib_1.__assign({}, event.sdk, { integrations: tslib_1.__spread(integrations, ['ember']) });
                }
                return [2 /*return*/, event];
            });
        }); });
    };
    /**
     * @inheritDoc
     */
    Ember.id = 'Ember';
    return Ember;
}());

/** JSDoc */
var Vue = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Vue(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = Vue.id;
        this.Vue =
            options.Vue ||
                misc_3().Vue;
        this.attachProps = options.attachProps || true;
    }
    /** JSDoc */
    Vue.prototype.formatComponentName = function (vm) {
        if (vm.$root === vm) {
            return 'root instance';
        }
        var name = vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;
        return ((name ? "component <" + name + ">" : 'anonymous component') +
            (vm._isVue && vm.$options.__file ? " at " + vm.$options.__file : ''));
    };
    /**
     * @inheritDoc
     */
    Vue.prototype.setupOnce = function () {
        var _this = this;
        if (!this.Vue || !this.Vue.config) {
            logger_2.error('VueIntegration is missing a Vue instance');
            return;
        }
        var oldOnError = this.Vue.config.errorHandler;
        this.Vue.config.errorHandler = function (error, vm, info) {
            var metadata = {};
            if (is_10(vm)) {
                metadata.componentName = _this.formatComponentName(vm);
                if (_this.attachProps) {
                    metadata.propsData = vm.$options.propsData;
                }
            }
            if (!is_5(info)) {
                metadata.lifecycleHook = info;
            }
            if (core.getCurrentHub().getIntegration(Vue)) {
                core.withScope(function (scope) {
                    Object.keys(metadata).forEach(function (key) {
                        scope.setExtra(key, metadata[key]);
                    });
                    scope.addEventProcessor(function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var integrations;
                        return tslib_1.__generator(this, function (_a) {
                            if (event.sdk) {
                                integrations = event.sdk.integrations || [];
                                event.sdk = tslib_1.__assign({}, event.sdk, { integrations: tslib_1.__spread(integrations, ['vue']) });
                            }
                            return [2 /*return*/, event];
                        });
                    }); });
                    core.captureException(error);
                });
            }
            if (typeof oldOnError === 'function') {
                oldOnError.call(_this.Vue, error, vm, info);
            }
        };
    };
    /**
     * @inheritDoc
     */
    Vue.id = 'Vue';
    return Vue;
}());

/** JSDoc */
var ReportTypes;
(function (ReportTypes) {
    /** JSDoc */
    ReportTypes["Crash"] = "crash";
    /** JSDoc */
    ReportTypes["Deprecation"] = "deprecation";
    /** JSDoc */
    ReportTypes["Intervention"] = "intervention";
})(ReportTypes || (ReportTypes = {}));
/** Reporting API integration - https://w3c.github.io/reporting/ */
var ReportingObserver = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function ReportingObserver(options) {
        if (options === void 0) { options = {
            types: [ReportTypes.Crash, ReportTypes.Deprecation, ReportTypes.Intervention],
        }; }
        this.options = options;
        /**
         * @inheritDoc
         */
        this.name = ReportingObserver.id;
    }
    /**
     * @inheritDoc
     */
    ReportingObserver.prototype.setupOnce = function () {
        if (!supports_7()) {
            return;
        }
        var observer = new (misc_3().ReportingObserver)(this.handler.bind(this), {
            buffered: true,
            types: this.options.types,
        });
        observer.observe();
    };
    /**
     * @inheritDoc
     */
    ReportingObserver.prototype.handler = function (reports) {
        var e_1, _a;
        if (!core.getCurrentHub().getIntegration(ReportingObserver)) {
            return;
        }
        var _loop_1 = function (report) {
            core.withScope(function (scope) {
                scope.setExtra('url', report.url);
                var label = "ReportingObserver [" + report.type + "]";
                var details = 'No details available';
                if (report.body) {
                    // Object.keys doesn't work on ReportBody, as all properties are inheirted
                    var plainBody = {};
                    // tslint:disable-next-line:forin
                    for (var prop in report.body) {
                        plainBody[prop] = report.body[prop];
                    }
                    scope.setExtra('body', plainBody);
                    if (report.type === ReportTypes.Crash) {
                        var body = report.body;
                        // A fancy way to create a message out of crashId OR reason OR both OR fallback
                        details = [body.crashId || '', body.reason || ''].join(' ').trim() || details;
                    }
                    else {
                        var body = report.body;
                        details = body.message || details;
                    }
                }
                core.captureMessage(label + ": " + details);
            });
        };
        try {
            for (var reports_1 = tslib_1.__values(reports), reports_1_1 = reports_1.next(); !reports_1_1.done; reports_1_1 = reports_1.next()) {
                var report = reports_1_1.value;
                _loop_1(report);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (reports_1_1 && !reports_1_1.done && (_a = reports_1.return)) _a.call(reports_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @inheritDoc
     */
    ReportingObserver.id = 'ReportingObserver';
    return ReportingObserver;
}());



var BrowserIntegrations = /*#__PURE__*/Object.freeze({
	GlobalHandlers: GlobalHandlers,
	TryCatch: TryCatch,
	Breadcrumbs: Breadcrumbs,
	LinkedErrors: LinkedErrors,
	UserAgent: UserAgent,
	Ember: Ember,
	Vue: Vue,
	ReportingObserver: ReportingObserver
});

var defaultIntegrations = [
    // Common
    new core.Integrations.Dedupe(),
    new core.Integrations.InboundFilters(),
    new core.Integrations.FunctionToString(),
    new core.Integrations.ExtraErrorData(),
    // Native Wrappers
    new TryCatch(),
    new Breadcrumbs(),
    // Global Handlers
    new GlobalHandlers(),
    // Misc
    new LinkedErrors(),
    new UserAgent(),
];
/**
 * The Sentry Browser SDK Client.
 *
 * To use this SDK, call the {@link init} function as early as possible when
 * loading the web page. To set context information or send manual events, use
 * the provided methods.
 *
 * @example
 * import { init } from '@sentry/browser';
 *
 * init({
 *   dsn: '__DSN__',
 *   // ...
 * });
 *
 * @example
 * import { configureScope } from '@sentry/browser';
 * configureScope((scope: Scope) => {
 *   scope.setExtra({ battery: 0.7 });
 *   scope.setTag({ user_mode: 'admin' });
 *   scope.setUser({ id: '4711' });
 * });
 *
 * @example
 * import { addBreadcrumb } from '@sentry/browser';
 * addBreadcrumb({
 *   message: 'My Breadcrumb',
 *   // ...
 * });
 *
 * @example
 * import * as Sentry from '@sentry/browser';
 * Sentry.captureMessage('Hello, world!');
 * Sentry.captureException(new Error('Good bye'));
 * Sentry.captureEvent({
 *   message: 'Manual',
 *   stacktrace: [
 *     // ...
 *   ],
 * });
 *
 * @see BrowserOptions for documentation on configuration options.
 */
function init(options) {
    if (options === void 0) { options = {}; }
    if (options.defaultIntegrations === undefined) {
        options.defaultIntegrations = defaultIntegrations;
    }
    core.initAndBind(BrowserClient, options);
}
/**
 * Present the user with a report dialog.
 *
 * @param options Everything is optional, we try to fetch all info need from the global scope.
 */
function showReportDialog(options) {
    if (options === void 0) { options = {}; }
    if (!options.eventId) {
        options.eventId = core.getCurrentHub().lastEventId();
    }
    core.getCurrentHub().getClient().showReportDialog(options);
}
/**
 * This is the getter for lastEventId.
 *
 * @returns The last event id of a captured event.
 */
function lastEventId() {
    return core.getCurrentHub().lastEventId();
}
/**
 * This function is here to be API compatible with the loader
 */
function forceLoad() {
    // Noop
}
/**
 * This function is here to be API compatible with the loader
 */
function onLoad(callback) {
    callback();
}
/**
 * A promise that resolves when all current events have been sent.
 * If you provide a timeout and the queue takes longer to drain the promise returns false.
 *
 * @param timeout Maximum time in ms the client should wait.
 */
function flush(timeout) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, core.getCurrentHub().getClient().flush(timeout)];
        });
    });
}
/**
 * A promise that resolves when all current events have been sent.
 * If you provide a timeout and the queue takes longer to drain the promise returns false.
 *
 * @param timeout Maximum time in ms the client should wait.
 */
function close(timeout) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, core.getCurrentHub().getClient().close(timeout)];
        });
    });
}

var INTEGRATIONS = tslib_1.__assign({}, core.Integrations, BrowserIntegrations);

exports.addGlobalEventProcessor = core.addGlobalEventProcessor;
exports.addBreadcrumb = core.addBreadcrumb;
exports.captureException = core.captureException;
exports.captureEvent = core.captureEvent;
exports.captureMessage = core.captureMessage;
exports.configureScope = core.configureScope;
exports.withScope = core.withScope;
exports.getHubFromCarrier = core.getHubFromCarrier;
exports.getCurrentHub = core.getCurrentHub;
exports.Hub = core.Hub;
exports.Scope = core.Scope;
exports.Integrations = INTEGRATIONS;
exports.Transports = index$1;
exports.Severity = dist_1;
exports.Status = dist_2;
exports.BrowserBackend = BrowserBackend;
exports.BrowserClient = BrowserClient;
exports.defaultIntegrations = defaultIntegrations;
exports.forceLoad = forceLoad;
exports.init = init;
exports.lastEventId = lastEventId;
exports.onLoad = onLoad;
exports.showReportDialog = showReportDialog;
exports.flush = flush;
exports.close = close;
exports.SDK_NAME = SDK_NAME;
exports.SDK_VERSION = SDK_VERSION;
//# sourceMappingURL=index.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 35), __webpack_require__(/*! ./../../../process/browser.js */ 174)))

/***/ }),
/* 197 */
/*!**************************************************!*\
  !*** ../node_modules/@sentry/core/dist/index.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var minimal_1 = __webpack_require__(/*! @sentry/minimal */ 198);
exports.addBreadcrumb = minimal_1.addBreadcrumb;
exports.captureException = minimal_1.captureException;
exports.captureEvent = minimal_1.captureEvent;
exports.captureMessage = minimal_1.captureMessage;
exports.configureScope = minimal_1.configureScope;
exports.withScope = minimal_1.withScope;
var hub_1 = __webpack_require__(/*! @sentry/hub */ 47);
exports.addGlobalEventProcessor = hub_1.addGlobalEventProcessor;
exports.getCurrentHub = hub_1.getCurrentHub;
exports.Hub = hub_1.Hub;
exports.getHubFromCarrier = hub_1.getHubFromCarrier;
exports.Scope = hub_1.Scope;
var api_1 = __webpack_require__(/*! ./api */ 201);
exports.API = api_1.API;
var baseclient_1 = __webpack_require__(/*! ./baseclient */ 202);
exports.BaseClient = baseclient_1.BaseClient;
var basebackend_1 = __webpack_require__(/*! ./basebackend */ 205);
exports.BaseBackend = basebackend_1.BaseBackend;
var dsn_1 = __webpack_require__(/*! ./dsn */ 171);
exports.Dsn = dsn_1.Dsn;
var error_1 = __webpack_require__(/*! ./error */ 169);
exports.SentryError = error_1.SentryError;
var promisebuffer_1 = __webpack_require__(/*! ./promisebuffer */ 177);
exports.PromiseBuffer = promisebuffer_1.PromiseBuffer;
var interfaces_1 = __webpack_require__(/*! ./interfaces */ 206);
exports.LogLevel = interfaces_1.LogLevel;
var sdk_1 = __webpack_require__(/*! ./sdk */ 207);
exports.initAndBind = sdk_1.initAndBind;
var noop_1 = __webpack_require__(/*! ./transports/noop */ 178);
exports.NoopTransport = noop_1.NoopTransport;
var Integrations = __webpack_require__(/*! ./integrations */ 208);
exports.Integrations = Integrations;
//# sourceMappingURL=index.js.map

/***/ }),
/* 198 */
/*!*****************************************************!*\
  !*** ../node_modules/@sentry/minimal/dist/index.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 10);
var hub_1 = __webpack_require__(/*! @sentry/hub */ 47);
/**
 * This calls a function on the current hub.
 * @param method function to call on hub.
 * @param args to pass to function.
 */
function callOnHub(method) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var hub = hub_1.getCurrentHub();
    if (hub && hub[method]) {
        // tslint:disable-next-line:no-unsafe-any
        return hub[method].apply(hub, tslib_1.__spread(args));
    }
    throw new Error("No hub defined or " + method + " was not found on the hub, please open a bug report.");
}
/**
 * Captures an exception event and sends it to Sentry.
 *
 * @param exception An exception-like object.
 * @returns The generated eventId.
 */
function captureException(exception) {
    var syntheticException;
    try {
        throw new Error('Sentry syntheticException');
    }
    catch (exception) {
        syntheticException = exception;
    }
    return callOnHub('captureException', exception, {
        originalException: exception,
        syntheticException: syntheticException,
    });
}
exports.captureException = captureException;
/**
 * Captures a message event and sends it to Sentry.
 *
 * @param message The message to send to Sentry.
 * @param level Define the level of the message.
 * @returns The generated eventId.
 */
function captureMessage(message, level) {
    var syntheticException;
    try {
        throw new Error(message);
    }
    catch (exception) {
        syntheticException = exception;
    }
    return callOnHub('captureMessage', message, level, {
        originalException: message,
        syntheticException: syntheticException,
    });
}
exports.captureMessage = captureMessage;
/**
 * Captures a manually created event and sends it to Sentry.
 *
 * @param event The event to send to Sentry.
 * @returns The generated eventId.
 */
function captureEvent(event) {
    return callOnHub('captureEvent', event);
}
exports.captureEvent = captureEvent;
/**
 * Records a new breadcrumb which will be attached to future events.
 *
 * Breadcrumbs will be added to subsequent events to provide more context on
 * user's actions prior to an error or crash.
 *
 * @param breadcrumb The breadcrumb to record.
 */
function addBreadcrumb(breadcrumb) {
    callOnHub('addBreadcrumb', breadcrumb);
}
exports.addBreadcrumb = addBreadcrumb;
/**
 * Callback to set context information onto the scope.
 * @param callback Callback function that receives Scope.
 */
function configureScope(callback) {
    callOnHub('configureScope', callback);
}
exports.configureScope = configureScope;
/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 *
 * This is essentially a convenience function for:
 *
 *     pushScope();
 *     callback();
 *     popScope();
 *
 * @param callback that will be enclosed into push/popScope.
 */
function withScope(callback) {
    callOnHub('withScope', callback);
}
exports.withScope = withScope;
/**
 * Calls a function on the latest client. Use this with caution, it's meant as
 * in "internal" helper so we don't need to expose every possible function in
 * the shim. It is not guaranteed that the client actually implements the
 * function.
 *
 * @param method The method to call on the client/client.
 * @param args Arguments to pass to the client/fontend.
 */
function _callOnClient(method) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    callOnHub.apply(void 0, tslib_1.__spread(['invokeClient', method], args));
}
exports._callOnClient = _callOnClient;
//# sourceMappingURL=index.js.map

/***/ }),
/* 199 */
/*!*********************************************!*\
  !*** ../node_modules/@sentry/utils/memo.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-unsafe-any
/**
 * Memo class used for decycle json objects. Uses WeakSet if available otherwise array.
 */
var Memo = /** @class */ (function () {
    function Memo() {
        // tslint:disable-next-line
        this.hasWeakSet = typeof WeakSet === 'function';
        this.inner = this.hasWeakSet ? new WeakSet() : [];
    }
    /**
     * Sets obj to remember.
     * @param obj Object to remember
     */
    Memo.prototype.memoize = function (obj) {
        if (this.hasWeakSet) {
            if (this.inner.has(obj)) {
                return true;
            }
            this.inner.add(obj);
            return false;
        }
        else {
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < this.inner.length; i++) {
                var value = this.inner[i];
                if (value === obj) {
                    return true;
                }
            }
            this.inner.push(obj);
            return false;
        }
    };
    /**
     * Removes object from internal storage.
     * @param obj Object to forget
     */
    Memo.prototype.unmemoize = function (obj) {
        if (this.hasWeakSet) {
            this.inner.delete(obj);
        }
        else {
            for (var i = 0; i < this.inner.length; i++) {
                if (this.inner[i] === obj) {
                    this.inner.splice(i, 1);
                    break;
                }
            }
        }
    };
    return Memo;
}());
exports.Memo = Memo;
//# sourceMappingURL=memo.js.map

/***/ }),
/* 200 */
/*!***********************************************!*\
  !*** ../node_modules/@sentry/hub/dist/hub.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 10);
var logger_1 = __webpack_require__(/*! @sentry/utils/logger */ 41);
var misc_1 = __webpack_require__(/*! @sentry/utils/misc */ 72);
var scope_1 = __webpack_require__(/*! ./scope */ 175);
/**
 * API compatibility version of this hub.
 *
 * WARNING: This number should only be incresed when the global interface
 * changes a and new methods are introduced.
 */
exports.API_VERSION = 3;
/**
 * Internal class used to make sure we always have the latest internal functions
 * working in case we have a version conflict.
 */
var Hub = /** @class */ (function () {
    /**
     * Creates a new instance of the hub, will push one {@link Layer} into the
     * internal stack on creation.
     *
     * @param client bound to the hub.
     * @param scope bound to the hub.
     * @param version number, higher number means higher priority.
     */
    function Hub(client, scope, version) {
        if (scope === void 0) { scope = new scope_1.Scope(); }
        if (version === void 0) { version = exports.API_VERSION; }
        this.version = version;
        /** Is a {@link Layer}[] containing the client and scope */
        this.stack = [];
        this.stack.push({ client: client, scope: scope });
    }
    /**
     * Internal helper function to call a method on the top client if it exists.
     *
     * @param method The method to call on the client/client.
     * @param args Arguments to pass to the client/frontend.
     */
    Hub.prototype.invokeClient = function (method) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a;
        var top = this.getStackTop();
        if (top && top.client && top.client[method]) {
            (_a = top.client)[method].apply(_a, tslib_1.__spread(args, [top.scope]));
        }
    };
    /**
     * Internal helper function to call an async method on the top client if it
     * exists.
     *
     * @param method The method to call on the client/client.
     * @param args Arguments to pass to the client/frontend.
     */
    Hub.prototype.invokeClientAsync = function (method) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a;
        var top = this.getStackTop();
        if (top && top.client && top.client[method]) {
            (_a = top.client)[method].apply(_a, tslib_1.__spread(args, [top.scope])).catch(function (err) {
                logger_1.logger.error(err);
            });
        }
    };
    /**
     * Checks if this hub's version is older than the given version.
     *
     * @param version A version number to compare to.
     * @return True if the given version is newer; otherwise false.
     */
    Hub.prototype.isOlderThan = function (version) {
        return this.version < version;
    };
    /**
     * This binds the given client to the current scope.
     * @param client An SDK client (client) instance.
     */
    Hub.prototype.bindClient = function (client) {
        var top = this.getStackTop();
        top.client = client;
        if (top && top.scope && client) {
            top.scope.addScopeListener(function (s) {
                if (client.getBackend) {
                    try {
                        client.getBackend().storeScope(s);
                    }
                    catch (_a) {
                        // Do nothing
                    }
                }
            });
        }
    };
    /**
     * Create a new scope to store context information.
     *
     * The scope will be layered on top of the current one. It is isolated, i.e. all
     * breadcrumbs and context information added to this scope will be removed once
     * the scope ends. Be sure to always remove this scope with {@link this.popScope}
     * when the operation finishes or throws.
     *
     * @returns Scope, the new cloned scope
     */
    Hub.prototype.pushScope = function () {
        // We want to clone the content of prev scope
        var stack = this.getStack();
        var parentScope = stack.length > 0 ? stack[stack.length - 1].scope : undefined;
        var scope = scope_1.Scope.clone(parentScope);
        this.getStack().push({
            client: this.getClient(),
            scope: scope,
        });
        return scope;
    };
    /**
     * Removes a previously pushed scope from the stack.
     *
     * This restores the state before the scope was pushed. All breadcrumbs and
     * context information added since the last call to {@link this.pushScope} are
     * discarded.
     */
    Hub.prototype.popScope = function () {
        return this.getStack().pop() !== undefined;
    };
    /**
     * Creates a new scope with and executes the given operation within.
     * The scope is automatically removed once the operation
     * finishes or throws.
     *
     * This is essentially a convenience function for:
     *
     *     pushScope();
     *     callback();
     *     popScope();
     *
     * @param callback that will be enclosed into push/popScope.
     */
    Hub.prototype.withScope = function (callback) {
        var scope = this.pushScope();
        try {
            callback(scope);
        }
        finally {
            this.popScope();
        }
    };
    /** Returns the client of the top stack. */
    Hub.prototype.getClient = function () {
        return this.getStackTop().client;
    };
    /** Returns the scope of the top stack. */
    Hub.prototype.getScope = function () {
        return this.getStackTop().scope;
    };
    /** Returns the scope stack for domains or the process. */
    Hub.prototype.getStack = function () {
        return this.stack;
    };
    /** Returns the topmost scope layer in the order domain > local > process. */
    Hub.prototype.getStackTop = function () {
        return this.stack[this.stack.length - 1];
    };
    /**
     * Captures an exception event and sends it to Sentry.
     *
     * @param exception An exception-like object.
     * @param hint May contain additional information about the original exception.
     * @returns The generated eventId.
     */
    Hub.prototype.captureException = function (exception, hint) {
        var eventId = (this._lastEventId = misc_1.uuid4());
        this.invokeClientAsync('captureException', exception, tslib_1.__assign({}, hint, { event_id: eventId }));
        return eventId;
    };
    /**
     * Captures a message event and sends it to Sentry.
     *
     * @param message The message to send to Sentry.
     * @param level Define the level of the message.
     * @param hint May contain additional information about the original exception.
     * @returns The generated eventId.
     */
    Hub.prototype.captureMessage = function (message, level, hint) {
        var eventId = (this._lastEventId = misc_1.uuid4());
        this.invokeClientAsync('captureMessage', message, level, tslib_1.__assign({}, hint, { event_id: eventId }));
        return eventId;
    };
    /**
     * Captures a manually created event and sends it to Sentry.
     *
     * @param event The event to send to Sentry.
     * @param hint May contain additional information about the original exception.
     */
    Hub.prototype.captureEvent = function (event, hint) {
        var eventId = (this._lastEventId = misc_1.uuid4());
        this.invokeClientAsync('captureEvent', event, tslib_1.__assign({}, hint, { event_id: eventId }));
        return eventId;
    };
    /**
     * This is the getter for lastEventId.
     *
     * @returns The last event id of a captured event.
     */
    Hub.prototype.lastEventId = function () {
        return this._lastEventId;
    };
    /**
     * Records a new breadcrumb which will be attached to future events.
     *
     * Breadcrumbs will be added to subsequent events to provide more context on
     * user's actions prior to an error or crash.
     *
     * @param breadcrumb The breadcrumb to record.
     * @param hint May contain additional information about the original breadcrumb.
     */
    Hub.prototype.addBreadcrumb = function (breadcrumb, hint) {
        this.invokeClient('addBreadcrumb', breadcrumb, tslib_1.__assign({}, hint));
    };
    /**
     * Callback to set context information onto the scope.
     *
     * @param callback Callback function that receives Scope.
     */
    Hub.prototype.configureScope = function (callback) {
        var top = this.getStackTop();
        if (top.scope && top.client) {
            // TODO: freeze flag
            callback(top.scope);
        }
    };
    /**
     * For the duraction of the callback, this hub will be set as the global current Hub.
     * This function is useful if you want to run your own client and hook into an already initialized one
     * e.g.: Reporting issues to your own sentry when running in your component while still using the users configuration.
     */
    Hub.prototype.run = function (callback) {
        var oldHub = makeMain(this);
        try {
            callback(this);
        }
        finally {
            makeMain(oldHub);
        }
    };
    /** Returns the integration if installed on the current client. */
    Hub.prototype.getIntegration = function (integration) {
        try {
            return this.getClient().getIntegration(integration);
        }
        catch (_oO) {
            logger_1.logger.warn("Cannot retrieve integration " + integration.id + " from the current Hub");
            return null;
        }
    };
    return Hub;
}());
exports.Hub = Hub;
/** Returns the global shim registry. */
function getMainCarrier() {
    var carrier = misc_1.getGlobalObject();
    carrier.__SENTRY__ = carrier.__SENTRY__ || {
        hub: undefined,
    };
    return carrier;
}
exports.getMainCarrier = getMainCarrier;
/**
 * Replaces the current main hub with the passed one on the global object
 *
 * @returns The old replaced hub
 */
function makeMain(hub) {
    var registry = getMainCarrier();
    var oldHub = getHubFromCarrier(registry);
    setHubOnCarrier(registry, hub);
    return oldHub;
}
exports.makeMain = makeMain;
/**
 * Returns the default hub instance.
 *
 * If a hub is already registered in the global carrier but this module
 * contains a more recent version, it replaces the registered version.
 * Otherwise, the currently registered hub will be returned.
 */
function getCurrentHub() {
    // Get main carrier (global for every environment)
    var registry = getMainCarrier();
    // If there's no hub, or its an old API, assign a new one
    if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(exports.API_VERSION)) {
        setHubOnCarrier(registry, new Hub());
    }
    // Prefer domains over global if they are there
    try {
        // We need to use `dynamicRequire` because `require` on it's own will be optimized by webpack.
        // We do not want this to happen, we need to try to `require` the domain node module and fail if we are in browser
        // for example so we do not have to shim it and use `getCurrentHub` universally.
        var domain = misc_1.dynamicRequire(module, 'domain');
        var activeDomain = domain.active;
        // If there no active domain, just return global hub
        if (!activeDomain) {
            return getHubFromCarrier(registry);
        }
        // If there's no hub on current domain, or its an old API, assign a new one
        if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(exports.API_VERSION)) {
            var registryHubTopStack = getHubFromCarrier(registry).getStackTop();
            setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, scope_1.Scope.clone(registryHubTopStack.scope)));
        }
        // Return hub that lives on a domain
        return getHubFromCarrier(activeDomain);
    }
    catch (_Oo) {
        // Return hub that lives on a global object
        return getHubFromCarrier(registry);
    }
}
exports.getCurrentHub = getCurrentHub;
/**
 * This will tell whether a carrier has a hub on it or not
 * @param carrier object
 */
function hasHubOnCarrier(carrier) {
    if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub) {
        return true;
    }
    else {
        return false;
    }
}
exports.hasHubOnCarrier = hasHubOnCarrier;
/**
 * This will create a new {@link Hub} and add to the passed object on
 * __SENTRY__.hub.
 * @param carrier object
 */
function getHubFromCarrier(carrier) {
    if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub) {
        return carrier.__SENTRY__.hub;
    }
    else {
        carrier.__SENTRY__ = {};
        carrier.__SENTRY__.hub = new Hub();
        return carrier.__SENTRY__.hub;
    }
}
exports.getHubFromCarrier = getHubFromCarrier;
/**
 * This will set passed {@link Hub} on the passed object's __SENTRY__.hub attribute
 * @param carrier object
 * @param hub Hub
 */
function setHubOnCarrier(carrier, hub) {
    if (!carrier) {
        return false;
    }
    carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    carrier.__SENTRY__.hub = hub;
    return true;
}
exports.setHubOnCarrier = setHubOnCarrier;
//# sourceMappingURL=hub.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ 40)(module)))

/***/ }),
/* 201 */
/*!************************************************!*\
  !*** ../node_modules/@sentry/core/dist/api.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var object_1 = __webpack_require__(/*! @sentry/utils/object */ 135);
var dsn_1 = __webpack_require__(/*! ./dsn */ 171);
var SENTRY_API_VERSION = '7';
/** Helper class to provide urls to different Sentry endpoints. */
var API = /** @class */ (function () {
    /** Create a new instance of API */
    function API(dsn) {
        this.dsn = dsn;
        this.dsnObject = new dsn_1.Dsn(dsn);
    }
    /** Returns the Dsn object. */
    API.prototype.getDsn = function () {
        return this.dsnObject;
    };
    /** Returns a string with auth headers in the url to the store endpoint. */
    API.prototype.getStoreEndpoint = function () {
        return "" + this.getBaseUrl() + this.getStoreEndpointPath();
    };
    /** Returns the store endpoint with auth added in url encoded. */
    API.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
        var dsn = this.dsnObject;
        var auth = {
            sentry_key: dsn.user,
            sentry_version: SENTRY_API_VERSION,
        };
        // Auth is intentionally sent as part of query string (NOT as custom HTTP header)
        // to avoid preflight CORS requests
        return this.getStoreEndpoint() + "?" + object_1.urlEncode(auth);
    };
    /** Returns the base path of the url including the port. */
    API.prototype.getBaseUrl = function () {
        var dsn = this.dsnObject;
        var protocol = dsn.protocol ? dsn.protocol + ":" : '';
        var port = dsn.port ? ":" + dsn.port : '';
        return protocol + "//" + dsn.host + port;
    };
    /** Returns only the path component for the store endpoint. */
    API.prototype.getStoreEndpointPath = function () {
        var dsn = this.dsnObject;
        return (dsn.path ? "/" + dsn.path : '') + "/api/" + dsn.projectId + "/store/";
    };
    /** Returns an object that can be used in request headers. */
    API.prototype.getRequestHeaders = function (clientName, clientVersion) {
        var dsn = this.dsnObject;
        var header = ["Sentry sentry_version=" + SENTRY_API_VERSION];
        header.push("sentry_timestamp=" + new Date().getTime());
        header.push("sentry_client=" + clientName + "/" + clientVersion);
        header.push("sentry_key=" + dsn.user);
        if (dsn.pass) {
            header.push("sentry_secret=" + dsn.pass);
        }
        return {
            'Content-Type': 'application/json',
            'X-Sentry-Auth': header.join(', '),
        };
    };
    /** Returns the url to the report dialog endpoint. */
    API.prototype.getReportDialogEndpoint = function (dialogOptions) {
        if (dialogOptions === void 0) { dialogOptions = {}; }
        var dsn = this.dsnObject;
        var endpoint = "" + this.getBaseUrl() + (dsn.path ? "/" + dsn.path : '') + "/api/embed/error-page/";
        var encodedOptions = [];
        encodedOptions.push("dsn=" + dsn.toString());
        for (var key in dialogOptions) {
            if (key === 'user') {
                if (!dialogOptions.user) {
                    continue;
                }
                if (dialogOptions.user.name) {
                    encodedOptions.push("name=" + encodeURIComponent(dialogOptions.user.name));
                }
                if (dialogOptions.user.email) {
                    encodedOptions.push("email=" + encodeURIComponent(dialogOptions.user.email));
                }
            }
            else {
                encodedOptions.push(encodeURIComponent(key) + "=" + encodeURIComponent(dialogOptions[key]));
            }
        }
        if (encodedOptions.length) {
            return endpoint + "?" + encodedOptions.join('&');
        }
        return endpoint;
    };
    return API;
}());
exports.API = API;
//# sourceMappingURL=api.js.map

/***/ }),
/* 202 */
/*!*******************************************************!*\
  !*** ../node_modules/@sentry/core/dist/baseclient.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 10);
var types_1 = __webpack_require__(/*! @sentry/types */ 176);
var async_1 = __webpack_require__(/*! @sentry/utils/async */ 203);
var is_1 = __webpack_require__(/*! @sentry/utils/is */ 62);
var logger_1 = __webpack_require__(/*! @sentry/utils/logger */ 41);
var misc_1 = __webpack_require__(/*! @sentry/utils/misc */ 72);
var string_1 = __webpack_require__(/*! @sentry/utils/string */ 170);
var dsn_1 = __webpack_require__(/*! ./dsn */ 171);
var integration_1 = __webpack_require__(/*! ./integration */ 204);
var promisebuffer_1 = __webpack_require__(/*! ./promisebuffer */ 177);
/**
 * Default maximum number of breadcrumbs added to an event. Can be overwritten
 * with {@link Options.maxBreadcrumbs}.
 */
var DEFAULT_BREADCRUMBS = 30;
/**
 * Absolute maximum number of breadcrumbs added to an event. The
 * `maxBreadcrumbs` option cannot be higher than this value.
 */
var MAX_BREADCRUMBS = 100;
/**
 * By default, truncates URL values to 250 chars
 */
var MAX_URL_LENGTH = 250;
/**
 * Base implementation for all JavaScript SDK clients.
 *
 * Call the constructor with the corresponding backend constructor and options
 * specific to the client subclass. To access these options later, use
 * {@link Client.getOptions}. Also, the Backend instance is available via
 * {@link Client.getBackend}.
 *
 * If a Dsn is specified in the options, it will be parsed and stored. Use
 * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
 * invalid, the constructor will throw a {@link SentryException}. Note that
 * without a valid Dsn, the SDK will not send any events to Sentry.
 *
 * Before sending an event via the backend, it is passed through
 * {@link BaseClient.prepareEvent} to add SDK information and scope data
 * (breadcrumbs and context). To add more custom information, override this
 * method and extend the resulting prepared event.
 *
 * To issue automatically created events (e.g. via instrumentation), use
 * {@link Client.captureEvent}. It will prepare the event and pass it through
 * the callback lifecycle. To issue auto-breadcrumbs, use
 * {@link Client.addBreadcrumb}.
 *
 * @example
 * class NodeClient extends BaseClient<NodeBackend, NodeOptions> {
 *   public constructor(options: NodeOptions) {
 *     super(NodeBackend, options);
 *   }
 *
 *   // ...
 * }
 */
var BaseClient = /** @class */ (function () {
    /**
     * Initializes this client instance.
     *
     * @param backendClass A constructor function to create the backend.
     * @param options Options for the client.
     */
    function BaseClient(backendClass, options) {
        /** A simple buffer holding all requests. */
        this.buffer = new promisebuffer_1.PromiseBuffer();
        this.backend = new backendClass(options);
        this.options = options;
        if (options.dsn) {
            this.dsn = new dsn_1.Dsn(options.dsn);
        }
        // We have to setup the integrations in the constructor since we do not want
        // that anyone needs to call client.install();
        this.integrations = integration_1.setupIntegrations(this.options);
    }
    /**
     * @inheritDoc
     */
    BaseClient.prototype.install = function () {
        if (!this.isEnabled()) {
            return (this.installed = false);
        }
        var backend = this.getBackend();
        if (!this.installed && backend.install) {
            backend.install();
        }
        return (this.installed = true);
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureException = function (exception, hint, scope) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.buffer.add((function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var event;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getBackend().eventFromException(exception, hint)];
                                case 1:
                                    event = _a.sent();
                                    return [2 /*return*/, this.captureEvent(event, hint, scope)];
                            }
                        });
                    }); })())];
            });
        });
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureMessage = function (message, level, hint, scope) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.buffer.add((function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var event, _a;
                        return tslib_1.__generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!is_1.isPrimitive(message)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.getBackend().eventFromMessage("" + message, level, hint)];
                                case 1:
                                    _a = _b.sent();
                                    return [3 /*break*/, 4];
                                case 2: return [4 /*yield*/, this.getBackend().eventFromException(message, hint)];
                                case 3:
                                    _a = _b.sent();
                                    _b.label = 4;
                                case 4:
                                    event = _a;
                                    return [2 /*return*/, this.captureEvent(event, hint, scope)];
                            }
                        });
                    }); })())];
            });
        });
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureEvent = function (event, hint, scope) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                // Adding this here is technically not correct since if you call captureMessage/captureException it's already
                // buffered. But since we not really need the count and we only need to know if the buffer is full or not,
                // This is fine...
                return [2 /*return*/, this.buffer.add((function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return tslib_1.__generator(this, function (_a) {
                            return [2 /*return*/, this.processEvent(event, function (finalEvent) { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                                    return [2 /*return*/, this.getBackend().sendEvent(finalEvent)];
                                }); }); }, hint, scope)];
                        });
                    }); })())];
            });
        });
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.addBreadcrumb = function (breadcrumb, hint, scope) {
        var _a = this.getOptions(), beforeBreadcrumb = _a.beforeBreadcrumb, _b = _a.maxBreadcrumbs, maxBreadcrumbs = _b === void 0 ? DEFAULT_BREADCRUMBS : _b;
        if (maxBreadcrumbs <= 0) {
            return;
        }
        var timestamp = new Date().getTime() / 1000;
        var mergedBreadcrumb = tslib_1.__assign({ timestamp: timestamp }, breadcrumb);
        var finalBreadcrumb = beforeBreadcrumb
            ? misc_1.consoleSandbox(function () { return beforeBreadcrumb(mergedBreadcrumb, hint); })
            : mergedBreadcrumb;
        if (finalBreadcrumb === null) {
            return;
        }
        if (this.getBackend().storeBreadcrumb(finalBreadcrumb) && scope) {
            scope.addBreadcrumb(finalBreadcrumb, Math.min(maxBreadcrumbs, MAX_BREADCRUMBS));
        }
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getDsn = function () {
        return this.dsn;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getOptions = function () {
        return this.options;
    };
    /** Returns the current backend. */
    BaseClient.prototype.getBackend = function () {
        return this.backend;
    };
    /** Determines whether this SDK is enabled and a valid Dsn is present. */
    BaseClient.prototype.isEnabled = function () {
        return this.getOptions().enabled !== false && this.dsn !== undefined;
    };
    /**
     * Adds common information to events.
     *
     * The information includes release and environment from `options`,
     * breadcrumbs and context (extra, tags and user) from the scope.
     *
     * Information that is already present in the event is never overwritten. For
     * nested objects, such as the context, keys are merged.
     *
     * @param event The original event.
     * @param hint May contain additional informartion about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A new event with more information.
     */
    BaseClient.prototype.prepareEvent = function (event, scope, hint) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, environment, _b, maxBreadcrumbs, release, dist, prepared, exception, request;
            return tslib_1.__generator(this, function (_c) {
                _a = this.getOptions(), environment = _a.environment, _b = _a.maxBreadcrumbs, maxBreadcrumbs = _b === void 0 ? DEFAULT_BREADCRUMBS : _b, release = _a.release, dist = _a.dist;
                prepared = tslib_1.__assign({}, event);
                if (prepared.environment === undefined && environment !== undefined) {
                    prepared.environment = environment;
                }
                if (prepared.release === undefined && release !== undefined) {
                    prepared.release = release;
                }
                if (prepared.dist === undefined && dist !== undefined) {
                    prepared.dist = dist;
                }
                if (prepared.message) {
                    prepared.message = string_1.truncate(prepared.message, MAX_URL_LENGTH);
                }
                exception = prepared.exception && prepared.exception.values && prepared.exception.values[0];
                if (exception && exception.value) {
                    exception.value = string_1.truncate(exception.value, MAX_URL_LENGTH);
                }
                request = prepared.request;
                if (request && request.url) {
                    request.url = string_1.truncate(request.url, MAX_URL_LENGTH);
                }
                if (prepared.event_id === undefined) {
                    prepared.event_id = misc_1.uuid4();
                }
                // This should be the last thing called, since we want that
                // {@link Hub.addEventProcessor} gets the finished prepared event.
                if (scope) {
                    return [2 /*return*/, scope.applyToEvent(prepared, hint, Math.min(maxBreadcrumbs, MAX_BREADCRUMBS))];
                }
                return [2 /*return*/, prepared];
            });
        });
    };
    /**
     * Processes an event (either error or message) and sends it to Sentry.
     *
     * This also adds breadcrumbs and context information to the event. However,
     * platform specific meta data (such as the User's IP address) must be added
     * by the SDK implementor.
     *
     * The returned event status offers clues to whether the event was sent to
     * Sentry and accepted there. If the {@link Options.shouldSend} hook returns
     * `false`, the status will be {@link SendStatus.Skipped}. If the rate limit
     * was exceeded, the status will be {@link SendStatus.RateLimit}.
     *
     * @param event The event to send to Sentry.
     * @param send A function to actually send the event.
     * @param scope A scope containing event metadata.
     * @param hint May contain additional informartion about the original exception.
     * @returns A Promise that resolves with the event status.
     */
    BaseClient.prototype.processEvent = function (event, send, hint, scope) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, beforeSend, sampleRate, prepared, finalEvent, isInternalException, exception_1, response, error_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.isEnabled()) {
                            return [2 /*return*/, {
                                    status: types_1.Status.Skipped,
                                }];
                        }
                        _a = this.getOptions(), beforeSend = _a.beforeSend, sampleRate = _a.sampleRate;
                        // 1.0 === 100% events are sent
                        // 0.0 === 0% events are sent
                        if (typeof sampleRate === 'number' && Math.random() > sampleRate) {
                            return [2 /*return*/, {
                                    status: types_1.Status.Skipped,
                                }];
                        }
                        return [4 /*yield*/, this.prepareEvent(event, scope, hint)];
                    case 1:
                        prepared = _b.sent();
                        if (prepared === null) {
                            return [2 /*return*/, {
                                    status: types_1.Status.Skipped,
                                }];
                        }
                        finalEvent = prepared;
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 5, , 6]);
                        isInternalException = hint && hint.data && hint.data.__sentry__ === true;
                        if (!(!isInternalException && beforeSend)) return [3 /*break*/, 4];
                        return [4 /*yield*/, beforeSend(prepared, hint)];
                    case 3:
                        finalEvent = _b.sent();
                        if (typeof finalEvent === 'undefined') {
                            logger_1.logger.error('`beforeSend` method has to return `null` or a valid event');
                        }
                        _b.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        exception_1 = _b.sent();
                        async_1.forget(this.captureException(exception_1, {
                            data: {
                                __sentry__: true,
                            },
                            originalException: exception_1,
                        }));
                        return [2 /*return*/, {
                                reason: 'Event processing in beforeSend method threw an exception',
                                status: types_1.Status.Invalid,
                            }];
                    case 6:
                        if (finalEvent === null) {
                            return [2 /*return*/, {
                                    reason: 'Event dropped due to being discarded by beforeSend method',
                                    status: types_1.Status.Skipped,
                                }];
                        }
                        _b.label = 7;
                    case 7:
                        _b.trys.push([7, 9, , 10]);
                        return [4 /*yield*/, send(finalEvent)];
                    case 8:
                        response = _b.sent();
                        response.event = finalEvent;
                        if (response.status === types_1.Status.RateLimit) {
                            // TODO: Handle rate limits and maintain a queue. For now, we require SDK
                            // implementors to override this method and handle it themselves.
                        }
                        return [2 /*return*/, response];
                    case 9:
                        error_1 = _b.sent();
                        // We have a catch here since the transport can reject the request internally.
                        // If we do not catch this here, we will run into an endless loop.
                        logger_1.logger.error("" + error_1);
                        return [2 /*return*/, {
                                reason: "" + error_1,
                                status: types_1.Status.Failed,
                            }];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.flush = function (timeout) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.getBackend()
                                .getTransport()
                                .close(timeout),
                            this.buffer.drain(timeout),
                        ])];
                    case 1: return [2 /*return*/, (_a.sent()).reduce(function (prev, current) { return prev && current; })];
                }
            });
        });
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.close = function (timeout) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.flush(timeout)];
            });
        });
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getIntegrations = function () {
        return this.integrations || {};
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getIntegration = function (integration) {
        try {
            return this.integrations[integration.id] || null;
        }
        catch (_oO) {
            logger_1.logger.warn("Cannot retrieve integration " + integration.id + " from the current Client");
            return null;
        }
    };
    return BaseClient;
}());
exports.BaseClient = BaseClient;
//# sourceMappingURL=baseclient.js.map

/***/ }),
/* 203 */
/*!**********************************************!*\
  !*** ../node_modules/@sentry/utils/async.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 10);
/**
 * Consumes the promise and logs the error when it rejects.
 * @param promise A promise to forget.
 */
function forget(promise) {
    promise.catch(function (e) {
        // TODO: Use a better logging mechanism
        console.error(e);
    });
}
exports.forget = forget;
/**
 * Helper to filter an array with asynchronous callbacks.
 *
 * @param array An array containing items to filter.
 * @param predicate An async predicate evaluated on every item.
 * @param thisArg Optional value passed as "this" into the callback.
 * @returns An array containing only values where the callback returned true.
 */
function filterAsync(array, predicate, thisArg) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var verdicts;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(array.map(predicate, thisArg))];
                case 1:
                    verdicts = _a.sent();
                    return [2 /*return*/, array.filter(function (_, index) { return verdicts[index]; })];
            }
        });
    });
}
exports.filterAsync = filterAsync;
//# sourceMappingURL=async.js.map

/***/ }),
/* 204 */
/*!********************************************************!*\
  !*** ../node_modules/@sentry/core/dist/integration.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 10);
var logger_1 = __webpack_require__(/*! @sentry/utils/logger */ 41);
exports.installedIntegrations = [];
/** Gets integration to install */
function getIntegrationsToSetup(options) {
    var e_1, _a, e_2, _b;
    var defaultIntegrations = (options.defaultIntegrations && tslib_1.__spread(options.defaultIntegrations)) || [];
    var userIntegrations = options.integrations;
    var integrations = [];
    if (Array.isArray(userIntegrations)) {
        var userIntegrationsNames = userIntegrations.map(function (i) { return i.name; });
        var pickedIntegrationsNames = [];
        try {
            // Leave only unique default integrations, that were not overridden with provided user integrations
            for (var defaultIntegrations_1 = tslib_1.__values(defaultIntegrations), defaultIntegrations_1_1 = defaultIntegrations_1.next(); !defaultIntegrations_1_1.done; defaultIntegrations_1_1 = defaultIntegrations_1.next()) {
                var defaultIntegration = defaultIntegrations_1_1.value;
                if (userIntegrationsNames.indexOf(getIntegrationName(defaultIntegration)) === -1 &&
                    pickedIntegrationsNames.indexOf(getIntegrationName(defaultIntegration)) === -1) {
                    integrations.push(defaultIntegration);
                    pickedIntegrationsNames.push(getIntegrationName(defaultIntegration));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (defaultIntegrations_1_1 && !defaultIntegrations_1_1.done && (_a = defaultIntegrations_1.return)) _a.call(defaultIntegrations_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            // Don't add same user integration twice
            for (var userIntegrations_1 = tslib_1.__values(userIntegrations), userIntegrations_1_1 = userIntegrations_1.next(); !userIntegrations_1_1.done; userIntegrations_1_1 = userIntegrations_1.next()) {
                var userIntegration = userIntegrations_1_1.value;
                if (pickedIntegrationsNames.indexOf(getIntegrationName(userIntegration)) === -1) {
                    integrations.push(userIntegration);
                    pickedIntegrationsNames.push(getIntegrationName(userIntegration));
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (userIntegrations_1_1 && !userIntegrations_1_1.done && (_b = userIntegrations_1.return)) _b.call(userIntegrations_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    else if (typeof userIntegrations === 'function') {
        integrations = userIntegrations(defaultIntegrations);
        integrations = Array.isArray(integrations) ? integrations : [integrations];
    }
    else {
        return tslib_1.__spread(defaultIntegrations);
    }
    return integrations;
}
exports.getIntegrationsToSetup = getIntegrationsToSetup;
/** Setup given integration */
function setupIntegration(integration, options) {
    if (exports.installedIntegrations.indexOf(getIntegrationName(integration)) !== -1) {
        return;
    }
    try {
        integration.setupOnce();
    }
    catch (_Oo) {
        /** @deprecated */
        // TODO: Remove in v5
        // tslint:disable:deprecation
        if (integration.install) {
            logger_1.logger.warn("Integration " + getIntegrationName(integration) + ": The install method is deprecated. Use \"setupOnce\".");
            integration.install(options);
        }
        // tslint:enable:deprecation
    }
    exports.installedIntegrations.push(getIntegrationName(integration));
    logger_1.logger.log("Integration installed: " + getIntegrationName(integration));
}
exports.setupIntegration = setupIntegration;
/**
 * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
 * integrations are added unless they were already provided before.
 * @param integrations array of integration instances
 * @param withDefault should enable default integrations
 */
function setupIntegrations(options) {
    var integrations = {};
    getIntegrationsToSetup(options).forEach(function (integration) {
        integrations[getIntegrationName(integration)] = integration;
        setupIntegration(integration, options);
    });
    return integrations;
}
exports.setupIntegrations = setupIntegrations;
/**
 * Returns the integration static id.
 * @param integration Integration to retrieve id
 */
function getIntegrationName(integration) {
    /**
     * @depracted
     */
    // tslint:disable-next-line:no-unsafe-any
    return integration.constructor.id || integration.name;
}
//# sourceMappingURL=integration.js.map

/***/ }),
/* 205 */
/*!********************************************************!*\
  !*** ../node_modules/@sentry/core/dist/basebackend.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 10);
var logger_1 = __webpack_require__(/*! @sentry/utils/logger */ 41);
var object_1 = __webpack_require__(/*! @sentry/utils/object */ 135);
var error_1 = __webpack_require__(/*! ./error */ 169);
var noop_1 = __webpack_require__(/*! ./transports/noop */ 178);
/**
 * This is the base implemention of a Backend.
 */
var BaseBackend = /** @class */ (function () {
    /** Creates a new browser backend instance. */
    function BaseBackend(options) {
        this.options = options;
        if (!this.options.dsn) {
            logger_1.logger.warn('No DSN provided, backend will not do anything.');
        }
        this.transport = this.setupTransport();
    }
    /**
     * Sets up the transport so it can be used later to send requests.
     */
    BaseBackend.prototype.setupTransport = function () {
        return new noop_1.NoopTransport();
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.eventFromException = function (_exception, _hint) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                throw new error_1.SentryError('Backend has to implement `eventFromException` method');
            });
        });
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.eventFromMessage = function (_message, _level, _hint) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                throw new error_1.SentryError('Backend has to implement `eventFromMessage` method');
            });
        });
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.sendEvent = function (event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                // TODO: Remove with v5
                // tslint:disable-next-line
                if (this.transport.captureEvent) {
                    // tslint:disable-next-line
                    return [2 /*return*/, this.transport.captureEvent(event)];
                }
                // --------------------
                return [2 /*return*/, this.transport.sendEvent(object_1.serialize(event))];
            });
        });
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.storeBreadcrumb = function (_) {
        return true;
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.storeScope = function (_) {
        // Noop
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.getTransport = function () {
        return this.transport;
    };
    return BaseBackend;
}());
exports.BaseBackend = BaseBackend;
//# sourceMappingURL=basebackend.js.map

/***/ }),
/* 206 */
/*!*******************************************************!*\
  !*** ../node_modules/@sentry/core/dist/interfaces.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** Console logging verbosity for the SDK. */
var LogLevel;
(function (LogLevel) {
    /** No logs will be generated. */
    LogLevel[LogLevel["None"] = 0] = "None";
    /** Only SDK internal errors will be logged. */
    LogLevel[LogLevel["Error"] = 1] = "Error";
    /** Information useful for debugging the SDK will be logged. */
    LogLevel[LogLevel["Debug"] = 2] = "Debug";
    /** All SDK actions will be logged. */
    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
//# sourceMappingURL=interfaces.js.map

/***/ }),
/* 207 */
/*!************************************************!*\
  !*** ../node_modules/@sentry/core/dist/sdk.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hub_1 = __webpack_require__(/*! @sentry/hub */ 47);
var logger_1 = __webpack_require__(/*! @sentry/utils/logger */ 41);
/**
 * Internal function to create a new SDK client instance. The client is
 * installed and then bound to the current scope.
 *
 * @param clientClass The client class to instanciate.
 * @param options Options to pass to the client.
 * @returns The installed and bound client instance.
 */
function initAndBind(clientClass, options) {
    if (options.debug === true) {
        logger_1.logger.enable();
    }
    var client = new clientClass(options);
    hub_1.getCurrentHub().bindClient(client);
    client.install();
}
exports.initAndBind = initAndBind;
//# sourceMappingURL=sdk.js.map

/***/ }),
/* 208 */
/*!***************************************************************!*\
  !*** ../node_modules/@sentry/core/dist/integrations/index.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dedupe_1 = __webpack_require__(/*! ./dedupe */ 209);
exports.Dedupe = dedupe_1.Dedupe;
var functiontostring_1 = __webpack_require__(/*! ./functiontostring */ 210);
exports.FunctionToString = functiontostring_1.FunctionToString;
var sdkinformation_1 = __webpack_require__(/*! ./sdkinformation */ 211);
exports.SDKInformation = sdkinformation_1.SDKInformation;
var inboundfilters_1 = __webpack_require__(/*! ./inboundfilters */ 212);
exports.InboundFilters = inboundfilters_1.InboundFilters;
var extraerrordata_1 = __webpack_require__(/*! ./extraerrordata */ 213);
exports.ExtraErrorData = extraerrordata_1.ExtraErrorData;
var debug_1 = __webpack_require__(/*! ./pluggable/debug */ 214);
exports.Debug = debug_1.Debug;
var rewriteframes_1 = __webpack_require__(/*! ./pluggable/rewriteframes */ 215);
exports.RewriteFrames = rewriteframes_1.RewriteFrames;
//# sourceMappingURL=index.js.map

/***/ }),
/* 209 */
/*!****************************************************************!*\
  !*** ../node_modules/@sentry/core/dist/integrations/dedupe.js ***!
  \****************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 10);
var hub_1 = __webpack_require__(/*! @sentry/hub */ 47);
var logger_1 = __webpack_require__(/*! @sentry/utils/logger */ 41);
var misc_1 = __webpack_require__(/*! @sentry/utils/misc */ 72);
/** Deduplication filter */
var Dedupe = /** @class */ (function () {
    function Dedupe() {
        /**
         * @inheritDoc
         */
        this.name = Dedupe.id;
    }
    /**
     * @inheritDoc
     */
    Dedupe.prototype.setupOnce = function () {
        var _this = this;
        hub_1.addGlobalEventProcessor(function (currentEvent) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var self;
            return tslib_1.__generator(this, function (_a) {
                self = hub_1.getCurrentHub().getIntegration(Dedupe);
                if (self) {
                    // Juuust in case something goes wrong
                    try {
                        if (self.shouldDropEvent(currentEvent, self.previousEvent)) {
                            return [2 /*return*/, null];
                        }
                    }
                    catch (_oO) {
                        return [2 /*return*/, (self.previousEvent = currentEvent)];
                    }
                    return [2 /*return*/, (self.previousEvent = currentEvent)];
                }
                return [2 /*return*/, currentEvent];
            });
        }); });
    };
    /** JSDoc */
    Dedupe.prototype.shouldDropEvent = function (currentEvent, previousEvent) {
        if (!previousEvent) {
            return false;
        }
        if (this.isSameMessageEvent(currentEvent, previousEvent)) {
            logger_1.logger.warn("Event dropped due to being a duplicate of previous event (same message).\nEvent: " + misc_1.getEventDescription(currentEvent));
            return true;
        }
        if (this.isSameExceptionEvent(currentEvent, previousEvent)) {
            logger_1.logger.warn("Event dropped due to being a duplicate of previous event (same exception).\nEvent: " + misc_1.getEventDescription(currentEvent));
            return true;
        }
        return false;
    };
    /** JSDoc */
    Dedupe.prototype.isSameMessageEvent = function (currentEvent, previousEvent) {
        var currentMessage = currentEvent.message;
        var previousMessage = previousEvent.message;
        // If no event has a message, they were both exceptions, so bail out
        if (!currentMessage && !previousMessage) {
            return false;
        }
        // If only one event has a stacktrace, but not the other one, they are not the same
        if ((currentMessage && !previousMessage) || (!currentMessage && previousMessage)) {
            return false;
        }
        if (currentMessage !== previousMessage) {
            return false;
        }
        if (!this.isSameFingerprint(currentEvent, previousEvent)) {
            return false;
        }
        if (!this.isSameStacktrace(currentEvent, previousEvent)) {
            return false;
        }
        return true;
    };
    /** JSDoc */
    Dedupe.prototype.getFramesFromEvent = function (event) {
        var exception = event.exception;
        if (exception) {
            try {
                // @ts-ignore
                return exception.values[0].stacktrace.frames;
            }
            catch (_oO) {
                return undefined;
            }
        }
        else if (event.stacktrace) {
            return event.stacktrace.frames;
        }
        else {
            return undefined;
        }
    };
    /** JSDoc */
    Dedupe.prototype.isSameStacktrace = function (currentEvent, previousEvent) {
        var currentFrames = this.getFramesFromEvent(currentEvent);
        var previousFrames = this.getFramesFromEvent(previousEvent);
        // If no event has a fingerprint, they are assumed to be the same
        if (!currentFrames && !previousFrames) {
            return true;
        }
        // If only one event has a stacktrace, but not the other one, they are not the same
        if ((currentFrames && !previousFrames) || (!currentFrames && previousFrames)) {
            return false;
        }
        currentFrames = currentFrames;
        previousFrames = previousFrames;
        // If number of frames differ, they are not the same
        if (previousFrames.length !== currentFrames.length) {
            return false;
        }
        // Otherwise, compare the two
        for (var i = 0; i < previousFrames.length; i++) {
            var frameA = previousFrames[i];
            var frameB = currentFrames[i];
            if (frameA.filename !== frameB.filename ||
                frameA.lineno !== frameB.lineno ||
                frameA.colno !== frameB.colno ||
                frameA.function !== frameB.function) {
                return false;
            }
        }
        return true;
    };
    /** JSDoc */
    Dedupe.prototype.getExceptionFromEvent = function (event) {
        return event.exception && event.exception.values && event.exception.values[0];
    };
    /** JSDoc */
    Dedupe.prototype.isSameExceptionEvent = function (currentEvent, previousEvent) {
        var previousException = this.getExceptionFromEvent(previousEvent);
        var currentException = this.getExceptionFromEvent(currentEvent);
        if (!previousException || !currentException) {
            return false;
        }
        if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
            return false;
        }
        if (!this.isSameFingerprint(currentEvent, previousEvent)) {
            return false;
        }
        if (!this.isSameStacktrace(currentEvent, previousEvent)) {
            return false;
        }
        return true;
    };
    /** JSDoc */
    Dedupe.prototype.isSameFingerprint = function (currentEvent, previousEvent) {
        var currentFingerprint = currentEvent.fingerprint;
        var previousFingerprint = previousEvent.fingerprint;
        // If no event has a fingerprint, they are assumed to be the same
        if (!currentFingerprint && !previousFingerprint) {
            return true;
        }
        // If only one event has a fingerprint, but not the other one, they are not the same
        if ((currentFingerprint && !previousFingerprint) || (!currentFingerprint && previousFingerprint)) {
            return false;
        }
        currentFingerprint = currentFingerprint;
        previousFingerprint = previousFingerprint;
        // Otherwise, compare the two
        try {
            return !!(currentFingerprint.join('') === previousFingerprint.join(''));
        }
        catch (_oO) {
            return false;
        }
    };
    /**
     * @inheritDoc
     */
    Dedupe.id = 'Dedupe';
    return Dedupe;
}());
exports.Dedupe = Dedupe;
//# sourceMappingURL=dedupe.js.map

/***/ }),
/* 210 */
/*!**************************************************************************!*\
  !*** ../node_modules/@sentry/core/dist/integrations/functiontostring.js ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var originalFunctionToString;
/** Patch toString calls to return proper name for wrapped functions */
var FunctionToString = /** @class */ (function () {
    function FunctionToString() {
        /**
         * @inheritDoc
         */
        this.name = FunctionToString.id;
    }
    /**
     * @inheritDoc
     */
    FunctionToString.prototype.setupOnce = function () {
        originalFunctionToString = Function.prototype.toString;
        Function.prototype.toString = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var context = this.__sentry__ ? this.__sentry_original__ : this;
            // tslint:disable-next-line:no-unsafe-any
            return originalFunctionToString.apply(context, args);
        };
    };
    /**
     * @inheritDoc
     */
    FunctionToString.id = 'FunctionToString';
    return FunctionToString;
}());
exports.FunctionToString = FunctionToString;
//# sourceMappingURL=functiontostring.js.map

/***/ }),
/* 211 */
/*!************************************************************************!*\
  !*** ../node_modules/@sentry/core/dist/integrations/sdkinformation.js ***!
  \************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __webpack_require__(/*! @sentry/utils/logger */ 41);
/**
 * @deprecated
 * This file can be safely removed in the next major bump
 */
/** Adds SDK info to an event. */
var SDKInformation = /** @class */ (function () {
    function SDKInformation() {
        /**
         * @inheritDoc
         */
        this.name = 'SDKInformation';
    }
    /**
     * @inheritDoc
     */
    SDKInformation.prototype.setupOnce = function () {
        logger_1.logger.warn("SDKInformation Integration is deprecated and can be safely removed. It's functionality has been merged into the SDK's core.");
    };
    return SDKInformation;
}());
exports.SDKInformation = SDKInformation;
//# sourceMappingURL=sdkinformation.js.map

/***/ }),
/* 212 */
/*!************************************************************************!*\
  !*** ../node_modules/@sentry/core/dist/integrations/inboundfilters.js ***!
  \************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 10);
var hub_1 = __webpack_require__(/*! @sentry/hub */ 47);
var is_1 = __webpack_require__(/*! @sentry/utils/is */ 62);
var logger_1 = __webpack_require__(/*! @sentry/utils/logger */ 41);
var misc_1 = __webpack_require__(/*! @sentry/utils/misc */ 72);
var string_1 = __webpack_require__(/*! @sentry/utils/string */ 170);
// "Script error." is hard coded into browsers for errors that it can't read.
// this is the result of a script being pulled in from an external domain and CORS.
var DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
/** Inbound filters configurable by the user */
var InboundFilters = /** @class */ (function () {
    function InboundFilters(options) {
        if (options === void 0) { options = {}; }
        this.options = options;
        /**
         * @inheritDoc
         */
        this.name = InboundFilters.id;
    }
    /**
     * @inheritDoc
     */
    InboundFilters.prototype.setupOnce = function () {
        var _this = this;
        hub_1.addGlobalEventProcessor(function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var hub, self, client, clientOptions, options;
            return tslib_1.__generator(this, function (_a) {
                hub = hub_1.getCurrentHub();
                if (!hub) {
                    return [2 /*return*/, event];
                }
                self = hub.getIntegration(InboundFilters);
                if (self) {
                    client = hub.getClient();
                    clientOptions = client ? client.getOptions() : {};
                    options = self.mergeOptions(clientOptions);
                    if (self.shouldDropEvent(event, options)) {
                        return [2 /*return*/, null];
                    }
                }
                return [2 /*return*/, event];
            });
        }); });
    };
    /** JSDoc */
    InboundFilters.prototype.shouldDropEvent = function (event, options) {
        if (this.isSentryError(event, options)) {
            logger_1.logger.warn("Event dropped due to being internal Sentry Error.\nEvent: " + misc_1.getEventDescription(event));
            return true;
        }
        if (this.isIgnoredError(event, options)) {
            logger_1.logger.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + misc_1.getEventDescription(event));
            return true;
        }
        if (this.isBlacklistedUrl(event, options)) {
            logger_1.logger.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: " + misc_1.getEventDescription(event) + ".\nUrl: " + this.getEventFilterUrl(event));
            return true;
        }
        if (!this.isWhitelistedUrl(event, options)) {
            logger_1.logger.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " + misc_1.getEventDescription(event) + ".\nUrl: " + this.getEventFilterUrl(event));
            return true;
        }
        return false;
    };
    /** JSDoc */
    InboundFilters.prototype.isSentryError = function (event, options) {
        if (options === void 0) { options = {}; }
        if (!options.ignoreInternal) {
            return false;
        }
        try {
            // tslint:disable-next-line:no-unsafe-any
            return event.exception.values[0].type === 'SentryError';
        }
        catch (_oO) {
            return false;
        }
    };
    /** JSDoc */
    InboundFilters.prototype.isIgnoredError = function (event, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (!options.ignoreErrors || !options.ignoreErrors.length) {
            return false;
        }
        return this.getPossibleEventMessages(event).some(function (message) {
            // Not sure why TypeScript complains here...
            return options.ignoreErrors.some(function (pattern) { return _this.isMatchingPattern(message, pattern); });
        });
    };
    /** JSDoc */
    InboundFilters.prototype.isBlacklistedUrl = function (event, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        // TODO: Use Glob instead?
        if (!options.blacklistUrls || !options.blacklistUrls.length) {
            return false;
        }
        var url = this.getEventFilterUrl(event);
        return !url ? false : options.blacklistUrls.some(function (pattern) { return _this.isMatchingPattern(url, pattern); });
    };
    /** JSDoc */
    InboundFilters.prototype.isWhitelistedUrl = function (event, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        // TODO: Use Glob instead?
        if (!options.whitelistUrls || !options.whitelistUrls.length) {
            return true;
        }
        var url = this.getEventFilterUrl(event);
        return !url ? true : options.whitelistUrls.some(function (pattern) { return _this.isMatchingPattern(url, pattern); });
    };
    /** JSDoc */
    InboundFilters.prototype.mergeOptions = function (clientOptions) {
        if (clientOptions === void 0) { clientOptions = {}; }
        return {
            blacklistUrls: tslib_1.__spread((this.options.blacklistUrls || []), (clientOptions.blacklistUrls || [])),
            ignoreErrors: tslib_1.__spread((this.options.ignoreErrors || []), (clientOptions.ignoreErrors || []), DEFAULT_IGNORE_ERRORS),
            ignoreInternal: typeof this.options.ignoreInternal !== 'undefined' ? this.options.ignoreInternal : true,
            whitelistUrls: tslib_1.__spread((this.options.whitelistUrls || []), (clientOptions.whitelistUrls || [])),
        };
    };
    /** JSDoc */
    InboundFilters.prototype.isMatchingPattern = function (value, pattern) {
        if (is_1.isRegExp(pattern)) {
            return pattern.test(value);
        }
        else if (typeof pattern === 'string') {
            return string_1.includes(value, pattern);
        }
        else {
            return false;
        }
    };
    /** JSDoc */
    InboundFilters.prototype.getPossibleEventMessages = function (event) {
        if (event.message) {
            return [event.message];
        }
        else if (event.exception) {
            try {
                // tslint:disable-next-line:no-unsafe-any
                var _a = event.exception.values[0], type = _a.type, value = _a.value;
                return ["" + value, type + ": " + value];
            }
            catch (oO) {
                logger_1.logger.error("Cannot extract message for event " + misc_1.getEventDescription(event));
                return [];
            }
        }
        else {
            return [];
        }
    };
    /** JSDoc */
    InboundFilters.prototype.getEventFilterUrl = function (event) {
        try {
            if (event.stacktrace) {
                // tslint:disable:no-unsafe-any
                var frames_1 = event.stacktrace.frames;
                return frames_1[frames_1.length - 1].filename;
            }
            else if (event.exception) {
                // tslint:disable:no-unsafe-any
                var frames_2 = event.exception.values[0].stacktrace.frames;
                return frames_2[frames_2.length - 1].filename;
            }
            else {
                return null;
            }
        }
        catch (oO) {
            logger_1.logger.error("Cannot extract url for event " + misc_1.getEventDescription(event));
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    InboundFilters.id = 'InboundFilters';
    return InboundFilters;
}());
exports.InboundFilters = InboundFilters;
//# sourceMappingURL=inboundfilters.js.map

/***/ }),
/* 213 */
/*!************************************************************************!*\
  !*** ../node_modules/@sentry/core/dist/integrations/extraerrordata.js ***!
  \************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 10);
var hub_1 = __webpack_require__(/*! @sentry/hub */ 47);
var is_1 = __webpack_require__(/*! @sentry/utils/is */ 62);
var logger_1 = __webpack_require__(/*! @sentry/utils/logger */ 41);
var object_1 = __webpack_require__(/*! @sentry/utils/object */ 135);
/** Patch toString calls to return proper name for wrapped functions */
var ExtraErrorData = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function ExtraErrorData(options) {
        if (options === void 0) { options = { depth: 3 }; }
        this.options = options;
        /**
         * @inheritDoc
         */
        this.name = ExtraErrorData.id;
    }
    /**
     * @inheritDoc
     */
    ExtraErrorData.prototype.setupOnce = function () {
        var _this = this;
        hub_1.addGlobalEventProcessor(function (event, hint) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var self;
            return tslib_1.__generator(this, function (_a) {
                self = hub_1.getCurrentHub().getIntegration(ExtraErrorData);
                if (!self) {
                    return [2 /*return*/, event];
                }
                return [2 /*return*/, self.enhanceEventWithErrorData(event, hint)];
            });
        }); });
    };
    /**
     * Attaches extracted information from the Error object to extra field in the SentryEvent
     */
    ExtraErrorData.prototype.enhanceEventWithErrorData = function (event, hint) {
        if (!hint || !hint.originalException || !is_1.isError(hint.originalException)) {
            return event;
        }
        var errorData = this.extractErrorData(hint.originalException);
        if (errorData) {
            var extra = tslib_1.__assign({}, event.extra);
            var normalizedErrorData = object_1.safeNormalize(errorData, this.options.depth);
            if (!is_1.isString(normalizedErrorData)) {
                extra = tslib_1.__assign({}, event.extra, normalizedErrorData);
            }
            return tslib_1.__assign({}, event, { extra: extra });
        }
        return event;
    };
    /**
     * Extract extra information from the Error object
     */
    ExtraErrorData.prototype.extractErrorData = function (error) {
        var e_1, _a, _b;
        var result = null;
        // We are trying to enhance already existing event, so no harm done if it won't succeed
        try {
            var nativeKeys_1 = ['name', 'message', 'stack', 'line', 'column', 'fileName', 'lineNumber', 'columnNumber'];
            var name_1 = error.name || error.constructor.name;
            var errorKeys = Object.getOwnPropertyNames(error).filter(function (key) { return nativeKeys_1.indexOf(key) === -1; });
            if (errorKeys.length) {
                var extraErrorInfo = {};
                try {
                    for (var errorKeys_1 = tslib_1.__values(errorKeys), errorKeys_1_1 = errorKeys_1.next(); !errorKeys_1_1.done; errorKeys_1_1 = errorKeys_1.next()) {
                        var key = errorKeys_1_1.value;
                        var value = error[key];
                        if (is_1.isError(value)) {
                            value = value.name || value.constructor.name;
                        }
                        extraErrorInfo[key] = value;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (errorKeys_1_1 && !errorKeys_1_1.done && (_a = errorKeys_1.return)) _a.call(errorKeys_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                result = (_b = {},
                    _b[name_1] = extraErrorInfo,
                    _b);
            }
        }
        catch (oO) {
            logger_1.logger.error('Unable to extract extra data from the Error object:', oO);
        }
        return result;
    };
    /**
     * @inheritDoc
     */
    ExtraErrorData.id = 'ExtraErrorData';
    return ExtraErrorData;
}());
exports.ExtraErrorData = ExtraErrorData;
//# sourceMappingURL=extraerrordata.js.map

/***/ }),
/* 214 */
/*!*************************************************************************!*\
  !*** ../node_modules/@sentry/core/dist/integrations/pluggable/debug.js ***!
  \*************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 10);
var hub_1 = __webpack_require__(/*! @sentry/hub */ 47);
/** JSDoc */
var Debug = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Debug(options) {
        /**
         * @inheritDoc
         */
        this.name = Debug.id;
        this.options = tslib_1.__assign({ debugger: false, stringify: false }, options);
    }
    /**
     * @inheritDoc
     */
    Debug.prototype.setupOnce = function () {
        var _this = this;
        hub_1.addGlobalEventProcessor(function (event, hint) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var self;
            return tslib_1.__generator(this, function (_a) {
                self = hub_1.getCurrentHub().getIntegration(Debug);
                if (self) {
                    // tslint:disable:no-console
                    // tslint:disable:no-debugger
                    if (self.options.debugger) {
                        debugger;
                    }
                    if (self.options.stringify) {
                        console.log(JSON.stringify(event, null, 2));
                        if (hint) {
                            console.log(JSON.stringify(hint, null, 2));
                        }
                    }
                    else {
                        console.log(event);
                        if (hint) {
                            console.log(hint);
                        }
                    }
                }
                return [2 /*return*/, event];
            });
        }); });
    };
    /**
     * @inheritDoc
     */
    Debug.id = 'Debug';
    return Debug;
}());
exports.Debug = Debug;
//# sourceMappingURL=debug.js.map

/***/ }),
/* 215 */
/*!*********************************************************************************!*\
  !*** ../node_modules/@sentry/core/dist/integrations/pluggable/rewriteframes.js ***!
  \*********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 10);
var hub_1 = __webpack_require__(/*! @sentry/hub */ 47);
var path_1 = __webpack_require__(/*! @sentry/utils/path */ 216);
/** Rewrite event frames paths */
var RewriteFrames = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function RewriteFrames(options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        /**
         * @inheritDoc
         */
        this.name = RewriteFrames.id;
        /**
         * @inheritDoc
         */
        this.iteratee = function (frame) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var base;
            return tslib_1.__generator(this, function (_a) {
                if (frame.filename && frame.filename.startsWith('/')) {
                    base = this.root ? path_1.relative(this.root, frame.filename) : path_1.basename(frame.filename);
                    frame.filename = "app:///" + base;
                }
                return [2 /*return*/, frame];
            });
        }); };
        if (options.root) {
            this.root = options.root;
        }
        if (options.iteratee) {
            this.iteratee = options.iteratee;
        }
    }
    /**
     * @inheritDoc
     */
    RewriteFrames.prototype.setupOnce = function () {
        var _this = this;
        hub_1.addGlobalEventProcessor(function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var self;
            return tslib_1.__generator(this, function (_a) {
                self = hub_1.getCurrentHub().getIntegration(RewriteFrames);
                if (self) {
                    return [2 /*return*/, self.process(event)];
                }
                return [2 /*return*/, event];
            });
        }); });
    };
    /** JSDoc */
    RewriteFrames.prototype.process = function (event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var frames, _a, _b, _i, i, _c, _d;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        frames = this.getFramesFromEvent(event);
                        if (!frames) return [3 /*break*/, 4];
                        _a = [];
                        for (_b in frames)
                            _a.push(_b);
                        _i = 0;
                        _e.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        i = _a[_i];
                        // tslint:disable-next-line
                        _c = frames;
                        _d = i;
                        return [4 /*yield*/, this.iteratee(frames[i])];
                    case 2:
                        // tslint:disable-next-line
                        _c[_d] = _e.sent();
                        _e.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, event];
                }
            });
        });
    };
    /** JSDoc */
    RewriteFrames.prototype.getFramesFromEvent = function (event) {
        var exception = event.exception;
        if (exception) {
            try {
                // tslint:disable-next-line:no-unsafe-any
                return exception.values[0].stacktrace.frames;
            }
            catch (_oO) {
                return undefined;
            }
        }
        else if (event.stacktrace) {
            return event.stacktrace.frames;
        }
        else {
            return undefined;
        }
    };
    /**
     * @inheritDoc
     */
    RewriteFrames.id = 'RewriteFrames';
    return RewriteFrames;
}());
exports.RewriteFrames = RewriteFrames;
//# sourceMappingURL=rewriteframes.js.map

/***/ }),
/* 216 */
/*!*********************************************!*\
  !*** ../node_modules/@sentry/utils/path.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Slightly modified (no IE8 support, ES6) and transcribed to TypeScript
// https://raw.githubusercontent.com/calvinmetcalf/rollup-plugin-node-builtins/master/src/es6/path.js
Object.defineProperty(exports, "__esModule", { value: true });
/** JSDoc */
function normalizeArray(parts, allowAboveRoot) {
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
        var last = parts[i];
        if (last === '.') {
            parts.splice(i, 1);
        }
        else if (last === '..') {
            parts.splice(i, 1);
            up++;
        }
        else if (up) {
            parts.splice(i, 1);
            up--;
        }
    }
    // if the path is allowed to go above the root, restore leading ..s
    if (allowAboveRoot) {
        for (; up--; up) {
            parts.unshift('..');
        }
    }
    return parts;
}
// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
/** JSDoc */
function splitPath(filename) {
    var parts = splitPathRe.exec(filename);
    return parts ? parts.slice(1) : [];
}
// path.resolve([from ...], to)
// posix version
/** JSDoc */
function resolve() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var resolvedPath = '';
    var resolvedAbsolute = false;
    for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path = i >= 0 ? args[i] : '/';
        // Skip empty entries
        if (!path) {
            continue;
        }
        resolvedPath = path + "/" + resolvedPath;
        resolvedAbsolute = path.charAt(0) === '/';
    }
    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)
    // Normalize the path
    resolvedPath = normalizeArray(resolvedPath.split('/').filter(function (p) { return !!p; }), !resolvedAbsolute).join('/');
    return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}
exports.resolve = resolve;
/** JSDoc */
function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
        if (arr[start] !== '') {
            break;
        }
    }
    var end = arr.length - 1;
    for (; end >= 0; end--) {
        if (arr[end] !== '') {
            break;
        }
    }
    if (start > end) {
        return [];
    }
    return arr.slice(start, end - start + 1);
}
// path.relative(from, to)
// posix version
/** JSDoc */
function relative(from, to) {
    // tslint:disable:no-parameter-reassignment
    from = resolve(from).substr(1);
    to = resolve(to).substr(1);
    var fromParts = trim(from.split('/'));
    var toParts = trim(to.split('/'));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
        }
    }
    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push('..');
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join('/');
}
exports.relative = relative;
// path.normalize(path)
// posix version
/** JSDoc */
function normalize(path) {
    var isPathAbsolute = isAbsolute(path);
    var trailingSlash = path.substr(-1) === '/';
    // Normalize the path
    var normalizedPath = normalizeArray(path.split('/').filter(function (p) { return !!p; }), !isPathAbsolute).join('/');
    if (!normalizedPath && !isPathAbsolute) {
        normalizedPath = '.';
    }
    if (normalizedPath && trailingSlash) {
        normalizedPath += '/';
    }
    return (isPathAbsolute ? '/' : '') + normalizedPath;
}
exports.normalize = normalize;
// posix version
/** JSDoc */
function isAbsolute(path) {
    return path.charAt(0) === '/';
}
exports.isAbsolute = isAbsolute;
// posix version
/** JSDoc */
function join() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return normalize(args.join('/'));
}
exports.join = join;
/** JSDoc */
function dirname(path) {
    var result = splitPath(path);
    var root = result[0];
    var dir = result[1];
    if (!root && !dir) {
        // No dirname whatsoever
        return '.';
    }
    if (dir) {
        // It has a dirname, strip trailing slash
        dir = dir.substr(0, dir.length - 1);
    }
    return root + dir;
}
exports.dirname = dirname;
/** JSDoc */
function basename(path, ext) {
    var f = splitPath(path)[2];
    if (ext && f.substr(ext.length * -1) === ext) {
        f = f.substr(0, f.length - ext.length);
    }
    return f;
}
exports.basename = basename;
//# sourceMappingURL=path.js.map

/***/ }),
/* 217 */
/*!***********************************!*\
  !*** ./angular-lazy-component.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 42);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(/*! react-dom */ 172);

var _moduleRegistry = __webpack_require__(/*! ./module-registry */ 37);

var _moduleRegistry2 = _interopRequireDefault(_moduleRegistry);

var _baseLazyComponent = __webpack_require__(/*! ./base-lazy-component */ 173);

var _baseLazyComponent2 = _interopRequireDefault(_baseLazyComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddRouterContext = function (_React$Component) {
  _inherits(AddRouterContext, _React$Component);

  function AddRouterContext() {
    _classCallCheck(this, AddRouterContext);

    return _possibleConstructorReturn(this, (AddRouterContext.__proto__ || Object.getPrototypeOf(AddRouterContext)).apply(this, arguments));
  }

  _createClass(AddRouterContext, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { router: this.props.router };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AddRouterContext;
}(_react2.default.Component);

AddRouterContext.childContextTypes = {
  router: _propTypes2.default.any
};
AddRouterContext.propTypes = {
  router: _propTypes2.default.any,
  children: _propTypes2.default.any
};

var AngularLazyComponent = function (_BaseLazyComponent) {
  _inherits(AngularLazyComponent, _BaseLazyComponent);

  function AngularLazyComponent() {
    _classCallCheck(this, AngularLazyComponent);

    return _possibleConstructorReturn(this, (AngularLazyComponent.__proto__ || Object.getPrototypeOf(AngularLazyComponent)).apply(this, arguments));
  }

  _createClass(AngularLazyComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      this.mounted = true;
      this.resourceLoader.then(function () {
        if (_this3.mounted) {
          var component = '<' + _this3.manifest.component + '></' + _this3.manifest.component + '>';
          _this3.$injector = angular.bootstrap(component, [_this3.manifest.module, ['$provide', '$compileProvider', function ($provide, $compileProvider) {
            $provide.factory('props', function () {
              return function () {
                return _this3.mergedProps;
              };
            });
            $compileProvider.directive('moduleRegistry', function () {
              return {
                scope: { component: '@', props: '<' },
                controller: ['$scope', '$element', function ($scope, $element) {
                  var Component = _moduleRegistry2.default.component($scope.component);
                  $scope.$watch(function () {
                    return $scope.props;
                  }, function () {
                    (0, _reactDom.render)(_react2.default.createElement(
                      AddRouterContext,
                      { router: _this3.props.router },
                      _react2.default.createElement(Component, $scope.props)
                    ), $element[0]);
                  }, true);
                  $scope.$on('$destroy', function () {
                    return (0, _reactDom.unmountComponentAtNode)($element[0]);
                  });
                  //super hack to prevent angular from preventing external route changes
                  $element.on('click', function (e) {
                    return e.preventDefault = function () {
                      return delete e.preventDefault;
                    };
                  });
                }]
              };
            });
            $compileProvider.directive('routerLink', function () {
              return {
                transclude: true,
                scope: { to: '@' },
                template: '<a ng-href="{{to}}" ng-click="handleClick($event)"><ng-transclude></ng-transclude></a>',
                controller: ['$scope', function ($scope) {
                  $scope.handleClick = function (event) {
                    if (event.ctrlKey || event.metaKey || event.shiftKey || event.which === 2 || event.button === 2) {
                      return;
                    } else {
                      _this3.props.router.push($scope.to);
                      event.preventDefault();
                    }
                  };
                }]
              };
            });
          }]]);
          _this3.node.appendChild(_this3.$injector.get('$rootElement')[0]);
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;
      if (this.$injector) {
        this.$injector.get('$rootScope').$destroy();
        this.$injector = null;
      }
      _get(AngularLazyComponent.prototype.__proto__ || Object.getPrototypeOf(AngularLazyComponent.prototype), 'componentWillUnmount', this).call(this);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.$injector && !this.$injector.get('$rootScope').$$phase) {
        this.$injector.get('$rootScope').$digest();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement('div', { ref: function ref(node) {
          return _this4.node = node;
        } });
    }
  }]);

  return AngularLazyComponent;
}(_baseLazyComponent2.default);

AngularLazyComponent.propTypes = {
  router: _propTypes2.default.any
};

exports.default = AngularLazyComponent;

/***/ })
/******/ ]);
//# sourceMappingURL=react-module-container.bundle.js.map