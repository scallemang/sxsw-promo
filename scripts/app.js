'use strict';
//Register app level module defined in mvc modules
angular.module('myApp', [
  //Angular Dependencies
  'ngRoute',
  //Register page modules
  'myApp.home',
  'myApp.pack',
  'myApp.contact',
  //Register component modules
  'myApp.topper'
]).
config(['$routeProvider', function($routeProvider) {
  //Home is default
  $routeProvider
    .when( '/', { redirectTo: '/home.html' })
    .otherwise({ redirectTo: '/home' });
}]);