'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyReactComp8 = exports.MyReactComp7 = exports.MyNgApp5NoUnloadCss = exports.MyNgComp5 = exports.MyNgComp4 = exports.MyReactCompCrossOrigin = exports.MyReactComp = exports.MyNgComp2 = exports.MyNgComp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = require('react-router');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global React, AngularLazyComponent, ReactLazyComponent, ModuleRegistry */


var MyNgComp = exports.MyNgComp = function (_AngularLazyComponent) {
  _inherits(MyNgComp, _AngularLazyComponent);

  function MyNgComp(props) {
    _classCallCheck(this, MyNgComp);

    return _possibleConstructorReturn(this, (MyNgComp.__proto__ || Object.getPrototypeOf(MyNgComp)).call(this, props, {
      files: [props.topology.staticsUrl + 'angular-module.bundle.js'],
      module: 'myApp',
      component: 'my-comp'
    }));
  }

  return MyNgComp;
}(AngularLazyComponent);

var MyNgComp2 = exports.MyNgComp2 = function (_AngularLazyComponent2) {
  _inherits(MyNgComp2, _AngularLazyComponent2);

  function MyNgComp2(props) {
    _classCallCheck(this, MyNgComp2);

    return _possibleConstructorReturn(this, (MyNgComp2.__proto__ || Object.getPrototypeOf(MyNgComp2)).call(this, props, {
      files: [props.topology.staticsUrl + 'angular-module.bundle.js'],
      resolve: function resolve() {
        var experimentsPromise = Promise.resolve({ 'specs.fed.ReactModuleContainerWithResolve': true });
        var customDataPromise = Promise.resolve({ user: 'xiw@wix.com' });
        return Promise.all([experimentsPromise, customDataPromise]).then(function (results) {
          return {
            experiments: results[0],
            customData: results[1]
          };
        });
      },
      module: 'myApp2',
      component: 'my-comp'
    }));
  }

  return MyNgComp2;
}(AngularLazyComponent);

var MyReactComp = exports.MyReactComp = function (_ReactLazyComponent) {
  _inherits(MyReactComp, _ReactLazyComponent);

  function MyReactComp(props) {
    _classCallCheck(this, MyReactComp);

    return _possibleConstructorReturn(this, (MyReactComp.__proto__ || Object.getPrototypeOf(MyReactComp)).call(this, props, {
      files: [props.topology.staticsUrl + 'react-module.bundle.js'],
      resolve: function resolve() {
        var experimentsPromise = Promise.resolve({ 'specs.fed.ReactModuleContainerWithResolve': true });
        var customDataPromise = Promise.resolve({ user: 'xiw@wix.com' });
        return Promise.all([experimentsPromise, customDataPromise]).then(function (results) {
          return {
            experiments: results[0],
            customData: results[1]
          };
        });
      },
      component: 'MyApp3.RealReactComp'
    }));
  }

  return MyReactComp;
}(ReactLazyComponent);

var MyReactCompCrossOrigin = exports.MyReactCompCrossOrigin = function (_ReactLazyComponent2) {
  _inherits(MyReactCompCrossOrigin, _ReactLazyComponent2);

  function MyReactCompCrossOrigin(props) {
    _classCallCheck(this, MyReactCompCrossOrigin);

    return _possibleConstructorReturn(this, (MyReactCompCrossOrigin.__proto__ || Object.getPrototypeOf(MyReactCompCrossOrigin)).call(this, props, {
      files: [props.topology.staticsUrl + 'react-module.bundle.js'],
      crossorigin: true,
      component: 'MyApp6.RealReactCompCrossOrigin'
    }));
  }

  return MyReactCompCrossOrigin;
}(ReactLazyComponent);

var Hello = function (_React$Component) {
  _inherits(Hello, _React$Component);

  function Hello(props) {
    _classCallCheck(this, Hello);

    var _this5 = _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).call(this, props));

    _this5.state = { counter: 0 };
    return _this5;
  }

  _createClass(Hello, [{
    key: 'handleClick',
    value: function handleClick() {
      this.setState({ counter: this.state.counter + 1 });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { onClick: function onClick() {
              return _this6.handleClick();
            } },
          React.createElement(
            'div',
            null,
            'React Counter (click me): ',
            React.createElement(
              'span',
              { id: 'counter' },
              this.state.counter
            ),
            '!!!'
          ),
          React.createElement(
            'div',
            { id: 'value-in-react' },
            this.props.value
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            _reactRouter.Link,
            { className: 'react-link', to: '/ng-router-app/a' },
            'ng-route-app'
          ),
          '\xA0',
          React.createElement(
            _reactRouter.Link,
            { className: 'react-link', to: '/ui-router-app/' },
            'ui-route-app'
          ),
          '\xA0'
        )
      );
    }
  }]);

  return Hello;
}(React.Component);

Hello.propTypes = {
  value: _propTypes2.default.string
};

var MyNgComp4 = exports.MyNgComp4 = function (_AngularLazyComponent3) {
  _inherits(MyNgComp4, _AngularLazyComponent3);

  function MyNgComp4(props) {
    _classCallCheck(this, MyNgComp4);

    return _possibleConstructorReturn(this, (MyNgComp4.__proto__ || Object.getPrototypeOf(MyNgComp4)).call(this, props, {
      files: [props.topology.staticsUrl + 'angular-module.bundle.js', props.topology.baseUrl + 'demo-shared.css', props.topology.baseUrl + 'demo-4.css'],
      module: 'myApp4',
      component: 'my-comp'
    }));
  }

  return MyNgComp4;
}(AngularLazyComponent);

var MyNgComp5 = exports.MyNgComp5 = function (_AngularLazyComponent4) {
  _inherits(MyNgComp5, _AngularLazyComponent4);

  function MyNgComp5(props) {
    _classCallCheck(this, MyNgComp5);

    return _possibleConstructorReturn(this, (MyNgComp5.__proto__ || Object.getPrototypeOf(MyNgComp5)).call(this, props, {
      unloadStylesOnDestroy: true,
      files: [props.topology.staticsUrl + 'angular-module.bundle.js', props.topology.baseUrl + 'demo-shared.css', props.topology.baseUrl + 'demo-5.css'],
      module: 'myApp5',
      component: 'my-comp'
    }));
  }

  return MyNgComp5;
}(AngularLazyComponent);

var MyNgApp5NoUnloadCss = exports.MyNgApp5NoUnloadCss = function (_MyNgComp) {
  _inherits(MyNgApp5NoUnloadCss, _MyNgComp);

  function MyNgApp5NoUnloadCss(props) {
    _classCallCheck(this, MyNgApp5NoUnloadCss);

    var _this9 = _possibleConstructorReturn(this, (MyNgApp5NoUnloadCss.__proto__ || Object.getPrototypeOf(MyNgApp5NoUnloadCss)).call(this, props));

    _this9.manifest.unloadStylesOnDestroy = false;
    return _this9;
  }

  return MyNgApp5NoUnloadCss;
}(MyNgComp5);

var MyReactComp7 = exports.MyReactComp7 = function (_ReactLazyComponent3) {
  _inherits(MyReactComp7, _ReactLazyComponent3);

  function MyReactComp7(props) {
    _classCallCheck(this, MyReactComp7);

    return _possibleConstructorReturn(this, (MyReactComp7.__proto__ || Object.getPrototypeOf(MyReactComp7)).call(this, props, {
      files: [props.topology.staticsUrl + 'react-module.bundle.js', props.topology.baseUrl + 'demo-shared.css', props.topology.baseUrl + 'demo-4.css'],
      component: 'MyApp7.RealReactComp'
    }));
  }

  return MyReactComp7;
}(ReactLazyComponent);

var MyReactComp8 = exports.MyReactComp8 = function (_ReactLazyComponent4) {
  _inherits(MyReactComp8, _ReactLazyComponent4);

  function MyReactComp8(props) {
    _classCallCheck(this, MyReactComp8);

    return _possibleConstructorReturn(this, (MyReactComp8.__proto__ || Object.getPrototypeOf(MyReactComp8)).call(this, props, {
      files: [props.topology.staticsUrl + 'react-module.bundle.js', props.topology.baseUrl + 'demo-shared.css', props.topology.baseUrl + 'demo-5.css'],
      component: 'MyApp7.RealReactComp',
      unloadStylesOnDestroy: false
    }));
  }

  return MyReactComp8;
}(ReactLazyComponent);

ModuleRegistry.registerComponent('MyApp.MyNgComp', function () {
  return MyNgComp;
});
ModuleRegistry.registerComponent('MyApp2.MyNgComp', function () {
  return MyNgComp2;
});
ModuleRegistry.registerComponent('MyApp3.MyReactComp', function () {
  return MyReactComp;
});
ModuleRegistry.registerComponent('Hello', function () {
  return Hello;
});
ModuleRegistry.registerComponent('MyApp4.MyNgComp', function () {
  return MyNgComp4;
});
ModuleRegistry.registerComponent('MyApp5.MyNgComp', function () {
  return MyNgComp5;
});
ModuleRegistry.registerComponent('MyApp5NoUnloadCss.MyNgComp', function () {
  return MyNgApp5NoUnloadCss;
});
ModuleRegistry.registerComponent('MyApp6.MyReactCompCrossOrigin', function () {
  return MyReactCompCrossOrigin;
});
ModuleRegistry.registerComponent('MyApp7.MyReactComp', function () {
  return MyReactComp7;
});
ModuleRegistry.registerComponent('MyApp8.MyReactComp', function () {
  return MyReactComp8;
});