'use strict';

angular.module('myApp.page', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/page', {
    templateUrl: '/mvc/page/page.html',
    controller: 'PageCtrl'
  });
}])

.controller('PageCtrl', [function() {

}]);