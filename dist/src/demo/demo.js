'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _moduleRegistry = require('../module-registry');

var _moduleRegistry2 = _interopRequireDefault(_moduleRegistry);

var _EventListener = require('./EventListener');

var _reactRouter = require('react-router');

var _demo = require('./demo.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'react-input-value';
  var action = arguments[1];

  return action.type === 'assign' ? action.value : state;
});
var withStore = (0, _reactRedux.connect)(function (state) {
  return { value: state };
}, function (dispatch) {
  return { assign: function assign(value) {
      return dispatch({ type: 'assign', value: value });
    } };
});

var topology = {
  staticsUrl: 'http://localhost:3200/lazy/',
  baseUrl: 'http://localhost:3200/'
};
var rootElement = document.getElementById('root');
var MyApp = { MyNgComp: _moduleRegistry2.default.component('MyApp.MyNgComp') };
var MyApp2 = { MyNgComp: _moduleRegistry2.default.component('MyApp2.MyNgComp') };
var MyApp3 = { MyReactComp: _moduleRegistry2.default.component('MyApp3.MyReactComp') };
var MyApp4 = { MyNgComp: _moduleRegistry2.default.component('MyApp4.MyNgComp') };
var MyApp5 = { MyNgComp: _moduleRegistry2.default.component('MyApp5.MyNgComp') };
var MyApp5NoUnloadCss = { MyNgComp: _moduleRegistry2.default.component('MyApp5NoUnloadCss.MyNgComp') };
var MyApp6 = { MyReactCompCrossOrigin: _moduleRegistry2.default.component('MyApp6.MyReactCompCrossOrigin') };
var MyApp7 = { MyReactComp: _moduleRegistry2.default.component('MyApp7.MyReactComp') };
var MyApp8 = { MyReactComp: _moduleRegistry2.default.component('MyApp8.MyReactComp') };

var SplatLink = (0, _reactRouter.withRouter)(function (props) {
  var newProps = { to: props.to, className: props.className, style: props.style };
  if (props.location.pathname.indexOf(props.to) === 0) {
    newProps.style = _extends({}, props.style, props.activeStyle);
    newProps.className = (props.className || '') + ' ' + (props.activeClassName || '');
  }
  return _react2.default.createElement(
    _reactRouter.Link,
    newProps,
    props.children
  );
});
var Navigation = withStore(function (props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_EventListener.EventsListener, null),
    _react2.default.createElement('input', { id: 'react-input', value: props.value, onChange: function onChange(e) {
        return props.assign(e.target.value);
      } }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      SplatLink,
      _extends({}, props, { to: '/ng-router-app/a', activeClassName: _demo.activeLink, className: 'nav' }),
      'ng-router-app'
    ),
    '\xA0',
    _react2.default.createElement(
      SplatLink,
      _extends({}, props, { to: '/ui-router-app/', activeClassName: _demo.activeLink, className: 'nav' }),
      'ui-router-app'
    ),
    '\xA0',
    _react2.default.createElement(
      SplatLink,
      _extends({}, props, { to: '/rt-router-app/', activeClassName: _demo.activeLink, className: 'nav' }),
      'rt-router-app'
    ),
    '\xA0',
    _react2.default.createElement(
      SplatLink,
      _extends({}, props, { to: '/ng-router-app/b', activeClassName: _demo.activeLink, className: 'nav' }),
      'ng-router-app'
    ),
    '\xA0',
    _react2.default.createElement(
      SplatLink,
      _extends({}, props, { to: '/ng-router-app4', activeClassName: _demo.activeLink, className: 'nav' }),
      'ng-router-app4'
    ),
    '\xA0',
    _react2.default.createElement(
      SplatLink,
      _extends({}, props, { to: '/ng-router-app5', activeClassName: _demo.activeLink, className: 'nav' }),
      'ng-router-app5'
    ),
    '\xA0',
    _react2.default.createElement(
      SplatLink,
      _extends({}, props, { to: '/ng-router-app5-no-unload-css', activeClassName: _demo.activeLink, className: 'nav' }),
      'ng-router-app5-no-unload-css'
    ),
    '\xA0',
    _react2.default.createElement(
      SplatLink,
      _extends({}, props, { to: '/rt-router-app6', activeClassName: _demo.activeLink, className: 'nav' }),
      'rt-router-app6'
    ),
    '\xA0',
    _react2.default.createElement(
      SplatLink,
      _extends({}, props, { to: '/rt-router-app7', activeClassName: _demo.activeLink, className: 'nav' }),
      'rt-router-app7'
    ),
    '\xA0',
    _react2.default.createElement(
      SplatLink,
      _extends({}, props, { to: '/rt-router-app8', activeClassName: _demo.activeLink, className: 'nav' }),
      'rt-router-app8'
    ),
    '\xA0',
    _react2.default.createElement(
      'div',
      { style: { marginTop: '15px' } },
      props.children
    )
  );
});
Navigation.propTypes = {
  children: _propTypes2.default.any
};

var Home = function Home() {
  return _react2.default.createElement(
    'span',
    { id: 'hello' },
    'hello'
  );
};

var App = withStore((0, _reactRouter.withRouter)(function (props) {
  return _react2.default.createElement(MyApp.MyNgComp, _extends({ topology: topology }, props));
}));
var App2 = withStore((0, _reactRouter.withRouter)(function (props) {
  return _react2.default.createElement(MyApp2.MyNgComp, _extends({ topology: topology }, props));
}));
var App3 = withStore((0, _reactRouter.withRouter)(function (props) {
  return _react2.default.createElement(MyApp3.MyReactComp, _extends({ topology: topology }, props));
}));
var App4 = withStore((0, _reactRouter.withRouter)(function (props) {
  return _react2.default.createElement(MyApp4.MyNgComp, _extends({ topology: topology }, props));
}));
var App5 = withStore((0, _reactRouter.withRouter)(function (props) {
  return _react2.default.createElement(MyApp5.MyNgComp, _extends({ topology: topology }, props));
}));
var App5NoUnloadModule = withStore((0, _reactRouter.withRouter)(function (props) {
  return _react2.default.createElement(MyApp5NoUnloadCss.MyNgComp, _extends({ topology: topology }, props));
}));
var App6 = withStore((0, _reactRouter.withRouter)(function (props) {
  return _react2.default.createElement(MyApp6.MyReactCompCrossOrigin, _extends({ topology: topology }, props));
}));
var App7 = withStore((0, _reactRouter.withRouter)(function (props) {
  return _react2.default.createElement(MyApp7.MyReactComp, _extends({ topology: topology }, props));
}));
var App8 = withStore((0, _reactRouter.withRouter)(function (props) {
  return _react2.default.createElement(MyApp8.MyReactComp, _extends({ topology: topology }, props));
}));

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: Navigation },
      _react2.default.createElement(_reactRouter.IndexRoute, { component: Home }),
      _react2.default.createElement(_reactRouter.Route, { path: '/ng-router-app/**', component: App }),
      _react2.default.createElement(_reactRouter.Route, { path: '/ui-router-app/**', component: App2 }),
      _react2.default.createElement(_reactRouter.Route, { path: '/rt-router-app/**', component: App3 }),
      _react2.default.createElement(_reactRouter.Route, { path: '/ng-router-app4', component: App4 }),
      _react2.default.createElement(_reactRouter.Route, { path: '/ng-router-app5', component: App5 }),
      _react2.default.createElement(_reactRouter.Route, { path: '/ng-router-app5-no-unload-css', component: App5NoUnloadModule }),
      _react2.default.createElement(_reactRouter.Route, { path: '/rt-router-app6', component: App6 }),
      _react2.default.createElement(_reactRouter.Route, { path: '/rt-router-app7', component: App7 }),
      _react2.default.createElement(_reactRouter.Route, { path: '/rt-router-app8', component: App8 })
    )
  )
), rootElement);