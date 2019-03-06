'use strict';

var _moduleRegistry = require('./module-registry');

var _moduleRegistry2 = _interopRequireDefault(_moduleRegistry);

var _reactLazyComponent = require('./react-lazy-component');

var _reactLazyComponent2 = _interopRequireDefault(_reactLazyComponent);

var _angularLazyComponent = require('./angular-lazy-component');

var _angularLazyComponent2 = _interopRequireDefault(_angularLazyComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.ModuleRegistry = _moduleRegistry2.default;
window.ReactLazyComponent = _reactLazyComponent2.default;
window.AngularLazyComponent = _angularLazyComponent2.default;