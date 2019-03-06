'use strict';

require('mocha');

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _moduleRegistry = require('../src/module-registry');

var _moduleRegistry2 = _interopRequireDefault(_moduleRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_chai2.default.use(_sinonChai2.default);

describe('Module Registry', function () {
  beforeEach(function () {
    _moduleRegistry2.default.cleanAll();
  });

  it('should be able to register a module', function () {
    var MyModule = function MyModule() {
      _classCallCheck(this, MyModule);
    };

    _moduleRegistry2.default.registerModule('GLOBAL_ID', MyModule);
    var result = _moduleRegistry2.default.getModule('GLOBAL_ID');
    (0, _chai.expect)(result).to.be.an.instanceOf(MyModule);
  });

  it('should be able to pass parameters to the register a module', function () {
    var MyModule = function MyModule(name) {
      _classCallCheck(this, MyModule);

      this.name = name;
    };

    _moduleRegistry2.default.registerModule('GLOBAL_ID', MyModule, ['DUMMY_NAME']);
    var result = _moduleRegistry2.default.getModule('GLOBAL_ID');
    (0, _chai.expect)(result.name).to.eq('DUMMY_NAME');
  });

  it('should throw an error if the given module was already registered', function () {
    var MyModule = function MyModule() {
      _classCallCheck(this, MyModule);
    };

    (0, _chai.expect)(function () {
      return _moduleRegistry2.default.registerModule('GLOBAL_ID', MyModule);
    }).to.not.throw();
    (0, _chai.expect)(function () {
      return _moduleRegistry2.default.registerModule('GLOBAL_ID', MyModule);
    }).to.throw();
  });

  it('should be able to get all modules', function () {
    var MyModule1 = function MyModule1() {
      _classCallCheck(this, MyModule1);
    };

    var MyModule2 = function MyModule2() {
      _classCallCheck(this, MyModule2);
    };

    var MyModule3 = function MyModule3() {
      _classCallCheck(this, MyModule3);
    };

    _moduleRegistry2.default.registerModule('GLOBAL_ID1', MyModule1);
    _moduleRegistry2.default.registerModule('GLOBAL_ID2', MyModule2);
    _moduleRegistry2.default.registerModule('GLOBAL_ID3', MyModule3);

    var allModules = _moduleRegistry2.default.getAllModules();
    (0, _chai.expect)(allModules.length).to.eq(3);
    (0, _chai.expect)(allModules.find(function (m) {
      return m instanceof MyModule1;
    })).to.be.an.instanceOf(MyModule1);
    (0, _chai.expect)(allModules.find(function (m) {
      return m instanceof MyModule2;
    })).to.be.an.instanceOf(MyModule2);
    (0, _chai.expect)(allModules.find(function (m) {
      return m instanceof MyModule3;
    })).to.be.an.instanceOf(MyModule3);
  });

  it('should be able to register a method and call it', function () {
    var method = _sinon2.default.spy();
    _moduleRegistry2.default.registerMethod('GLOBAL_ID', function () {
      return method;
    });
    _moduleRegistry2.default.invoke('GLOBAL_ID', 1, 2, 3);
    (0, _chai.expect)(method).calledWith(1, 2, 3);
  });

  it('should be able to register a component', function () {
    var component = function component() {
      return '<div>FAKE_COMPONENT</div>';
    };
    _moduleRegistry2.default.registerComponent('GLOBAL_ID', component);
    var resultComponent = _moduleRegistry2.default.component('GLOBAL_ID');
    (0, _chai.expect)(resultComponent).to.eq('<div>FAKE_COMPONENT</div>');
  });

  it('should notify all event listeners', function () {
    var listener1 = _sinon2.default.spy();
    var listener2 = _sinon2.default.spy();
    _moduleRegistry2.default.addListener('GLOBAL_ID', listener1);
    _moduleRegistry2.default.addListener('GLOBAL_ID', listener2);
    _moduleRegistry2.default.notifyListeners('GLOBAL_ID', 1, 2, 3);
    (0, _chai.expect)(listener1).calledWith(1, 2, 3);
    (0, _chai.expect)(listener2).calledWith(1, 2, 3);
  });

  it('should clean all the methods, components, events, and modules when calling cleanAll', function () {
    _moduleRegistry2.default.registerModule('GLOBAL_ID', function MyModule() {
      _classCallCheck(this, MyModule);
    });
    _moduleRegistry2.default.registerMethod('GLOBAL_ID', function () {
      return function () {};
    });
    _moduleRegistry2.default.registerComponent('GLOBAL_ID', function () {});
    _moduleRegistry2.default.addListener('GLOBAL_ID', function () {});

    _moduleRegistry2.default.cleanAll();

    (0, _chai.expect)(_moduleRegistry2.default.getModule('GLOBAL_ID')).to.be.undefined;
    (0, _chai.expect)(_moduleRegistry2.default.notifyListeners('GLOBAL_ID')).to.be.undefined;
    (0, _chai.expect)(_moduleRegistry2.default.component('GLOBAL_ID')).to.be.undefined;
    (0, _chai.expect)(_moduleRegistry2.default.invoke('GLOBAL_ID')).to.be.undefined;
  });
});