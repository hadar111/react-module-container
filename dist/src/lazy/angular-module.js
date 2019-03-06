'use strict';

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