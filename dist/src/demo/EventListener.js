'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventsListener = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moduleRegistry = require('../module-registry');

var _moduleRegistry2 = _interopRequireDefault(_moduleRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventsListener = exports.EventsListener = function (_React$Component) {
  _inherits(EventsListener, _React$Component);

  function EventsListener(props) {
    _classCallCheck(this, EventsListener);

    var _this = _possibleConstructorReturn(this, (EventsListener.__proto__ || Object.getPrototypeOf(EventsListener)).call(this, props));

    _this.state = {
      gotStartLoadingEvent: false,
      gotComponentReady: false,
      gotComponentWillUnmount: false
    };
    return _this;
  }

  _createClass(EventsListener, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.unSubscribeStartLoading = _moduleRegistry2.default.addListener('reactModuleContainer.componentStartLoading', function () {
        _this2.setState({ gotStartLoadingEvent: true });
      });

      this.unSubscribeComponentReady = _moduleRegistry2.default.addListener('reactModuleContainer.componentReady', function () {
        _this2.setState({ gotComponentReady: true });
      });

      this.unSubscribeComponentWillUnmount = _moduleRegistry2.default.addListener('reactModuleContainer.componentWillUnmount', function () {
        _this2.setState({ gotComponentWillUnmount: true });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unSubscribeStartLoading.remove();
      this.unSubscribeComponentReady.remove();
      this.unSubscribeComponentWillUnmount.remove();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          'gotStartLoadingEvent:',
          _react2.default.createElement(
            'span',
            { id: 'got-start-loading' },
            this.state.gotStartLoadingEvent ? 'true' : 'false'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          'gotComponentReady: ',
          _react2.default.createElement(
            'span',
            { id: 'got-component-ready' },
            this.state.gotComponentReady ? 'true' : 'false'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          'gotComponentWillUnmount:',
          _react2.default.createElement(
            'span',
            { id: 'got-component-will-unmount' },
            this.state.gotComponentWillUnmount ? 'true' : 'false'
          )
        )
      );
    }
  }]);

  return EventsListener;
}(_react2.default.Component);