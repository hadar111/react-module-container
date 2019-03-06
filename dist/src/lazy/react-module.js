'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = require('react-router');

var _moduleRegistry = require('../module-registry');

var _moduleRegistry2 = _interopRequireDefault(_moduleRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RealReactComp = function RealReactComp(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      props.value
    ),
    _react2.default.createElement(
      'div',
      { id: 'value-of-resolved-experiments' },
      JSON.stringify(props.experiments)
    ),
    _react2.default.createElement(
      'div',
      { id: 'value-of-resolved-custom-data' },
      JSON.stringify(props.customData)
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactRouter.Link,
        { className: 'react-link', to: '/ng-router-app/a' },
        'ng-route-app'
      ),
      '\xA0',
      _react2.default.createElement(
        _reactRouter.Link,
        { className: 'react-link', to: '/ui-router-app/' },
        'ui-route-app'
      ),
      '\xA0'
    )
  );
};
RealReactComp.propTypes = {
  value: _propTypes2.default.any,
  experiments: _propTypes2.default.any,
  customData: _propTypes2.default.any
};
_moduleRegistry2.default.registerComponent('MyApp3.RealReactComp', function () {
  return RealReactComp;
});

var RealReactCompCrossOrigin = function RealReactCompCrossOrigin(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { id: 'react-cross-origin' },
      props.value
    )
  );
};
RealReactCompCrossOrigin.propTypes = {
  value: _propTypes2.default.any
};
_moduleRegistry2.default.registerComponent('MyApp6.RealReactCompCrossOrigin', function () {
  return RealReactCompCrossOrigin;
});

var DemoReactComp = function DemoReactComp() {
  return _react2.default.createElement(
    'div',
    { className: 'demo-shared' },
    _react2.default.createElement(
      'div',
      { className: 'demo-4' },
      'demo-4'
    ),
    _react2.default.createElement(
      'div',
      { className: 'demo-5' },
      'demo-5'
    )
  );
};
_moduleRegistry2.default.registerComponent('MyApp7.RealReactComp', function () {
  return DemoReactComp;
});