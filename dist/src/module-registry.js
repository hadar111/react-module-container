'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = require('lodash/set');

var _set2 = _interopRequireDefault(_set);

var _unset = require('lodash/unset');

var _unset2 = _interopRequireDefault(_unset);

var _forEach = require('lodash/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

var _uniqueId = require('lodash/uniqueId');

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