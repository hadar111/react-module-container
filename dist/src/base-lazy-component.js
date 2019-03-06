'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moduleRegistry = require('./module-registry');

var _moduleRegistry2 = _interopRequireDefault(_moduleRegistry);

var _tagAppender = require('./tag-appender');

var _assign = require('lodash/assign');

var _assign2 = _interopRequireDefault(_assign);

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