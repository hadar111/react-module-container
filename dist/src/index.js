'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moduleRegistry = require('./module-registry');

Object.defineProperty(exports, 'ModuleRegistry', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_moduleRegistry).default;
  }
});

var _reactLazyComponent = require('./react-lazy-component');

Object.defineProperty(exports, 'ReactLazyComponent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reactLazyComponent).default;
  }
});

var _angularLazyComponent = require('./angular-lazy-component');

Object.defineProperty(exports, 'AngularLazyComponent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_angularLazyComponent).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }