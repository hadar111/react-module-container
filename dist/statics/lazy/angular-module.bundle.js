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
/******/ 	return __webpack_require__(__webpack_require__.s = 234);
/******/ })
/************************************************************************/
/******/ ({

/***/ 234:
/*!********************************!*\
  !*** ./lazy/angular-module.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var myApp = angular.module('myApp', ['ngRoute']);

var MyCompController = function MyCompController(props) {
  _classCallCheck(this, MyCompController);

  this.value = 'angular-input-value';
  this.props = props;
};

myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({ enabled: true, requireBase: false });
  $routeProvider.when('/ng-router-app/a', { template: '<div>BAZINGA!</div>' }).when('/ng-router-app/b', { template: '<div>STAGADISH!</div>' }).otherwise('/ng-router-app/a');
});

myApp.component('myComp', {
  template: '<div>\n    <div id="value-in-angular">{{$ctrl.props().value}}</div>\n    <input id="angular-input" ng-model="$ctrl.value" />\n    <div>\n      <router-link id="bazinga" to="/ng-router-app/a">a</router-link>\n      <router-link id="stagadish" to="/ng-router-app/b">b</router-link>\n      <router-link id="react-app-link" to="/rt-router-app/">rt-router-app</router-link>\n      <ng-view></ng-view>\n      <module-registry component="Hello" props="{value: $ctrl.value}"></module-registry>\n    </div>\n  </div>',
  controller: MyCompController
});

var myApp2 = angular.module('myApp2', ['ui.router']);

var MyCompController2 = function MyCompController2(props) {
  _classCallCheck(this, MyCompController2);

  this.value = 'angular-input-value';
  this.props = props;
};

myApp2.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode({ enabled: true, requireBase: false });
  $stateProvider.state('a', { url: '/ui-router-app/a', template: 'BAZINGA!' });
  $stateProvider.state('b', { url: '/ui-router-app/b', template: 'STAGADISH!' });
  $urlRouterProvider.otherwise('/ui-router-app/a');
});

myApp2.component('myComp', {
  template: '<div>\n    <div id="value-in-angular">{{$ctrl.props().value}}</div>\n    <div id="value-of-resolved-experiments">{{$ctrl.props().experiments}}</div>\n    <div id="value-of-resolved-custom-data">{{$ctrl.props().customData}}</div>\n    <input id="angular-input" ng-model="$ctrl.value" />\n    <div>\n      <a id="bazinga" ui-sref="a">a</a>\n      <a id="stagadish" ui-sref="b">b</a>\n      <router-link id="react-app-link" to="/rt-router-app/">rt-router-app</router-link>\n      <div><ui-view></ui-view></div>\n      <module-registry component="Hello" props="{value: $ctrl.value}"></module-registry>\n    </div>\n  </div>',
  controller: MyCompController2
});

var SHARED_TEMPLATE = '\n  <div class="demo-shared">\n    <div class="demo-4">demo-4</div>\n    <div class="demo-5">demo-5</div>\n  </div>';

angular.module('myApp4', []).component('myComp', { template: SHARED_TEMPLATE });

angular.module('myApp5', []).component('myComp', { template: SHARED_TEMPLATE });

/***/ })

/******/ });
//# sourceMappingURL=angular-module.bundle.js.map