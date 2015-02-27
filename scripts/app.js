'use strict';
//Register app level module defined in mvc modules
angular.module('myApp', [
  //Angular Dependencies
  'ngRoute',
  //Register page modules
  'myApp.home',
  'myApp.page',
  //Register component modules
  'myApp.topper',
  'myApp.foot'
]).
config(['$routeProvider', function($routeProvider) {
  //Home is default
  $routeProvider
    .otherwise({ redirectTo: '/home' });
}]);